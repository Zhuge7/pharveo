"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Calendar, Lock, Zap } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Meteors } from "@/components/magicui/meteors";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { CornerBrackets, PulseDot } from "@/components/ui/hud-accents";

const promises = [
  { icon: Calendar, text: "Démo personnalisée 30 min" },
  { icon: Lock, text: "Sans engagement" },
  { icon: Zap, text: "Go-live en 4 à 8 semaines" },
];

export function FinalCtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-pharveo-slate py-20 md:py-36">
      {/* Grid */}
      <GridPattern className="[mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,white,transparent)]" />

      {/* Aurora glow orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pharveo-teal/15 blur-[120px] animate-glow-pulse" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-pharveo-cyan/10 blur-[100px] animate-glow-pulse [animation-delay:1.5s]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <BlurFade delay={0} inViewMargin="60px">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pharveo-navy/80 via-pharveo-slate to-pharveo-navy/60 px-8 py-16 text-center md:px-16 md:py-20 backdrop-blur-sm">
            {/* Grille technique masquée dans la carte */}
            <GridPattern
              width={28}
              height={28}
              className="[mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,white,transparent)]"
            />

            {/* Liseré supérieur brillant */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <BorderBeam size={300} duration={10} colorFrom="#0E8A8A" colorTo="#14B8B8" />
            <Meteors number={10} />

            <CornerBrackets color="border-pharveo-cyan/50" />

            {/* Badge */}
            <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-pharveo-teal/30 bg-pharveo-teal/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pharveo-cyan animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-pharveo-cyan">
                Disponible maintenant
              </span>
            </div>

            <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Prêt à digitaliser votre{" "}
              <span className="text-gradient-pharveo">force de vente</span> ?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-white/55">
              Rejoignez les laboratoires qui pilotent leurs délégués médicaux
              avec Pharveo - la seule solution pensée pour l'Afrique de l'Ouest.
            </p>

            {/* Promise pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {promises.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/65"
                >
                  <Icon className="h-3.5 w-3.5 text-pharveo-cyan" />
                  {text}
                </div>
              ))}
            </div>

            {/* Email capture form */}
            <div className="mt-10">
              {submitted ? (
                <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl border border-pharveo-teal/30 bg-pharveo-teal/10 px-6 py-4">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pharveo-teal text-white text-xs">✓</span>
                  <p className="text-sm font-medium text-pharveo-cyan">
                    Reçu - notre équipe vous contacte sous 24 h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@laboratoire.com"
                    className="flex-1 rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none backdrop-blur-sm transition-all focus:border-pharveo-teal/50 focus:ring-1 focus:ring-pharveo-teal/30"
                  />
                  <ShimmerButton type="submit" className="px-7 py-3.5 text-sm font-semibold whitespace-nowrap">
                    Demander une démo
                  </ShimmerButton>
                </form>
              )}
              <p className="relative z-10 mt-3 flex items-center justify-center gap-2 text-center text-[11px] text-white/30">
                <PulseDot />
                Réponse sous 24 h · Sans engagement · Démo en français
              </p>
            </div>

            {/* Secondary link */}
            <div className="mt-5">
              <Link
                href="/demo"
                className="group/link relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-white/45 transition-colors hover:text-white/70"
              >
                Préférez-vous parler à un humain ?
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
