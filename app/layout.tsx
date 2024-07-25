import { Poppins } from "next/font/google";
import '@/assets/scss/tailwindcss.scss';
import '@/assets/scss/global.scss';
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400"]
});

interface MetadataParams {
  params: Record<string, any>;
  parent?: any;
}

export async function generateMetadata({ params, parent }: MetadataParams): Promise<Metadata> {
  return {
    title: `Leading IT Consulting & Software Solutions - Rigved Infotech Pvt Ltd`,
    description: 'Discover innovative IT consulting and custom software solutions with Rigved Infotech. We provide cutting-edge IT services to drive your business success. Contact us today to transform your IT infrastructure.',
    authors: [
      { name: '', url: '' }
    ],
    creator: '',
    publisher: '',
    referrer: 'origin-when-cross-origin',
    keywords: ['RigvedIT', 'Jobs', 'rigvedit', "rigvedit.com"],
    openGraph: {
      title: `Leading IT Consulting & Software Solutions - Rigved Infotech Pvt Ltd`,
      description: 'Discover innovative IT consulting and custom software solutions with Rigved Infotech. We provide cutting-edge IT services to drive your business success. Contact us today to transform your IT infrastructure.',
      images: [
        `https://rigvedit.com/images/ogimage/Home.png`
      ]
    },
    alternates: {
      canonical: `https://rigvedit.com/`,
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
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
