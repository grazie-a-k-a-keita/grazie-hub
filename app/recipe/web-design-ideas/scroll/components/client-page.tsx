'use client';

import PageTitle from '@/app/components/common/page-title';
import { PanelsLeftBottom } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ClientPage() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerImgStyle = {
    transform: `scale(${(100 + scroll / 10) / 100})`,
    top: `-${scroll / 50}%`,
  };

  return (
    <>
      <PageTitle titleName='紙芝居風スクロール'>
        <PanelsLeftBottom size={24} />
      </PageTitle>
      <section className='sticky top-20'>
        <div className='relative aspect-video overflow-hidden'>
          <Image
            alt='Top Image'
            className='object-cover'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            src='/images/hero-image.jpg'
            style={headerImgStyle}
          />
        </div>
      </section>
      <section className='sticky top-20 flex h-[800px] place-items-center bg-muted'>
        <div className='m-auto'>
          <p className='text-xl font-bold'>Area Two</p>
        </div>
      </section>
      <section className='sticky top-20 flex h-[800px] place-items-center bg-muted-foreground'>
        <div className='m-auto'>
          <p className='text-xl font-bold'>Area Three</p>
        </div>
      </section>
      <section className='sticky top-20 flex h-[800px] place-items-center bg-muted'>
        <div className='m-auto'>
          <p className='text-xl font-bold'>Area Four</p>
        </div>
      </section>
    </>
  );
}
