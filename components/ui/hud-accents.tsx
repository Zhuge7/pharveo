import { cn } from "@/lib/utils";

/**
 * Accents visuels "HUD futuriste" partagés entre sections.
 * Convention : à placer dans un parent `group relative overflow-hidden rounded-2xl`.
 */

/** Coins lumineux façon viseur — s'intensifient au survol du parent `group`. */
export function CornerBrackets({
  color = "border-pharveo-cyan/60",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-10 opacity-40 transition-opacity duration-500 group-hover:opacity-100",
        className,
      )}
    >
      <span className={cn("absolute left-3 top-3 h-4 w-4 rounded-tl border-l-2 border-t-2", color)} />
      <span className={cn("absolute right-3 top-3 h-4 w-4 rounded-tr border-r-2 border-t-2", color)} />
      <span className={cn("absolute bottom-3 left-3 h-4 w-4 rounded-bl border-b-2 border-l-2", color)} />
      <span className={cn("absolute bottom-3 right-3 h-4 w-4 rounded-br border-b-2 border-r-2", color)} />
    </div>
  );
}

/** Balayage lumineux diagonal déclenché au survol du parent `group`. */
export function SheenSweep({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden rounded-2xl", className)}>
      <div className="absolute -inset-y-10 -left-2/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[500%]" />
    </div>
  );
}

/** Numéro fantôme en filigrane (01, 02…) — tailles responsive. */
export function GhostNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute -right-1 -top-3 select-none font-display text-[4rem] font-black leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.07] md:-top-4 md:text-[5.5rem]",
        className,
      )}
    >
      {value}
    </span>
  );
}

/** Point de statut pulsant façon "en ligne". */
export function PulseDot({
  color = "bg-pharveo-cyan",
  ringColor = "bg-pharveo-cyan/60",
  delay = 0,
}: {
  color?: string;
  ringColor?: string;
  delay?: number;
}) {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span
        className={cn("absolute inline-flex h-full w-full animate-ping-slow rounded-full", ringColor)}
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      />
      <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", color)} />
    </span>
  );
}
