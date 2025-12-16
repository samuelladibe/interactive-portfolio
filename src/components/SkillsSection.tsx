// src/components/SkillsSection.tsx
import React from 'react';
import SkillCard from './SkillCard';
import { skillData } from '@/data/skills';

const SkillsSection: React.FC = () => {
  let animationDelay = 0; // Initialize delay counter for staggered animation

  return (
    <section 
      id="skills" 
      className="py-24 px-4 md:px-24 bg-dark-background text-light-foreground min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-light-foreground">
          <span className="text-teal-400 font-mono text-2xl mr-2">03.</span> Skills & Tools
        </h2>

        {skillData.map((categoryGroup, index) => (
          <div key={index} className="mb-12">
            {/* Category Subheading */}
            <h3 className="text-xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2 animate-slide-in-up">
              {categoryGroup.category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categoryGroup.skills.map((skill, skillIndex) => {
                // Calculate and increment delay counter for staggered animation
                const delayClass = `delay-${animationDelay}`;
                animationDelay += 50; 

                return (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    delay={delayClass} 
                    // CRUCIAL CHANGE: Passing the optional isFeatured prop
                    isFeatured={skill.isFeatured} 
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;