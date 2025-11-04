import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://castcanvaslab.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-13'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
