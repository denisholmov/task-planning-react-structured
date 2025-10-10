import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
      esbuildOptions: {},
      include: "**/*.svg?react",
      exclude: "",
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(dirname("./src")) }],
  },
});
