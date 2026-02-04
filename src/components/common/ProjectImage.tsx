import { Link } from 'lucide-react';
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
  link?: string;
}

export default function ProjectImage({
  info,
  src,
  alt,
  colSpan,
  type,
  priority = false,
  link,
}: ProjectImageProps) {
  const sizes =
    colSpan === 2
      ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
      : '(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw';

  return (
    <div
      className={twMerge(
        'group relative h-full max-h-[312px] w-full overflow-hidden rounded-lg border bg-card',
        'aspect-square',
        colSpan === 2 ? 'col-span-2' : 'col-span-2 md:col-span-1',
      )}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '312px 312px',
      }}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          className="absolute top-3 left-2 z-10 rounded-lg border bg-card px-2 py-1 text-sm font-light tracking-tight text-muted-foreground duration-1000 hover:underline"
        >
          {info}
        </a>
      ) : (
        <p className="absolute top-3 left-4 z-10 hidden text-sm font-light tracking-tight text-muted-foreground duration-1000 group-hover:block">
          {info || 'No info yet...'}
        </p>
      )}

      {src !== undefined && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          className={twMerge(
            'z-10 rounded-t-lg transition-all duration-300',
            type === 'image' && 'object-cover group-hover:mt-12',
            type === 'project' &&
              'object-contain object-bottom group-hover:scale-105',
          )}
        />
      )}
    </div>
  );
}
