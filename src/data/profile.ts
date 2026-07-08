export type ProfileLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  source: string;
  live?: string;
};

export const profile = {
  name: 'Liem Tran',
  role: 'Software Engineer',
  summary: 'I build thoughtful software experiences across the stack.',
  links: [
    { label: 'GitHub', href: 'https://github.com/limetheman' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/liem-tran1/' },
    { label: 'Resume', href: '/LiemResume.pdf' },
  ] satisfies ProfileLink[],
  projects: [
    {
      name: 'GopherTunnels',
      source: 'https://github.com/gopher-tunnels/gt-front-end',
    },
    {
      name: 'Back To Hue',
      source: 'https://github.com/gopher-tunnels/gt-front-end',
      live: 'https://back-to-hue-website-fy2r.vercel.app/index.html',
    },
    {
      name: 'Study Buddy',
      source: 'https://github.com/Isopod00/Study-Buddy-Public',
      live: 'https://devpost.com/software/studybuddy-okrtx4',
    },
  ] satisfies Project[],
} as const;
