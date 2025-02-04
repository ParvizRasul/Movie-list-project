import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://3.15.206.121:5000', // Backend API
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Ensure correct endpoint
      },
    },
  },
})
