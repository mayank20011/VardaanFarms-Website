import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: ["firebase/app", "firebase/database"],
          react: ["react", "react-dom"],
          swiper: ["swiper"],
          toastify: ["react-toastify"],
        },
      },
    },
  },
});
