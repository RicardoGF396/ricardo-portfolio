import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import '@/src/app/globals.css';
import SmoothScrolling from '@/src/components/layout/SmoothScrolling';
import {
  DesktopAside,
  MobileAside,
} from '@/src/components/layout/AsideComponent';
import { ProgressiveBlur } from '@/src/components/ui/progressive-blur';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ricardo ✌',
  description: 'Personal site',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="light">
      <body className={`${inter.variable} overflow-x-hidden font-sans`}>
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <SmoothScrolling>
            <div className="relative mx-auto w-full max-w-7xl px-4">
              {/* Mobile header + drawer */}
              <MobileAside />

              <div className="flex w-full flex-col md:flex-row md:gap-2">
                {/* Desktop aside */}
                <DesktopAside />

                {/* Main content */}
                <main className="relative z-10 flex-1 pt-6 pb-12 md:pt-8">
                  {children}

                  <div className="fixed bottom-0 left-0 h-12 w-full">
                    <ProgressiveBlur height="100%" position="bottom" />
                  </div>
                </main>
              </div>
            </div>
          </SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
