import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";
import SplashCursor from "@/components/ui/splash-cursor";
import LightRays from "@/components/ui/light-rays";

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
        <SplashCursor />
        <CustomCursor />
        <div className="absolute inset-0 min-h-96">
          <LightRays
            raysOrigin="top-center"
            raysColor="#7434eb"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays absolute"
          />
        </div>
        <Navbar />
        <div className="pt-22">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
