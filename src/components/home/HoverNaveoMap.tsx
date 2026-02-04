'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HoverNaveoMap() {
  // Posiciones de los marcadores
  const origin = { x: 24, y: 62 };
  const destination = { x: 76, y: 34 };

  // Curva Bézier cúbica mejorada - más natural y suave
  const c1 = { x: 35, y: 75 };
  const c2 = { x: 65, y: 25 };

  const pathData = `M ${origin.x + 4} ${origin.y + 4} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${destination.x} ${destination.y}`;

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden rounded-lg"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* MAP BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/naveo-light-map.png"
          alt="Naveo Map"
          fill
          className="object-cover dark:hidden"
          priority={false}
        />
        <Image
          src="/naveo-dark-map.png"
          alt="Naveo Map"
          fill
          className="hidden object-cover dark:block"
          priority={false}
        />
      </div>

      {/* Overlay sutil en hover */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 0.08, transition: { duration: 0.3 } },
        }}
        style={{
          background:
            'radial-gradient(50% 50% at 50% 45%, rgba(96,165,250,0.15) 0%, transparent 100%)',
        }}
      />

      {/* SVG para la ruta - ANTES de los marcadores para que quede debajo */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Filtro de resplandor suave */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Resplandor de fondo */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="rgba(96,165,250,0.3)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow)"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.2, ease: 'easeInOut', delay: 0.15 },
            },
          }}
        />

        {/* Línea principal - más gruesa y visible */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="rgba(96,165,250,1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.2, ease: 'easeInOut', delay: 0.15 },
            },
          }}
        />

        {/* Línea punteada por encima */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="4 6"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.2, ease: 'easeInOut', delay: 0.2 },
            },
          }}
        />

        {/* Punto animado que viaja por la ruta */}
        <motion.circle
          r="1.5"
          fill="white"
          filter="url(#glow)"
          variants={{
            rest: { opacity: 0, offsetDistance: '0%' },
            hover: {
              opacity: [0, 1, 1, 0.7],
              offsetDistance: '100%',
              transition: { duration: 1.2, ease: 'easeInOut', delay: 0.2 },
            },
          }}
          style={{
            offsetPath: `path('${pathData}')`,
          }}
        />
      </svg>

      {/* ORIGIN marker */}
      <motion.div
        className="absolute z-10"
        style={{
          left: `${origin.x}%`,
          top: `${origin.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        variants={{
          rest: { opacity: 0, scale: 0.7, y: 5 },
          hover: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.05,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hover: {
              scale: [1, 1.1, 1],
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.3,
              },
            },
          }}
        >
          <Image src="/origin-map.png" alt="Origin" width={44} height={44} />
        </motion.div>
      </motion.div>

      {/* DESTINATION marker */}
      <motion.div
        className="absolute z-10"
        style={{
          left: `${destination.x}%`,
          top: `${destination.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        variants={{
          rest: { opacity: 0, scale: 0.7, y: 5 },
          hover: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.1,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hover: {
              scale: [1, 1.15, 1],
              transition: {
                duration: 0.6,
                ease: 'easeInOut',
                delay: 1.1,
              },
            },
          }}
        >
          <Image
            src="/destination-map.png"
            alt="Destination"
            width={44}
            height={44}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
