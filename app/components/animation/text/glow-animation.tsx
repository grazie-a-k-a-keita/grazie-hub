'use client';

import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

export default function GlowAnimation({ text }: { text: string }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <p className='flex gap-1' ref={ref}>
      {text.split('').map((char, index) => (
        <span
          className={cn('font-medium opacity-0', inView && 'animate-[glow-anime-on_1s_forwards]')}
          key={index}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </p>
  );
}
