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
  description: 'Security BSides is a global, community-driven framework for hosting cybersecurity events. These conferences offer a platform for presenting and discussing research related to cybersecurity. We organize an independent BSides event in Ahmedabad to broaden discussions beyond traditional boundaries. The event includes demos, discussions, and interactions, fostering a collaborative and confidential environment. Attendees can engage with esteemed participants, explore IT security trends, and participate in workshops and challenges led by top speakers and presenters.',
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
    description: 'Security BSides is a global, community-driven framework for hosting cybersecurity events. These conferences offer a platform for presenting and discussing research related to cybersecurity. We organize an independent BSides event in Ahmedabad to broaden discussions beyond traditional boundaries. The event includes demos, discussions, and interactions, fostering a collaborative and confidential environment. Attendees can engage with esteemed participants, explore IT security trends, and participate in workshops and challenges led by top speakers and presenters.',
    images: [
      {
        url: 'https://beside-ahmedabad-346o6y360-bsides-ahmedabad.vercel.app/opengraph-image.jpg',
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
    // index:false,
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
    <html lang="en" >
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
