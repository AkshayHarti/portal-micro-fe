import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/about/',
  server: {
    port: 3002,
  },
  plugins: [react()],
});
