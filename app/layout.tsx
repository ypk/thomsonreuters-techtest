import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Olympic Medal Count',
  description: 'Track Olympic medal standings by country',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
