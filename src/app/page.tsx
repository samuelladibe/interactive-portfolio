// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection'; // Import the new section

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection /> {/* Add the Skills section here */}
      {/* Contact and other sections will go here */}
    </main>
  );
}