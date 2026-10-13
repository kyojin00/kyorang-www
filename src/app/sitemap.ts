import { MetadataRoute } from 'next'
import { SITE_URL as BASE, TEMPLATES } from '@/data/studio'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/templates`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...TEMPLATES.map((t) => ({
      url: `${BASE}/templates/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE}/qna`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/refund`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
