"use client";

import {
  Wifi, BatteryFull, Signal, WifiOff,
  ArrowLeft, MoreHorizontal, Clock,
  CheckCircle2, Circle, Camera,
  FileSignature, Package, Presentation,
  Star, ChevronRight, Minus, Plus,
  Users, Calendar, BarChart3, MessagesSquare, Home,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "clm",
    icon: Presentation,
    label: "CLM · e-Détailing",
    sub: "Crestor 20mg · Amlor 5mg",
    status: "done" as const,
    badge: "3 slides",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "samples",
    icon: Package,
    label: "Échantillons",
    sub: "Remise conforme ARP",
    status: "active" as const,
    badge: "En cours",
    badgeColor: "text-teal-300 border-teal-500/30 bg-teal-500/15",
  },
  {
    id: "consent",
    icon: FileSignature,
    label: "Consentement ARP",
    sub: "Signature électronique",
    status: "pending" as const,
    badge: "À faire",
    badgeColor: "text-white/30 border-white/[0.10] bg-white/[0.04]",
  },
];

const samples = [
  { product: "Crestor 20mg", qty: 2, color: "text-teal-400",   bar: "bg-teal-400"   },
  { product: "Amlor 5mg",    qty: 1, color: "text-violet-400", bar: "bg-violet-400" },
];

export function PharveoPhoneMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-[272px] select-none", className)}>
      {/* Ambient glow — desktop uniquement : clippé par l'overflow mobile, il produit un rectangle aux bords durs */}
      <div className="pointer-events-none absolute inset-0 -m-8 hidden rounded-[3rem] bg-teal-500/[0.22] blur-[65px] lg:block" />
      <div className="pointer-events-none absolute -bottom-4 left-1/2 hidden h-32 w-48 -translate-x-1/2 rounded-full bg-cyan-400/[0.12] blur-[50px] lg:block" />

      {/* Physical buttons */}
      <div className="absolute -left-[3px] top-[80px]  h-7  w-[3px] rounded-l-sm bg-white/[0.13]" />
      <div className="absolute -left-[3px] top-[118px] h-10 w-[3px] rounded-l-sm bg-white/[0.13]" />
      <div className="absolute -left-[3px] top-[164px] h-10 w-[3px] rounded-l-sm bg-white/[0.13]" />
      <div className="absolute -right-[3px] top-[108px] h-14 w-[3px] rounded-r-sm bg-white/[0.13]" />

      {/* Phone body */}
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/[0.13] bg-[#060d14] shadow-[0_44px_120px_-18px_rgba(0,0,0,0.90),inset_0_1px_0_rgba(255,255,255,0.08)]">

        {/* Glass sheen */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-[2.4rem]"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 38%, transparent 55%)" }} />

        {/* Dynamic island */}
        <div className="flex items-center justify-center bg-[#060d14] pt-3 pb-1">
          <div className="h-[17px] w-[90px] rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pb-1">
          <span className="text-[10px] font-semibold text-white/70">9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal      className="h-2.5 w-2.5 text-white/60" />
            <Wifi        className="h-2.5 w-2.5 text-white/60" />
            <BatteryFull className="h-2.5 w-2.5 text-white/60" />
          </div>
        </div>

        {/* ── Nav header ── */}
        <div className="flex items-center justify-between px-4 pt-1.5 pb-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/[0.07]">
            <ArrowLeft className="h-3.5 w-3.5 text-white/50" />
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-white leading-none">Visite terrain</p>
            <p className="text-[7.5px] text-white/30 mt-0.5">CRV · Compte-rendu</p>
          </div>
          {/* Timer */}
          <div className="flex items-center gap-1 rounded-full border border-rose-500/25 bg-rose-500/10 px-2 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
            <span className="text-[8px] font-black text-rose-300">08:34</span>
          </div>
        </div>

        {/* ── HCP Card ── */}
        <div className="relative mx-4 mb-3 overflow-hidden rounded-2xl border border-teal-500/25 bg-gradient-to-br from-[#07261f] via-[#091e1e] to-[#091828] p-3">
          {/* glow */}
          <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-teal-400/[0.14] blur-2xl" />
          {/* left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full bg-gradient-to-b from-teal-400 to-cyan-600" />

          <div className="flex items-start gap-2.5 pl-1">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-sky-600 text-[11px] font-black text-white shadow-[0_0_14px_-3px_rgba(14,184,184,0.55)]">
                FS
              </div>
              <span className="absolute -right-0.5 -bottom-0.5 flex h-3 w-3 items-center justify-center rounded-full border border-[#060d14] bg-emerald-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-white leading-tight">Dr. Fatou Sow</p>
              <p className="text-[8px] text-white/40 mt-0.5">Pédiatre · Clinique Pasteur</p>
              {/* Stars */}
              <div className="mt-1 flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={cn("h-2.5 w-2.5", i <= 4 ? "text-amber-400 fill-amber-400" : "text-white/20 fill-transparent")} />
                ))}
                <span className="text-[7px] text-white/30 ml-0.5">Prescripteur clé</span>
              </div>
            </div>

            {/* Visit type badge */}
            <span className="shrink-0 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[7px] font-semibold text-teal-300">
              Prescripteur
            </span>
          </div>

          {/* Product pills */}
          <div className="mt-2 pl-1 flex gap-1.5">
            <span className="rounded-full border border-teal-500/35 bg-teal-500/20 px-2 py-0.5 text-[6.5px] font-semibold text-teal-300">P1 · Crestor 20mg</span>
            <span className="rounded-full border border-blue-500/25 bg-blue-500/15 px-2 py-0.5 text-[6.5px] font-semibold text-blue-300">P2 · Amlor 5mg</span>
          </div>
        </div>

        {/* ── Workflow steps ── */}
        <div className="mx-4 mb-2.5 space-y-1.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isDone   = step.status === "done";
            const isActive = step.status === "active";
            return (
              <div key={step.id} className={cn(
                "relative overflow-hidden rounded-xl border px-3 py-2",
                isDone   ? "border-white/[0.08] bg-white/[0.03]" :
                isActive ? "border-teal-500/30 bg-gradient-to-r from-teal-950/70 to-cyan-950/20" :
                           "border-dashed border-white/[0.10]",
              )}>
                <div className="flex items-center gap-2.5">
                  {/* Step icon / check */}
                  <div className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg",
                    isDone   ? "bg-emerald-500/15" :
                    isActive ? "bg-teal-500/20" :
                               "bg-white/[0.05]",
                  )}>
                    {isDone
                      ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      : <Icon className={cn("h-3.5 w-3.5", isActive ? "text-teal-400" : "text-white/25")} />
                    }
                  </div>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <p className={cn("text-[9.5px] font-semibold leading-tight",
                      isDone ? "text-white/40" : isActive ? "text-white" : "text-white/30"
                    )}>{step.label}</p>
                    <p className={cn("text-[7.5px] leading-tight",
                      isActive ? "text-teal-400/70" : "text-white/20"
                    )}>{step.sub}</p>
                  </div>

                  {/* Badge */}
                  <span className={cn("rounded-full border px-2 py-0.5 text-[6.5px] font-semibold shrink-0", step.badgeColor)}>
                    {step.badge}
                  </span>
                </div>

                {/* Active step expanded — sample counters */}
                {isActive && (
                  <div className="mt-2 space-y-1.5 border-t border-teal-500/15 pt-2">
                    {samples.map((s) => (
                      <div key={s.product} className="flex items-center gap-2">
                        <span className="flex-1 text-[8px] text-white/50 truncate">{s.product}</span>
                        <div className="flex items-center gap-1.5">
                          <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-white/[0.07]">
                            <Minus className="h-2.5 w-2.5 text-white/40" />
                          </div>
                          <span className={cn("text-[11px] font-black w-4 text-center", s.color)}>{s.qty}</span>
                          <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-teal-500/15">
                            <Plus className="h-2.5 w-2.5 text-teal-400" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Note rapide ── */}
        <div className="mx-4 mb-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
          <p className="text-[7.5px] font-semibold uppercase tracking-widest text-white/20 mb-1">Observations</p>
          <p className="text-[8.5px] text-white/30 italic">Intéressée par Crestor cardio post-ménopause…</p>
        </div>

        {/* ── Offline + CTA ── */}
        <div className="mx-4 mb-3">
          <div className="flex items-center gap-1.5 mb-2">
            <WifiOff className="h-3 w-3 text-amber-400/70 shrink-0" />
            <span className="text-[7.5px] text-amber-400/60">Hors-ligne · sync auto à la reconnexion</span>
          </div>
          <div className="flex h-9 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 shadow-[0_4px_16px_-4px_rgba(14,184,184,0.50)]">
            <span className="text-[11px] font-black text-white">Terminer la visite</span>
            <ChevronRight className="h-3.5 w-3.5 text-white/70" />
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-white/[0.05] bg-[#060d14] px-1 py-2">
          {[
            { icon: Home,           label: "Accueil",  active: false },
            { icon: Calendar,       label: "Agenda",   active: false },
            { icon: Users,          label: "HCPs",     active: false },
            { icon: BarChart3,      label: "Mes CRV",  active: true  },
            { icon: MessagesSquare, label: "Objectifs",active: false },
          ].map(({ icon: Icon, label, active }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <div className={cn("flex h-7 w-7 items-center justify-center rounded-xl", active && "bg-teal-500/15")}>
                <Icon className={cn("h-3.5 w-3.5", active ? "text-teal-400" : "text-white/20")} />
              </div>
              <span className={cn("text-[7px]", active ? "font-semibold text-teal-400" : "text-white/20")}>{label}</span>
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center bg-[#060d14] pb-2 pt-1">
          <div className="h-[3px] w-20 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}
