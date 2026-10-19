import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://irfan-resume.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react()],
});
