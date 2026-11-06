'use client';

import { useSyncExternalStore } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type Props = { toDark: string; toLight: string };

// The theme lives outside React so the button stays correct when storage is blocked.
let dark: boolean | undefined;
const listeners = new Set<() => void>();

function getDark() {
  if (dark === undefined) {
    try {
      dark = localStorage.getItem('theme') === 'dark';
    } catch {
      dark = false;
    }
  }
  return dark;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function applyTheme(isDark: boolean) {
  if (isDark) document.documentElement.dataset.theme = 'dark';
  else delete document.documentElement.dataset.theme;
}

function toggleTheme() {
  dark = !getDark();
  applyTheme(dark);
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch {
    // Storage can be blocked: the theme still applies for this visit.
  }
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle({ toDark, toLight }: Props) {
  const isDark = useSyncExternalStore(subscribe, getDark, () => false);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? toLight : toDark}
      title={isDark ? toLight : toDark}
      className="grid h-10 w-10 place-items-center rounded-full text-lg text-muted transition-colors hover:bg-wash hover:text-ink"
    >
      {/* Both icons render so the server markup matches whichever theme the visitor saved. */}
      <FiMoon aria-hidden className="dark:hidden" />
      <FiSun aria-hidden className="hidden dark:block" />
    </button>
  );
}
