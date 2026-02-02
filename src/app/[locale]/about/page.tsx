import { BlurFade } from '@/src/components/ui/blur-fade';
import { MapContainer } from '@/src/components/about/MapContainer';
import { SectionJob } from '@/src/components/about/SectionJob';
import { EXPERIENCES } from '@/src/constants/about.es';

export default function AboutPage() {
  return (
    <BlurFade>
      <div className="mx-auto flex max-w-lg flex-col gap-2">
        <h3 className="text-base text-foreground">About me</h3>
        <div className="flex flex-col gap-8">
          <p className="text-sm font-light text-foreground">
            Hola, soy Ricardo, un ingeniero en desarrollo de software con una
            gran pasión por el diseño. Me encanta construir cosas y diseñarlas.
            Encuentro fascinante la capacidad de transformar simples ideas en
            productos funcionales y que se vean premium.
          </p>
          <p className="text-sm font-light text-foreground">
            En mi tiempo libre disfruto de una buena película y un café negro.
            Me encanta salir a caminar, escuchar música y últimamente estoy
            retomando salir a explorar cerros o lugares naturales.
          </p>
          <p className="text-sm font-light text-foreground">
            Me encanta desarrollar proyectos nuevos, simplemente por el gusto de
            aprender algo nuevo e incluso resolver algún problema que pueda
            ayudar a alguien que conozca.
          </p>
        </div>
        <div className="my-6">
          <MapContainer />
        </div>
        <h3 className="text-base text-foreground">Experience</h3>
        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((experience) => (
            <SectionJob
              key={experience.company}
              company={experience.company}
              position={experience.role}
              meta={experience.meta}
              description={experience.description}
              stack={experience.stack}
            />
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
