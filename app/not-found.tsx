import { Separator } from '@/components/ui/separator';

export default function NotFound() {
  return (
    <div className='mt-32 flex h-12 justify-center space-x-4'>
      <div className='flex items-center'>
        <p className='font-semibold'>404</p>
      </div>
      <Separator orientation='vertical' />
      <div className='flex items-center'>
        <p className='font-semibold'>This page could not be found.</p>
      </div>
    </div>
  );
}
