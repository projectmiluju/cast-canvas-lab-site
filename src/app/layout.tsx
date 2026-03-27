import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Noto_Sans_KR } from 'next/font/google';
import { LocaleProvider } from '@/contexts/LocaleContext';
import './globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const siteDescription =
  'Drop documents and images onto an infinite canvas. Organize ideas spatially, connect them visually, and collaborate in real time.';

export const metadata: Metadata = {
  metadataBase: new URL('https://castcanvaslab.com'),
  title: {
    default: 'CastCanvas Lab — Spatial Research Workspace',
    template: '%s | CastCanvas Lab',
  },
  description: siteDescription,
  alternates: { canonical: '/' },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: 'CastCanvas Lab — Spatial Research Workspace',
    description: siteDescription,
    url: 'https://castcanvaslab.com',
    siteName: 'CastCanvas Lab',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'CastCanvas Lab preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CastCanvas Lab — Spatial Research Workspace',
    description: siteDescription,
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${notoSansKR.variable}`}
    >
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
