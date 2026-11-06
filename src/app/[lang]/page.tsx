import { notFound } from 'next/navigation';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Results from '@/components/Results';
import Skills from '@/components/Skills';
import { content } from '@/content';
import { isLang } from '@/content/types';

export const dynamicParams = false;

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = content[lang];

  return (
    <>
      <Hero t={t} />
      <Results t={t.results} />
      <Experience t={t.experience} />
      <Projects t={t.projects} />
      <Skills t={t.skills} />
      <Education t={t.education} />
      <Contact t={t.contact} />
    </>
  );
}
