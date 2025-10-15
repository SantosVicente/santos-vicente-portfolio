import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

export async function ProjectsSection() {
  const response = await fetch(
    "https://api.github.com/users/SantosVicente/repos?sort=updated",
    {
      next: { revalidate: 3600 },
    }
  );
  const repos: Repo[] = await response.json();

  return (
    <section id="projects" className="container mx-auto z-10 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            className="relative hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <CardHeader>
              <CardTitle>{repo.name}</CardTitle>
              <CardDescription>
                {repo.description || "Sem descrição."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-wrap gap-2 content-start">
              {repo.topics.map((topic) => (
                <Badge key={topic} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </CardContent>

            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <span className="sr-only">Ver projeto {repo.name} no GitHub</span>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
