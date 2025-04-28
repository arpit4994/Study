import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
        yellow: {
          400: "#facc15",
        },
        gray: {
          800: "#1f2937",
          900: "#111827",
        },
      },
      boxShadow: {
        blue: "0 4px 14px 0 rgba(56, 189, 248, 0.39)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
});
