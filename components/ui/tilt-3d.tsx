"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  /** Inclinaison max en degrés */
  maxTilt?: number;
}

/**
 * Effet 3D interactif : la carte s'incline vers le curseur (perspective +
 * rotateX/rotateY). Les enfants avec translateZ ressortent en profondeur.
 * Désactivé sur écrans tactiles et si prefers-reduced-motion.
 */
export function Tilt3D({ children, className, maxTilt = 8 }: Tilt3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!enabled || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({
        rx: -(py - 0.5) * 2 * maxTilt,
        ry: (px - 0.5) * 2 * maxTilt,
      });
    });
  };

  const handlePointerLeave = () => {
    cancelAnimationFrame(rafRef.current);
    setHovering(false);
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={cn("[perspective:1400px]", className)}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={cn(
          "[transform-style:preserve-3d] will-change-transform ease-out",
          hovering
            ? "transition-transform duration-200"
            : "transition-transform duration-700",
        )}
        style={
          enabled
            ? { transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
