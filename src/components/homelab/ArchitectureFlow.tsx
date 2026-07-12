import type { LucideIcon } from 'lucide-react';
import { Cloud, Globe, Lock, ShieldCheck } from 'lucide-react';
import {
  Activity,
  Boxes,
  Database,
  Film,
  HardDrive,
  KeyRound,
} from 'lucide-react';

function FlowNode({
  icon: Icon,
  title,
  sub,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex w-full max-w-sm items-center gap-3 rounded-xl border p-3.5 ${
        accent
          ? 'border-accent/40 bg-accent-muted shadow-glow-sm'
          : 'border-border bg-surface/70'
      }`}
    >
      <span
        className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${
          accent ? 'bg-accent/15 text-accent' : 'bg-white/5 text-slate-300'
        }`}
      >
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-slate-100">{title}</span>
        <span className="block font-mono text-xs text-slate-500">{sub}</span>
      </span>
    </div>
  );
}

function Connector({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="h-6 w-px bg-gradient-to-b from-accent/60 to-accent/20" />
      {label ? (
        <span className="my-1 rounded-full border border-border bg-base px-2 py-0.5 font-mono text-[10px] text-slate-500">
          {label}
        </span>
      ) : null}
      <div className="h-6 w-px bg-gradient-to-b from-accent/20 to-accent/60" />
    </div>
  );
}

const services: { icon: LucideIcon; label: string }[] = [
  { icon: Cloud, label: 'Nextcloud' },
  { icon: Film, label: 'Jellyfin' },
  { icon: Activity, label: 'Grafana' },
  { icon: Activity, label: 'Prometheus' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: HardDrive, label: 'Redis' },
  { icon: KeyRound, label: 'Vault' },
  { icon: Lock, label: 'Authelia' },
];

/**
 * Public traffic path: the internet reaches services only through an outbound
 * Cloudflare Tunnel (no inbound ports), then Traefik terminates TLS and routes
 * by hostname to the containerized services.
 */
export function ArchitectureFlow() {
  return (
    <div className="flex flex-col items-center">
      <FlowNode icon={Globe} title="Internet" sub="inbound visitors" />
      <Connector label="outbound tunnel · 0 open ports" />
      <FlowNode icon={Cloud} title="Cloudflare Tunnel" sub="cloudflared · WAF · DDoS" accent />
      <Connector label="origin request" />
      <FlowNode icon={ShieldCheck} title="Traefik" sub="reverse proxy · TLS · middlewares" accent />
      <Connector label="Authelia SSO · route by host" />

      {/* Docker host + services */}
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-surface/50 p-4">
        <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
          <Boxes size={16} className="text-accent" />
          <span className="font-mono text-xs text-slate-400">docker host · services VM</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 rounded-lg border border-border bg-base/60 px-2.5 py-2"
            >
              <s.icon size={14} className="flex-none text-accent" />
              <span className="truncate text-xs text-slate-300">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
