// src/data/projects.ts
import { Project } from '@/types';

export const projectData: Project[] = [
  {
    title: "AI Platform Dashboard",
    description: "Une plateforme d'analyse de données en temps réel utilisant l'IA pour prédire les tendances du marché. Interface fluide avec visualisation de données complexe.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Python"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // Place images in /public/
  },
  {
    title: "E-commerce Architecture",
    description: "Conception d'une infrastructure microservices scalable pour une boutique en ligne à fort trafic. Focus sur la performance et la sécurité.",
    tags: ["React", "Node.js", "Docker", "AWS"],
    githubUrl: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  // Add 3-4 projects here
];