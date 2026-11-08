import type { Content } from '@/content/types';
import Section from './Section';

export default function Results({ t }: { t: Content['results'] }) {
  return (
    <Section title={t.title}>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-20">
        <div>
          <h3 className="font-display text-xl font-bold">{t.gainsTitle}</h3>
          <ul className="mt-4">
            {t.gains.map((gain) => (
              <li key={gain.what} className="border-t border-line py-5">
                <p className="text-muted">
                  {gain.what}, {gain.where}
                </p>
                <p className="mt-1 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {/* On a phone the old value sits on its own line so the new one never wraps around it. */}
                  {gain.before && (
                    <>
                      <s className="block text-2xl font-medium text-muted decoration-signal decoration-2 sm:inline sm:text-[length:inherit]">
                        {gain.before}
                      </s>{' '}
                    </>
                  )}
                  {gain.after}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">{t.scaleTitle}</h3>
          <dl className="mt-4">
            {t.scale.map((item) => (
              <div key={item.value} className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-4 border-t border-line py-4">
                <dt className="font-display text-2xl font-bold tabular-nums">{item.value}</dt>
                <dd className="text-[0.95rem] leading-snug text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
