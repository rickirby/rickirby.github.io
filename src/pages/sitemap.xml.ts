/**
 * /sitemap.xml — every public page, so search engines can find them all.
 * Articles are picked up automatically from src/content/articles.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isoDate, SITE_URL } from '../lib/seo';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');
  const pages: { path: string; priority: string; lastmod?: string }[] = [
    { path: '/', priority: '1.0' },
    { path: '/portfolio', priority: '0.9' },
    { path: '/resume', priority: '0.9' },
    ...articles
      .sort((a, b) => a.data.order - b.data.order)
      .map((a) => ({ path: `/portfolio/${a.id}`, priority: '0.7', lastmod: isoDate(a.data.createdAt) })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url>\n    <loc>${new URL(p.path, SITE_URL)}</loc>\n${p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>\n` : ''}    <priority>${p.priority}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
