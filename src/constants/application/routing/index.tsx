import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "@/src/components/pages/error";
import { HomePage } from "@/src/components/pages/home";
import { Board } from "@/src/components/pages/home/components/Board";
import { WelcomePage } from "@/src/components/pages/welcome";

import { PagePath } from "./paths";

export const ROUTS = createBrowserRouter([
  {
    path: PagePath.Home,
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PagePath.Welcome,
        element: <WelcomePage />,
      },
      {
        path: PagePath.Board,
        element: <Board />,
      },
    ],
  },
]);
