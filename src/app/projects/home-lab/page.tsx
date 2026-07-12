import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Home Lab — Self-Hosted Infrastructure',
  description:
    'Case study of a production-style homelab on Proxmox: segmented VMs, a Cloudflare-Tunnel + Traefik edge, containerized services, defense-in-depth security, full monitoring and a 3-2-1 backup strategy.',
};

/* ------------------------------- data ---------------------------------- */

const stats = [
  { label: 'Hypervisor', value: 'Proxmox VE' },
  { label: 'Services', value: '12+' },
  { label: 'Public ports', value: '0 open' },
  { label: 'Backups', value: '3-2-1' },
];

const heroTags = ['Proxmox', 'ZFS', 'Docker', 'Kubernetes', 'Traefik', 'WireGuard', 'Prometheus', 'Grafana', 'Cloudflare Tunnel'];

interface Vm {
  name: string;
  role: string;
  specs: string;
  stack: string[];
  icon: LucideIcon;
}

const vms: Vm[] = [
  {
    name: 'gateway',
    role: 'Reverse proxy & VPN gateway',
    specs: '2 vCPU · 2 GB',
    stack: ['Traefik', 'WireGuard', 'Fail2Ban', 'cloudflared'],
    icon: ShieldCheck,
  },
  {
    name: 'services',
    role: 'Docker application host',
    specs: '4 vCPU · 8 GB',
    stack: ['Docker', 'Nextcloud', 'Jellyfin', 'PostgreSQL', 'Redis'],
    icon: Boxes,
  },
  {
    name: 'k3s-node',
    role: 'Kubernetes lab',
    specs: '2 vCPU · 4 GB',
    stack: ['K3s', 'Helm', 'kubectl'],
    icon: Container,
  },
  {
    name: 'monitoring',
    role: 'Observability stack',
    specs: '2 vCPU · 2 GB',
    stack: ['Prometheus', 'Grafana', 'exporters'],
    icon: Activity,
  },
  {
    name: 'storage',
    role: 'Backups & file shares',
    specs: '2 vCPU · 4 GB',
    stack: ['ZFS', 'Restic', 'Duplicati', 'NFS/SMB'],
    icon: HardDrive,
  },
];

const security = [
  {
    icon: Cloud,
    title: 'Zero exposed ports',
    desc: 'Public traffic flows only through an outbound Cloudflare Tunnel — the firewall has no inbound port-forwards to attack.',
  },
  {
    icon: Fingerprint,
    title: 'SSO + 2FA',
    desc: 'Authelia enforces single sign-on and TOTP two-factor in front of every sensitive service.',
  },
  {
    icon: ShieldCheck,
    title: 'TLS everywhere',
    desc: "Traefik auto-provisions and renews Let's Encrypt certificates; all HTTP is redirected to HTTPS.",
  },
  {
    icon: ShieldAlert,
    title: 'Brute-force defense',
    desc: 'Fail2Ban parses auth and proxy logs to ban abusive IPs automatically.',
  },
  {
    icon: KeyRound,
    title: 'Secrets management',
    desc: 'Vault stores service credentials and API tokens — nothing hard-coded in compose files.',
  },
  {
    icon: Network,
    title: 'Network segmentation',
    desc: 'VLANs isolate management, services and untrusted traffic under least-privilege firewall rules.',
  },
];

const backups = [
  {
    tier: 'Snapshots',
    freq: 'Hourly / Daily',
    icon: Repeat,
    desc: 'ZFS snapshots give instant, cheap local rollback and protect against accidental deletion.',
  },
  {
    tier: 'Local backup',
    freq: 'Daily',
    icon: Archive,
    desc: 'Restic writes deduplicated, encrypted backups to a separate dataset on the storage pool.',
  },
  {
    tier: 'Offsite copy',
    freq: 'Weekly',
    icon: Cloud,
    desc: 'An encrypted Restic / Duplicati copy is replicated offsite — the “1” in the 3-2-1 rule.',
  },
];

const monitoring = [
  'node_exporter — host CPU, memory, disk & network',
  'cAdvisor — per-container resource usage',
  'Prometheus — scraping, retention & alert rules',
  'Grafana — dashboards for infra, containers & services',
  'Alerting on resource and uptime thresholds',
];

const metricTiles = [
  { label: 'CPU load', value: '18%' },
  { label: 'Memory', value: '11.4 GB' },
  { label: 'Containers', value: '14' },
  { label: 'Uptime', value: '99.2%' },
];

const challenges = [
  {
    problem: 'Expose services publicly without opening firewall ports',
    solution:
      'A Cloudflare Tunnel keeps an outbound-only connection to the edge; combined with Authelia SSO, nothing on the LAN is directly reachable from the internet.',
  },
  {
    problem: 'Right-sizing VMs on limited hardware',
    solution:
      'Profiled real workloads with the monitoring stack, then tuned vCPU/RAM per VM and consolidated lightweight services onto a shared Docker host.',
  },
  {
    problem: 'Certificate management overhead',
    solution:
      'Delegated ACME issuance and renewal to Traefik so every service gets valid, auto-renewing TLS with no manual steps.',
  },
  {
    problem: 'Trustworthy, restorable backups',
    solution:
      'Adopted a 3-2-1 strategy with ZFS snapshots plus encrypted Restic, and periodically test-restore rather than assuming backups work.',
  },
];

const learnings = [
  {
    icon: ShieldCheck,
    text: 'Defense-in-depth is a mindset — every layer (network, proxy, auth, secrets) assumes the one before it can fail.',
  },
  {
    icon: SlidersHorizontal,
    text: 'Reproducibility beats uptime hacks: declarative Docker Compose and documented config make rebuilds boring.',
  },
  {
    icon: Activity,
    text: 'You cannot secure or optimize what you cannot see — observability came before scaling anything.',
  },
  {
    icon: GitBranch,
    text: 'A backup is only real once its restore has been tested end-to-end.',
  },
];

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

/* ------------------------------- page ---------------------------------- */

export default function HomeLabPage() {
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
            Back to portfolio
          </Link>
          <span className="font-mono text-xs text-slate-500">projects / home-lab</span>
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
                Infrastructure · Self-hosted
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient">Home Lab</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-400">
                A production-style, self-hosted infrastructure on Proxmox — segmented VMs, a
                zero-exposed-port edge, containerized services, layered security, full monitoring and
                a tested 3-2-1 backup strategy.
              </p>
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
                {heroTags.map((t) => (
                  <span key={t} className="chip">
                    {t}
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
              <SectionTitle eyebrow="Overview" title="The goal">
                Treat a home server like real infrastructure. The lab is a hands-on environment for
                practicing the disciplines I care about professionally — network security, reverse
                proxying, secrets management, container orchestration, observability and disaster
                recovery — on a single Proxmox host without ever exposing it directly to the
                internet.
              </SectionTitle>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-slate-400">
                  Proxmox runs on ZFS for snapshots and data integrity. Workloads are split into
                  purpose-built VMs so a compromise or misconfiguration in one stays contained. The
                  only path in from the outside is an outbound Cloudflare Tunnel guarded by Traefik
                  and Authelia — there are no inbound port-forwards on the router at all.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="card h-full p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  At a glance
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {[
                    { icon: Cpu, text: 'Single Proxmox VE host on ZFS' },
                    { icon: Boxes, text: '5 segmented VMs, purpose-built' },
                    { icon: Wifi, text: 'WireGuard for remote admin access' },
                    { icon: Lock, text: 'Zero inbound ports via CF Tunnel' },
                    { icon: Activity, text: 'Prometheus + Grafana monitoring' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <Icon size={16} className="flex-none text-accent" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Architecture */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow="Architecture" title="How traffic flows">
              Every public request takes the same guarded path in. No service is reachable without
              passing the tunnel, TLS termination and single sign-on.
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
            <SectionTitle eyebrow="Compute" title="VM architecture">
              Responsibilities are separated across five VMs so blast radius stays small and each can
              be sized, snapshotted and rebuilt independently.
            </SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vms.map((vm, i) => (
                <Reveal key={vm.name} delay={i * 0.06}>
                  <div className="card h-full p-5 transition-colors duration-300 hover:border-accent/30">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <vm.icon size={18} />
                      </div>
                      <span className="font-mono text-xs text-slate-500">{vm.specs}</span>
                    </div>
                    <h3 className="mt-4 font-mono text-sm font-semibold text-accent">{vm.name}</h3>
                    <p className="mt-0.5 text-sm text-slate-300">{vm.role}</p>
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
            <SectionTitle eyebrow="Security" title="Defense in depth">
              No single control is trusted on its own. Each layer assumes the previous one could be
              bypassed.
            </SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {security.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="card h-full p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                      <item.icon size={18} />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-100">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
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
                  <h3 className="text-lg font-semibold text-slate-100">Remote access — WireGuard</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Administrative access never touches the public web UI. A WireGuard tunnel provides a
                  fast, modern VPN into the management VLAN, so SSH and Proxmox stay reachable only to
                  authenticated peers — never exposed to the internet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card h-full p-6">
                <div className="flex items-center gap-2.5">
                  <Network size={18} className="text-accent" />
                  <h3 className="text-lg font-semibold text-slate-100">Segmentation — VLANs</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Traffic is separated into management, services and untrusted segments. Firewall
                  rules follow least privilege — the services VLAN can reach its databases, but the
                  untrusted segment can reach almost nothing.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Monitoring */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow="Observability" title="Monitoring & alerting">
              Prometheus scrapes exporters across the host and containers; Grafana turns that into
              dashboards and alerts.
            </SectionTitle>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <ul className="card h-full space-y-3 p-6">
                  {monitoring.map((m) => (
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
                    <span className="font-mono text-[10px] text-slate-600">illustrative</span>
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
                    {[38, 52, 41, 63, 48, 70, 55, 60, 44, 72, 58, 66, 50, 68].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent/70"
                        style={{ height: `${h}%` }}
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
            <SectionTitle eyebrow="Resilience" title="Backup strategy — 3-2-1">
              Three copies of the data, on two kinds of media, with one copy offsite.
            </SectionTitle>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {backups.map((b, i) => (
                <Reveal key={b.tier} delay={i * 0.08}>
                  <div className="card relative h-full p-6">
                    <span className="absolute right-5 top-5 font-mono text-xs text-slate-600">
                      0{i + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                      <b.icon size={18} />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-100">{b.tier}</h3>
                    <p className="mt-1 font-mono text-xs text-accent">{b.freq}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow="Engineering" title="Challenges & trade-offs" />
            <div className="mt-10 space-y-4">
              {challenges.map((c, i) => (
                <Reveal key={c.problem} delay={i * 0.05}>
                  <div className="card grid gap-4 p-6 md:grid-cols-2 md:gap-8">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-red-400/70">
                        Challenge
                      </span>
                      <p className="mt-2 font-medium text-slate-200">{c.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent">
                        Solution
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
            <SectionTitle eyebrow="Takeaways" title="What I learned" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {learnings.map((l, i) => (
                <Reveal key={l.text} delay={i * 0.06}>
                  <div className="card flex h-full gap-4 p-6">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-muted text-accent">
                      <l.icon size={18} />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{l.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="section pt-0">
          <div className="container-content">
            <SectionTitle eyebrow="Stack" title="Technologies used" />
            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.12}>
              <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold text-slate-100">Want the deep dive?</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Happy to walk through configs, threat model or design decisions.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">
                    Get in touch
                  </a>
                  <Link href="/#projects" className="btn btn-ghost">
                    <ArrowLeft size={16} />
                    All projects
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
