import { Marquee } from "@/components/magicui/marquee";

const clients = [
  { name: "IMS-Pharma Sénégal", abbr: "IMS" },
  { name: "Sanofi AOF", abbr: "SNF" },
  { name: "Pfizer Sénégal", abbr: "PFZ" },
  { name: "Novartis AOF", abbr: "NVS" },
  { name: "Pharma CI", abbr: "PCI" },
  { name: "Ubipharm Group", abbr: "UBP" },
  { name: "Laborex Sénégal", abbr: "LBX" },
  { name: "Duopharm", abbr: "DPH" },
  { name: "Sodipharm", abbr: "SDP" },
  { name: "Boehringer AOF", abbr: "BHR" },
];

export function LogosSection() {
  return (
    <section className="relative border-y border-white/[0.07] bg-pharveo-slate py-10">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-pharveo-slate to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-pharveo-slate to-transparent z-10" />

      <p className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
        Ils digitalisent leur force de vente avec Pharveo
      </p>
      <Marquee className="[--duration:40s]" pauseOnHover>
        {clients.map((c) => (
          <div
            key={c.name}
            className="mx-3 flex h-11 items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 backdrop-blur-sm transition-all duration-300 hover:border-pharveo-teal/25 hover:bg-white/[0.06]"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-pharveo-teal/30 to-pharveo-cyan/20 text-[8px] font-black text-pharveo-cyan">
              {c.abbr.slice(0, 1)}
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-white/50 transition-colors duration-300 group-hover:text-white/70">
              {c.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
