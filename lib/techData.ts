import {
  Code,
  Database,
  Smartphone,
  GitBranch,
  TerminalSquare,
} from "lucide-react";
export const techCategories = [
  {
    name: "Frontend",
    icon: Code,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Flask",
    ],
  },
  {
    name: "Backend",
    icon: TerminalSquare,
    technologies: [
      "Node.js",
      "Express",
      "GoLang",
      "Java",
      "Spring Boot",
      "PHP",
      "Python",
    ],
  },
  {
    name: "Bancos de Dados",
    icon: Database,
    technologies: ["SQL", "MongoDB", "Prisma", "Sequelize"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    technologies: ["React Native"],
  },
  {
    name: "Ferramentas",
    icon: GitBranch,
    technologies: ["Docker", "Git", "C", "Figma"],
  },
];

export const allTechs = techCategories.flatMap((category) =>
  category.technologies.map((techName) => ({
    name: techName,
    icon: category.icon,
  }))
);
