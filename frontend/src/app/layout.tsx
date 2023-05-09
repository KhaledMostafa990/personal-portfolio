import './globals.scss';
import { Ibarra_Real_Nova, Public_Sans } from 'next/font/google';

import ReduxProvider from '@/store/ReduxProvider';

import { AlertProvider } from '@/store/AlertContext';

import Alert from '@/components/Alert';
import Header from '@/features/Header';
import Footer from '@/features/Footer';

const IbarraRealFont = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-family-main',
});

const publicSansFont = Public_Sans({
  subsets: ['latin'],
  variable: '--font-family-publicSans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${IbarraRealFont.variable} ${publicSansFont.variable} scroll-smooth font-primary`}
      >
        <div>
          <ReduxProvider>
            <AlertProvider>
              <Header />

              {/* <LoadingState> */}
              {/* <MainContent>{children}</MainContent> */}

              <main className="relative flex flex-col gap-24 overflow-hidden pt-[144px] md:gap-40">
                {children}
              </main>

              <Footer />
              {/* </LoadingState> */}

              <Alert />
            </AlertProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Alex's portfolio",
    template: 'Alex | %s ',
  },
  description:
    'I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.',
  creator: 'Khaled Farghly',

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
    type: 'website',
    locale: 'en_IE',
    url: 'https://Alex-Minimalist-Portoflio.vercel.app/',
    siteName: 'Minimalist Portfolio',
    title: 'Minimalist Portfolio',
    description:
      'Designo is over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.',
    images: [
      {
        url: '/images/homepage/desktop/image-homepage-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Minimalist Portfolio Website',
      },
      {
        url: '/images/homepage/desktop/image-homepage-hero.jpg',
        width: 600,
        height: 315,
        alt: 'Minimalist Portfolio Website',
      },
    ],
  },
};
