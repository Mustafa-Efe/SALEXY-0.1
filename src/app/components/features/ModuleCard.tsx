import { ArrowUpRight, ArrowDownRight, ChevronRight, type LucideIcon } from "lucide-react";

interface ModuleCardProps {
  module: {
    id: string;
    label: string;
    sublabel: string;
    icon: LucideIcon;
    metric: string;
    metricLabel: string;
    trend: "up" | "down" | "neutral";
    gradient: string;
    glow: string;
    borderColor: string;
    bgTint: string;
  };
  onSelect: (id: string) => void;
}

export function ModuleCard({ module, onSelect }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <button onClick={() => onSelect(module.id)} className="group relative min-h-[212px] overflow-hidden rounded-[24px] border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(3,8,24,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60" style={{ background: "rgba(13,16,53,0.72)", borderColor: module.borderColor, backdropFilter: "blur(14px)" }}>
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ background: module.bgTint }} />
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ boxShadow: `inset 0 0 0 1px ${module.borderColor}` }} />
      <div className="absolute inset-x-4 top-4 h-px rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105" style={{ background: module.gradient, boxShadow: `0 6px 20px ${module.glow}` }}>
          <Icon size={20} className="text-white" />
        </div>
        <div className="mb-0.5 font-black text-sm tracking-[0.15em] text-white" style={{ fontFamily: "'Rajdhani',sans-serif" }}>{module.label}</div>
        <div className="mb-3 text-xs text-muted-foreground">{module.sublabel}</div>
        <div className="flex items-end gap-1.5">
          <span className="text-xl font-black leading-none text-white" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{module.metric}</span>
          {module.trend === "up" && <ArrowUpRight size={14} className="mb-0.5 text-emerald-400" />}
          {module.trend === "down" && <ArrowDownRight size={14} className="mb-0.5 text-red-400" />}
        </div>
        <div className="mt-0.5 text-xs text-muted-foreground">{module.metricLabel}</div>
      </div>

      <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
        <ChevronRight size={14} className="text-muted-foreground" />
      </div>
    </button>
  );
}