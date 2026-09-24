import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  // Both variants use the same full-colour logo (white-background header & footer)
  // If a light/dark-background variant is ever needed, swap src here.
  return (
    <span className={cn('inline-flex items-center', className)}>
      <Image
        src="/itfehervar_logo_new.png"
        alt="IT Fehérvár"
        width={180}
        height={48}
        className="h-full w-auto"
        priority
      />
    </span>
  );
}

