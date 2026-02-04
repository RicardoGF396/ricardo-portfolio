'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { waveSolo } from '@/src/constants/waveSolo';


function IconPrev(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6 5h2v14H6V5zm3.5 7 9-7v14l-9-7z" />
    </svg>
  );
}

function IconNext(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16 5h2v14h-2V5zM5.5 12l9 7V5l-9 7z" />
    </svg>
  );
}

function IconPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function IconPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  );
}

export function HoverAudioPlayer() {
  const [isHover, setIsHover] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const anim = lottieRef.current;
    if (!anim) return;

    if (isHover) {
      anim.setSpeed(1);
      anim.play();
    } else {
      anim.goToAndStop(0, true);
    }
  }, [isHover]);

  return (
    <div
      className="group relative w-full h-full overflow-hidden p-4 pt-14"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Header mini */}
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-light tracking-tight text-muted-foreground">
          Pura Banda
        </div>
      </div>

      {/* Waves */}
      <div className="relative flex h-[84px] items-center justify-center">
        {/* brillo suave */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0"
          animate={{ opacity: isHover ? 0.12 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            background:
              'radial-gradient(60% 70% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)',
          }}
        />

        <div className="w-[240px]">
          <Lottie
            lottieRef={lottieRef}
            animationData={waveSolo}
            autoplay={false}
            loop
            style={{ width: '100%', height: '84px' }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          className="rounded-full border bg-background/40 p-2 text-muted-foreground transition-transform duration-200 hover:scale-[1.04] hover:text-foreground"
          aria-label="Previous"
        >
          <IconPrev className="h-5 w-5" />
        </button>

        <motion.button
          type="button"
          className="rounded-full border bg-background/60 p-3 text-foreground shadow-sm"
          aria-label={isHover ? 'Pause' : 'Play'}
          animate={{ scale: isHover ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 240, damping: 18 }}
        >
          {isHover ? (
            <IconPause className="h-6 w-6" />
          ) : (
            <IconPlay className="h-6 w-6" />
          )}
        </motion.button>

        <button
          type="button"
          className="rounded-full border bg-background/40 p-2 text-muted-foreground transition-transform duration-200 hover:scale-[1.04] hover:text-foreground"
          aria-label="Next"
        >
          <IconNext className="h-5 w-5" />
        </button>
      </div>

      {/* Optional: barra/progreso fake */}
      <div className="mt-4">
        <div className="h-1 w-full rounded-full bg-muted/40">
          <motion.div
            className="h-1 rounded-full bg-foreground/70"
            initial={{ width: '12%' }}
            animate={{ width: isHover ? '68%' : '12%' }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  );
}
