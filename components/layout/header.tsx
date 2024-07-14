'use client';

import { Mails } from 'lucide-react';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

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
        !isTop && 'border-b border-border/70',
      )}
    >
      <div className='container flex h-20 justify-between'>
        <div className='flex items-center'>
          <Button asChild className='mr-6' variant='ghost'>
            <Link href='/'>
              <Image alt='logo' className='mr-2' height={24} src='/logo.svg' width={24} />
              <p className='text-lg font-bold text-primary'>Grazie</p>
            </Link>
          </Button>
          <ul className='flex space-x-6'>
            <li className='flex items-center'>
              <p className='text-sm font-semibold'>
                <Link className='transition duration-200 hover:opacity-60' href='/grazie'>
                  Grazieについて
                </Link>
              </p>
            </li>
            <li className='flex items-center'>
              <p className='text-sm font-semibold'>
                <Link className='transition duration-200 hover:opacity-60' href='/services'>
                  サービス
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
        <div className='flex items-center'>
          <Button asChild variant='outline'>
            <Link href='/contact'>
              <Mails className='mr-2 size-6 text-secondary-foreground' />
              お問い合わせ
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
