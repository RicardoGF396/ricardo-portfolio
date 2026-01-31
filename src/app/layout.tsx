import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import SmoothScrolling from '../components/SmoothScrolling';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ricardogf',
  description: 'Personal site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" data-theme="light">
      <body className={`${inter.variable} font-sans`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
