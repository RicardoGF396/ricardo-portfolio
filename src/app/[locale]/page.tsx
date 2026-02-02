import { BlurFade } from '@/src/components/ui/blur-fade';
import ProjectImage from '@/src/components/ProjectImage';

export default function Page() {
  return (
    <main>
      <BlurFade duration={1}>
        <section className="grid grid-cols-4 gap-2">
          <ProjectImage
            src="/cat-test.jpeg"
            alt="My cat looking for a job"
            colSpan={1}
            type="image"
          />
          <ProjectImage
            src="/design-spells.png"
            alt="Naveo"
            colSpan={1}
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
      </BlurFade>
    </main>
  );
}
