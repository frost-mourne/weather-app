import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,        
    strictPort: true,  // Чтобы Vite не переключился на 5173, если 5174 занят
    host: true,        // Обязательно для Docker (соответствует --host)
  },
})
