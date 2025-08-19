import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const LinearProgressChart = ({ value }: { value: number }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ width: "100%", height: 10, borderRadius: "20px" }}
      />
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: 600,
          fontSize: 12,
          color: "text.primary",
        }}
      >
        {Math.round(value)}%
      </Typography>
    </Box>
  );
};

export default LinearProgressChart;
