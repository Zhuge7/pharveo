"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      "--speed": `${Math.random() * 4 + 2}s`,
      "--delay": `${Math.random() * 6}s`,
      top: `${Math.random() * 60}%`,
      left: `${Math.random() * 100}%`,
    } as React.CSSProperties));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "pointer-events-none absolute h-px w-[80px] rotate-[215deg] animate-meteor rounded-full",
            "bg-gradient-to-r from-pharveo-cyan via-pharveo-teal to-transparent",
            "shadow-[0_0_6px_1px_rgba(20,184,184,0.3)]",
            className,
          )}
        />
      ))}
    </>
  );
}
