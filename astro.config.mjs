import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carlakc.github.io',
  markdown: {
    shikiConfig: {
      // Single warm, low-contrast light theme to match the Red Fuji palette.
      theme: 'rose-pine-dawn',
      wrap: true,
    },
  },
});
