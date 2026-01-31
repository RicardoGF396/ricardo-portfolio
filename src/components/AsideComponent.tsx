'use client';

import { AsideLink } from './AsideLink';
import { AnimatePresence, motion } from 'framer-motion';
import { useAsideComponent } from '../hooks/useAsideComponent';
import Link from 'next/link';
import LanguageAnimation from './LanguageAnimation';
import CVContainer from './CVContainer';

export default function AsideComponent() {
  const {
    isOpenSoftwareProjects,
    setIsOpenSoftwareProjects,
    containerVariants,
    itemVariants,
    projectLinks,
    timeString,
    isCVContainerOpen,
    setIsCVContainerOpen,
  } = useAsideComponent();

  return (
    <aside className="sticky top-0 z-50 flex h-dvh flex-col justify-between pt-12 pb-6">
      {isCVContainerOpen && (
        <CVContainer setIsCVContainerOpen={setIsCVContainerOpen} />
      )}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <p className="text-sm font-light tracking-tight text-gray-900">
            Ricardo González Flores
          </p>
          <p className="text-sm font-light tracking-tight text-[#5B5B5B]">
            Software Engineer & Designer
          </p>
        </div>

        <section className="text-sm font-light tracking-tight text-black">
          <ul className="flex flex-col gap-1">
            <AsideLink href="/" label="Home" />
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setIsOpenSoftwareProjects((prev) => !prev)}
                className="cursor-pointer text-left text-sm hover:underline"
              >
                <span>Software</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpenSoftwareProjects && (
                  <motion.ul
                    key="software-sublinks"
                    variants={containerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="mt-1 flex flex-col gap-1 overflow-hidden border-l border-white/10"
                  >
                    {projectLinks.map((project) => (
                      <motion.li
                        key={project.label}
                        variants={itemVariants}
                        className="group flex cursor-pointer items-center gap-2"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-[#5B5B5B] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                        <Link
                          href={project.link}
                          className="text-sm font-light tracking-tight text-[#5B5B5B] group-hover:text-[#2F2F2F]"
                        >
                          {project.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <AsideLink href="/about" label="About" />
            <AsideLink href="/design" label="Design" />
            <AsideLink href="/photos" label="Photos" />
          </ul>
        </section>

        <section className="flex flex-col gap-2 text-sm font-light tracking-tight text-[#5B5B5B]">
          <p>Contact</p>
          <ul className="flex flex-col gap-1 text-black">
            <button
              className="w-fit cursor-pointer hover:underline"
              type="button"
              onClick={() => setIsCVContainerOpen(true)}
            >
              CV
            </button>
            <AsideLink
              href="https://www.linkedin.com/in/ricardogf396/"
              label="LinkedIn"
              externalLink
            />
            <AsideLink
              href="mailto:ricardogf396@gmail.com"
              label="Email"
              externalLink
            />
            <AsideLink href="tel:+524774122683" label="Phone" externalLink />
            <AsideLink
              href="https://github.com/RicardoGF396"
              label="Github"
              externalLink
            />
          </ul>
        </section>

        <section className="flex flex-col gap-2 text-sm font-light tracking-tight text-[#5B5B5B]">
          <p>Languages</p>
          <ul className="flex flex-col gap-1 text-black">
            <LanguageAnimation language="es" />
            <LanguageAnimation language="en" />
          </ul>
        </section>
      </div>
      <div className="flex flex-col gap-1 text-sm font-light tracking-tight text-[#5B5B5B]">
        <p>León, Gto. México</p>
        <p>{timeString}</p>
      </div>
    </aside>
  );
}
