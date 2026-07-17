import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carlakc.github.io',
  markdown: {
    shikiConfig: {
      themes: { light: 'solarized-light', dark: 'solarized-dark' },
      // defaultColor: false emits both --shiki-light* and --shiki-dark* CSS
      // variables (no inline default color) so solarized.css can switch code
      // colors via [data-theme] rather than prefers-color-scheme.
      defaultColor: false,
      wrap: true,
    },
  },
});
