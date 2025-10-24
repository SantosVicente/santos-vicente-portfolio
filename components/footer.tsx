import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t">
      <div className="w-full px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left text-sm text-muted-foreground">
          © {currentYear} Vicente Santos. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/SantosVicente"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/santosvicente2302/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
