import DatabaseSvg from "@/public/favicons/database.svg?react";
import GridSvg from "@/public/favicons/grid.svg?react";
import LayoutSvg from "@/public/favicons/layout.svg?react";
import SettingsSvg from "@/public/favicons/settings.svg?react";

export const itemsNavigation = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: <GridSvg />,
  },
  {
    id: 2,
    name: "Board",
    path: "/board",
    icon: <LayoutSvg />,
  },
  {
    id: 3,
    name: "Analytics",
    path: "/analytics",
    icon: <DatabaseSvg />,
  },
  {
    id: 4,
    name: "Settings",
    path: "/settings",
    icon: <SettingsSvg />,
  },
];
