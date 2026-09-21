import { MetadataRoute } from 'next';
import { SITE_INFO, SERVICES_LIST } from '@/data/content';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_INFO.domain;

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mapa-del-sitio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-de-cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Add all Service Landings
  SERVICES_LIST.forEach((service) => {
    routes.push({
      url: `${baseUrl}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: service.phase === 1 ? 0.9 : 0.8,
    });
  });

  // Add all Blog Posts
  BLOG_POSTS.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return routes;
}
