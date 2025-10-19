"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const delay = 2000;

    const timer = setTimeout(() => {
      setIsLoaded(true);

      window.scrollTo({ top: 0, behavior: "auto" });
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoaded ? "hidden" : ""}`}>
      <div className="flex justify-center items-center">
        <Image
          src={"/logo.png"}
          width={100}
          height={100}
          alt="Logo Vicente Santos"
        />
      </div>
      <h1 className="preloader-logo">@SantosVicente</h1>
    </div>
  );
}
