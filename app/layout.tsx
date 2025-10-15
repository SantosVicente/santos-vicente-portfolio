import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vicente Santos | Desenvolvedor Full-Stack",
  description:
    "Portfólio de Vicente Santos, desenvolvedor Full-Stack e estudante de computação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Preloader />
        <CustomCursor />
        <Navbar />
        <div className="pt-22">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
