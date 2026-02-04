interface CVFolderProps {
  language: 'es' | 'en';
}

export default function CVFolder({ language }: CVFolderProps) {
  return (
    <a
      href={
        language === 'es'
          ? 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/portafolio/Ricardo_Gonzalez_Flores_CV.pdf'
          : 'https://ahmbzaaiwzglvhtpotvp.supabase.co/storage/v1/object/public/portafolio/Ricardo_Gonzalez_Flores_Resume.pdf'
      }
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center gap-2 text-center"
    >
      <div className="relative h-[120px] w-[120px] cursor-pointer">
        <img
          className="absolute bottom-0 left-0 z-0 w-full"
          src="/back-folder-2.png"
          alt="folder back"
        />
        <img
          className="animate-all absolute bottom-0 left-3 z-10 w-[100px] duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-10"
          src="/paper.png"
          alt="paper"
        />
        <img
          className="animation-all absolute -bottom-1 left-0 z-20 w-full duration-300 group-hover:-bottom-2"
          src="/front-folder-2.png"
          alt="folder front"
        />
      </div>

      <p className="bg-blur-sm w-fit rounded-sm bg-black/40 px-2 py-0.5 text-sm text-white transition-colors duration-300 group-hover:bg-black/60 dark:bg-white/80 dark:text-black">
        {language === 'es' ? 'Español' : 'English'}
      </p>
    </a>
  );
}
