import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: 'root',
      filename: 'remoteEntry.js',
      exposes: {
        './About': './src/About',
        './List': './src/List',
      },
    }),
  ],
});
