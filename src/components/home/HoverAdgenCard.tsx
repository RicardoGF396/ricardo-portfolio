'use client';

import { motion, Variants } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface HoverAdgenCardProps {
  colSpan: 1 | 2;
  info?: string;
  className?: string;
  variant?: 'playful' | 'elegant';
}

const containerVariants: Variants = {
  rest: {},
  hover: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const starVariants: Variants = {
  rest: { rotate: 0, scale: 1, y: 0 },
  hover: {
    rotate: 24,
    scale: 1.05,
    y: -3,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
};

const circleVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -12,
    scale: 1.03,
    transition: { type: 'spring', stiffness: 260, damping: 16 },
  },
};

const squareVariants: Variants = {
  rest: { scale: 1.2, rotate: 0 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.25, ease: 'easeOut' },
    rotate: -15,
  },
};

const cursorVariants: Variants = {
  rest: { rotate: 0, x: 0, y: 0 },
  hover: {
    rotate: -10,
    x: -10,
    y: -6,
    transition: { type: 'spring', stiffness: 240, damping: 18 },
  },
};

const pencilVariants: Variants = {
  rest: { rotate: 0, x: 0, y: 0 },
  hover: {
    rotate: -12,
    x: -10,
    y: 6,
    transition: { type: 'spring', stiffness: 220, damping: 16 },
  },
};

export function HoverAdgenCard({
  colSpan,
  info,
  className,
  variant = 'elegant',
}: HoverAdgenCardProps) {
  const isPlayful = variant === 'playful';

  // Adjust intensity based on variant
  const starHoverRotate = isPlayful ? 34 : 24;
  const floatDistance = isPlayful ? -16 : -12;
  const cursorNudge = isPlayful
    ? { x: -14, y: -10, rotate: -14 }
    : { x: -10, y: -6, rotate: -10 };
  const pencilNudge = isPlayful
    ? { x: -14, y: 10, rotate: -16 }
    : { x: -10, y: 6, rotate: -12 };

  return (
    <motion.div
      className={twMerge('relative h-full w-full', className)}
      variants={containerVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* subtle highlight sweep */}
      <motion.div
        aria-hidden="true"
        className={twMerge(
          'pointer-events-none absolute top-0 -left-1/2 h-full w-1/2',
          'bg-linear-to-r from-transparent via-white/10 to-transparent',
          'opacity-0',
        )}
        initial={{ x: 0, opacity: 0 }}
        whileHover={{
          x: '200%',
          opacity: 1,
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
      />

      {/* STAR (top-left) */}
      <motion.img
        src="/star.svg"
        alt=""
        draggable={false}
        className={twMerge(
          'pointer-events-none absolute top-10 left-8',
          'h-[120px] w-[120px] select-none',
        )}
        variants={
          {
            rest: { rotate: 0, scale: 1, y: 0 },
            hover: {
              rotate: starHoverRotate,
              scale: isPlayful ? 1.08 : 1.05,
              y: isPlayful ? -5 : -3,
              transition: { type: 'spring', stiffness: 260, damping: 18 },
            },
          } as Variants
        }
      />

      {/* BLUE PANEL-ish RECT (if your cursor/square composition covers it, ignore)
              We'll use SQUARE as the main center piece (like in your image). */}

      {/* SQUARE (center) */}
      <motion.img
        src="/square.svg"
        alt=""
        draggable={false}
        className={twMerge(
          'pointer-events-none absolute top-1/2 left-1/2',
          '-translate-x-1/2 -translate-y-1/2',
          'h-[100px] w-[100px] select-none',
        )}
        variants={squareVariants}
      />

      {/* CURSOR (near top of square) */}
      <motion.img
        src="/cursor.svg"
        alt=""
        draggable={false}
        className={twMerge(
          'pointer-events-none absolute top-[38%] left-[58%]',
          'h-[64px] w-[64px] select-none',
        )}
        variants={
          {
            rest: { rotate: 0, x: 0, y: 0 },
            hover: {
              rotate: cursorNudge.rotate,
              x: cursorNudge.x,
              y: cursorNudge.y,
              transition: { type: 'spring', stiffness: 240, damping: 18 },
            },
          } as Variants
        }
      />

      {/* CIRCLES (bottom-left) */}
      <motion.img
        src="/circles.svg"
        alt=""
        draggable={false}
        className={twMerge(
          'pointer-events-none absolute bottom-6 left-3',
          'h-[120px] w-[120px] select-none',
        )}
        variants={
          {
            rest: { y: 0, scale: 1 },
            hover: {
              y: floatDistance,
              scale: isPlayful ? 1.05 : 1.03,
              transition: { type: 'spring', stiffness: 260, damping: 16 },
            },
          } as Variants
        }
      />

      {/* PENCIL (right) */}
      <motion.img
        src="/pencil.svg"
        alt=""
        draggable={false}
        className={twMerge(
          'pointer-events-none absolute top-[58%] right-6',
          'h-[90px] w-[90px] select-none',
        )}
        variants={
          {
            rest: { rotate: 0, x: 0, y: 0 },
            hover: {
              rotate: pencilNudge.rotate,
              x: pencilNudge.x,
              y: pencilNudge.y,
              transition: { type: 'spring', stiffness: 220, damping: 16 },
            },
          } as Variants
        }
      />
    </motion.div>
  );
}
