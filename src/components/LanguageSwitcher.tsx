'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/context';
import { locales, localeMeta } from '@/i18n/locales';
import { cn } from '@/lib/utils';

/** Dropdown language switcher: a globe + current locale code, with an EN/FR/VI menu. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.languageSwitcher.label}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm text-slate-400 transition-colors hover:text-accent"
      >
        <Globe size={17} />
        <span className="font-mono text-xs">{localeMeta[locale].short}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.languageSwitcher.label}
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-surface/95 py-1.5 shadow-card backdrop-blur-lg"
        >
          {locales.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
                className={cn(
                  'flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-white/5',
                  code === locale ? 'text-accent' : 'text-slate-300',
                )}
              >
                {localeMeta[code].label}
                <span className="font-mono text-[10px] text-slate-500">{localeMeta[code].short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
