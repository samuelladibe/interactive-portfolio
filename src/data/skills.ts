// src/data/skills.ts
import { SkillCategory } from '@/types';

// NOTE: Ensure your src/types/index.ts has the SkillCategory type defined!

export const skillData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript' }, 
      { name: 'JavaScript' }, 
      { name: 'Python' }, 
      { name: 'SQL' }
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
      { name: 'PostgreSQL' }, 
      { name: 'MongoDB' }
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git' }, 
      { name: 'Docker' }, 
      { name: 'AWS/Vercel' }, 
      { name: 'Jira' }
    ],
  },
];