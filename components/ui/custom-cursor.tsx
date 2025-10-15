"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      return;
    }

    let mouseX = 0,
      mouseY = 0;
    let innerX = 0,
      innerY = 0;
    let outerX = 0,
      outerY = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const mouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      innerX = lerp(innerX, mouseX, 0.25);
      innerY = lerp(innerY, mouseY, 0.25);

      outerX = lerp(outerX, mouseX, 0.15);
      outerY = lerp(outerY, mouseY, 0.15);

      if (innerCursorRef.current && outerCursorRef.current) {
        innerCursorRef.current.style.left = `${innerX}px`;
        innerCursorRef.current.style.top = `${innerY}px`;

        outerCursorRef.current.style.left = `${outerX}px`;
        outerCursorRef.current.style.top = `${outerY}px`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", mouseMove);

    animate();

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <div ref={innerCursorRef} className="cursor-inner"></div>
      <div ref={outerCursorRef} className="cursor-outer"></div>
    </>
  );
}
