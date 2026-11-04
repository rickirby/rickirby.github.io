/**
 * Builds the 1200×630 link-preview cards for the case-study articles
 * (shown by LinkedIn, WhatsApp, Slack, X… when a link is shared).
 *
 *   npm run og
 *
 * Output: public/og/<group>/<article>.png — one per file in src/content/articles.
 * Re-run after changing an article title or its preview screenshot below.
 */
import { readFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;

/** Screenshot and accent colour per article. */
const cards = {
  'personal/braille_copying_system': { image: 'port_personal_braille_apps_flow.png', tint: '#af52de' },
  'personal/scandocs_document_scanner': { image: 'port_personal_scandocs_apps_flow.png', tint: '#007aff' },
  'personal/hikanji': { image: 'port_personal_hi_kanji_slide_1.jpeg', tint: '#ff3b30' },
  'personal/tiba': { image: 'port_personal_tiba_slide_1.jpeg', tint: '#f57c00' },
  'personal/good_news': { image: 'port_personal_good_news_apps_flow.png', tint: '#28a745' },
  'stockbit/build_time_optimization': { image: 'port_sb_build_time_final_result.png', tint: '#f57c00' },
  'stockbit/linux_runner_danger_swiftlint': { image: 'port_sb_danger_lint.png', tint: '#0a9bb5' },
  'stockbit/swiftlint_quarantine_strategy': { image: 'port_sb_swiftlint_quarantine_diagram.png', tint: '#5856d6' },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function frontmatter(file) {
  const text = readFileSync(file, 'utf8');
  const block = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const data = {};
  for (const line of block.split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) data[m[1]] = m[2].replace(/^['"]|['"]$/g, '').replace(/`/g, '');
  }
  return data;
}

function wrap(text, maxChars) {
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if ((line + ' ' + word).trim().length > maxChars && line) {
      lines.push(line);
      line = word;
    } else line = (line + ' ' + word).trim();
  }
  if (line) lines.push(line);
  return lines;
}

async function card(id, data, { image, tint }) {
  const isPersonal = id.startsWith('personal/');
  const eyebrow = isPersonal ? 'Personal Project' : data.company ?? '';

  // Title: shrink until it fits in three lines.
  let size = 60;
  let lines = wrap(data.title, 17);
  if (lines.length > 3) {
    size = 46;
    lines = wrap(data.title, 23);
  }
  // Subtitle: up to three lines when the title is short, one when it is long; "…" if cut.
  const maxSub = lines.length <= 2 ? 3 : 1;
  const allSub = data.subtitle ? wrap(data.subtitle, 34) : [];
  const subtitle = allSub.slice(0, maxSub);
  if (allSub.length > maxSub) subtitle[maxSub - 1] = subtitle[maxSub - 1].replace(/[\s,.;:]*$/, '…');
  const titleTop = 200;
  const lineH = Math.round(size * 1.1);
  const subTop = titleTop + lines.length * lineH + 18;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="g1" cx="95%" cy="0%" r="70%"><stop offset="0" stop-color="#5856d6" stop-opacity=".18"/><stop offset="1" stop-color="#5856d6" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="0%" cy="0%" r="60%"><stop offset="0" stop-color="${tint}" stop-opacity=".16"/><stop offset="1" stop-color="${tint}" stop-opacity="0"/></radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="18"/></filter>
  </defs>
  <rect width="100%" height="100%" fill="#f5f5f7"/>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <rect width="100%" height="100%" fill="url(#g2)"/>

  <rect x="72" y="104" rx="17" width="${eyebrow.length * 12 + 40}" height="34" fill="${tint}" fill-opacity=".14"/>
  <text x="92" y="128" font-family="SF Pro Text, Helvetica Neue, Arial, sans-serif" font-size="19" font-weight="700" fill="${tint}">${esc(eyebrow)}</text>

  ${lines
    .map(
      (l, i) =>
        `<text x="72" y="${titleTop + (i + 1) * lineH - Math.round(size * 0.22)}" font-family="SF Pro Display, Helvetica Neue, Arial, sans-serif" font-size="${size}" font-weight="800" fill="#1d1d1f" letter-spacing="-1.5">${esc(l)}</text>`,
    )
    .join('\n  ')}
  ${subtitle
    .map(
      (l, i) =>
        `<text x="72" y="${subTop + (i + 1) * 34}" font-family="SF Pro Text, Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="500" fill="#5c5c62">${esc(l)}</text>`,
    )
    .join('\n  ')}

  <circle cx="100" cy="540" r="28" fill="#dfe9fb"/>
  <text x="144" y="534" font-family="SF Pro Display, Helvetica Neue, Arial, sans-serif" font-size="24" font-weight="700" fill="#1d1d1f">Ricki Bin Yamin</text>
  <text x="144" y="564" font-family="SF Pro Text, Helvetica Neue, Arial, sans-serif" font-size="20" font-weight="500" fill="#86868b">Sr. iOS Software Engineer</text>

  <rect x="652" y="86" width="476" height="470" rx="28" fill="#000" fill-opacity=".14" filter="url(#soft)"/>
  <rect x="640" y="70" width="490" height="490" rx="28" fill="#ffffff"/>
</svg>`;

  const shot = await sharp(join(root, 'src/assets/portfolio', image))
    .resize({ width: 450, height: 450, fit: 'inside' })
    .toBuffer({ resolveWithObject: true });
  const avatar = await sharp(join(root, 'src/assets/profile/profile-photo.png')).resize(56, 56).toBuffer();
  const mask = Buffer.from('<svg width="56" height="56"><circle cx="28" cy="28" r="28" fill="#fff"/></svg>');
  const round = await sharp(avatar).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();

  const out = join(root, 'public/og', `${id}.png`);
  mkdirSync(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg))
    .composite([
      { input: shot.data, left: 640 + Math.round((490 - shot.info.width) / 2), top: 70 + Math.round((490 - shot.info.height) / 2) },
      { input: round, left: 72, top: 512 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(out);
  return out;
}

const base = join(root, 'src/content/articles');
for (const group of readdirSync(base)) {
  for (const file of readdirSync(join(base, group)).filter((f) => f.endsWith('.md'))) {
    const id = `${group}/${file.replace(/\.md$/, '')}`;
    const look = cards[id];
    if (!look) {
      console.warn(`skipped ${id}: add it to the cards table in scripts/og.mjs`);
      continue;
    }
    console.log('wrote', (await card(id, frontmatter(join(base, group, file)), look)).replace(root + '/', ''));
  }
}
