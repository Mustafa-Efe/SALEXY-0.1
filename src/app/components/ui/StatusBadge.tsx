interface StatusBadgeProps {
  label: string;
  tone?: "default" | "success" | "warning" | "danger";
}

export function StatusBadge({ label, tone = "default" }: StatusBadgeProps) {
  const toneClasses = {
    default: "border-white/10 bg-white/5 text-muted-foreground",
    success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    warning: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    danger: "border-rose-400/20 bg-rose-400/10 text-rose-300",
  };

  return <span className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${toneClasses[tone]}`}>{label}</span>;
}
