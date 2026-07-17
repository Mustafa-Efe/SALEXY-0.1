import { ChevronRight } from "lucide-react";
import { SectionHeading } from "../layout/SectionHeading";
import type { LucideIcon } from "lucide-react";

interface AiEngine {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  badge: string;
  badgeColor: string;
}

interface AiEngineSectionProps {
  engines: AiEngine[];
}

export function AiEngineSection({ engines }: AiEngineSectionProps) {
  return (
    <section className="mb-14">
      <SectionHeading eyebrow="Intelligence" title="AI Motorları" accentClassName="bg-gradient-to-b from-violet-500 to-cyan-500" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {engines.map((engine) => {
          const Icon = engine.icon;
          return (
            <button key={engine.id} className="group flex items-center gap-5 overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(13,16,53,0.72)] p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(3,8,24,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60" style={{ backdropFilter: "blur(14px)" }}>
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(79,127,255,0.18)]" style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.32),rgba(79,127,255,0.28))" }}>
                <Icon size={24} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-sm font-bold text-white" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.03em" }}>{engine.label}</span>
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-mono ${engine.badgeColor}`}>
                    {engine.badge}
                  </span>
                </div>
                <div className="text-xs leading-relaxed text-muted-foreground">{engine.description}</div>
              </div>
              <ChevronRight size={16} className="flex-shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
