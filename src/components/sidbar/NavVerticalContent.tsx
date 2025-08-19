import { Box } from "@mui/material";
import Logo from "../logo/Logo";
import { Nav, NavUl } from "../ui/sidbar/sidbar-styles";
import Group from "./Group";
import { useState } from "react";
import { navData } from "@/_mock/navData";

export function NavVerticalContent({
  isMini,
  onItemClick,
}: {
  isMini: boolean;
  onItemClick?: () => void;
}) {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  return (
    <>
      <Box sx={{ padding: "20px 12px 8px 12px" }}>
        <Logo />
      </Box>
      <Nav>
        <NavUl>
          {navData.map((group, idx) => (
            <Group
              key={group.subheader ?? `group-${idx}`}
              subheader={group.subheader}
              items={group.items}
              isMini={isMini}
              selectedKey={selectedKey}
              onSelectKey={setSelectedKey}
              groupKey={group.subheader ?? `group-${idx}`}
              onItemClick={onItemClick}
            />
          ))}
        </NavUl>
      </Nav>
    </>
  );
}
