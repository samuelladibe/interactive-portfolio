// src/components/HeroSection.tsx
'use client';

import React from 'react';
import ProfileImage from './ProfileImage';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-background px-4 md:px-24">
      
      {/* BACKGROUND ACCENTS (Inspired by your orange circles) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute top-40 left-40 w-48 h-48 bg-teal-400/10 blur-[100px] rounded-full -z-10 delay-700"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Your Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start z-10">
          <p className="font-mono text-teal-400 mb-4 animate-slide-in-up">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-light-foreground mb-4 animate-slide-in-up delay-100">
            Samuel LADIBE.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-400 mb-6 animate-slide-in-up delay-200 leading-tight">
            I build interactive web experiences.
          </h2>
          
          <p className="max-w-xl text-lg mb-10 text-gray-400 animate-slide-in-up delay-300">
            I'm a software engineer specializing in full-stack development. I enjoy bringing complex ideas to life with clean, efficient code.
          </p>

          {/* ... Spoken Languages & Buttons ... */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up delay-500">
             <a href="#projects" className="px-8 py-3 text-sm font-semibold uppercase tracking-widest text-teal-400 border-2 border-teal-400 rounded transition-all hover:bg-teal-400/10">
               View My Work
             </a>
             <a href="#contact" className="px-8 py-3 text-sm font-semibold uppercase tracking-widest text-dark-background bg-teal-400 rounded transition-all hover:bg-teal-300">
               Contact Me
             </a>
          </div>
        </div>

        {/* RIGHT SIDE: The Photo (The Pink Circle area) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-up">
           <ProfileImage />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;