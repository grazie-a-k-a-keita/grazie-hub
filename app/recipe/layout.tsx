import PageFrame from '@/app/components/layout/page-frame';

export default function RecipeLayout({ children }: { children: React.ReactNode }) {
  return <PageFrame>{children}</PageFrame>;
}
