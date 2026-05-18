"use client";

import { forwardRef, useRef } from "react";
import { Pill, Truck, Package, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-14 items-center justify-center rounded-full border border-white/15 bg-white/8 shadow-[0_0_20px_-8px_rgba(14,138,138,0.4)] backdrop-blur-sm",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-xs font-semibold tracking-wide text-white/40">{label}</span>
      )}
    </div>
  );
});
Circle.displayName = "Circle";

export function ConnectorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pharveoRef = useRef<HTMLDivElement>(null);
  const ubipharmRef = useRef<HTMLDivElement>(null);
  const laborexRef = useRef<HTMLDivElement>(null);
  const duopharmRef = useRef<HTMLDivElement>(null);
  const sodipharmRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-pharveo-navy py-20 md:py-36">
      <GridPattern className="[mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,white,transparent)]" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-pharveo-teal/8 blur-[80px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Copy */}
          <BlurFade delay={0} inViewMargin="60px">
            <div>
              <span className="inline-block rounded-full border border-pharveo-teal/25 bg-pharveo-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
                Connecteurs natifs
              </span>
              <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Les 4 grossistes du Sénégal,{" "}
                <span className="text-gradient-pharveo">déjà connectés</span>
              </h2>
              <p className="mt-5 text-pretty text-lg text-white/55">
                Stock disponible, commandes, ruptures, ventes : Pharveo synchronise
                automatiquement avec Ubipharm, Laborex, Duopharm et Sodipharm.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Synchronisation stock toutes les heures",
                  "Alertes ruptures automatiques",
                  "Reporting ventes consolidé multi-grossistes",
                  "Roadmap : Côte d'Ivoire, Mali, Burkina",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pharveo-teal/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-pharveo-cyan" />
                    </span>
                    <span className="text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>

          {/* Right: Animated Beam */}
          <BlurFade delay={120} inViewMargin="60px">
            <div
              ref={containerRef}
              className="relative flex h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="flex size-full max-w-sm flex-col items-stretch justify-between gap-8 p-8">
                <div className="flex flex-row items-center justify-around">
                  <Circle ref={ubipharmRef} label="Ubipharm">
                    <span className="text-xs font-bold text-white/70">UBI</span>
                  </Circle>
                  <Circle ref={laborexRef} label="Laborex">
                    <Activity className="h-5 w-5 text-white/60" />
                  </Circle>
                </div>

                <div className="flex flex-row justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      ref={pharveoRef}
                      className="z-10 flex size-20 items-center justify-center rounded-full border-2 border-pharveo-teal/50 bg-gradient-to-br from-pharveo-teal to-pharveo-cyan shadow-[0_0_40px_-8px_rgba(20,184,184,0.6)]"
                    >
                      <Pill className="size-8 text-white" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-pharveo-cyan">PHARVEO</span>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-around">
                  <Circle ref={duopharmRef} label="Duopharm">
                    <Package className="h-5 w-5 text-white/60" />
                  </Circle>
                  <Circle ref={sodipharmRef} label="Sodipharm">
                    <Truck className="h-5 w-5 text-white/60" />
                  </Circle>
                </div>
              </div>

              <AnimatedBeam containerRef={containerRef} fromRef={pharveoRef} toRef={ubipharmRef} curvature={-50} duration={4} gradientStartColor="#0E8A8A" gradientStopColor="#14B8B8" />
              <AnimatedBeam containerRef={containerRef} fromRef={pharveoRef} toRef={laborexRef} curvature={50} duration={4} delay={0.5} gradientStartColor="#0E8A8A" gradientStopColor="#14B8B8" />
              <AnimatedBeam containerRef={containerRef} fromRef={pharveoRef} toRef={duopharmRef} curvature={50} duration={4} delay={1} reverse gradientStartColor="#14B8B8" gradientStopColor="#0E8A8A" />
              <AnimatedBeam containerRef={containerRef} fromRef={pharveoRef} toRef={sodipharmRef} curvature={-50} duration={4} delay={1.5} reverse gradientStartColor="#14B8B8" gradientStopColor="#0E8A8A" />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
