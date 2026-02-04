import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function HoverBookCard() {
  const t = useTranslations('home');

  return (
    <div className="group flex h-full w-full items-center justify-center">
      <Image
        src="/book.png"
        alt="book"
        width={130}
        height={130}
        className="shadow-xl"
      />

      <div className="absolute -bottom-20 left-0 z-0 h-[80px] w-full bg-card/50 bg-linear-to-t from-card to-transparent py-3 backdrop-blur-sm transition-all duration-600 group-hover:bottom-0">
        <p className="text-center text-sm font-medium">
          {t('hover.book.title')}
        </p>
        <p className="text-center text-xs text-muted-foreground">
          {t('hover.book.authorPrefix')} Rick Rubin
        </p>
      </div>
    </div>
  );
}
