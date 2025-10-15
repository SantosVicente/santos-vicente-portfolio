"use client";

import { useRef, useEffect } from "react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export function AnimatedGlowButton({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!containerRef.current || !buttonRef.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    buttonRef.current.classList.add("ativo");

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseXInContainer = e.clientX - containerRect.left;
    const horizontalRatio = Math.min(
      Math.max(mouseXInContainer / containerRect.width, 0),
      1
    );

    containerRef.current.style.setProperty("--R4h", horizontalRatio.toFixed(2));
    containerRef.current.style.setProperty(
      "--K9y",
      (1 - horizontalRatio).toFixed(2)
    );
    containerRef.current.style.setProperty(
      "--dg2",
      (horizontalRatio * 0.2).toFixed(2)
    );
    containerRef.current.style.setProperty(
      "--dg1",
      ((1 - horizontalRatio) * 0.2).toFixed(2)
    );

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const mouseXInButton = e.clientX - buttonRect.left;
    const glowPosition = (mouseXInButton / buttonRect.width) * 100 - 100;
    buttonRef.current.style.setProperty("--J7p", `${glowPosition}%`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current || !buttonRef.current) return;

    buttonRef.current.classList.remove("ativo");
    timeoutRef.current = setTimeout(() => {
      if (containerRef.current && buttonRef.current) {
        containerRef.current.style.setProperty("--R4h", "1");
        containerRef.current.style.setProperty("--K9y", "0");
        containerRef.current.style.setProperty("--dg2", "0.2");
        containerRef.current.style.setProperty("--dg1", "0");
        buttonRef.current.style.setProperty("--J7p", "10%");
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="container-botao">
      <div className="botao">
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="elementor-button"
        >
          <span className="elementor-button-text">{children}</span>
        </button>
      </div>
      <div className="container-html">
        <div className="glow"></div>
        <div className="glow"></div>
      </div>
    </div>
  );
}
