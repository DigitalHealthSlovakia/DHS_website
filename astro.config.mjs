import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://digitalhealthslovakia.github.io',
  // Using './' ensures the site works in ANY folder (GitHub or Azure)
  base: './', 
  trailingSlash: 'always',
  build: {
    assets: '_assets'
  },
  integrations: [mdx(), sitemap()],
});