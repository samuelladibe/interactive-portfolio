// src/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for menu button
// import LanguageSwitcher from './LanguageSwitcher'; // Import the language switcher component

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
  const [hasMounted, setHasMounted] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW: Mobile menu state

  // Hook to track vertical scroll position and mounting
  useEffect(() => {
    setHasMounted(true); 

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle link click (closes menu on navigation)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-background/95 shadow-lg backdrop-blur-sm h-16' 
          : 'bg-transparent h-20' 
      } 
      ${hasMounted ? 'transform translate-y-0' : 'transform -translate-y-full'}
      `}
    >
      <nav className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-8 transition-height duration-300">
        
        {/* Logo/Name Link */}
        <div className="text-3xl font-bold tracking-widest text-teal-400 hover:text-light-foreground transition duration-300 z-50">
          <Link href="/">SL</Link>
        </div>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-base text-light-foreground hover:text-teal-400 transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>
        
        {/* Language Switcher Component here <LanguageSwitcher /> */}

        {/* Resume Button (Hidden on mobile) */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 text-base font-semibold text-teal-400 border border-teal-400 rounded transition-all hover:bg-teal-400/10 hover:shadow-md"
        >
          Resume
        </a>

        {/* Mobile Menu Icon (Visible on mobile) */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-2xl text-light-foreground hover:text-teal-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />} {/* X icon when open, Menu icon when closed */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-dark-background/95 backdrop-blur-md transition-transform duration-500 md:hidden z-40 p-16
          ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}` // Slide in/out effect
        }
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick} // Close menu on click
              className={`text-2xl font-semibold text-light-foreground hover:text-teal-400 transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="mt-10 px-6 py-3 text-base font-semibold text-teal-400 border border-teal-400 rounded transition-all hover:bg-teal-400/10"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;