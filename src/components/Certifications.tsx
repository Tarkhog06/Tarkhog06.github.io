'use client';

import { Award, Clock } from 'lucide-react';
import { Reveal } from './Reveal';
import { certifications } from '@/lib/data';
import { useLanguage } from '@/i18n/context';

export function Certifications() {
  const { t } = useLanguage();
  return (
    <section id="certifications" className="section pt-0">
      <div className="container-content">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              {t.certifications.eyebrow}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-100">
            {t.certifications.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-slate-400">{t.certifications.description}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <div className="card group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted text-accent">
                    <Award size={17} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    <Clock size={10} />
                    {t.certifications.status[cert.status]}
                  </span>
                </div>
                <p className="mt-4 font-semibold text-slate-100">{cert.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{cert.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
