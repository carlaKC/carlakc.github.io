import { getCollection } from 'astro:content';

// Drafts render under `astro dev` so they can be previewed, but are never
// included in a production build.
export function getPublishedPosts() {
  return getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
}
