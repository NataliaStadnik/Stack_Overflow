import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Stack_Overflow/',
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true
  },
  server: {
    proxy: {
      '/api': 'https://codelang.vercel.app/'
    }
  }
})
