import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export const navData = [
  {
    subheader: "nav.main",
    items: [
      { title: "nav.home", path: "/", icon: <HomeOutlinedIcon fontSize="small" /> },
      {
        title: "nav.settings",
        path: "/settings",
        icon: <SettingsOutlinedIcon fontSize="small" />,
      },
    ],
  },
  {
    subheader: "nav.other",
    items: [
      {
        title: "nav.help",
        path: "/help",
        icon: <HelpOutlineOutlinedIcon fontSize="small" />,
      },
    ],
  },
];