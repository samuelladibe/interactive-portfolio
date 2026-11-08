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

/** Proxies may send a comma-separated chain such as "https,http": the first value is the visitor's. */
const firstValue = (header: string | null) => header?.split(',')[0].trim() || undefined;
const VALID_HOST = /^[a-z0-9.-]+(:\d{1,5})?$/i;

/**
 * Behind a tunnel or proxy (ngrok, Cloud Run), request.nextUrl points at the internal address,
 * which visitors cannot reach, so the redirect uses the address they actually used. Anything
 * malformed falls back to the internal address instead of failing the request.
 */
function publicOrigin(request: NextRequest) {
  const host = firstValue(request.headers.get('x-forwarded-host')) ?? firstValue(request.headers.get('host'));
  const forwarded = firstValue(request.headers.get('x-forwarded-proto'));
  const protocol = forwarded === 'http' || forwarded === 'https' ? forwarded : request.nextUrl.protocol.replace(':', '');
  return host && VALID_HOST.test(host) ? `${protocol}://${host}` : request.nextUrl.origin;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLang = LANGS.some((lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`));
  if (hasLang) return;

  const path = `/${pickLang(request)}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`;
  return NextResponse.redirect(new URL(path, publicOrigin(request)));
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
