'use client';

import { GraduationCap, Languages, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';
import { Terminal } from './Terminal';
import { useLanguage } from '@/i18n/context';

export function About() {
  const { t } = useLanguage();

  const facts = [
    { icon: GraduationCap, label: t.about.factLabels.education, value: t.about.factValues.education },
    { icon: Wrench, label: t.about.factLabels.focus, value: t.about.factValues.focus },
    { icon: Languages, label: t.about.factLabels.languages, value: t.about.factValues.languages },
  ];

  return (
    <section id="about" className="section">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              {t.about.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.headingPrefix} <span className="text-gradient">{t.about.headingHighlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-slate-400">{t.about.paragraph}</p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.15 + i * 0.08}>
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-border bg-accent-muted text-accent">
                    <fact.icon size={17} />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">{fact.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <Terminal />
        </Reveal>
      </div>
    </section>
  );
}
