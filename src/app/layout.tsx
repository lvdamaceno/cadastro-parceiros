import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';

import { Poppins, Roboto } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cadastro-parceiros.vercel.app'),
  title: 'Seja um parceiro UltraLog',
  description: 'Página de cadastro de parceiros da Ultralog',
  openGraph: {
    siteName: 'Cadastro de Parceiros Ultralog',
    images: '/logo.png',
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children} <SpeedInsights /> <Analytics />
      </body>
    </html>
  );
}
