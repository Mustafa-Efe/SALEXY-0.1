import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  rightSlot?: ReactNode;
  accentClassName?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, rightSlot, accentClassName = "bg-gradient-to-b from-blue-500 to-violet-500" }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className={`h-6 w-1 rounded-full ${accentClassName}`} />
        <div>
          {eyebrow ? <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</div> : null}
          <h2 className="font-bold text-lg text-white" style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.05em" }}>
            {title}
          </h2>
          {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
      </div>
      {rightSlot ? <div className="hidden sm:block">{rightSlot}</div> : null}
    </div>
  );
}
