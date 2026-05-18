import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { PharveoMockup, AnalyticsMockup, OfflineMockup } from "@/components/ui/pharveo-mockup";
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
              className={cn(
                "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
                f.reverse && "lg:[&>*:first-child]:order-2",
              )}
            >
              {/* Text side */}
              <div>
                <span className="inline-block rounded-full border border-pharveo-teal/40 bg-pharveo-teal/[0.12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
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
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pharveo-cyan transition-all hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Screen side */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-pharveo-teal/[0.18] blur-[50px]" />
                <f.Mockup className="relative" />
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
