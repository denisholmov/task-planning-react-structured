import { Link } from "react-router-dom";

import type { NavigationProps } from "./types/interfaces";

import styles from "./styles/index.module.css";

export const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        {items.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <Link className={styles.link} to={item.path}>
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
