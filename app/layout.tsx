import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Archivo_Black, Space_Grotesk } from 'next/font/google';

const heading = Archivo_Black({ subsets: ['latin'], weight: '400', variable: '--font-heading' });
const body = Space_Grotesk({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'dorksense',
  description: 'Neobrutalist playground of color, motion, and ideas',
  metadataBase: new URL('https://agentic-309010b8.vercel.app'),
  openGraph: {
    title: 'dorksense',
    description: 'Neobrutalist playground of color, motion, and ideas',
    url: 'https://agentic-309010b8.vercel.app',
    siteName: 'dorksense',
    images: [],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dorksense',
    description: 'Neobrutalist playground of color, motion, and ideas'
  }
};

export const viewport: Viewport = {
  themeColor: '#D3FF29',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen antialiased selection:bg-black selection:text-acid">
        {children}
      </body>
    </html>
  );
}
