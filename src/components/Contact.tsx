'use client';

import { useRef, useState } from 'react';
import { FiCheck, FiCopy, FiGithub, FiLinkedin } from 'react-icons/fi';
import { EMAIL, GITHUB, LINKEDIN, type Content } from '@/content/types';

type CopyState = 'idle' | 'copied' | 'failed';

export default function Contact({ t }: { t: Content['contact'] }) {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setState('copied');
    } catch {
      setState('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 2400);
  };

  const label = { idle: t.copy, copied: t.copied, failed: t.copyFailed }[state];

  return (
    <section id="contact" className="border-t border-line bg-wash">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">{t.title}</h2>
        <p className="mt-4 max-w-[58ch] text-lg text-muted">{t.text}</p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 block w-fit break-all font-display text-[clamp(1.6rem,5.6vw,4.5rem)] font-bold leading-tight tracking-tight underline decoration-signal decoration-[3px] underline-offset-[0.15em]"
        >
          {EMAIL}
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 font-medium">
          <button type="button" onClick={copy} className="inline-flex items-center gap-2 hover:text-accent">
            {state === 'copied' ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
            <span aria-live="polite">{label}</span>
          </button>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <FiLinkedin aria-hidden /> LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <FiGithub aria-hidden /> GitHub
          </a>
        </div>

        <p className="mt-10 text-muted">{t.availability}</p>
      </div>
    </section>
  );
}
