import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change this to your real API base as soon as you send it
const API_TARGET = 'https://admin-portfolio-5ws2.onrender.com'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
