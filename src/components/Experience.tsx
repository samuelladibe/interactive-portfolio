import type { Content } from '@/content/types';
import JobGroup from './JobGroup';
import Section from './Section';

export default function Experience({ t }: { t: Content['experience'] }) {
  return (
    <Section id="experience" title={t.title}>
      {/* Oldest to newest on purpose: this strip reads as a progression. */}
      <ol aria-label={t.careerLabel} className="grid gap-6 sm:grid-cols-3 sm:gap-0">
        {t.career.map((step, index) => {
          const isCurrent = index === t.career.length - 1;
          return (
            <li key={step.id} className="relative sm:pr-6">
              <div aria-hidden className="mb-4 hidden items-center sm:flex">
                <span className={`h-3 w-3 shrink-0 rounded-full ${isCurrent ? 'bg-signal' : 'border-2 border-ink'}`} />
                {step.verb && <span className="-mr-6 h-px flex-1 bg-ink" />}
              </div>
              <a href={`#${step.id}`} className="font-display text-xl font-bold underline-offset-4 hover:underline">
                {step.company}
              </a>
              <p className="text-muted">{step.years}</p>
              {step.verb && <p className="mt-1 font-medium text-accent">{step.verb}</p>}
            </li>
          );
        })}
      </ol>

      <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-24">
        {t.jobs.map((job) => (
          <article
            key={job.id}
            id={job.id}
            className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16"
          >
            <header className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="font-display text-3xl font-extrabold tracking-tight">{job.company}</h3>
              <p className="mt-2 font-medium">{job.role}</p>
              <p className="text-muted">{job.context}</p>
              <p className="mt-3 text-muted">
                {job.dates}
                {job.place && (
                  <>
                    <br />
                    {job.place}
                  </>
                )}
              </p>
            </header>
            <div>
              {job.summary && <p className="mb-8 max-w-[66ch] text-lg leading-relaxed md:mb-10 md:text-xl">{job.summary}</p>}
              <div className="border-b border-line md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10 md:border-0">
                {job.groups.map((group) => (
                  <JobGroup key={group.title} title={group.title} items={group.items} />
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-muted md:mt-10">
                <span className="font-semibold text-ink">{t.stackLabel}</span> {job.stack}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
