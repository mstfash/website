import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ← أضف هذا السطر

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ← هذا هو alias لـ "@"
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
