import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss'
import '@/assets/scss/global.scss'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "BSides Ahmedabad 2024",
  description: "test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="robots"
        key="robots-index"
        content="noindex,nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
