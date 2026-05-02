import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modules = ['react', 'react-dom', 'react-router-dom', '@remix-run'];
            if (modules.some(m => id.includes(`/node_modules/${m}/`))) {
              return 'react-vendor';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
})
