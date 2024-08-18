import { getArticles } from '@/lib/newt';
import { getURL } from '@/lib/utils';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();

  const articleSitemap = articles.map((article) => {
    return {
      url: `${getURL()}/articles/${article.slug}`,
      lastModified: article._sys.updatedAt,
    };
  });

  return [
    {
      url: getURL(),
      lastModified: new Date(),
    },
    {
      url: `${getURL()}/about`,
      lastModified: new Date(),
    },
    {
      url: `${getURL()}/articles`,
      lastModified: new Date(),
    },
    {
      url: `${getURL()}/recipe/web-design-ideas/animation`,
      lastModified: new Date(),
    },
    {
      url: `${getURL()}/recipe/web-design-ideas/scroll`,
      lastModified: new Date(),
    },
    {
      url: `${getURL()}/recipe/web-design-ideas/video`,
      lastModified: new Date(),
    },
    ...articleSitemap,
  ];
}
