"use client";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getUserColumns } from "../constant";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

type StudentRow = {
  id: number;
  name: string;
  completedQuestions: number;
  average: string;
  liveScore: number;
  status: "success" | "warning" | "error";
};

const UserTable = ({ rows }: { rows: StudentRow[] }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const columns = useMemo(() => getUserColumns(t), [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 10000);
    return () => clearInterval(interval);
  }, [router]);
  return (
    <Stack sx={{ width: "100%", height: "100%" }}>
      <Typography variant="h6" fontSize={16} sx={{ mb: 1 }}>
        {t("table.liveStudentData")}
      </Typography>
      <Box sx={{ flex: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          hideFooter
        />
      </Box>
    </Stack>
  );
};

export default UserTable;
