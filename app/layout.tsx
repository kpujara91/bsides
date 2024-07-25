import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss'
import '@/assets/scss/global.scss'
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

export async function generateMetadata(){
  return {
    title: 'BSides Ahmedabad 2024',
    description: 'BSides Ahmedabad 2024',
    URL: `https://www.bsidesahmedabad.in/'
    openGraph: {
      images: ['https://beside-ahmedabad-346o6y360-bsides-ahmedabad.vercel.app/opengraph-image.jpg?a32913bd1aea3970'],
      alternates: {
          canonical: `https://www.bsidesahmedabad.in/`,
          languages: {
            'en-US': '/en-US',
          },
        },
    },
  }
}
 
export default function Page({ params, searchParams }: Props) {}

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
