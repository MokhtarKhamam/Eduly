import { NextResponse } from "next/server";

export type ExamScoreEntry = {
  label: "excelent" | "medium" | "good" | "bad";
  value: number;
};

export type ExamData = {
  subject: string;
  dateTime: string;
  totalStudent: number;
  totalQuestion: number;
  averageExamScore: ExamScoreEntry[];
  studentComplete: number;
};

const baseExam: Omit<ExamData, "averageExamScore" | "studentComplete"> = {
  subject: "Mathematics",
  dateTime: "April 25, 2024, 10:00 AM",
  totalStudent: 50,
  totalQuestion: 40,
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export async function GET() {
  const tick = Math.floor(Date.now() / 10_000);

  const scoreBases: Array<{ label: ExamScoreEntry["label"]; base: number }> = [
    { label: "excelent", base: 73 },
    { label: "medium", base: 50 },
    { label: "good", base: 68 },
    { label: "bad", base: 37 },
  ];

  const rawValues = scoreBases.map((entry, index) => {
    const swing = (((tick + index * 2) % 13) - 6) * 0.8;
    const frac = ((tick + index) % 100) / 100;
    const value = clamp(entry.base + swing + frac, 0, 100);
    return value;
  });

  const sumRaw = rawValues.reduce((acc, v) => acc + v, 0);
  const normalized =
    sumRaw > 0 ? rawValues.map((v) => (v / sumRaw) * 100) : [25, 25, 25, 25];

  const rounded = normalized.map((v) => Math.round(v * 100) / 100);
  const sumRounded =
    Math.round(rounded.reduce((acc, v) => acc + v, 0) * 100) / 100;
  const diff = Math.round((100 - sumRounded) * 100) / 100;
  if (diff !== 0) {
    const idxMax = normalized.indexOf(Math.max(...normalized));
    rounded[idxMax] = Math.round((rounded[idxMax] + diff) * 100) / 100;
  }

  const averageExamScore: ExamScoreEntry[] = scoreBases.map((entry, index) => ({
    label: entry.label,
    value: rounded[index],
  }));

  const completeBase = 12;
  const studentComplete =
    (completeBase + tick * 3) % (baseExam.totalStudent + 1);

  const payload: ExamData = {
    ...baseExam,
    averageExamScore,
    studentComplete,
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
