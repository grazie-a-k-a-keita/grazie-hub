'use client';

import SvgGrazie from '@/app/components/animation/svg-animation/svg-grazie';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function ClientPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mb-16 flex flex-col'>
      <div className='flex justify-center'>
        <SvgGrazie />
      </div>
      <div
        className={cn(
          'flex justify-center transition-opacity duration-1000',
          visible ? 'opacity-100' : 'opacity-0',
        )}
      >
        <p className='max-w-screen-md text-center text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae quas minus
          voluptates, modi quisquam odio provident unde dolor delectus, earum perferendis assumenda
          tempora, iste expedita soluta consequatur inventore ad.
        </p>
      </div>
    </div>
  );
}
