import type { SVGProps } from "react";

export type NavbarItem = {
  id: string;
  label: string;
  link: string;
  icon: React.ComponentType<
    SVGProps<SVGSVGElement> & {
      size?: number;
      stroke?: string;
    }
  >;
};

export type NavbarActionItem = {
  label: string;
  icon: React.ComponentType<
    SVGProps<SVGSVGElement> & {
      stroke?: string;
    }
  >;
};

export type NavbarSimpleProps = {
  data: NavbarItem[];
  itemLogo: NavbarActionItem;
  itemLogout: NavbarActionItem;
};
