// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // ou ton plugin actuel

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // indispensable pour Netlify
  },
})
