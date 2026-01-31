import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ProjectImageProps {
  src?: string;
  alt: string;
  colSpan: 1 | 2;
  type: 'project' | 'image';
}

export default function ProjectImage({
  src,
  alt,
  colSpan,
  type,
}: ProjectImageProps) {
  return (
    <div
      className={twMerge(
        'group relative h-[312px] overflow-hidden rounded-lg bg-[#FAFAFA]',
        colSpan === 2 ? 'col-span-2' : 'col-span-1',
      )}
    >
      <p className="absolute top-3 left-4 z-1 text-sm font-light tracking-tight text-[#717171]">
        Project • My cat looking for a job
      </p>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
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
