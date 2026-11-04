# Ricki Bin Yamin — portfolio (alternative design)

Static site built with [Astro](https://astro.build). Same pages, URLs and wording as the
original VitePress site; only the design is new.

| Page | Source |
| --- | --- |
| Home `/` | `src/pages/index.astro` |
| Portfolio `/portfolio` | `src/data/portfolio.ts` |
| Resume `/resume` | `src/data/resume.ts` |
| Articles `/portfolio/<group>/<name>` | `src/content/articles/<group>/<name>.md` |

Images live in `src/assets/` (optimised at build time). The resume PDF stays at
`/assets/profile/resume_ricki_bin_yamin.pdf`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # type check
```

Deploy: `.github/workflows/deploy.yml` builds on every push to `development` and publishes
`dist/` to GitHub Pages. Set the `CRISP_WEBSITE_ID` repository secret to enable the Crisp chat.

## SEO

Already built in:

- Page titles, descriptions and canonical URLs (`src/site.ts` → `seo`, and each page).
- `/sitemap.xml` and `/robots.txt`, generated at build time (`src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`).
- schema.org structured data (`src/lib/seo.ts`): Person, WebSite, ProfilePage, CollectionPage, Article and breadcrumbs.
- Link-preview cards for LinkedIn and others: `public/og-image.png` for the main pages and
  `public/og/<group>/<article>.png` per article. Rebuild the article cards with `npm run og`
  after changing a title or adding an article (add it to the table in `scripts/og.mjs`).

After the site is live, to get indexed faster:

1. **Google Search Console** → property `https://rickirby.github.io` (URL prefix), *HTML tag* method.
   The code is already in `src/site.ts` (`verification.google`). Press *Verify*, then open
   *Sitemaps* and submit `sitemap.xml`.
2. **Bing Webmaster Tools** → import the site from Search Console, or put Bing's meta-tag code in
   `verification.bing` in `src/site.ts`.
3. Link `https://rickirby.github.io` from your LinkedIn (Contact info → Website), GitHub profile
   and Medium bio.
