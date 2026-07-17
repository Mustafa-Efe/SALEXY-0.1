import { Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface HeroKpi {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

interface HeroSectionProps {
  kpis: HeroKpi[];
}

export function HeroSection({ kpis }: HeroSectionProps) {
  return (
    <section className="mb-14 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(79,127,255,0.18),transparent_40%),rgba(10,14,41,0.78)] p-7 shadow-[0_30px_90px_rgba(3,8,24,0.36)] backdrop-blur-xl sm:p-10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-1.5 text-xs text-violet-200 shadow-[0_0_30px_rgba(124,58,237,0.12)]" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
          <Brain size={12} />
          <span>AI & ML Platform — Veriyi Karara, Kararı Büyümeye Dönüştürün</span>
        </div>
        <h1 className="mb-4 text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.02em" }}>
          Salexy{" "}
          <span style={{ background: "linear-gradient(90deg,#4f7fff,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            AI & ML
          </span>{" "}
          Platform
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Satış, kampanya, stok, müşteri, mağaza, kategori, sezon ve kârlılık kararlarını tek merkezden yöneten AI destekli ticari zeka platformu.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:gap-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                <Icon size={14} className={kpi.color} />
                <span className="text-sm font-bold text-white" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{kpi.value}</span>
                <span className="text-xs text-muted-foreground">{kpi.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
