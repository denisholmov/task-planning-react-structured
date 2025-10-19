import type { NavbarItem } from "@/src/components/ui/NavbarSimple/types";

import { LogoIcon } from "@/src/components/ui/icons/LogoIcon";

export const itemsNavigation: NavbarItem[] = [
  {
    id: "1",
    label: "Dashboard",
    link: "/dashboard",
    icon: LogoIcon,
  },
  {
    id: "2",
    label: "Dashboard",
    link: "/dashboard",
    icon: LogoIcon,
  },
  {
    id: "3",
    label: "Dashboard",
    link: "/dashboard",
    icon: LogoIcon,
  },
];

export const itemLogo = {
  label: "Pro Manage",
  icon: LogoIcon,
};

export const itemLogout = {
  label: "logout",
  icon: LogoIcon,
};
