import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter, // Usaremos o Footer para os stats
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Star, GitFork, Code2 } from "lucide-react"; // Ícones para as estatísticas
import TiltedCard from "./ui/tilted-card";

// Interface com as infos
interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export async function ProjectsSection() {
  const response = await fetch(
    `https://api.github.com/users/SantosVicente/repos?sort=updated`,
    {
      next: { revalidate: 3600 },
    }
  );
  const repos: Repo[] = await response.json();

  return (
    <section id="projects" className="container mx-auto z-10 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {repos
          .filter((repo) => repo.description)
          .map((repo) => (
            <div key={repo.id} className="h-[300px] w-full">
              <TiltedCard
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showTooltip={false}
                showMobileWarning={false}
              >
                <Card className="relative flex flex-col h-full w-full bg-neutral-950/90 border border-white/10 text-white backdrop-blur-sm overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      {repo.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {repo.description || "Sem descrição."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-wrap gap-2 content-start">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="text-xs"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </CardContent>

                  <CardFooter className="flex justify-between text-xs text-gray-400 border-t border-white/10 pt-4 pb-4">
                    <span
                      className="flex items-center gap-1.5"
                      title="Linguagem"
                    >
                      <Code2 size={14} />
                      {repo.language || "N/A"}
                    </span>
                    <span
                      className="flex items-center gap-1.5"
                      title="Estrelas"
                    >
                      <Star size={14} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1.5" title="Forks">
                      <GitFork size={14} />
                      {repo.forks_count}
                    </span>
                  </CardFooter>

                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  >
                    <span className="sr-only">
                      Ver projeto {repo.name} no GitHub
                    </span>
                  </Link>
                </Card>
              </TiltedCard>
            </div>
          ))}
      </div>
    </section>
  );
}
