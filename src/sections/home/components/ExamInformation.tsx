import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ItemField from "./ItemField";
import CircularProgressChart from "./CircularProgressChart";
import LinearProgressChart from "./LinearProgressChart";
import { ExamData } from "@/app/api/exam/route";
import initTranslations from "@/app/i18n";

const ExamInformation = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { t } = await initTranslations((await params).locale, ["home"]);


  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exam`, { cache: "no-store" });
  const data: ExamData = await response.json();

  if (!data) return null;

  return (
    <Paper sx={{ px: 3, py: 2 }}>
      <Stack gap={3}>
        <Typography variant="h6" fontSize={16}>{t("exam.keyInformation")}</Typography>
        <Typography variant="h6" fontSize={16} fontWeight={600}>{t("exam.title")}</Typography>
        <Stack gap={1}>
          <ItemField text={data.subject} title={t("exam.fields.subject")} />
          <ItemField text={data.dateTime} title={t("exam.fields.dateTime")} />
          <ItemField text={data.totalStudent.toString()} title={t("exam.fields.totalStudent")} />
          <ItemField text={data.totalQuestion.toString()} title={t("exam.fields.totalQuestion")} />
        </Stack>
        <Stack gap={3} justifyContent="space-between" alignItems="center">
          <Typography>{t("exam.averageExamScore")}</Typography>
          <CircularProgressChart value={data.averageExamScore} />
        </Stack>
        <Stack gap={3} justifyContent="space-between" alignItems="center">
          <Typography>{t("exam.studentComplete")}</Typography>
          <LinearProgressChart value={data.studentComplete} />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ExamInformation;
