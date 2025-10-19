"use client";

import { techCategories } from "@/lib/techData";
import { Badge } from "@/components/ui/badge";
import CardSwap, { Card } from "./card-swap";

export function TechStackCards() {
  return (
    <CardSwap
      cardDistance={60}
      verticalDistance={70}
      delay={5000}
      pauseOnHover={false}
    >
      {techCategories.map((category) => {
        const Icon = category.icon;

        return (
          <Card key={category.name} className="border-none">
            <div className="flex h-full w-full flex-col rounded-xl border border-white/10 bg-neutral-900/80 p-4 backdrop-blur-md">
              <div className="flex w-full items-center gap-3 border-b border-white/10 pb-2">
                <Icon className="h-6 w-6 text-purple-400" />
                <h3 className="text-lg font-bold text-white">
                  {category.name}
                </h3>
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
          </Card>
        );
      })}
    </CardSwap>
  );
}
