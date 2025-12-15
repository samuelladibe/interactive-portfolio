// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection'; // Import the new section

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      {/* Other sections will go here */}
    </main>
  );
}