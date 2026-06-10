import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://b2b.bdjunyang.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]
}
