import { GraduationCap, Languages, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';
import { Terminal } from './Terminal';

const facts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: "MSc Computer Science — Cybersecurity, Network & Software Development, ESIEE Paris",
  },
  {
    icon: Wrench,
    label: 'Focus',
    value: 'Secure infrastructure, networking, backend systems & automation',
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'French (fluent) · English (professional) · Vietnamese (fluent)',
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              About
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineer at the intersection of <span className="text-gradient">security, network &amp; software engineering</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              I&apos;m a Computer Science Engineer specializing in cybersecurity, networking and
              software development. I enjoy designing secure infrastructures, automating deployments
              and building reliable applications.
            </p>
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
