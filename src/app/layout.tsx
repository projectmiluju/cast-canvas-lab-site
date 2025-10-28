import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'CastCanvas Lab — Spatial Research Workspace',
  description:
    'Drop documents and images onto an infinite canvas. Organize ideas spatially, connect them visually, and collaborate in real time.',
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
