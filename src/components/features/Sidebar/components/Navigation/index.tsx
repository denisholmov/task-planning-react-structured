import { itemsNavigation } from "./constants/icons";
import styles from "./styles/Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        {itemsNavigation.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              <a href={item.path}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
