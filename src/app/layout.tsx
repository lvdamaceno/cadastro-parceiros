import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
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
      <body className={roboto.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children} <Analytics />
      </body>
    </html>
  );
}
