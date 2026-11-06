import { notFound } from 'next/navigation';

// Any unknown path under /fr or /en shows the translated 404 page.
export default function CatchAll() {
  notFound();
}
