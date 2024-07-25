import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss'
import '@/assets/scss/global.scss'
import { Metadata } from "next";
import { generateMetadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

// Meta
export async function generateMetadata() {
  return {
    title: "BSides Ahmedabad 2024",
    description: "BSides Ahmedabad 2024",
   openGraph: {
     title:"BSides Ahmedabad 2024",
     description:"BSides Ahmedabad 2024",
       url: 'https://www.bsidesahmedabad.in/',
        // images: ["https://beside-ahmedabad-346o6y360-bsides-ahmedabad.vercel.app/opengraph-image.jpg"],
      },
  };
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
