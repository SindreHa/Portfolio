import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  // Keep CRA's output folder so existing deploy settings still work
  build: { outDir: "build" },
});
