"use client";

import { useScrollOffsetTop } from "@/shared/hooks/useScrollOffsetTop";
import { IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderContainer, HeaderRoot } from "../ui/navbar/navbar-styles";
import { LanguagePopover } from "./LanguagePopover";
import AccountMeny from "./AccountMeny";
import ToggleMode from "./ToggleMode";
import TextLogo from "../logo/TextLogo";

type NavbarProps = {
  onOpenNav?: () => void;
};

const Navbar = ({ onOpenNav }: NavbarProps) => {
  const { isOffset } = useScrollOffsetTop(0);

  return (
    <HeaderRoot
      position="sticky"
      color="transparent"
      isOffset={isOffset}
      sx={[
        (theme) => ({
          ...(isOffset && {
            "--color": `var(--offset-color, ${theme.palette.text.primary})`,
          }),
        }),
      ]}
    >
      <HeaderContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              onClick={onOpenNav}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </IconButton>

            <TextLogo />
          </Stack>
          <Stack direction="row" gap={2} alignItems="center">
            <ToggleMode />
            <LanguagePopover
              data={[
                { value: "en", label: "English", countryCode: "GB" },
                { value: "ar", label: "Arabic", countryCode: "SA" },
              ]}
            />
            <AccountMeny />
          </Stack>
        </Stack>
      </HeaderContainer>
    </HeaderRoot>
  );
};

export default Navbar;
