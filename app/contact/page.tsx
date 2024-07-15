import Contact from '@/components/layout/contact/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <div className='mx-auto max-w-screen-md'>
      <p className='my-16 text-center text-4xl font-bold'>Contact us</p>
      <Contact />
    </div>
  );
}
