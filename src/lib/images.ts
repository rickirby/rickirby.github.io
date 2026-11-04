import type { ImageMetadata } from 'astro';

const portfolio = import.meta.glob<ImageMetadata>('../assets/portfolio/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});
const company = import.meta.glob<ImageMetadata>('../assets/company/*.png', { eager: true, import: 'default' });

function pick(map: Record<string, ImageMetadata>, dir: string, file: string): ImageMetadata {
  const image = map[`../assets/${dir}/${file}`];
  if (!image) throw new Error(`Missing image: src/assets/${dir}/${file}`);
  return image;
}

export const portfolioImage = (file: string) => pick(portfolio, 'portfolio', file);
export const companyImage = (file: string) => pick(company, 'company', file);
