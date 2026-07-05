import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://devrocket.io',
  base: '/',
  output: 'static',
  integrations: [
    tailwind({
      // Let Astro handle PostCSS internally
    }),
  ],
  build: {
    assets: '_assets',
  },
});
