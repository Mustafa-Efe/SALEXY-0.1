interface LoadingSkeletonProps {
  className?: string;
}

export function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return <div className={`animate-pulse rounded-[16px] bg-gradient-to-r from-white/10 via-white/20 to-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${className}`} />;
}
