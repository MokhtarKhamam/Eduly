import { alpha, AppBar, Container, CSSObject, styled } from "@mui/material";

type HeaderRootProps = {
  isOffset: boolean;
};

const HeaderRoot = styled(AppBar, {
  shouldForwardProp: (prop: string) => !["isOffset", "sx"].includes(prop),
})<HeaderRootProps>(({ isOffset, theme }) => {
  const pauseZindex = { top: -1, bottom: -2 };

  const pauseStyles: CSSObject = {
    opacity: 0,
    content: '""',
    visibility: "hidden",
    position: "absolute",
    transition: theme.transitions.create(["opacity", "visibility"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
  };

  const bgStyles: CSSObject = {
    backdropFilter: "blur(6px)",
    backgroundColor: alpha(
      theme.palette.mode === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[100],
      0.8
    ),
    ...pauseStyles,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: pauseZindex.top,
    ...(isOffset && { opacity: 1, visibility: "visible" }),
  };

  return {
    zIndex: "var(--layout-header-zIndex)",
    "&::before": bgStyles,
    boxShadow: "none",
  };
});

const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "var(--color)",
  height: "var(--layout-header-mobile-height)",
  [theme.breakpoints.up("md")]: {
    height: "var(--layout-header-desktop-height)",
  },
}));

export { HeaderRoot, HeaderContainer };
