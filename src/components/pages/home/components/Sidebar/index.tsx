import LogoSvg from "@/public/favicons/logo.svg?react";

import { Navigation } from "./components/Navigation";
import { itemsNavigation } from "./components/Navigation/constants/icons";
import styles from "./styles/index.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.title}>
        <LogoSvg width={24} height={24} /> Pro Manage
      </h1>

      <Navigation items={itemsNavigation} />
    </aside>
  );
};
