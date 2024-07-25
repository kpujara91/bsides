import { Poppins } from "next/font/google";
import Head from "next/head";
import '@/assets/scss/tailwindcss.scss'
import '@/assets/scss/global.scss'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

const metadata = {
  title: "BSides Ahmedabad 2024",
  description: "",
  image: "https://beside-ahmedabad-346o6y360-bsides-ahmedabad.vercel.app/opengraph-image.jpg?a32913bd1aea3970"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
{/*         <meta
          name="robots"
          key="robots-index"
          content="noindex,nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        /> */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
