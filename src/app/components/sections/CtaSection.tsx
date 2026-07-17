import { Upload } from "lucide-react";

interface CtaSectionProps {
  onOpenUpload: () => void;
}

export function CtaSection({ onOpenUpload }: CtaSectionProps) {
  return (
    <section className="mb-10 overflow-hidden rounded-[28px] border border-white/10 p-8 shadow-[0_24px_70px_rgba(3,8,24,0.32)]" style={{ background: "linear-gradient(135deg,#0d1035 0%,#1a0d3d 50%,#0a1535 100%)" }}>
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 50%,rgba(79,127,255,0.2) 0%,transparent 60%)" }} />
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 80% 50%,rgba(124,58,237,0.3) 0%,transparent 60%)" }} />
      <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <div className="mb-2 text-xs tracking-[0.3em] text-violet-400" style={{ fontFamily: "'JetBrains Mono',monospace" }}>ŞİRKETİNİZİ BAĞLAYIN</div>
          <h3 className="mb-2 text-2xl font-black text-white md:text-3xl" style={{ fontFamily: "'Rajdhani',sans-serif" }}>
            ERP verinizi yükleyin,{' '}
            <span style={{ background: "linear-gradient(90deg,#4f7fff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI kararı üretsin.
            </span>
          </h3>
          <p className="max-w-md text-sm text-muted-foreground">
            NebimV3, SAP ERP veya Microsoft Dynamics sisteminizi bağlayın ya da Excel/CSV dosyalarınızı yükleyin. Birkaç dakikada içgörüleriniz hazır.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {['NebimV3', 'SAP ERP', 'Dynamics 365', 'Excel/CSV'].map((item) => (
              <span key={item} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "rgba(79,127,255,0.25)", color: "#93c5fd", background: "rgba(79,127,255,0.08)" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <button onClick={onOpenUpload} className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60" style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", boxShadow: "0 8px 28px rgba(79,127,255,0.32)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}>
            <Upload size={14} />
            VERİ YÜKLE
          </button>
          <button className="rounded-xl border px-6 py-3 text-sm font-black transition-all duration-200 hover:border-violet-400/60 hover:bg-white/5 hover:shadow-[0_10px_30px_rgba(124,58,237,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60" style={{ background: "transparent", border: "1px solid rgba(124,58,237,0.4)", color: "#c4caff", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}>
            DEMO TALEP ET
          </button>
        </div>
      </div>
    </section>
  );
}
