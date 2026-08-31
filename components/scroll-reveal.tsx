'use client';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        className
      )}
    >
      {children}
    </div>
  );
}
