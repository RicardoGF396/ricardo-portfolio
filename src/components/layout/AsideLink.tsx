import { Link } from '@/src/i18n/routing';
import { twMerge } from 'tailwind-merge';

interface AsideLinkProps {
  href: string;
  label: string;
  type?: 'main' | 'sub';
  externalLink?: boolean;
  onClick?: () => void;
}

export function AsideLink({ href, label, type, externalLink, onClick }: AsideLinkProps) {
  return (
    <li className={twMerge('w-fit text-foreground', type === 'sub' && 'ml-2')}>
      <Link
        href={href}
        target={externalLink ? '_blank' : '_self'}
        rel={externalLink ? 'noopener noreferrer' : undefined}
        className={twMerge(
          'cursor-pointer hover:underline',
          externalLink && 'cursor-alias',
        )}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
