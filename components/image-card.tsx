import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageCard({
  title,
  description,
  href,
  imageSrc,
  mode,
}: {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  mode: 'service' | 'blog';
}) {
  return (
    <div className='group relative rounded-lg border bg-card p-4 text-card-foreground shadow transition duration-500 hover:shadow-md'>
      <div className='relative mb-4 aspect-square overflow-hidden rounded-lg border'>
        <Image
          alt='service-image'
          className='object-cover opacity-80 transition duration-500 group-hover:scale-105'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          src={imageSrc}
        />
      </div>
      <h2 className='mb-2 line-clamp-1 font-semibold'>
        <Link href={href}>
          {title}
          <span className='absolute inset-0'></span>
        </Link>
      </h2>
      <p
        className={cn(
          'line-clamp-1',
          mode === 'service' ? 'text-card-foreground' : 'text-card-foreground/60',
        )}
      >
        {description}
      </p>
    </div>
  );
}
