import type { ReactNode } from "react";
import { X, type LucideIcon } from "lucide-react";

interface PanelShellProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  iconGradient: string;
  iconGlow?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export function PanelShell({ title, subtitle, icon: Icon, iconGradient, iconGlow, onClose, children, footer }: PanelShellProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative ml-auto flex h-full w-full max-w-lg flex-col overflow-hidden border-l border-white/10" style={{ background: "linear-gradient(160deg,#0a0d2e 0%,#06071a 100%)" }}>
        <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: iconGradient, boxShadow: iconGlow ? `0 0 20px ${iconGlow}` : undefined }}>
            <Icon size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="text-lg font-black text-white" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.06em" }}>
              {title}
            </div>
            {subtitle ? <div className="text-xs text-muted-foreground">{subtitle}</div> : null}
          </div>
          <button onClick={onClose} className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 [&::-webkit-scrollbar]:hidden">{children}</div>
        {footer ? <div className="border-t border-white/10 px-6 py-5">{footer}</div> : null}
      </div>
    </div>
  );
}
