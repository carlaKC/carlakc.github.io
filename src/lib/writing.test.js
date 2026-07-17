import { describe, it, expect } from 'vitest';
import { mergeWritingEntries } from './writing.js';

describe('mergeWritingEntries', () => {
  it('merges posts and links, sorted by date descending', () => {
    const posts = [
      { id: 'older-post', data: { title: 'Older Post', date: new Date('2024-01-01') } },
      { id: 'newer-post', data: { title: 'Newer Post', date: new Date('2026-01-01') } },
    ];
    const links = [
      { title: 'Mid Link', date: '2025-01-01', url: 'https://example.com/mid', source: 'delving' },
    ];

    const result = mergeWritingEntries(posts, links);

    expect(result.map((e) => e.title)).toEqual(['Newer Post', 'Mid Link', 'Older Post']);
  });

  it('maps post entries to internal hrefs and link entries to their url', () => {
    const posts = [{ id: 'my-slug', data: { title: 'P', date: new Date('2025-06-01') } }];
    const links = [{ title: 'L', date: '2025-05-01', url: 'https://x.test/a', source: 'external' }];

    const result = mergeWritingEntries(posts, links);
    const post = result.find((e) => e.title === 'P');
    const link = result.find((e) => e.title === 'L');

    expect(post).toMatchObject({ href: '/writing/my-slug/', source: 'post', external: false });
    expect(link).toMatchObject({ href: 'https://x.test/a', source: 'external', external: true });
  });

  it('returns Date objects for date and handles empty inputs', () => {
    expect(mergeWritingEntries([], [])).toEqual([]);
    const [only] = mergeWritingEntries([], [
      { title: 'L', date: '2025-05-01', url: 'https://x.test/a', source: 'delving' },
    ]);
    expect(only.date).toBeInstanceOf(Date);
  });
});
