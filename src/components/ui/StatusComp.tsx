import React from "react";
import { Chip } from "@mui/material";

type StatusCompProps = {
  variant: "success" | "error" | "warning" | "info" | "default";
  text: string;
};

const StatusComp = ({ variant, text }: StatusCompProps) => {
  return (
    <Chip
      label={text}
      color={variant === "default" ? "default" : variant}
      variant="outlined"
      sx={{
        fontWeight: 500,
        textTransform: "capitalize",
      }}
    />
  );
};

export default StatusComp;
