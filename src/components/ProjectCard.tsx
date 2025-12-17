// src/components/ProjectCard.tsx
'use client';

import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className={`group relative bg-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden hover:border-teal-400/50 transition-all duration-500 animate-slide-in-up delay-${index * 100}`}>
      
      {/* Image Container with Zoom Effect */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-light-foreground group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex space-x-3 text-gray-400">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" className="hover:text-teal-400 transition-colors"><FiGithub size={20} /></a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" className="hover:text-teal-400 transition-colors"><FiExternalLink size={20} /></a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-mono font-semibold px-2 py-1 bg-teal-400/10 text-teal-400 rounded-md border border-teal-400/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;