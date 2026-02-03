'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, Menu } from 'lucide-react';

import { AsideLink } from './AsideLink';
import { useAsideComponent } from '../../hooks/useAsideComponent';
import CVContainer from '../about/CVContainer';
import { AnimatedThemeToggler } from '@/src/components/ui/animated-theme-toggler';
import { Link } from '@/src/i18n/routing';
import { usePathname } from 'next/navigation';

function AsideContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const {
    isOpenSoftwareProjects,
    setIsOpenSoftwareProjects,
    containerVariants,
    itemVariants,
    projectLinks,
    isCVContainerOpen,
    setIsCVContainerOpen,
    toggleLanguage,
    locale,
    translations,
    stripLocalePrefix,
    normalizePath,
    currentPath,
  } = useAsideComponent();

  return (
    <div>
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
            <AsideLink
              onClick={onNavigate}
              href="/"
              label={translations('nav.home')}
            />
            <AsideLink
              onClick={onNavigate}
              href="/about"
              label={translations('nav.about')}
            />

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
                    {projectLinks.map((project) => {
                      const projectPath = normalizePath(project.link);

                      const currentPathNoLocale =
                        stripLocalePrefix(currentPath);
                      const projectPathNoLocale =
                        stripLocalePrefix(projectPath);

                      const isActive =
                        currentPathNoLocale === projectPathNoLocale;

                      return (
                        <motion.li
                          key={project.label}
                          variants={itemVariants}
                          className="group flex cursor-pointer items-center gap-2"
                        >
                          <span
                            className={[
                              'h-1 w-1 shrink-0 rounded-full bg-muted-foreground transition-opacity duration-150',
                              isActive
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100',
                            ].join(' ')}
                          />

                          <Link
                            href={project.link}
                            onClick={onNavigate}
                            className={[
                              'text-sm font-light tracking-tight transition-colors',
                              isActive
                                ? 'text-foreground'
                                : 'text-muted-foreground group-hover:text-foreground',
                            ].join(' ')}
                          >
                            {project.label}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <AsideLink
              onClick={onNavigate}
              href="/design"
              label={translations('nav.design')}
            />
            <AsideLink
              onClick={onNavigate}
              href="/photos"
              label={translations('nav.photos')}
            />
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
    </div>
  );
}

export function DesktopAside() {
  return (
    <aside className="hidden md:sticky md:top-0 md:flex md:h-dvh md:w-64 md:shrink-0 md:flex-col md:justify-between md:overflow-y-auto md:pt-12 md:pb-6 lg:w-72">
      <AsideContent />
    </aside>
  );
}

export function MobileAside() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 -mx-4 flex items-center justify-between bg-background/80 px-4 py-3 backdrop-blur">
        <div className="flex flex-col">
          <p className="text-sm font-light tracking-tight text-foreground">
            Ricardo González Flores
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-foreground hover:underline"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
          Menu
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.22 }}
              className="relative flex h-dvh w-[min(360px,85vw)] flex-col overflow-y-auto border-r border-border bg-background px-4 pt-4 pb-6"
            >
              <div className="flex items-center justify-end pb-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-md border border-border p-2"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <AsideContent onNavigate={() => setIsOpen(false)} />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
