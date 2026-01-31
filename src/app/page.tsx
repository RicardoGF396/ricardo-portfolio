import { ArrowUpRight } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import AsideComponent from '../components/AsideComponent';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl gap-12 px-4">
      <AsideComponent />
      <main className="flex-1 pb-12 z-10">
        {/* <section className="flex items-end justify-between gap-2">
          <div className="w-full max-w-md">
            <p className="text-base tracking-tight">Naveo</p>
            <p className="text-sm font-light -tracking-normal text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex gap-1 text-sm font-light tracking-tight text-[#5B5B5B]">
            <p>2026, </p>
            <p>Fullstack,</p>
            <Link
              href="https://naveo.com.mx"
              target="_blank"
              className="group flex items-center gap-1 hover:underline"
            >
              Website{' '}
              <ArrowUpRight
                strokeWidth={1.1}
                className="transition-all duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>
        </section> */}
        <section className="mt-8 grid grid-cols-4 gap-2">
          <ProjectImage
            src="/cat-test.jpeg"
            alt="My cat looking for a job"
            colSpan={1}
            type="image"
          />
          <ProjectImage
            src="/design-spells.png"
            alt="Naveo"
            colSpan={2}
            type="project"
          />
          <ProjectImage
            src="/cat-test.jpeg"
            alt="Naveo"
            colSpan={1}
            type="image"
          />
          <ProjectImage
            // src="/cat-test.jpeg"
            alt="My cat looking for a job"
            colSpan={1}
            type="image"
          />
          <ProjectImage
            // src="/cat-test.jpeg"
            alt="Naveo"
            colSpan={1}
            type="image"
          />
          <ProjectImage
            // src="/design-spells.png"
            alt="Naveo"
            colSpan={2}
            type="project"
          />
          <ProjectImage
            // src="/design-spells.png"
            alt="Naveo"
            colSpan={2}
            type="project"
          />
          <ProjectImage
            // src="/cat-test.jpeg"
            alt="Naveo"
            colSpan={1}
            type="image"
          />
          <ProjectImage
            // src="/cat-test.jpeg"
            alt="My cat looking for a job"
            colSpan={1}
            type="image"
          />
        </section>
      </main>
    </div>
  );
}
