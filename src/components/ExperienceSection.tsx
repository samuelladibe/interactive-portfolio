// src/components/ExperienceSection.tsx
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '@/data/experience';

const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-24 px-4 md:px-24 bg-dark-background text-light-foreground min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-light-foreground">
          <span className="text-teal-400 font-mono text-4xl mr-2">02.</span> Experiences and Academic background
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-600/50 pl-6">
          {experienceData.map((entry, index) => (
            <div 
              key={entry.company} 
              className="relative mb-12"
            >
              {/* Timeline Marker (The interactive circle/dot) */}
              <div 
                className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-teal-400 border-4 border-dark-background 
                transition-transform duration-500 hover:scale-125"
              ></div>
              
              {/* Experience Card with Staggered Delay */}
              <ExperienceCard 
                entry={entry} 
                // Staggered animation delay: 0ms, 200ms, 400ms, etc.
                delay={`delay-${index * 200}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;