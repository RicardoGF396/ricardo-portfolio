import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ProjectImageProps {
  info?: string;
  src?: string;
  alt: string;
  colSpan: 1 | 2;
  type: 'project' | 'image';
  rowSpan?: 1 | 2;
}

export default function ProjectImage({
  info,
  src,
  alt,
  colSpan,
  type,
  rowSpan,
}: ProjectImageProps) {
  return (
    <div
      className={twMerge(
        'group relative overflow-hidden rounded-lg bg-card border h-full max-h-[312px] w-full',
        'aspect-square',
        colSpan === 2 ? 'col-span-2' : 'col-span-1',
      )}
    >
      <p className="absolute top-3 left-4 z-1 text-sm font-light tracking-tight text-muted-foreground">
        {info || 'No info yet...'}
      </p>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 25vw"
          className={twMerge(
            'rounded-t-lg transition-all duration-300',
            type === 'image' && 'z-2 object-cover group-hover:mt-12',
            type === 'project' &&
              'object-contain object-bottom group-hover:scale-105',
          )}
        />
      )}
    </div>
  );
}
