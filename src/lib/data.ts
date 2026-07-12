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
  Terminal,
  Workflow,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Site-wide configuration                                                    */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: 'Daniel Nguyen',
  location: 'Paris / Luxembourg',
  email: 'nguyendaniel940@outlook.fr',
  github: 'https://github.com/Tarkhog06',
  githubHandle: 'Tarkhog06',
  linkedin: 'https://www.linkedin.com/in/daniel-ngy',
  linkedinHandle: 'daniel-ngy',
  resume: 'Daniel_Nguyen_Resume.pdf', // place the PDF in /public
  url: 'https://tarkhog06.github.io',
} as const;

/** href stays fixed; the visible label is looked up from the dictionary by key. */
export const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
] as const;

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */

/** company/location/period/tags are proper nouns & dates — not translated. role/description live in the dictionary, keyed by id. */
export interface Experience {
  id: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: 'kpmg',
    company: 'KPMG Luxembourg',
    location: 'Kirchberg, Luxembourg',
    period: 'May 2026 — Oct 2026',
    tags: ['Cisco', 'Network Security', 'PAM', 'Cisco ISE'],
  },
  {
    id: 'bouygues',
    company: 'Bouygues Telecom',
    location: 'Meudon, France',
    period: 'Sep 2023 — Apr 2026',
    tags: ['Figma', 'ServiceNow', 'PowerApps', 'Delivery'],
  },
  {
    id: 'eurofins',
    company: 'Eurofins Biomnis',
    location: 'Ivry-sur-Seine, France',
    period: 'Apr 2022 — Jun 2022',
    tags: ['Oceasoft', 'Validation', 'Rollout'],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

/** title is a product name (kept as-is across locales); subtitle/category/description live in the dictionary, keyed by slug. */
export interface Project {
  slug: string;
  title: string;
  year: string;
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
    year: 'Ongoing',
    tech: ['Proxmox', 'Docker', 'Kubernetes', 'Traefik', 'WireGuard', 'Prometheus', 'Grafana', 'ZFS'],
    icon: Server,
    featured: true,
    caseStudy: '/projects/home-lab',
    access: 'private',
  },
  {
    slug: 'tenexa',
    title: 'Tenexa',
    year: '2025',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'Airflow', 'Keycloak', 'Vault', 'GitLab CI/CD'],
    icon: Cloud,
    featured: true,
    access: 'private',
  },
  {
    slug: 'chat-stream',
    title: 'Chat Stream',
    year: '2024',
    tech: ['Java', 'Concurrency', 'Non-blocking I/O', 'TCP', 'UDP', 'RFC Design'],
    icon: Network,
    repo: 'https://github.com/Tarkhog06',
  },
  {
    slug: 'class-gen',
    title: 'Class Gen',
    year: '2024',
    tech: ['Java', 'Spring Boot', 'Svelte', 'Langchain4J', 'H2', 'OpenAPI'],
    icon: Code2,
    repo: 'https://github.com/Tarkhog06',
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                     */
/* -------------------------------------------------------------------------- */

/** title is looked up from the dictionary's groupTitles by id; items are tool/protocol names, kept as-is across locales. */
export interface SkillGroup {
  id: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'cybersecurity',
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
    id: 'networking',
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
    id: 'languages',
    icon: Code2,
    items: ['Python', 'Java', 'Bash', 'C', 'Kotlin', 'TypeScript', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    id: 'frameworks',
    icon: Layers,
    items: ['Spring Boot', 'JEE', 'FastAPI', 'React', 'Svelte', 'Next.js', 'Langchain4J', 'SQLAlchemy', 'Pydantic'],
  },
  {
    id: 'infra',
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
    id: 'data',
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

/** status is a key into the dictionary's certifications.status map, not display text. */
export interface Certification {
  name: string;
  issuer: string;
  status: 'preparing' | 'planned';
}

export const certifications: Certification[] = [
  { name: 'CCNA', issuer: 'Cisco', status: 'preparing' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'planned' },
];
