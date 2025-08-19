import { GridColDef } from "@mui/x-data-grid";
import StatusComp from "../../components/ui/StatusComp";

export const getUserColumns = (t: (key: string) => string): GridColDef[] => [
  { field: "name", headerName: t("table.name"), flex: 1 },
  {
    field: "completedQuestions",
    headerName: t("table.completedQuestions"),
    flex: 1,
  },
  {
    field: "average",
    headerName: t("table.averageTimePerQuestion"),
    flex: 1,
  },
  {
    field: "liveScore",
    headerName: t("table.liveScore"),
    type: "number",
    flex: 1,
  },
  {
    field: "status",
    headerName: t("table.status"),
    sortable: false,
    flex: 1,
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
