import SearchSelect from '@/components/search-select';
import { Badge } from '@/components/ui/badge';
import { getArticleBySearch, getArticles, getTags } from '@/lib/newt';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blogs',
};

async function getYears() {
  const articles = await getArticles();
  if (articles.length === 0) return [];

  const sortedArticles = articles.sort(
    (a, b) => new Date(a._sys.createdAt).getTime() - new Date(b._sys.createdAt).getTime(),
  );

  const minYear = new Date(sortedArticles[0]._sys.createdAt).getFullYear();
  const maxYear = new Date(sortedArticles[sortedArticles.length - 1]._sys.createdAt).getFullYear();

  const years = [];
  for (let year = minYear; year <= maxYear; year++) {
    years.push({
      value: year.toString(),
      label: year.toString(),
    });
  }

  return years;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    year?: string;
  };
}) {
  const category = searchParams?.category || '';
  const year = searchParams?.year || '';

  const tags = await getTags();
  const articles = await getArticleBySearch(tags.find((tag) => tag.slug === category)?._id, year);

  const categoryValues = tags.map((tag) => {
    return {
      value: tag.slug,
      label: tag.name,
    };
  });

  const yearValues = await getYears();

  return (
    <>
      <h1 className='my-8 text-4xl font-semibold'>ブログ一覧</h1>
      <div className='mb-8 flex gap-4'>
        <SearchSelect
          name='category'
          placeholder='Select a category'
          selectValues={categoryValues}
        />
        <SearchSelect name='year' placeholder='Select a year' selectValues={yearValues} />
      </div>
      {articles.length === 0 ? (
        <p>条件に一致する投稿がありません</p>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {articles.map((article) => (
            <div
              className='group relative rounded-lg border bg-card p-4 text-card-foreground shadow transition duration-500 hover:shadow-md'
              key={article.slug}
            >
              <div className='relative mb-4 aspect-video overflow-hidden rounded-lg border'>
                <Image
                  alt='service-image'
                  className='object-cover opacity-80 transition duration-500 group-hover:scale-105'
                  fill
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  src={article.coverImage.src}
                />
              </div>
              <Badge className='mb-2' variant='outline'>
                {article.tag.name}
              </Badge>
              <h2 className='mb-2 line-clamp-1 font-semibold'>
                <Link href={`articles/${article.slug}`}>
                  {article.title}
                  <span className='absolute inset-0'></span>
                </Link>
              </h2>
              <p className='text-card-foreground/60'>
                {format(article._sys.createdAt, 'yyyy年MM月dd日')}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
