import type { Dictionary } from './dictionary';

const en: Dictionary = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    contactCta: 'Contact',
  },

  hero: {
    statusPill: 'Network & Security Engineer @ KPMG Luxembourg',
    role: 'Computer Science Engineer',
    specialties: ['Cybersecurity', 'Networks', 'Cloud', 'Software Engineering'],
    tagline:
      'Computer Science Engineer passionate about cybersecurity, networking, and modern technologies. Always curious, always learning, and always looking for the next technical challenge.',
    viewProjects: 'View Projects',
    downloadResume: 'Download Resume',
  },

  about: {
    eyebrow: 'About',
    headingPrefix: 'Engineer at the intersection of',
    headingHighlight: 'security, network & software engineering',
    paragraph:
      "I'm a Computer Science Engineer specializing in cybersecurity, networking and software development. I enjoy designing secure infrastructures, automating deployments and building reliable applications.",
    factLabels: {
      education: 'Education',
      focus: 'Focus',
      languages: 'Languages',
    },
    factValues: {
      education: 'MSc Computer Science — Cybersecurity, Network & Software Development, ESIEE Paris',
      focus: 'Secure infrastructure, networking, backend systems & automation',
      languages: 'French (fluent) · English (professional) · Vietnamese (fluent)',
    },
  },

  terminal: {
    whoami: 'Daniel Nguyen — Computer Science Engineer',
    specializationHeader: 'cat specialization.txt',
    specializationLine1: '• Cybersecurity   • Networks',
    specializationLine2: '• Backend         • Frontend',
    projectsHeader: 'ls ~/projects',
    statusHeader: 'echo $STATUS',
    status: 'Open to security roles',
  },

  experience: {
    eyebrow: 'Experience',
    title: "Where I've worked",
    description: 'From medical-lab rollouts to enterprise software delivery and network security.',
    items: {
      kpmg: {
        role: 'Network & Security Engineer',
        description:
          'Improved and secured the on-premises network infrastructure and managed privileged access on network devices (Cisco, Indeni/Idira).',
      },
      bouygues: {
        role: 'Software Engineer',
        description:
          'Designed, developed, tested and deployed applications to production in close collaboration with stakeholders to meet functional and technical requirements.',
      },
      eurofins: {
        role: 'Assistant Project Manager',
        description:
          'Optimized temperature management for 300 sensors — assisting installation, training, validation and system transition in a medical laboratory.',
      },
    },
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Selected work',
    description:
      'A mix of self-hosted infrastructure, cloud platforms and systems programming. The Home Lab has a full case study.',
    caseStudy: 'Case study',
    code: 'Code',
    private: 'Private',
    items: {
      'home-lab': {
        subtitle: 'Self-hosted infrastructure on Proxmox',
        category: 'Infrastructure',
        description:
          'A production-style homelab: Proxmox hypervisor segmented into dedicated VMs for a reverse-proxy / VPN gateway, containerized services, backups and full monitoring, exposed safely through a Cloudflare Tunnel.',
      },
      tenexa: {
        subtitle: 'Multi-cloud management platform',
        category: 'Backend • Cloud',
        description:
          'A multi-provider cloud management platform (AWS, GCP & Horizon) for provisioning and lifecycle management of VMs, Kubernetes clusters, storage volumes and backup plans with event-driven workflow orchestration and real-time resource monitoring.',
      },
      'chat-stream': {
        subtitle: 'TCP/UDP messaging from scratch',
        category: 'Network Programming',
        description:
          'A real-time client-server messaging app implementing TCP/UDP from scratch: public chat, private messaging and direct peer-to-peer file transfer with optional password auth, backed by a custom RFC defining the protocol.',
      },
      'class-gen': {
        subtitle: 'Local LLM Java code generation',
        category: 'LLM • Full-stack',
        description:
          'A full-stack tool that uses a locally-run LLM to generate, compile and automatically fix Java classes from natural-language prompts: full data confidentiality, no external API calls, orchestrated with Langchain4J.',
      },
    },
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Tools & technologies',
    description: 'The stack I reach for across security, networking, software work.',
    groupTitles: {
      cybersecurity: 'Cybersecurity',
      networking: 'Networking',
      languages: 'Languages',
      frameworks: 'Frameworks',
      infra: 'Infra & DevOps',
      data: 'Data & Observability',
    },
  },

  certifications: {
    eyebrow: 'Certifications',
    title: 'Currently preparing',
    description: 'Formalizing hands-on experience with industry certifications — roadmap below.',
    status: {
      preparing: 'Preparing',
      planned: 'Planned',
    },
  },

  contact: {
    eyebrow: 'Contact',
    headingPrefix: "Let's build something",
    headingHighlight: 'secure & reliable',
    paragraph:
      'Open to opportunities in cybersecurity, network and infrastructure engineering. The fastest way to reach me is email.',
    getInTouch: 'Get in touch',
    downloadResume: 'Download Resume',
    methodLabels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },

  footer: {
    builtWith: 'Built with Next.js, Tailwind CSS & Framer Motion',
  },

  languageSwitcher: {
    label: 'Change language',
  },

  homelab: {
    backToPortfolio: 'Back to portfolio',
    breadcrumb: 'projects / home-lab',
    badge: 'Infrastructure · Self-hosted',
    lede: 'A production-style, self-hosted infrastructure on Proxmox: segmented VMs, a zero-exposed-port edge, containerized services, layered security, full monitoring and a tested 3-2-1 backup strategy.',
    statLabels: {
      hypervisor: 'Hypervisor',
      services: 'Services',
      publicPorts: 'Public ports',
      backups: 'Backups',
    },
    overview: {
      eyebrow: 'Overview',
      title: 'The goal',
      body1:
        'Treat a home server like real infrastructure. The lab is a hands-on environment for practicing the disciplines I care about professionally: network security, reverse proxying, secrets management, container orchestration, observability and disaster recovery, on a single Proxmox host without ever exposing it directly to the internet.',
      body2:
        'Proxmox runs on ZFS for snapshots and data integrity. Workloads are split into purpose-built VMs so a compromise or misconfiguration in one stays contained. The only path in from the outside is an outbound Cloudflare Tunnel guarded by Traefik. There are no inbound port-forwards on the router at all.',
      glanceTitle: 'At a glance',
      glanceItems: [
        'Single Proxmox VE host on ZFS',
        '5 segmented VMs, purpose-built',
        'WireGuard for remote admin access',
        'Zero inbound ports via CF Tunnel',
        'Prometheus + Grafana monitoring',
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: 'How traffic flows',
      body: 'Every public request takes the same guarded path in. No service is reachable without passing the tunnel, TLS termination and single sign-on.',
    },
    compute: {
      eyebrow: 'Compute',
      title: 'VM architecture',
      body: 'Responsibilities are separated across five VMs so blast radius stays small and each can be sized, snapshotted and rebuilt independently.',
      roles: {
        gateway: 'Reverse proxy & VPN gateway',
        services: 'Docker application host',
        'k3s-node': 'Kubernetes lab',
        monitoring: 'Observability stack',
        storage: 'Backups & file shares',
      },
    },
    security: {
      eyebrow: 'Security',
      title: 'Defense in depth',
      body: 'No single control is trusted on its own. Each layer assumes the previous one could be bypassed.',
      items: [
        {
          title: 'Zero exposed ports',
          desc: 'Public traffic flows only through an outbound Cloudflare Tunnel. The firewall has no inbound port-forwards to attack.',
        },
        {
          title: 'SSO + 2FA',
          desc: 'Authelia enforces single sign-on and TOTP two-factor in front of every sensitive service.',
        },
        {
          title: 'TLS everywhere',
          desc: "Traefik auto-provisions and renews Let's Encrypt certificates; all HTTP is redirected to HTTPS.",
        },
        {
          title: 'Brute-force defense',
          desc: 'Fail2Ban parses auth and proxy logs to ban abusive IPs automatically.',
        },
        {
          title: 'Secrets management',
          desc: 'Vault stores service credentials and API tokens. Nothing hard-coded in compose files.',
        },
        {
          title: 'Network segmentation',
          desc: 'VLANs isolate management, services and untrusted traffic under least-privilege firewall rules.',
        },
      ],
    },
    networking: {
      wireguardTitle: 'Remote access — WireGuard',
      wireguardBody:
        'Administrative access never touches the public web UI. A WireGuard tunnel provides a fast, modern VPN into the management VLAN, so SSH and Proxmox stay reachable only to authenticated peers — never exposed to the internet.',
      vlanTitle: 'Segmentation — VLANs',
      vlanBody:
        'Traffic is separated into management, services and untrusted segments. Firewall rules follow least privilege. The services VLAN can reach its databases, but the untrusted segment can reach almost nothing.',
    },
    monitoring: {
      eyebrow: 'Observability',
      title: 'Monitoring & alerting',
      body: 'Prometheus scrapes exporters across the host and containers; Grafana turns that into dashboards and alerts.',
      items: [
        'node_exporter — host CPU, memory, disk & network',
        'cAdvisor — per-container resource usage',
        'Prometheus — scraping, retention & alert rules',
        'Grafana — dashboards for infra, containers & services',
        'Alerting on resource and uptime thresholds',
      ],
      illustrative: 'illustrative',
      metricLabels: {
        cpuLoad: 'CPU load',
        memory: 'Memory',
        containers: 'Containers',
        uptime: 'Uptime',
      },
    },
    backup: {
      eyebrow: 'Resilience',
      title: 'Backup strategy — 3-2-1',
      body: 'Three copies of the data, on two kinds of media, with one copy offsite.',
      tiers: [
        {
          tier: 'Snapshots',
          freq: 'Hourly / Daily',
          desc: 'ZFS snapshots give instant, cheap local rollback and protect against accidental deletion.',
        },
        {
          tier: 'Local backup',
          freq: 'Daily',
          desc: 'Restic writes deduplicated, encrypted backups to a separate dataset on the storage pool.',
        },
        {
          tier: 'Offsite copy',
          freq: 'Weekly',
          desc: 'An encrypted Restic / Duplicati copy is replicated offsite — the "1" in the 3-2-1 rule.',
        },
      ],
    },
    challenges: {
      eyebrow: 'Engineering',
      title: 'Challenges & trade-offs',
      challengeLabel: 'Challenge',
      solutionLabel: 'Solution',
      items: [
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
      ],
    },
    learnings: {
      eyebrow: 'Takeaways',
      title: 'What I learned',
      items: [
        'Defense-in-depth is a mindset. Every layer (network, proxy, auth, secrets) assumes the one before it can fail.',
        'Reproducibility beats uptime hacks: declarative Docker Compose and documented config make rebuilds boring.',
        'You cannot secure or optimize what you cannot see. Observability came before scaling anything.',
        'A backup is only real once its restore has been tested end-to-end.',
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Technologies used',
    },
    cta: {
      title: 'Want the deep dive?',
      body: 'Happy to walk through configs, threat model or design decisions.',
      getInTouch: 'Get in touch',
      allProjects: 'All projects',
    },
  },
};

export default en;
