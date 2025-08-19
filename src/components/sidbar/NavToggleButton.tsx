import { alpha, IconButton } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

const NavToggleButton = ({
  isNavMini,
  onClick,
}: {
  isNavMini: boolean;
  onClick: () => void;
}) => {
  const { i18n } = useTranslation();

  const isRtl = i18n.language === "ar";
  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={[
        (theme) => ({
          p: 0.5,
          position: "absolute",
          color: "action.active",
          bgcolor: "background.default",
          transform: `translate(${isRtl ? "50%" : "-50%"}, -50%)`,
          zIndex: "var(--layout-nav-zIndex)",
          top: "calc(var(--layout-header-desktop-height) / 2)",
          ...(isRtl
            ? {
                right: isNavMini
                  ? "var(--layout-nav-mini-width)"
                  : "var(--layout-nav-vertical-width)",
              }
            : {
                left: isNavMini
                  ? "var(--layout-nav-mini-width)"
                  : "var(--layout-nav-vertical-width)",
              }),
          border: `1px solid ${alpha(theme.palette.grey["500"], 0.12)}`,
          transition: theme.transitions.create([isRtl ? "right" : "left"], {
            easing: "var(--layout-transition-easing)",
            duration: "var(--layout-transition-duration)",
          }),
          "&:hover": {
            color: "text.primary",
            bgcolor: "background.neutral",
          },
        }),
      ]}
    >
      {isNavMini
        ? isRtl
          ? <ChevronLeftIcon />
          : <ChevronRightIcon />
        : isRtl
        ? <ChevronRightIcon />
        : <ChevronLeftIcon />}
    </IconButton>
  );
};

export default NavToggleButton;
