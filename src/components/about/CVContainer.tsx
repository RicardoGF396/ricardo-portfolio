'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import CVFolder from './CVFolder';

interface CVContainerProps {
  setIsCVContainerOpen: (value: boolean) => void;
}

export default function CVContainer({
  setIsCVContainerOpen,
}: CVContainerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-white/50 backdrop-blur-2xl dark:bg-black/50"
      onClick={() => setIsCVContainerOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex gap-20" onClick={(e) => e.stopPropagation()}>
        <CVFolder language="en" />
        <CVFolder language="es" />
      </div>
    </div>,
    document.body,
  );
}
