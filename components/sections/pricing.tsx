"use client";

import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { CornerBrackets, GhostNumber, PulseDot } from "@/components/ui/hud-accents";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Pour démarrer et valider la valeur sur le terrain.",
    highlight: false,
    features: [
      "Jusqu'à 5 délégués médicaux",
      "Modules core (HCP, visites, reporting)",
      "Mode hors-ligne complet",
      "Dashboard de base",
      "Support email (48h)",
      "Onboarding guidé",
    ],
    cta: "Démarrer en Starter",
    href: "/demo",
  },
  {
    name: "Croissance",
    description: "La solution complète pour les équipes terrain actives.",
    highlight: true,
    badge: "Le plus populaire",
    features: [
      "Jusqu'à 20 délégués médicaux",
      "9 modules complets inclus",
      "Connecteurs grossistes (Ubipharm, Laborex…)",
      "WhatsApp Business intégré",
      "Analytics terrain avancés",
      "Support prioritaire (4h)",
      "Onboarding dédié + formation équipe",
      "Conformité ARP incluse",
    ],
    cta: "Démarrer en Croissance",
    href: "/demo",
  },
  {
    name: "Enterprise",
    description: "Pour les réseaux multi-pays et les grandes équipes.",
    highlight: false,
    features: [
      "Délégués illimités",
      "Multi-pays (Sénégal, CI, Mali, Burkina…)",
      "Portail laboratoire partenaire",
      "Hébergement dédié en option",
      "SLA premium (1h) + CSM dédié",
      "Intégrations sur mesure",
      "Formation sur site incluse",
      "Audit de conformité accompagné",
    ],
    cta: "Nous contacter",
    href: "/demo",
  },
];

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-pharveo-slate py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/30 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[900px] rounded-full bg-pharveo-teal/6 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-teal/25 bg-pharveo-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              Tarifs
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Transparent.{" "}
              <span className="text-gradient-pharveo">En francs CFA.</span>
              <br />Sans surprise.
            </h2>
            <p className="mt-5 text-pretty text-lg text-white/50">
              Une licence unique, tous modules inclus. Pas d'add-on caché, pas
              de frais par fonctionnalité.
            </p>
          </div>
        </BlurFade>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <BlurFade key={plan.name} delay={i * 80} inViewMargin="60px">
              <div
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1",
                  plan.highlight
                    ? "border-pharveo-teal/40 bg-gradient-to-br from-pharveo-teal/15 to-pharveo-navy/60 shadow-[0_0_60px_-15px_rgba(14,138,138,0.5)] hover:shadow-[0_0_90px_-20px_rgba(20,184,184,0.5)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_70px_-15px_rgba(20,184,184,0.4)]",
                )}
              >
                {/* Fond : grille technique masquée */}
                <GridPattern
                  width={28}
                  height={28}
                  className="[mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
                />

                {/* Liseré supérieur brillant */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {plan.highlight && (
                  <BorderBeam size={200} duration={8} colorFrom="#0E8A8A" colorTo="#14B8B8" />
                )}

                <CornerBrackets
                  color={plan.highlight ? "border-pharveo-cyan/60" : "border-white/20"}
                />

                {/* Numéro fantôme */}
                <GhostNumber value={`0${i + 1}`} />

                {/* Badge */}
                {plan.badge && (
                  <div className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full border border-pharveo-cyan/30 bg-pharveo-cyan/10 px-3 py-1">
                    <PulseDot />
                    <Zap className="h-3 w-3 text-pharveo-cyan" />
                    <span className="text-xs font-semibold text-pharveo-cyan">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="relative z-10 text-xl font-bold text-white">{plan.name}</h3>
                <p className="relative z-10 mt-1.5 text-sm text-white/50">{plan.description}</p>

                {/* Price */}
                <div className="relative z-10 mt-6">
                  <span className="font-display text-4xl font-bold text-white">
                    Sur devis
                  </span>
                  <p className="mt-1 text-xs text-white/40">
                    Adapté à la taille de votre équipe terrain
                  </p>
                </div>

                {/* CTA */}
                <div className="relative z-10 mt-6">
                  {plan.highlight ? (
                    <Link href={plan.href} className="block">
                      <ShimmerButton className="w-full py-3 text-sm font-semibold">
                        {plan.cta}
                      </ShimmerButton>
                    </Link>
                  ) : (
                    <Link
                      href={plan.href}
                      className="block w-full rounded-xl border border-white/15 bg-white/5 py-3 text-center text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
                    >
                      {plan.cta}
                    </Link>
                  )}
                </div>

                {/* Divider */}
                <div className="relative z-10 my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Features */}
                <ul className="relative z-10 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-pharveo-teal" />
                      <span className="text-white/65">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Footer note */}
        <BlurFade delay={320} inViewMargin="60px">
          <p className="mt-10 text-center text-sm text-white/35">
            <Link href="/demo" className="text-pharveo-cyan hover:underline">
              Contactez-nous
            </Link>{" "}
            pour un devis personnalisé en FCFA ou en USD.
          </p>
        </BlurFade>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
