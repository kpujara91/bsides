import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import '@/assets/scss/tailwindcss.scss'
import '@/assets/scss/global.scss'
import OGImage from '../public/images/opengraph-image.jpg'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "BSides Ahmedabad 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <meta
          name="robots"
          key="robots-index"
          content="noindex,nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        /> */}
        {/* Open Graph tags */}
        <meta property="og:title" content="BSides Ahmedabad 2024" />
        <meta property="og:image" content={OGImage.src} />
        {/* Other SEO meta tags */}
      </Head>
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
