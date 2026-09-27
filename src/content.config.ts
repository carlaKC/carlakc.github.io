import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    // Published at its URL (e.g. for review) but not listed on the home page
    // and marked noindex.
    unlisted: z.boolean().default(false),
  }),
});

export const collections = { writing };
