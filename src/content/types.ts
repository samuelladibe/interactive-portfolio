export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

export const isLang = (value: string | undefined): value is Lang =>
  LANGS.includes(value as Lang);

export type Level = 'production' | 'project' | 'learning';

/** Ingestion route a source takes in the hero pipeline diagram. */
export type Route = 'airbyte' | 'python' | 'other';

export interface Content {
  meta: { title: string; description: string };
  nav: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    menu: string;
    sections: string;
    toDark: string;
    toLight: string;
    language: string;
    home: string;
  };
  hero: {
    role: string;
    pitch: string;
    contact: string;
    photoAlt: string;
  };
  pipeline: {
    title: string;
    hint: string;
    sourcesLabel: string;
    ingestionLabel: string;
    warehouseLabel: string;
    outputLabel: string;
    outputNode: string;
    otherNode: string;
    sources: { id: string; name: string; route: Route; note: string }[];
  };
  results: {
    title: string;
    gainsTitle: string;
    scaleTitle: string;
    gains: { what: string; before?: string; after: string; where: string }[];
    scale: { value: string; label: string }[];
  };
  experience: {
    title: string;
    careerLabel: string;
    career: { id: string; company: string; years: string; verb?: string }[];
    jobs: {
      id: string;
      company: string;
      role: string;
      context: string;
      dates: string;
      place?: string;
      summary?: string;
      groups: { title: string; items: string[] }[];
      stack: string;
    }[];
    stackLabel: string;
  };
  projects: {
    title: string;
    lead: string;
    /** `{n}` is replaced by the number of hidden projects. */
    showMore: string;
    showLess: string;
    items: { name: string; meta: string; text: string; result?: string }[];
  };
  skills: {
    title: string;
    filterLabel: string;
    all: string;
    /** `{n}` is replaced by the number of skills shown. */
    count: string;
    levels: Record<Level, string>;
    groups: { title: string; items: [string, Level][]; note?: string }[];
  };
  education: {
    title: string;
    items: { term: string; lines: string[] }[];
  };
  contact: {
    title: string;
    text: string;
    availability: string;
    copy: string;
    copied: string;
    copyFailed: string;
  };
  footer: { rights: string; top: string };
  notFound: { title: string; text: string; back: string };
}

export const EMAIL = 'ladibesamuel@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/samuel-ladibe-4b4671194';
export const GITHUB = 'https://github.com/samuelladibe';
