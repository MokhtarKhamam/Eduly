import { alpha, styled } from "@mui/material/styles";

interface NavVerticalProps {
  isNavMini: boolean;
  isRTL?: boolean;
  layoutQuery?: "xs" | "sm" | "md" | "lg" | "xl";
}

const NavRoot = styled("div", {
  shouldForwardProp: (prop) =>
    !["isNavMini", "isRTL", "layoutQuery"].includes(prop as string),
})<Pick<NavVerticalProps, "isNavMini" | "isRTL" | "layoutQuery">>(
  ({ isNavMini, isRTL = false, layoutQuery = "md", theme }) => ({
    top: 0,
    [isRTL ? "right" : "left"]: 0,
    height: "100%",
    display: "none",
    position: "fixed",
    flexDirection: "column",
    zIndex: "var(--layout-nav-zIndex)",
    width: isNavMini
      ? "var(--layout-nav-mini-width)"
      : "var(--layout-nav-vertical-width)",
    borderRight: isRTL
      ? "none"
      : `1px solid var(--layout-nav-border-color, ${alpha(
          theme.palette.grey[500],
          0.12
        )})`,
    borderLeft: isRTL
      ? `1px solid var(--layout-nav-border-color, ${alpha(
          theme.palette.grey[500],
          0.12
        )})`
      : "none",
    transition: theme.transitions?.create(["width"], {
      easing: "var(--layout-transition-easing)",
      duration: "var(--layout-transition-duration)",
    }),
    [theme.breakpoints.up(layoutQuery)]: {
      display: "flex",
    },
  })
);

const Nav = styled("nav")({
  width: "100%",
});

const NavUl = styled("ul")({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  margin: 0,
  padding: 0,
  gap: "8px",
});

const NavItem = styled("div")<{ selected: boolean }>(({ theme, selected }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "12px",
  borderRadius: 8,
  transition: theme.transitions.create(["background-color", "color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  backgroundColor: selected
    ? alpha(theme.palette.primary.main, 0.3)
    : "transparent",
  color: selected ? theme.palette.primary.main : theme.palette.grey[700],
  "& .MuiSvgIcon-root, & svg": {
    color: "currentColor",
  },
  "&:hover": {
    backgroundColor: selected
      ? alpha(theme.palette.primary.main, 0.3)
      : theme.palette.grey[100],
    color: selected ? "#919e8e" : "#919e8e",
  },
}));

const NavLi = styled("li")<{ disabled?: boolean }>(({ disabled }) => ({
  display: "inline-block",
  cursor: disabled ? "not-allowed" : "pointer",
}));

const NavSubheader = styled("div")({
  fontWeight: 600,
  padding: "8px 12px",
  cursor: "pointer",
  userSelect: "none",
});

export { NavRoot, Nav, NavUl, NavItem, NavLi, NavSubheader };
