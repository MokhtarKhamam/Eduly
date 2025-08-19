"use client";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { createContext, useContext, useMemo } from "react";

const AppThemeContext = createContext(null);

const AppThemeProvider = (props: { children: React.ReactNode }) => {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
          disableCssColorScheme: true,
        },
        colorSchemes: {
          light: {
            palette: {
              primary: { main: "#1976d2" },
              secondary: { main: "#ff9800" },
              background: {
                default: "#f5f7fb",
                paper: "#ffffff",
              },
              text: {
                primary: "#1a1a1a",
                secondary: "#555555",
              },
              divider: "rgba(0,0,0,0.08)",
              info: { main: "#2196f3" },
              success: { main: "#4caf50" },
              warning: { main: "#ffb74d" },
              error: { main: "#f44336" },
              grey: {
                100: "#f5f5f5",
                200: "#eeeeee",
                500: "#9e9e9e",
                800: "#424242",
              },
            },
          },
          dark: {
            palette: {
              primary: { main: "#90caf9" },
              secondary: { main: "#ffb74d" },
              background: {
                default: "#141A21",
                paper: "#1e1e1e",
              },
              text: {
                primary: "#ffffff",
                secondary: "#b0b0b0",
              },
              divider: "rgba(255,255,255,0.12)",
              info: { main: "#42a5f5" },
              success: { main: "#66bb6a" },
              warning: { main: "#ffca28" },
              error: { main: "#ef5350" },
              grey: {
                100: "#2c2c2c",
                200: "#3a3a3a",
                500: "#9e9e9e",
                700: "#616161",
                900: "#121212",
              },
            },
          },
        },
      })
    );
  }, []);

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
