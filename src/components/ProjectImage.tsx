import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ProjectImageProps {
  info?: string;
  src?: string;
  alt: string;
  colSpan: 1 | 2;
  type: 'project' | 'image';
  rowSpan?: 1 | 2;
  priority?: boolean;
}

export default function ProjectImage({
  info,
  src,
  alt,
  colSpan,
  type,
  priority = false,
}: ProjectImageProps) {
  const sizes =
    colSpan === 2
      ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
      : '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw';

  return (
    <div
      className={twMerge(
        'group relative h-full max-h-[312px] w-full overflow-hidden rounded-lg border bg-card',
        'aspect-square',
        colSpan === 2 ? 'col-span-2' : 'col-span-1',
      )}
      // Esto ayuda MUCHO en grids grandes (Chrome/Edge principalmente)
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '312px 312px',
      }}
    >
      <p className="absolute top-3 duration-1000 left-4 z-10 hidden text-sm font-light tracking-tight text-muted-foreground group-hover:block">
        {info || 'No info yet...'}
      </p>

      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          className={twMerge(
            'rounded-t-lg transition-all duration-300',
            type === 'image' && 'z-20 object-cover group-hover:mt-12',
            type === 'project' &&
              'object-contain object-bottom group-hover:scale-105',
          )}
        />
      )}
    </div>
  );
}
