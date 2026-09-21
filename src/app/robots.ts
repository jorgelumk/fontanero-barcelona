import { MetadataRoute } from 'next';
import { SITE_INFO } from '@/data/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/gracias/'],
      },
    ],
    sitemap: `${SITE_INFO.domain}/sitemap.xml`,
  };
}
