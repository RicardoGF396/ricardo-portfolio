'use client';

import { AsideLink } from './AsideLink';
import { AnimatePresence, motion } from 'framer-motion';
import { useAsideComponent } from '../../hooks/useAsideComponent';
import CVContainer from '../about/CVContainer';
import { AnimatedThemeToggler } from '@/src/components/ui/animated-theme-toggler';
import { Link } from '@/src/i18n/routing';

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
    toggleLanguage,
    locale,
    translations,
  } = useAsideComponent();

  return (
    <aside className="sticky top-0 z-50 flex h-dvh flex-col justify-between pt-12 pb-6">
      {isCVContainerOpen && (
        <CVContainer setIsCVContainerOpen={setIsCVContainerOpen} />
      )}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <p className="text-sm font-light tracking-tight text-foreground">
            Ricardo González Flores
          </p>
          <p className="text-sm font-light tracking-tight text-muted-foreground">
            {translations('role')}
          </p>
        </div>

        <section className="text-sm font-light tracking-tight text-foreground">
          <ul className="flex flex-col gap-1">
            <AsideLink href="/" label={translations('nav.home')} />
            <AsideLink href="/about" label={translations('nav.about')} />
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setIsOpenSoftwareProjects((prev) => !prev)}
                className="cursor-pointer text-left text-sm hover:underline"
              >
                <span>{translations('nav.software.name')}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpenSoftwareProjects && (
                  <motion.ul
                    key="software-sublinks"
                    variants={containerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="mt-1 flex flex-col gap-1 overflow-hidden"
                  >
                    {projectLinks.map((project) => (
                      <motion.li
                        key={project.label}
                        variants={itemVariants}
                        className="group flex cursor-pointer items-center gap-2"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                        <Link
                          href={project.link}
                          className="text-sm font-light tracking-tight text-muted-foreground group-hover:text-foreground"
                        >
                          {project.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <AsideLink href="/design" label={translations('nav.design')} />
            <AsideLink href="/photos" label={translations('nav.photos')} />
          </ul>
        </section>

        <section className="flex flex-col gap-2 text-sm font-light tracking-tight text-muted-foreground">
          <p>{translations('sections.contact')}</p>
          <ul className="flex flex-col gap-1 text-foreground">
            <button
              className="w-fit cursor-pointer hover:underline"
              type="button"
              onClick={() => setIsCVContainerOpen(true)}
            >
              {translations('actions.cv')}
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

        <section className="flex flex-col gap-2 text-sm font-light tracking-tight text-muted-foreground">
          <p>{translations('sections.theme.name')}</p>
          <AnimatedThemeToggler />
          <button
            className="w-fit cursor-pointer text-foreground hover:underline"
            type="button"
            onClick={toggleLanguage}
          >
            {locale === 'en' ? 'Español' : 'English'}
          </button>
        </section>
      </div>
      <div className="flex flex-col gap-1 text-sm font-light tracking-tight text-muted-foreground">
        <p>{translations('location')}</p>
        <p>{timeString}</p>
      </div>
    </aside>
  );
}
