import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface InteractiveProjectImageProps {
  content?: React.ReactNode;
  colSpan: 1 | 2;
  info?: string;
  link?: string;
}

export default function InteractiveProjectImage({
  content,
  colSpan,
  info,
  link,
}: InteractiveProjectImageProps) {
  return (
    <div
      className={twMerge(
        'relative h-full max-h-[312px] w-full overflow-hidden rounded-lg border bg-card',
        'aspect-square',
        colSpan === 2 ? 'col-span-2' : 'col-span-2 md:col-span-1',
      )}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '312px 312px',
      }}
    >
      {link ? (
        <Link
          href={link}
          className="absolute top-2 left-2 z-10 rounded-lg border bg-card px-2 py-1 text-sm font-light tracking-tight text-muted-foreground duration-1000 hover:underline"
        >
          {info || 'No info yet...'}
        </Link>
      ) : (
        <p className="absolute top-3 left-4 z-10 rounded-lg border bg-card px-2 py-1 text-sm font-light tracking-tight text-muted-foreground duration-1000">
          {info || 'No info yet...'}
        </p>
      )}

      {content}
    </div>
  );
}
