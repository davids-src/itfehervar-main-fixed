import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { ROUTES } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path === '/' ? '' : route.path}`,
    lastModified: 'lastModified' in route ? new Date(route.lastModified) : now,
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }));
}
