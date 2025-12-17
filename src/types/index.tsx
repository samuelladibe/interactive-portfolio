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

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
};

// ... other types for Testimonials, Projects, etc.