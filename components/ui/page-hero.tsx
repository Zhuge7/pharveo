import type { ReactNode } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  subtitle: string;
}

/** Hero compact pour les pages intérieures — reprend le style visuel du hero d'accueil. */
export function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-pharveo-deep pb-16 pt-36 md:pb-24 md:pt-44">
      {/* Aurora glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-[30%] h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-pharveo-teal/[0.35] blur-[120px] animate-glow-pulse" />
        <div className="absolute -left-[10%] top-[30%] h-[280px] w-[380px] rounded-full bg-indigo-600/[0.12] blur-[100px]" />
        <div className="absolute right-[5%] top-[10%] h-[300px] w-[380px] rounded-full bg-pharveo-cyan/[0.10] blur-[90px]" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid-hero [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,white,transparent)]" />

      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 bg-noise-overlay opacity-[0.03]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
        <BlurFade delay={50} inViewMargin="0px">
          <span className="inline-flex items-center rounded-full border border-pharveo-teal/25 bg-pharveo-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
            {badge}
          </span>
        </BlurFade>

        <BlurFade delay={100} inViewMargin="0px">
          <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
        </BlurFade>

        <BlurFade delay={150} inViewMargin="0px">
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/65 md:text-lg">
            {subtitle}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
