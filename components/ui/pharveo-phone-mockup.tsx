"use client";

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
  Wifi,
  BatteryFull,
  Signal,
  Bell,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  { icon: Users,         label: "HCP",         color: "from-teal-500 to-cyan-400",   bg: "bg-teal-500/15"   },
  { icon: Calendar,      label: "Planning",     color: "from-blue-500 to-blue-400",   bg: "bg-blue-500/15"   },
  { icon: FileText,      label: "Visites",      color: "from-violet-500 to-violet-400", bg: "bg-violet-500/15" },
  { icon: MonitorPlay,   label: "CLM",          color: "from-indigo-500 to-blue-400", bg: "bg-indigo-500/15" },
  { icon: Package,       label: "Échantillons", color: "from-orange-500 to-amber-400", bg: "bg-orange-500/15" },
  { icon: Truck,         label: "Grossistes",   color: "from-cyan-500 to-teal-300",   bg: "bg-cyan-500/15"   },
  { icon: BarChart3,     label: "Analytics",    color: "from-emerald-500 to-green-400", bg: "bg-emerald-500/15" },
  { icon: Receipt,       label: "Dépenses",     color: "from-rose-500 to-pink-400",   bg: "bg-rose-500/15"   },
  { icon: MessagesSquare,label: "Messages",     color: "from-sky-500 to-blue-400",    bg: "bg-sky-500/15"    },
];

const quickStats = [
  { value: "87%",  label: "Couverture" },
  { value: "12/16", label: "Visites/j" },
  { value: "137",  label: "Délégués" },
];

export function PharveoPhoneMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-[270px] select-none", className)}>
      {/* Glow derrière le téléphone */}
      <div className="pointer-events-none absolute inset-0 -m-10 rounded-[3rem] bg-teal-500/[0.28] blur-[70px]" />

      {/* Boutons latéraux gauche */}
      <div className="absolute -left-[3px] top-[80px]  h-7  w-[3px] rounded-l-sm bg-white/[0.12]" />
      <div className="absolute -left-[3px] top-[118px] h-10 w-[3px] rounded-l-sm bg-white/[0.12]" />
      <div className="absolute -left-[3px] top-[164px] h-10 w-[3px] rounded-l-sm bg-white/[0.12]" />
      {/* Bouton droite */}
      <div className="absolute -right-[3px] top-[108px] h-14 w-[3px] rounded-r-sm bg-white/[0.12]" />

      {/* Corps du téléphone */}
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/[0.13] bg-[#060d14] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.07)]">

        {/* Dynamic island */}
        <div className="flex items-center justify-center bg-[#060d14] pt-3 pb-1">
          <div className="h-[13px] w-[88px] rounded-full bg-black" />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pb-1">
          <span className="text-[10px] font-semibold text-white/70">9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal className="h-2.5 w-2.5 text-white/60" />
            <Wifi className="h-2.5 w-2.5 text-white/60" />
            <BatteryFull className="h-2.5 w-2.5 text-white/60" />
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-cyan-500 text-[8px] font-black text-white shadow">P</span>
              <span className="text-[11px] font-bold tracking-tight text-white">pharveo</span>
            </div>
            <p className="mt-1 text-[10px] text-white/40">Bonjour, Moussa 👋</p>
          </div>
          <div className="relative">
            <Bell className="h-4 w-4 text-white/40" />
            <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2 items-center justify-center rounded-full bg-teal-400">
              <span className="h-1 w-1 rounded-full bg-white" />
            </span>
          </div>
        </div>

        {/* Quick stats strip */}
        <div className="mx-4 mb-3 flex gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
          {quickStats.map((s, i) => (
            <div key={s.label} className={cn("flex-1 text-center", i < quickStats.length - 1 && "border-r border-white/[0.07]")}>
              <p className="font-display text-[14px] font-bold text-white leading-none">{s.value}</p>
              <p className="mt-0.5 text-[8px] text-white/35">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Modules label */}
        <div className="flex items-center justify-between px-5 mb-2">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/30">Modules</span>
          <ChevronRight className="h-2.5 w-2.5 text-white/20" />
        </div>

        {/* 3×3 modules grid */}
        <div className="mx-4 mb-3 grid grid-cols-3 gap-2">
          {modules.map(({ icon: Icon, label, color, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 px-1 gap-1.5 transition-colors"
            >
              <div className={cn("flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br text-white", color)}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-center text-[8px] font-medium leading-tight text-white/55">{label}</span>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="mx-4 mb-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-widest text-white/30">Activité récente</p>
          <div className="space-y-2">
            {[
              { name: "Dr. Fatou Sow", type: "Visite validée", time: "12:04", dot: "bg-emerald-400" },
              { name: "Pharmacie Centrale", type: "Commande créée", time: "10:32", dot: "bg-blue-400" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", item.dot)} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-medium text-white/70">{item.name}</p>
                  <p className="text-[8px] text-white/30">{item.type}</p>
                </div>
                <span className="shrink-0 text-[8px] text-white/25">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-white/[0.06] bg-[#060d14] px-2 py-2">
          {[
            { icon: Users,     label: "HCP",     active: false },
            { icon: Calendar,  label: "Visites", active: false },
            { icon: BarChart3, label: "KPIs",    active: false },
            { icon: MessagesSquare, label: "Messages", active: false },
          ].map(({ icon: Icon, label, active }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <Icon className={cn("h-4 w-4", active ? "text-teal-400" : "text-white/25")} />
              <span className={cn("text-[8px]", active ? "text-teal-400" : "text-white/25")}>{label}</span>
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center bg-[#060d14] pb-2 pt-1">
          <div className="h-[3px] w-20 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
