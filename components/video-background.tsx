"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function VideoBackground() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleCanPlay = () => {
        const playPromise = videoElement.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoVisible(true);
            })
            .catch((error) => {
              console.error("Erro no autoplay do vídeo:", error);
            });
        }
      };

      videoElement.addEventListener("canplay", handleCanPlay);

      videoElement.load();

      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <>
      <Image
        width={1920}
        height={1080}
        priority
        className={`hidden md:flex video-placeholder transition-opacity duration-700 ${
          isVideoVisible ? "opacity-0" : "opacity-100"
        }`}
        src="/bg-overlay-vd.webp"
        alt="Efeito de luz estático"
      />

      <video
        ref={videoRef}
        className="hidden md:flex video-background"
        muted
        loop
        playsInline
        preload="auto"
        style={{ opacity: isVideoVisible ? 1 : 0 }}
      >
        <source src="/bg-overlay.webm" type="video/webm" />
      </video>
    </>
  );
}
