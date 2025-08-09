import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import { ContainerWrapper } from '@/shared/components/container';

import './globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'История',
  description: 'Исторические даты',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${ptSans.className}`}>
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
    </body>
    </html>
  );
}
