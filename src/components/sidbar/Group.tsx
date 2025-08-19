import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavItem, NavLi, NavSubheader, NavUl } from "../ui/sidbar/sidbar-styles";
import Link from "next/link";
import { Collapse } from "@mui/material";

type Item = { title: string; icon?: React.ReactNode; path?: string };



function NavList({
  data,
  isMini,
  selected,
  onSelect,
}: {
  data: Item;
  isMini: boolean;
  selected: boolean;
  onSelect?: () => void;
}) {
  const { t } = useTranslation();
  const href = data.path ?? "#";
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit" }} onClick={onSelect}>
      <NavItem selected={selected}>
        {data.icon}
        {!isMini && <span>{t(data.title)}</span>}
      </NavItem>
    </Link>
  );
}

function Group({
  subheader,
  items,
  isMini,
  selectedKey,
  onSelectKey,
  groupKey,
  onItemClick,
}: {
  subheader?: string;
  items: Item[];
  isMini: boolean;
  selectedKey: string | null;
  onSelectKey: (key: string) => void;
  groupKey: string;
  onItemClick?: () => void;
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  const renderContent = () => (
    <NavUl>
      {items.map((item, idx) => {
        const key = `${groupKey}:${idx}:${item.title}`;
        return (
          <NavList
            key={key}
            data={item}
            isMini={isMini}
            selected={selectedKey === key}
            onSelect={() => {
              onSelectKey(key);
              onItemClick?.();
            }}
          />
        );
      })}
    </NavUl>
  );

  return (
    <NavLi>
      {subheader ? (
        <>
          <NavSubheader onClick={() => setOpen(!open)}>{t(subheader)}</NavSubheader>
          <Collapse in={open}>{renderContent()}</Collapse>
        </>
      ) : (
        renderContent()
      )}
    </NavLi>
  );
}

export default Group