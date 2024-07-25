import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss'
import '@/assets/scss/global.scss'
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

export const metadata: Metadata = {
  // title: 'BSides Ahmedabad 2024',
  // description: "",
  // image: "https://beside-ahmedabad-346o6y360-bsides-ahmedabad.vercel.app/opengraph-image.jpg?a32913bd1aea3970"

  title: `BSides Ahmedabad 202 `,
  description:'',
  authors: [{ name: '', url: '' }],
  creator: '',
  publisher: '',
  referrer: 'origin-when-cross-origin',
  // keywords: ['trupartner', 'Jobs', 'TRUPARTNER', 'trupartner.com'],
  openGraph: {
    title: `BSides Ahmedabad 2024`,
    description:'',
    images: [
      `https://beside-ahmedabad-346o6y360-bsides-ahmedabad.vercel.app/opengraph-image.jpg?a32913bd1aea3970`
      // ,...previousImages
    ],
  },
  // alternates: {
  //     canonical: ``,
  //     languages: {
  //       'en-US': '/en-US',
  //     },
  //   },
  robots: {
      index: true,
      follow: true,
       // nocache: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      // googleBot: {
      //     index: true,
      //     follow: false,
      //     noimageindex: true,
      //     'max-video-preview': -1,
      //     'max-image-preview': 'large',
      //     'max-snippet': -1
      // }
  }
}

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
