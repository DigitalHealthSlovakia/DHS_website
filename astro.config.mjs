import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://digitalhealthslovakia.github.io',
  base: '/DHS_website',
  trailingSlash: 'always', // This helps GitHub find your pages
  integrations: [mdx(), sitemap()],
});