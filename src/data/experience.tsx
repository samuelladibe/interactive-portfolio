// src/data/experience.ts
import { ExperienceEntry } from '@/types';

// NOTE: Ensure your src/types/index.ts has the ExperienceEntry type defined!

export const experienceData: ExperienceEntry[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Innovatech Solutions',
    duration: '2023 - Present',
    description: [
      'Led a team of 3 developers in migrating legacy applications to a modern Next.js and TypeScript stack, resulting in a 40% reduction in load times.',
      'Designed and implemented a scalable RESTful API using Node.js and PostgreSQL for real-time data synchronization.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Software Engineer',
    company: 'Creative Digital Agency',
    duration: '2020 - 2023',
    description: [
      'Developed 15+ custom client websites using React and Gatsby, focusing on performance and SEO optimization.',
      'Managed deployment pipelines using GitHub Actions and Vercel, streamlining the continuous integration process.',
    ],
    technologies: ['React', 'Gatsby', 'Tailwind CSS', 'GraphQL', 'Vercel'],
  },
  // Add more entries as needed...
];