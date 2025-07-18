import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { SITE_NAME } from '@/constants/app.constants';
import './globals.css';
import { Providers } from './Providers';

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  icons: {
    icon: './images/favicon.svg',
    shortcut: './images/favicon.svg',
  },
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Best task manager',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
