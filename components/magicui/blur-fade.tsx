"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  inViewMargin?: string;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 320,
  inViewMargin = "80px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: inViewMargin },
    );
    observer.observe(el);
    setMounted(true);
    return () => observer.disconnect();
  }, [inViewMargin]);

  // SSR / avant hydratation → contenu visible immédiatement, pas d'animation
  if (!mounted) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        filter: visible ? "blur(0px)" : "blur(4px)",
        transition: visible
          ? `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms`
          : "none",
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
