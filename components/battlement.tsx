import { cn } from '@/lib/utils';

interface BattlementProps {
  className?: string;
  color?: string;
}

/**
 * Section divider styled as a castle battlement (párázat),
 * derived from the logo's tower-top motif.
 */
export function Battlement({ className, color = '#1C3461' }: BattlementProps) {
  return (
    <svg
      viewBox="0 0 1080 8"
      preserveAspectRatio="none"
      className={cn('h-2 w-full', className)}
      aria-hidden="true"
    >
      <g fill={color}>
        <rect x="0" y="0" width="60" height="8" />
        <rect x="75" y="0" width="60" height="8" />
        <rect x="150" y="0" width="60" height="8" />
        <rect x="225" y="0" width="60" height="8" />
        <rect x="300" y="0" width="60" height="8" />
        <rect x="375" y="0" width="60" height="8" />
        <rect x="450" y="0" width="60" height="8" />
        <rect x="525" y="0" width="60" height="8" />
        <rect x="600" y="0" width="60" height="8" />
        <rect x="675" y="0" width="60" height="8" />
        <rect x="750" y="0" width="60" height="8" />
        <rect x="825" y="0" width="60" height="8" />
        <rect x="900" y="0" width="60" height="8" />
        <rect x="975" y="0" width="60" height="8" />
        <rect x="1050" y="0" width="30" height="8" />
      </g>
    </svg>
  );
}
