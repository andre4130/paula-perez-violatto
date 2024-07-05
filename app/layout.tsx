'use client';

import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const inter = Roboto({ weight: ['100', '400', '700'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
}
