export interface Skill {
  name: string;
  icon: string;
}

// Using svgl.app API - correct URLs from https://api.svgl.app
// For icons with light/dark variants, using dark variant for dark background
export const skills: Skill[] = [
  // Frontend
  { name: 'TypeScript', icon: 'https://svgl.app/library/typescript.svg' },
  { name: 'React', icon: 'https://svgl.app/library/react_dark.svg' },
  { name: 'Next.js', icon: 'https://svgl.app/library/nextjs_icon_dark.svg' },
  { name: 'React Native', icon: 'https://svgl.app/library/react_dark.svg' },
  { name: 'Tailwind CSS', icon: 'https://svgl.app/library/tailwindcss.svg' },
  { name: 'Astro', icon: 'https://svgl.app/library/astro-icon-dark.svg' },
  { name: 'Redux', icon: 'https://svgl.app/library/redux.svg' },
  
  // Backend
  { name: 'Node.js', icon: 'https://svgl.app/library/nodejs.svg' },
  { name: 'Express', icon: 'https://svgl.app/library/expressjs_dark.svg' },
  { name: 'Hono', icon: 'https://svgl.app/library/hono.svg' },
  { name: 'Laravel', icon: 'https://svgl.app/library/laravel.svg' },
  { name: 'Bun', icon: 'https://svgl.app/library/bun.svg' },
  
  // Database
  { name: 'PostgreSQL', icon: 'https://svgl.app/library/postgresql.svg' },
  { name: 'MySQL', icon: 'https://svgl.app/library/mysql-icon-dark.svg' },
  { name: 'Redis', icon: 'https://svgl.app/library/redis.svg' },
  { name: 'MongoDB', icon: 'https://svgl.app/library/mongodb-icon-dark.svg' },
  { name: 'Prisma', icon: 'https://svgl.app/library/prisma_dark.svg' },
  { name: 'Drizzle', icon: 'https://svgl.app/library/drizzle-orm_dark.svg' },
  
  // Tools
  { name: 'Git', icon: 'https://svgl.app/library/git.svg' },
  { name: 'Docker', icon: 'https://svgl.app/library/docker.svg' },
  { name: 'Vercel', icon: 'https://svgl.app/library/vercel_dark.svg' },
  { name: 'Playwright', icon: 'https://svgl.app/library/playwright.svg' },
];
