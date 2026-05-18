import { Shield, Wifi, Coins } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const pillars = [
  {
    Icon: Wifi,
    name: "Conçu pour le terrain africain",
    description:
      "Mode hors-ligne réel (PWA + sync intelligente). Connecteurs Ubipharm, Laborex, Duopharm, Sodipharm. Messagerie équipe intégrée, sans quitter Pharveo.",
    href: "/produit",
    cta: "Voir les modules",
    accent: "from-pharveo-cyan/12 via-pharveo-navy/30 to-pharveo-deep",
    iconBg: "bg-pharveo-cyan/15 border-pharveo-cyan/25 text-pharveo-cyan",
    glowColor: "group-hover:shadow-[0_0_80px_-20px_rgba(20,184,184,0.35)]",
    badge: "Terrain",
  },
  {
    Icon: Shield,
    name: "Souveraineté & conformité locale",
    description:
      "Vos données restent en Europe (Suisse), pas chez des acteurs étrangers. Conformité ARP Sénégal native, audit trail complet.",
    href: "/pourquoi-pharveo#souverainete",
    cta: "En savoir plus",
    accent: "from-pharveo-teal/12 via-pharveo-navy/30 to-pharveo-deep",
    iconBg: "bg-pharveo-teal/20 border-pharveo-teal/30 text-pharveo-teal",
    glowColor: "group-hover:shadow-[0_0_60px_-15px_rgba(14,138,138,0.4)]",
    badge: "Conformité",
  },
  {
    Icon: Coins,
    name: "Accessible aux PME pharma",
    description:
      "Tarification transparente en francs CFA. Une licence unique, tous modules inclus, sans add-on caché. Déploiement en 4 à 8 semaines.",
    href: "/tarifs",
    cta: "Voir les tarifs",
    accent: "from-amber-500/10 via-pharveo-navy/30 to-pharveo-deep",
    iconBg: "bg-amber-500/15 border-amber-500/25 text-amber-400",
    glowColor: "group-hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.3)]",
    badge: "Tarifs",
  },
];

export function PillarsSection() {
  const [main, ...rest] = pillars;
  const MainIcon = main.Icon;

  return (
    <section className="relative overflow-hidden bg-pharveo-slate py-20 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/40 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-teal/25 bg-pharveo-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              Pourquoi Pharveo
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Trois différences qui{" "}
              <span className="text-gradient-pharveo">changent tout</span>
            </h2>
            <p className="mt-5 text-pretty text-lg text-white/50">
              Là où les outils globaux sont inadaptés et où les tableurs ne suffisent plus, Pharveo
              comble le vide avec une approche pensée pour vous.
            </p>
          </div>
        </BlurFade>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr] lg:grid-rows-2">
          {/* Main large card - row-span-2 */}
          <BlurFade delay={0} inViewMargin="60px" className="lg:row-span-2">
            <div
              className={cn(
                "group relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-white/[0.12] p-8 transition-all duration-500 lg:p-10",
                `bg-gradient-to-br ${main.accent}`,
                main.glowColor,
                "hover:border-white/[0.22]",
              )}
            >
              {/* Background radial glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(20,184,184,0.18),transparent_60%)]" />

              {/* Badge */}
              <span className="relative z-10 inline-block rounded-full border border-pharveo-cyan/25 bg-pharveo-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-pharveo-cyan">
                {main.badge}
              </span>

              {/* Icon */}
              <div
                className={cn(
                  "relative z-10 mt-6 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300",
                  main.iconBg,
                  "group-hover:scale-105",
                )}
              >
                <MainIcon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-2xl font-bold text-white leading-snug">
                {main.name}
              </h3>
              <p className="relative z-10 mt-4 text-base leading-relaxed text-white/55">
                {main.description}
              </p>

              {/* CTA - toujours visible */}
              <a
                href={main.href}
                className="relative z-10 mt-8 inline-flex items-center text-sm font-medium text-pharveo-cyan transition-all duration-300 hover:translate-x-1"
              >
                {main.cta} →
              </a>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pharveo-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </BlurFade>

          {/* Two smaller cards stacked */}
          {rest.map((p, i) => {
            const PIcon = p.Icon;
            return (
              <BlurFade key={p.name} delay={(i + 1) * 50} inViewMargin="60px">
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl border border-white/[0.12] p-7 transition-all duration-500",
                    `bg-gradient-to-br ${p.accent}`,
                    p.glowColor,
                    "hover:border-white/[0.22]",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(14,138,138,0.14),transparent_60%)]" />

                  <span className="relative z-10 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/40">
                    {p.badge}
                  </span>

                  <div
                    className={cn(
                      "relative z-10 mt-5 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300",
                      p.iconBg,
                      "group-hover:scale-105",
                    )}
                  >
                    <PIcon className="h-5 w-5" />
                  </div>

                  <h3 className="relative z-10 text-lg font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-white/50">
                    {p.description}
                  </p>

                  <a
                    href={p.href}
                    className="relative z-10 mt-5 inline-flex items-center text-sm font-medium text-pharveo-cyan transition-all duration-300 hover:translate-x-1"
                  >
                    {p.cta} →
                  </a>

                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
