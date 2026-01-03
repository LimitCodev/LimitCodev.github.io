import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Para repositorios tipo <usuario>.github.io la base debe ser '/'
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias para simplificar rutas
      '@': path.resolve(__dirname, './src'),
      // Alias necesario para que las imágenes de Figma carguen correctamente
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
})
