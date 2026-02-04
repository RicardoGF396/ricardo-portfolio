'use client';

import { BlurFade } from '@/src/components/ui/blur-fade';
import ProjectImage from '@/src/components/common/ProjectImage';
import InteractiveProjectImage from '@/src/components/common/InteractiveProjectImage';
import HoverLabelIcon from '@/src/components/home/HoverLabelIcon';
import { HoverAdgenCard } from '@/src/components/home/HoverAdgenCard';
import HoverNaveoMap from '@/src/components/home/HoverNaveoMap';
import { HoverCvlensCard } from '@/src/components/home/HoverCvlensCard';
import { HoverBookCard } from '@/src/components/home/HoverBookCard';
import { HoverCDsCard } from '@/src/components/home/HoverCDsCard';
import { HoverAudioPlayer } from '@/src/components/home/HoverAudioPlayer';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Page() {
  const { locale } = useParams() as { locale: string };
  const t = useTranslations('home');

  return (
    <main>
      <BlurFade duration={1}>
        <section className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <InteractiveProjectImage
            colSpan={2}
            info={t('projects.naveo.info')}
            content={<HoverNaveoMap />}
            link={`/${locale}/software/naveo`}
          />

          <InteractiveProjectImage
            info={t('projects.tools.info')}
            colSpan={2}
            content={
              <div className="flex h-full w-full items-center justify-end pl-2">
                <div className="-mr-1 flex w-full items-center justify-around rounded-tl-xl rounded-bl-xl border bg-card px-2 py-2 shadow-xl dark:bg-[#2d2d2d]">
                  <HoverLabelIcon
                    label="Figma"
                    src="/figma-icon.png"
                    alt="figma icon"
                  />
                  <HoverLabelIcon
                    label="GitHub"
                    src="/github-icon.png"
                    alt="github icon"
                  />
                  <HoverLabelIcon
                    label="VS Code"
                    src="/vscode-icon.png"
                    alt="vscode icon"
                  />
                  <HoverLabelIcon
                    label="Chrome"
                    src="/chrome-icon.png"
                    alt="chrome icon"
                  />
                  <HoverLabelIcon
                    label="Spotify"
                    src="/spotify-icon.png"
                    alt="spotify icon"
                  />
                </div>
              </div>
            }
          />

          <ProjectImage
            alt={t('projects.bruno.alt')}
            src="/hm-5.png"
            colSpan={1}
            type="image"
            info={t('projects.bruno.info')}
          />

          <ProjectImage
            src="/hm-1.png"
            alt={t('projects.walks.alt')}
            colSpan={2}
            type="image"
            info={t('projects.walks.info')}
          />

          <InteractiveProjectImage
            colSpan={1}
            info={t('projects.adgen.info')}
            content={
              <HoverAdgenCard colSpan={1} info={t('projects.adgen.info')} />
            }
            link={`/${locale}/software/adgen`}
          />

          <InteractiveProjectImage
            colSpan={1}
            info={t('projects.cvlens.info')}
            content={<HoverCvlensCard />}
            link={`/${locale}/software/cvlens`}
          />

          <InteractiveProjectImage
            colSpan={1}
            info={t('projects.reading.info')}
            content={<HoverBookCard />}
          />

          <InteractiveProjectImage
            colSpan={2}
            info={t('projects.cds.info')}
            content={<HoverCDsCard />}
          />

          <ProjectImage
            src="/hm-2.png"
            alt={t('projects.interstellar.alt')}
            colSpan={2}
            type="image"
            info={t('projects.interstellar.info')}
          />

          <InteractiveProjectImage
            colSpan={1}
            info={t('projects.puraBanda.info')}
            content={<HoverAudioPlayer />}
            link={`/${locale}/software/pura-banda`}
          />

          <ProjectImage
            src="/hm-6.png"
            alt={t('projects.firstPortfolio.alt')}
            info={t('projects.firstPortfolio.info')}
            colSpan={1}
            type="image"
            link="http://ricardogf-website.s3-website-us-east-1.amazonaws.com/"
          />

          <ProjectImage
            src="/hm-4.png"
            alt={t('projects.japanTrip.alt')}
            info={t('projects.japanTrip.info')}
            colSpan={2}
            type="image"
          />

          <ProjectImage
            src="/hm-3.png"
            alt={t('projects.hackathon.alt')}
            info={t('projects.hackathon.info')}
            colSpan={2}
            type="image"
          />
        </section>
      </BlurFade>
    </main>
  );
}
