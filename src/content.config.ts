import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Case-study articles. The file path is the URL:
 * src/content/articles/personal/tiba.md → /portfolio/personal/tiba
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    /** Page title (inline markdown allowed, e.g. `code`). */
    title: z.string(),
    /** Line shown under the title (the original "###" subtitle or bold lede). */
    subtitle: z.string().optional(),
    /** Label used for prev/next links (the original sidebar text). */
    navLabel: z.string().optional(),
    /** "Company Related" / "Created At" lines from the original pages. */
    company: z.string().optional(),
    createdAt: z.string().optional(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { articles };
