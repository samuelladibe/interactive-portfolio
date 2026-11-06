'use client';

import { useState } from 'react';
import type { Content, Level } from '@/content/types';
import Section from './Section';

const LEVELS: Level[] = ['production', 'project', 'learning'];

/** Full, half, empty: the level stays readable without relying on colour. */
function Marker({ level }: { level: Level }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden className="h-2.5 w-2.5 shrink-0 text-accent">
      <circle
        cx="6"
        cy="6"
        r="4.75"
        fill={level === 'production' ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {level === 'project' && <path d="M6 1.25a4.75 4.75 0 0 0 0 9.5z" fill="currentColor" />}
    </svg>
  );
}

export default function Skills({ t }: { t: Content['skills'] }) {
  const [filter, setFilter] = useState<Level | null>(null);

  const filterButton = (level: Level | null, label: string) => (
    <button
      key={level ?? 'all'}
      type="button"
      aria-pressed={filter === level}
      onClick={() => setFilter(level)}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
        filter === level ? 'border-ink bg-wash font-medium' : 'border-line text-muted hover:text-ink'
      }`}
    >
      {level && <Marker level={level} />}
      {label}
    </button>
  );

  return (
    <Section id="skills" title={t.title}>
      <div role="group" aria-label={t.filterLabel} className="flex flex-wrap gap-2">
        {filterButton(null, t.all)}
        {LEVELS.map((level) => filterButton(level, t.levels[level]))}
      </div>

      <dl className="mt-10">
        {t.groups.map((group) => (
          <div key={group.title} className="grid gap-3 border-t border-line py-5 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8">
            <dt className="font-display text-lg font-bold">{group.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                {group.items.map(([name, level]) => (
                  <li
                    key={name}
                    className={`inline-flex items-center gap-2 transition-opacity duration-200 ${
                      filter && filter !== level ? 'opacity-25' : ''
                    }`}
                  >
                    <Marker level={level} />
                    {name}
                  </li>
                ))}
              </ul>
              {group.note && <p className="mt-2 text-sm text-muted">{group.note}</p>}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
