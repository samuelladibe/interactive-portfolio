// src/data/competences.ts
// We can reuse the SkillCategory type, or define a new CompetenceGroup type if necessary, 
// but for simplicity and consistency, let's keep the existing structure and adjust the names.

export const competenceData = [
  {
    category: 'Développement Web & Applications', // Web & Application Development
    competences: [
      { name: 'Programmation Full-Stack (Next.js, Node.js)' },
      { name: 'Architecture Microservices' },
      { name: 'Tests Unitaires et Intégration Continue (CI/CD)' },
    ],
  },
  {
    category: 'Cloud & Infrastructure', // Cloud & Infrastructure
    competences: [
      { name: 'Architecture Cloud (AWS, Vercel)' },
      { name: 'Conteneurisation (Docker)' },
      { name: 'Sécurité et Monitoring' },
    ],
  },
  {
    category: 'Bases de Données & Data', // Databases & Data
    competences: [
      { name: 'Modélisation de Bases de Données (PostgreSQL, MongoDB)' },
      { name: 'Optimisation de Requêtes SQL' },
      { name: 'ETL et Pipelines de Données' },
    ],
  },
];