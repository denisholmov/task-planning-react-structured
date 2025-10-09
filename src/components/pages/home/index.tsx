import { Outlet } from "react-router-dom";

import { Header } from "../../features/Header";
import { Main } from "../../features/Main";
import { Sidebar } from "../../features/Sidebar";
import styles from "./styles/HomePage.module.css";

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
