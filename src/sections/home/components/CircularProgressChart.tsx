"use client";
import { Box } from "@mui/material";
import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

type PieDatum = { label: string; value: number };

const CircularProgressChart = ({ value }: { value: PieDatum[] }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "fit-content",
      }}
    >
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 35,
            arcLabelRadius: "60%",
            data: value,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
          },
        }}
        height={200}
        width={200}
      />
    </Box>
  );
};

export default CircularProgressChart;
