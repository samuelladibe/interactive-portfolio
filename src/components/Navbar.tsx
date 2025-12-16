// src/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Array for navigation links (easy to modify later)
const navLinks = [
  { name: 'About Me', href: '#about' },
  { name: 'Skills', href: '#competences' },
  { name: 'Experiences', href: '#experience' },
  { name: 'Tools', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Me', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // State to handle the initial animated entrance of the Navbar
  const [hasMounted, setHasMounted] = useState(false); 

  // Hook to track vertical scroll position
  useEffect(() => {
    // Set mounted state for entrance animation
    setHasMounted(true); 

    const handleScroll = () => {
      // Set 'scrolled' to true if user scrolls more than 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-background/95 shadow-lg backdrop-blur-sm h-16' // Slightly thinner on scroll
          : 'bg-transparent h-20' // Taller when at the top
      } 
      // Initial entrance animation: slide down from the top
      ${hasMounted ? 'transform translate-y-0' : 'transform -translate-y-full'}
      `}
    >
      <nav className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-8 transition-height duration-300">
        
        {/* Logo/Name Link (Kept size for branding) */}
        <div className="text-3xl font-bold tracking-widest text-teal-400 hover:text-light-foreground transition duration-300">
          <Link href="/">SL</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // INCREASED TEXT SIZE: text-sm -> text-base
              // Enhanced Hover Effect: added a border-b for a subtle underline animation
              className="relative text-base text-light-foreground hover:text-teal-400 transition-colors duration-300 group"
            >
              {link.name}
              {/* Animated underline effect */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>
        
        {/* Resume Button - Size remains professional */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 text-base font-semibold text-teal-400 border border-teal-400 rounded transition-all hover:bg-teal-400/10 hover:shadow-md"
        >
          Resume
        </a>
        
        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden">
          <button className="text-2xl text-light-foreground hover:text-teal-400">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;