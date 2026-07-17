import { Sparkles } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
}

export function EmptyState({ title, description, actionLabel }: EmptyStateProps) {
  return (
    <div className="rounded-[24px] border border-dashed border-white/15 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_70%),rgba(8,12,32,0.75)] p-6 text-center shadow-[0_24px_60px_rgba(3,8,24,0.28)]">
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-500/20 text-violet-100 shadow-[0_0_20px_rgba(124,58,237,0.18)]">
        <Sparkles size={18} />
      </div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {actionLabel ? <div className="mt-4 text-[11px] uppercase tracking-[0.25em] text-violet-200">{actionLabel}</div> : null}
    </div>
  );
}
