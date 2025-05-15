import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/list/',
  server: {
    port: 3001,
  },
  plugins: [react()],
});
