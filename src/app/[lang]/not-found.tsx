'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { content } from '@/content';
import { DEFAULT_LANG, isLang } from '@/content/types';

export default function NotFound() {
  const param = useParams().lang;
  const lang = typeof param === 'string' && isLang(param) ? param : DEFAULT_LANG;
  const t = content[lang].notFound;

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-page flex-col justify-center px-5 py-24 sm:px-8">
      <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl">{t.title}</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">{t.text}</p>
      <Link href={`/${lang}`} className="mt-8 w-fit font-medium text-accent underline underline-offset-4">
        {t.back}
      </Link>
    </section>
  );
}
