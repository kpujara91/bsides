import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss';
import '@/assets/scss/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

// Metadata
export const metadata: Metadata = {
  title: `BSides Ahmedabad 2024`,
  description: 'BSides Ahmedabad 2024',
  authors: [
    { name: '', url: '' }
  ],
  creator: '',
  publisher: '',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    url: 'https://bsidesahmedabad.in/',
    title: `BSides Ahmedabad 2024`,
    description: 'BSides Ahmedabad 2024',
    images: [
      {
        url: 'https://beside-ahmedabad-346o6y360-bsides-ahmedabad.vercel.app/opengraph-image.jpgg',
        width: 800,
        height: 600,
        alt: 'BSides Ahmedabad'
      }
    ]
  },
  alternates: {
    canonical: 'https://bsidesahmedabad.in/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large', 
    'max-snippet': -1,
    'max-video-preview': -1,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
