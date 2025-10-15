"use client";

import { useState, useEffect } from "react";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function LiveViewerCounter() {
  const [viewerCount, setViewerCount] = useState<number | null>(null);

  useEffect(() => {
    setViewerCount(random(250, 280));
    const interval = setInterval(() => {
      setViewerCount((currentCount) => {
        if (currentCount === null) return random(250, 280);

        const variation = random(-5, 5);
        let newCount = currentCount + variation;

        if (newCount < 200) newCount = 200;
        if (newCount > 300) newCount = 300;

        return newCount;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-viewer-counter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="22"
        viewBox="0 0 29 22"
        fill="none"
      >
        <path
          className="olho"
          d="M25.7203 9.69622C26.3156 10.4749 26.3156 11.5262 25.7203 12.3036C23.8451 14.7516 19.3462 19.7919 14.0936 19.7919C8.84105 19.7919 4.3421 14.7516 2.46691 12.3036C2.17726 11.9308 2.02002 11.4721 2.02002 10.9999C2.02002 10.5278 2.17726 10.0691 2.46691 9.69622C4.3421 7.2483 8.84105 2.20801 14.0936 2.20801C19.3462 2.20801 23.8451 7.2483 25.7203 9.69622Z"
          stroke="#fff"
          strokeWidth="2.15313"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          className="pupila"
          d="M14.0937 14.7679C16.1746 14.7679 17.8616 13.0809 17.8616 10.9999C17.8616 8.91891 16.1746 7.23193 14.0937 7.23193C12.0127 7.23193 10.3257 8.91891 10.3257 10.9999C10.3257 13.0809 12.0127 14.7679 14.0937 14.7679Z"
          stroke="#fff"
          strokeWidth="2.15313"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <div className="usuarios">
        <div>{viewerCount}</div>
      </div>
      <div className="texto">vendo agora</div>
    </div>
  );
}
