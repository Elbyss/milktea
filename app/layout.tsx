import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '밀크티',
  description: 'milkteaです',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sans.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
