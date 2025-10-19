import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Gitlab, Instagram, Github } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    href: "mailto:vidosantos45@gmail.com",
    label: "Gmail",
    icon: <Mail className="mr-2 h-4 w-4" />,
  },
  {
    href: "https://www.linkedin.com/in/santosvicente2302/",
    label: "LinkedIn",
    icon: <Linkedin className="mr-2 h-4 w-4" />,
  },
  {
    href: "https://github.com/SantosVicente",
    label: "GitHub",
    icon: <Github className="mr-2 h-4 w-4" />,
  },
  {
    href: "https://www.instagram.com/santos.vicente.js_/",
    label: "Instagram",
    icon: <Instagram className="mr-2 h-4 w-4" />,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="container z-10 mx-auto py-12 px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Vamos Conversar?</h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
        Estou sempre aberto a novas oportunidades, colaborações e a um bom
        bate-papo sobre tecnologia. Sinta-se à vontade para entrar em contato!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {contactLinks.map((link) => (
          <Button key={link.href} asChild>
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
