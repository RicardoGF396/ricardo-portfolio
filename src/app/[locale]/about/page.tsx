import { BlurFade } from '@/src/components/ui/blur-fade';
import { MapContainer } from '@/src/components/about/MapContainer';
import { SectionJob } from '@/src/components/about/SectionJob';
import { EXPERIENCES } from '@/src/constants/about.es';
import { useTranslations } from 'next-intl';

type ExperienceItem = {
  company: string;
  role: string;
  meta: string;
  description: string;
  stack: string[];
};

type ExperienceTranslations = {
  title: string;
  zeeto: ExperienceItem;
  wicode: ExperienceItem;
  penteon: ExperienceItem;
  cbqa: ExperienceItem;
  setenal: ExperienceItem;
  yocontigo: ExperienceItem;
};

export default function AboutPage() {
  const translations = useTranslations('about');

  const experience = translations.raw('experience') as ExperienceTranslations;

  const experienceEntries = Object.entries(experience).filter(
    ([key]) => key !== 'title',
  ) as Array<[string, ExperienceItem]>;

  return (
    <BlurFade>
      <div className="mx-auto flex max-w-lg flex-col gap-2">
        <h3 className="text-base text-foreground">{translations('title')}</h3>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-light text-foreground">
            {translations('description-1')}
          </p>
          <p className="text-sm font-light text-foreground">
            {translations('description-2')}
          </p>
          <p className="text-sm font-light text-foreground">
            {translations('description-3')}
          </p>
        </div>
        <div className="my-6">
          <MapContainer />
        </div>
        <h3 className="text-base text-foreground">Experience</h3>
        <div className="flex flex-col gap-8">
          {experienceEntries.map(([key, item]) => (
            <SectionJob
              key={key}
              company={item.company}
              position={item.role}
              meta={item.meta}
              description={item.description}
              stack={item.stack}
            />
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
