"use client";

import {
  Users,
  Calendar,
  Package,
  TrendingUp,
  Bell,
  Search,
  ChevronUp,
  ChevronDown,
  Wifi,
  WifiOff,
  MapPin,
  Clock,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Visites aujourd'hui", value: "12", target: "/16", up: true },
  { label: "HCP actifs", value: "148", target: "", up: true },
  { label: "Couverture zone", value: "87%", target: "", up: true },
  { label: "Échantillons", value: "34", target: " restants", up: false },
];

const visits = [
  { name: "Dr. Amadou Diallo", type: "Médecin généraliste", time: "08:30", status: "done", product: "Amlor 5mg" },
  { name: "Pharmacie Centrale", type: "Pharmacie", time: "10:15", status: "done", product: "Augmentin" },
  { name: "Dr. Fatou Sow", type: "Cardiologue", time: "12:00", status: "current", product: "Crestor 20mg" },
  { name: "Clinique du Plateau", type: "Hôpital", time: "14:30", status: "pending", product: "Nolvadex" },
  { name: "Dr. Ibrahima Ndiaye", type: "Pédiatre", time: "16:00", status: "pending", product: "Augmentin" },
];

const bars = [65, 82, 71, 90, 78, 95, 88];
const days = ["L", "M", "M", "J", "V", "S", "D"];

const navItems = [
  { icon: Users, label: "HCP", active: false },
  { icon: Calendar, label: "Visites", active: true },
  { icon: Package, label: "Stock", active: false },
  { icon: TrendingUp, label: "KPIs", active: false },
];

export function PharveoMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1f2d] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#0a1a27] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#0E8A8A] to-[#14B8B8]">
            <span className="text-[10px] font-bold text-white">P</span>
          </div>
          <span className="text-xs font-semibold text-white/70">pharveo</span>
          <span className="text-white/20">/</span>
          <span className="text-xs text-white/40">Tournée du jour</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5">
            <Wifi className="h-2.5 w-2.5 text-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-400">Sync</span>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/8">
            <Bell className="h-3 w-3 text-white/50" />
          </div>
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#0E8A8A] to-[#14B8B8]" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="flex w-14 flex-col items-center gap-1 border-r border-white/8 bg-[#091623] py-4">
          {navItems.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={cn(
                "group flex flex-col items-center gap-0.5 rounded-xl px-2 py-2 w-11",
                active
                  ? "bg-[#0E8A8A]/20"
                  : "hover:bg-white/5",
              )}
            >
              <Icon className={cn("h-4 w-4", active ? "text-[#14B8B8]" : "text-white/30")} />
              <span className={cn("text-[8px] font-medium", active ? "text-[#14B8B8]" : "text-white/25")}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden p-4 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-2">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-white/6 bg-white/[0.03] p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium uppercase tracking-wide text-white/35">
                    {k.label}
                  </span>
                  {k.up ? (
                    <ChevronUp className="h-2.5 w-2.5 text-emerald-400" />
                  ) : (
                    <ChevronDown className="h-2.5 w-2.5 text-rose-400" />
                  )}
                </div>
                <div className="mt-1 flex items-baseline gap-0.5">
                  <span className="font-display text-lg font-bold text-white leading-none">
                    {k.value}
                  </span>
                  <span className="text-[9px] text-white/30">{k.target}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart + today */}
          <div className="grid grid-cols-3 gap-3">
            {/* Bar chart */}
            <div className="col-span-2 rounded-xl border border-white/6 bg-white/[0.03] p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-white/60">
                  Visites / semaine
                </span>
                <span className="rounded-full bg-[#0E8A8A]/15 px-2 py-0.5 text-[9px] font-medium text-[#14B8B8]">
                  +12% vs S-1
                </span>
              </div>
              <div className="flex h-16 items-end gap-1.5">
                {bars.map((v, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className={cn(
                        "w-full rounded-t-sm",
                        i === 5
                          ? "bg-gradient-to-t from-[#0E8A8A] to-[#14B8B8]"
                          : "bg-white/20",
                      )}
                      style={{ height: `${Math.round((v / 100) * 44)}px` }}
                    />
                    <span className="text-[7px] text-white/25">{days[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's progress */}
            <div className="rounded-xl border border-white/6 bg-white/[0.03] p-3">
              <span className="text-[10px] font-semibold text-white/60">
                Aujourd'hui
              </span>
              <div className="mt-2 space-y-2">
                <div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-white/40">Progression</span>
                    <span className="text-[#14B8B8]">75%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#0E8A8A] to-[#14B8B8]" />
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2 py-1.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-2.5 w-2.5 text-[#14B8B8]" />
                    <span className="text-[9px] text-white/55">Zone Plateau</span>
                  </div>
                  <span className="text-[9px] font-medium text-white/70">12/16</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visits table */}
          <div className="rounded-xl border border-white/6 bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/6 px-3 py-2">
              <span className="text-[10px] font-semibold text-white/60">
                Tournée du jour
              </span>
              <div className="flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1">
                <Search className="h-2.5 w-2.5 text-white/30" />
                <span className="text-[9px] text-white/25">Chercher…</span>
              </div>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {visits.map((v) => (
                <div
                  key={v.name}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2",
                    v.status === "current" && "bg-[#0E8A8A]/8",
                  )}
                >
                  <div className="flex-shrink-0">
                    {v.status === "done" ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    ) : v.status === "current" ? (
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-[#14B8B8] bg-[#14B8B8]/20" />
                    ) : (
                      <Circle className="h-3.5 w-3.5 text-white/20" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={cn(
                          "text-[10px] font-semibold truncate",
                          v.status === "done"
                            ? "text-white/40 line-through"
                            : v.status === "current"
                            ? "text-white"
                            : "text-white/65",
                        )}
                      >
                        {v.name}
                      </span>
                      {v.status === "current" && (
                        <span className="flex-shrink-0 rounded-full bg-[#0E8A8A]/25 px-1.5 py-0.5 text-[8px] font-semibold text-[#14B8B8]">
                          En cours
                        </span>
                      )}
                    </div>
                    <span className="text-[9px] text-white/25">{v.type}</span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <Clock className="h-2 w-2 text-white/20" />
                      <span className="text-[9px] text-white/30">{v.time}</span>
                    </div>
                    <span className="text-[8px] text-[#14B8B8]/60">{v.product}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Compact variant for feature cards */
export function AnalyticsMockup({ className }: { className?: string }) {
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"];
  const values = [42, 58, 51, 73, 68, 89];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1f2d] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <div className="border-b border-white/8 bg-[#0a1a27] px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-white/60">Analytics terrain</span>
        <span className="rounded-full bg-[#0E8A8A]/15 px-2 py-0.5 text-[10px] font-medium text-[#14B8B8]">
          Temps réel
        </span>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "HCP visités", val: "148", delta: "+14%" },
            { label: "Taux couverture", val: "87%", delta: "+8%" },
            { label: "Visites/délégué", val: "12.4", delta: "+5%" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-white/6 bg-white/[0.03] p-3 text-center">
              <div className="font-display text-xl font-bold text-white">{m.val}</div>
              <div className="text-[9px] text-white/35 mt-0.5">{m.label}</div>
              <div className="mt-1 text-[9px] font-semibold text-emerald-400">{m.delta}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/6 bg-white/[0.03] p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white/55">Visites par mois</span>
          </div>
          <div className="flex h-20 items-end gap-2">
            {values.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={cn(
                    "w-full rounded-t-sm",
                    i === values.length - 1
                      ? "bg-gradient-to-t from-[#0E8A8A] to-[#14B8B8]"
                      : "bg-white/20",
                  )}
                  style={{ height: `${Math.round((v / 100) * 56)}px` }}
                />
                <span className="text-[8px] text-white/25">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OfflineMockup({ className }: { className?: string }) {
  const fields = [
    { label: "HCP visité", value: "Dr. Amadou Diallo", filled: true },
    { label: "Produit présenté", value: "Amlor 5mg - Hypertension", filled: true },
    { label: "Échantillons remis", value: "3 boîtes", filled: true },
    { label: "Prochain RDV", value: "15 juin 2026", filled: true },
    { label: "Note de visite", value: "Patient intéressé par la formulation…", filled: true },
  ];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1f2d] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <div className="border-b border-white/8 bg-[#0a1a27] px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-white/60">Compte-rendu de visite</span>
        <div className="flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2 py-0.5">
          <WifiOff className="h-2.5 w-2.5 text-amber-400" />
          <span className="text-[10px] font-medium text-amber-400">Hors-ligne</span>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        {fields.map((f) => (
          <div key={f.label} className="rounded-lg border border-white/6 bg-white/[0.03] px-3 py-2">
            <div className="text-[9px] font-medium uppercase tracking-wide text-white/30 mb-1">
              {f.label}
            </div>
            <div className="text-[11px] text-white/80">{f.value}</div>
          </div>
        ))}
        <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#0E8A8A] to-[#14B8B8] py-2.5 text-[11px] font-semibold text-white">
          Enregistrer en local
        </button>
        <p className="text-center text-[9px] text-white/30">
          Synchronisation automatique au retour en zone réseau
        </p>
      </div>
    </div>
  );
}
