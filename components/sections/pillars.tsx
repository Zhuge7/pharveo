import { Shield, Wifi, Coins } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { CornerBrackets, SheenSweep } from "@/components/ui/hud-accents";
import { cn } from "@/lib/utils";

const pillars = [
  {
    Icon: Wifi,
    number: "01",
    name: "Conçu pour le terrain africain",
    description:
      "Mode hors-ligne réel (PWA + sync intelligente). Connecteurs Ubipharm, Laborex, Duopharm, Sodipharm. Messagerie équipe intégrée, sans quitter Pharveo.",
    href: "/produit",
    cta: "Voir les modules",
    accent: "from-pharveo-cyan/12 via-pharveo-navy/30 to-pharveo-deep",
    iconBg: "bg-pharveo-cyan/15 border-pharveo-cyan/25 text-pharveo-cyan",
    iconGlow: "shadow-[0_0_35px_-8px_rgba(20,184,184,0.6)]",
    glowColor: "hover:shadow-[0_0_90px_-20px_rgba(20,184,184,0.4)]",
    badge: "Terrain",
    bracket: "border-pharveo-cyan/60",
    beamFrom: "#0E8A8A",
    beamTo: "#14B8B8",
    connectors: ["Ubipharm", "Laborex", "Duopharm", "Sodipharm"],
  },
  {
    Icon: Shield,
    number: "02",
    name: "Souveraineté & conformité locale",
    description:
      "Vos données vous appartiennent : chiffrées, exportables à tout moment, jamais partagées avec des tiers. Conformité ARP Sénégal native, audit trail complet.",
    href: "/pourquoi-pharveo#souverainete",
    cta: "En savoir plus",
    accent: "from-pharveo-teal/12 via-pharveo-navy/30 to-pharveo-deep",
    iconBg: "bg-pharveo-teal/20 border-pharveo-teal/30 text-pharveo-teal",
    iconGlow: "shadow-[0_0_35px_-8px_rgba(14,138,138,0.6)]",
    glowColor: "hover:shadow-[0_0_70px_-15px_rgba(14,138,138,0.45)]",
    badge: "Conformité",
    bracket: "border-pharveo-teal/60",
    beamFrom: "#0E8A8A",
    beamTo: "#14B8B8",
    connectors: null,
  },
  {
    Icon: Coins,
    number: "03",
    name: "Accessible aux PME pharma",
    description:
      "Tarification transparente en francs CFA. Une licence unique, tous modules inclus, sans add-on caché. Déploiement en 4 à 8 semaines.",
    href: "/tarifs",
    cta: "Voir les tarifs",
    accent: "from-amber-500/10 via-pharveo-navy/30 to-pharveo-deep",
    iconBg: "bg-amber-500/15 border-amber-500/25 text-amber-400",
    iconGlow: "shadow-[0_0_35px_-8px_rgba(245,158,11,0.5)]",
    glowColor: "hover:shadow-[0_0_70px_-15px_rgba(245,158,11,0.35)]",
    badge: "Tarifs",
    bracket: "border-amber-400/60",
    beamFrom: "#F59E0B",
    beamTo: "#FBBF24",
    connectors: null,
  },
];

export function PillarsSection() {
  const [main, ...rest] = pillars;
  const MainIcon = main.Icon;

  return (
    <section id="souverainete" className="relative scroll-mt-20 overflow-hidden bg-pharveo-slate py-20 md:py-36">
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
                "hover:-translate-y-1 hover:border-white/[0.22]",
              )}
            >
              {/* Fond : grille technique masquée + halo */}
              <GridPattern
                width={28}
                height={28}
                className="[mask-image:radial-gradient(ellipse_70%_60%_at_30%_20%,white,transparent)]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(20,184,184,0.18),transparent_60%)]" />

              {/* Liseré supérieur brillant */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              {/* Faisceau lumineux permanent sur le contour */}
              <BorderBeam size={220} duration={12} colorFrom={main.beamFrom} colorTo={main.beamTo} />

              <CornerBrackets color={main.bracket} />
              <SheenSweep />

              {/* Numéro fantôme */}
              <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[5rem] font-black leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-pharveo-cyan/[0.07] md:-top-6 md:text-[9rem]">
                {main.number}
              </span>

              {/* Radar décoratif en bas à droite */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 hidden h-72 w-72 lg:block">
                <div className="absolute inset-0 rounded-full border border-pharveo-cyan/10" />
                <div className="absolute inset-10 rounded-full border border-pharveo-cyan/15" />
                <div className="absolute inset-20 rounded-full border border-pharveo-cyan/20" />
                <div className="absolute inset-[7.5rem] rounded-full border border-pharveo-cyan/30 bg-pharveo-cyan/10 animate-ping-slow" />
                <div className="absolute inset-[8.25rem] rounded-full bg-pharveo-cyan/50 animate-glow-pulse" />
              </div>

              {/* Badge */}
              <span className="relative z-10 inline-block rounded-full border border-pharveo-cyan/25 bg-pharveo-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-pharveo-cyan">
                {main.badge}
              </span>

              {/* Icône avec anneau pulsant au survol */}
              <div className="relative z-10 mb-6 mt-6 inline-flex">
                <span className="absolute inset-0 rounded-xl border border-pharveo-cyan/40 opacity-0 group-hover:animate-ping-slow group-hover:opacity-100" />
                <div
                  className={cn(
                    "inline-flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-500",
                    main.iconBg,
                    main.iconGlow,
                    "group-hover:rotate-3 group-hover:scale-110",
                  )}
                >
                  <MainIcon className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-2xl font-bold leading-snug text-white">
                {main.name}
              </h3>
              <p className="relative z-10 mt-4 max-w-md text-base leading-relaxed text-white/55">
                {main.description}
              </p>

              {/* Chips connecteurs — statut "en ligne" façon HUD */}
              {main.connectors && (
                <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                  {main.connectors.map((c, i) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-2 rounded-lg border border-pharveo-cyan/20 bg-pharveo-deep/60 px-3 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm transition-colors duration-300 group-hover:border-pharveo-cyan/35 group-hover:text-white/80"
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-pharveo-cyan/60"
                          style={{ animationDelay: `${i * 0.5}s` }}
                        />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pharveo-cyan" />
                      </span>
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <a
                href={main.href}
                className="group/cta relative z-10 mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-pharveo-cyan transition-all duration-300 hover:gap-3 hover:text-white"
              >
                {main.cta}
                <span aria-hidden>→</span>
              </a>

              {/* Bottom glow line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pharveo-cyan/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
                    "hover:-translate-y-1 hover:border-white/[0.22]",
                  )}
                >
                  <GridPattern
                    width={28}
                    height={28}
                    className="[mask-image:radial-gradient(ellipse_80%_70%_at_70%_10%,white,transparent)]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(14,138,138,0.14),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <BorderBeam
                    size={140}
                    duration={12}
                    delay={(i + 1) * 4}
                    colorFrom={p.beamFrom}
                    colorTo={p.beamTo}
                  />

                  <CornerBrackets color={p.bracket} />
                  <SheenSweep />

                  {/* Numéro fantôme */}
                  <span className="pointer-events-none absolute -right-1 -top-3 select-none font-display text-[4rem] font-black leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.07] md:-top-4 md:text-[5.5rem]">
                    {p.number}
                  </span>

                  <span className="relative z-10 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/40">
                    {p.badge}
                  </span>

                  {/* Icône avec anneau pulsant au survol */}
                  <div className="relative z-10 mb-4 mt-5 inline-flex">
                    <span className="absolute inset-0 rounded-xl border border-white/25 opacity-0 group-hover:animate-ping-slow group-hover:opacity-100" />
                    <div
                      className={cn(
                        "inline-flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500",
                        p.iconBg,
                        p.iconGlow,
                        "group-hover:rotate-3 group-hover:scale-110",
                      )}
                    >
                      <PIcon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="relative z-10 text-lg font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-white/50">
                    {p.description}
                  </p>

                  <a
                    href={p.href}
                    className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-pharveo-cyan transition-all duration-300 hover:gap-3 hover:text-white"
                  >
                    {p.cta}
                    <span aria-hidden>→</span>
                  </a>

                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
