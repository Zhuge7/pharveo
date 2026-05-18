import { Check, X } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const rows = [
  {
    question: "À quelle vitesse j'obtiens de la valeur ?",
    pharveo: "Go live en 4-8 semaines - conformité incluse",
    other: "Des mois, parfois des années avant le premier ROI",
  },
  {
    question: "Qui pilote la solution après le déploiement ?",
    pharveo: "Géré en interne - aucun IT ou consultant externe requis",
    other: "Dépendant des équipes IT et des partenaires intégrateurs",
  },
  {
    question: "Conçu pour l'Afrique de l'Ouest ?",
    pharveo: "Natif - XOF, ARP Sénégal, grossistes locaux, hors-ligne réel",
    other: "Adapté depuis un modèle global, sans connaissance du terrain",
  },
  {
    question: "Les délégués l'adoptent vraiment ?",
    pharveo: "Adoption élevée - mobile-first, interface en français, offline",
    other: "Faible adoption, UX complexe, formations longues nécessaires",
  },
  {
    question: "Les données sont-elles souveraines ?",
    pharveo: "Hébergement en Suisse (UE) - export BI/ERP libre à tout moment",
    other: "Accès restreint à vos propres données, lock-in fournisseur",
  },
  {
    question: "Les coûts sont-ils prévisibles ?",
    pharveo: "Tarification transparente en XOF - tout inclus, 0 add-on caché",
    other: "Coûts croissants avec modules, services et add-ons cachés",
  },
  {
    question: "Peut-on changer si besoin ?",
    pharveo: "Flexibilité totale - aucun lock-in, migration assistée",
    other: "Contrats longs, migration douloureuse, dépendance forte",
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-pharveo-white py-20 md:py-36">
      <div className="container mx-auto max-w-5xl px-6">
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-teal/20 bg-pharveo-teal/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-teal">
              Comparatif
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-pharveo-slate md:text-5xl lg:text-6xl">
              Pharveo vs{" "}
              <span className="text-gradient-pharveo">les alternatives</span>
            </h2>
            <p className="mt-5 text-pretty text-lg text-pharveo-slate/55">
              Chaque solution du marché a ses qualités.
              Aucune n'est pensée pour vos équipes en Afrique de l'Ouest.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={60} inViewMargin="60px">
          {/* Mobile: cartes empilées */}
          <div className="space-y-3 md:hidden">
            {rows.map((row) => (
              <div key={row.question} className="overflow-hidden rounded-2xl border border-pharveo-slate/10 bg-white shadow-sm">
                <div className="border-b border-pharveo-slate/[0.07] bg-pharveo-slate/[0.03] px-4 py-3">
                  <p className="text-sm font-semibold text-pharveo-slate/70">{row.question}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-pharveo-slate/[0.07]">
                  <div className="bg-pharveo-teal/[0.04] p-3.5">
                    <div className="mb-2 flex items-center gap-1.5">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pharveo-teal">
                        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[11px] font-bold text-pharveo-teal">Pharveo</span>
                    </div>
                    <p className="text-xs leading-snug text-pharveo-slate/75">{row.pharveo}</p>
                  </div>
                  <div className="p-3.5">
                    <div className="mb-2 flex items-center gap-1.5">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pharveo-slate/[0.08]">
                        <X className="h-2.5 w-2.5 text-pharveo-slate/30" strokeWidth={3} />
                      </div>
                      <span className="text-[11px] font-semibold text-pharveo-slate/35">Alternatives</span>
                    </div>
                    <p className="text-xs leading-snug text-pharveo-slate/40">{row.other}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: tableau 3 colonnes */}
          <div className="hidden md:block">
            <div className="mb-3 grid grid-cols-[1fr_1fr_1fr] gap-4 px-4 text-center">
              <div />
              <div className="rounded-xl border border-pharveo-teal/20 bg-pharveo-teal/[0.08] px-4 py-3">
                <p className="text-sm font-bold text-pharveo-teal">Pharveo</p>
                <p className="mt-0.5 text-[11px] text-pharveo-teal/60">Pour l'Afrique de l'Ouest</p>
              </div>
              <div className="rounded-xl border border-pharveo-slate/10 bg-pharveo-slate/[0.04] px-4 py-3">
                <p className="text-sm font-semibold text-pharveo-slate/50">CRM Traditionnel</p>
                <p className="mt-0.5 text-[11px] text-pharveo-slate/35">Solutions mondiales</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-pharveo-slate/10 bg-white shadow-[0_4px_40px_rgba(15,32,39,0.05)]">
              {rows.map((row, i) => (
                <div
                  key={row.question}
                  className={cn(
                    "grid grid-cols-[1fr_1fr_1fr] gap-0 transition-colors hover:bg-pharveo-slate/[0.015]",
                    i > 0 && "border-t border-pharveo-slate/[0.07]",
                  )}
                >
                  <div className="flex items-center border-r border-pharveo-slate/[0.07] px-5 py-4">
                    <p className="text-sm font-medium leading-snug text-pharveo-slate/75">{row.question}</p>
                  </div>
                  <div className="relative flex items-start gap-2.5 border-r border-pharveo-slate/[0.07] px-5 py-4">
                    <div className="absolute inset-0 bg-gradient-to-b from-pharveo-teal/[0.04] to-pharveo-teal/[0.02]" />
                    <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pharveo-teal">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="relative text-sm leading-snug text-pharveo-slate/80">{row.pharveo}</p>
                  </div>
                  <div className="flex items-start gap-2.5 px-5 py-4">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pharveo-slate/[0.08]">
                      <X className="h-3 w-3 text-pharveo-slate/30" strokeWidth={3} />
                    </div>
                    <p className="text-sm leading-snug text-pharveo-slate/45">{row.other}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
