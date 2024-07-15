import { Separator } from '@/components/ui/separator';

export default function NotFound() {
  return (
    <>
      <div className='mb-16 mt-32 hidden h-12 justify-center space-x-6 sm:flex'>
        <div className='flex items-center'>
          <p className='font-semibold'>404</p>
        </div>
        <Separator orientation='vertical' />
        <div className='flex items-center'>
          <p className='font-semibold'>This page could not be found.</p>
        </div>
      </div>
      <div className='my-32 flex flex-col space-y-2 sm:hidden'>
        <p className='text-center font-semibold'>404</p>
        <Separator orientation='horizontal' />
        <p className='text-center font-semibold'>This page could not be found.</p>
      </div>
    </>
  );
}
