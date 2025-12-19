// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script'; // Import the Script component
import 'swiper/css';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Data | Full-stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> {/* Set 'fr' as the base language if your content is written in French */}
      <body className={inter.className}>
        {/* 1. Hidden hook for Google Translate engine */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>

        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* 2. Load Google Translate Script */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* 3. Initialize Google Translate Engine */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'fr', // The original language of your text
                includedLanguages: 'en,fr', // Only allow these two
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
      </body>
    </html>
  );
}