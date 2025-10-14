import { Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import styles from "./styles/index.module.css";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
