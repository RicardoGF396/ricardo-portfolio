'use client';

import { useEffect, useMemo, useState } from 'react';
import ProjectImage from '@/src/components/common/ProjectImage';
import { GRID_DESIGN } from '@/src/content/grid-design';
import { useTranslations } from 'next-intl';
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver';

const LAYOUT_PATTERN = [1, 2, 1, 1, 1, 2, 2, 1, 1] as const;

const INITIAL_BATCH = 24;
const BATCH_SIZE = 20;
const PRIORITY_COUNT = 6;

export default function DesignPage() {
  const t = useTranslations('design');
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  const visibleItems = useMemo(
    () => GRID_DESIGN.slice(0, visibleCount),
    [visibleCount],
  );

  const hasMore = visibleCount < GRID_DESIGN.length;

  const { ref: sentinelRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({
      root: null,
      threshold: 0,
      rootMargin: '600px',
    });

  useEffect(() => {
    if (!hasMore) return;
    if (!isIntersecting) return;

    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, GRID_DESIGN.length));
  }, [isIntersecting, hasMore]);

  return (
    <>
      <section className="grid auto-rows-[312px] grid-cols-2 gap-2 md:grid-cols-4">
        {visibleItems.map((item, index) => {
          const colSpan = LAYOUT_PATTERN[index % LAYOUT_PATTERN.length] as
            | 1
            | 2;

          return (
            <ProjectImage
              key={item.src ?? `${item.alt}-${index}`}
              {...item}
              src={item.src}
              info={t('info')}
              colSpan={colSpan}
              priority={index < PRIORITY_COUNT}
            />
          );
        })}
      </section>

      {hasMore && (
        <div ref={sentinelRef} className="h-10 w-full" aria-hidden="true" />
      )}
      {!hasMore && (
        <div className="py-8 text-center text-sm text-muted-foreground">
          Hay mucho más (pero de verdad, es mucho más)...
        </div>
      )}
    </>
  );
}
