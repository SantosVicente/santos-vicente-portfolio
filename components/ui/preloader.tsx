"use client";

import { useState, useEffect } from "react";

export function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const delay = 4000;

    const timer = setTimeout(() => {
      setIsLoaded(true);

      window.scrollTo({ top: 0, behavior: "auto" });
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoaded ? "hidden" : ""}`}>
      <h1 className="preloader-logo">@SantosVicente</h1>
    </div>
  );
}
