import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const iconSrc = variant === 'dark' ? '/icon-mark.png' : '/icon-mark-light.png';
  const textColor = variant === 'dark' ? 'text-navy' : 'text-white';

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Image
        src={iconSrc}
        alt=""
        width={32}
        height={38}
        className="h-full w-auto"
        priority
      />
      <span
        className={cn(
          'font-display font-extrabold tracking-tight leading-none',
          textColor
        )}
        style={{ fontSize: '1.25em' }}
      >
        IT Fehérvár
      </span>
    </span>
  );
}
