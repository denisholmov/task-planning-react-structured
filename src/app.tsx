import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";

import { ROUTS } from "@/src/constants/application/routing";

import "./styles/index.css";

const container = document.getElementById("app")!;
const queryClient = new QueryClient();

ReactDOM.createRoot(container).render(
  <StrictMode>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={ROUTS} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>,
);
