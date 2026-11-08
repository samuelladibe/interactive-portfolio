'use client';

import { useState } from 'react';
import type { Content } from '@/content/types';
import Section from './Section';

/** Projects shown on a phone before the rest are opened. Larger screens always show them all. */
const MOBILE_VISIBLE = 4;

export default function Projects({ t }: { t: Content['projects'] }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = t.items.length - MOBILE_VISIBLE;

  return (
    <Section id="projects" title={t.title} lead={t.lead}>
      <ul id="project-list">
        {t.items.map((project, index) => (
          <li
            key={project.name}
            className={`gap-2 border-t border-line py-5 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-10 md:py-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,3fr)] ${
              !expanded && index >= MOBILE_VISIBLE ? 'hidden' : 'grid'
            }`}
          >
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">{project.name}</h3>
              <p className="mt-1 text-sm text-muted">{project.meta}</p>
            </div>
            <p className="text-[0.975rem] leading-relaxed text-muted">{project.text}</p>
            {project.result && (
              <p className="w-fit rounded-md bg-wash px-2.5 py-1 text-sm font-medium text-accent md:col-start-2 md:bg-transparent md:p-0 md:text-base lg:col-start-auto lg:w-auto lg:text-right">
                {project.result}
              </p>
            )}
          </li>
        ))}
      </ul>

      {hidden > 0 && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="project-list"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 w-full rounded-full border border-line px-5 py-3 font-medium transition-colors hover:border-ink md:hidden"
        >
          {expanded ? t.showLess : t.showMore.replace('{n}', String(hidden))}
        </button>
      )}
    </Section>
  );
}
