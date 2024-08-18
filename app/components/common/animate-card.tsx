import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export default function AnimateCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn('flex h-80 w-full place-items-center', className)}>
      <div className='m-auto'>{children}</div>
    </Card>
  );
}
