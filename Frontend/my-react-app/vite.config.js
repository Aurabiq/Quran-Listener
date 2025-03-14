import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['electric-mistakenly-rat.ngrok-free.app'],
  },
  plugins: [react()],
})
