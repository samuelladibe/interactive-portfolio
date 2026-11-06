'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import type { Content, Lang } from '@/content/types';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

type Props = { lang: Lang; t: Content['nav'] };

const SECTIONS = ['experience', 'projects', 'skills', 'education', 'contact'] as const;

export default function Header({ lang, t }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? null : current));
        });
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [lang]);

  const links = SECTIONS.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? 'true' : undefined}
      className={`transition-colors hover:text-ink ${
        active === id ? 'text-ink underline decoration-signal decoration-2 underline-offset-8' : 'text-muted'
      }`}
    >
      {t[id]}
    </a>
  ));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <Link href={`/${lang}`} aria-label={t.home} className="shrink-0">
          <Image src="/logo-mark.png" alt="" width={118} height={96} className="h-8 w-auto dark:hidden" priority />
          <Image src="/logo-mark-dark.png" alt="" width={118} height={96} className="hidden h-8 w-auto dark:block" priority />
        </Link>

        <nav aria-label={t.sections} className="hidden items-center gap-8 text-[0.95rem] md:flex">
          {links}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher lang={lang} label={t.language} />
          <ThemeToggle toDark={t.toDark} toLight={t.toLight} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={t.menu}
            className="grid h-10 w-10 place-items-center rounded-full text-xl md:hidden"
          >
            {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label={t.sections} className="flex flex-col gap-4 border-t border-line px-5 py-6 text-lg md:hidden">
          {links}
        </nav>
      )}
    </header>
  );
}
