'use client';

import { useMemo, useRef, useState } from 'react';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { helloLootieSpanish, helloLottie } from '../../constants/hello-lootie';
import { twMerge } from 'tailwind-merge';

interface LanguageAnimationProps {
  language: 'es' | 'en';
}

type Phase = 'forward' | 'reverse';

export default function LanguageAnimation({
  language,
}: LanguageAnimationProps) {
  const TARGET_FRAMES = 80;
  const [isAnimating, setIsAnimating] = useState(false);
  const [phase, setPhase] = useState<Phase>('forward');
  const [hasTriggeredReverse, setHasTriggeredReverse] = useState(false);

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const animationData = useMemo(
    () => (language === 'es' ? helloLootieSpanish : helloLottie),
    [language],
  );

  const playForward = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(1);
      lottieRef.current.setSpeed(1.15);
      if (language === 'es') {
        lottieRef.current.playSegments([0, TARGET_FRAMES], true);
      } else {
        lottieRef.current.play();
      }
    }
  };

  const playReverse = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(-1);
      lottieRef.current.setSpeed(1.25);
      lottieRef.current.playSegments([TARGET_FRAMES, 0], true);
    }
  };

  const handleTrigger = () => {
    if (language === 'es') {
      setPhase('forward');
    }
    setHasTriggeredReverse(false);
    setIsAnimating(true);
  };

  const handleComplete = () => {
    if (language !== 'es' || phase === 'reverse') {
      setIsAnimating(false);
      return;
    }

    if (phase === 'forward' && !hasTriggeredReverse) {
      setPhase('reverse');
      setHasTriggeredReverse(true);
      window.setTimeout(() => {
        playReverse();
      }, 500);
    }
  };

  return (
    <div>
      <button
        className="w-fit cursor-pointer text-left text-sm font-light tracking-tight text-foreground hover:underline"
        onClick={handleTrigger}
      >
        {language === 'es' ? 'Spanish' : 'English'}
      </button>

      {isAnimating && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
          <div className="w-full max-w-2xl">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              onDOMLoaded={() => playForward()}
              onComplete={handleComplete}
              className={twMerge(
                'mx-auto',
                language === 'es' ? 'h-auto w-[400px]' : 'h-full w-full',
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
