import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { PharveoMockup, AnalyticsMockup, OfflineMockup } from "@/components/ui/pharveo-mockup";
import { CornerBrackets, GhostNumber, PulseDot } from "@/components/ui/hud-accents";
import { cn } from "@/lib/utils";

const features = [
  {
    tag: "Planification terrain",
    title: "Votre tournée du jour, organisée en 2 minutes",
    description:
      "Chaque délégué démarre sa journée avec une tournée optimisée : HCP à visiter, produits à présenter, échantillons à distribuer. Tout est là, sans tableur, sans messagerie.",
    bullets: [
      "Sectorisation automatique par zone géographique",
      "Prioritisation HCP selon le potentiel prescripteur",
      "Statut en temps réel pour le responsable commercial",
      "Capture visite en 90 secondes chrono",
    ],
    href: "/produit#visites",
    id: "visites",
    Mockup: PharveoMockup,
    reverse: false,
  },
  {
    tag: "Analytics temps réel",
    title: "La visibilité que vos KAMs n'ont jamais eue",
    description:
      "Fini les consolidations manuelles du lundi. Les données remontent au fil de la journée - couverture HCP, taux de visite, performance par délégué, évolution mensuelle.",
    bullets: [
      "Dashboards par équipe, zone et produit",
      "Alertes automatiques sur les délégués sous-performants",
      "Export PDF pour les revues laboratoires partenaires",
      "Comparaison N vs N-1 sans traitement manuel",
    ],
    href: "/produit#analytics",
    id: "analytics",
    Mockup: AnalyticsMockup,
    reverse: true,
  },
  {
    tag: "Mode hors-ligne complet",
    title: "Le terrain africain n'attend pas le réseau 4G",
    description:
      "Zones rurales, réseau faible, coupure de données - Pharveo fonctionne intégralement offline. Les comptes-rendus sont sauvegardés localement et synchronisés dès le retour en réseau.",
    bullets: [
      "Saisie de visite complète sans connexion",
      "Données chiffrées sur l'appareil (AES-256)",
      "Sync intelligente : seulement le delta, pas tout le dossier",
      "Indicateur de statut visible en permanence",
    ],
    href: "/produit#offline",
    id: "offline",
    Mockup: OfflineMockup,
    reverse: false,
  },
];

export function FeaturesShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-pharveo-slate py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/50 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6 space-y-16 md:space-y-28">
        {features.map((f, i) => (
          <BlurFade key={f.tag} delay={0} inViewMargin="80px">
            <div
              id={f.id}
              className={cn(
                "grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0",
                f.reverse && "lg:[&>*:first-child]:order-2",
              )}
            >
              {/* Text side */}
              <div className="group relative">
                {/* Numéro fantôme */}
                <GhostNumber
                  value={String(i + 1).padStart(2, "0")}
                  className="-top-6 right-0 md:-top-10 md:text-[7rem]"
                />

                <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-pharveo-teal/40 bg-pharveo-teal/[0.12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
                  <PulseDot delay={i * 0.5} />
                  {f.tag}
                </span>
                <h3 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-white/55">
                  {f.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pharveo-teal" />
                      <span className="text-white/60">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={f.href}
                  className="relative z-10 mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-pharveo-cyan transition-all duration-300 hover:gap-3 hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Screen side */}
              <div className={cn(
                "group relative",
                i < 2 ? "flex flex-col" : "flex justify-center",
              )}>
                {i < 2 && (
                  <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-pharveo-teal/[0.12] blur-[60px] transition-opacity duration-500 group-hover:opacity-70" />
                )}
                {i < 2 ? (
                  /* Desktop mockups : scale-down sur mobile pour éviter overflow */
                  <div className="relative overflow-hidden rounded-2xl h-[330px] sm:h-[480px] md:h-[640px] lg:h-auto lg:overflow-visible transition-shadow duration-500 group-hover:shadow-[0_0_70px_-15px_rgba(20,184,184,0.4)]">
                    <div className="origin-top-left scale-[0.46] sm:scale-[0.66] md:scale-[0.88] lg:scale-100 lg:transform-none">
                      <div className="w-[800px] lg:w-full">
                        <f.Mockup className="relative lg:-translate-y-2 lg:translate-x-2" />
                      </div>
                    </div>
                    {/* Liseré supérieur brillant */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <CornerBrackets className="hidden lg:block" />
                  </div>
                ) : (
                  <div className="relative transition-shadow duration-500 group-hover:shadow-[0_0_70px_-15px_rgba(20,184,184,0.4)]">
                    <f.Mockup className="relative" />
                    {/* Liseré supérieur brillant */}
                    <div className="pointer-events-none absolute inset-x-6 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <CornerBrackets className="-inset-3 hidden lg:block" />
                  </div>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
