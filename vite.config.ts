import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // Los plugins de React y Tailwind son necesarios para el funcionamiento
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ para la carpeta src
      '@': path.resolve(__dirname, './src'),
      // AGREGAMOS ESTA LÍNEA: Indica que "figma:asset" es la carpeta src/assets
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
})