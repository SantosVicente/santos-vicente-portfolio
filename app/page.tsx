import { HomeSection } from "@/components/home-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { CounterSection } from "@/components/counter-section";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomeSection />
      <CounterSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
