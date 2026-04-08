import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/DigitalBank-FrontendMentor-/",
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
