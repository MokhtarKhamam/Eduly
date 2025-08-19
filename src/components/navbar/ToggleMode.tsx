import { IconButton, useColorScheme } from "@mui/material";
import React, { useCallback } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const ToggleMode = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  const toggleDarkTheme = useCallback(() => {
    if (mode) {
      const currMode = mode === "dark" ? "light" : "dark";
      setMode(currMode);
    }
  }, [mode, systemMode]);
  return (
    <IconButton sx={{p:0}} size="small" color="inherit" onClick={() => toggleDarkTheme()}>
      {mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </IconButton>
  );
};

export default ToggleMode;
