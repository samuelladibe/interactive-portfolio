// src/components/ProfileImage.tsx
'use client';

import React from 'react';

const ProfileImage: React.FC = () => {
  return (
    <div className="relative group w-72 h-72 sm:w-96 sm:h-96 animate-fade-in">
      {/* 1. The Aura/Glow behind the photo */}
      <div className="absolute inset-0 bg-teal-400 opacity-20 blur-[80px] rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
      
      {/* 2. The Morphing Container - Cleaned of non-standard props */}
      <div 
        className="relative w-full h-full overflow-hidden border border-teal-400/30 shadow-2xl transition-all duration-700 
        rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] 
        group-hover:rounded-[40%_60%_70%_30%_/_40%_70%_30%_60%] 
        animate-morph"
      >
        <img
          src="/profile.jpg" // Ensure your photo is in /public/profile.jpg 
          alt="Samuel LADIBE"
          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
        />
        
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 to-transparent opacity-50"></div>
      </div>

      {/* 3. Floating "Tech" Ring */}
      <div className="absolute -inset-4 border border-dashed border-teal-400/20 rounded-full animate-spin-slow pointer-events-none"></div>
    </div>
  );
};

export default ProfileImage;