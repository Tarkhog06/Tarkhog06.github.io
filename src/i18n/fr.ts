import type { Dictionary } from './dictionary';

const fr: Dictionary = {
  nav: {
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
    contactCta: 'Contact',
  },

  hero: {
    statusPill: 'Ingénieur Réseaux & Sécurité @ KPMG Luxembourg',
    role: 'Ingénieur en Informatique',
    specialties: ['Cybersécurité', 'Réseaux', 'Cloud', 'Développement logiciel'],
    tagline:
      "Ingénieur en informatique passionné par la cybersécurité, les réseaux et les technologies modernes. Toujours curieux, toujours en train d'apprendre, et toujours à la recherche du prochain défi technique.",
    viewProjects: 'Voir les projets',
    downloadResume: 'Télécharger le CV',
  },

  about: {
    eyebrow: 'À propos',
    headingPrefix: "Ingénieur à la croisée de la",
    headingHighlight: 'sécurité, des réseaux & du développement logiciel',
    paragraph:
      "Je suis ingénieur en informatique, spécialisé en cybersécurité, réseaux et développement logiciel. J'aime concevoir des infrastructures sécurisées, automatiser les déploiements et construire des applications fiables.",
    factLabels: {
      education: 'Formation',
      focus: 'Spécialisation',
      languages: 'Langues',
    },
    factValues: {
      education:
        'Master Informatique — Cybersécurité, Réseaux & Développement Logiciel, ESIEE Paris',
      focus: 'Infrastructure sécurisée, réseaux, systèmes backend & automatisation',
      languages: 'Français (courant) · Anglais (professionnel) · Vietnamien (courant)',
    },
  },

  terminal: {
    whoami: 'Daniel Nguyen — Ingénieur en Informatique',
    specializationHeader: 'cat specialization.txt',
    specializationLine1: '• Cybersécurité   • Réseaux',
    specializationLine2: '• Backend         • Frontend',
    projectsHeader: 'ls ~/projects',
    statusHeader: 'echo $STATUS',
    status: 'Ouvert aux postes en sécurité',
  },

  experience: {
    eyebrow: 'Expérience',
    title: "Où j'ai travaillé",
    description:
      'Du déploiement en laboratoire médical à la livraison logicielle en entreprise et à la sécurité réseau.',
    items: {
      kpmg: {
        role: 'Ingénieur Réseaux & Sécurité',
        description:
          "Amélioration et sécurisation de l'infrastructure réseau on-premise, gestion des accès à privilèges sur les équipements réseau (Cisco, Indeni/Idira).",
      },
      bouygues: {
        role: 'Ingénieur Logiciel',
        description:
          "Conception, développement, test et déploiement d'applications en production, en étroite collaboration avec les parties prenantes pour répondre aux exigences fonctionnelles et techniques.",
      },
      eurofins: {
        role: 'Assistant Chef de Projet',
        description:
          "Optimisation de la gestion de température pour 300 capteurs — installation, formation, validation et transition du système dans un laboratoire médical.",
      },
    },
  },

  projects: {
    eyebrow: 'Projets',
    title: 'Travaux sélectionnés',
    description:
      "Un mélange d'infrastructure auto-hébergée, de plateformes cloud et de programmation systèmes. Le Home Lab dispose d'une étude de cas complète.",
    caseStudy: "Étude de cas",
    code: 'Code',
    private: 'Privé',
    items: {
      'home-lab': {
        subtitle: 'Infrastructure auto-hébergée sur Proxmox',
        category: 'Infrastructure',
        description:
          "Un homelab de niveau production : hyperviseur Proxmox segmenté en VMs dédiées pour une passerelle reverse-proxy / VPN, des services conteneurisés, des sauvegardes et une supervision complète, exposé en toute sécurité via un Cloudflare Tunnel.",
      },
      tenexa: {
        subtitle: 'Plateforme de gestion multi-cloud',
        category: 'Backend • Cloud',
        description:
          "Une plateforme de gestion cloud multi-fournisseurs (AWS, GCP & Horizon) pour le provisionnement et la gestion du cycle de vie des VMs, clusters Kubernetes, volumes de stockage et plans de sauvegarde, avec orchestration de workflows événementiels et supervision des ressources en temps réel.",
      },
      'chat-stream': {
        subtitle: 'Messagerie TCP/UDP développée de zéro',
        category: 'Programmation réseau',
        description:
          "Une application de messagerie client-serveur en temps réel implémentant TCP/UDP de zéro : chat public, messagerie privée et transfert de fichiers pair-à-pair avec authentification par mot de passe optionnelle, appuyée sur une RFC personnalisée définissant le protocole.",
      },
      'class-gen': {
        subtitle: 'Génération de code Java par LLM local',
        category: 'LLM • Full-stack',
        description:
          "Un outil full-stack utilisant un LLM exécuté localement pour générer, compiler et corriger automatiquement des classes Java à partir de prompts en langage naturel : confidentialité totale des données, aucun appel API externe, orchestré avec Langchain4J.",
      },
    },
  },

  skills: {
    eyebrow: 'Compétences',
    title: 'Outils & technologies',
    description: "La stack que j'utilise en sécurité, réseaux et développement logiciel.",
    groupTitles: {
      cybersecurity: 'Cybersécurité',
      networking: 'Réseaux',
      languages: 'Langages',
      frameworks: 'Frameworks',
      infra: 'Infra & DevOps',
      data: 'Données & Observabilité',
    },
  },

  certifications: {
    eyebrow: 'Certifications',
    title: 'En préparation',
    description: "Formalisation de l'expérience pratique par des certifications reconnues — feuille de route ci-dessous.",
    status: {
      preparing: 'En préparation',
      planned: 'Prévue',
    },
  },

  contact: {
    eyebrow: 'Contact',
    headingPrefix: 'Construisons quelque chose de',
    headingHighlight: 'sûr & fiable',
    paragraph:
      "Ouvert aux opportunités en cybersécurité, réseaux et ingénierie infrastructure. Le plus rapide pour me joindre est l'email.",
    getInTouch: 'Me contacter',
    downloadResume: 'Télécharger le CV',
    methodLabels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },

  footer: {
    builtWith: 'Réalisé avec Next.js, Tailwind CSS & Framer Motion',
  },

  languageSwitcher: {
    label: 'Changer de langue',
  },

  homelab: {
    backToPortfolio: 'Retour au portfolio',
    breadcrumb: 'projects / home-lab',
    badge: 'Infrastructure · Auto-hébergée',
    lede: 'Une infrastructure auto-hébergée de niveau production sur Proxmox : VMs segmentées, une bordure sans port exposé, des services conteneurisés, une sécurité en couches, une supervision complète et une stratégie de sauvegarde 3-2-1 testée.',
    statLabels: {
      hypervisor: 'Hyperviseur',
      services: 'Services',
      publicPorts: 'Ports publics',
      backups: 'Sauvegardes',
    },
    overview: {
      eyebrow: 'Vue d\'ensemble',
      title: "L'objectif",
      body1:
        "Traiter un serveur personnel comme une vraie infrastructure. Ce lab est un environnement pratique pour exercer les disciplines qui me tiennent à cœur professionnellement : sécurité réseau, reverse proxy, gestion des secrets, orchestration de conteneurs, observabilité et reprise après sinistre, sur un unique hôte Proxmox sans jamais l'exposer directement à internet.",
      body2:
        "Proxmox tourne sur ZFS pour les snapshots et l'intégrité des données. Les charges de travail sont réparties sur des VMs dédiées afin qu'une compromission ou une mauvaise configuration reste contenue. Le seul chemin d'accès depuis l'extérieur est un Cloudflare Tunnel sortant protégé par Traefik. Aucune redirection de port entrante n'existe sur le routeur.",
      glanceTitle: "En un coup d'œil",
      glanceItems: [
        'Un seul hôte Proxmox VE sur ZFS',
        '5 VMs segmentées, conçues sur mesure',
        "WireGuard pour l'accès admin à distance",
        'Zéro port entrant via CF Tunnel',
        'Supervision Prometheus + Grafana',
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: 'Comment circule le trafic',
      body: "Chaque requête publique emprunte le même chemin protégé. Aucun service n'est accessible sans passer par le tunnel, la terminaison TLS et l'authentification unique.",
    },
    compute: {
      eyebrow: 'Calcul',
      title: 'Architecture des VMs',
      body: "Les responsabilités sont réparties sur cinq VMs afin de limiter le rayon d'impact ; chacune peut être dimensionnée, sauvegardée et reconstruite indépendamment.",
      roles: {
        gateway: 'Passerelle reverse-proxy & VPN',
        services: 'Hôte applicatif Docker',
        'k3s-node': 'Lab Kubernetes',
        monitoring: "Stack d'observabilité",
        storage: 'Sauvegardes & partages de fichiers',
      },
    },
    security: {
      eyebrow: 'Sécurité',
      title: 'Défense en profondeur',
      body: "Aucun contrôle n'est fiable à lui seul. Chaque couche suppose que la précédente puisse être contournée.",
      items: [
        {
          title: 'Zéro port exposé',
          desc: "Le trafic public ne passe que par un Cloudflare Tunnel sortant. Le pare-feu n'a aucune redirection de port entrante à attaquer.",
        },
        {
          title: 'SSO + 2FA',
          desc: "Authelia impose l'authentification unique et un second facteur TOTP devant chaque service sensible.",
        },
        {
          title: 'TLS partout',
          desc: "Traefik provisionne et renouvelle automatiquement les certificats Let's Encrypt ; tout le trafic HTTP est redirigé vers HTTPS.",
        },
        {
          title: 'Protection anti brute-force',
          desc: "Fail2Ban analyse les journaux d'authentification et de proxy pour bannir automatiquement les IP abusives.",
        },
        {
          title: 'Gestion des secrets',
          desc: "Vault stocke les identifiants de service et jetons API. Rien n'est codé en dur dans les fichiers compose.",
        },
        {
          title: 'Segmentation réseau',
          desc: 'Des VLANs isolent le trafic de gestion, de services et non fiable, selon des règles de pare-feu à privilège minimal.',
        },
      ],
    },
    networking: {
      wireguardTitle: 'Accès distant — WireGuard',
      wireguardBody:
        "L'accès administratif ne passe jamais par l'interface web publique. Un tunnel WireGuard fournit un VPN rapide et moderne vers le VLAN de gestion, rendant SSH et Proxmox accessibles uniquement aux pairs authentifiés — jamais exposés à internet.",
      vlanTitle: 'Segmentation — VLANs',
      vlanBody:
        "Le trafic est séparé en segments de gestion, de services et non fiables. Les règles de pare-feu suivent le principe du moindre privilège. Le VLAN services peut atteindre ses bases de données, mais le segment non fiable ne peut presque rien atteindre.",
    },
    monitoring: {
      eyebrow: 'Observabilité',
      title: 'Supervision & alertes',
      body: 'Prometheus scrape les exporters sur l\'hôte et les conteneurs ; Grafana transforme cela en tableaux de bord et alertes.',
      items: [
        'node_exporter — CPU, mémoire, disque & réseau de l\'hôte',
        'cAdvisor — utilisation des ressources par conteneur',
        'Prometheus — collecte, rétention & règles d\'alerte',
        'Grafana — tableaux de bord pour infra, conteneurs & services',
        "Alertes sur les seuils de ressources et de disponibilité",
      ],
      illustrative: 'illustratif',
      metricLabels: {
        cpuLoad: 'Charge CPU',
        memory: 'Mémoire',
        containers: 'Conteneurs',
        uptime: 'Disponibilité',
      },
    },
    backup: {
      eyebrow: 'Résilience',
      title: 'Stratégie de sauvegarde — 3-2-1',
      body: 'Trois copies des données, sur deux types de support, avec une copie hors site.',
      tiers: [
        {
          tier: 'Snapshots',
          freq: 'Horaire / Quotidien',
          desc: 'Les snapshots ZFS offrent un retour arrière local instantané et peu coûteux, et protègent contre la suppression accidentelle.',
        },
        {
          tier: 'Sauvegarde locale',
          freq: 'Quotidien',
          desc: "Restic écrit des sauvegardes dédupliquées et chiffrées sur un dataset distinct du pool de stockage.",
        },
        {
          tier: 'Copie hors site',
          freq: 'Hebdomadaire',
          desc: 'Une copie Restic / Duplicati chiffrée est répliquée hors site — le « 1 » de la règle 3-2-1.',
        },
      ],
    },
    challenges: {
      eyebrow: 'Ingénierie',
      title: 'Défis & arbitrages',
      challengeLabel: 'Défi',
      solutionLabel: 'Solution',
      items: [
        {
          problem: 'Exposer des services publiquement sans ouvrir de ports sur le pare-feu',
          solution:
            "Un Cloudflare Tunnel maintient une connexion sortante uniquement vers l'edge ; combiné au SSO Authelia, rien sur le LAN n'est directement accessible depuis internet.",
        },
        {
          problem: 'Dimensionner correctement les VMs sur du matériel limité',
          solution:
            "Analyse des charges réelles avec la stack de supervision, puis ajustement du vCPU/RAM par VM et regroupement des services légers sur un hôte Docker partagé.",
        },
        {
          problem: 'Charge de gestion des certificats',
          solution:
            "Délégation de l'émission et du renouvellement ACME à Traefik, pour que chaque service obtienne un certificat TLS valide et auto-renouvelé, sans étape manuelle.",
        },
        {
          problem: 'Sauvegardes fiables et restaurables',
          solution:
            "Adoption d'une stratégie 3-2-1 avec snapshots ZFS et Restic chiffré, avec des tests de restauration périodiques plutôt que de supposer que les sauvegardes fonctionnent.",
        },
      ],
    },
    learnings: {
      eyebrow: 'Enseignements',
      title: 'Ce que j\'ai appris',
      items: [
        "La défense en profondeur est un état d'esprit. Chaque couche suppose que la précédente peut échouer (réseau, proxy, authentification, secrets).",
        'La reproductibilité prime sur les bricolages de disponibilité : un Docker Compose déclaratif et une configuration documentée rendent les reconstructions triviales.',
        "On ne peut sécuriser ou optimiser ce qu'on ne voit pas. L'observabilité est venue avant toute mise à l'échelle.",
        "Une sauvegarde n'est réelle que lorsque sa restauration a été testée de bout en bout.",
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Technologies utilisées',
    },
    cta: {
      title: 'Envie d\'aller plus loin ?',
      body: "Avec plaisir pour détailler les configurations, le modèle de menace ou les choix de conception.",
      getInTouch: 'Me contacter',
      allProjects: 'Tous les projets',
    },
  },
};

export default fr;
