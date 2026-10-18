import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// /styleguide exists only under `astro dev`: the page lives outside src/pages
// and is injected here, so `astro build` never emits it.
const devStyleguide = {
  name: 'dev-styleguide',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command === 'dev') injectRoute({ pattern: '/styleguide', entrypoint: './src/styleguide/Styleguide.astro' });
    },
  },
};

export default defineConfig({
  site: 'https://martinmokros.com',
  integrations: [devStyleguide, sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],
  vite: {
    server: {
      watch: {
        ignored: ['**/public/potree/**'],
      },
    },
  },
});
