'use client';
// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Function to smoothly scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-background border-t border-gray-700/50 py-10 px-4 md:px-24 text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        
        {/* Copyright */}
        <p className="mb-4 sm:mb-0">
          &copy; {currentYear} Samuel Ladibe. Tous droits réservés.
        </p>

        {/* Back to Top Link */}
        <button
          onClick={scrollToTop}
          className="flex items-center text-teal-400 hover:text-light-foreground transition-colors duration-200 font-mono"
          aria-label="Scroll back to top"
        >
          <FiArrowUp className="w-4 h-4 mr-1" />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;