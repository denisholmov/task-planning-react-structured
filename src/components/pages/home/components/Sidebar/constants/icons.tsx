import type { NavbarItem } from "@/src/components/ui/NavbarSimple/types";

import { AnalyticIcon } from "@/src/components/ui/icons/AnalyticIcon";
import { BoardIcon } from "@/src/components/ui/icons/BoardIcon";
import { GridIcon } from "@/src/components/ui/icons/GridIcon";
import { LogoIcon } from "@/src/components/ui/icons/LogoIcon";
import { LogoutIcon } from "@/src/components/ui/icons/LogoutIcon";
import { SettingIcon } from "@/src/components/ui/icons/SettingIcon";

export const itemsNavigation: NavbarItem[] = [
  {
    id: "1",
    label: "Dashboard",
    link: "/dashboard",
    icon: GridIcon,
  },
  {
    id: "2",
    label: "Board",
    link: "/board",
    icon: BoardIcon,
  },
  {
    id: "3",
    label: "Analytics",
    link: "/analytics",
    icon: AnalyticIcon,
  },
  {
    id: "4",
    label: "Settings",
    link: "/settings",
    icon: SettingIcon,
  },
];

export const itemLogo = {
  label: "Pro Manage",
  icon: LogoIcon,
};

export const itemLogout = {
  label: "logout",
  icon: LogoutIcon,
  link: "/",
};
