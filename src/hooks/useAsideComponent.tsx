import { Variants } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/routing';
import { useEffect, useMemo, useState } from 'react';
import { SOFTWARE_PROJECTS } from '../content/software-projects';

export function useAsideComponent() {
  const [isOpenSoftwareProjects, setIsOpenSoftwareProjects] = useState(false);
  const [isCVContainerOpen, setIsCVContainerOpen] = useState(false);
  const [now, setNow] = useState<Date>(() => new Date());
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const translations = useTranslations('aside');
  const currentPath = normalizePath(pathname);
  const isOnSoftwareDetail = currentPath.includes('/software/');

  const projectLinks = useMemo(() => {
    return SOFTWARE_PROJECTS.map((p) => ({
      label: translations(p.labelKey),
      link: `/software/${p.slug}`,
    }));
  }, [translations]);

  const containerVariants: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.18,
        ease: 'easeInOut',
        when: 'afterChildren',
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.22,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      x: -10,
      opacity: 0,
      transition: { duration: 0.09, ease: 'easeOut' },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.12, ease: 'easeOut' },
    },
  };

  const formatter = useMemo(() => {
    return new Intl.DateTimeFormat('es-MX', {
      timeZone: 'America/Mexico_City',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }, []);

  const timeString = formatter.format(now);

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  function stripLocalePrefix(path: string) {
    const normalized = normalizePath(path);
    return normalized.replace(/^\/(en|es)(?=\/|$)/, '');
  }

  function normalizePath(path: string) {
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
    return path;
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isOnSoftwareDetail) {
      setIsOpenSoftwareProjects(true);
    }
  }, [isOnSoftwareDetail, setIsOpenSoftwareProjects]);

  return {
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
    stripLocalePrefix,
    normalizePath,
    currentPath,
    isOnSoftwareDetail,
  };
}
