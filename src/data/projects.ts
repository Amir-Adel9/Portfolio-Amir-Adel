export type ProjectStatus =
  | 'featured'
  | 'active'
  | 'internal'
  | 'archived'
  | 'unmaintained';
export type ProjectCategory = 'Personal' | 'Creiden' | 'Hackathon';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  status: ProjectStatus;
  category: ProjectCategory;
  year: number;
}

export const projects: Project[] = [
  // Featured
  {
    id: 'tripos',
    title: 'TripOS',
    description:
      'AI travel assistant that generates complete trip itineraries from natural language descriptions. Features voice briefings, real-time budget tracking, and instant plan adjustments.',
    image: '/projects/trip-os.png',
    tech: ['Next.js', 'Botpress', 'Convex', 'ElevenLabs', 'TypeScript'],
    liveUrl: 'https://trip-os-one.vercel.app/',
    status: 'featured',
    category: 'Hackathon',
    year: 2026,
  },

  // Internal (Creiden projects)
  {
    id: 'ithaka',
    title: 'Ithaka',
    description:
      'Client-facing tourism platform built for production use. Implemented responsive UI components and integrated frontend features with backend APIs.',
    image: '/projects/Ithaka.png',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://ithaka.world/',
    status: 'featured',
    category: 'Creiden',
    year: 2024,
  },
  {
    id: 'arabian-league',
    title: 'Arabian League Grounds',
    description:
      'All-in-one platform for the Arabian League of Legends championship. Features tournament schedules, standings, match statistics, predictions, and a full fantasy league system with 200+ active users.',
    image: '/projects/alg.png',
    tech: [
      'Next.js',
      'TypeScript',
      'Drizzle ORM',
      'MySQL',
      'Redis',
      'Tailwind CSS',
    ],
    liveUrl: 'https://www.arabianleaguegrounds.live/',
    status: 'unmaintained',
    category: 'Personal',
    year: 2024,
  },
  {
    id: 'lms',
    title: 'Learning Management System',
    description:
      'Large-scale LMS with course enrollment, lesson consumption, exams, and progress tracking. Features role-based UI and scalable component architecture.',
    image: '/projects/lms.png',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RBAC'],
    status: 'internal',
    category: 'Creiden',
    year: 2025,
  },
  {
    id: 'property-hub',
    title: 'Property Hub',
    description:
      'Internal real-estate management mobile app. Built screens for authentication, property browsing, filtering, and integrated with backend APIs.',
    image: '/projects/property-hub.png',
    tech: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
    status: 'internal',
    category: 'Creiden',
    year: 2025,
  },

  // Archived (old projects)
  {
    id: 'cat-corner',
    title: 'Cat Corner',
    description:
      'A social media like website for posting pictures of cats, includes features as posting, liking, commenting and viewing user profiles.',
    image: '/projects/catcorner.png',
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'tRPC', 'Prisma'],
    liveUrl: 'https://catcorner.vercel.app/',
    sourceUrl: 'https://github.com/Amir-Adel9/cat-corner',
    status: 'archived',
    category: 'Personal',
    year: 2023,
  },
  {
    id: 'typemaster',
    title: 'Type Master',
    description:
      'A full stack typing game with features like user registration, difficulties, themes, tracking progress and leveling system, leaderboards and in-game stats.',
    image: '/projects/typemaster.png',
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'tRPC', 'Prisma'],
    liveUrl: 'https://typemaster-plus.vercel.app/',
    sourceUrl: 'https://github.com/Amir-Adel9/typemaster',
    status: 'archived',
    category: 'Personal',
    year: 2023,
  },
  {
    id: 'amplified-spotify',
    title: 'Amplified Spotify',
    description:
      'An application that allows users to log in with their Spotify accounts and view their most listened to tracks.',
    image: '/projects/amp.png',
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Spotify API'],
    liveUrl: 'https://amplified-spotify.vercel.app/',
    sourceUrl: 'https://github.com/Amir-Adel9/amplified-spotify-old',
    status: 'archived',
    category: 'Personal',
    year: 2023,
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    description:
      'A vanilla personal website to showcase hobbies, interests and skills. Includes features like a dark mode toggle and an image slider.',
    image: '/projects/personal.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://semicolon-amiradel.vercel.app/',
    sourceUrl: 'https://github.com/Amir-Adel9/Semicolon-Personal-Website',
    status: 'archived',
    category: 'Personal',
    year: 2022,
  },
  {
    id: 'coffee-express',
    title: 'Coffee Express',
    description:
      'A functional coffee shop application made with Flutter and uses GetX for state management. Features home page, product page, cart, and favorites.',
    image: '/projects/coffee.PNG',
    tech: ['Dart', 'Flutter', 'GetX'],
    sourceUrl: 'https://github.com/Amir-Adel9/coffee_express',
    status: 'archived',
    category: 'Personal',
    year: 2022,
  },
  {
    id: 'shopfront',
    title: 'Shopfront',
    description:
      'A backend for an e-commerce website following MVC architecture with microservices for user accounts, authentication, product management, cart and order management.',
    image: '/projects/shop.webp',
    tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Jasmine'],
    sourceUrl: 'https://github.com/Amir-Adel9/store-backend',
    status: 'archived',
    category: 'Personal',
    year: 2022,
  },
  {
    id: 'image-processing',
    title: 'Image Processing API',
    description:
      'An API with endpoints for resizing and adding filters to images using Sharp.',
    image: '/projects/img.jpg',
    tech: ['TypeScript', 'Node.js', 'Express', 'Sharp'],
    sourceUrl: 'https://github.com/Amir-Adel9/image-processing',
    status: 'archived',
    category: 'Personal',
    year: 2022,
  },
  {
    id: 'weather-journal',
    title: 'Weather Journal',
    description:
      'An application that fetches weather data from the OpenWeatherAPI based on a ZIP code input and displays it to the user.',
    image: '/projects/weather.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
    sourceUrl: 'https://github.com/Amir-Adel9/weather-journal-app',
    status: 'archived',
    category: 'Personal',
    year: 2022,
  },
];

export const getProjectsByStatus = (status: ProjectStatus) =>
  projects.filter((p) => p.status === status);

export const getFeaturedProjects = () => getProjectsByStatus('featured');
export const getActiveProjects = () => getProjectsByStatus('active');
export const getInternalProjects = () => getProjectsByStatus('internal');
export const getArchivedProjects = () => getProjectsByStatus('archived');
