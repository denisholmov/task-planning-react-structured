import { NavbarSimple } from "@/src/components/ui/NavbarSimple";

import { itemLogo, itemsNavigation, itemLogout } from "./constants/icons";

export const Sidebar = () => {
  return (
    <aside>
      <NavbarSimple
        data={itemsNavigation}
        itemLogo={itemLogo}
        itemLogout={itemLogout}
      />
    </aside>
  );
};
