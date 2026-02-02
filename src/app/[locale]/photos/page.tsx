import { GRID_PHOTOS } from '@/src/constants/grid-photos';
import ProjectImage from '@/src/components/ProjectImage';
import { useTranslations } from 'next-intl';

const LAYOUT_PATTERN = [1, 2, 1, 1, 1, 2, 2, 1, 1] as const;

export default function PhotosPage() {
  const translations = useTranslations('photos');
  return (
    <section className="grid auto-rows-[312px] grid-cols-2 gap-2 md:grid-cols-4">
      {GRID_PHOTOS.map((item, index) => {
        const colSpan = LAYOUT_PATTERN[index % LAYOUT_PATTERN.length] as 1 | 2;

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
  );
}
