// src/components/ExperienceCard.tsx
import React from 'react';
import { ExperienceEntry } from '@/types';

interface ExperienceCardProps {
  entry: ExperienceEntry;
  delay: string; // Used for staggered animation (e.g., 'delay-300')
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ entry, delay }) => {
  return (
    <div 
      className={`mb-10 p-6 rounded-lg border border-teal-400/20 hover:border-teal-400/50 bg-dark-background/50 transition duration-500 transform hover:-translate-y-1 
      animate-slide-in-up ${delay}`}
    >
      <h3 className="text-xl font-bold text-light-foreground">
        {entry.title} @ <span className="text-teal-400">{entry.company}</span>
      </h3>
      <p className="text-sm font-mono text-gray-400 mb-4">{entry.duration}</p>
      
      {/* Description List */}
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        {entry.description.map((point, index) => (
          <li key={index} className="text-sm">
            {point}
          </li>
        ))}
      </ul>
      
      {/* Technologies Used */}
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 text-xs font-mono bg-teal-400/10 text-teal-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;