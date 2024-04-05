import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { SessionProvider } from 'next-auth/react';
import AuthContext from '../context/AuthContext';
import SwrConfigContext from '@/context/SwrConfigContext';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '밀크티',
  description: 'milkteaです',
  icons: {
    icon: '/img/96x96_22.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={sans.className}>
      <body className='w-full max-w-screen-xl overflow-auto mx-auto'>
        <AuthContext>
          <header className='sticky top-0 bg-white z-50 border-b'>
            <Navbar />
          </header>
          <main className='flex w-full justify-center min-h-full'>
            <SwrConfigContext>{children}</SwrConfigContext>
          </main>
        </AuthContext>
        <div id='portal' />
      </body>
    </html>
  );
}
