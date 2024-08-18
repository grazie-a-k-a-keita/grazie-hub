'use client';

import { AppConfig } from '@/app.config';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Mails } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80',
        !isTop && 'border-b border-muted',
      )}
    >
      <div className='container flex h-20 justify-between'>
        <div className='flex items-center'>
          <Button asChild className='mr-6' variant='ghost'>
            <Link href='/'>
              <Image alt='logo' className='mr-2' height={24} src='/logo.png' width={24} />
              <p className='text-lg font-bold text-primary'>{AppConfig.title}</p>
            </Link>
          </Button>
          <ul className='hidden space-x-6 sm:flex'>
            <li className='flex items-center'>
              <p className='text-sm font-semibold'>
                <Link className='transition duration-200 hover:opacity-60' href='/about'>
                  Grazieについて
                </Link>
              </p>
            </li>
            <li className='flex items-center'>
              <p className='text-sm font-semibold'>
                <Link className='transition duration-200 hover:opacity-60' href='/recipe'>
                  レシピ
                </Link>
              </p>
            </li>
            <li className='flex items-center'>
              <p className='text-sm font-semibold'>
                <Link className='transition duration-200 hover:opacity-60' href='/articles'>
                  ブログ
                </Link>
              </p>
            </li>
          </ul>
        </div>
        <div className='hidden items-center sm:flex'>
          <Button asChild variant='outline'>
            <Link href='/'>
              <Mails className='mr-2 size-6 text-secondary-foreground' />
              お問い合わせ
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
