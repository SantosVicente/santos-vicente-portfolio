"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <header className={`menu ${!isVisible ? "menu-hidden" : ""}`}>
      <div className=" h-full flex items-center justify-between px-8 ">
        <Link
          href="/"
          className="font-bold text-lg flex items-center gap-2 text-white"
        >
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="Logo Vicente Santos"
          />
          Vicente Santos
        </Link>

        <nav className="hidden lg:flex gap-2">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={
                link.href === "#skills"
                  ? "block md:hidden text-white hover:bg-white/10 hover:text-white"
                  : " text-white hover:bg-white/10 hover:text-white"
              }
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_LINKS.map((link) => (
                  <Button key={link.href} variant="ghost" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
