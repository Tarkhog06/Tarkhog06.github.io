'use client';

import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { Reveal } from './Reveal';
import { siteConfig } from '@/lib/data';
import { asset } from '@/lib/utils';
import { useLanguage } from '@/i18n/context';

export function Contact() {
  const { t } = useLanguage();

  const methods = [
    {
      label: t.contact.methodLabels.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      Icon: Mail,
      external: false,
    },
    {
      label: t.contact.methodLabels.linkedin,
      value: `linkedin.com/in/${siteConfig.linkedinHandle}`,
      href: siteConfig.linkedin,
      Icon: LinkedinIcon,
      external: true,
    },
    {
      label: t.contact.methodLabels.github,
      value: `github.com/${siteConfig.githubHandle}`,
      href: siteConfig.github,
      Icon: GithubIcon,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-content">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12">
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(50% 60% at 50% 0%, rgba(34,211,238,0.12), transparent 70%)',
              }}
              aria-hidden
            />
            <div className="relative">
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-accent/60" aria-hidden />
                {t.contact.eyebrow}
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.contact.headingPrefix} <span className="text-gradient">{t.contact.headingHighlight}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-slate-400">{t.contact.paragraph}</p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">
                  <Mail size={16} />
                  {t.contact.getInTouch}
                </a>
                <a href={asset(`/${siteConfig.resume}`)} download className="btn btn-ghost">
                  <Download size={16} />
                  {t.contact.downloadResume}
                </a>
              </div>

              {/* Method list */}
              <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {methods.map(({ label, value, href, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-muted text-accent">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        {label}
                        {external && (
                          <ArrowUpRight
                            size={11}
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        )}
                      </span>
                      <span className="block truncate text-sm text-slate-200">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
