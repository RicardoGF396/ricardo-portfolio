export type SoftwareProject = {
  slug: string;
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
  year?: string;
  cover: {
    src: string;
    altKey: string;
  };
  tags?: string[];
  gallery?: { src: string; altKey: string }[];
  link?: string;
};

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    slug: 'naveo',
    labelKey: 'nav.software.naveo',
    titleKey: 'naveo.title',
    descriptionKey: 'naveo.description',
    year: '2026',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-1.png',
      altKey: 'naveo.coverAlt',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Dart',
      'Flutter',
      'Firebase',
      'PostgreSQL',
      'Vercel',
      'Supabase Auth',
      'React JS',
      'Next.js',
      'Supabase',
      'Tremor Raw',
      'Tailwind CSS',
      'Radix UI',
      'Mapbox',
      'Recharts',
      'Lucide Icons',
      'Tanstack',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
    ],
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-1.png',
        altKey: 'naveo.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-2.png',
        altKey: 'naveo.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-3.png',
        altKey: 'naveo.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-4.png',
        altKey: 'naveo.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-5.png',
        altKey: 'naveo.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-6.png',
        altKey: 'naveo.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-7.png',
        altKey: 'naveo.gallery.7',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-8.png',
        altKey: 'naveo.gallery.8',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-9.png',
        altKey: 'naveo.gallery.9',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-10.png',
        altKey: 'naveo.gallery.10',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-11.png',
        altKey: 'naveo.gallery.11',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-12.png',
        altKey: 'naveo.gallery.12',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-13.png',
        altKey: 'naveo.gallery.13',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-14.png',
        altKey: 'naveo.gallery.14',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-15.png',
        altKey: 'naveo.gallery.15',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-16.png',
        altKey: 'naveo.gallery.16',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-17.png',
        altKey: 'naveo.gallery.17',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-18.png',
        altKey: 'naveo.gallery.18',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-19.png',
        altKey: 'naveo.gallery.19',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-20.png',
        altKey: 'naveo.gallery.20',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-21.png',
        altKey: 'naveo.gallery.21',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-22.png',
        altKey: 'naveo.gallery.22',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-23.png',
        altKey: 'naveo.gallery.23',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-24.png',
        altKey: 'naveo.gallery.24',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-25.png',
        altKey: 'naveo.gallery.25',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-26.png',
        altKey: 'naveo.gallery.26',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-27.png',
        altKey: 'naveo.gallery.27',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/naveo-28.png',
        altKey: 'naveo.gallery.28',
      },
    ],
    link: 'https://www.naveo.mx/',
  },
  {
    slug: 'pura-banda',
    labelKey: 'nav.software.pura-banda',
    titleKey: 'pura-banda.title',
    descriptionKey: 'pura-banda.description',
    year: '2025',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-1.png',
      altKey: 'pura-banda.coverAlt',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Dart',
      'Flutter',
      'Next JS',
      'React',
      'Node JS',
      'Hostinger VPS',
      'Tailwind CSS',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.uanify.pura_banda_app&hl=es_MX',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-1.png',
        altKey: 'pura-banda.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-2.png',
        altKey: 'pura-banda.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-3.png',
        altKey: 'pura-banda.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-4.png',
        altKey: 'pura-banda.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-5.png',
        altKey: 'pura-banda.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-6.png',
        altKey: 'pura-banda.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-7.png',
        altKey: 'pura-banda.gallery.7',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-8.png',
        altKey: 'pura-banda.gallery.8',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-9.png',
        altKey: 'pura-banda.gallery.9',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-10.png',
        altKey: 'pura-banda.gallery.10',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-11.png',
        altKey: 'pura-banda.gallery.11',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-12.png',
        altKey: 'pura-banda.gallery.12',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-13.png',
        altKey: 'pura-banda.gallery.13',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-14.png',
        altKey: 'pura-banda.gallery.14',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-15.png',
        altKey: 'pura-banda.gallery.15',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-16.png',
        altKey: 'pura-banda.gallery.16',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-17.png',
        altKey: 'pura-banda.gallery.17',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-18.png',
        altKey: 'pura-banda.gallery.18',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-19.png',
        altKey: 'pura-banda.gallery.19',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-20.png',
        altKey: 'pura-banda.gallery.20',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-21.png',
        altKey: 'pura-banda.gallery.21',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-22.png',
        altKey: 'pura-banda.gallery.22',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/pb-23.png',
        altKey: 'pura-banda.gallery.23',
      },
    ],
  },
  {
    slug: 'adgen',
    labelKey: 'nav.software.adgen',
    titleKey: 'adgen.title',
    descriptionKey: 'adgen.description',
    year: '2025',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-1.png',
      altKey: 'adgen.coverAlt',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React JS',
      'Next.js',
      'Konva JS',
      'Tailwind CSS',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
      'Zustand',
      'GSAP',
      'Ant Design',
      'Radix UI',
      'Shadcn UI',
      'JS Zip',
    ],
    link: 'https://adgen-website.vercel.app/',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-1.png',
        altKey: 'adgen.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-2.png',
        altKey: 'adgen.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-3.png',
        altKey: 'adgen.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-4.png',
        altKey: 'adgen.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-5.png',
        altKey: 'adgen.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-6.png',
        altKey: 'adgen.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-7.png',
        altKey: 'adgen.gallery.7',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-8.png',
        altKey: 'adgen.gallery.8',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-9.png',
        altKey: 'adgen.gallery.9',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-10.png',
        altKey: 'adgen.gallery.10',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-11.png',
        altKey: 'adgen.gallery.11',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-12.png',
        altKey: 'adgen.gallery.12',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-13.png',
        altKey: 'adgen.gallery.13',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-14.png',
        altKey: 'adgen.gallery.14',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-15.png',
        altKey: 'adgen.gallery.15',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-16.png',
        altKey: 'adgen.gallery.16',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-17.png',
        altKey: 'adgen.gallery.17',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-18.png',
        altKey: 'adgen.gallery.18',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-19.png',
        altKey: 'adgen.gallery.19',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-19-1.png',
        altKey: 'adgen.gallery.19-1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-20.png',
        altKey: 'adgen.gallery.20',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-21.png',
        altKey: 'adgen.gallery.21',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-22.png',
        altKey: 'adgen.gallery.22',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-23.png',
        altKey: 'adgen.gallery.23',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/adgen-24.png',
        altKey: 'adgen.gallery.24',
      },
    ],
  },
  {
    slug: 'don-cheto-app',
    labelKey: 'nav.software.don-cheto-app',
    titleKey: 'don-cheto-app.title',
    descriptionKey: 'don-cheto-app.description',
    year: '2025',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-1.png',
      altKey: 'don-cheto-app.coverAlt',
    },
    tags: ['Swift', 'SwiftUI', 'iOS', 'Figma', 'CI/CD', 'Git', 'GitHub'],
    link: 'https://play.google.com/store/apps/details?id=com.uanify.don.cheto.mexico&hl=es_MX',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-1.png',
        altKey: 'don-cheto-app.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-2.png',
        altKey: 'don-cheto-app.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-3.png',
        altKey: 'don-cheto-app.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-4.png',
        altKey: 'don-cheto-app.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-5.png',
        altKey: 'don-cheto-app.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-6.png',
        altKey: 'don-cheto-app.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-7.png',
        altKey: 'don-cheto-app.gallery.7',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-8.png',
        altKey: 'don-cheto-app.gallery.8',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/dcm-9.png',
        altKey: 'don-cheto-app.gallery.9',
      },
    ],
  },
  {
    slug: 'cvlens',
    labelKey: 'nav.software.cvlens',
    titleKey: 'cvlens.title',
    descriptionKey: 'cvlens.description',
    year: '2023',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-1.png',
      altKey: 'cvlens.coverAlt',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React JS',
      'Next.js',
      'Tailwind CSS',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
      'OpenRouter',
      'Gemini Flash 3',
      'Vercel',
      'Zustand',
      'PDF Lib',
      'Zod',
      'Lucide Icons',
    ],
    link: 'https://cvlens.io',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-1.png',
        altKey: 'cvlens.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-2.png',
        altKey: 'cvlens.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-3.png',
        altKey: 'cvlens.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-4.png',
        altKey: 'cvlens.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-5.png',
        altKey: 'cvlens.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-6.png',
        altKey: 'cvlens.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-7.png',
        altKey: 'cvlens.gallery.7',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-8.png',
        altKey: 'cvlens.gallery.8',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-9.png',
        altKey: 'cvlens.gallery.9',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-10.png',
        altKey: 'cvlens.gallery.10',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-11.png',
        altKey: 'cvlens.gallery.11',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-12.png',
        altKey: 'cvlens.gallery.12',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/cvlens-13.png',
        altKey: 'cvlens.gallery.13',
      },
    ],
  },
  {
    slug: 'crieg',
    labelKey: 'nav.software.crieg',
    titleKey: 'crieg.title',
    descriptionKey: 'crieg.description',
    year: '2023',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-1.png',
      altKey: 'crieg.coverAlt',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React JS',
      'Next.js',
      'Tailwind CSS',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
      'Vercel',
      'Resend',
      'Stripe',
      'HubSpot',
      'Lucide Icons',
      'PDF Lib',
      'Alegra API',
    ],
    link: 'https://www.crieg.com.mx/',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-1.png',
        altKey: 'crieg.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-2.png',
        altKey: 'crieg.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-3.png',
        altKey: 'crieg.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-4.png',
        altKey: 'crieg.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-5.png',
        altKey: 'crieg.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-6.png',
        altKey: 'crieg.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-7.png',
        altKey: 'crieg.gallery.7',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-8.png',
        altKey: 'crieg.gallery.8',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-9.png',
        altKey: 'crieg.gallery.9',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-10.png',
        altKey: 'crieg.gallery.10',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-11.png',
        altKey: 'crieg.gallery.11',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-12.png',
        altKey: 'crieg.gallery.12',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/crieg-13.png',
        altKey: 'crieg.gallery.13',
      },
    ],
  },
  {
    slug: 'shopfloor-managment',
    labelKey: 'nav.software.shopfloor-managment',
    titleKey: 'shopfloor-managment.title',
    descriptionKey: 'shopfloor-managment.description',
    year: '2023',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-1.png',
      altKey: 'shopfloor-managment.coverAlt',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React JS',
      'Node JS',
      'Tailwind CSS',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
      'Vercel',
      'Nivo',
      'AWS',
    ],
    link: '',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-1.png',
        altKey: 'shopfloor-managment.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-2.png',
        altKey: 'shopfloor-managment.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-3.png',
        altKey: 'shopfloor-managment.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-4.png',
        altKey: 'shopfloor-managment.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-5.png',
        altKey: 'shopfloor-managment.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-6.png',
        altKey: 'shopfloor-managment.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/vw-7.png',
        altKey: 'shopfloor-managment.gallery.7',
      },
    ],
  },
  {
    slug: 'kiosko-movil-gto',
    labelKey: 'nav.software.kiosko-movil-gto',
    titleKey: 'kiosko-movil-gto.title',
    descriptionKey: 'kiosko-movil-gto.description',
    year: '2023',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-1.png',
      altKey: 'kiosko-movil-gto.coverAlt',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React JS',
      'Node JS',
      'Tailwind CSS',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
      'Vercel',
      'Nivo',
      'AWS',
      'Open AI API',
      'React Native',
    ],
    link: '',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-1.png',
        altKey: 'kiosko-movil-gto.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-2.png',
        altKey: 'kiosko-movil-gto.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-3.png',
        altKey: 'kiosko-movil-gto.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-4.png',
        altKey: 'kiosko-movil-gto.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-5.png',
        altKey: 'kiosko-movil-gto.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-6.png',
        altKey: 'kiosko-movil-gto.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/kgto-7.png',
        altKey: 'kiosko-movil-gto.gallery.7',
      },
    ],
  },
  {
    slug: 'midbar',
    labelKey: 'nav.software.midbar',
    titleKey: 'midbar.title',
    descriptionKey: 'midbar.description',
    year: '2023',
    cover: {
      src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-1.png',
      altKey: 'midbar.coverAlt',
    },
    tags: [
      'Flutter',
      'Dart',
      'Firebase',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
      'Riverpod',
    ],
    link: '',
    gallery: [
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-1.png',
        altKey: 'midbar.gallery.1',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-2.png',
        altKey: 'midbar.gallery.2',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-3.png',
        altKey: 'midbar.gallery.3',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-4.png',
        altKey: 'midbar.gallery.4',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-5.png',
        altKey: 'midbar.gallery.5',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-6.png',
        altKey: 'midbar.gallery.6',
      },
      {
        src: 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/software-portfolio/mid-7.png',
        altKey: 'midbar.gallery.7',
      },
    ],
  },
];

export function getSoftwareProjectBySlug(slug: string) {
  return SOFTWARE_PROJECTS.find((p) => p.slug === slug);
}
