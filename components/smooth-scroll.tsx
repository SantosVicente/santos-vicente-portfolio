"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  const lenis = useLenis(({ scroll }) => {
    // console.log("Posição do scroll:", scroll);
  });

  useEffect(() => {
    if (lenis) {
      // Exemplo: lenis.stop() ou lenis.start()
    }
  }, [lenis]);

  const options = {
    duration: 1.2,
    // lerp: 0.1,
    // smoothTouch: true,
  };

  return (
    <ReactLenis root options={options}>
      {/* @ts-expect-error Conflito de tipo do ReactNode entre o React 19 (do projeto) e o React 18 (esperado pelo Lenis) */}
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
