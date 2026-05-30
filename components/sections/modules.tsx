"use client";

import { useState } from "react";
import {
  Smartphone, Users, Target, Microscope,
  CheckCircle2, ArrowRight, ArrowUpRight,
  MapPin, TrendingUp, TrendingDown, BarChart3,
  WifiOff, ChevronRight, MoreHorizontal, Plus,
  Home, FileText, User, Bell, Settings,
  Activity, Shield, Package, Calendar,
} from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ════════════════════════════════════════════════════
   RÔLE 1 — VM DÉLÉGUÉ : app planning journalier
════════════════════════════════════════════════════ */
function VmVisual() {
  const visits = [
    { time:"09:00", hcp:"Dr. Amadou Diallo",  spec:"Cardiologue",   product:"Crestor 20mg", status:"done",    init:"AD", grad:"from-violet-500 to-purple-600" },
    { time:"11:00", hcp:"Pharmacie Centrale",  spec:"Officine",      product:"Augmentin",    status:"done",    init:"PC", grad:"from-teal-400 to-cyan-400"     },
    { time:"14:00", hcp:"Dr. Fatou Sow",       spec:"Pédiatre",      product:"Amlor 5mg",    status:"current", init:"FS", grad:"from-blue-500 to-sky-500"      },
    { time:"16:00", hcp:"Clinique Plateau",    spec:"Établissement", product:"Nolvadex",     status:"pending", init:"CP", grad:"from-orange-500 to-amber-400"  },
  ];
  const done = visits.filter(v => v.status === "done").length;
  const r = 17;
  const circ = 2 * Math.PI * r;
  const dash = (done / visits.length) * circ;

  return (
    <div className="flex flex-col gap-2 h-full">

      {/* ── Header greeting ── */}
      <div className="flex items-center justify-between px-0.5">
        <div>
          <p className="text-[11px] font-bold text-white leading-none">Bonjour, Moussa</p>
          <p className="text-[8px] text-white/35 mt-0.5">Lun 21 Mai · Zone Plateau</p>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-teal-500/30 bg-teal-500/[0.10] px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse shrink-0"/>
          <span className="text-[7px] font-semibold text-teal-300">Sync OK</span>
        </div>
      </div>

      {/* ── MCCP hero card ── */}
      <div className="relative overflow-hidden rounded-2xl border border-teal-500/25 bg-gradient-to-br from-[#07271f] via-[#091e1e] to-[#091828] px-3 py-2.5">
        {/* ambient glow top-right */}
        <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-teal-400/[0.18] blur-2xl"/>
        <div className="pointer-events-none absolute -right-8 top-8 h-16 w-16 rounded-full bg-cyan-400/[0.10] blur-xl"/>

        <div className="flex items-start gap-3">
          {/* Progress ring */}
          <div className="relative shrink-0">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5"/>
              <circle cx="24" cy="24" r={r} fill="none" stroke="url(#vmR)" strokeWidth="3.5"
                strokeLinecap="round" strokeDasharray={`${dash} ${circ - dash}`} transform="rotate(-90 24 24)"/>
              <defs>
                <linearGradient id="vmR" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2DFFD4"/>
                  <stop offset="100%" stopColor="#0E8A8A"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[12px] font-black text-white leading-none">{done}/{visits.length}</span>
              <span className="text-[6px] text-white/30 mt-0.5 leading-none">vis.</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-baseline justify-between mb-2">
              <p className="text-[10px] font-bold text-white leading-none">MCCP · Cycle Mai</p>
              <span className="text-[14px] font-black text-teal-400 leading-none">87%</span>
            </div>
            {/* Channel attainment bars */}
            <div className="space-y-1.5">
              {[
                {label:"Face-to-Face", pct:87, bar:"bg-teal-400",   txt:"text-teal-400"},
                {label:"Engage",       pct:45, bar:"bg-blue-400",   txt:"text-blue-400"},
                {label:"Email approuvé",pct:62,bar:"bg-violet-400", txt:"text-violet-400"},
              ].map(c=>(
                <div key={c.label} className="flex items-center gap-2">
                  <span className="w-[58px] shrink-0 text-[7px] text-white/30 truncate leading-none">{c.label}</span>
                  <div className="flex-1 h-[3px] overflow-hidden rounded-full bg-white/[0.09]">
                    <div className={cn("h-full rounded-full", c.bar)} style={{width:`${c.pct}%`}}/>
                  </div>
                  <span className={cn("w-6 text-right text-[7.5px] font-black shrink-0 leading-none", c.txt)}>{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* P-priority pills */}
        <div className="mt-2.5 flex gap-1.5">
          {[
            {label:"P1 Crestor",    color:"border-teal-500/40 bg-teal-500/20 text-teal-300"},
            {label:"P2 Augmentin",  color:"border-blue-500/30 bg-blue-500/15 text-blue-300"},
            {label:"P3 Amlor",      color:"border-white/[0.10] bg-white/[0.05] text-white/35"},
          ].map(p=>(
            <span key={p.label} className={cn("rounded-full border px-2 py-0.5 text-[6.5px] font-semibold", p.color)}>{p.label}</span>
          ))}
        </div>
      </div>

      {/* ── Section label ── */}
      <div className="flex items-center justify-between px-0.5">
        <span className="text-[8px] font-semibold uppercase tracking-widest text-white/20">Tournée du jour</span>
        <div className="flex items-center gap-1">
          <MapPin className="h-2.5 w-2.5 text-teal-400/50"/>
          <span className="text-[7.5px] text-white/25">Zone Plateau</span>
        </div>
      </div>

      {/* ── Visit cards ── */}
      <div className="space-y-1.5 flex-1">
        {visits.map(v => {
          const isCurrent = v.status === "current";
          const isDone    = v.status === "done";
          return (
            <div key={v.hcp} className={cn(
              "relative flex items-center gap-2.5 rounded-xl border px-3 transition-all",
              isCurrent
                ? "py-2.5 border-teal-500/35 bg-gradient-to-r from-teal-950/80 via-[#07201e] to-cyan-950/30 shadow-[0_0_24px_-8px_rgba(14,138,138,0.55)]"
                : isDone
                ? "py-2 border-white/[0.07] bg-white/[0.03]"
                : "py-2 border-dashed border-white/[0.13]"
            )}>
              {/* Left accent line for current */}
              {isCurrent && (
                <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-gradient-to-b from-teal-400 to-cyan-500"/>
              )}

              <span className={cn("w-8 shrink-0 font-mono text-[8.5px] font-bold",
                isCurrent ? "text-teal-400/60" : "text-white/20"
              )}>{v.time}</span>

              {/* Avatar */}
              <div className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-[8px] font-black text-white",
                isDone ? "from-slate-600 to-slate-700 opacity-25" : v.grad,
                isCurrent && "shadow-[0_0_12px_-3px_rgba(14,138,138,0.6)]",
              )}>{v.init}</div>

              {/* Name + product */}
              <div className="min-w-0 flex-1">
                <p className={cn("truncate text-[9.5px] font-semibold leading-tight",
                  isDone ? "text-white/25 line-through" : isCurrent ? "text-white" : "text-white/60"
                )}>{v.hcp}</p>
                <p className={cn("text-[7.5px] leading-tight mt-0.5",
                  isCurrent ? "text-teal-400/80" : "text-white/20"
                )}>{v.spec} · {v.product}</p>
              </div>

              {/* Right status */}
              {isDone && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400/60"/>}
              {isCurrent && (
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <div className="flex items-center gap-1 rounded-full border border-teal-400/35 bg-teal-500/20 px-2 py-0.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400"/>
                    <span className="text-[6.5px] font-black text-teal-200">LIVE</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5">
                    <span className="text-[6px] font-semibold text-emerald-400/90">CLM ✓</span>
                    <span className="text-[6px] text-white/25">Consent. ○</span>
                    <span className="text-[6px] text-white/25">Échant. ○</span>
                  </div>
                </div>
              )}
              {v.status === "pending" && (
                <span className="text-[7.5px] text-white/15 shrink-0">À venir</span>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Bottom nav ── */}
      <div className="flex items-center justify-around rounded-xl border border-white/[0.09] bg-[#091a2c] py-2">
        {[
          {icon:Calendar, label:"Visites", active:true },
          {icon:Users,    label:"HCPs",    active:false},
          {icon:Target,   label:"Cycle",   active:false},
          {icon:Package,  label:"Échant.", active:false},
          {icon:Activity, label:"CLM",     active:false},
        ].map(({icon:Icon,label,active})=>(
          <div key={label} className="flex flex-col items-center gap-0.5">
            <div className={cn("flex h-6 w-6 items-center justify-center rounded-lg", active && "bg-teal-500/15")}>
              <Icon className={cn("h-3.5 w-3.5", active ? "text-teal-400" : "text-white/20")}/>
            </div>
            <span className={cn("text-[7px]", active ? "font-bold text-teal-400" : "text-white/20")}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   RÔLE 2 — SUPERVISEUR KAM : dashboard territoire
════════════════════════════════════════════════════ */
function SuperviseurVisual() {
  const reps = [
    { name:"Moussa Traoré",    zone:"Plateau",    reach:84, freq:4.6, att:92, color:"text-emerald-400", dot:"bg-emerald-400" },
    { name:"Aïssatou Diallo",  zone:"Médina",     reach:71, freq:3.8, att:76, color:"text-amber-400",   dot:"bg-amber-400"   },
    { name:"Ibrahima Ndiaye",  zone:"Parcelles",  reach:62, freq:3.2, att:68, color:"text-rose-400",    dot:"bg-rose-400"    },
    { name:"Mariama Sow",      zone:"Dakar Nord", reach:78, freq:4.1, att:84, color:"text-amber-400",   dot:"bg-amber-400"   },
  ];
  const bars = [8, 12, 9, 15, 11, 18, 14];
  const days = ["L","M","M","J","V","S","D"];
  const maxB = Math.max(...bars);

  return (
    <div className="space-y-2">
      {/* KPI row — métriques Veeva */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          {val:"78%",  label:"Account Reach",  color:"text-teal-400",    glow:"shadow-[0_0_14px_-5px_rgba(14,138,138,0.4)]", bg:"border-teal-500/20 bg-teal-500/[0.11]"},
          {val:"4.3",  label:"Fréquence HCP",  color:"text-blue-400",    glow:"",bg:"border-white/[0.13] bg-white/[0.07]"},
          {val:"89%",  label:"Cycle Plan att.", color:"text-emerald-400", glow:"",bg:"border-white/[0.13] bg-white/[0.07]"},
          {val:"2",    label:"Coaching / att.", color:"text-amber-400",   glow:"",bg:"border-amber-500/20 bg-amber-500/[0.07]"},
        ].map(s=>(
          <div key={s.label} className={cn("rounded-xl border p-2 text-center", s.bg, s.glow)}>
            <p className={cn("text-[15px] font-black leading-none", s.color)}>{s.val}</p>
            <p className="mt-0.5 text-[7px] leading-tight text-white/30">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Rep table — Reach & Frequency (rapport Veeva signature) */}
      <div className="overflow-hidden rounded-xl border border-white/[0.13] bg-white/[0.06]">
        <div className="grid grid-cols-[1fr_32px_32px_44px] gap-1 border-b border-white/[0.11] bg-white/[0.06] px-3 py-1.5">
          {["DÉLÉGUÉ","Reach","Fréq.","ATT%"].map(h=>(
            <span key={h} className="text-[7px] uppercase tracking-widest text-white/20 text-right first:text-left">{h}</span>
          ))}
        </div>
        {reps.map((r,i)=>(
          <div key={r.name} className={cn(
            "grid grid-cols-[1fr_32px_32px_44px] items-center gap-1 px-3 py-2",
            i < reps.length-1 && "border-b border-white/[0.09]"
          )}>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-white">{r.name}</p>
              <p className="text-[8px] text-white/30">{r.zone}</p>
            </div>
            <span className="text-right text-[9px] font-bold text-teal-400">{r.reach}%</span>
            <span className="text-right text-[9px] font-bold text-blue-400">{r.freq}</span>
            <div className="flex flex-col gap-0.5">
              <div className="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                <div className={cn("h-full rounded-full", r.att>=90?"bg-emerald-400":r.att>=70?"bg-amber-400":"bg-rose-400")} style={{width:`${r.att}%`}}/>
              </div>
              <span className={cn("text-right text-[9px] font-black", r.color)}>{r.att}%</span>
            </div>
          </div>
        ))}
        {/* Alerte comptes sous-atteints */}
        <div className="flex items-center gap-2 border-t border-white/[0.09] bg-rose-500/[0.06] px-3 py-1.5">
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400 animate-pulse"/>
          <span className="text-[8px] text-rose-300">3 comptes sous-atteints · Médina · Parcelles</span>
        </div>
      </div>

      {/* frequency bar chart */}
      <div className="rounded-xl border border-white/[0.13] bg-white/[0.07] p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] text-white/35">Avg Calls Per Day · 7 jours</span>
          <span className="text-[9px] font-black text-blue-400">Moy. 11.4/j</span>
        </div>
        <div className="flex items-end gap-1" style={{height:36}}>
          {bars.map((b,i)=>(
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className={cn("w-full rounded-sm", i===5?"bg-blue-400":"bg-white/[0.12]")}
                style={{height:`${(b/maxB)*36}px`}}/>
              <span className={cn("text-[7px]", i===5?"font-bold text-blue-400":"text-white/20")}>{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   RÔLE 3 — DIRECTION : dashboard national
════════════════════════════════════════════════════ */
function DirectionVisual() {
  const raw = [520, 614, 578, 702, 689, 831, 847];
  const months = ["Nov","Déc","Jan","Fév","Mar","Avr","Mai"];
  const H = 44;
  const maxV = 900;
  const pts = raw.map((v,i)=>`${(i/(raw.length-1))*100},${H-(v/maxV)*H}`);
  const area = `M ${pts[0]} L ${pts.slice(1).join(" L ")} L 100,${H} L 0,${H} Z`;
  const line = `M ${pts[0]} L ${pts.slice(1).join(" L ")}`;

  const regions = [
    { name:"Dakar",       del:8,  vis:324, cov:"78%", att:"+4%",  attColor:"text-emerald-400", bar:"bg-emerald-400" },
    { name:"Thiès",       del:3,  vis:187, cov:"65%", att:" 0%",  attColor:"text-amber-400",   bar:"bg-amber-400"   },
    { name:"Saint-Louis", del:2,  vis:98,  cov:"54%", att:"-8%",  attColor:"text-rose-400",    bar:"bg-rose-400"    },
    { name:"Ziguinchor",  del:1,  vis:45,  cov:"61%", att:"-3%",  attColor:"text-amber-400",   bar:"bg-amber-400"   },
  ];

  return (
    <div className="space-y-2">
      {/* national KPIs — Veeva Analytics */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          {val:"17.4", label:"Avg Calls/Jour",  color:"text-white/80",    bg:"border-white/[0.13] bg-white/[0.07]"},
          {val:"67%",  label:"Account Reach",  color:"text-teal-400",    bg:"border-teal-500/20 bg-teal-500/[0.11]", glow:"shadow-[0_0_14px_-5px_rgba(14,138,138,0.4)]"},
          {val:"89%",  label:"Cycle Plan nat.",color:"text-emerald-400", bg:"border-white/[0.13] bg-white/[0.07]"},
          {val:"0.82", label:"Effort vs Résult",color:"text-blue-400",   bg:"border-white/[0.13] bg-white/[0.07]"},
        ].map(s=>(
          <div key={s.label} className={cn("rounded-xl border p-2 text-center", s.bg, (s as any).glow)}>
            <p className={cn("text-[15px] font-black leading-none", s.color)}>{s.val}</p>
            <p className="mt-0.5 text-[7px] leading-tight text-white/30">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Canal mix — F2F / Engage / Approved Email */}
      <div className="rounded-xl border border-white/[0.13] bg-white/[0.06] px-3 py-2">
        <p className="mb-1.5 text-[8px] uppercase tracking-widest text-white/25">Mix canal · attainment</p>
        <div className="flex gap-1.5">
          {[
            {label:"Face-to-Face", pct:68, color:"bg-teal-400",   text:"text-teal-400"},
            {label:"Engage",       pct:17, color:"bg-blue-400",   text:"text-blue-400"},
            {label:"Email",        pct:15, color:"bg-violet-400", text:"text-violet-400"},
          ].map(c=>(
            <div key={c.label} className="flex-1 text-center">
              <div className="h-1 overflow-hidden rounded-full bg-white/[0.10] mb-0.5">
                <div className={cn("h-full rounded-full", c.color)} style={{width:`${c.pct*1.47}%`}}/>
              </div>
              <p className={cn("text-[9px] font-black", c.text)}>{c.pct}%</p>
              <p className="text-[7px] text-white/25 truncate">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* national trend chart */}
      <div className="rounded-xl border border-white/[0.13] bg-white/[0.07] p-3">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[9px] text-white/35">Visites terrain · 7 derniers mois</span>
          <span className="text-[9px] font-black text-teal-400">↑ +63% vs Nov</span>
        </div>
        <svg viewBox={`0 0 100 ${H}`} className="w-full" style={{height:H}} preserveAspectRatio="none">
          <defs>
            <linearGradient id="dirG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14B8B8" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#14B8B8" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={area} fill="url(#dirG)"/>
          <path d={line} fill="none" stroke="#14B8B8" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
          {raw.map((v,i)=>(
            <circle key={i} cx={(i/(raw.length-1))*100} cy={H-(v/maxV)*H}
              r={i===raw.length-1?"3.5":"2"} fill={i===raw.length-1?"#14B8B8":"rgba(20,184,184,0.6)"}/>
          ))}
        </svg>
        <div className="mt-1.5 flex items-center justify-between px-0.5">
          {months.map((m,i)=>(
            <span key={i} className={cn("text-[7.5px]",i===months.length-1?"font-bold text-teal-400":"text-white/20")}>{m}</span>
          ))}
        </div>
      </div>

      {/* regional table */}
      <div className="overflow-hidden rounded-xl border border-white/[0.13] bg-white/[0.06]">
        <div className="grid grid-cols-[1fr_22px_34px_34px_38px] gap-1 border-b border-white/[0.11] bg-white/[0.06] px-3 py-1.5">
          {["RÉGION","Dél.","Vis.","Couv.","VS OBJ"].map(h=>(
            <span key={h} className="text-[7px] uppercase tracking-widest text-white/20 last:text-right">{h}</span>
          ))}
        </div>
        {regions.map((r,i)=>(
          <div key={r.name} className={cn(
            "grid grid-cols-[1fr_22px_34px_34px_38px] items-center gap-1 px-3 py-2",
            i<regions.length-1&&"border-b border-white/[0.09]"
          )}>
            <div className="flex items-center gap-1.5 min-w-0">
              <div className={cn("h-1.5 w-1.5 shrink-0 rounded-full", r.bar)}/>
              <span className="truncate text-[10px] font-semibold text-white">{r.name}</span>
            </div>
            <span className="text-right text-[9px] text-white/40">{r.del}</span>
            <span className="text-right text-[9px] font-semibold text-white/70">{r.vis}</span>
            <span className="text-right text-[9px] text-white/50">{r.cov}</span>
            <span className={cn("text-right text-[9px] font-black", r.attColor)}>{r.att}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   RÔLE 4 — LABORATOIRE : brand performance
════════════════════════════════════════════════════ */
function LaboVisual() {
  const rxRaw  = [38, 44, 42, 51, 56, 62, 59, 68, 72, 75, 71, 82];
  const visRaw = [55, 62, 58, 74, 80, 88, 84, 92, 96, 102, 98, 115];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  const H = 44;
  const maxV = 130;
  const rxPts  = rxRaw.map ((v,i)=>`${(i/(rxRaw.length-1))*100},${H-(v/maxV)*H}`);
  const visPts = visRaw.map((v,i)=>`${(i/(visRaw.length-1))*100},${H-(v/maxV)*H}`);
  const rxLine  = `M ${rxPts[0]} L ${rxPts.slice(1).join(" L ")}`;
  const visLine = `M ${visPts[0]} L ${visPts.slice(1).join(" L ")}`;

  const channels = [
    {label:"Visite terrain",   pct:72, color:"bg-teal-400"  },
    {label:"Approved Email",   pct:18, color:"bg-blue-400"  },
    {label:"CLM Digital",      pct:10, color:"bg-violet-400"},
  ];

  const hcps = [
    { init:"AD", grad:"from-violet-500 to-purple-600", name:"Dr. Amadou Diallo",  spec:"Cardiologue",  vis:18, rx:"Très élevé" },
    { init:"FS", grad:"from-blue-500 to-sky-500",      name:"Dr. Fatou Sow",      spec:"Pédiatre",     vis:14, rx:"Élevé"     },
    { init:"IN", grad:"from-teal-400 to-cyan-400",     name:"Dr. I. Ndiaye",      spec:"Généraliste",  vis:11, rx:"Moyen"     },
  ];

  return (
    <div className="space-y-2">
      {/* brand header */}
      <div className="flex items-center gap-2.5 rounded-xl border border-orange-500/20 bg-orange-500/[0.05] px-3 py-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_4px_14px_-4px_rgba(249,115,22,0.5)]">
          <span className="text-[9px] font-black text-white">Rx</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold text-white">Crestor 20mg · Sénégal</p>
          <p className="text-[8px] text-white/35">Cumul 2026 · Rapport partenaire</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[10px] font-black text-orange-400">+8%</p>
          <p className="text-[7px] text-white/25">Trend Rx</p>
        </div>
      </div>

      {/* brand KPIs */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          {val:"284",  label:"HCPs touchés",   color:"text-teal-400",    bg:"border-teal-500/20 bg-teal-500/[0.05]"},
          {val:"1 247",label:"Visites terrain", color:"text-white/75",    bg:"border-white/[0.13] bg-white/[0.07]"},
          {val:"34%",  label:"Part de voix",   color:"text-orange-400",  bg:"border-orange-500/20 bg-orange-500/[0.05]"},
          {val:"+8%",  label:"Trend Rx",        color:"text-emerald-400", bg:"border-white/[0.13] bg-white/[0.07]"},
        ].map(s=>(
          <div key={s.label} className={cn("rounded-xl border p-2 text-center", s.bg)}>
            <p className={cn("text-[13px] font-black leading-none", s.color)}>{s.val}</p>
            <p className="mt-0.5 text-[7px] leading-tight text-white/30">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Top Prescripteurs — Veeva "Top Accounts" report */}
      <div className="overflow-hidden rounded-xl border border-white/[0.13] bg-white/[0.06]">
        <div className="flex items-center justify-between border-b border-white/[0.11] bg-white/[0.06] px-3 py-1.5">
          <span className="text-[8px] uppercase tracking-widest text-white/25">Top Prescripteurs · Crestor</span>
          <span className="text-[7px] text-white/20">Rx · Visites</span>
        </div>
        {hcps.map((h,i)=>(
          <div key={h.name} className={cn("flex items-center gap-2.5 px-3 py-2", i<hcps.length-1&&"border-b border-white/[0.09]")}>
            <div className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-[8px] font-black text-white", h.grad)}>{h.init}</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] font-semibold text-white">{h.name}</p>
              <p className="text-[7.5px] text-white/30">{h.spec}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="text-right">
                <p className="text-[9px] font-black text-orange-400">{h.rx}</p>
                <p className="text-[7px] text-white/20">Rx</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-semibold text-teal-400">{h.vis}</p>
                <p className="text-[7px] text-white/20">vis.</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* dual-line chart : visites vs Rx */}
      <div className="rounded-xl border border-white/[0.13] bg-white/[0.07] p-3">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[9px] text-white/35">Visites terrain vs Trend Rx · 12 mois</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1"><div className="h-1.5 w-3 rounded-full bg-teal-400"/><span className="text-[7px] text-white/30">Visites</span></div>
            <div className="flex items-center gap-1"><div className="h-1.5 w-3 rounded-full bg-orange-400"/><span className="text-[7px] text-white/30">Rx</span></div>
          </div>
        </div>
        <svg viewBox={`0 0 100 ${H}`} className="w-full" style={{height:H}} preserveAspectRatio="none">
          <path d={visLine} fill="none" stroke="#14B8B8"  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
          <path d={rxLine}  fill="none" stroke="#f97316"  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" strokeDasharray="4 2"/>
        </svg>
        <div className="mt-1.5 flex items-center justify-between px-0.5">
          {months.map((m,i)=>(
            <span key={i} className={cn("text-[7px]",i===months.length-1?"font-bold text-teal-400":"text-white/20")}>{m}</span>
          ))}
        </div>
      </div>

      {/* Approved Email — métriques Veeva */}
      <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.06] px-3 py-2">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[8px] uppercase tracking-widest text-blue-300/60">Approved Email</p>
          <span className="text-[8px] text-white/30">Cycle Mai</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            {val:"892",  label:"Envoyés",   color:"text-white/70"},
            {val:"67%",  label:"Ouverture", color:"text-blue-400"},
            {val:"12%",  label:"Clics",     color:"text-violet-400"},
          ].map(s=>(
            <div key={s.label} className="rounded-lg border border-white/[0.09] bg-white/[0.04] p-1.5 text-center">
              <p className={cn("text-[11px] font-black leading-none", s.color)}>{s.val}</p>
              <p className="mt-0.5 text-[7px] text-white/25">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CLM — Closed Loop Marketing */}
      <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.06] px-3 py-2">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[8px] uppercase tracking-widest text-violet-300/60">CLM · e-Detailing</p>
          <span className="text-[9px] font-black text-violet-400">8.3 slides/visite</span>
        </div>
        <div className="space-y-1">
          {[
            {label:"Crestor 20mg", pct:62, color:"bg-orange-400"},
            {label:"Nolvadex",     pct:38, color:"bg-violet-400"},
          ].map(c=>(
            <div key={c.label} className="flex items-center gap-2">
              <span className="w-20 shrink-0 text-[8px] text-white/40">{c.label}</span>
              <div className="flex-1 h-1 overflow-hidden rounded-full bg-white/[0.10]">
                <div className={cn("h-full rounded-full", c.color)} style={{width:`${c.pct}%`}}/>
              </div>
              <span className="text-[8px] font-bold text-white/50">{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   ROLE DEFINITIONS
════════════════════════════════════════════════════ */
const roles = [
  {
    id:"vm", icon:Smartphone, label:"VM Délégué", tag:"App Terrain Mobile",
    accentClass:"text-teal-400", accentBorder:"border-teal-500/30", accentBg:"bg-teal-500/10",
    gradientFrom:"#0E8A8A", gradientTo:"#14B8B8", glowColor:"rgba(14,138,138,0.32)",
    headline:"L'app que vos délégués attendaient",
    description:"Planning journalier intelligent, compte-rendu en 90 secondes, remise d'échantillons avec signature conforme ARP. Offline-first natif - fonctionne dans les zones sans réseau.",
    bullets:[
      "Planning par zone géographique optimisé",
      "Cycle plan attainment en temps réel (dial vert/jaune/rouge)",
      "Compte-rendu de visite en 90 secondes",
      "Échantillons + signature électronique conforme ARP",
    ],
    Visual:VmVisual,
  },
  {
    id:"superviseur", icon:Users, label:"Superviseur KAM", tag:"Vision Territoire",
    accentClass:"text-blue-400", accentBorder:"border-blue-500/30", accentBg:"bg-blue-500/10",
    gradientFrom:"#3b82f6", gradientTo:"#60a5fa", glowColor:"rgba(59,130,246,0.28)",
    headline:"La vision territoire que vos KAMs méritent",
    description:"Dashboard en temps réel par délégué, attainment cycle plan, reach HCP, fréquence de visite. Toute la performance de votre équipe terrain, sans consolidation manuelle.",
    bullets:[
      "Account Reach et fréquence de visite par rep",
      "Cycle plan attainment avec alertes automatiques",
      "Classement et comparaison des délégués",
      "Alertes retard sur comptes sous-atteints",
    ],
    Visual:SuperviseurVisual,
  },
  {
    id:"direction", icon:Target, label:"Direction", tag:"Dashboard National",
    accentClass:"text-teal-400", accentBorder:"border-teal-500/30", accentBg:"bg-teal-500/10",
    gradientFrom:"#0E8A8A", gradientTo:"#14B8B8", glowColor:"rgba(14,138,138,0.28)",
    headline:"Les chiffres nationaux sans attendre le lundi",
    description:"Vue exécutive consolidée : couverture nationale, performance régionale, compliance terrain. Données actualisées au fil de la journée - sans tableur, sans email de consolidation.",
    bullets:[
      "KPIs nationaux : couverture, visites, compliance",
      "Comparaison régionale avec indicateurs rouge/jaune/vert",
      "Tendance sur 7 mois avec courbe de progression",
      "Export PDF pour les revues de performance",
    ],
    Visual:DirectionVisual,
  },
  {
    id:"labo", icon:Microscope, label:"Laboratoire", tag:"Performance Marque",
    accentClass:"text-orange-400", accentBorder:"border-orange-500/30", accentBg:"bg-orange-500/10",
    gradientFrom:"#f97316", gradientTo:"#fb923c", glowColor:"rgba(249,115,22,0.28)",
    headline:"Le reporting laboratoire sans délai ni friction",
    description:"Vos partenaires laboratoires accèdent à un dashboard dédié : HCPs touchés, visites terrain, trend Rx, part de voix, mix canal. Données actualisées quotidiennement.",
    bullets:[
      "HCPs touchés, visites terrain et trend Rx en temps réel",
      "Part de voix et mix canal (terrain, email, CLM)",
      "Top prescripteurs engagés avec historique",
      "Export rapport partenaire PDF en un clic",
    ],
    Visual:LaboVisual,
  },
];

/* ════════════════════════════════════════════════════
   MAIN SECTION
════════════════════════════════════════════════════ */
export function ModulesSection() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find(r => r.id === activeId)!;
  const ActiveIcon  = active.icon;
  const {Visual: ActiveVisual} = active;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pharveo-navy via-[#0d2035] to-pharveo-slate py-20 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-pharveo-teal/[0.12] blur-[120px]"/>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">

        {/* Header */}
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-pharveo-cyan/35 bg-pharveo-cyan/[0.12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              Une plateforme · 4 profils
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Chaque acteur a{" "}
              <span className="text-gradient-pharveo">son tableau de bord.</span>
            </h2>
            <p className="mt-5 text-pretty text-lg text-white/50">
              Du délégué terrain à la direction nationale - chaque rôle dispose d'une interface dédiée, conçue pour ses décisions.
            </p>
          </div>
        </BlurFade>

        {/* Role tab bar */}
        <BlurFade delay={60} inViewMargin="60px">
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {roles.map(r => {
              const Icon = r.icon;
              const isActive = r.id === activeId;
              return (
                <button
                  key={r.id}
                  onClick={() => setActiveId(r.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "border-white/20 bg-white/[0.10] text-white shadow-sm"
                      : "border-white/[0.13] bg-white/[0.08] text-white/40 hover:border-white/[0.12] hover:bg-white/[0.06] hover:text-white/70"
                  )}
                >
                  <Icon className={cn("h-4 w-4 shrink-0", isActive ? active.accentClass : "")}/>
                  <span className="whitespace-nowrap">{r.label}</span>
                </button>
              );
            })}
          </div>
        </BlurFade>

        {/* Tab panel */}
        <BlurFade key={activeId} delay={0} inViewMargin="0px">
          <div className="grid gap-8 rounded-2xl border border-white/[0.15] bg-white/[0.07] p-6 backdrop-blur-sm md:grid-cols-2 md:gap-10 md:p-10">

            {/* Left — texte */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{
                    background:`linear-gradient(135deg, ${active.gradientFrom}, ${active.gradientTo})`,
                    boxShadow:`0 4px 20px -4px ${active.glowColor}`,
                  }}
                >
                  <ActiveIcon className="h-5.5 w-5.5"/>
                </div>
                <div>
                  <span
                    className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
                    style={{
                      borderColor: `${active.gradientTo}70`,
                      backgroundColor: `${active.gradientTo}18`,
                      color: active.gradientTo,
                    }}
                  >
                    {active.tag}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{active.headline}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/55">{active.description}</p>

              <ul className="mt-6 space-y-2.5">
                {active.bullets.map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", active.accentClass)}/>
                    <span className="text-white/60">{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/produit"
                className={cn("group mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors", active.accentClass, "hover:text-white")}
              >
                Voir la démo {active.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </div>

            {/* Right — fenêtre app simulée */}
            <div
              className="flex flex-col overflow-hidden rounded-2xl"
              style={{
                border:`1px solid ${active.gradientFrom}22`,
                boxShadow:`0 0 60px -18px ${active.glowColor}, 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)`,
                background:"#0d1e30",
              }}
            >
              {/* Window chrome — style browser macOS */}
              <div className="flex shrink-0 items-center gap-2.5 border-b border-white/[0.10] bg-[#07101a] px-4 py-3">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F57]"/>
                  <div className="h-3 w-3 rounded-full bg-[#FEBC2E]"/>
                  <div className="h-3 w-3 rounded-full bg-[#28C840]"/>
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
                <div className="mx-1 flex flex-1 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.05] px-3 py-1.5">
                  <svg className="h-2.5 w-2.5 shrink-0 text-emerald-400/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] text-white/40">
                    app.pharveo.com<span className="text-white/20">/{active.id}</span>
                  </span>
                </div>
                <MoreHorizontal className="h-3.5 w-3.5 text-white/15 shrink-0"/>
              </div>

              {/* App body: sidebar + content */}
              <div className="flex flex-1">

                {/* Sidebar */}
                <div className="flex shrink-0 flex-col items-center gap-2 border-r border-white/[0.11] bg-[#091a2c] px-2.5 py-3">
                  {roles.map(r => {
                    const Icon = r.icon;
                    const isActive = r.id === activeId;
                    return (
                      <div
                        key={r.id}
                        className="flex h-8 w-8 items-center justify-center rounded-xl"
                        style={isActive ? {
                          background:`linear-gradient(135deg, ${r.gradientFrom}, ${r.gradientTo})`,
                          boxShadow:`0 2px 14px -4px ${r.glowColor}`,
                        } : {}}
                      >
                        <Icon className={cn("h-3.5 w-3.5", isActive?"text-white":"text-white/15")}/>
                      </div>
                    );
                  })}
                  <div className="mt-auto">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl">
                      <Settings className="h-3.5 w-3.5 text-white/10"/>
                    </div>
                  </div>
                </div>

                {/* Main area */}
                <div className="flex min-w-0 flex-1 flex-col">
                  {/* App nav bar */}
                  <div className="flex shrink-0 items-center justify-between border-b border-white/[0.09] bg-[#0c1d2e] px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-white">{active.label}</span>
                      <ChevronRight className="h-3 w-3 text-white/20"/>
                      <span className={cn("text-[9px] font-medium", active.accentClass)}>{active.tag}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative flex h-6 w-6 items-center justify-center">
                        <Bell className="h-3.5 w-3.5 text-white/25"/>
                        <div className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[6px] font-black text-white">3</div>
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-[7px] font-black text-white">M</div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 overflow-y-auto p-3">
                    <ActiveVisual/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </BlurFade>

        {/* Module list footer */}
        <BlurFade delay={80} inViewMargin="60px">
          <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.06] p-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/25">9 modules inclus dans chaque licence</p>
            <div className="flex flex-wrap gap-2">
              {[
                "HCP Management","Planning & Tournées","Compte-rendu visite",
                "Gestion des échantillons","Analytics temps réel","Mode hors-ligne",
                "CLM & Détailing digital","Messagerie intégrée","Dépenses terrain",
              ].map(m=>(
                <span key={m} className="flex items-center gap-1.5 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5 text-[11px] text-white/45">
                  <CheckCircle2 className="h-3 w-3 text-pharveo-cyan/60"/>
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[12px] text-white/35">Tout inclus · 0 add-on caché · 0 frais cachés</p>
              <Link href="/produit" className="inline-flex items-center gap-1 rounded-full border border-pharveo-teal/30 bg-pharveo-teal/[0.08] px-4 py-1.5 text-[11px] font-medium text-pharveo-cyan transition-colors hover:bg-pharveo-teal/[0.15]">
                Voir tous les modules
                <ArrowUpRight className="h-3 w-3"/>
              </Link>
            </div>
          </div>
        </BlurFade>

      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>
    </section>
  );
}
