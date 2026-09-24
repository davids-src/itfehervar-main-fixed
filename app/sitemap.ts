import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { ROUTES } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }));
}
