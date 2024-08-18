import { AppConfig } from '@/app.config';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${AppConfig.baseUrl}/sitemap.xml`,
  };
}
