import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function HoverCDsCard() {
  const t = useTranslations('home');

  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      <div className="group relative size-[140px]">
        <Image
          src="/top-cd.png"
          alt="cds"
          width={140}
          height={140}
          className="absolute inset-0 rounded-full group-hover:animate-spin group-hover:duration-4000"
        />
        <Image
          src="/case.png"
          alt="cd case"
          width={140}
          height={140}
          className="absolute inset-0"
        />

        <div className="absolute -bottom-14 left-0 flex flex-col gap-1">
          <Link
            href="https://youtu.be/UZoR-a0e5gU?si=ePD48sHSCJxCxYCS"
            target="_blank"
            className="text-xs tracking-tight text-foreground hover:underline"
          >
            {t('hover.cds.song')}
          </Link>
          <p className="text-xs tracking-tight text-muted-foreground">
            {t('hover.cds.favoriteSong')}
          </p>
        </div>
      </div>

      <div className="group relative size-[140px]">
        <Image
          src="/mac-cd.png"
          alt="cds"
          width={140}
          height={140}
          className="absolute inset-0 rounded-full group-hover:animate-spin group-hover:duration-4000"
        />
        <Image
          src="/case.png"
          alt="cd case"
          width={140}
          height={140}
          className="absolute inset-0"
        />

        <div className="absolute -bottom-10 left-0 flex flex-col gap-1">
          <Link
            target="_blank"
            href="https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U?si=jIa1R92QSnObwsXeaXH1Rw"
            className="text-xs tracking-tight text-foreground hover:underline"
          >
            Mac Miller
          </Link>
          <p className="text-xs tracking-tight text-muted-foreground">
            {t('hover.cds.favoriteArtist')}
          </p>
        </div>
      </div>

      <div className="group relative size-[140px]">
        <Image
          src="/cracks-cd.png"
          alt="cds"
          width={140}
          height={140}
          className="absolute inset-0 rounded-full group-hover:animate-spin group-hover:duration-4000"
        />
        <Image
          src="/case.png"
          alt="cd case"
          width={140}
          height={140}
          className="absolute inset-0"
        />

        <div className="absolute -bottom-10 left-0 flex flex-col gap-1">
          <Link
            target="_blank"
            href="https://open.spotify.com/show/3DhKkwcA6Pkl6s6xI1m9Im?si=91aa9d18c9ad4256"
            className="text-xs tracking-tight text-foreground hover:underline"
          >
            {t('hover.cds.podcastName')}
          </Link>
          <p className="text-xs tracking-tight text-muted-foreground">
            {t('hover.cds.favoritePodcast')}
          </p>
        </div>
      </div>
    </div>
  );
}
