// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build:{
//     outDir: 'dist',
//     sourcemap: true,
//   }
// })

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
          firebase: ["firebase/app", "firebase/database"], // Firebase split
          react: ["react", "react-dom"], // React split
          swiper: ["swiper"], // Swiper split
          toastify: ["react-toastify"], // Toastify split
        },
      },
    },
  },
});
