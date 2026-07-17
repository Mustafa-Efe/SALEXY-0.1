import type { ReactNode } from "react";
import { Brain, Upload } from "lucide-react";
import type { NavPanelKey } from "../../data/platform";

interface AppShellProps {
  children: ReactNode;
  onOpenUpload: () => void;
  navPanel: NavPanelKey | null;
  onToggleNav: (panel: NavPanelKey) => void;
}

export function AppShell({ children, onOpenUpload, navPanel, onToggleNav }: AppShellProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden scroll-smooth text-foreground" style={{ fontFamily: "'Inter',sans-serif", background: "linear-gradient(135deg,#06071a 0%,#0a0d2e 40%,#0d0a2e 70%,#06071a 100%)" }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full blur-3xl opacity-20" style={{ width: 600, height: 600, top: -200, left: -100, background: "radial-gradient(circle,#4f7fff 0%,transparent 70%)" }} />
        <div className="absolute rounded-full blur-3xl opacity-15" style={{ width: 500, height: 500, top: "30%", right: -150, background: "radial-gradient(circle,#7c3aed 0%,transparent 70%)" }} />
        <div className="absolute rounded-full blur-3xl opacity-10" style={{ width: 400, height: 400, bottom: 100, left: "40%", background: "radial-gradient(circle,#06b6d4 0%,transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(79,127,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(79,127,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between border-b border-white/10 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8" style={{ background: "rgba(6,7,26,0.86)" }}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", boxShadow: "0 0 20px rgba(79,127,255,0.4)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 12L8 7L13 12L8 17L3 12Z" fill="white" opacity="0.9" />
              <path d="M11 12L16 7L21 12L16 17L11 12Z" fill="white" opacity="0.6" />
              <circle cx="12" cy="5" r="2" fill="white" opacity="0.8" />
            </svg>
          </div>
          <div>
            <div className="text-xl font-black tracking-[0.15em] text-white" style={{ fontFamily: "'Rajdhani',sans-serif" }}>SALEXY</div>
            <div className="text-xs leading-none text-muted-foreground" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Akıllı Satış ve Pazarlama Platformu</div>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-muted-foreground md:flex">
            {(["Dashboard", "Raporlar", "Ayarlar"] as const).map((item) => {
              const key = item.toLowerCase() as NavPanelKey;
              const active = navPanel === key;
              return (
                <button key={item} type="button" aria-current={active ? "page" : undefined} onClick={() => onToggleNav(key)} className={`rounded-full px-3 py-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 ${active ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(79,127,255,0.2)]" : "hover:bg-white/5 hover:text-foreground"}`}>
                  {item}
                </button>
              );
            })}
          </nav>
          <button type="button" onClick={onOpenUpload} className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60" style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", boxShadow: "0 2px 12px rgba(79,127,255,0.3)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.04em" }}>
            <Upload size={14} />
            VERİ YÜKLE
          </button>
          <div className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs" style={{ borderColor: "rgba(79,127,255,0.3)", background: "rgba(79,127,255,0.08)", color: "#4f7fff" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>AI Aktif</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">{children}</main>

      <footer className="relative z-10 mt-12 flex items-center justify-between border-t border-white/10 px-8 py-6" style={{ background: "rgba(6,7,26,0.6)" }}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-sm font-black tracking-[0.15em] text-white" style={{ fontFamily: "'Rajdhani',sans-serif" }}>SALEXY</span>
          <span>· Akıllı Satış ve Pazarlama Platformu</span>
        </div>
        <div className="text-xs text-muted-foreground" style={{ fontFamily: "'JetBrains Mono',monospace" }}>ERP Verisini Öğrenen, Karara Dönüştüren Zeka</div>
      </footer>
    </div>
  );
}
