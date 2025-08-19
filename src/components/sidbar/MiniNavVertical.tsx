import { Box, Drawer } from "@mui/material";
import React from "react";
import { NavVerticalContent } from "./NavVerticalContent";

const MiniNavVertical = ({
  isMobileOpen,
  onClose,
}: {
  isMobileOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer
      anchor="left"
      open={isMobileOpen}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{ display: { xs: "block", md: "none" } }}
      PaperProps={{ sx: { width: "var(--layout-nav-vertical-width)" } }}
    >
      <Box
        role="presentation"
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <NavVerticalContent isMini={false} onItemClick={onClose} />
      </Box>
    </Drawer>
  );
};

export default MiniNavVertical;
