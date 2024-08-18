import PageTitle from '@/app/components/common/page-title';
import { Button } from '@/components/ui/button';
import { ListOrdered } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'レシピ一覧',
};

export default function Page() {
  return (
    <>
      <PageTitle titleName='レシピ一覧'>
        <ListOrdered size={24} />
      </PageTitle>
      <ul className='mx-4 list-inside list-disc'>
        <li>
          <Button asChild variant='link'>
            <Link href='/recipe/web-design-ideas/animation'>アニメーション</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant='link'>
            <Link href='/recipe/web-design-ideas/scroll'>紙芝居風スクロール</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant='link'>
            <Link href='/recipe/web-design-ideas/video'>動画再生</Link>
          </Button>
        </li>
      </ul>
    </>
  );
}
