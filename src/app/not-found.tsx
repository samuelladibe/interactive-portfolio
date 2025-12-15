// src/app/not-found.tsx (Recommended App Router approach)
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-background text-light-foreground">
      <h2 className="text-6xl font-bold text-teal-400 mb-4">404</h2>
      <p className="text-xl mb-8">Could not find requested resource</p>
      <Link 
        href="/" 
        className="px-6 py-2 border-2 border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-dark-background transition duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}