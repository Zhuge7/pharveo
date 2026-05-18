import {
  Users,
  Calendar,
  FileText,
  MonitorPlay,
  Package,
  Truck,
  BarChart3,
  Receipt,
  MessagesSquare,
} from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const modules = [
  {
    icon: Users,
    name: "HCP Management",
    description:
      "Vue 360° sur chaque médecin, pharmacien et hôpital. Segmentation prescripteurs, réseau d'influence, historique complet des interactions.",
    color: "from-pharveo-teal to-pharveo-cyan",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(14,138,138,0.5)]",
    lineColor: "#0E8A8A",
    stat: null,
  },
  {
    icon: Calendar,
    name: "Planning & Territoires",
    description:
      "Sectorisation par délégué, cycles promotionnels, tournées optimisées, couverture HCP en temps réel. Pilotage depuis le siège.",
    color: "from-blue-500 to-blue-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.4)]",
    lineColor: "#3b82f6",
    stat: { label: "Couverture zone", value: "87%", bar: 87, barColor: "bg-blue-400" },
  },
  {
    icon: FileText,
    name: "Compte-rendu de visite",
    description:
      "Saisie rapide post-visite, questionnaires engagement HCP, signature électronique. 100 % opérationnel sans connexion.",
    color: "from-violet-500 to-violet-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.4)]",
    lineColor: "#8b5cf6",
    stat: { label: "Durée moyenne saisie", value: "90 sec", bar: 60, barColor: "bg-violet-400" },
  },
  {
    icon: MonitorPlay,
    name: "CLM & Détailing digital",
    description:
      "Présentations approuvées sur tablette, slides conformes DPM, capture des réactions HCP. Closed-loop marketing sans agence.",
    color: "from-indigo-500 to-blue-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.4)]",
    lineColor: "#6366f1",
    stat: { label: "Slides validés DPM", value: "24 / 24", bar: 100, barColor: "bg-indigo-400" },
  },
  {
    icon: Package,
    name: "Gestion des échantillons",
    description:
      "Distribution traçable, stock délégué, formulaires de remise, audit trail complet. Conforme ARP Sénégal.",
    color: "from-orange-500 to-amber-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(249,115,22,0.4)]",
    lineColor: "#f97316",
    stat: { label: "Écart stock", value: "0 boîte", bar: 100, barColor: "bg-orange-400" },
  },
  {
    icon: Truck,
    name: "Connecteurs grossistes",
    description:
      "Ubipharm, Laborex, Duopharm, Sodipharm. Stocks disponibles, ventes sellout, alertes ruptures - synchronisés automatiquement.",
    color: "from-pharveo-cyan to-teal-300",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(20,184,184,0.5)]",
    lineColor: "#14B8B8",
    stat: { label: "Grossistes connectés", value: "4 / 4", bar: 100, barColor: "bg-cyan-400" },
  },
  {
    icon: BarChart3,
    name: "Analytics temps réel",
    description:
      "Dashboards équipe, zone et produit. KPIs couverture, performance délégué, tendances mensuelles. Export PDF pour les laboratoires.",
    color: "from-emerald-500 to-green-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.4)]",
    lineColor: "#10b981",
    stat: { label: "Visites vs S-1", value: "+12%", bar: 75, barColor: "bg-emerald-400" },
  },
  {
    icon: Receipt,
    name: "Dépenses terrain",
    description:
      "Notes de frais mobile, catégorisation automatique, workflow de validation. Remboursements accélérés, zéro justificatif papier.",
    color: "from-rose-500 to-pink-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(244,63,94,0.35)]",
    lineColor: "#f43f5e",
    stat: { label: "Délai remboursement", value: "48 h", bar: 90, barColor: "bg-rose-400" },
  },
  {
    icon: MessagesSquare,
    name: "Messagerie intégrée",
    description:
      "Échanges délégués ↔ siège sans quitter Pharveo. Fils de discussion par visite ou HCP, alertes automatiques, notifications push.",
    color: "from-sky-500 to-blue-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(14,165,233,0.4)]",
    lineColor: "#0ea5e9",
    stat: { label: "Fils actifs", value: "3 en cours", bar: 50, barColor: "bg-sky-400" },
  },
];

export function ModulesSection() {
  const [featured, ...rest] = modules;
  const FeaturedIcon = featured.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pharveo-navy via-[#0d2035] to-pharveo-slate py-20 md:py-36">
      {/* Glow - plus prononcé */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-pharveo-teal/[0.18] blur-[90px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-cyan/35 bg-pharveo-cyan/[0.12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              La suite complète
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              9 modules.{" "}
              <span className="text-gradient-pharveo">1 licence.</span>
              <br />0 add-on caché.
            </h2>
            <p className="mt-5 text-pretty text-lg text-white/50">
              Tout ce dont vos équipes ont besoin pour digitaliser la promotion
              pharmaceutique, de la visite au reporting au laboratoire.
            </p>
          </div>
        </BlurFade>

        {/* Bento - module phare full-width en haut, puis grille */}
        <div className="flex flex-col gap-4">

          {/* Carte phare - HCP Management - pleine largeur */}
          <BlurFade delay={0} inViewMargin="60px">
            <div className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.04] p-8 backdrop-blur-sm",
              "transition-all duration-500 hover:border-pharveo-teal/30 hover:bg-white/[0.065]",
              "md:flex md:items-center md:gap-10",
              featured.glow,
            )}>
              {/* Fond teal subtil à gauche */}
              <div className="pointer-events-none absolute left-0 inset-y-0 w-1/2 bg-gradient-to-r from-pharveo-teal/[0.06] to-transparent" />
              {/* Top beam */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/50 to-transparent" />

              {/* Partie gauche - icône + texte */}
              <div className="relative z-10 md:flex-1">
                <div className={cn(
                  "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-105",
                  featured.color,
                )}>
                  <FeaturedIcon className="h-6 w-6" />
                </div>
                <div className="inline-block ml-3 align-middle rounded-full border border-pharveo-teal/30 bg-pharveo-teal/[0.10] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-pharveo-cyan">
                  Module phare
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-white/55">
                  {featured.description}
                </p>
              </div>

              {/* Partie droite - stats visuelles */}
              <div className="relative z-10 mt-6 md:mt-0 md:w-64 shrink-0 grid grid-cols-2 gap-2 md:gap-3">
                {[
                  { val: "148", label: "HCP suivis", color: "text-pharveo-cyan" },
                  { val: "360°", label: "Vue complète", color: "text-blue-400" },
                  { val: "137", label: "Délégués actifs", color: "text-emerald-400" },
                  { val: "100%", label: "Offline ready", color: "text-amber-400" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 text-center md:p-4">
                    <div className={cn("font-display text-lg font-bold md:text-2xl", stat.color)}>{stat.val}</div>
                    <div className="mt-0.5 text-[10px] text-white/40 md:mt-1 md:text-[11px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Grille 2-col puis 3-col pour les 8 modules restants */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((m, i) => {
              const Icon = m.icon;
              return (
                <BlurFade key={m.name} delay={(i + 1) * 30} inViewMargin="60px">
                  <div className={cn(
                    "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm h-full",
                    "transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.06]",
                    m.glow,
                  )}>
                    {/* Top accent line - visible au hover */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: m.lineColor }} />

                    <div className={cn(
                      "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110",
                      m.color,
                    )}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-white mb-2 leading-snug">
                      {m.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/45">
                      {m.description}
                    </p>

                    {/* Mini stat preview - à la Inception per-module screenshot */}
                    {m.stat && (
                      <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] text-white/30 uppercase tracking-wider">{m.stat.label}</span>
                          <span className="text-[11px] font-bold text-white/80">{m.stat.value}</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className={cn("h-full rounded-full transition-all duration-700", m.stat.barColor)}
                            style={{ width: `${m.stat.bar}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
