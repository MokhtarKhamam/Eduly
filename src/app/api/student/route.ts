import { NextResponse } from "next/server";

type StudentRow = {
  id: number;
  name: string;
  completedQuestions: number;
  average: string;
  liveScore: number;
  status: "success" | "warning" | "error";
};

const demoRows: StudentRow[] = [
  {
    id: 1,
    name: "Alice Johnson",
    completedQuestions: 35,
    average: "00:45 sec",
    liveScore: 88,
    status: "success",
  },
  {
    id: 2,
    name: "Bob Smith",
    completedQuestions: 28,
    average: "01:10 sec",
    liveScore: 72,
    status: "warning",
  },
  {
    id: 3,
    name: "Charlie Brown",
    completedQuestions: 40,
    average: "00:30 sec",
    liveScore: 95,
    status: "success",
  },
  {
    id: 4,
    name: "Diana Prince",
    completedQuestions: 15,
    average: "02:05 sec",
    liveScore: 40,
    status: "error",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    completedQuestions: 20,
    average: "01:50 sec",
    liveScore: 55,
    status: "warning",
  },
  {
    id: 6,
    name: "Ethan Hunt",
    completedQuestions: 20,
    average: "01:50 sec",
    liveScore: 55,
    status: "warning",
  },
  {
    id: 7,
    name: "Ethan Hunt",
    completedQuestions: 20,
    average: "01:50 sec",
    liveScore: 55,
    status: "warning",
  },
];

export async function GET() {
  const tick = Math.floor(Date.now() / 10_000);
  const statuses: Array<"success" | "warning" | "error"> = [
    "success",
    "warning",
    "error",
  ];

  const rows = demoRows.map((row) => {
    const increment = (tick + row.id) % 5;
    const status = statuses[(row.id + tick) % statuses.length];

    return {
      ...row,
      completedQuestions: row.completedQuestions + increment,
      status,
    };
  });

  return NextResponse.json(rows, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
