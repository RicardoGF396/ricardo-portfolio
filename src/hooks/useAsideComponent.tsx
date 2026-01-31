import { Variants } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export function useAsideComponent() {
  const [isOpenSoftwareProjects, setIsOpenSoftwareProjects] = useState(false);
  const [isCVContainerOpen, setIsCVContainerOpen] = useState(true);
  const [now, setNow] = useState<Date>(() => new Date());

  const projectLinks = [
    {
      label: 'Naveo',
      link: '/naveo',
    },
    {
      label: 'Pura Banda',
      link: '/pura-banda',
    },
    {
      label: 'Adgen',
      link: '/adgen',
    },
    {
      label: 'Don Cheto App',
      link: '/don-cheto-app',
    },
    {
      label: 'CVLens',
      link: '/cvlens',
    },
    {
      label: 'Crieg',
      link: '/crieg',
    },
    {
      label: 'Shopfloor Managment',
      link: '/shopfloor-managment',
    },
    {
      label: 'Kiosko móvil GTO',
      link: '/kiosko-movil-gto',
    },
    {
      label: 'Midbar',
      link: '/midbar',
    },
    {
      label: 'More...',
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
  };
}
