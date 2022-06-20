/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/quick-math/",
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/utils/setupTest.ts",
  },
});
