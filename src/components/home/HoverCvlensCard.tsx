import Image from 'next/image';

export function HoverCvlensCard() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        src="/cvlens-logo.svg"
        alt="cvlens logo"
        width={250}
        height={250}
        className="dark:invert"
      />
      <div className="group flex flex-col items-center justify-center gap-2 text-center">
        <div className="relative h-[120px] w-[120px] mt-2">
          <img
            className="absolute bottom-0 left-0 z-0 w-full"
            src="/back-folder-2.png"
            alt="folder back"
          />
          <img
            className="animate-all absolute bottom-0 left-3 z-10 w-[100px] duration-300 group-hover:-translate-x-8 group-hover:-translate-y-3 group-hover:-rotate-30"
            src="/paper.png"
            alt="paper-right"
          />
          <img
            className="animate-all absolute bottom-0 left-3 z-10 w-[100px] duration-300 group-hover:translate-x-6 group-hover:-translate-y-1 group-hover:rotate-30"
            src="/paper.png"
            alt="paper-right"
          />
          <img
            className="animate-all absolute bottom-0 left-3 z-10 w-[100px] duration-300 group-hover:-translate-y-2"
            src="/paper.png"
            alt="paper-center"
          />

          <img
            className="animation-all absolute -bottom-1 left-0 z-20 w-full duration-300 group-hover:-bottom-2"
            src="/front-folder-2.png"
            alt="folder front"
          />
        </div>
      </div>
    </div>
  );
}
