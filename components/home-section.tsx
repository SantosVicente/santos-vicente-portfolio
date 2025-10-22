"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AnimatedLines } from "@/components/ui/animated-lines";
import { LiveViewerCounter } from "./ui/live-viewer-counter";
import { AnimatedGlowButton } from "./ui/animated-glow-button";
import { TechStackCards } from "./ui/tech-stack-cards";
import SplitText from "./ui/split-text";

export function HomeSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section
      id="home"
      className="relative w-full text-white min-h-[90vh] pulsating-lights-bg overflow-x-hidden"
    >
      <AnimatedLines />

      <div className="relative z-10 container mx-auto h-full min-h-[90vh] p-6 flex flex-col justify-between">
        <header className="flex justify-center items-left w-full flex-col gap-16">
          <div className="w-min">
            <LiveViewerCounter />
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          <main className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <div className="flex items-center">
              <Avatar className="w-36 h-36">
                <AvatarImage
                  src="https://github.com/SantosVicente.png"
                  alt="Vicente Santos"
                />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
            </div>
            <SplitText
              text="Desenvolvedor Full-Stack & Estudante de Informática"
              className="text-4xl md:text-5xl font-semibold"
              initialDelay={2.5}
              delay={70}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            {/*  <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight ">
              Desenvolvedor Full-Stack & Estudante de Informática
            </h1> */}
            <SplitText
              text="Sou apaixonado por tecnologia e aprendizado contínuo, com foco em
              ferramentas modernas como ReactJS, Node.js, React Native e
              Tailwind."
              className="text-lg text-neutral-300"
              initialDelay={2.5}
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            {/*  <p className="text-lg text-neutral-300">
              Sou apaixonado por tecnologia e aprendizado contínuo, com foco em
              ferramentas modernas como ReactJS, Node.js, React Native e
              Tailwind.
            </p> */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <AnimatedGlowButton href="#projects">
                Ver Projetos
              </AnimatedGlowButton>
            </div>
          </main>

          <TechStackCards />
        </div>

        <div></div>
      </div>
    </section>
  );
}
