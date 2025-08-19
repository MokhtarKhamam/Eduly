"use client";

import type { IconButtonProps } from "@mui/material/IconButton";

import { m } from "framer-motion";
import React, { useState, useCallback, useEffect } from "react";
import { usePopover } from "@/shared/hooks/usePopover";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";

import { FlagIcon } from "@/components/flag-icon";
import { varTap, varHover, transitionTap } from "@/components/animate";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

export type LanguagePopoverProps = IconButtonProps & {
  data?: {
    value: string;
    label: string;
    countryCode: string;
  }[];
};

export function LanguagePopover({
  data = [],
  sx,
  ...other
}: LanguagePopoverProps) {
  const { open, anchorEl, onClose, onOpen } = usePopover();
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const [locale, setLocale] = useState<string>("");

  useEffect(() => {
    const nextLocale = i18n.language || data[0]?.value || "";
    setLocale(nextLocale);
  }, [i18n.language, data]);

  const currentLang = data.find((lang) => lang.value === locale);

  const handleChangeLang = useCallback(
    (newLang: string) => {
      setLocale(newLang);
      i18n.changeLanguage(newLang);

      const segments = pathname.split("/");

      if (["en", "ar"].includes(segments[1])) {
        segments[1] = newLang;
      } else {
        segments.splice(1, 0, newLang);
      }

      const newPath = segments.join("/");
      router.push(newPath);
      onClose();
    },
    [i18n, pathname, router, onClose]
  );

  const renderMenuList = () => (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.75,
          width: 160,
          minHeight: 72,
          borderRadius: 1.5,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      <MenuList sx={{ p: 0 }}>
        {data?.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang?.value}
            onClick={() => handleChangeLang(option.value)}
            sx={{
              py: 1,
              px: 2.5,
              gap: 2,
              "&.Mui-selected": {
                bgcolor: "action.selected",
              },
            }}
          >
            <FlagIcon code={option.countryCode} size={20} />
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Popover>
  );

  if (!locale) {
    return (
      <IconButton
        component={m.button}
        whileTap={varTap(0.96)}
        whileHover={varHover(1.04)}
        transition={transitionTap()}
        aria-label="Languages button"
        onClick={onOpen}
        sx={[
          (theme) => ({
            p: 0,
            width: 40,
            height: 40,
            ...(open && { bgcolor: theme.palette.action.selected }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <FlagIcon code="GB" size={20} />
      </IconButton>
    );
  }

  return (
    <>
      <IconButton
        component={m.button}
        whileTap={varTap(0.96)}
        whileHover={varHover(1.04)}
        transition={transitionTap()}
        aria-label="Languages button"
        onClick={onOpen}
        sx={[
          (theme) => ({
            p: 0,
            width: 40,
            height: 40,
            ...(open && { bgcolor: theme.palette.action.selected }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <FlagIcon code={currentLang?.countryCode} size={20} />
      </IconButton>

      {renderMenuList()}
    </>
  );
}
