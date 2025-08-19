"use client";
import { Breakpoint, SxProps } from "@mui/material";
import React from "react";
import NavToggleButton from "./NavToggleButton";
import { NavVerticalContent } from "./NavVerticalContent";
import { NavRoot } from "../ui/sidbar/sidbar-styles";

export type NavVerticalProps = React.ComponentProps<"div"> & {
  isNavMini: boolean;
  layoutQuery?: Breakpoint;
  onToggleNav: () => void;
  isRTL?: boolean;
  sx?: SxProps;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

const NavVertical = ({
  isNavMini,
  sx,
  layoutQuery = "md",
  onToggleNav,
  isRTL = false,
  ...other
}: NavVerticalProps) => {
  return (
    <NavRoot isNavMini={isNavMini} layoutQuery={layoutQuery} isRTL={isRTL} sx={sx} {...other}>
      <NavToggleButton isNavMini={isNavMini} onClick={onToggleNav} />
      <NavVerticalContent isMini={isNavMini} />
    </NavRoot>
  );
};

export default NavVertical;
