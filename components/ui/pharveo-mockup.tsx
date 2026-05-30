"use client";

import {
  Users,
  Calendar,
  Package,
  TrendingUp,
  Bell,
  Search,
  Wifi,
  WifiOff,
  MapPin,
  Clock,
  CheckCircle2,
  Circle,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  User,
  Hash,
  MessageSquare,
  Shield,
  CloudUpload,
  RefreshCw,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Shared data ──────────────────────────────────────────────────── */

const kpis = [
  { label: "Visites/jour",  value: "12",  target: "/16",      delta: "+8%",  up: true,  accent: "from-teal-500 to-cyan-400"       },
  { label: "HCP actifs",    value: "148", target: "",          delta: "+14%", up: true,  accent: "from-violet-500 to-purple-400"   },
  { label: "Couverture",    value: "87%", target: "",          delta: "+5%",  up: true,  accent: "from-blue-500 to-indigo-400"     },
  { label: "Échantillons",  value: "34",  target: " restants", delta: "-6%",  up: false, accent: "from-orange-500 to-amber-400"    },
];

const visits = [
  { initials: "AD", gradient: "from-violet-500 to-purple-500", name: "Dr. Amadou Diallo",   type: "Généraliste", time: "08:30", status: "done"    as const, product: "Amlor 5mg"   },
  { initials: "PC", gradient: "from-blue-500 to-sky-500",      name: "Pharmacie Centrale",  type: "Pharmacie",  time: "10:15", status: "done"    as const, product: "Augmentin"   },
  { initials: "FS", gradient: "from-teal-400 to-cyan-400",     name: "Dr. Fatou Sow",       type: "Cardiologue",time: "12:00", status: "current" as const, product: "Crestor 20mg"},
  { initials: "CP", gradient: "from-orange-500 to-amber-400",  name: "Clinique du Plateau", type: "Hôpital",    time: "14:30", status: "pending" as const, product: "Nolvadex"    },
  { initials: "IN", gradient: "from-pink-500 to-rose-400",     name: "Dr. Ibrahima Ndiaye", type: "Pédiatre",   time: "16:00", status: "pending" as const, product: "Augmentin"   },
];

const navItems = [
  { icon: Users,      label: "HCP",    active: false },
  { icon: Calendar,   label: "Visites",active: true  },
  { icon: Package,    label: "Stock",  active: false },
  { icon: TrendingUp, label: "KPIs",   active: false },
];

const chartValues = [65, 82, 71, 90, 78, 95, 88];
const days        = ["L", "M", "M", "J", "V", "S", "D"];

/* ─── Weekly area chart ──────────────────────────────────────────── */

function WeeklyChart() {
  const W = 200, H = 54;
  const pts = chartValues.map((v, i) => ({
    x: (i / (chartValues.length - 1)) * W,
    y: H - (v / 100) * (H - 6),
  }));
  const line = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `0,${H} ` + line + ` ${W},${H}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="none">
      <defs>
        <linearGradient id="wAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14B8B8" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#14B8B8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0E8A8A" />
          <stop offset="100%" stopColor="#2DFFD4" />
        </linearGradient>
      </defs>
      {[0.33, 0.66].map((f) => (
        <line key={f} x1="0" y1={H * f} x2={W} y2={H * f} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      <polygon points={area} fill="url(#wAreaGrad)" />
      <polyline points={line} fill="none" stroke="url(#wLineGrad)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      {/* highlight dot on peak (index 5) */}
      <circle cx={pts[5].x} cy={pts[5].y} r="3.5" fill="#2DFFD4" />
      <circle cx={pts[5].x} cy={pts[5].y} r="6"   fill="#2DFFD4" fillOpacity="0.15" />
    </svg>
  );
}

/* ─── Monthly area chart ─────────────────────────────────────────── */

const monthlyValues = [42, 58, 51, 73, 68, 89];
const months        = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"];

function MonthlyChart() {
  const W = 240, H = 68;
  const pts = monthlyValues.map((v, i) => ({
    x: (i / (monthlyValues.length - 1)) * W,
    y: H - (v / 100) * (H - 8),
  }));
  const line = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `0,${H} ` + line + ` ${W},${H}`;
  const last = pts[pts.length - 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="none">
      <defs>
        <linearGradient id="aAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14B8B8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#14B8B8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="aLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0E8A8A" />
          <stop offset="100%" stopColor="#2DFFD4" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" y1={H * f} x2={W} y2={H * f} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      <polygon points={area} fill="url(#aAreaGrad)" />
      <polyline points={line} fill="none" stroke="url(#aLineGrad)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last.x} cy={last.y} r="4"   fill="#2DFFD4" />
      <circle cx={last.x} cy={last.y} r="7.5" fill="#2DFFD4" fillOpacity="0.15" />
    </svg>
  );
}

/* ─── macOS browser chrome ───────────────────────────────────────── */

function AppChrome({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-white/[0.07] bg-[#07101a] px-4 py-3">
      {/* Traffic lights */}
      <div className="flex gap-1.5 shrink-0">
        <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full bg-[#28C840]" />
      </div>
      {/* Nav arrows */}
      <div className="flex items-center gap-0.5 shrink-0">
        <svg className="h-4 w-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <svg className="h-4 w-4 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      {/* URL bar */}
      <div className="mx-1 flex flex-1 min-w-0 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.05] px-3 py-1.5">
        <Lock className="h-2.5 w-2.5 shrink-0 text-emerald-400/60" />
        <span className="text-[10px] text-white/40 truncate">
          app.pharveo.com<span className="text-white/20">/{title.toLowerCase().replace(/\s/g, "-")}</span>
        </span>
      </div>
      <div className="shrink-0 pl-1">{right}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  PharveoMockup - Tournée du jour (desktop)                         */
/* ═══════════════════════════════════════════════════════════════════ */

export function PharveoMockup({ className }: { className?: string }) {
  return (
    <div className={cn(
      "relative w-full overflow-hidden rounded-2xl border border-white/[0.12] bg-[#070e18] shadow-[0_48px_100px_-20px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)]",
      className,
    )}>
      <AppChrome
        title="Tournée du jour"
        right={
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5">
              <Wifi className="h-2 w-2 text-emerald-400" />
              <span className="text-[9px] font-medium text-emerald-400">Sync</span>
            </div>
            <Bell className="h-3 w-3 text-white/25" />
          </div>
        }
      />

      <div className="flex">
        {/* Sidebar */}
        <div className="flex w-12 shrink-0 flex-col items-center gap-1.5 border-r border-white/[0.05] bg-[#050c15] py-4">
          {navItems.map(({ icon: Icon, label, active }) => (
            <div key={label} className={cn("flex flex-col items-center gap-0.5 rounded-xl px-1.5 py-2 w-9", active && "bg-teal-500/15")}>
              <Icon className={cn("h-3.5 w-3.5", active ? "text-teal-400" : "text-white/20")} />
              <span className={cn("text-[7px] font-medium", active ? "text-teal-400" : "text-white/20")}>{label}</span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 min-w-0 p-3 space-y-3">

          {/* Page title */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-white">Tournée du jour</p>
              <p className="text-[9px] text-white/30">Lundi 17 juin · Zone Plateau · Moussa Traoré</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
                <span className="text-[9px] font-medium text-teal-400">En cours</span>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.04] px-2 py-1">
                <Search className="h-2.5 w-2.5 text-white/20" />
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-2">
            {kpis.map((k) => (
              <div key={k.label} className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5">
                <div className={cn("absolute left-0 inset-y-0 w-[3px] rounded-l-xl bg-gradient-to-b", k.accent)} />
                <div className="flex items-start justify-between mb-1">
                  <span className="text-[8px] font-medium text-white/35 leading-tight pr-1">{k.label}</span>
                  <span className={cn("flex items-center gap-0.5 text-[8px] font-semibold shrink-0", k.up ? "text-emerald-400" : "text-rose-400")}>
                    {k.up ? <ArrowUpRight className="h-2 w-2" /> : <ArrowDownRight className="h-2 w-2" />}
                    {k.delta}
                  </span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className={cn("font-display text-[17px] font-black leading-none bg-gradient-to-r bg-clip-text text-transparent", k.accent)}>
                    {k.value}
                  </span>
                  <span className="text-[8px] text-white/25">{k.target}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart + today */}
          <div className="grid grid-cols-3 gap-2">
            {/* Area chart */}
            <div className="col-span-2 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-white/55">Visites / semaine</span>
                <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 text-[8px] font-semibold text-teal-400">
                  +12% vs S-1
                </span>
              </div>
              <WeeklyChart />
              <div className="mt-1 flex justify-between px-0.5">
                {days.map((d, i) => (
                  <span key={i} className={cn("text-[7px]", i === 5 ? "font-bold text-teal-400" : "text-white/20")}>{d}</span>
                ))}
              </div>
            </div>

            {/* Today summary */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 space-y-2.5">
              <span className="text-[10px] font-semibold text-white/55">Aujourd'hui</span>
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-white/30">Progression</span>
                  <span className="font-bold text-teal-400">75%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-white/[0.03] px-2 py-1.5">
                <MapPin className="h-2.5 w-2.5 text-teal-400 shrink-0" />
                <span className="text-[9px] text-white/45 flex-1 truncate">Zone Plateau</span>
                <span className="text-[9px] font-bold text-white/70">12/16</span>
              </div>
              <div className="rounded-lg border border-teal-500/15 bg-teal-500/[0.07] px-2.5 py-2">
                <p className="text-[8px] text-teal-400/60 mb-0.5">Prochaine visite</p>
                <p className="text-[9px] font-semibold text-white/80">Clinique Plateau</p>
                <p className="text-[8px] text-white/30">14:30 · Nolvadex</p>
              </div>
            </div>
          </div>

          {/* Visit list */}
          <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.025]">
            <div className="flex items-center justify-between border-b border-white/[0.05] px-3 py-2">
              <span className="text-[10px] font-semibold text-white/55">Visites du jour</span>
              <span className="text-[9px] text-white/25">5 visites · 2 complétées</span>
            </div>
            <div className="divide-y divide-white/[0.03]">
              {visits.map((v) => (
                <div key={v.name} className={cn("flex items-center gap-2.5 px-3 py-2", v.status === "current" && "bg-teal-500/[0.05]")}>
                  {/* Status */}
                  <div className="shrink-0">
                    {v.status === "done"    ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/70" /> :
                     v.status === "current" ? (
                       <div className="relative h-3.5 w-3.5">
                         <div className="h-3.5 w-3.5 rounded-full border-2 border-teal-400" />
                         <div className="absolute inset-[3px] rounded-full bg-teal-400" />
                       </div>
                     ) : <Circle className="h-3.5 w-3.5 text-white/15" />}
                  </div>
                  {/* Avatar */}
                  <div className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-[8px] font-bold text-white",
                    v.status === "done" ? "from-slate-600 to-slate-700 opacity-35" : v.gradient,
                  )}>
                    {v.initials}
                  </div>
                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className={cn(
                        "truncate text-[10px] font-semibold",
                        v.status === "done"    ? "text-white/30 line-through" :
                        v.status === "current" ? "text-white"                 : "text-white/60",
                      )}>
                        {v.name}
                      </span>
                      {v.status === "current" && (
                        <span className="shrink-0 rounded-full border border-teal-500/30 bg-teal-500/20 px-1.5 py-0.5 text-[7px] font-bold text-teal-400">
                          EN COURS
                        </span>
                      )}
                    </div>
                    <span className="text-[8px] text-white/20">{v.type}</span>
                  </div>
                  {/* Time + product */}
                  <div className="flex shrink-0 flex-col items-end gap-0.5">
                    <div className="flex items-center gap-1">
                      <Clock className="h-2 w-2 text-white/15" />
                      <span className="text-[9px] text-white/25">{v.time}</span>
                    </div>
                    <span className="text-[8px] font-medium text-teal-400/60">{v.product}</span>
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

/* ═══════════════════════════════════════════════════════════════════ */
/*  AnalyticsMockup                                                   */
/* ═══════════════════════════════════════════════════════════════════ */

const topDelegates = [
  { name: "Moussa T.",     visits: 94, pct: 94, rank: 1 },
  { name: "Aïssatou D.",   visits: 87, pct: 87, rank: 2 },
  { name: "Ibrahima N.",   visits: 81, pct: 81, rank: 3 },
];

const analyticsMetrics = [
  { label: "HCP visités",      val: "148",  delta: "+14%", accent: "from-teal-500 to-cyan-400"     },
  { label: "Taux couverture",  val: "87%",  delta: "+8%",  accent: "from-violet-500 to-purple-400" },
  { label: "Visites/délégué",  val: "12.4", delta: "+5%",  accent: "from-blue-500 to-indigo-400"   },
];

export function AnalyticsMockup({ className }: { className?: string }) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#070e18] shadow-[0_48px_100px_-20px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)]",
      className,
    )}>
      <AppChrome
        title="Analytics terrain"
        right={
          <span className="flex items-center gap-1 rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 text-[9px] font-medium text-teal-400">
            <span className="h-1 w-1 rounded-full bg-teal-400 animate-pulse" />
            Temps réel
          </span>
        }
      />

      <div className="p-4 space-y-3">
        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2">
          {analyticsMetrics.map((m) => (
            <div key={m.label} className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
              <div className={cn("absolute left-0 inset-y-0 w-[3px] rounded-l-xl bg-gradient-to-b", m.accent)} />
              <div className={cn("font-display text-[22px] font-black leading-none bg-gradient-to-r bg-clip-text text-transparent", m.accent)}>
                {m.val}
              </div>
              <div className="mt-1 text-[8px] text-white/35 leading-tight">{m.label}</div>
              <div className="mt-1.5 flex items-center gap-0.5">
                <ArrowUpRight className="h-2.5 w-2.5 text-emerald-400" />
                <span className="text-[9px] font-semibold text-emerald-400">{m.delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Area chart */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white/55">Visites par mois</span>
            <div className="flex gap-1.5">
              {["S1","S2","S3","S4"].map((s, i) => (
                <span key={s} className={cn(
                  "rounded-lg px-2 py-0.5 text-[8px] font-medium",
                  i === 3 ? "bg-teal-500/15 text-teal-400" : "text-white/20",
                )}>{s}</span>
              ))}
            </div>
          </div>
          <MonthlyChart />
          <div className="mt-2 flex justify-between">
            {months.map((m, i) => (
              <span key={m} className={cn("text-[8px]", i === months.length - 1 ? "font-bold text-teal-400" : "text-white/20")}>{m}</span>
            ))}
          </div>
        </div>

        {/* Top delegates */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white/55">Top délégués</span>
            <Star className="h-3 w-3 text-amber-400/60" />
          </div>
          <div className="space-y-2">
            {topDelegates.map((d) => (
              <div key={d.name} className="flex items-center gap-2">
                <span className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[7px] font-black",
                  d.rank === 1 ? "bg-amber-400/20 text-amber-400" : "bg-white/[0.06] text-white/30",
                )}>
                  {d.rank}
                </span>
                <span className="w-20 shrink-0 text-[9px] font-medium text-white/60">{d.name}</span>
                <div className="flex-1 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
                <span className="w-6 shrink-0 text-right text-[8px] font-bold text-teal-400">{d.visits}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  OfflineMockup - iPhone frame                                      */
/* ═══════════════════════════════════════════════════════════════════ */

const syncVisits = [
  {
    initials: "FS", gradient: "from-teal-400 to-cyan-500",
    name: "Dr. Fatou Sow", sub: "Crestor 20mg · 2 éch.", time: "14:23",
    status: "done" as const, size: "12 KB",
  },
  {
    initials: "AD", gradient: "from-violet-500 to-purple-500",
    name: "Dr. Amadou Diallo", sub: "Amlor 5mg · Consentement", time: "11:47",
    status: "syncing" as const, size: "18 KB",
  },
  {
    initials: "PC", gradient: "from-blue-500 to-sky-500",
    name: "Pharmacie Centrale", sub: "Augmentin · Note de visite", time: "09:15",
    status: "pending" as const, size: "9 KB",
  },
];

const offlineTabs = [
  { icon: Calendar,   label: "Tournée",  active: false },
  { icon: Users,      label: "HCP",      active: false },
  { icon: CloudUpload,label: "Sync",     active: true  },
  { icon: TrendingUp, label: "Rapports", active: false },
];

export function OfflineMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center py-4", className)}>

      {/* Ambient glow — teal-emerald to signal reconnection */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-teal-500/[0.12] blur-3xl" />
        <div className="absolute h-44 w-44 rounded-full bg-emerald-500/[0.10] blur-2xl -translate-y-6" />
      </div>

      {/* iPhone shell */}
      <div className="relative w-[252px] overflow-hidden rounded-[2.6rem] border border-white/[0.12] bg-[#060c14] shadow-[0_48px_120px_-24px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">

        {/* Dynamic Island */}
        <div className="flex h-10 items-end justify-center bg-[#060c14] pb-1">
          <div className="h-[26px] w-[88px] rounded-full bg-black" />
        </div>

        {/* iOS status bar — WiFi reconnected */}
        <div className="flex items-center justify-between px-6 pb-2 text-[10px] font-semibold text-white/50">
          <span>16:07</span>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect x="0"   y="6" width="2.5" height="4"  rx="0.5" fill="currentColor" opacity="0.5"/>
              <rect x="3.5" y="4" width="2.5" height="6"  rx="0.5" fill="currentColor" opacity="0.7"/>
              <rect x="7"   y="2" width="2.5" height="8"  rx="0.5" fill="currentColor" opacity="0.9"/>
              <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="currentColor"/>
            </svg>
            <Wifi className="h-2.5 w-2.5 text-emerald-400" />
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="currentColor" strokeOpacity="0.5"/>
              <rect x="2" y="2" width="12" height="6" rx="1" fill="currentColor" opacity="0.7"/>
              <path d="M17 3.5v3a1.5 1.5 0 000-3z" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <div>
            <p className="text-[11px] font-bold text-white leading-none">Synchronisation</p>
            <p className="text-[8px] text-white/30 mt-0.5">3 visites · sauvegardées localement</p>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[7.5px] font-bold text-emerald-400">Reconnecté</span>
          </div>
        </div>

        {/* Delta sync hero card */}
        <div className="mx-4 mt-3 mb-2.5 overflow-hidden rounded-2xl border border-teal-500/25 bg-gradient-to-br from-[#07261f] via-[#091e1e] to-[#091828] p-3">
          <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-teal-400/[0.12] blur-2xl" />

          {/* Upload icon + stats */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-500/20">
              <CloudUpload className="h-5 w-5 text-teal-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-white leading-tight">Delta sync en cours</p>
              <p className="text-[8px] text-teal-400/70 mt-0.5">39 KB · seulement les nouvelles données</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3">
            <div className="flex justify-between mb-1">
              <span className="text-[8px] text-white/30">Progression</span>
              <span className="text-[8px] font-bold text-teal-400">67%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
              <div className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" style={{ width: "67%" }} />
            </div>
          </div>

          {/* AES badge */}
          <div className="mt-2.5 flex items-center gap-1.5">
            <Lock className="h-2.5 w-2.5 text-teal-400/60 shrink-0" />
            <span className="text-[7.5px] text-teal-400/50">Données chiffrées AES-256 pendant le stockage local</span>
          </div>
        </div>

        {/* Visit sync list */}
        <div className="mx-4 mb-2.5 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.025]">
          <div className="flex items-center justify-between border-b border-white/[0.05] px-3 py-1.5">
            <span className="text-[8.5px] font-semibold text-white/40">Visites en attente</span>
            <span className="text-[7.5px] text-white/20">2/3 envoyées</span>
          </div>
          <div className="divide-y divide-white/[0.03]">
            {syncVisits.map((v) => (
              <div key={v.name} className="flex items-center gap-2.5 px-3 py-2">
                {/* Avatar */}
                <div className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-[8px] font-black text-white",
                  v.status === "pending" ? "from-slate-600 to-slate-700 opacity-40" : v.gradient,
                )}>
                  {v.initials}
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className={cn(
                    "text-[9.5px] font-semibold leading-tight truncate",
                    v.status === "pending" ? "text-white/30" : "text-white/80",
                  )}>{v.name}</p>
                  <p className="text-[7.5px] text-white/20 truncate">{v.sub}</p>
                </div>
                {/* Status icon */}
                <div className="shrink-0 flex flex-col items-end gap-0.5">
                  {v.status === "done" && (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  )}
                  {v.status === "syncing" && (
                    <RefreshCw className="h-3.5 w-3.5 text-teal-400 animate-spin" />
                  )}
                  {v.status === "pending" && (
                    <Circle className="h-3.5 w-3.5 text-white/15" />
                  )}
                  <span className="text-[6.5px] text-white/20">{v.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security row */}
        <div className="mx-4 mb-3 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2">
          <div className="flex items-center gap-2">
            <Shield className="h-3 w-3 text-teal-400/60 shrink-0" />
            <span className="text-[8px] text-white/35">Stockage local sécurisé</span>
          </div>
          <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 text-[6.5px] font-bold text-teal-400">AES-256</span>
        </div>

        {/* iOS tab bar */}
        <div className="border-t border-white/[0.06] bg-[#060c14] px-2 pt-2 pb-1">
          <div className="flex justify-around">
            {offlineTabs.map(({ icon: Icon, label, active }) => (
              <div key={label} className="flex flex-col items-center gap-0.5 px-2">
                <div className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-lg",
                  active && "bg-teal-500/15",
                )}>
                  <Icon className={cn("h-3.5 w-3.5", active ? "text-teal-400" : "text-white/20")} />
                </div>
                <span className={cn("text-[7px] font-medium", active ? "text-teal-400" : "text-white/20")}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-center pb-1">
            <div className="h-[3px] w-24 rounded-full bg-white/20" />
          </div>
        </div>

      </div>
    </div>
  );
}
