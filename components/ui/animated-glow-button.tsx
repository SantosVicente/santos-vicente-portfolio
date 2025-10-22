"use client";

import { useRef, useEffect } from "react";
import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function AnimatedGlowButton({
  children,
  href,
  onClick,
  type = "button",
  className,
}: Props) {
  const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isLink = typeof href !== "undefined";

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (!containerRef.current || !elementRef.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    elementRef.current.classList.add("ativo");

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

    const buttonRect = elementRef.current.getBoundingClientRect();
    const mouseXInButton = e.clientX - buttonRect.left;
    const glowPosition = (mouseXInButton / buttonRect.width) * 100 - 100;
    elementRef.current.style.setProperty("--J7p", `${glowPosition}%`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current || !elementRef.current) return;

    elementRef.current.classList.remove("ativo");
    timeoutRef.current = setTimeout(() => {
      if (containerRef.current && elementRef.current) {
        containerRef.current.style.setProperty("--R4h", "1");
        containerRef.current.style.setProperty("--K9y", "0");
        containerRef.current.style.setProperty("--dg2", "0.2");
        containerRef.current.style.setProperty("--dg1", "0");
        elementRef.current.style.setProperty("--J7p", "10%");
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

  const combinedClassName = ["elementor-button", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className="container-botao">
      <div className="botao">
        {isLink ? (
          <Link href={href}>
            <button
              ref={elementRef as React.Ref<HTMLButtonElement>}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={onClick}
              type={type}
              className={combinedClassName}
            >
              <span className="elementor-button-text">{children}</span>
            </button>
          </Link>
        ) : (
          <button
            ref={elementRef as React.Ref<HTMLButtonElement>}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            type={type}
            className={combinedClassName}
          >
            <span className="elementor-button-text">{children}</span>
          </button>
        )}
      </div>
      <div className="container-html">
        <div className="glow"></div>
        <div className="glow"></div>
      </div>
    </div>
  );
}
