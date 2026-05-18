import { UserPlus, Tablet, BarChart3 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Importez votre équipe",
    description:
      "Configurez vos délégués, définissez les zones de couverture et importez vos HCP cibles (médecins, pharmaciens, hôpitaux) en quelques heures. Nos équipes vous accompagnent à chaque étape.",
    accent: "from-pharveo-teal/20 to-pharveo-teal/5",
    iconColor: "text-pharveo-teal",
    iconBg: "bg-pharveo-teal/15 border-pharveo-teal/30",
    glow: "hover:shadow-[0_0_50px_-12px_rgba(14,138,138,0.4)]",
  },
  {
    number: "02",
    icon: Tablet,
    title: "Terrain hors-ligne",
    description:
      "Les délégués utilisent Pharveo sur tablette, même sans connexion 3G. Visites, comptes-rendus, échantillons - tout se saisit offline. La synchronisation se déclenche dès le retour en zone réseau.",
    accent: "from-pharveo-cyan/15 to-pharveo-navy/40",
    iconColor: "text-pharveo-cyan",
    iconBg: "bg-pharveo-cyan/15 border-pharveo-cyan/25",
    glow: "hover:shadow-[0_0_50px_-12px_rgba(20,184,184,0.35)]",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Pilotez la performance",
    description:
      "Dashboard en temps réel, KPI par délégué, couverture HCP, ventes grossistes. Partagez des rapports avec vos laboratoires partenaires en un clic. Décidez vite, sans attendre les consolidations manuelles du lundi.",
    accent: "from-amber-500/10 to-pharveo-navy/40",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    glow: "hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)]",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-pharveo-slate py-20 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/30 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-pharveo-navy/60 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-teal/25 bg-pharveo-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              Comment ça marche
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Opérationnel en{" "}
              <span className="text-gradient-pharveo">4 à 8 semaines</span>
            </h2>
            <p className="mt-5 text-pretty text-lg text-white/50">
              Pas de projet IT à 6 mois. Nos équipes déploient, forment et rendent
              votre force de vente autonome en moins de deux mois.
            </p>
          </div>
        </BlurFade>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="pointer-events-none absolute top-[3.5rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] hidden h-px bg-gradient-to-r from-pharveo-teal/30 via-pharveo-cyan/20 to-pharveo-teal/30 lg:block" />

          {steps.map((step, i) => (
            <BlurFade key={step.number} delay={i * 60} inViewMargin="60px">
              <div
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border border-white/10 p-8 transition-all duration-500",
                  `bg-gradient-to-br ${step.accent}`,
                  step.glow,
                  "hover:border-white/20",
                )}
              >
                {/* Step number */}
                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-white/5 select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={cn(
                    "relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110",
                    step.iconBg,
                    step.iconColor,
                  )}
                >
                  <step.icon className="h-6 w-6" />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-3 text-base leading-relaxed text-white/55">
                  {step.description}
                </p>

                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pharveo-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
