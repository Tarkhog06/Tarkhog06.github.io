import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Boxes,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  KeyRound,
  Layers,
  Lock,
  Network,
  Server,
  Shield,
  ShieldCheck,
  Terminal,
  Workflow,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Site-wide configuration                                                    */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: 'Daniel Nguyen',
  role: 'Computer Science Engineer',
  // Rotating phrases for the hero typing effect.
  specialties: ['Cybersecurity', 'Networks', 'Cloud', 'Backend'],
  tagline: 'Building secure infrastructures and reliable backend applications.',
  location: 'Paris / Luxembourg',
  email: 'nguyendaniel940@outlook.fr',
  github: 'https://github.com/Tarkhog06',
  githubHandle: 'Tarkhog06',
  linkedin: 'https://www.linkedin.com/in/daniel-ngy',
  linkedinHandle: 'daniel-ngy',
  resume: 'resume.pdf', // place the PDF in /public
  url: 'https://tarkhog06.github.io',
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: 'KPMG Luxembourg',
    location: 'Kirchberg, Luxembourg',
    role: 'Network & Security Engineer',
    period: 'May 2026 — Oct 2026',
    description:
      'Improved and secured the on-premises network infrastructure and managed privileged access on network devices (Cisco, Indeni/Idira).',
    tags: ['Cisco', 'Network Security', 'PAM', 'Cisco ISE'],
  },
  {
    company: 'Bouygues Telecom',
    location: 'Meudon, France',
    role: 'Software Engineer',
    period: 'Sep 2023 — Apr 2026',
    description:
      'Designed, developed, tested and deployed applications to production in close collaboration with stakeholders to meet functional and technical requirements.',
    tags: ['Figma', 'ServiceNow', 'PowerApps', 'Delivery'],
  },
  {
    company: 'Eurofins Biomnis',
    location: 'Ivry-sur-Seine, France',
    role: 'Assistant Project Manager',
    period: 'Apr 2022 — Jun 2022',
    description:
      'Optimized temperature management for 300 sensors — assisting installation, training, validation and system transition in a medical laboratory.',
    tags: ['Oceasoft', 'Validation', 'Rollout'],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  featured?: boolean;
  /** Internal route to a dedicated case-study page. */
  caseStudy?: string;
  /** External repository, when public. */
  repo?: string;
  /** Live demo, when available. */
  demo?: string;
  /** Shown as a small badge when there is no public repo. */
  access?: 'private';
}

export const projects: Project[] = [
  {
    slug: 'home-lab',
    title: 'Home Lab',
    subtitle: 'Self-hosted infrastructure on Proxmox',
    year: 'Ongoing',
    category: 'Infrastructure',
    description:
      'A production-style homelab: Proxmox hypervisor segmented into dedicated VMs for a reverse-proxy / VPN gateway, containerized services, backups and full monitoring — exposed safely through a Cloudflare Tunnel.',
    tech: ['Proxmox', 'Docker', 'Kubernetes', 'Traefik', 'WireGuard', 'Prometheus', 'Grafana', 'ZFS'],
    icon: Server,
    featured: true,
    caseStudy: '/projects/home-lab',
    access: 'private',
  },
  {
    slug: 'tenexa',
    title: 'Tenexa',
    subtitle: 'Multi-cloud management platform',
    year: '2025',
    category: 'Backend • Cloud',
    description:
      'A multi-provider cloud management platform (AWS, GCP & Horizon) for provisioning and lifecycle management of VMs, Kubernetes clusters, storage volumes and backup plans — with event-driven workflow orchestration and real-time resource monitoring.',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'Airflow', 'Keycloak', 'Vault', 'GitLab CI/CD'],
    icon: Cloud,
    featured: true,
    access: 'private',
  },
  {
    slug: 'chat-stream',
    title: 'Chat Stream',
    subtitle: 'TCP/UDP messaging from scratch',
    year: '2024',
    category: 'Network Programming',
    description:
      'A real-time client-server messaging app implementing TCP/UDP from scratch — public chat, private messaging and direct peer-to-peer file transfer with optional password auth, backed by a custom RFC defining the protocol.',
    tech: ['Java', 'Concurrency', 'Non-blocking I/O', 'TCP', 'UDP', 'RFC Design'],
    icon: Network,
    repo: 'https://github.com/Tarkhog06',
  },
  {
    slug: 'class-gen',
    title: 'Class Gen',
    subtitle: 'Local LLM Java code generation',
    year: '2024',
    category: 'LLM • Full-stack',
    description:
      'A full-stack tool that uses a locally-run LLM to generate, compile and automatically fix Java classes from natural-language prompts — full data confidentiality, no external API calls, orchestrated with Langchain4J.',
    tech: ['Java', 'Spring Boot', 'Svelte', 'Langchain4J', 'H2', 'OpenAPI'],
    icon: Code2,
    repo: 'https://github.com/Tarkhog06',
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                     */
/* -------------------------------------------------------------------------- */

export interface SkillBar {
  label: string;
  level: number; // 0–100
  icon: LucideIcon;
}

export const skillBars: SkillBar[] = [
  { label: 'Cybersecurity', level: 95, icon: ShieldCheck },
  { label: 'Networking', level: 90, icon: Network },
  { label: 'Backend', level: 92, icon: Server },
  { label: 'Cloud', level: 80, icon: Cloud },
  { label: 'Frontend', level: 62, icon: Code2 },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cybersecurity',
    icon: Shield,
    items: [
      'Firewall / Proxy / NAT',
      'VPN / TOR',
      'AAA / RADIUS / EAP',
      'LDAP / Active Directory',
      'Keycloak',
      'TLS / SSH',
      'OAuth2 / JWT',
      'OWASP Top 10',
      'Trivy / Bandit',
      'Gitleaks / pip-audit',
    ],
  },
  {
    title: 'Networking',
    icon: Network,
    items: [
      'OSI / TCP/IP',
      'DNS / HTTP / QUIC',
      'IPv4 / IPv6',
      'DHCP / ARP / ICMP',
      'VLAN / STP',
      'OSPF / EIGRP / RIP v2',
      'MPLS',
      'VPC',
      'Nginx',
    ],
  },
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'Java', 'Bash', 'C', 'Kotlin', 'TypeScript', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    title: 'Frameworks',
    icon: Layers,
    items: ['Spring Boot', 'JEE', 'FastAPI', 'React', 'Svelte', 'Next.js', 'Langchain4J', 'SQLAlchemy', 'Pydantic'],
  },
  {
    title: 'Infra & DevOps',
    icon: Container,
    items: [
      'Docker / Compose',
      'Kubernetes',
      'Proxmox',
      'Ansible',
      'GitHub Actions',
      'GitLab CI/CD',
      'Vault',
      'Cisco ISE',
    ],
  },
  {
    title: 'Data & Observability',
    icon: Activity,
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'Kafka', 'RabbitMQ', 'Airflow', 'Prometheus', 'Grafana', 'SolarWinds'],
  },
];

/** Compact badges highlighted near the top of the Skills section. */
export const featuredStack = [
  { label: 'Spring Boot', icon: Server },
  { label: 'Docker', icon: Container },
  { label: 'Kubernetes', icon: Boxes },
  { label: 'Proxmox', icon: Cpu },
  { label: 'Python', icon: Terminal },
  { label: 'Java', icon: Code2 },
  { label: 'Vault', icon: KeyRound },
  { label: 'Grafana', icon: Activity },
  { label: 'Ansible', icon: Workflow },
  { label: 'PostgreSQL', icon: Database },
  { label: 'WireGuard', icon: Lock },
  { label: 'Prometheus', icon: Activity },
] as const;

/* -------------------------------------------------------------------------- */
/*  Certifications (in progress)                                               */
/* -------------------------------------------------------------------------- */

export interface Certification {
  name: string;
  issuer: string;
  status: string;
}

export const certifications: Certification[] = [
  { name: 'CCNA', issuer: 'Cisco', status: 'Preparing' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'Preparing' },
  { name: 'CKA', issuer: 'CNCF / Linux Foundation', status: 'Planned' },
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', status: 'Planned' },
];
