"use client";

import React from "react";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type FlagIconProps = React.ComponentProps<typeof FlagRoot> & {
  code?: string;
  size?: number;
};

export function FlagIcon({
  code,
  size = 24,
  sx,
  ...other
}: FlagIconProps) {
  if (!code) {
    return null;
  }

  return (
    <FlagRoot
      sx={[
        {
          width: size * 1.3, // Maintain aspect ratio
          height: size,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <FlagImg
        loading="lazy"
        alt={code}
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code?.toUpperCase()}.svg`}
      />
    </FlagRoot>
  );
}

// ----------------------------------------------------------------------

const FlagRoot = styled("span")(({ theme }) => ({
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: "5px",
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

const FlagImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
  maxWidth: "unset",
  objectFit: "cover",
}));
