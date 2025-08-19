"use client"
import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const ItemField = ({ title, text }: { title: string; text: string }) => {
  const theme = useTheme();
  return (
    <Stack direction="row">
      <Typography variant="body1" sx={{ color: theme.palette.grey[500] }}>
        {title}: 
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Stack>
  );
};

export default ItemField;
