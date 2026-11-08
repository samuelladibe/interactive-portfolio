import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { content } from '@/content';
import { LANGS, isLang } from '@/content/types';
import '../globals.css';

// Latin variable fonts stored in the repo (SIL Open Font License, see ../fonts), so builds never
// depend on reaching Google Fonts.
const display = localFont({ src: '../fonts/BricolageGrotesque-latin.woff2', weight: '500 800', variable: '--font-display' });
const body = localFont({ src: '../fonts/IBMPlexSans-latin.woff2', weight: '400 600', variable: '--font-body' });
// Only used in the pipeline diagram, below the fold: not worth a preload.
const mono = localFont({ src: '../fonts/JetBrainsMono-latin.woff2', weight: '400 500', variable: '--font-mono', preload: false });

// Runs before paint so a saved dark choice never flashes white. Without a saved choice the site stays light.
const themeScript = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`;

type Props = { children: ReactNode; params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const { meta } = content[isLang(lang) ? lang : 'fr'];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description, type: 'profile' },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <Header lang={lang} t={content[lang].nav} />
        <main>{children}</main>
        <Footer t={content[lang].footer} />
      </body>
    </html>
  );
}
