// src/types/index.ts

export type ExperienceEntry = {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
};

export type SkillCategory = {
  category: string;
  skills: { name: string; icon?: string }[];
};

// ... other types for Testimonials, Projects, etc.