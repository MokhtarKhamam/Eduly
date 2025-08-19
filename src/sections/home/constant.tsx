import { GridColDef } from "@mui/x-data-grid";
import StatusComp from "../../components/ui/StatusComp";

export const getUserColumns = (t: (key: string) => string): GridColDef[] => [
  { field: "name", headerName: t("table.name"), minWidth: 150 },
  {
    field: "completedQuestions",
    headerName: t("table.completedQuestions"),
    sortable: false,
    minWidth: 180,
  },
  {
    field: "average",
    headerName: t("table.averageTimePerQuestion"),
    minWidth: 120,
    sortable: false,
  },
  {
    field: "liveScore",
    headerName: t("table.liveScore"),
    minWidth: 150,
  },
  {
    field: "status",
    headerName: t("table.status"),
    minWidth: 150,
    renderCell: (params) => (
      <StatusComp
        text={params.value}
        variant={
          params.value as "success" | "error" | "warning" | "info" | "default"
        }
      />
    ),
  },
];
