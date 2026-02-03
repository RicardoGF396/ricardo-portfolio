'use client';

import { useEffect, useRef, useState } from 'react';

type UseIntersectionObserverOptions = IntersectionObserverInit & {
  freezeOnceVisible?: boolean;
};

export function useIntersectionObserver<T extends Element>(
  options?: UseIntersectionObserverOptions,
) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible,
  } = options || {};

  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return { ref, isIntersecting };
}
