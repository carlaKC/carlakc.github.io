export function mergeWritingEntries(posts, links) {
  const fromPosts = posts.map((p) => ({
    title: p.data.title,
    date: p.data.date instanceof Date ? p.data.date : new Date(p.data.date),
    href: `/writing/${p.id}/`,
    source: 'post',
    external: false,
  }));

  const fromLinks = links.map((l) => ({
    title: l.title,
    date: new Date(l.date),
    href: l.url,
    source: l.source,
    external: true,
  }));

  return [...fromPosts, ...fromLinks].sort((a, b) => b.date - a.date);
}
