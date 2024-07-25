import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss';
import '@/assets/scss/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
