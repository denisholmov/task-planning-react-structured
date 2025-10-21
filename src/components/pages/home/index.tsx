import { Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import styles from "./styles/index.module.css";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>

      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <main className={styles.main}>
        <Main>
          <Outlet />
        </Main>
      </main>
    </div>
  );
};
