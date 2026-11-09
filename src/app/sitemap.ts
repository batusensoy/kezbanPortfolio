import { MetadataRoute } from 'next';
import { ARTWORKS } from '@/data/artworks';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kezbantanli.art';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const artworkRoutes: MetadataRoute.Sitemap = ARTWORKS.map((artwork) => ({
    url: `${baseUrl}/gallery/${artwork.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...artworkRoutes];
}
