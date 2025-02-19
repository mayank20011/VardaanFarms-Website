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
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    react(),
    purgecss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      safelist: ["some-needed-class"],
    }),
  ],
});
