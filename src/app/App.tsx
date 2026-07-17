import { useState, useRef } from "react";
import {
  TrendingUp, Megaphone, Package, Users, Store, Tag, Calendar,
  DollarSign, Brain, BarChart3, Activity, Cpu, ChevronRight, Zap,
  Shield, Target, ArrowUpRight, ArrowDownRight, X, Upload, CheckCircle2,
  AlertCircle, FileSpreadsheet, Database, Cloud, RefreshCw, ChevronDown,
  ArrowLeft, Loader2, Link2,
  Bell, Settings, LayoutDashboard, Download, Eye, ToggleLeft, ToggleRight,
  Globe, Lock, User, Building2, Wifi, WifiOff,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────────────── */
const modules = [
  {
    id: "satis", label: "SATIŞ", sublabel: "Sales Analytics", icon: TrendingUp,
    metric: "%28.4", metricLabel: "vs geçen ay", trend: "up",
    gradient: "linear-gradient(135deg,#4f7fff,#06b6d4)",
    glow: "rgba(79,127,255,0.35)", borderColor: "rgba(79,127,255,0.3)", bgTint: "rgba(79,127,255,0.08)",
    description: "Satış hedef ve performans takibi",
    detail: {
      headline: "Satış Performans Merkezi",
      sub: "Hedef sapması, trend analizi ve AI destekli satış tahmini.",
      stats: [
        { label: "Günlük Ciro", value: "₺1.24M", delta: "+%6.2", up: true },
        { label: "Hedef Gerçekleşme", value: "%91", delta: "+2pp", up: true },
        { label: "Sepet Ortalaması", value: "₺1.136", delta: "-%8.4", up: false },
        { label: "Kampanyalı Pay", value: "%31.9", delta: "-%6.1", up: false },
      ],
      insight: "AI Özeti: Düşüşün ana nedeni sepet + stok kaynaklı. İlk aksiyon transfer ve segment kampanyası olmalı.",
      actions: ["Hedef Güncelle", "Kampanya Öner", "Stok Transfer"],
    },
    uploadFields: ["Satış Siparişleri", "Günlük Ciro", "Hedef Verileri"],
  },
  {
    id: "kampanya", label: "KAMPANYA", sublabel: "Campaign Engine", icon: Megaphone,
    metric: "%31.7", metricLabel: "Başarı Oranı", trend: "up",
    gradient: "linear-gradient(135deg,#7c3aed,#a855f7)",
    glow: "rgba(124,58,237,0.35)", borderColor: "rgba(124,58,237,0.3)", bgTint: "rgba(124,58,237,0.08)",
    description: "AI destekli kampanya yönetimi",
    detail: {
      headline: "Kampanya Yönetim Merkezi",
      sub: "Simülasyon, risk analizi ve otomatik kampanya öneri motoru.",
      stats: [
        { label: "Aktif Kampanya", value: "12", delta: "+3", up: true },
        { label: "Başarı Oranı", value: "%31.7", delta: "+%4.2", up: true },
        { label: "Kampanya ROI", value: "%36.9", delta: "+%5.1", up: true },
        { label: "Risk Skoru", value: "0.31", delta: "-0.08", up: true },
      ],
      insight: "AI Özeti: VIP segment erişimi düşük. Kupon kampanyası ve vitrin güncellemesi önerilir.",
      actions: ["Simülasyon Başlat", "Öneri Al", "Kampanya Aç"],
    },
    uploadFields: ["Kampanya Geçmişi", "İndirim Seviyeleri", "Segment Verileri"],
  },
  {
    id: "stok", label: "STOK", sublabel: "Inventory Control", icon: Package,
    metric: "₺24.8M", metricLabel: "Stok Değeri", trend: "neutral",
    gradient: "linear-gradient(135deg,#06b6d4,#0891b2)",
    glow: "rgba(6,182,212,0.35)", borderColor: "rgba(6,182,212,0.3)", bgTint: "rgba(6,182,212,0.08)",
    description: "Stok dengesi ve risk analizi",
    detail: {
      headline: "Stok Yönetim Analizi",
      sub: "Stokout riski, fazla stok tespiti ve transfer önerileri.",
      stats: [
        { label: "Stok Değeri", value: "₺24.8M", delta: "-%23", up: false },
        { label: "Kritik SKU", value: "3", delta: "Yok Satıyor", up: false },
        { label: "Stok Günü", value: "35 Gün", delta: "Yüksek Risk", up: false },
        { label: "Devir Hızı", value: "%31.2", delta: "+%4.1", up: true },
      ],
      insight: "AI Özeti: 3 kritik SKU stok transferi acilen başlatılmalı. Fazla stok Marmara mağazalarında yoğun.",
      actions: ["Transfer Başlat", "Satın Alma Öner", "Rapor İndir"],
    },
    uploadFields: ["Stok Seviyeleri", "SKU Listesi", "Depo Verileri"],
  },
  {
    id: "musteri", label: "MÜŞTERİ", sublabel: "Customer Intelligence", icon: Users,
    metric: "8.643", metricLabel: "Aktif Müşteri", trend: "up",
    gradient: "linear-gradient(135deg,#10b981,#34d399)",
    glow: "rgba(16,185,129,0.35)", borderColor: "rgba(16,185,129,0.3)", bgTint: "rgba(16,185,129,0.08)",
    description: "Segment ve müşteri davranış analizi",
    detail: {
      headline: "Müşteri Segmentasyon Merkezi",
      sub: "VIP, sadık ve risk altındaki müşteri segmentleri.",
      stats: [
        { label: "Aktif Müşteri", value: "8.643", delta: "+%3.1", up: true },
        { label: "VIP Segment", value: "1.204", delta: "+%8.7", up: true },
        { label: "Churn Riski", value: "342", delta: "+%12", up: false },
        { label: "Dönüşüm", value: "%18.4", delta: "+%2.1", up: true },
      ],
      insight: "AI Özeti: VIP segment büyüyor ancak orta segment churn riski artıyor. Sadakat kampanyası önerilir.",
      actions: ["Segment Analizi", "Kampanya Hedefle", "Sadakat Oluştur"],
    },
    uploadFields: ["Müşteri Listesi", "Satın Alma Geçmişi", "Segment Tanımları"],
  },
  {
    id: "magaza", label: "MAĞAZA", sublabel: "Store Performance", icon: Store,
    metric: "326", metricLabel: "Toplam Mağaza", trend: "up",
    gradient: "linear-gradient(135deg,#f97316,#fb923c)",
    glow: "rgba(249,115,22,0.35)", borderColor: "rgba(249,115,22,0.3)", bgTint: "rgba(249,115,22,0.08)",
    description: "Mağaza bazlı kök neden analizi",
    detail: {
      headline: "Mağaza Analiz Merkezi",
      sub: "Hangi mağazada ne düzeltilmeli — AI kök neden ile gösterir.",
      stats: [
        { label: "Toplam Mağaza", value: "326", delta: "+4", up: true },
        { label: "Hedef Gerçekleşme", value: "%91", delta: "-2pp", up: false },
        { label: "Stok Sağlığı", value: "%76", delta: "+%3", up: true },
        { label: "Trafik", value: "-%12", delta: "Hafta Sonu Düşük", up: false },
      ],
      insight: "AI Özeti: Mağaza 124 kritik — stok + trafik kaynaklı. Personel koçluğu ve vitrin güncellemesi önerilir.",
      actions: ["Mağaza Seç", "Aksiyon Planı", "Kıyasla"],
    },
    uploadFields: ["Mağaza Listesi", "Mağaza Satış", "Trafik Verileri"],
  },
  {
    id: "kategori", label: "KATEGORİ", sublabel: "Category Analysis", icon: Tag,
    metric: "%27.3", metricLabel: "Performans", trend: "up",
    gradient: "linear-gradient(135deg,#ec4899,#f43f5e)",
    glow: "rgba(236,72,153,0.35)", borderColor: "rgba(236,72,153,0.3)", bgTint: "rgba(236,72,153,0.08)",
    description: "Koru, büyüt, temizle stratejisi",
    detail: {
      headline: "Ürün / Kategori Analizi",
      sub: "Kategorileri koru, büyüt, temizle mantığıyla yönet.",
      stats: [
        { label: "Koru (Skor≥75)", value: "12 Kategori", delta: "Sağlıklı", up: true },
        { label: "Büyüt (50-74)", value: "8 Kategori", delta: "Yatırım Gerek", up: true },
        { label: "Temizle (<50)", value: "4 Kategori", delta: "Riskli", up: false },
        { label: "Kategori Skoru", value: "78/100", delta: "İyi", up: true },
      ],
      insight: "AI Özeti: Tamamlayıcı triko ve aksesuar büyüme potansiyeli taşıyor. Sezon sonu zayıf SKU'larda satın alma durdurulsun.",
      actions: ["SKU Analizi", "Satın Alma Öner", "Kategori Raporu"],
    },
    uploadFields: ["Kategori Hiyerarşisi", "SKU Performans", "İade Verileri"],
  },
  {
    id: "sezon", label: "SEZON", sublabel: "Season Management", icon: Calendar,
    metric: "%22.6", metricLabel: "Sezon Performansı", trend: "neutral",
    gradient: "linear-gradient(135deg,#6366f1,#818cf8)",
    glow: "rgba(99,102,241,0.35)", borderColor: "rgba(99,102,241,0.3)", bgTint: "rgba(99,102,241,0.08)",
    description: "Sezon risk ve fırsat yönetimi",
    detail: {
      headline: "Sezon Yönetim Merkezi",
      sub: "Ciro, marj, stok, iade ve kampanya baskısını birlikte izler.",
      stats: [
        { label: "Sezon Skoru", value: "86/100", delta: "Güçlü", up: true },
        { label: "Ciro Gerçekleşme", value: "%112.4", delta: "Hedef Aşıldı", up: true },
        { label: "Marj Sağlığı", value: "%18.6", delta: "-2.3pp", up: false },
        { label: "İade Oranı", value: "%8.7", delta: "+1.6pp Yüksek", up: false },
      ],
      insight: "AI Özeti: Sezon ciro tarafında güçlü ilerliyor ancak marj baskısı artıyor. Stok transferi ve kampanya zamanlaması kontrol edilmeli.",
      actions: ["Sezon Planla", "Risk Uyarıları", "Kategori Karşılaştır"],
    },
    uploadFields: ["Sezon Takvimi", "Koleksiyon Listesi", "Geçmiş Sezon Verisi"],
  },
  {
    id: "karlılik", label: "KÂRLILIK", sublabel: "Profit & Cost", icon: DollarSign,
    metric: "%18.6", metricLabel: "Brüt Kâr Marjı", trend: "up",
    gradient: "linear-gradient(135deg,#f59e0b,#fbbf24)",
    glow: "rgba(245,158,11,0.35)", borderColor: "rgba(245,158,11,0.3)", bgTint: "rgba(245,158,11,0.08)",
    description: "Ciroyu değil, kârlılığı yönet",
    detail: {
      headline: "Kâr / Maliyet Analizi",
      sub: "Ciro odaklı yönetimden marj ve kârlılık odaklı yönetime geçiş.",
      stats: [
        { label: "Toplam Ciro", value: "₺124.8M", delta: "+%18.6", up: true },
        { label: "Brüt Kâr Marjı", value: "%32.4", delta: "+2.8pp", up: true },
        { label: "Net Kâr", value: "₺16.8M", delta: "+%34.7", up: true },
        { label: "Maliyet Baskısı", value: "%67.3", delta: "-3.2pp", up: true },
      ],
      insight: "AI Özeti: İskonto baskısını azalt, marj düşük ürünleri gözden geçir, yüksek kârlı SKU'lara odaklan.",
      actions: ["Marj Analizi", "Maliyet Raporu", "SKU Optimizasyon"],
    },
    uploadFields: ["Maliyet Verileri", "Fiyat Listesi", "İskonto Geçmişi"],
  },
];

const erpSystems = [
  { id: "nebim", name: "NebimV3 ERP", logo: "N", color: "#4f7fff", description: "Nebim V3 entegrasyonu" },
  { id: "sap", name: "SAP ERP", logo: "SAP", color: "#10b981", description: "SAP S/4HANA veya ECC" },
  { id: "dynamics", name: "Microsoft Dynamics 365", logo: "D365", color: "#7c3aed", description: "Dynamics 365 Business Central" },
  { id: "manual", name: "Manuel Yükleme", logo: "XLS", color: "#f97316", description: "Excel / CSV dosya yükleme" },
];

type UploadFile = { name: string; size: string; status: "uploading" | "done" | "error"; progress: number };

/* ─── MODULE DETAIL PANEL ───────────────────────────────────────────── */
function ModulePanel({ mod, onClose, onUpload }: { mod: typeof modules[0]; onClose: () => void; onUpload: () => void }) {
  const Icon = mod.icon;
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div
        className="relative ml-auto h-full w-full max-w-lg flex flex-col overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0a0d2e 0%,#06071a 100%)", borderLeft: `1px solid ${mod.borderColor}` }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b" style={{ borderColor: mod.borderColor }}>
          <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: mod.gradient, boxShadow: `0 0 20px ${mod.glow}` }}>
            <Icon size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="font-black text-white text-lg" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.06em" }}>
              {mod.detail.headline}
            </div>
            <div className="text-muted-foreground text-xs">{mod.detail.sub}</div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 [&::-webkit-scrollbar]:hidden">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {mod.detail.stats.map((s) => (
              <div key={s.label} className="rounded-xl p-4 border" style={{ background: mod.bgTint, borderColor: mod.borderColor }}>
                <div className="text-muted-foreground text-xs mb-1">{s.label}</div>
                <div className="text-white font-black text-xl" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{s.value}</div>
                <div className={`flex items-center gap-1 text-xs mt-1 ${s.up ? "text-emerald-400" : "text-red-400"}`}>
                  {s.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                  {s.delta}
                </div>
              </div>
            ))}
          </div>

          {/* AI insight */}
          <div className="rounded-xl p-4 border" style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.25)" }}>
            <div className="flex items-start gap-3">
              <Brain size={16} className="text-violet-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80 leading-relaxed">{mod.detail.insight}</p>
            </div>
          </div>

          {/* Quick actions */}
          <div>
            <div className="text-xs text-muted-foreground mb-3 tracking-widest font-mono" style={{ fontFamily: "'JetBrains Mono',monospace" }}>HIZLI AKSİYONLAR</div>
            <div className="flex flex-col gap-2">
              {mod.detail.actions.map((action) => (
                <button
                  key={action}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold text-white border transition-all duration-200 hover:scale-[1.01]"
                  style={{ background: mod.bgTint, borderColor: mod.borderColor }}
                >
                  {action}
                  <ChevronRight size={14} className="text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Upload data prompt */}
          <div
            className="rounded-xl p-5 border cursor-pointer hover:scale-[1.01] transition-all duration-200"
            style={{ background: "rgba(79,127,255,0.06)", borderColor: "rgba(79,127,255,0.25)", borderStyle: "dashed" }}
            onClick={onUpload}
          >
            <div className="flex items-center gap-3 mb-2">
              <Upload size={16} className="text-blue-400" />
              <span className="text-sm font-semibold text-white">Veri Yükle / ERP Bağla</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {mod.label} modülü için veri yüklemek veya ERP sisteminizi bağlamak için tıklayın.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {mod.uploadFields.map((f) => (
                <span key={f} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(79,127,255,0.1)", color: "#93c5fd", border: "1px solid rgba(79,127,255,0.2)" }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer action */}
        <div className="px-6 py-5 border-t" style={{ borderColor: mod.borderColor }}>
          <button
            className="w-full py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: mod.gradient, boxShadow: `0 4px 20px ${mod.glow}`, fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.08em" }}
          >
            TAM ANALİZİ GÖRÜNTÜLE
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── UPLOAD MODAL ──────────────────────────────────────────────────── */
function UploadModal({ initialModule, onClose }: { initialModule: string | null; onClose: () => void }) {
  const [step, setStep] = useState<"erp" | "files" | "mapping" | "done">("erp");
  const [selectedErp, setSelectedErp] = useState<string | null>(null);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const modInfo = modules.find((m) => m.id === initialModule);

  function simulateUpload(name: string, size: string) {
    const newFile: UploadFile = { name, size, status: "uploading", progress: 0 };
    setFiles((prev) => [...prev, newFile]);
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setFiles((prev) => prev.map((f) => f.name === name ? { ...f, progress: 100, status: "done" } : f));
      } else {
        setFiles((prev) => prev.map((f) => f.name === name ? { ...f, progress: Math.min(p, 99) } : f));
      }
    }, 180);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    Array.from(e.dataTransfer.files).forEach((f) => {
      const kb = f.size / 1024;
      simulateUpload(f.name, kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb.toFixed(0)} KB`);
    });
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    Array.from(e.target.files || []).forEach((f) => {
      const kb = f.size / 1024;
      simulateUpload(f.name, kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb.toFixed(0)} KB`);
    });
  }

  const allDone = files.length > 0 && files.every((f) => f.status === "done");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col"
        style={{ background: "linear-gradient(160deg,#0a0d2e 0%,#06071a 100%)", border: "1px solid rgba(79,127,255,0.2)", maxHeight: "90vh" }}
      >
        {/* Modal header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b" style={{ borderColor: "rgba(79,127,255,0.15)" }}>
          {step !== "erp" && (
            <button onClick={() => setStep(step === "files" ? "erp" : step === "mapping" ? "files" : "files")}
              className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft size={16} />
            </button>
          )}
          <div className="flex-1">
            <div className="font-black text-white text-lg" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}>
              {step === "erp" && "ERP / Veri Kaynağı Seç"}
              {step === "files" && "Dosya Yükle"}
              {step === "mapping" && "Alan Eşleştirme"}
              {step === "done" && "Yükleme Tamamlandı"}
            </div>
            {modInfo && (
              <div className="text-xs text-muted-foreground mt-0.5">
                Modül: <span style={{ color: "#93c5fd" }}>{modInfo.label}</span>
              </div>
            )}
          </div>

          {/* Step indicators */}
          <div className="hidden sm:flex items-center gap-2">
            {(["erp", "files", "mapping", "done"] as const).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                  style={{
                    background: step === s ? "linear-gradient(135deg,#4f7fff,#7c3aed)" :
                      (["erp","files","mapping","done"].indexOf(step) > i ? "rgba(79,127,255,0.3)" : "rgba(255,255,255,0.05)"),
                    color: step === s || ["erp","files","mapping","done"].indexOf(step) > i ? "white" : "#6b75b8",
                  }}
                >
                  {["erp","files","mapping","done"].indexOf(step) > i ? <CheckCircle2 size={12} /> : i + 1}
                </div>
                {i < 3 && <div className="w-4 h-px" style={{ background: ["erp","files","mapping","done"].indexOf(step) > i ? "rgba(79,127,255,0.5)" : "rgba(255,255,255,0.05)" }} />}
              </div>
            ))}
          </div>

          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Modal body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:hidden">

          {/* STEP 1: ERP SELECT */}
          {step === "erp" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-6">
                Salexy, ERP sisteminizden veriyi otomatik olarak öğrenir ve AI karar motoruna dönüştürür. Sisteminizi seçin veya manuel dosya yükleyin.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {erpSystems.map((erp) => (
                  <button
                    key={erp.id}
                    onClick={() => setSelectedErp(erp.id)}
                    className="text-left p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      background: selectedErp === erp.id ? `${erp.color}18` : "rgba(13,16,53,0.6)",
                      borderColor: selectedErp === erp.id ? erp.color : "rgba(79,127,255,0.15)",
                      boxShadow: selectedErp === erp.id ? `0 0 20px ${erp.color}25` : "none",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-white text-xs flex-shrink-0"
                        style={{ background: erp.color, fontFamily: "'JetBrains Mono',monospace" }}
                      >
                        {erp.logo}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{erp.name}</div>
                        <div className="text-muted-foreground text-xs">{erp.description}</div>
                      </div>
                      {selectedErp === erp.id && <CheckCircle2 size={16} className="ml-auto flex-shrink-0" style={{ color: erp.color }} />}
                    </div>
                    {erp.id !== "manual" ? (
                      <div className="flex items-center gap-1.5 text-xs mt-2" style={{ color: erp.color }}>
                        <Link2 size={11} />
                        <span>Otomatik entegrasyon mevcut</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs mt-2 text-muted-foreground">
                        <FileSpreadsheet size={11} />
                        <span>Excel / CSV / JSON destekli</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {selectedErp && selectedErp !== "manual" && (
                <div className="mt-4 p-4 rounded-xl border" style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.25)" }}>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-1">
                    <RefreshCw size={13} />
                    Otomatik Senkronizasyon
                  </div>
                  <p className="text-xs text-muted-foreground">
                    API bağlantısı kurulduktan sonra Salexy verilerinizi otomatik olarak çekmeye başlayacak. Günlük güncelleme ile her zaman güncel kalırsınız.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: FILE UPLOAD */}
          {step === "files" && (
            <div className="space-y-4">
              {modInfo && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-muted-foreground">Önerilen dosyalar:</span>
                  {modInfo.uploadFields.map((f) => (
                    <span key={f} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(79,127,255,0.1)", color: "#93c5fd", border: "1px solid rgba(79,127,255,0.2)" }}>
                      {f}
                    </span>
                  ))}
                </div>
              )}

              {/* Drop zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                className="rounded-xl border-2 border-dashed p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-200"
                style={{
                  borderColor: dragOver ? "#4f7fff" : "rgba(79,127,255,0.25)",
                  background: dragOver ? "rgba(79,127,255,0.08)" : "rgba(13,16,53,0.4)",
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: "rgba(79,127,255,0.15)" }}>
                  <Upload size={24} className="text-blue-400" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">Dosyaları buraya sürükleyin</div>
                <div className="text-muted-foreground text-xs">veya tıklayarak seçin</div>
                <div className="mt-3 text-xs text-muted-foreground" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                  Excel (.xlsx), CSV, JSON — Maks. 50 MB
                </div>
                <input ref={fileRef} type="file" multiple className="hidden" accept=".xlsx,.csv,.json,.xls" onChange={handleFileInput} />
              </div>

              {/* File list */}
              {files.length > 0 && (
                <div className="space-y-2">
                  {files.map((f) => (
                    <div key={f.name} className="flex items-center gap-3 p-3 rounded-xl border" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
                      <FileSpreadsheet size={16} className="text-blue-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-medium truncate">{f.name}</div>
                        <div className="text-muted-foreground text-xs">{f.size}</div>
                        {f.status === "uploading" && (
                          <div className="mt-1.5 h-1 rounded-full overflow-hidden" style={{ background: "rgba(79,127,255,0.15)" }}>
                            <div
                              className="h-full rounded-full transition-all duration-200"
                              style={{ width: `${f.progress}%`, background: "linear-gradient(90deg,#4f7fff,#7c3aed)" }}
                            />
                          </div>
                        )}
                      </div>
                      {f.status === "uploading" && <Loader2 size={14} className="text-blue-400 animate-spin flex-shrink-0" />}
                      {f.status === "done" && <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />}
                      {f.status === "error" && <AlertCircle size={14} className="text-red-400 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              )}

              {/* Template download */}
              <div className="flex items-center justify-between p-4 rounded-xl border" style={{ background: "rgba(245,158,11,0.06)", borderColor: "rgba(245,158,11,0.2)" }}>
                <div className="flex items-center gap-3">
                  <Database size={15} className="text-amber-400" />
                  <div>
                    <div className="text-white text-xs font-semibold">Şablon Dosyası İndir</div>
                    <div className="text-muted-foreground text-xs">Doğru format için hazır Excel şablonu</div>
                  </div>
                </div>
                <button className="text-xs px-3 py-1.5 rounded-lg font-semibold text-amber-400 border border-amber-400/30 hover:bg-amber-400/10 transition-colors">
                  İndir
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: FIELD MAPPING */}
          {step === "mapping" && (
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground mb-4">
                Yüklenen dosyanızdaki sütunları Salexy alanlarıyla eşleştirin. AI otomatik eşleştirme önerisi yaptı.
              </p>
              {[
                { src: "Tarih / Date", target: "İşlem Tarihi", confidence: 98 },
                { src: "Tutar / Amount", target: "Net Satış Tutarı", confidence: 95 },
                { src: "StoreID", target: "Mağaza Kodu", confidence: 91 },
                { src: "SKU_Code", target: "Ürün SKU", confidence: 88 },
                { src: "Quantity", target: "Adet", confidence: 96 },
                { src: "Discount%", target: "İndirim Oranı", confidence: 83 },
              ].map((row) => (
                <div key={row.src} className="flex items-center gap-3 p-3 rounded-xl border" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.12)" }}>
                  <div className="flex-1 text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-1 rounded" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                    {row.src}
                  </div>
                  <ChevronRight size={14} className="text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <select
                        defaultValue={row.target}
                        className="flex-1 text-xs text-white rounded-lg px-2 py-1 outline-none appearance-none cursor-pointer"
                        style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
                      >
                        <option>{row.target}</option>
                      </select>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-mono"
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          color: row.confidence >= 90 ? "#34d399" : "#fbbf24",
                          background: row.confidence >= 90 ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)",
                          border: `1px solid ${row.confidence >= 90 ? "rgba(16,185,129,0.25)" : "rgba(245,158,11,0.25)"}`,
                        }}
                      >
                        %{row.confidence}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 text-xs text-emerald-400 mt-2">
                <Brain size={12} />
                AI otomatik eşleştirme tamamlandı — 6/6 alan eşleşti.
              </div>
            </div>
          )}

          {/* STEP 4: DONE */}
          {step === "done" && (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#10b981,#34d399)", boxShadow: "0 0 40px rgba(16,185,129,0.35)" }}
              >
                <CheckCircle2 size={36} className="text-white" />
              </div>
              <div>
                <div className="text-white font-black text-2xl mb-2" style={{ fontFamily: "'Rajdhani',sans-serif" }}>Yükleme Tamamlandı!</div>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Verileriniz başarıyla yüklendi. Salexy AI motoru verileri işlemeye başladı. Sonuçlar birkaç dakika içinde modülde görünecek.
                </p>
              </div>
              <div className="w-full grid grid-cols-3 gap-3 pt-4">
                {[
                  { label: "Yüklenen Dosya", value: `${files.length || "3"}`, icon: FileSpreadsheet },
                  { label: "İşlenen Satır", value: "24.841", icon: Database },
                  { label: "Eşleşen Alan", value: "6/6", icon: CheckCircle2 },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 border text-center" style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)" }}>
                    <s.icon size={16} className="text-emerald-400 mx-auto mb-1" />
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{s.value}</div>
                    <div className="text-muted-foreground text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="w-full p-4 rounded-xl border text-left" style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.2)" }}>
                <div className="flex items-center gap-2 text-violet-400 text-xs font-semibold mb-1">
                  <Brain size={12} /> AI İşlem Durumu
                </div>
                <div className="space-y-1">
                  {["Veri doğrulama tamamlandı", "Alan eşleştirme uygulandı", "ML modeline besleniyor..."].map((s, i) => (
                    <div key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
                      {i < 2 ? <CheckCircle2 size={11} className="text-emerald-400" /> : <Loader2 size={11} className="text-blue-400 animate-spin" />}
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal footer */}
        <div className="px-6 py-5 border-t flex gap-3" style={{ borderColor: "rgba(79,127,255,0.15)" }}>
          {step === "erp" && (
            <>
              <button onClick={onClose} className="flex-1 py-3 rounded-xl text-sm font-semibold text-muted-foreground border border-border hover:text-white transition-colors">
                İptal
              </button>
              <button
                disabled={!selectedErp}
                onClick={() => setStep("files")}
                className="flex-1 py-3 rounded-xl text-sm font-black text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}
              >
                DEVAM ET
              </button>
            </>
          )}
          {step === "files" && (
            <>
              <button onClick={() => setStep("erp")} className="flex-1 py-3 rounded-xl text-sm font-semibold text-muted-foreground border border-border hover:text-white transition-colors">
                Geri
              </button>
              <button
                onClick={() => setStep("mapping")}
                disabled={files.length === 0}
                className="flex-1 py-3 rounded-xl text-sm font-black text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}
              >
                {allDone ? "ALAN EŞLEŞTİR" : files.some((f) => f.status === "uploading") ? "YÜKLENİYOR..." : "DOSYA EKLE"}
              </button>
            </>
          )}
          {step === "mapping" && (
            <>
              <button onClick={() => setStep("files")} className="flex-1 py-3 rounded-xl text-sm font-semibold text-muted-foreground border border-border hover:text-white transition-colors">
                Geri
              </button>
              <button
                onClick={() => setStep("done")}
                className="flex-1 py-3 rounded-xl text-sm font-black text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}
              >
                İÇE AKTAR
              </button>
            </>
          )}
          {step === "done" && (
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl text-sm font-black text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#10b981,#34d399)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}
            >
              MODÜLE GİT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── DASHBOARD PANEL ──────────────────────────────────────────────── */
function DashboardPanel({ onClose }: { onClose: () => void }) {
  const moduleHealth = [
    { label: "Satış", score: 91, color: "#4f7fff" },
    { label: "Kampanya", score: 78, color: "#7c3aed" },
    { label: "Stok", score: 62, color: "#06b6d4" },
    { label: "Müşteri", score: 85, color: "#10b981" },
    { label: "Mağaza", score: 74, color: "#f97316" },
    { label: "Kârlılık", score: 88, color: "#f59e0b" },
  ];
  const alerts = [
    { text: "Mağaza 124: Stok riski yüksek", level: "high" },
    { text: "Kampanya ROI hedef altında", level: "medium" },
    { text: "VIP segment churn artışı tespit edildi", level: "medium" },
    { text: "Sezon sonu stok transferi gerekiyor", level: "low" },
  ];
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative ml-auto h-full w-full max-w-lg flex flex-col overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0a0d2e 0%,#06071a 100%)", borderLeft: "1px solid rgba(79,127,255,0.2)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b" style={{ borderColor: "rgba(79,127,255,0.2)" }}>
          <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: "linear-gradient(135deg,#4f7fff,#06b6d4)", boxShadow: "0 0 20px rgba(79,127,255,0.35)" }}>
            <LayoutDashboard size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="font-black text-white text-lg" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.06em" }}>Dashboard</div>
            <div className="text-muted-foreground text-xs">Platform genel bakış</div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 [&::-webkit-scrollbar]:hidden">
          {/* KPI Grid */}
          <div>
            <div className="text-xs text-muted-foreground mb-3 tracking-widest" style={{ fontFamily: "'JetBrains Mono',monospace" }}>KPI ÖZETİ</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Toplam Ciro", value: "₺124.8M", delta: "+%18.6", up: true, color: "#4f7fff" },
                { label: "Brüt Marj", value: "%32.4", delta: "+2.8pp", up: true, color: "#10b981" },
                { label: "Aktif Mağaza", value: "326", delta: "+4", up: true, color: "#06b6d4" },
                { label: "Aktif Müşteri", value: "8.643", delta: "+%3.1", up: true, color: "#7c3aed" },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl p-4 border" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.2)" }}>
                  <div className="text-muted-foreground text-xs mb-1">{kpi.label}</div>
                  <div className="text-white font-black text-xl" style={{ fontFamily: "'JetBrains Mono',monospace", color: kpi.color }}>{kpi.value}</div>
                  <div className={`flex items-center gap-1 text-xs mt-1 ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>
                    {kpi.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {kpi.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Module Health */}
          <div>
            <div className="text-xs text-muted-foreground mb-3 tracking-widest" style={{ fontFamily: "'JetBrains Mono',monospace" }}>MODÜL SAĞLIK SKORLARI</div>
            <div className="space-y-3">
              {moduleHealth.map((m) => (
                <div key={m.label} className="rounded-xl p-3 border" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-semibold">{m.label}</span>
                    <span className="font-black text-sm" style={{ fontFamily: "'JetBrains Mono',monospace", color: m.color }}>{m.score}/100</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${m.score}%`, background: m.color, boxShadow: `0 0 8px ${m.color}80` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Alerts */}
          <div>
            <div className="text-xs text-muted-foreground mb-3 tracking-widest" style={{ fontFamily: "'JetBrains Mono',monospace" }}>AI UYARILARI</div>
            <div className="space-y-2">
              {alerts.map((alert, i) => {
                const borderCol = alert.level === "high" ? "rgba(239,68,68,0.4)" : alert.level === "medium" ? "rgba(245,158,11,0.4)" : "rgba(79,127,255,0.25)";
                const bgCol = alert.level === "high" ? "rgba(239,68,68,0.08)" : alert.level === "medium" ? "rgba(245,158,11,0.08)" : "rgba(79,127,255,0.06)";
                const textCol = alert.level === "high" ? "#f87171" : alert.level === "medium" ? "#fbbf24" : "#93c5fd";
                return (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-3 border" style={{ background: bgCol, borderColor: borderCol }}>
                    <AlertCircle size={14} style={{ color: textCol, flexShrink: 0, marginTop: 1 }} />
                    <span className="text-sm" style={{ color: textCol }}>{alert.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t" style={{ borderColor: "rgba(79,127,255,0.2)" }}>
          <button
            className="w-full py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#4f7fff,#06b6d4)", boxShadow: "0 4px 20px rgba(79,127,255,0.35)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.08em" }}
          >
            TAM DASHBOARD'A GİT
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── RAPORLAR PANEL ────────────────────────────────────────────────── */
function RaporlarPanel({ onClose }: { onClose: () => void }) {
  const categories = [
    {
      name: "Satış Raporları",
      color: "#4f7fff",
      reports: [
        { name: "Aylık Satış Özeti", date: "15 Tem 2026", size: "2.4 MB" },
        { name: "Mağaza Bazlı Satış", date: "14 Tem 2026", size: "5.1 MB" },
        { name: "Hedef Gerçekleşme", date: "10 Tem 2026", size: "1.2 MB" },
      ],
    },
    {
      name: "Kampanya Raporları",
      color: "#7c3aed",
      reports: [
        { name: "Kampanya ROI Analizi", date: "13 Tem 2026", size: "3.7 MB" },
        { name: "Segment Etki Raporu", date: "08 Tem 2026", size: "2.9 MB" },
      ],
    },
    {
      name: "Stok Raporları",
      color: "#06b6d4",
      reports: [
        { name: "Kritik SKU Listesi", date: "16 Tem 2026", size: "0.8 MB" },
        { name: "Stok Devir Analizi", date: "12 Tem 2026", size: "4.2 MB" },
      ],
    },
    {
      name: "Performans Raporları",
      color: "#10b981",
      reports: [
        { name: "Yönetici Özet Raporu", date: "15 Tem 2026", size: "1.6 MB" },
        { name: "AI Karar Verimliliği", date: "11 Tem 2026", size: "2.1 MB" },
        { name: "Aylık KPI Panosu", date: "01 Tem 2026", size: "3.3 MB" },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative ml-auto h-full w-full max-w-lg flex flex-col overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0a0d2e 0%,#06071a 100%)", borderLeft: "1px solid rgba(79,127,255,0.2)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b" style={{ borderColor: "rgba(79,127,255,0.2)" }}>
          <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)", boxShadow: "0 0 20px rgba(124,58,237,0.35)" }}>
            <BarChart3 size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="font-black text-white text-lg" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.06em" }}>Raporlar</div>
            <div className="text-muted-foreground text-xs">Tüm analiz raporları</div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 [&::-webkit-scrollbar]:hidden">
          {/* New report button */}
          <button
            className="w-full py-3 rounded-xl font-black text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)", boxShadow: "0 4px 20px rgba(124,58,237,0.35)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.08em" }}
          >
            <BarChart3 size={15} />
            YENİ RAPOR OLUŞTUR
          </button>

          {/* Categories */}
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <div className="text-xs font-bold tracking-widest" style={{ fontFamily: "'Rajdhani',sans-serif", color: cat.color }}>{cat.name.toUpperCase()}</div>
              </div>
              <div className="space-y-2">
                {cat.reports.map((rep) => (
                  <div key={rep.name} className="flex items-center gap-3 rounded-xl p-4 border" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
                    <FileSpreadsheet size={16} style={{ color: cat.color, flexShrink: 0 }} />
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-semibold truncate">{rep.name}</div>
                      <div className="text-muted-foreground text-xs mt-0.5" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{rep.date} · {rep.size}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors" title="Görüntüle">
                        <Eye size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors" title="İndir">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── AYARLAR PANEL ─────────────────────────────────────────────────── */
function AyarlarPanel({ onClose }: { onClose: () => void }) {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [twoFa, setTwoFa] = useState(false);

  const connectedErps = [
    { name: "NebimV3 ERP", status: "connected", color: "#4f7fff" },
    { name: "SAP ERP", status: "disconnected", color: "#10b981" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative ml-auto h-full w-full max-w-lg flex flex-col overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0a0d2e 0%,#06071a 100%)", borderLeft: "1px solid rgba(79,127,255,0.2)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b" style={{ borderColor: "rgba(79,127,255,0.2)" }}>
          <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: "linear-gradient(135deg,#06b6d4,#0891b2)", boxShadow: "0 0 20px rgba(6,182,212,0.35)" }}>
            <Settings size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="font-black text-white text-lg" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.06em" }}>Ayarlar</div>
            <div className="text-muted-foreground text-xs">Platform yapılandırması</div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 [&::-webkit-scrollbar]:hidden">

          {/* Profil */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <User size={14} className="text-cyan-400" />
              <div className="text-xs font-bold tracking-widest text-cyan-400" style={{ fontFamily: "'Rajdhani',sans-serif" }}>PROFİL</div>
            </div>
            <div className="rounded-xl border p-4 space-y-3" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
              <div>
                <label className="text-muted-foreground text-xs block mb-1">Şirket Adı</label>
                <input
                  defaultValue="Salexy Demo Şirketi A.Ş."
                  className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none"
                  style={{ background: "rgba(79,127,255,0.08)", border: "1px solid rgba(79,127,255,0.2)" }}
                />
              </div>
              <div>
                <label className="text-muted-foreground text-xs block mb-1">İletişim E-posta</label>
                <input
                  defaultValue="admin@salexy.com"
                  className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none"
                  style={{ background: "rgba(79,127,255,0.08)", border: "1px solid rgba(79,127,255,0.2)" }}
                />
              </div>
            </div>
          </div>

          {/* ERP Bağlantısı */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 size={14} className="text-blue-400" />
              <div className="text-xs font-bold tracking-widest text-blue-400" style={{ fontFamily: "'Rajdhani',sans-serif" }}>ERP BAĞLANTISI</div>
            </div>
            <div className="space-y-2">
              {connectedErps.map((erp) => (
                <div key={erp.name} className="flex items-center justify-between rounded-xl border p-4" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: erp.color + "20" }}>
                      {erp.status === "connected" ? <Wifi size={14} style={{ color: erp.color }} /> : <WifiOff size={14} className="text-muted-foreground" />}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{erp.name}</div>
                      <div className={`text-xs ${erp.status === "connected" ? "text-emerald-400" : "text-muted-foreground"}`}>
                        {erp.status === "connected" ? "Bağlı · Senkronize" : "Bağlantı Yok"}
                      </div>
                    </div>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-lg border transition-colors hover:bg-white/5"
                    style={{ borderColor: "rgba(79,127,255,0.25)", color: "#93c5fd" }}>
                    {erp.status === "connected" ? "Yönet" : "Bağla"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bildirimler */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Bell size={14} className="text-violet-400" />
              <div className="text-xs font-bold tracking-widest text-violet-400" style={{ fontFamily: "'Rajdhani',sans-serif" }}>BİLDİRİMLER</div>
            </div>
            <div className="rounded-xl border p-4 space-y-4" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
              {[
                { label: "E-posta Bildirimleri", val: emailNotif, set: setEmailNotif },
                { label: "SMS Bildirimleri", val: smsNotif, set: setSmsNotif },
                { label: "Push Bildirimleri", val: pushNotif, set: setPushNotif },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-white text-sm">{item.label}</span>
                  <button onClick={() => item.set(!item.val)} className="transition-colors">
                    {item.val
                      ? <ToggleRight size={24} className="text-blue-400" />
                      : <ToggleLeft size={24} className="text-muted-foreground" />
                    }
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dil & Bölge */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe size={14} className="text-emerald-400" />
              <div className="text-xs font-bold tracking-widest text-emerald-400" style={{ fontFamily: "'Rajdhani',sans-serif" }}>DİL & BÖLGE</div>
            </div>
            <div className="rounded-xl border p-4" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
              <label className="text-muted-foreground text-xs block mb-2">Arayüz Dili</label>
              <select
                defaultValue="tr"
                className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none appearance-none cursor-pointer"
                style={{ background: "rgba(79,127,255,0.08)", border: "1px solid rgba(79,127,255,0.2)" }}
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>

          {/* Güvenlik */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lock size={14} className="text-amber-400" />
              <div className="text-xs font-bold tracking-widest text-amber-400" style={{ fontFamily: "'Rajdhani',sans-serif" }}>GÜVENLİK</div>
            </div>
            <div className="rounded-xl border p-4 space-y-4" style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-sm font-semibold">İki Faktörlü Doğrulama</div>
                  <div className="text-muted-foreground text-xs mt-0.5">Hesabınızı ekstra güvenlik katmanıyla koruyun</div>
                </div>
                <button onClick={() => setTwoFa(!twoFa)} className="transition-colors">
                  {twoFa
                    ? <ToggleRight size={24} className="text-blue-400" />
                    : <ToggleLeft size={24} className="text-muted-foreground" />
                  }
                </button>
              </div>
              <button
                className="w-full py-2.5 rounded-xl text-sm font-bold border transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(245,158,11,0.3)", color: "#fbbf24" }}
              >
                Şifre Değiştir
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t" style={{ borderColor: "rgba(79,127,255,0.2)" }}>
          <button
            className="w-full py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#06b6d4,#0891b2)", boxShadow: "0 4px 20px rgba(6,182,212,0.35)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.08em" }}
          >
            DEĞİŞİKLİKLERİ KAYDET
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ──────────────────────────────────────────────────────── */
const kpis = [
  { label: "Ciro Artışı", value: "%18.6", icon: TrendingUp, color: "text-blue-400" },
  { label: "Net Kâr Artışı", value: "%28.4", icon: BarChart3, color: "text-emerald-400" },
  { label: "Risk Azalımı", value: "%42", icon: Shield, color: "text-violet-400" },
  { label: "Karar Hızı", value: "%65", icon: Target, color: "text-cyan-400" },
];

const aiEngines = [
  { id: "ai-karar", label: "AI Karar Merkezi", icon: Brain, description: "Sapmayı, nedeni ve aksiyonu gösterir", badge: "CANLI", badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30" },
  { id: "ml-tahmin", label: "ML Tahmin Motoru", icon: Activity, description: "7/30 günlük ve 3 aylık satış tahmini", badge: "Güven %88.2", badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/30" },
  { id: "simulasyon", label: "Kampanya Simülasyon", icon: Cpu, description: "Kampanyayı başlatmadan sonucunu gör", badge: "Confidence %56", badgeColor: "text-violet-400 bg-violet-400/10 border-violet-400/30" },
  { id: "oneri", label: "Otomatik Kampanya Öneri", icon: Zap, description: "7 AI Analyst ile çok katmanlı analiz", badge: "%74 Güven", badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30" },
];

export default function App() {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadModule, setUploadModule] = useState<string | null>(null);
  const [navPanel, setNavPanel] = useState<"dashboard" | "raporlar" | "ayarlar" | null>(null);

  function openUpload(moduleId?: string) {
    setUploadModule(moduleId ?? null);
    setOpenModule(null);
    setShowUpload(true);
  }

  const activeMod = modules.find((m) => m.id === openModule);

  return (
    <div
      className="min-h-screen w-full text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Inter',sans-serif", background: "linear-gradient(135deg,#06071a 0%,#0a0d2e 40%,#0d0a2e 70%,#06071a 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full blur-3xl opacity-20" style={{ width: 600, height: 600, top: -200, left: -100, background: "radial-gradient(circle,#4f7fff 0%,transparent 70%)" }} />
        <div className="absolute rounded-full blur-3xl opacity-15" style={{ width: 500, height: 500, top: "30%", right: -150, background: "radial-gradient(circle,#7c3aed 0%,transparent 70%)" }} />
        <div className="absolute rounded-full blur-3xl opacity-10" style={{ width: 400, height: 400, bottom: 100, left: "40%", background: "radial-gradient(circle,#06b6d4 0%,transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(79,127,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(79,127,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-8 py-5 border-b border-border backdrop-blur-sm" style={{ background: "rgba(6,7,26,0.8)" }}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", boxShadow: "0 0 20px rgba(79,127,255,0.4)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 12L8 7L13 12L8 17L3 12Z" fill="white" opacity="0.9" />
              <path d="M11 12L16 7L21 12L16 17L11 12Z" fill="white" opacity="0.6" />
              <circle cx="12" cy="5" r="2" fill="white" opacity="0.8" />
            </svg>
          </div>
          <div>
            <div className="font-black text-xl tracking-widest text-white" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.15em" }}>SALEXY</div>
            <div className="text-xs text-muted-foreground leading-none" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Akıllı Satış ve Pazarlama Platformu</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {(["Dashboard", "Raporlar", "Ayarlar"] as const).map((item) => {
              const key = item.toLowerCase() as "dashboard" | "raporlar" | "ayarlar";
              return (
                <button
                  key={item}
                  onClick={() => setNavPanel(navPanel === key ? null : key)}
                  className="hover:text-foreground transition-colors"
                  style={{ color: navPanel === key ? "#4f7fff" : undefined }}
                >
                  {item}
                </button>
              );
            })}
          </nav>
          <button
            onClick={() => openUpload()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", boxShadow: "0 2px 12px rgba(79,127,255,0.3)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.04em" }}
          >
            <Upload size={14} />
            VERİ YÜKLE
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs" style={{ borderColor: "rgba(79,127,255,0.3)", background: "rgba(79,127,255,0.08)", color: "#4f7fff" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>AI Aktif</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-screen-xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-6" style={{ borderColor: "rgba(124,58,237,0.4)", background: "rgba(124,58,237,0.1)", color: "#a78bfa" }}>
            <Brain size={12} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>AI & ML Platform — Veriyi Karara, Kararı Büyümeye Dönüştürün</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-none" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.02em" }}>
            Salexy{" "}
            <span style={{ background: "linear-gradient(90deg,#4f7fff,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI & ML
            </span>{" "}
            Platform
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Satış, kampanya, stok, müşteri, mağaza, kategori, sezon ve kârlılık kararlarını tek merkezden yöneten AI destekli ticari zeka platformu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="flex items-center gap-2">
                <kpi.icon size={14} className={kpi.color} />
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{kpi.value}</span>
                <span className="text-muted-foreground text-xs">{kpi.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8 Module Buttons */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom,#4f7fff,#7c3aed)" }} />
            <h2 className="font-bold text-lg text-white" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}>ANA MODÜLLER</h2>
            <div className="h-px flex-1 ml-2" style={{ background: "linear-gradient(to right,rgba(79,127,255,0.3),transparent)" }} />
            <span className="text-xs text-muted-foreground">Detay için tıklayın</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  onClick={() => setOpenModule(mod.id)}
                  className="group relative text-left rounded-2xl border p-5 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1"
                  style={{
                    background: "rgba(13,16,53,0.6)",
                    borderColor: mod.borderColor,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: mod.bgTint }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ boxShadow: `inset 0 0 0 1px ${mod.borderColor}` }} />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ background: mod.gradient, boxShadow: `0 4px 15px ${mod.glow}` }}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="font-black text-white text-sm tracking-widest mb-0.5" style={{ fontFamily: "'Rajdhani',sans-serif" }}>{mod.label}</div>
                    <div className="text-muted-foreground text-xs mb-3">{mod.sublabel}</div>
                    <div className="flex items-end gap-1.5">
                      <span className="font-black text-xl leading-none text-white" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{mod.metric}</span>
                      {mod.trend === "up" && <ArrowUpRight size={14} className="text-emerald-400 mb-0.5" />}
                      {mod.trend === "down" && <ArrowDownRight size={14} className="text-red-400 mb-0.5" />}
                    </div>
                    <div className="text-muted-foreground text-xs mt-0.5">{mod.metricLabel}</div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5">
                    <ChevronRight size={14} className="text-muted-foreground" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* AI Engines */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom,#7c3aed,#06b6d4)" }} />
            <h2 className="font-bold text-lg text-white" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}>AI MOTORLARI</h2>
            <div className="h-px flex-1 ml-2" style={{ background: "linear-gradient(to right,rgba(124,58,237,0.3),transparent)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiEngines.map((engine) => {
              const Icon = engine.icon;
              return (
                <button
                  key={engine.id}
                  className="group text-left rounded-2xl border p-6 transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-5 hover:-translate-y-0.5"
                  style={{ background: "rgba(13,16,53,0.6)", borderColor: "rgba(79,127,255,0.15)", backdropFilter: "blur(12px)" }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(79,127,255,0.3))", boxShadow: "none" }}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-white text-sm" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.03em" }}>{engine.label}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${engine.badgeColor}`} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px" }}>{engine.badge}</span>
                    </div>
                    <div className="text-muted-foreground text-xs leading-relaxed">{engine.description}</div>
                  </div>
                  <ChevronRight size={16} className="flex-shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              );
            })}
          </div>
        </section>

        {/* Upload CTA banner */}
        <section className="mb-10 rounded-2xl p-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0d1035 0%,#1a0d3d 50%,#0a1535 100%)", border: "1px solid rgba(124,58,237,0.25)" }}>
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 50%,rgba(79,127,255,0.2) 0%,transparent 60%)" }} />
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 80% 50%,rgba(124,58,237,0.3) 0%,transparent 60%)" }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs text-violet-400 mb-2 tracking-widest" style={{ fontFamily: "'JetBrains Mono',monospace" }}>ŞİRKETİNİZİ BAĞLAYIN</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2" style={{ fontFamily: "'Rajdhani',sans-serif" }}>
                ERP verinizi yükleyin,{" "}
                <span style={{ background: "linear-gradient(90deg,#4f7fff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  AI kararı üretsin.
                </span>
              </h3>
              <p className="text-muted-foreground text-sm max-w-md">
                NebimV3, SAP ERP veya Microsoft Dynamics sisteminizi bağlayın ya da Excel/CSV dosyalarınızı yükleyin. Birkaç dakikada içgörüleriniz hazır.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["NebimV3", "SAP ERP", "Dynamics 365", "Excel/CSV"].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: "rgba(79,127,255,0.25)", color: "#93c5fd", background: "rgba(79,127,255,0.08)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => openUpload()}
                className="px-6 py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#4f7fff,#7c3aed)", boxShadow: "0 4px 20px rgba(79,127,255,0.35)", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}
              >
                <Upload size={14} />
                VERİ YÜKLE
              </button>
              <button
                className="px-6 py-3 rounded-xl font-black text-sm transition-all duration-200 hover:border-violet-400/60"
                style={{ background: "transparent", border: "1px solid rgba(124,58,237,0.4)", color: "#c4caff", fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}
              >
                DEMO TALEP ET
              </button>
            </div>
          </div>
        </section>

        {/* Workflow strip */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {["TAHMİN ET", "SİMÜLE ET", "KARAR VER", "KAZAN"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-3">
              <div className="px-5 py-2 rounded-full text-xs font-black tracking-widest text-white" style={{ fontFamily: "'Rajdhani',sans-serif", background: `linear-gradient(90deg,hsl(${220 + i * 30}deg 80% 60%),hsl(${250 + i * 30}deg 80% 60%))`, boxShadow: `0 2px 12px hsla(${220 + i * 30}deg,80%,60%,0.3)` }}>
                {step}
              </div>
              {i < arr.length - 1 && <ChevronRight size={14} className="text-muted-foreground" />}
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 mt-12 border-t py-6 px-8 flex items-center justify-between" style={{ borderColor: "rgba(79,127,255,0.1)", background: "rgba(6,7,26,0.6)" }}>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <span className="font-black text-white tracking-widest text-sm" style={{ fontFamily: "'Rajdhani',sans-serif" }}>SALEXY</span>
          <span>· Akıllı Satış ve Pazarlama Platformu</span>
        </div>
        <div className="text-muted-foreground text-xs" style={{ fontFamily: "'JetBrains Mono',monospace" }}>ERP Verisini Öğrenen, Karara Dönüştüren Zeka</div>
      </footer>

      {/* Module detail panel */}
      {openModule && activeMod && (
        <ModulePanel mod={activeMod} onClose={() => setOpenModule(null)} onUpload={() => openUpload(openModule)} />
      )}

      {/* Upload modal */}
      {showUpload && (
        <UploadModal initialModule={uploadModule} onClose={() => { setShowUpload(false); setUploadModule(null); }} />
      )}

      {/* Nav panels */}
      {navPanel === "dashboard" && <DashboardPanel onClose={() => setNavPanel(null)} />}
      {navPanel === "raporlar" && <RaporlarPanel onClose={() => setNavPanel(null)} />}
      {navPanel === "ayarlar" && <AyarlarPanel onClose={() => setNavPanel(null)} />}
    </div>
  );
}
