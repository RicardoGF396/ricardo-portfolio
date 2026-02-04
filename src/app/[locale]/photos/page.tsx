import { GRID_PHOTOS } from '@/src/content/grid-photos';
import ProjectImage from '@/src/components/common/ProjectImage';
import { useTranslations } from 'next-intl';
import { BlurFade } from '@/src/components/ui/blur-fade';

const LAYOUT_PATTERN = [1, 2, 1, 1, 1, 2, 2, 1, 1] as const;

export default function PhotosPage() {
  const translations = useTranslations('photos');
  return (
    <BlurFade duration={1}>
      <section className="grid auto-rows-[312px] grid-cols-2 gap-2 md:grid-cols-4">
        {GRID_PHOTOS.map((item, index) => {
          const colSpan = LAYOUT_PATTERN[index % LAYOUT_PATTERN.length] as
            | 1
            | 2;

          return (
            <ProjectImage
              key={index}
              {...item}
              info={translations('info')}
              colSpan={colSpan}
            />
          );
        })}
      </section>
    </BlurFade>
  );
}
