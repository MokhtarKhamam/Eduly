"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import NavVertical from "@/components/sidbar/NavVertical";
import Navbar from "@/components/navbar/Navbar";
import MiniNavVertical from "./sidbar/MiniNavVertical";
import { useTranslation } from "react-i18next";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isNavMini, setIsNavMini] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <>
      <NavVertical
        isNavMini={isNavMini}
        onToggleNav={() => setIsNavMini((prev) => !prev)}
        isRTL={isRTL}
      />

      <MiniNavVertical
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      <Box
        component="main"
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100vh",
          [isRTL ? "pr" : "pl"]: {
            xs: 0,
            md: isNavMini
              ? "var(--layout-nav-mini-width)"
              : "var(--layout-nav-vertical-width)",
          },
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: "var(--layout-header-zIndex)",
          }}
        >
          <Navbar onOpenNav={() => setIsMobileOpen(true)} />
        </Box>
        <Box component="section" sx={{ flex: "1 1 auto" }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
