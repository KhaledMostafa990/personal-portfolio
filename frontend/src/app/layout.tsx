import './globals.scss';
import { Ibarra_Real_Nova } from 'next/font/google';

import ReduxProvider from '@/store/ReduxProvider';

import Header from '@/features/Header';

const jostFont = Ibarra_Real_Nova({ subsets: ["latin"], variable: '--font-family-primary' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='scroll-smooth'>
        <div className={`${jostFont.variable} font-primary`}>
          <ReduxProvider>
            <Header />

            <main className='relative overflow-hidden translate-y-24 xl:translate-y-40 pb-10 xl:pb-16 flex flex-col gap-20 xl:gap-40'>
            {children}
            </main>
            
            {/* <Footer /> */}
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Minimalist Portfolio",
    template: "%s | Minimalist Portfolio "
  },

  description: "I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.",
  creator: "Khaled Farghly",

  icons: {
    icon: '/images/favicon-32x32.png',
    shortcut: '/images/favicon-32x32.png',
    apple: '/images/favicon-32x32.png',
    other: {
      rel: '/images/favicon-32x32.png',
      url: '/images/favicon-32x32.png',
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://designo-company-portoflio.netlify.app/",
    siteName: "Minimalist Portfolio",
    title: "Minimalist Portfolio",
    description: "Designo is over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.",
    images: [
      {
        url: "/assets/about/desktop/image-about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Minimalist Portfolio Website",
      },
      {
        url: "/assets/about/desktop/image-about-hero.jpg",
        width: 600,
        height: 315,
        alt: "Minimalist Portfolio Website",
      },
    ],
  },

}