'use client';

import { GithubIcon, LinkedinIcon } from './icons';
import { Mail } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { useLanguage } from '@/i18n/context';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-slate-300">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-slate-500">
            {t.footer.builtWith} · © {year}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
