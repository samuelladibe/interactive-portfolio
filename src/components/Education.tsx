import type { Content } from '@/content/types';
import Section from './Section';

export default function Education({ t }: { t: Content['education'] }) {
  return (
    <Section id="education" title={t.title}>
      <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item) => (
          <div key={item.term} className="border-t border-line pt-4">
            <dt className="font-display text-lg font-bold">{item.term}</dt>
            {item.lines.map((line) => (
              <dd key={line} className="mt-1 text-muted">
                {line}
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </Section>
  );
}
