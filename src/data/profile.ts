export type ProfileLink = {
  label: string;
  href: string;
};

export type Capability = {
  index: string;
  title: string;
  description: string;
  technologies: readonly string[];
  evidence: string;
};

export type Experience = {
  company: string;
  image: string;
  imageAlt: string;
  role: string;
  period: string;
  summary: string;
  outcomes: readonly string[];
  technologies: readonly string[];
};

export type Project = {
  name: string;
  image: string;
  imageAlt: string;
  role: string;
  badge: string;
  description: string;
  highlights: readonly string[];
  technologies: readonly string[];
  links: readonly ProfileLink[];
};

export const profile = {
  name: 'Liem Tran',
  role: 'Software Engineer',
  location: 'Seattle, Washington',
  summary:
    'I build reliable backend systems and cloud infrastructure, with a focus on distributed services, event-driven architecture, and search.',
  links: [
    { label: 'GitHub', href: 'https://github.com/limetheman' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/liem-tran1/' },
    { label: 'Resume', href: '/LiemResume.pdf' },
  ] satisfies ProfileLink[],
  primaryTechnologies: [
    'AWS',
    'Kafka',
    'Java',
    'Spring Boot',
    'Elasticsearch',
    'SQS',
    'Python',
    'Node.js',
    'React',
  ],
  capabilities: [
    {
      index: '01',
      title: 'Cloud systems',
      description:
        'Designing services around managed cloud infrastructure, with clear operational boundaries and room to scale.',
      technologies: ['AWS', 'SQS', 'Cloud infrastructure'],
      evidence:
        'At Chewy, I built serverless order processing across 18 fulfillment centers and an event consolidation system handling 100K+ daily events.',
    },
    {
      index: '02',
      title: 'Event-driven architecture',
      description:
        'Building asynchronous workflows and data pipelines that keep services decoupled and resilient.',
      technologies: ['Kafka', 'SQS', 'Distributed systems'],
      evidence:
        'At Chewy, I worked across Kafka and SQS workflows ranging from asynchronous order processing to a platform ingesting 1M+ events each day.',
    },
    {
      index: '03',
      title: 'Search & data',
      description:
        'Making application data useful through thoughtful indexing, retrieval, and backend service design.',
      technologies: ['Elasticsearch', 'REST APIs', 'Databases'],
      evidence:
        'I used Elasticsearch for order lifecycle visibility, DynamoDB for cloud data access, and Neo4j for campus navigation data.',
    },
    {
      index: '04',
      title: 'Product delivery',
      description:
        'Connecting dependable backend foundations to accessible interfaces and complete user experiences.',
      technologies: ['React', 'TypeScript', 'Next.js'],
      evidence:
        'At Chewy, I paired backend event data with a React and Next.js visualization platform used to understand the order lifecycle.',
    },
  ] satisfies Capability[],
  experience: [
    {
      company: 'Chewy',
      image: '/chewylogo.png',
      imageAlt: 'Chewy',
      role: 'Software Engineer',
      period: 'June 2025 — Present',
      summary:
        'Building event-driven systems and operational tooling for high-volume order and subscription workflows.',
      outcomes: [
        'Architected a consolidation system processing 100K+ subscription events daily and unlocking $15M/year in revenue.',
        'Led the technical design and end-to-end delivery of an order-status platform ingesting 1M+ events per day and supporting four or more partner teams.',
      ],
      technologies: ['Kafka', 'EKS', 'Elasticsearch', 'SQS', 'ECS', 'DynamoDB', 'React', 'Next.js'],
    },
    {
      company: 'Chewy',
      image: '/chewylogo.png',
      imageAlt: 'Chewy',
      role: 'Software Engineering Co-op',
      period: 'May 2024 — December 2024',
      summary:
        'Designed serverless order-processing infrastructure for fulfillment operations across the United States.',
      outcomes: [
        'Processed 100K+ concurrent orders from 18 fulfillment centers, contributing an estimated $6.4M in annual shipping savings.',
        'Reduced end-to-end processing from 30 minutes to 5 minutes and doubled message throughput.',
      ],
      technologies: ['AWS Lambda', 'S3', 'SQS', 'ECS', 'Spring Boot', 'REST APIs'],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'GopherTunnels',
      image: '/gophersplash.png',
      imageAlt: 'GopherTunnels application splash screen',
      role: 'Tech Lead',
      badge: 'App Store · 30-person team',
      description: 'A mobile navigation experience for the University of Minnesota tunnel system.',
      highlights: [
        'Led a cross-functional team of developers, designers, and engineers.',
        'Helped shape the Neo4j data layer and optimize retrieval through Express.',
      ],
      technologies: ['React Native', 'Node.js', 'Neo4j', 'Google Cloud'],
      links: [
        {
          label: 'App Store',
          href: 'https://apps.apple.com/us/app/gophertunnels/id6754943228',
        },
      ],
    },
    {
      name: 'Study Buddy',
      image: '/studyBuddy.png',
      imageAlt: 'Study Buddy application',
      role: 'Full-stack Developer',
      badge: 'Collaborative learning',
      description: 'A collaborative study platform created to help students learn together.',
      highlights: [
        'Connected a Python and Django backend to a responsive React experience.',
        'Designed around finding study support and learning with other students.',
      ],
      technologies: ['Django', 'Python', 'Node.js', 'React'],
      links: [
        { label: 'GitHub', href: 'https://github.com/Isopod00/Study-Buddy-Public' },
        { label: 'Devpost', href: 'https://devpost.com/software/studybuddy-okrtx4' },
      ],
    },
    {
      name: 'Back To Hue',
      image: '/BackToHue.png',
      imageAlt: 'Back To Hue application',
      role: 'Mobile Developer',
      badge: '2nd place · LAHacks 2023',
      description: 'A mobile color experience built with a realtime application backend.',
      highlights: [
        'Collaborated on a six-person team across engineering, design, and product.',
        'Shipped the cross-platform application to the Google Play Store.',
      ],
      technologies: ['Firebase', 'Node.js', 'React Native', 'Expo'],
      links: [
        {
          label: 'Website',
          href: 'https://back-to-hue-website-fy2r.vercel.app/index.html',
        },
      ],
    },
  ] satisfies Project[],
} as const;
