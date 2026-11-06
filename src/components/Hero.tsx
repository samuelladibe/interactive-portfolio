import Image from 'next/image';
import { FiLinkedin } from 'react-icons/fi';
import { LINKEDIN, type Content } from '@/content/types';
import Pipeline from './Pipeline';

export default function Hero({ t }: { t: Content }) {
  return (
    <section className="mx-auto max-w-page px-5 pb-8 pt-12 sm:px-8 sm:pt-20">
      <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_17rem] lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.035em]">
            Samuel LADIBE
          </h1>
          <p className="mt-6 font-display text-2xl font-medium sm:text-3xl">{t.hero.role}</p>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted">{t.hero.pitch}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 font-medium text-paper transition-opacity hover:opacity-85"
            >
              {t.hero.contact}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
            >
              <FiLinkedin aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>
        <Image
          src="/portrait.jpg"
          alt={t.hero.photoAlt}
          width={640}
          height={800}
          priority
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 272px, 60vw"
          className="aspect-[4/5] w-3/5 rounded-sm object-cover md:w-full"
        />
      </div>

      <Pipeline t={t.pipeline} />
    </section>
  );
}
