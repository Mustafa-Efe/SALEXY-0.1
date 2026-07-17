import {
  Activity,
  BarChart3,
  Brain,
  Calendar,
  Cpu,
  DollarSign,
  Megaphone,
  Package,
  Shield,
  Store,
  Tag,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavPanelKey = "dashboard" | "raporlar" | "ayarlar";

export interface ModuleStat {
  label: string;
  value: string;
  delta: string;
  up: boolean;
}

export interface ModuleDetail {
  headline: string;
  sub: string;
  stats: ModuleStat[];
  insight: string;
  actions: string[];
}

export interface Module {
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
  description: string;
  detail: ModuleDetail;
  uploadFields: string[];
}

export const modules: Module[] = [
  {
    id: "satis",
    label: "SATIŞ",
    sublabel: "Sales Analytics",
    icon: TrendingUp,
    metric: "%28.4",
    metricLabel: "vs geçen ay",
    trend: "up",
    gradient: "linear-gradient(135deg,#4f7fff,#06b6d4)",
    glow: "rgba(79,127,255,0.35)",
    borderColor: "rgba(79,127,255,0.3)",
    bgTint: "rgba(79,127,255,0.08)",
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
    id: "kampanya",
    label: "KAMPANYA",
    sublabel: "Campaign Engine",
    icon: Megaphone,
    metric: "%31.7",
    metricLabel: "Başarı Oranı",
    trend: "up",
    gradient: "linear-gradient(135deg,#7c3aed,#a855f7)",
    glow: "rgba(124,58,237,0.35)",
    borderColor: "rgba(124,58,237,0.3)",
    bgTint: "rgba(124,58,237,0.08)",
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
    id: "stok",
    label: "STOK",
    sublabel: "Inventory Control",
    icon: Package,
    metric: "₺24.8M",
    metricLabel: "Stok Değeri",
    trend: "neutral",
    gradient: "linear-gradient(135deg,#06b6d4,#0891b2)",
    glow: "rgba(6,182,212,0.35)",
    borderColor: "rgba(6,182,212,0.3)",
    bgTint: "rgba(6,182,212,0.08)",
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
    id: "musteri",
    label: "MÜŞTERİ",
    sublabel: "Customer Intelligence",
    icon: Users,
    metric: "8.643",
    metricLabel: "Aktif Müşteri",
    trend: "up",
    gradient: "linear-gradient(135deg,#10b981,#34d399)",
    glow: "rgba(16,185,129,0.35)",
    borderColor: "rgba(16,185,129,0.3)",
    bgTint: "rgba(16,185,129,0.08)",
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
    id: "magaza",
    label: "MAĞAZA",
    sublabel: "Store Performance",
    icon: Store,
    metric: "326",
    metricLabel: "Toplam Mağaza",
    trend: "up",
    gradient: "linear-gradient(135deg,#f97316,#fb923c)",
    glow: "rgba(249,115,22,0.35)",
    borderColor: "rgba(249,115,22,0.3)",
    bgTint: "rgba(249,115,22,0.08)",
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
    id: "kategori",
    label: "KATEGORİ",
    sublabel: "Category Analysis",
    icon: Tag,
    metric: "%27.3",
    metricLabel: "Performans",
    trend: "up",
    gradient: "linear-gradient(135deg,#ec4899,#f43f5e)",
    glow: "rgba(236,72,153,0.35)",
    borderColor: "rgba(236,72,153,0.3)",
    bgTint: "rgba(236,72,153,0.08)",
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
    id: "sezon",
    label: "SEZON",
    sublabel: "Season Management",
    icon: Calendar,
    metric: "%22.6",
    metricLabel: "Sezon Performansı",
    trend: "neutral",
    gradient: "linear-gradient(135deg,#6366f1,#818cf8)",
    glow: "rgba(99,102,241,0.35)",
    borderColor: "rgba(99,102,241,0.3)",
    bgTint: "rgba(99,102,241,0.08)",
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
    id: "karlilik",
    label: "KÂRLILIK",
    sublabel: "Profit & Cost",
    icon: DollarSign,
    metric: "%18.6",
    metricLabel: "Brüt Kâr Marjı",
    trend: "up",
    gradient: "linear-gradient(135deg,#f59e0b,#fbbf24)",
    glow: "rgba(245,158,11,0.35)",
    borderColor: "rgba(245,158,11,0.3)",
    bgTint: "rgba(245,158,11,0.08)",
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

export const erpSystems = [
  { id: "nebim", name: "NebimV3 ERP", logo: "N", color: "#4f7fff", description: "Nebim V3 entegrasyonu" },
  { id: "sap", name: "SAP ERP", logo: "SAP", color: "#10b981", description: "SAP S/4HANA veya ECC" },
  { id: "dynamics", name: "Microsoft Dynamics 365", logo: "D365", color: "#7c3aed", description: "Dynamics 365 Business Central" },
  { id: "manual", name: "Manuel Yükleme", logo: "XLS", color: "#f97316", description: "Excel / CSV dosya yükleme" },
];

export const kpis = [
  { label: "Ciro Artışı", value: "%18.6", icon: TrendingUp, color: "text-blue-400" },
  { label: "Net Kâr Artışı", value: "%28.4", icon: BarChart3, color: "text-emerald-400" },
  { label: "Risk Azalımı", value: "%42", icon: Shield, color: "text-violet-400" },
  { label: "Karar Hızı", value: "%65", icon: Target, color: "text-cyan-400" },
];

export const aiEngines = [
  { id: "ai-karar", label: "AI Karar Merkezi", icon: Brain, description: "Sapmayı, nedeni ve aksiyonu gösterir", badge: "CANLI", badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30" },
  { id: "ml-tahmin", label: "ML Tahmin Motoru", icon: Activity, description: "7/30 günlük ve 3 aylık satış tahmini", badge: "Güven %88.2", badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/30" },
  { id: "simulasyon", label: "Kampanya Simülasyon", icon: Cpu, description: "Kampanyayı başlatmadan sonucunu gör", badge: "Confidence %56", badgeColor: "text-violet-400 bg-violet-400/10 border-violet-400/30" },
  { id: "oneri", label: "Otomatik Kampanya Öneri", icon: Zap, description: "7 AI Analyst ile çok katmanlı analiz", badge: "%74 Güven", badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30" },
];
