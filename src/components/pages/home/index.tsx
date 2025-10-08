import { Outlet } from "react-router-dom";

import { Header } from "../../features/Header";
import { Main } from "../../features/Main";
import { Sidebar } from "../../features/Sidebar";

export const HomePage = () => {
  return (
    <div>
      <Header />

      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
