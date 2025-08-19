import { Paper } from "@mui/material";
import React from "react";
import UserTable from "./UserTable";

const StudentInformation = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/student`, { cache: "no-store" });
  const data = await response.json();

  console.log(data)

  return (
    <Paper sx={{ width: "100%", height: "100%", px: 3, py: 2 }}>
      <UserTable rows={data} />
    </Paper>
  );
};

export default StudentInformation;
