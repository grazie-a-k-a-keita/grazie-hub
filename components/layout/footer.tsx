import { AppConfig } from '@/app.config';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className='container sticky top-full border-t border-primary py-8'>
      <p className='mb-12 text-2xl font-bold'>Grazie</p>
      <ul className='mb-8 grid grid-cols-5'>
        <li className='flex items-center'>
          <Link className='transition duration-200 hover:opacity-60' href='/grazie'>
            <p className='text-sm font-semibold'>Grazieについて</p>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link className='transition duration-200 hover:opacity-60' href='/services'>
            <p className='text-sm font-semibold'>サービス</p>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link className='transition duration-200 hover:opacity-60' href='/articles'>
            <p className='text-sm font-semibold'>ブログ</p>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link className='transition duration-200 hover:opacity-60' href='/articles'>
            <p className='text-sm font-semibold'>お問い合わせ</p>
          </Link>
        </li>
      </ul>
      <div className='grid grid-cols-5'>
        <div className='col-span-2 flex items-center'>
          <Link href='/'>
            <p className='text-sm text-muted-foreground'>利用規約</p>
          </Link>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='text-sm text-muted-foreground'>&copy; 2024 Grazie</p>
        </div>
        <div className='space-x-2'>
          <Button asChild size='icon' variant='ghost'>
            <a href={AppConfig.xUrl} target='_blank'>
              <SiX size={20} />
            </a>
          </Button>
          <Button asChild size='icon' variant='ghost'>
            <a href={AppConfig.gitHubUrl} target='_blank'>
              <SiGithub size={20} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
