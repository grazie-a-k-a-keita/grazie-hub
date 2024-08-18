import { AppConfig } from '@/app.config';
import { getArticles } from '@/lib/newt';
import type { MetadataRoute } from 'next';

const BASE_URL = AppConfig.baseUrl;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();

  const articleSitemap = articles.map((article) => {
    return {
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: article._sys.updatedAt,
    };
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/recipe/web-design-ideas/animation`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/recipe/web-design-ideas/scroll`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/recipe/web-design-ideas/video`,
      lastModified: new Date(),
    },
    ...articleSitemap,
  ];
}
