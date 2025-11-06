import type { Metadata } from 'next';
import './globals.scss';

const siteDescription =
  'Drop documents and images onto an infinite canvas. Organize ideas spatially, connect them visually, and collaborate in real time.';

export const metadata: Metadata = {
  metadataBase: new URL('https://castcanvaslab.com'),
  title: {
    default: 'CastCanvas Lab — Spatial Research Workspace',
    template: '%s | CastCanvas Lab',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  openGraph: {
    title: 'CastCanvas Lab — Spatial Research Workspace',
    description: siteDescription,
    url: 'https://castcanvaslab.com',
    siteName: 'CastCanvas Lab',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CastCanvas Lab spatial research workspace preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CastCanvas Lab — Spatial Research Workspace',
    description: siteDescription,
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
