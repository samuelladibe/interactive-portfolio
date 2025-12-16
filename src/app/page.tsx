// src/app/page.tsx
import HeroSection from '@/components/HeroSection'; // About Me
import CompetencesSection from '@/components/CompetencesSection'; // New Section (01.)
import ExperienceSection from '@/components/ExperienceSection'; // 02.
import SkillsSection from '@/components/SkillsSection'; // 03.
import TestimonialsSection from '@/components/TestimonialsSection'; // 04.

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection /> 
      <CompetencesSection /> {/* NEW POSITION */}
      <ExperienceSection /> 
      <SkillsSection /> 
      <TestimonialsSection /> 
    </main>
  );
}