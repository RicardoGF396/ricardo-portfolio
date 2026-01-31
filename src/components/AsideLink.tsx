import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface AsideLinkProps {
  href: string;
  label: string;
  type?: 'main' | 'sub';
  externalLink?: boolean;
}

export function AsideLink({ href, label, type, externalLink }: AsideLinkProps) {
  return (
    <li
      className={twMerge(
        'w-fit',
        type === 'sub' && 'ml-2 text-[#5B5B5B] hover:text-black',
      )}
    >
      <Link
        href={href}
        target={externalLink ? '_blank' : '_self'}
        rel={externalLink ? 'noopener noreferrer' : undefined}
        className={twMerge(
          'cursor-pointer hover:underline',
          externalLink && 'cursor-alias',
        )}
      >
        {label}
      </Link>
    </li>
  );
}
