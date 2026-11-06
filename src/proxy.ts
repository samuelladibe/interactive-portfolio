import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LANG, LANGS, isLang, type Lang } from '@/content/types';

/** A saved choice wins, then the browser's language order, then French. */
function pickLang(request: NextRequest): Lang {
  const saved = request.cookies.get('lang')?.value;
  if (isLang(saved)) return saved;

  const browser = (request.headers.get('accept-language') ?? '')
    .split(',')
    .map((tag) => tag.trim().slice(0, 2).toLowerCase())
    .find(isLang);
  return browser ?? DEFAULT_LANG;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLang = LANGS.some((lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`));
  if (hasLang) return;

  // Behind a tunnel or proxy, request.nextUrl points at localhost, which other devices cannot
  // reach, so the redirect is built from the address the visitor actually used.
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? request.nextUrl.host;
  const protocol = request.headers.get('x-forwarded-proto') ?? request.nextUrl.protocol.replace(':', '');
  const path = `/${pickLang(request)}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`;
  return NextResponse.redirect(new URL(path, `${protocol}://${host}`));
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
