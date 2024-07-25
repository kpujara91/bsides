import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss';
import '@/assets/scss/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

// Meta
export const metadata: Metadata = {
  title: `Leading IT Consulting & Software Solutions - Rigved Infotech Pvt Ltd`,
  description: 'Discover innovative IT consulting and custom software solutions with Rigved Infotech. We provide cutting-edge IT services to drive your business success. Contact us today to transform your IT infrastructure.',
  authors: [
    { name: '', url: '' }
  ],
  creator: '',
  publisher: '',
  referrer: 'origin-when-cross-origin',
  keywords: ['RigvedIT', 'Jobs', 'rigvedit', 'rigvedit.com'],
  openGraph: {
    type: 'website',
    url: 'https://bsidesahmedabad.in/',
    title: `Leading IT Consulting & Software Solutions - Rigved Infotech Pvt Ltd`,
    description: 'Discover innovative IT consulting and custom software solutions with Rigved Infotech. We provide cutting-edge IT services to drive your business success. Contact us today to transform your IT infrastructure.',
    images: [
      {
        url: 'https://rigvedit.com/images/ogimage/Home.png',
        width: 800,
        height: 600,
        alt: 'Rigved Infotech'
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
