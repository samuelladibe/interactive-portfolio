import type { Content } from '@/content/types';

export default function Footer({ t }: { t: Content['footer'] }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-5 py-7 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} Samuel LADIBE. {t.rights}
        </p>
        <a href="#" className="underline underline-offset-4 hover:text-ink">
          {t.top}
        </a>
      </div>
    </footer>
  );
}
