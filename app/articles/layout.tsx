import PageFrame from '@/app/components/layout/page-frame';

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <PageFrame>{children}</PageFrame>;
}
