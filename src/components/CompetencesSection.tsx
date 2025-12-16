// src/components/CompetencesSection.tsx
import React from 'react';
import { competenceData } from '@/data/competences';

const CompetencesSection: React.FC = () => {
  return (
    <section 
      id="competences" // The new ID for the Navbar link
      className="py-24 px-4 md:px-24 bg-dark-background text-light-foreground"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading: Competences */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-light-foreground">
          <span className="text-teal-400 font-mono text-4xl mr-2">01.</span> Skills
        </h2>

        {/* Competences Grid (2 columns on large screens) */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {competenceData.map((group, index) => (
            <div key={index} className="animate-slide-in-up delay-200">
              {/* Category Title */}
              <h3 className="text-xl font-bold text-teal-400 mb-4 pb-1 border-b border-teal-400/20">
                {group.category}
              </h3>

              {/* List of specific competences */}
              <ul className="space-y-3">
                {group.competences.map((comp, compIndex) => (
                  <li 
                    key={compIndex} 
                    className="flex items-start text-gray-300 text-base"
                  >
                    {/* Icon for style (Teal Arrow) */}
                    <span className="text-teal-400 mr-3 mt-1 text-sm">▶</span>
                    {comp.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;