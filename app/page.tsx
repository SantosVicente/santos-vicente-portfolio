import { HomeSection } from "@/components/home-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default async function Home() {
  return (
    // Usamos flex-col para empilhar as seções verticalmente.
    // O 'gap' ou 'space-y' pode ser usado para dar espaçamento entre elas.
    <main className="flex flex-col items-center">
      {/* Aqui você vai renderizar cada seção na ordem desejada */}
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
