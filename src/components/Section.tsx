import type { ReactNode } from 'react';

/** Shared page rhythm: a heading, an optional lead, then the section's content. */
export default function Section({
  id,
  title,
  lead,
  children,
}: {
  id?: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">{title}</h2>
      {lead && <p className="mt-3 max-w-[62ch] text-lg text-muted">{lead}</p>}
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  );
}
