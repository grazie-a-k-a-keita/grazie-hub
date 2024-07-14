import ImageCard from '@/components/image-card';
import { oswald } from '@/lib/ftons';
import { getArticles } from '@/lib/newt';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'サービス1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: '/services/1',
    imageSrc: '/images/service-image.jpg',
  },
  {
    title: 'サービス2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: '/services/2',
    imageSrc: '/images/service-image.jpg',
  },
  {
    title: 'サービス3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: '/services/3',
    imageSrc: '/images/service-image.jpg',
  },
];

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className='mb-4'>
      <div className='relative my-4 aspect-video overflow-hidden rounded-lg border'>
        <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
          <h1
            className={cn(
              oswald.className,
              'text-center text-9xl font-extrabold text-secondary select-none',
            )}
          >
            Lorem ipsum dolor sit amet.
          </h1>
        </div>
        <Image
          alt='hero-image'
          className='object-cover opacity-65'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          src='/images/hero-image.jpg'
        />
      </div>
      <section className='py-4'>
        <div className='mb-4 flex border-b-2 border-border/40'>
          <h2 className='mb-2 text-xl font-semibold'>
            <Link className='transition duration-200 hover:opacity-60' href='/grazie'>
              Grazieについて
            </Link>
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni at repellat nobis soluta,
          beatae inventore, sapiente, necessitatibus excepturi aperiam rem deserunt odit itaque
          obcaecati repudiandae quis quaerat commodi dignissimos iste?
        </p>
      </section>
      <section className='py-4'>
        <div className='mb-4 flex border-b-2 border-border/40'>
          <h2 className='mb-2 text-xl font-semibold'>
            <Link className='transition duration-200 hover:opacity-60' href='/services'>
              サービス
            </Link>
          </h2>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {services.map((service) => (
            <div key={service.title}>
              <ImageCard
                description={service.description}
                href={service.href}
                imageSrc={service.imageSrc}
                mode='service'
                title={service.title}
              />
            </div>
          ))}
        </div>
      </section>
      <section className='py-4'>
        <div className='mb-4 flex border-b-2 border-border/40'>
          <h2 className='mb-2 text-xl font-semibold'>
            <Link className='transition duration-200 hover:opacity-60' href='/articles'>
              ブログ
            </Link>
          </h2>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {articles.map((article) => (
            <div key={article.slug}>
              <ImageCard
                description={format(article._sys.createdAt, 'yyyy年MM月dd日')}
                href={`articles/${article.slug}`}
                imageSrc={article.coverImage.src}
                mode='blog'
                title={article.title}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
