// src/data/skills.ts
import { SkillCategory } from '@/types';

// NOTE: Ensure your src/types/index.ts has the SkillCategory type defined!

export const skillData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript' }, 
      { name: 'JavaScript' }, 
      { name: 'Python', isFeatured: true }, 
      { name: 'SQL', isFeatured: true }
    ],
  },
  {
    category: 'Frontend Frameworks',
    skills: [
      { name: 'Next.js' }, 
      { name: 'React' }, 
      { name: 'Tailwind CSS' }, 
      { name: 'Framer Motion' }
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: 'Node.js' }, 
      { name: 'Express' }, 
      { name: 'PostgreSQL', isFeatured: true }, 
      { name: 'MongoDB' }
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', isFeatured: true }, 
      { name: 'Docker', isFeatured: true }, 
      { name: 'AWS/Vercel' }, 
      { name: 'Jira' }
    ],
  },
];