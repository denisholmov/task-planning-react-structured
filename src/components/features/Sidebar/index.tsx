import { Navigation } from "./components/Navigation";
import styles from "./styles/Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>Pro Manage</h1>
      </div>

      <Navigation />

      <div className={styles.foot}>Logout</div>
    </aside>
  );
};
