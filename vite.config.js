import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    minify:'terser',
    terserOptions:{
      compress:{
        drop_console:true,
      },
    },
    outDir: 'dist',
    sourcemap: true,
  }
})
