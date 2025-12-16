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

export type Testimonial = {
  quote: string;
  clientName: string;
  clientTitle: string; // e.g., "CTO at ClientCo"
  project: string; // e.g., "Full Stack Platform Migration"
};


// ... other types for Testimonials, Projects, etc.