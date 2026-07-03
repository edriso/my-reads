import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://edriso.github.io/my-reads/ so assets need this base.
  base: '/my-reads/',
  plugins: [react()],
});
