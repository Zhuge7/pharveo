import { NumberTicker } from "@/components/magicui/number-ticker";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { CornerBrackets, PulseDot, SheenSweep } from "@/components/ui/hud-accents";

const kpis = [
  { value: 137, suffix: "", label: "délégués actifs", color: "text-pharveo-cyan" },
  { value: 3, suffix: "", label: "équipes pilotées", color: "text-pharveo-cyan" },
  { value: 4, suffix: "", label: "grossistes connectés", color: "text-pharveo-cyan" },
  { value: 9, suffix: "", label: "modules en production", color: "text-pharveo-cyan" },
];

export function CaseStudySection() {
  return (
    <section className="relative overflow-hidden bg-pharveo-slate py-20 md:py-36">
      {/* Grid pattern */}
      <GridPattern className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,white,transparent)] stroke-white/[0.04]" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-pharveo-teal/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-cyan/25 bg-pharveo-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              Cas client
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              IMS-Pharma Sénégal a digitalisé{" "}
              <span className="text-gradient-pharveo">toute sa force de vente</span>
            </h2>
            <p className="mt-5 text-lg text-white/50">
              Déployé en avril 2026. 137 délégués, 3 équipes, 9 modules en production.
            </p>
          </div>
        </BlurFade>

        {/* KPI grid */}
        <BlurFade delay={80} inViewMargin="60px">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {kpis.map((kpi, i) => (
              <div
                key={kpi.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-pharveo-teal/30 hover:bg-pharveo-teal/5 hover:shadow-[0_0_70px_-15px_rgba(20,184,184,0.4)]"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(ellipse_at_center,rgba(14,138,138,0.12),transparent_70%)]" />

                {/* Liseré supérieur brillant */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative z-10 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                  <NumberTicker
                    value={kpi.value}
                    className={kpi.color}
                  />
                  {kpi.suffix}
                </div>
                <div className="relative z-10 mt-2 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-white/40">
                  <PulseDot delay={i * 0.4} />
                  <span>{kpi.label}</span>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Quote */}
        <BlurFade delay={160} inViewMargin="60px">
          <div className="mx-auto mt-20 max-w-3xl">
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.22] hover:shadow-[0_0_70px_-15px_rgba(20,184,184,0.4)]">
              {/* Décor clippé à la carte (le guillemet dépasse, on ne clippe pas la carte elle-même) */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <GridPattern
                  width={28}
                  height={28}
                  className="[mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,white,transparent)]"
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <BorderBeam size={180} duration={12} />
                <SheenSweep />
              </div>

              <CornerBrackets />

              {/* Quote mark */}
              <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-pharveo-teal/30 bg-pharveo-slate text-2xl font-bold text-pharveo-cyan">
                "
              </div>

              <p className="relative z-10 text-balance text-xl font-medium leading-relaxed text-white/85 md:text-2xl">
                Pharveo nous a permis de passer d'outils bricolés à un vrai
                pilotage temps réel. Nos délégués gagnent une heure par jour,
                et la direction a enfin de la visibilité sur le terrain.
              </p>
              <footer className="relative z-10 mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-pharveo-teal/50" />
                <span className="text-sm font-medium text-white/40">
                  Direction Générale, IMS-Pharma Sénégal
                </span>
                <div className="h-px w-8 bg-pharveo-teal/50" />
              </footer>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
