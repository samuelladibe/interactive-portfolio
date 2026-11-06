'use client';

import type { MouseEvent } from 'react';
import { LANGS, type Lang } from '@/content/types';

type Props = { lang: Lang; label: string };

function saveLang(lang: Lang) {
  document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}

/** The section being read, so the other language opens at the same place. */
function currentSectionHash() {
  const line = window.innerHeight * 0.4;
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const current = sections.filter((section) => section.getBoundingClientRect().top <= line).pop();
  return current ? `#${current.id}` : '';
}

export default function LanguageSwitcher({ lang, label }: Props) {
  const choose = (event: MouseEvent, next: Lang) => {
    event.preventDefault();
    if (next === lang) return;
    saveLang(next);
    // A full page load: <html> changes language cleanly and the saved theme applies before paint.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign(`/${next}${currentSectionHash()}`);
  };

  return (
    <div role="group" aria-label={label} className="flex items-center text-sm font-medium">
      {LANGS.map((code) => (
        <a
          key={code}
          href={`/${code}`}
          hrefLang={code}
          lang={code}
          aria-current={code === lang ? 'true' : undefined}
          onClick={(event) => choose(event, code)}
          className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
            code === lang ? 'bg-wash text-ink' : 'text-muted hover:text-ink'
          }`}
        >
          {code}
        </a>
      ))}
    </div>
  );
}
