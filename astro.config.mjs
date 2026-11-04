// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rickirby.github.io',
  // Same URLs as the old VitePress site: /portfolio, /resume, /portfolio/personal/tiba …
  // `file` output writes portfolio.html, so GitHub Pages serves both /portfolio and /portfolio.html.
  build: { format: 'file' },
  trailingSlash: 'never',
  image: {
    layout: 'constrained',
    responsiveStyles: false,
    breakpoints: [480, 720, 960, 1280, 1600, 2000],
  },
  // Keep the original characters (straight quotes/apostrophes) exactly as written.
  markdown: { smartypants: false },
  devToolbar: { enabled: false },
});
