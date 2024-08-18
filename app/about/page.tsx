import ClientPage from '@/app/about/components/client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grazieについて',
};

export default function Page() {
  return <ClientPage />;
}
