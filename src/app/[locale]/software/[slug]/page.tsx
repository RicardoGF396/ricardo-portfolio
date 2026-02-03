import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import {
  SOFTWARE_PROJECTS,
  getSoftwareProjectBySlug,
} from '@/src/content/software-projects';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const LOCALES = ['es', 'en'] as const;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    SOFTWARE_PROJECTS.map((p) => ({ locale, slug: p.slug })),
  );
}

export default async function SoftwareProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getSoftwareProjectBySlug(slug);
  console.log(project);
  if (!project) notFound();

  const t = await getTranslations('projects');

  return (
    <main className="md:px-4 md:py-10">
      <header className="mb-6 w-full">
        <Link
          href={project.link || '#'}
          target="_blank"
          className={twMerge(
            'group flex w-fit items-center gap-2 text-2xl font-light tracking-tight',
            project.link && project.link !== ''
              ? 'hover:underline'
              : 'pointer-events-none cursor-default',
          )}
        >
          {t(project.titleKey)}
          {project.link && project.link !== '' ? (
            <ArrowUpRight className="inline-block size-6 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          ) : null}
        </Link>
        <p className="my-2 text-[15px] font-light text-foreground">
          {t(project.descriptionKey)}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-sm bg-card px-2 py-1 text-sm font-light tracking-tight text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="relative mb-2 aspect-16/10 overflow-hidden rounded-xl border bg-card">
        <Image
          src={project.cover.src}
          alt={t(project.cover.altKey)}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </section>

      {project.gallery?.length ? (
        <section className="grid h-[242px] grid-cols-1 gap-2 md:grid-cols-2">
          {project.gallery.map((img) => (
            <div
              key={img.src}
              className="relative h-[282px] w-full overflow-hidden rounded-lg border bg-card"
            >
              <Image
                src={img.src}
                alt={t(img.altKey)}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </section>
      ) : null}
    </main>
  );
}
