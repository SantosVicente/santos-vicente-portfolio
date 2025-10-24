"use client";

import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { motion } from "motion/react";

interface FuturisticAvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
  size?: number;
}

export function FuturisticAvatar({
  src,
  alt,
  fallback,
  className = "",
  size = 144,
}: FuturisticAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 3 + Math.random() * 2,
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
  }));

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
            opacity: [0.6, 0.2, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #7434eb, #3b82f6, #06b6d4, #7434eb)",
          padding: "4px",
        }}
      >
        <motion.div
          className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
          <Avatar className="w-full h-full">
            <AvatarImage
              src={src}
              alt={alt}
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-2xl">
              {fallback}
            </AvatarFallback>
          </Avatar>

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-full" />

          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(116, 52, 235, 0.3) 0%, transparent 50%)",
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, transparent 60%, rgba(116, 52, 235, 0.1) 70%, transparent 80%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
          style={{
            height: "2px",
            top: "20%",
            animation: "scan 2s linear infinite",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
      `}</style>
    </div>
  );
}
