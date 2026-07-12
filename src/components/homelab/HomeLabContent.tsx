'use client';

import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Activity,
  Archive,
  ArrowLeft,
  Boxes,
  Cloud,
  Container,
  Cpu,
  Fingerprint,
  GitBranch,
  HardDrive,
  KeyRound,
  Lock,
  Network,
  Repeat,
  Server,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Wifi,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Footer } from '@/components/Footer';
import { ArchitectureFlow } from '@/components/homelab/ArchitectureFlow';
import { siteConfig } from '@/lib/data';
import { useLanguage } from '@/i18n/context';

/* ------------------------- structural (untranslated) -------------------- */

const statValues = { hypervisor: 'Proxmox VE', services: '12+', publicPorts: '0 open', backups: '3-2-1' };

const heroTags = [
  'Proxmox',
  'ZFS',
  'Docker',
  'Kubernetes',
  'Traefik',
  'WireGuard',
  'Prometheus',
  'Grafana',
  'Cloudflare Tunnel',
];

const glanceIcons: LucideIcon[] = [Cpu, Boxes, Wifi, Lock, Activity];

interface VmMeta {
  id: 'gateway' | 'services' | 'k3s-node' | 'monitoring' | 'storage';
  specs: string;
  stack: string[];
  icon: LucideIcon;
}

const vmsMeta: VmMeta[] = [
  { id: 'gateway', specs: '2 vCPU · 2 GB', stack: ['Traefik', 'WireGuard', 'Fail2Ban', 'cloudflared'], icon: ShieldCheck },
  { id: 'services', specs: '4 vCPU · 8 GB', stack: ['Docker', 'Nextcloud', 'Jellyfin', 'PostgreSQL', 'Redis'], icon: Boxes },
  { id: 'k3s-node', specs: '2 vCPU · 4 GB', stack: ['K3s', 'Helm', 'kubectl'], icon: Container },
  { id: 'monitoring', specs: '2 vCPU · 2 GB', stack: ['Prometheus', 'Grafana', 'exporters'], icon: Activity },
  { id: 'storage', specs: '2 vCPU · 4 GB', stack: ['ZFS', 'Restic', 'Duplicati', 'NFS/SMB'], icon: HardDrive },
];

const securityIcons: LucideIcon[] = [Cloud, Fingerprint, ShieldCheck, ShieldAlert, KeyRound, Network];

const backupIcons: LucideIcon[] = [Repeat, Archive, Cloud];

const learningIcons: LucideIcon[] = [ShieldCheck, SlidersHorizontal, Activity, GitBranch];

const metricValues = { cpuLoad: '18%', memory: '11.4 GB', containers: '14', uptime: '99.2%' };

const techStack = [
  'Proxmox VE',
  'ZFS',
  'Docker',
  'Docker Compose',
  'Kubernetes (K3s)',
  'Traefik',
  'Nginx',
  'WireGuard',
  'Cloudflare Tunnel',
  'Authelia',
  'Fail2Ban',
  'Vault',
  'Nextcloud',
  'Jellyfin',
  'PostgreSQL',
  'Redis',
  'MongoDB',
  'Restic',
  'Duplicati',
  'NFS / SMB',
  'Prometheus',
  'Grafana',
];

/* ----------------------------- primitives ------------------------------ */

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <Reveal>
      <span className="eyebrow">
        <span className="h-px w-6 bg-accent/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {children ? <p className="mt-3 max-w-2xl text-slate-400">{children}</p> : null}
    </Reveal>
  );
}

/* ------------------------------- content -------------------------------- */

export function HomeLabContent() {
  const { t } = useLanguage();
  const h = t.homelab;

  const stats = [
    { label: h.statLabels.hypervisor, value: statValues.hypervisor },
    { label: h.statLabels.services, value: statValues.services },
    { label: h.statLabels.publicPorts, value: statValues.publicPorts },
    { label: h.statLabels.backups, value: statValues.backups },
  ];

  const metricTiles = [
    { label: h.monitoring.metricLabels.cpuLoad, value: metricValues.cpuLoad },
    { label: h.monitoring.metricLabels.memory, value: metricValues.memory },
    { label: h.monitoring.metricLabels.containers, value: metricValues.containers },
    { label: h.monitoring.metricLabels.uptime, value: metricValues.uptime },
  ];

  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-base/80 backdrop-blur-lg">
        <div className="container-content flex h-16 items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            {h.backToPortfolio}
          </Link>
          <span className="font-mono text-xs text-slate-500">{h.breadcrumb}</span>
        </div>
      </header>

      <main className="pb-8">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial opacity-60"
            aria-hidden
          />
          <div className="container-content py-16 sm:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-accent">
                <Server size={13} />
                {h.badge}
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient">Home Lab</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-400">{h.lede}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="card p-4">
                    <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-slate-100">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="section">
          <div className="container-content grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionTitle eyebrow={h.overview.eyebrow} title={h.overview.title}>
                {h.overview.body1}
              </SectionTitle>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-slate-400">{h.overview.body2}</p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="card h-full p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  {h.overview.glanceTitle}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {h.overview.glanceItems.map((text, i) => {
                    const Icon = glanceIcons[i];
                    return (
                      <li key={text} className="flex items-center gap-3">
                        <Icon size={16} className="flex-none text-accent" />
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Architecture */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.architecture.eyebrow} title={h.architecture.title}>
              {h.architecture.body}
            </SectionTitle>
            <Reveal delay={0.1}>
              <div className="mt-10 rounded-2xl border border-border bg-surface/30 p-6 sm:p-10">
                <ArchitectureFlow />
              </div>
            </Reveal>
          </div>
        </section>

        {/* VM architecture */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.compute.eyebrow} title={h.compute.title}>
              {h.compute.body}
            </SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vmsMeta.map((vm, i) => (
                <Reveal key={vm.id} delay={i * 0.06}>
                  <div className="card h-full p-5 transition-colors duration-300 hover:border-accent/30">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <vm.icon size={18} />
                      </div>
                      <span className="font-mono text-xs text-slate-500">{vm.specs}</span>
                    </div>
                    <h3 className="mt-4 font-mono text-sm font-semibold text-accent">{vm.id}</h3>
                    <p className="mt-0.5 text-sm text-slate-300">{h.compute.roles[vm.id]}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {vm.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.security.eyebrow} title={h.security.title}>
              {h.security.body}
            </SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {h.security.items.map((item, i) => {
                const Icon = securityIcons[i];
                return (
                  <Reveal key={item.title} delay={i * 0.05}>
                    <div className="card h-full p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 font-semibold text-slate-100">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Networking & VPN */}
        <section className="section pt-0">
          <div className="container-content grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full p-6">
                <div className="flex items-center gap-2.5">
                  <Wifi size={18} className="text-accent" />
                  <h3 className="text-lg font-semibold text-slate-100">{h.networking.wireguardTitle}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{h.networking.wireguardBody}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card h-full p-6">
                <div className="flex items-center gap-2.5">
                  <Network size={18} className="text-accent" />
                  <h3 className="text-lg font-semibold text-slate-100">{h.networking.vlanTitle}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{h.networking.vlanBody}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Monitoring */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.monitoring.eyebrow} title={h.monitoring.title}>
              {h.monitoring.body}
            </SectionTitle>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <ul className="card h-full space-y-3 p-6">
                  {h.monitoring.items.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-slate-300">
                      <Activity size={16} className="mt-0.5 flex-none text-accent" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Illustrative dashboard tiles (not a live screenshot) */}
              <Reveal delay={0.08}>
                <div className="card h-full p-6">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="font-mono text-xs text-slate-400">grafana · overview</span>
                    <span className="font-mono text-[10px] text-slate-600">{h.monitoring.illustrative}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {metricTiles.map((tile) => (
                      <div key={tile.label} className="rounded-lg border border-border bg-base/50 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {tile.label}
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-accent-soft">{tile.value}</p>
                      </div>
                    ))}
                  </div>
                  {/* Faux sparkline */}
                  <div className="mt-4 flex h-16 items-end gap-1">
                    {[38, 52, 41, 63, 48, 70, 55, 60, 44, 72, 58, 66, 50, 68].map((val, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent/70"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Backup */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.backup.eyebrow} title={h.backup.title}>
              {h.backup.body}
            </SectionTitle>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {h.backup.tiers.map((b, i) => {
                const Icon = backupIcons[i];
                return (
                  <Reveal key={b.tier} delay={i * 0.08}>
                    <div className="card relative h-full p-6">
                      <span className="absolute right-5 top-5 font-mono text-xs text-slate-600">
                        0{i + 1}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 font-semibold text-slate-100">{b.tier}</h3>
                      <p className="mt-1 font-mono text-xs text-accent">{b.freq}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{b.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.challenges.eyebrow} title={h.challenges.title} />
            <div className="mt-10 space-y-4">
              {h.challenges.items.map((c, i) => (
                <Reveal key={c.problem} delay={i * 0.05}>
                  <div className="card grid gap-4 p-6 md:grid-cols-2 md:gap-8">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-red-400/70">
                        {h.challenges.challengeLabel}
                      </span>
                      <p className="mt-2 font-medium text-slate-200">{c.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent">
                        {h.challenges.solutionLabel}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.solution}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.learnings.eyebrow} title={h.learnings.title} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {h.learnings.items.map((text, i) => {
                const Icon = learningIcons[i];
                return (
                  <Reveal key={text} delay={i * 0.06}>
                    <div className="card flex h-full gap-4 p-6">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <Icon size={18} />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300">{text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow={h.stack.eyebrow} title={h.stack.title} />
            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((tItem) => (
                  <span key={tItem} className="chip">
                    {tItem}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.12}>
              <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold text-slate-100">{h.cta.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{h.cta.body}</p>
                </div>
                <div className="flex gap-3">
                  <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">
                    {h.cta.getInTouch}
                  </a>
                  <Link href="/#projects" className="btn btn-ghost">
                    <ArrowLeft size={16} />
                    {h.cta.allProjects}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
