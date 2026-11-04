/**
 * schema.org structured data (JSON-LD). Every page carries the same Person and
 * WebSite nodes plus a node describing the page itself and its breadcrumb trail.
 */
import { seo, site } from '../site';

export const SITE_URL = (import.meta.env.SITE ?? 'https://rickirby.github.io').replace(/\/$/, '');
const abs = (path: string) => new URL(path, SITE_URL).toString();

export const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

export function person() {
  const p = seo.person;
  return {
    '@type': 'Person',
    '@id': personId,
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: abs('/'),
    image: abs('/assets/profile/profile-photo.png'),
    address: { '@type': 'PostalAddress', addressLocality: p.location.locality, addressCountry: p.location.country },
    worksFor: { '@type': 'Organization', name: p.worksFor.name, url: p.worksFor.url },
    alumniOf: p.alumniOf.map((a) => ({ '@type': a.type, name: a.name, ...('url' in a ? { url: a.url } : {}) })),
    knowsAbout: p.knowsAbout,
    sameAs: [site.linkedin, site.github, site.medium],
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: abs('/'),
    name: site.name,
    alternateName: site.ogSiteName,
    inLanguage: 'en',
    author: { '@id': personId },
    publisher: { '@id': personId },
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbs(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

interface PageInput {
  type: 'ProfilePage' | 'CollectionPage' | 'WebPage';
  path: string;
  name: string;
  description: string;
}

export function page({ type, path, name, description }: PageInput) {
  return {
    '@type': type,
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId },
    ...(type === 'ProfilePage' ? { mainEntity: { '@id': personId } } : { about: { '@id': personId } }),
  };
}

interface ArticleInput {
  path: string;
  headline: string;
  description: string;
  image: string;
  datePublished?: string;
  about?: string;
}

export function article({ path, headline, description, image, datePublished, about }: ArticleInput) {
  return {
    '@type': 'Article',
    '@id': `${abs(path)}#article`,
    mainEntityOfPage: abs(path),
    headline: headline.slice(0, 110),
    description,
    image: [abs(image)],
    inLanguage: 'en',
    author: { '@id': personId },
    publisher: { '@id': personId },
    isPartOf: { '@id': websiteId },
    ...(datePublished ? { datePublished } : {}),
    ...(about ? { about: { '@type': 'Organization', name: about } } : {}),
  };
}

/** Wrap nodes into one JSON-LD document. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': [person(), website(), ...nodes] };
}

/** "22 May 2025" → "2025-05-22" (the original "Created At" format). */
export function isoDate(text?: string) {
  if (!text) return undefined;
  const m = text.trim().match(/^(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})$/);
  if (!m) return undefined;
  const month = 'janfebmaraprmayjunjulaugsepoctnovdec'.indexOf(m[2].slice(0, 3).toLowerCase()) / 3 + 1;
  if (month < 1) return undefined;
  return `${m[3]}-${String(month).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
}
