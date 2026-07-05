import { Marquee } from "@/components/magicui/marquee";
import { BlurFade } from "@/components/magicui/blur-fade";
import { PulseDot } from "@/components/ui/hud-accents";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Mamadou Diallo",
    role: "Directeur Commercial",
    company: "IMS-Pharma Sénégal",
    quote:
      "Pharveo a transformé notre suivi terrain. On voit en temps réel ce que font nos 137 délégués - sans attendre les consolidations du lundi.",
    initials: "MD",
    color: "from-pharveo-teal to-pharveo-cyan",
  },
  {
    name: "Aïssatou Ba",
    role: "Chef de Zone",
    company: "Sanofi Sénégal",
    quote:
      "L'interface est simple. Mes délégués l'ont adoptée sans formation longue. En deux jours ils étaient autonomes sur le terrain.",
    initials: "AB",
    color: "from-blue-500 to-blue-400",
  },
  {
    name: "Jean-Pierre Kouassi",
    role: "Directeur Informatique",
    company: "Novartis AOF",
    quote:
      "On a réduit le temps de reporting de 3 heures par semaine à 20 minutes. Le temps gagné est massivement réinvesti en visites HCP.",
    initials: "JK",
    color: "from-violet-500 to-violet-400",
  },
  {
    name: "Dr Fatou Ndiaye",
    role: "Directrice Qualité",
    company: "Pharmacie Centrale du Sénégal",
    quote:
      "La conformité ARP est gérée automatiquement. L'audit trail complet nous a sauvés lors de notre dernière inspection de la DPM.",
    initials: "FN",
    color: "from-emerald-500 to-green-400",
  },
  {
    name: "Ibrahim Sawadogo",
    role: "Délégué Médical Senior",
    company: "Burkina Faso",
    quote:
      "Le mode offline est vraiment fonctionnel - pas juste une promesse. Je travaille en zone rurale sans réseau et tout se synchronise au retour.",
    initials: "IS",
    color: "from-amber-500 to-orange-400",
  },
  {
    name: "Adjoua Konan",
    role: "Directrice Générale",
    company: "Pharma CI",
    quote:
      "On pilote nos 8 délégués depuis Abidjan comme si on était sur le terrain avec eux. La visibilité est totale, les décisions sont immédiates.",
    initials: "AK",
    color: "from-rose-500 to-pink-400",
  },
  {
    name: "Thierno Diallo",
    role: "Responsable Stocks",
    company: "Laborex Sénégal",
    quote:
      "L'intégration avec nos données de vente nous a économisé 2 jours de consolidation par mois. Ça s'est fait en une semaine.",
    initials: "TD",
    color: "from-sky-500 to-blue-400",
  },
  {
    name: "Mariam Touré",
    role: "Coordinatrice CRM",
    company: "Ubipharm Group",
    quote:
      "Le support répond en français, comprend nos contraintes locales. Ce n'est pas une hotline en anglais qui lit un script.",
    initials: "MT",
    color: "from-pharveo-cyan to-teal-400",
  },
];

const firstRow = testimonials.slice(0, 4);
const secondRow = testimonials.slice(4);

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  company,
  quote,
  initials,
  color,
}: (typeof testimonials)[0]) {
  return (
    <div
      className={cn(
        "relative w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm",
        "transition-all duration-300 hover:border-pharveo-teal/30 hover:bg-white/[0.07]",
        "hover:shadow-[0_0_50px_-15px_rgba(20,184,184,0.35)]",
      )}
    >
      {/* Liseré supérieur */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* 5 étoiles */}
      <StarRow />

      {/* Quote */}
      <p className="text-sm leading-relaxed text-white/65">{`"${quote}"`}</p>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white",
            color,
          )}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            <PulseDot />
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pharveo-slate to-pharveo-navy py-20 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-pharveo-teal/8 blur-[100px]" />

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-pharveo-slate to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-pharveo-navy to-transparent z-10" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-teal/25 bg-pharveo-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              Ils nous font confiance
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Ce que disent les équipes{" "}
              <span className="text-gradient-pharveo">terrain</span>
            </h2>
            <p className="mt-5 text-pretty text-lg text-white/50">
              Des directeurs commerciaux aux délégués médicaux, Pharveo s'adapte
              à chaque rôle dans votre organisation.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Marquee rows (full-width, outside container) */}
      <div className="relative flex flex-col gap-4">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:45s]">
          {secondRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
