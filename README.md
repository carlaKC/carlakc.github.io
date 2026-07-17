# carlakc.github.io

Personal site for Carla Kirk-Cohen. Astro static site, deployed to GitHub Pages
via GitHub Actions. Warm, editorial "Red Fuji" aesthetic — a fixed woodblock-style
artwork background with the content on a parchment column, Manrope typography, no
dark mode.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm test         # unit tests (vitest)
```

Requires Node ≥22.12 (Astro 7).

## Content

- **Intro / About / Working on**: edit `src/pages/index.astro` and
  `src/data/working-on.json` (each project supports an optional title `url` and a
  `blurb` array whose entries are plain strings or `{ "text", "url" }` inline links).
- **Writing**: self-hosted posts are Markdown in `src/content/writing/` (copy the
  pattern, set `draft: false`). Externally-hosted / Delving Bitcoin links live in
  `src/data/writing-links.json`.
- **Appearances**: edit `src/data/appearances.json` (rendered most-recent first).
- **Socials**: `src/components/Footer.astro`.

## Design

- **Theme / layout**: `src/styles/theme.css` (palette, Manrope `@font-face`, paper
  grain, the parchment sheet, reveal-on-scroll).
- **Background artwork**: `public/background.webp` — a fixed, full-bleed layer set
  in `.page-bg`. Optimized from PNG with `cwebp`.
- **Font**: Manrope, self-hosted at `public/fonts/manrope-variable.woff2` (OFL).
- **Header / footer**: `src/components/Nav.astro`, `src/components/Footer.astro`.
