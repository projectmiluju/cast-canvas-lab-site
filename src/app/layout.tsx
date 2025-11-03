import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://castcanvaslab.com'),
  title: {
    default: 'CastCanvas Lab — Spatial Research Workspace',
    template: '%s | CastCanvas Lab',
  },
  description:
    'Drop documents and images onto an infinite canvas. Organize ideas spatially, connect them visually, and collaborate in real time.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CastCanvas Lab — Spatial Research Workspace',
    description:
      'Drop documents and images onto an infinite canvas. Organize ideas spatially, connect them visually, and collaborate in real time.',
    url: 'https://castcanvaslab.com',
    siteName: 'CastCanvas Lab',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CastCanvas Lab — Spatial Research Workspace',
    description:
      'Drop documents and images onto an infinite canvas. Organize ideas spatially, connect them visually, and collaborate in real time.',
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
