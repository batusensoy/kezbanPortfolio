import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AmbientSpotlight } from '@/components/ui/AmbientSpotlight';
import { ARTIST } from '@/data/artist';

export const metadata: Metadata = {
  metadataBase: new URL('https://kezbantanli.art'),
  title: {
    default: `${ARTIST.name} — Contemporary Visual Artist & Painter`,
    template: `%s | ${ARTIST.name}`,
  },
  description: `${ARTIST.name} is a contemporary fine artist working in Istanbul & London, specializing in large-scale oil on Belgian linen, mineral pigments, and textural abstraction. Explore original paintings and commission bespoke artwork.`,
  keywords: [
    'Kezban Tanli',
    'Kezban Tanlı',
    'Contemporary Fine Artist',
    'Oil on Linen',
    'Textural Abstraction',
    'Art Collector',
    'Original Paintings',
    'Art Commissions',
    'Istanbul Artist',
    'London Art Gallery',
  ],
  authors: [{ name: ARTIST.name, url: 'https://kezbantanli.art' }],
  creator: ARTIST.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kezbantanli.art',
    siteName: `${ARTIST.name} Studio`,
    title: `${ARTIST.name} — Contemporary Visual Artist & Painter`,
    description:
      'Original contemporary paintings, atmospheric landscapes, and textural earth abstractions by Kezban Tanli.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
        width: 1200,
        height: 800,
        alt: `${ARTIST.name} — Fine Art Exhibition`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ARTIST.name} — Contemporary Visual Artist`,
    description:
      'Atmospheric landscapes and textural mineral abstractions on Belgian linen.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-charcoal min-h-screen flex flex-col font-sans selection:bg-[#E6D7C8] selection:text-charcoal antialiased">
        <AmbientSpotlight />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
