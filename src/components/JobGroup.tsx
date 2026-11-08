'use client';

import { useId, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type Props = { title: string; items: string[] };

/** On a phone the group folds behind its heading. From tablet width it is always open. */
export default function JobGroup({ title, items }: Props) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <div className="border-t border-line md:border-0">
      <h4 className="font-display text-lg font-bold">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-4 py-4 text-left md:hidden"
        >
          {title}
          <FiChevronDown aria-hidden className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        <span className="hidden md:inline">{title}</span>
      </h4>
      <ul
        id={listId}
        className={`space-y-2.5 pb-5 text-[0.975rem] leading-relaxed text-muted md:mt-3 md:block md:pb-0 ${open ? '' : 'hidden'}`}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
