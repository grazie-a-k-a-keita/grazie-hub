'use client';

import { Button } from '@/components/ui/button';
import { CircleAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Error() {
  const router = useRouter();

  return (
    <div className='mb-16 mt-32 flex flex-col space-y-6'>
      <div className='flex justify-center'>
        <CircleAlert className='size-12' />
      </div>
      <h1 className='text-center text-2xl font-semibold'>Error</h1>
      <p className='text-center text-muted-foreground/60'>An error occurred during submission</p>
      <div className='flex justify-center pt-4'>
        <Button onClick={() => router.back()} variant='link'>
          Back to Previous Page
        </Button>
      </div>
    </div>
  );
}
