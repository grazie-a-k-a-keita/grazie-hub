'use client';

import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Thanks() {
  const router = useRouter();

  return (
    <div className='mt-32 flex flex-col space-y-6'>
      <div className='flex justify-center'>
        <CircleCheck className='size-12' />
      </div>
      <h1 className='text-center text-2xl font-semibold'>Thank you</h1>
      <p className='text-center font-semibold text-muted-foreground/60'>
        Your inquiry has been completed
      </p>
      <div className='flex justify-center pt-4'>
        <Button onClick={() => router.back()} variant='link'>
          Back to Previous Page
        </Button>
      </div>
    </div>
  );
}
