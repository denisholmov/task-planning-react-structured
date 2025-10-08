import { Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <header>header</header>

      <aside>sidebar</aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
