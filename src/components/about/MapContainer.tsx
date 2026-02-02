'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function MapContainer() {
  return (
    <div className="relative h-[250px] w-full overflow-hidden">
      <div className="absolute bottom-4 left-4 z-30 rounded-sm border bg-card/80 px-2 py-1 backdrop-blur-lg">
        <p className="text-xs font-normal text-foreground">León, Gto. México</p>
      </div>

      <div className="absolute top-[80%] left-[60%] z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="box-shadow-lg size-6 rounded-full border-4 border-white bg-blue-500 dark:bg-blue-600 z-10" />
        <motion.div
          className="absolute inset-0 rounded-full border border-blue-500/70 dark:border-blue-600/70 bg-blue-500/50 dark:bg-blue-600/50 z-1"
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 5.2, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
            repeatDelay: 1,
          }}
        />
      </div>

      <Image
        src="/map-dark.png"
        alt="map"
        fill
        className="hidden rounded-lg object-cover dark:block"
        priority
      />

      <Image
        src="/map-light.png"
        alt="map"
        fill
        className="rounded-lg object-cover dark:hidden"
        priority
      />
    </div>
  );
}
