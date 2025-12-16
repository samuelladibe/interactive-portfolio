// src/components/SkillCard.tsx
import React from 'react';

interface SkillCardProps {
  name: string;
  delay: string;
  isFeatured?: boolean; // Added prop
}

const SkillCard: React.FC<SkillCardProps> = ({ name, delay, isFeatured = false }) => {
  // Define base and featured classes
  const featuredClasses = isFeatured
    ? // Classes for the highlighted card
      'bg-teal-400/20 border-teal-400 text-teal-400 shadow-teal-400/20 shadow-lg'
    : // Classes for the regular card (same as before)
      'bg-dark-background border-gray-700/50 text-light-foreground';

  return (
    <div
      className={`
        flex items-center justify-center p-4 rounded-lg font-mono text-sm transition-all duration-300 border
        
        // Dynamic Classes
        ${featuredClasses}
        
        // Base Hover Effect (Enhance the hover for featured cards too)
        ${isFeatured ? 'hover:scale-[1.05] hover:shadow-teal-400/40' : 'hover:bg-teal-400/10 hover:border-teal-400 transform hover:-translate-y-1 hover:scale-[1.02]'} 
        
        // Entrance Animation
        animate-slide-in-up ${delay}
      `}
    >
      <span className="truncate font-semibold">{name}</span>
    </div>
  );
};

export default SkillCard;