import { defineConfig } from 'astro/config'; // <--- THIS LINE IS THE KEY
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://digitalhealthslovakia.github.io',
  base: '/DHS_website/',
  output: 'static',
  integrations: [mdx(), sitemap()],
});