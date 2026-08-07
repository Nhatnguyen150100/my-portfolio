import { TheFooter } from '@/components/layout/TheFooter';
import { TheHeader } from '@/components/layout/TheHeader';
import { AboutSection } from '@/modules/home/sections/AboutSection';
import { ContactSection } from '@/modules/home/sections/ContactSection';
import { ExperienceSection } from '@/modules/home/sections/ExperienceSection';
import { HeroSection } from '@/modules/home/sections/HeroSection';
import { WorkSection } from '@/modules/home/sections/WorkSection';

export function HomePage() {
  return (
    <>
      <TheHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </main>
      <TheFooter />
    </>
  );
}
