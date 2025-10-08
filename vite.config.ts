import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(dirname("./src")) }],
  },
});
