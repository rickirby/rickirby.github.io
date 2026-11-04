/**
 * Tiny inline-markdown renderer for the copy kept in src/data/*.ts.
 * Supports `code`, **bold**, *italic*, [links](url) and "\n" line breaks — the same
 * subset the original VitePress pages used inside list items.
 */
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function prose(s: string): string {
  return escape(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text: string, href: string) => {
      const external = /^https?:\/\//.test(href);
      return `<a href="${href}"${external ? ' target="_blank" rel="noopener"' : ''}>${text}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

export function inline(source: string): string {
  // Split on code spans first so their contents are never formatted.
  return source
    .split(/(`[^`]+`)/g)
    .map((part) => (part.startsWith('`') && part.endsWith('`') ? `<code>${escape(part.slice(1, -1))}</code>` : prose(part)))
    .join('');
}

/** Plain text version (for <title>, aria-labels, ids). */
export function plain(source: string): string {
  return source.replace(/`([^`]+)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

export function slugify(source: string): string {
  return plain(source)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
