// src/components/ContactSection.tsx
'use client';

import React from 'react';
// import Link from 'next/link';

// Import Icons from react-icons (using Ai for common social/contact icons)
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

// Define your social links data
const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'YOUR_GITHUB_URL', // **REPLACE THIS**
    Icon: AiFillGithub, 
    color: 'text-gray-400 hover:text-teal-400' 
  },
  { 
    name: 'LinkedIn', 
    href: 'YOUR_LINKEDIN_URL', // **REPLACE THIS**
    Icon: AiFillLinkedin, 
    color: 'text-gray-400 hover:text-teal-400' 
  },
  { 
    name: 'Email', 
    href: 'mailto:YOUR_EMAIL@example.com', // **REPLACE THIS**
    Icon: AiOutlineMail, 
    color: 'text-gray-400 hover:text-teal-400' 
  },
];

const ContactSection: React.FC = () => {
  // NOTE: For a real deployment, you would handle form submission here, 
  // likely using a serverless function, Formspree, or an API route.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Placeholder action)');
    // Add real form submission logic (e.g., fetch request) here
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-24 bg-dark-background text-light-foreground"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-light-foreground text-center">
          <span className="text-teal-400 font-mono text-4xl mr-2">05.</span> Contact me
        </h2>

        {/* Main Grid: Info + Form */}
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Side: Text and Social Links */}
          <div className="md:order-1 animate-slide-in-up">
            <h3 className="text-2xl font-semibold mb-4 text-light-foreground">
              Discutons de votre projet.
            </h3>
            <p className="text-gray-300 mb-8 max-w-lg">
              Que vous ayez une offre d'emploi, un projet de développement complexe, ou simplement une question technique, n'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles collaborations.
            </p>

            {/* Social Links with Icons (Prominent placement) */}
            <div className="flex space-x-6">
              {socialLinks.map(({ name, href, Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name}`}
                  className={`transition-colors duration-300 ${color}`}
                >
                  <Icon className="w-8 h-8" /> 
                </a>
              ))}
            </div>

            <p className="text-sm font-mono text-gray-500 mt-12">
                Ou utilisez le formulaire ci-contre pour m'envoyer un message.
            </p>
          </div>

          {/* Right Side: The Contact Form */}
          <div className="md:order-2 animate-slide-in-up delay-100">
            <form onSubmit={handleSubmit} className="space-y-6 p-6 border border-teal-400/30 rounded-lg bg-dark-background/50 shadow-2xl">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-teal-400 mb-1">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-light-foreground focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition duration-150"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-teal-400 mb-1">Adresse Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-light-foreground focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition duration-150"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-teal-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-light-foreground focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition duration-150 resize-none"
                  placeholder="Votre message ici..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-semibold text-dark-background bg-teal-400 rounded-md hover:bg-teal-300 transition duration-200 shadow-md uppercase tracking-wider"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;