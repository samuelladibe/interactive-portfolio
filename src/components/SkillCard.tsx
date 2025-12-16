// src/components/SkillCard.tsx
import React from 'react';

interface SkillCardProps {
  name: string;
  delay: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, delay }) => {
  return (
    <div
      className={`
        flex items-center justify-center p-4 bg-dark-background border border-gray-700/50 rounded-lg 
        text-light-foreground font-mono text-sm shadow-xl transition-all duration-300
        
        // INTERACTIVITY: Lift and highlight on hover
        hover:bg-teal-400/10 hover:border-teal-400 
        transform hover:-translate-y-1 hover:scale-[1.02] 
        
        // Entrance Animation
        animate-slide-in-up ${delay}
      `}
    >
      {/* If you wanted icons, you would place them here (e.g., an <img> tag) */}
      <span className="truncate">{name}</span>
    </div>
  );
};

export default SkillCard;