import { getArticleBySlug, getArticles, getAuthorById } from '@/lib/newt';
import { format } from 'date-fns';
import type { Metadata } from 'next';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SiFacebook, SiLine, SiX } from '@icons-pack/react-simple-icons';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  return {
    title: article?.title,
    description: article?.meta.description ?? 'Grazieのブログ',
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_URL}/articles/${article?.slug}`,
      title: article?.meta.title,
      description: article?.meta.description,
      siteName: 'Grazie',
      images: [{ url: article?.meta?.ogImage?.src ?? '' }],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const article = await getArticleBySlug(slug);
  if (!article) return;

  const author = await getAuthorById(article.author._id);

  return (
    <div className='grid grid-cols-5 gap-4'>
      <div className='mt-16 flex justify-end'>
        <div className='flex flex-col gap-4'>
          <Button asChild size='icon' variant='ghost'>
            <a
              href={encodeURI(
                `https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_URL}/articles/${article.slug}&text=${article.title} | Grazie&hashtags=grazie`,
              )}
              target='_blank'
            >
              <SiX color='default' size={20} />
            </a>
          </Button>
          <Button asChild size='icon' variant='ghost'>
            <a href=''>
              <SiFacebook color='default' size={20} />
            </a>
          </Button>
          <Button asChild size='icon' variant='ghost'>
            <a href=''>
              <SiLine color='default' size={20} />
            </a>
          </Button>
        </div>
      </div>
      <article className='col-span-3'>
        <div className='prose mx-auto my-8'>
          <div className='not-prose space-y-2 border-b pb-2'>
            <h1 className='pb-2 text-3xl font-bold'>{article.title}</h1>
            <p className='text-muted-foreground'>
              {format(article._sys.createdAt, 'yyyy年MM月dd日に公開')}
            </p>
            <div className='flex items-center gap-2'>
              <Avatar className='size-8 border-2'>
                <AvatarImage alt='author-avatar' src={author?.profileImage.src} />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <p>{author?.fullName}</p>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${article.body}`,
            }}
          />
        </div>
      </article>
    </div>
  );
}
