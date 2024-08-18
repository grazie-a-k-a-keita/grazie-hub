'use client';

import 'animate.css';

import GlowAnimation from '@/app/components/animation/text/glow-animation';
import AnimateCard from '@/app/components/common/animate-card';
import PageTitle from '@/app/components/common/page-title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dog, Rotate3D, RotateCcw, Squirrel } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function ClientPage() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <PageTitle titleName='アニメーション'>
        <Rotate3D size={24} />
      </PageTitle>
      <Button className='mb-8' onClick={() => window.location.reload()} variant='outline'>
        <RotateCcw className='mr-2' size={24} />
        リセット
      </Button>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4'>
        <AnimateCard>
          <div className='relative animate-bg-extend-base overflow-hidden rounded-full before:absolute before:size-full before:animate-bg-left-extend before:bg-primary'>
            <span className='animate-bg-extend-second px-4 font-medium'>背景色が伸びて出現</span>
          </div>
        </AnimateCard>
        <AnimateCard>
          <div className='animate__animated animate__bounce animate__infinite flex justify-center'>
            <Dog size={40} />
          </div>
        </AnimateCard>
        <AnimateCard>
          <div className='animate-[fade-in_1.5s_ease-out_infinite]'>
            <p className='font-medium'>ふわっと現れる</p>
          </div>
        </AnimateCard>
        <AnimateCard className='group'>
          <div className='transition duration-500 group-hover:rotate-180'>
            <p className='font-medium'>ホバーで回転</p>
          </div>
        </AnimateCard>
        <AnimateCard>
          <Button className='transition duration-100 active:bg-destructive'>
            クリックで色変化
          </Button>
        </AnimateCard>
        <AnimateCard>
          <div className='flex gap-4 overflow-hidden'>
            <div className='animate__animated animate__bounceInRight'>
              <Squirrel size={40} />
            </div>
            <div className='animate__animated animate__bounceInRight animate__delay-1s'>
              <Squirrel size={40} />
            </div>
            <div className='animate__animated animate__bounceInRight animate__delay-2s'>
              <Squirrel size={40} />
            </div>
          </div>
        </AnimateCard>
        <AnimateCard>
          <Button className='origin-bottom transition duration-300 hover:scale-125'>
            ホバーで拡大
          </Button>
        </AnimateCard>
        <AnimateCard>
          <div className='h-24 w-32 animate-[flip-down_2s_forwards_infinite_ease] rounded-md bg-primary' />
        </AnimateCard>
        <AnimateCard>
          <div className='h-24 w-32 animate-[flip-right-top_1s_forwards_infinite_ease] rounded-md bg-primary' />
        </AnimateCard>
        <AnimateCard>
          <Image
            alt=''
            className='animate-[rotate-y_1.5s_forwards_infinite_linear]'
            height={80}
            src='/images/logo.png'
            width={80}
          />
        </AnimateCard>
        <AnimateCard>
          <p className='animate-[zoom-out_2s_forwards_infinite] font-medium'>ZOOM OUT</p>
        </AnimateCard>
        <AnimateCard className='overflow-hidden'>
          <p className='origin-left animate-[smooth_1.5s_forwards_infinite] font-medium'>
            にゅーん
          </p>
        </AnimateCard>
        <AnimateCard>
          <div className='size-40 animate-[fluid-rotate_15s_ease_infinite] bg-primary' />
        </AnimateCard>
        <AnimateCard>
          <div ref={ref}>
            <p className={cn('font-medium', inView && 'animate-[fade-up_0.5s_ease-out]')}>
              スクロール位置に応じて
            </p>
          </div>
        </AnimateCard>
        <AnimateCard className='group'>
          <p className='font-medium transition duration-300 group-hover:blur-sm'>ホバーでぼかす</p>
        </AnimateCard>
        <AnimateCard className='group'>
          <div className='relative overflow-hidden'>
            {/* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */}
            <div className='absolute -left-3/4 h-full w-6 -skew-x-[25deg] bg-white opacity-30 group-hover:animate-[shine_0.6s]' />
            <Image alt='' height={120} src='/images/logo.png' width={120} />
          </div>
        </AnimateCard>
        <AnimateCard className='group relative overflow-hidden'>
          <div className='absolute left-0 top-0 flex size-full origin-center items-center justify-center bg-primary transition duration-300 [transform:scale(0,1)] group-hover:[transform:scale(1,1)]'>
            <p className='font-medium text-primary-foreground group-hover:block'>背景が出現</p>
          </div>
          <p className='font-medium group-hover:hidden'>ホバーしてください</p>
        </AnimateCard>
        <AnimateCard>
          <GlowAnimation text='光りながら出現' />
        </AnimateCard>
      </div>
    </>
  );
}
