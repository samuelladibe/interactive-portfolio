// src/components/HeroSection.tsx
'use client';

import React from 'react';
import { useTypingEffect } from './useTypingEffect';

const spokenLanguages = [
  { name: 'Français (C2)', flag: '🇫🇷' },
  { name: 'English (C1)', flag: '🇬🇧' },
  { name: 'Español (B2)', flag: '🇪🇸' },
];

const HeroSection: React.FC = () => {
  const intro = "Hi, my name is";
  const name = "John Doe."; // Replace with your name
  const mainTagline = "I build interactive web experiences.";
  const typedTagline = useTypingEffect(mainTagline, 75);
  
  const description =
    "I'm a software engineer specializing in full-stack development. I enjoy bringing complex ideas to life with clean, efficient code and outstanding user interfaces.";

  return (
    <section 
      id="hero" 
      // Tailwind classes for the dark background and centering
      className="flex flex-col justify-center min-h-screen pt-24 md:pt-0 px-4 md:px-24 bg-dark-background text-light-foreground"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Intro Text */}
        <p className="text-lg md:text-xl font-mono text-teal-400 mb-3 animate-slide-in-up">
          {intro}
        </p>

        {/* Main Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-light-foreground animate-slide-in-up delay-100">
          {name}
        </h1>

        {/* Interactive Typing Tagline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-400 animate-slide-in-up delay-200">
          {typedTagline}
          {/* Cursor effect */}
          <span className="inline-block w-1.5 h-8 bg-teal-400 ml-1 align-bottom animate-blink"></span>
        </h2>

        {/* Description */}
        <p className="max-w-xl text-lg mb-10 text-gray-300 animate-slide-in-up delay-300">
          {description}
        </p>

        {/* NEW: Spoken Languages Section */}
        <div className="mb-10 animate-slide-in-up delay-400">
          <h3 className="text-base font-semibold text-light-foreground mb-3">
            Spoken Languages:
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {spokenLanguages.map((lang) => (
              <span key={lang.name} className="flex items-center text-gray-300 font-mono text-sm">
                <span className="text-xl mr-2">{lang.flag}</span> {/* Flag Icon */}
                {lang.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Call to Action Button */}
        <a
          href="#projects" // Link to the projects section
          className="inline-block px-8 py-3 text-sm font-semibold uppercase tracking-widest text-teal-400 border-2 border-teal-400 rounded transition-all hover:bg-teal-400 hover:text-dark-background hover:shadow-lg hover:shadow-teal-400/20 animate-slide-in-up delay-400"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;