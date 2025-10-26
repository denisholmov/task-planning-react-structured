import { NavbarSimple } from "@/src/components/ui/NavbarSimple";

import { itemLogo, itemsNavigation, itemLogout } from "./constants/icons";
import classes from "./styles/index.module.css";

export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <NavbarSimple
        data={itemsNavigation}
        itemLogo={itemLogo}
        itemLogout={itemLogout}
      />
    </div>
  );
};
