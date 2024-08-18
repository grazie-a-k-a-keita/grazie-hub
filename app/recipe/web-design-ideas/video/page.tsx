import PageTitle from '@/app/components/common/page-title';
import { MonitorPlay } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '動画再生',
};

export default function Page() {
  return (
    <>
      <PageTitle titleName='動画再生'>
        <MonitorPlay size={24} />
      </PageTitle>
      <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
        <video
          autoPlay
          className='absolute left-0 top-0 size-full object-cover'
          loop
          muted
          playsInline
          webkit-playsinline=''
        >
          <source src='/movies/movie.mp4' type='video/mp4' />
        </video>
      </div>
    </>
  );
}
