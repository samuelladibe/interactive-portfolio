// src/app/page.tsx
import HeroSection from '@/components/HeroSection'; // About Me
import CompetencesSection from '@/components/CompetencesSection'; // New Section (01.)
import ExperienceSection from '@/components/ExperienceSection'; // 02.
import SkillsSection from '@/components/SkillsSection'; // 03.
import TestimonialsSection from '@/components/TestimonialsSection'; // 04.
import ContactSection from '@/components/ContactSection'; // 05. Import the new section

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection /> 
      <CompetencesSection /> {/* 01. Skills Section */}
      <ExperienceSection /> {/* 02. Experience Section */}
      <SkillsSection /> {/* 03. Tools Section */}
      <TestimonialsSection /> {/* 04. Testimonials Section */}
      <ContactSection /> {/* Add the Contact section here */} 
    </main>
  );
}