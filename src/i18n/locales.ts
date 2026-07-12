export const locales = ['en', 'fr', 'vi'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string }> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr' },
  vi: { label: 'Tiếng Việt', short: 'VI', htmlLang: 'vi' },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
