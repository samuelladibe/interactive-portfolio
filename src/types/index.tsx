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
  skills: { name: string; icon?: string; isFeatured?: boolean }[]; // Added isFeatured to highlight certain skills
};

// ... other types for Testimonials, Projects, etc.