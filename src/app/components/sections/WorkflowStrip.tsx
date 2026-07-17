import { ChevronRight } from "lucide-react";

export function WorkflowStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {['TAHMİN ET', 'SİMÜLE ET', 'KARAR VER', 'KAZAN'].map((step, index, arr) => (
        <div key={step} className="flex items-center gap-3">
          <div className="rounded-full px-5 py-2 text-xs font-black tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5" style={{ fontFamily: "'Rajdhani',sans-serif", background: `linear-gradient(90deg,hsl(${220 + index * 30}deg 80% 60%),hsl(${250 + index * 30}deg 80% 60%))`, boxShadow: `0 6px 20px hsla(${220 + index * 30}deg,80%,60%,0.22)` }}>
            {step}
          </div>
          {index < arr.length - 1 ? <ChevronRight size={14} className="text-muted-foreground" /> : null}
        </div>
      ))}
    </div>
  );
}
