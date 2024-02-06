import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Seja um parceiro UltraLog',
  description: 'Página de cadastro de parceiros da Ultralog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
