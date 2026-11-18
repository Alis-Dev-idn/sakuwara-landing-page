import type { ReactNode } from 'react';

export type BadgeVariant = 'emerald' | 'gold' | 'neutral' | 'dark';

const BADGE_CLASSES: Record<BadgeVariant, string> = {
  emerald: 'bg-emerald-soft text-brand-primary border border-emerald-200/80',
  gold: 'bg-brand-gold-soft text-amber-900 border border-amber-200/80',
  neutral: 'bg-surface-muted text-ink-muted border border-slate-200',
  dark: 'bg-white/15 text-white border border-white/25',
};

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

/**
 * Pill badge atomik untuk eyebrow, status fitur, dan metrik singkat.
 */
export function Badge({ variant = 'emerald', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${BADGE_CLASSES[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
