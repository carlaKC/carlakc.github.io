# carlakc.github.io

Personal site for Carla Kirk-Cohen. Astro static site, Solarized (Alacritty) theme,
deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm test         # unit tests (vitest)
```

Requires Node ≥22.12 (Astro 7).

## Content

- **About / intro / working on**: edit `src/pages/index.astro` and `src/data/working-on.json`.
- **Writing**: self-hosted posts are Markdown in `src/content/writing/`. External /
  Delving Bitcoin links live in `src/data/writing-links.json` (edit by hand when you
  publish something new).
- **Appearances**: edit `src/data/appearances.json`.
- **Theme**: `src/styles/solarized.css`.
