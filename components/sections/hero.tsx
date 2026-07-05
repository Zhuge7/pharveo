"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Shield, WifiOff, Lock, Clock, MapPin } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { PharveoPhoneMockup } from "@/components/ui/pharveo-phone-mockup";
import { Tilt3D } from "@/components/ui/tilt-3d";
import { cn } from "@/lib/utils";

const rotatingTerms = [
  "l'Afrique de l'Ouest",
  "la visite médicale",
  "la conformité ARP",
  "les équipes terrain",
  "l'hors-ligne complet",
];

const metrics = [
  { value: "4-8 sem.", label: "go live garanti" },
  { value: "100%", label: "hors-ligne" },
  { value: "ARP", label: "conformité Sénégal" },
];

const trustBadges = [
  { Icon: Shield, label: "Conforme ARP Sénégal" },
  { Icon: WifiOff, label: "Offline-first natif" },
  { Icon: Lock, label: "Données chiffrées & exportables" },
  { Icon: Clock, label: "Go live en 4-8 sem." },
];

export function HeroSection() {
  const [termIndex, setTermIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTermIndex((i) => (i + 1) % rotatingTerms.length);
        setVisible(true);
      }, 320);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-pharveo-deep flex items-center">
      {/* Aurora glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 -translate-x-1/2 -top-[6%] h-[700px] w-[1000px] rounded-full bg-pharveo-teal/[0.45] blur-[130px] animate-glow-pulse" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[20%] h-[320px] w-[520px] rounded-full bg-pharveo-cyan/[0.22] blur-[80px] animate-glow-pulse [animation-delay:2s]" />
        <div className="absolute -left-[10%] top-[35%] h-[420px] w-[520px] rounded-full bg-indigo-600/[0.15] blur-[100px]" />
        <div className="absolute right-[5%] top-[10%] h-[550px] w-[550px] rounded-full bg-pharveo-teal/[0.12] blur-[110px] animate-glow-pulse [animation-delay:1s]" />
        <div className="absolute right-[15%] top-[45%] h-[280px] w-[380px] rounded-full bg-pharveo-cyan/[0.08] blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid-hero [mask-image:radial-gradient(ellipse_80%_60%_at_40%_0%,white,transparent)]" />

      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 bg-noise-overlay opacity-[0.03]" />

      {/* Content - split layout */}
      <div className="container relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-20 md:pb-28 md:pt-40">
        <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-16">

          {/* ── Colonne gauche - texte ── */}
          <div className="flex flex-col items-center lg:items-start">


            {/* Headline avec mot rotatif - style Inception */}
            <BlurFade delay={50} inViewMargin="0px">
              <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tighter text-white text-center lg:text-left md:text-[3.25rem] lg:text-[4rem] xl:text-[4.75rem] 2xl:text-[5.5rem]">
                Le CRM{" "}
                <span className="text-gradient-pharveo">pharmaceutique</span>
                <br />
                <span className="text-white/55">bâti pour</span>
                <br />
                <span
                  className={cn(
                    "inline-block transition-all duration-300 ease-out text-gradient-pharveo",
                    visible
                      ? "opacity-100 translate-y-0 blur-none"
                      : "opacity-0 translate-y-3 blur-sm",
                  )}
                >
                  {rotatingTerms[termIndex]}
                </span>
              </h1>
            </BlurFade>

            {/* Sub */}
            <BlurFade delay={100} inViewMargin="0px">
              <p className="mt-6 max-w-md mx-auto lg:mx-0 text-pretty text-base text-white/65 text-center lg:text-left md:text-lg">
                De la visite médicale au reporting laboratoire -
                {" "}<span className="font-medium text-white">sans tableur, sans messagerie, sans agence.</span>
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={150} inViewMargin="0px">
              <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:w-auto lg:justify-start">
                <Link href="/demo" className="w-full sm:w-auto">
                  <ShimmerButton className="w-full sm:w-auto px-8 py-4 text-[15px] font-bold">
                    Demander une démo
                  </ShimmerButton>
                </Link>
                <Link
                  href="/produit"
                  className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.10] hover:text-white"
                >
                  Voir le produit
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </BlurFade>

            {/* Trust badges - élément fort impact (cf. G2 medals d'Inception) */}
            <BlurFade delay={190} inViewMargin="0px">
              <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                {trustBadges.map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/55 backdrop-blur-sm"
                  >
                    <Icon className="h-3 w-3 text-pharveo-cyan shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            </BlurFade>

            {/* Metrics - 3 chiffres clés */}
            <BlurFade delay={230} inViewMargin="0px">
              <div className="mt-8 flex flex-wrap gap-6 border-t border-white/[0.08] pt-7 justify-center lg:justify-start">
                {metrics.map((m) => (
                  <div key={m.label} className="flex flex-col items-center lg:items-start">
                    <span className="font-display text-3xl font-black text-white leading-none tracking-tight">
                      {m.value}
                    </span>
                    <span className="mt-1 text-[11px] font-medium text-white/45 uppercase tracking-[0.07em]">{m.label}</span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* ── Colonne droite - phone mockup ── */}
          <BlurFade delay={120} inViewMargin="0px">
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-32 bg-gradient-to-t from-pharveo-deep to-transparent z-10 lg:hidden" />
              <Tilt3D>
              <div className="relative lg:-rotate-1 lg:translate-y-4 [transform-style:preserve-3d]">
                {/* Container hauteur contrainte sur mobile + scale CSS reliable (zoom ne marche pas sur Safari iOS) */}
                <div className="h-[395px] sm:h-[500px] lg:h-auto overflow-hidden lg:overflow-visible lg:[transform:translateZ(25px)]">
                  <div className="origin-top scale-[0.85] sm:scale-[0.85] lg:scale-100">
                    <PharveoPhoneMockup />
                  </div>
                </div>

                {/* Floating callout labels — desktop only */}
                <BlurFade delay={340} inViewMargin="0px" className="pointer-events-none absolute inset-0 [transform-style:preserve-3d]">
                  {/* Top-left: Tournée optimisée */}
                  <div className="absolute -left-[140px] top-[110px] hidden lg:flex items-center gap-2 rounded-2xl border border-teal-500/25 bg-[#0a1a1a]/90 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-sm [transform:translateZ(60px)]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-500/20">
                      <MapPin className="h-3 w-3 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white leading-none">Tournée optimisée</p>
                      <p className="text-[8px] text-white/40 mt-0.5">par zone géographique</p>
                    </div>
                    {/* connector dot */}
                    <div className="absolute -right-[18px] top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <div className="h-px w-3 bg-teal-500/30" />
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-400/60" />
                    </div>
                  </div>

                  {/* Right: Visite en cours LIVE */}
                  <div className="absolute -right-[148px] top-[260px] hidden lg:flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-[#0a1a12]/90 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-sm [transform:translateZ(80px)]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white leading-none">Visite en cours</p>
                      <p className="text-[8px] text-white/40 mt-0.5">sync temps réel</p>
                    </div>
                    {/* connector */}
                    <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 flex items-center gap-1 flex-row-reverse">
                      <div className="h-px w-3 bg-emerald-500/30" />
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                    </div>
                  </div>

                  {/* Bottom-left: Hors-ligne prêt */}
                  <div className="absolute -left-[132px] bottom-[140px] hidden lg:flex items-center gap-2 rounded-2xl border border-amber-500/25 bg-[#1a1200]/90 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-sm [transform:translateZ(60px)]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/20">
                      <WifiOff className="h-3 w-3 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white leading-none">Offline-first</p>
                      <p className="text-[8px] text-white/40 mt-0.5">AES-256 sur l&apos;appareil</p>
                    </div>
                    {/* connector */}
                    <div className="absolute -right-[18px] top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <div className="h-px w-3 bg-amber-500/30" />
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
                    </div>
                  </div>
                </BlurFade>
              </div>
              </Tilt3D>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
