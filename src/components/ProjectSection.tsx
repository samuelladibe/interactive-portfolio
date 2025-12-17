// src/components/ProjectsSection.tsx
import React from 'react';
import { projectData } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-24 bg-dark-background text-light-foreground">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-light-foreground">
            <span className="text-teal-400 font-mono text-4xl mr-2">02.</span> 
            Mes Réalisations
          </h2>
          {/* <div className="h-[1px] w-full md:w-1/2 bg-gray-700 mt-4"></div> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Optional "More on GitHub" link */}
        <div className="mt-16 text-center">
            <a href="https://github.com" target="_blank" className="text-teal-400 font-mono hover:underline">
                Voir plus sur GitHub →
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;