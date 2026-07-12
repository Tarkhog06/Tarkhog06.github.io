/**
 * Shape of all translatable copy on the site. Each locale file (`en.ts`,
 * `fr.ts`, `vi.ts`) implements this interface, so TypeScript enforces that
 * every locale has every string — a missing key fails the build instead of
 * silently falling back to English.
 *
 * Structural data that should NOT be translated (icons, dates, tech/tool
 * names, links, slugs) stays in `src/lib/data.ts` and `src/app/projects/
 * home-lab/page.tsx`, keyed by stable ids that the `items` records below
 * look up by.
 */
export interface Dictionary {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    contactCta: string;
  };

  hero: {
    statusPill: string;
    role: string;
    specialties: string[];
    tagline: string;
    viewProjects: string;
    downloadResume: string;
  };

  about: {
    eyebrow: string;
    headingPrefix: string;
    headingHighlight: string;
    paragraph: string;
    factLabels: {
      education: string;
      focus: string;
      languages: string;
    };
    factValues: {
      education: string;
      focus: string;
      languages: string;
    };
  };

  terminal: {
    whoami: string;
    specializationHeader: string;
    specializationLine1: string;
    specializationLine2: string;
    projectsHeader: string;
    statusHeader: string;
    status: string;
  };

  experience: {
    eyebrow: string;
    title: string;
    description: string;
    /** Keyed by Experience.id from data.ts */
    items: Record<string, { role: string; description: string }>;
  };

  projects: {
    eyebrow: string;
    title: string;
    description: string;
    caseStudy: string;
    code: string;
    private: string;
    /** Keyed by Project.slug from data.ts */
    items: Record<string, { subtitle: string; category: string; description: string }>;
  };

  skills: {
    eyebrow: string;
    title: string;
    description: string;
    /** Keyed by SkillGroup.id from data.ts */
    groupTitles: Record<string, string>;
  };

  certifications: {
    eyebrow: string;
    title: string;
    description: string;
    status: {
      preparing: string;
      planned: string;
    };
  };

  contact: {
    eyebrow: string;
    headingPrefix: string;
    headingHighlight: string;
    paragraph: string;
    getInTouch: string;
    downloadResume: string;
    methodLabels: {
      email: string;
      linkedin: string;
      github: string;
    };
  };

  footer: {
    builtWith: string;
  };

  languageSwitcher: {
    label: string;
  };

  homelab: {
    backToPortfolio: string;
    breadcrumb: string;
    badge: string;
    lede: string;
    statLabels: {
      hypervisor: string;
      services: string;
      publicPorts: string;
      backups: string;
    };
    overview: {
      eyebrow: string;
      title: string;
      body1: string;
      body2: string;
      glanceTitle: string;
      glanceItems: string[];
    };
    architecture: {
      eyebrow: string;
      title: string;
      body: string;
    };
    compute: {
      eyebrow: string;
      title: string;
      body: string;
      /** Keyed by vm id (gateway, services, k3s-node, monitoring, storage) */
      roles: Record<string, string>;
    };
    security: {
      eyebrow: string;
      title: string;
      body: string;
      items: { title: string; desc: string }[];
    };
    networking: {
      wireguardTitle: string;
      wireguardBody: string;
      vlanTitle: string;
      vlanBody: string;
    };
    monitoring: {
      eyebrow: string;
      title: string;
      body: string;
      items: string[];
      illustrative: string;
      metricLabels: {
        cpuLoad: string;
        memory: string;
        containers: string;
        uptime: string;
      };
    };
    backup: {
      eyebrow: string;
      title: string;
      body: string;
      tiers: { tier: string; freq: string; desc: string }[];
    };
    challenges: {
      eyebrow: string;
      title: string;
      challengeLabel: string;
      solutionLabel: string;
      items: { problem: string; solution: string }[];
    };
    learnings: {
      eyebrow: string;
      title: string;
      items: string[];
    };
    stack: {
      eyebrow: string;
      title: string;
    };
    cta: {
      title: string;
      body: string;
      getInTouch: string;
      allProjects: string;
    };
  };
}
