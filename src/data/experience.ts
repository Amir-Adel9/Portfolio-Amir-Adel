export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 'rightshero',
    title: 'Full-Stack Developer',
    company: 'RightsHero',
    companyUrl: 'https://rightshero.com',
    location: 'Cairo, Egypt',
    period: 'Apr 2026 - Present',
    current: true,
    highlights: [
      'Built production systems across the stack using TypeScript, React, Python, and Django',
      'Developed and shipped end-to-end features across frontend and backend',
      'Collaborated with engineers and stakeholders to deliver scalable solutions',
      'Contributed to anti-piracy systems for protecting digital content at scale',
      'Wrote clean, maintainable code and followed strong engineering practices',
      'Participated in technical decisions and system design discussions',
      'Continuously improved and adapted to new tools and workflows',
    ],
  },
  {
    id: 'creiden',
    title: 'Frontend Developer',
    company: 'Creiden',
    companyUrl: 'https://creiden.com',
    location: 'Alexandria, Egypt',
    period: 'Nov 2023 - Mar 2026',
    current: false,
    highlights: [
      'Built and maintained production-grade web applications using TypeScript, Next.js, and React',
      'Shipped mobile features using React Native, Expo, and TypeScript',
      'Developed backend features using Laravel and PHP, integrating server-side logic with frontend applications',
      'Made key technical decisions on project structure and architecture',
      'Improved CI/CD performance, cutting build time from 20 min to 1.5 min (13× faster)',
      'Developed AI-powered features including real-time chatbots and contextual user suggestions',
      'Contributed to re-architecting systems to improve scalability and maintainability',
    ],
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: number;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 'udacity-fullstack',
    title: 'Advanced Full-Stack Web Development Nano Degree',
    issuer: 'Udacity & Egypt FWD',
    year: 2022,
  },
  {
    id: 'udacity-frontend',
    title: 'Professional Front-End Web Development Nano Degree',
    issuer: 'Udacity & Egypt FWD',
    year: 2022,
  },
  {
    id: 'cs50',
    title: 'CS50: Introduction to Computer Science',
    issuer: 'Harvard University',
    year: 2022,
  },
];

export interface Highlight {
  id: string;
  title: string;
  description: string;
  type: 'hackathon' | 'award' | 'volunteering';
  year: number;
  url?: string;
}

export const highlights: Highlight[] = [
  {
    id: 'cursor-hackathon',
    title: 'Cursor Alexandria Hackathon',
    description:
      'Built TripOS, an AI travel assistant with complete itinerary generation, voice briefings, and real-time budget tracking.',
    type: 'hackathon',
    year: 2026,
    url: 'https://www.linkedin.com/posts/amir-adel312_i-am-really-glad-i-got-to-be-a-part-of-the-activity-7421275459633623040-F7tQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADivFw4BLu7wY23v8fi7NGmnwcjIDTUkFss',
  },
  {
    id: 'semicolon-mentor',
    title: 'Semicolon Project - Technical Instructor',
    description:
      'Taught and mentored participants in the React Track. Awarded Best Member for Season 3.',
    type: 'volunteering',
    year: 2023,
  },
  {
    id: 'semicolon-participant',
    title: 'Semicolon Project - Participant',
    description:
      'Participated in Season 2 Flutter track. Awarded Best Participant and Best Project.',
    type: 'volunteering',
    year: 2022,
  },
];
