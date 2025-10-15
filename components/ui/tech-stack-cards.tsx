"use client";

import { techCategories } from "@/lib/techData";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export function TechStackCards() {
  const [cards, setCards] = useState(techCategories.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift();
        if (firstCard) {
          newCards.push(firstCard);
        }
        return newCards;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative h-72 w-72">
      {" "}
      {cards.map((category, index) => {
        const Icon = category.icon;
        const styles = [
          { transform: "rotate-[-12deg] scale(0.8)", opacity: "opacity-40" },
          { transform: "rotate-[-6deg] scale(0.9)", opacity: "opacity-60" },
          { transform: "rotate-[0deg] scale(1)", opacity: "opacity-80" },
          { transform: "rotate-[6deg] scale(1.1)", opacity: "opacity-100" },
        ];

        return (
          <div
            key={category.name}
            className={`absolute inset-0 flex h-full w-full transform flex-col rounded-xl border border-white/10 bg-neutral-900/80 p-4 backdrop-blur-md transition-all duration-700 ease-in-out
            ${styles[index].transform}
            ${styles[index].opacity}`}
          >
            <div className="flex w-full items-center gap-3 border-b border-white/10 pb-2">
              <Icon className="h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">{category.name}</h3>
            </div>

            <div className="flex flex-wrap content-start gap-2 pt-3 overflow-y-auto custom-scrollbar">
              {category.technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="border-purple-500/40 bg-transparent text-purple-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
