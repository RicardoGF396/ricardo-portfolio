import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface HoverLabelIconProps {
  label: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function HoverLabelIcon({
  label,
  src,
  alt,
  width = 80,
  height = 80,
  className,
}: HoverLabelIconProps) {
  return (
    <div className="group relative flex items-center justify-center">
      {/* Tooltip */}
      <div
        className={twMerge(
          'pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2',
          'rounded-md border bg-accent px-2 py-0.5 text-xs',
          'opacity-0 transition-all duration-200 group-hover:-top-12 group-hover:opacity-100',
        )}
      >
        {label}
      </div>

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={twMerge(
          'shadow-lg transition-transform duration-200 group-hover:scale-[1.04] rounded-[24px]',
          className,
        )}
      />
    </div>
  );
}
