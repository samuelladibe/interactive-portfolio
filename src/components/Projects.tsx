import type { Content } from '@/content/types';
import Section from './Section';

export default function Projects({ t }: { t: Content['projects'] }) {
  return (
    <Section id="projects" title={t.title} lead={t.lead}>
      <ul>
        {t.items.map((project) => (
          <li
            key={project.name}
            className="grid gap-2 border-t border-line py-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,3fr)]"
          >
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight">{project.name}</h3>
              <p className="mt-1 text-sm text-muted">{project.meta}</p>
            </div>
            <p className="text-[0.975rem] leading-relaxed text-muted">{project.text}</p>
            {project.result && (
              <p className="font-medium text-accent md:col-start-2 lg:col-start-auto lg:text-right">{project.result}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
