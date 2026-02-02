import { Variants } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/routing';
import { useEffect, useMemo, useState } from 'react';

export function useAsideComponent() {
  const [isOpenSoftwareProjects, setIsOpenSoftwareProjects] = useState(false);
  const [isCVContainerOpen, setIsCVContainerOpen] = useState(false);
  const [now, setNow] = useState<Date>(() => new Date());
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const translations = useTranslations('aside');

  const projectLinks = [
    {
      label: translations('nav.software.naveo'),
      link: '/naveo',
    },
    {
      label: translations('nav.software.pura-banda'),
      link: '/pura-banda',
    },
    {
      label: translations('nav.software.adgen'),
      link: '/adgen',
    },
    {
      label: translations('nav.software.don-cheto-app'),
      link: '/don-cheto-app',
    },
    {
      label: translations('nav.software.cvlens'),
      link: '/cvlens',
    },
    {
      label: translations('nav.software.crieg'),
      link: '/crieg',
    },
    {
      label: translations('nav.software.shopfloor-managment'),
      link: '/shopfloor-managment',
    },
    {
      label: translations('nav.software.kiosko-movil-gto'),
      link: '/kiosko-movil-gto',
    },
    {
      label: translations('nav.software.midbar'),
      link: '/midbar',
    },
    {
      label: translations('nav.software.more'),
      link: '/more',
    },
  ];

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

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

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
  };
}
