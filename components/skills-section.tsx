import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  Frontend: [
    "Figma",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Flask",
  ],
  Backend: ["Node.js", "Express", "GoLang", "Java", "Spring Boot", "PHP"],
  "Bancos de Dados & ORMs": ["SQL", "MongoDB", "Prisma", "Sequelize"],
  "Ferramentas & Outros": ["Docker", "Git", "C", "Python"],
};

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Minhas Habilidades
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
