import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://martinmokros.com',
  vite: {
    server: {
      watch: {
        ignored: ['**/public/potree/**'],
      },
    },
  },
});