import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import '@/src/app/globals.css';
import SmoothScrolling from '@/src/components/layout/SmoothScrolling';
import AsideComponent from '@/src/components/layout/AsideComponent';
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
  title: 'ricardogf',
  description: 'Personal site',
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
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScrolling>
            <div className="relative mx-auto flex w-full max-w-7xl gap-12 px-4">
              <AsideComponent />
              <div className="relative z-10 mt-8 flex-1 pb-12">
                {children}
                <div className="fixed bottom-0 left-0 h-12 w-full">
                  <ProgressiveBlur height="100%" position="bottom" />
                </div>
              </div>
            </div>
          </SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
