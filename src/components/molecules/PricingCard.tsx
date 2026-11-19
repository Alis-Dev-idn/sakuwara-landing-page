import { Check } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { DownloadCtaButton } from '@/components/molecules/DownloadCtaButton';
import type { DownloadCtaConfig, PricingPlanConfig } from '@/config';

export interface PricingCardProps {
  plan: PricingPlanConfig;
  billingPeriod: 'monthly' | 'yearly';
  onPlaceholderCta: (cta: DownloadCtaConfig) => void;
}

const ACCENT_STYLES: Record<
  PricingPlanConfig['accent'],
  {
    card: string;
    title: string;
    checkBg: string;
    badgeVariant: 'neutral' | 'emerald' | 'gold';
    ctaVariant: 'primary' | 'secondary';
  }
> = {
  neutral: {
    card: 'border border-slate-200/90 bg-surface shadow-sm',
    title: 'text-slate-700',
    checkBg: 'bg-slate-100 text-slate-700',
    badgeVariant: 'neutral',
    ctaVariant: 'secondary',
  },
  sky: {
    card: 'border border-sky-200/90 bg-surface shadow-sm hover:border-sky-300',
    title: 'text-sky-700',
    checkBg: 'bg-sky-50 text-sky-700',
    badgeVariant: 'neutral',
    ctaVariant: 'secondary',
  },
  emerald: {
    card: 'border-2 border-brand-primary bg-surface ring-4 ring-emerald-500/10 shadow-xl shadow-emerald-950/10',
    title: 'text-brand-primary',
    checkBg: 'bg-emerald-soft text-brand-primary',
    badgeVariant: 'emerald',
    ctaVariant: 'primary',
  },
  amber: {
    card: 'border border-amber-300/90 bg-surface shadow-md shadow-amber-950/5',
    title: 'text-amber-700',
    checkBg: 'bg-amber-soft text-amber-800',
    badgeVariant: 'gold',
    ctaVariant: 'secondary',
  },
};

/**
 * Kartu paket langganan Sakuwara yang menampilkan harga bulanan/tahunan,
 * harga coret, badge diskon, daftar fitur, dan tombol CTA terkonfigurasi.
 */
export function PricingCard({ plan, billingPeriod, onPlaceholderCta }: PricingCardProps) {
  const details = billingPeriod === 'yearly' ? plan.yearly : plan.monthly;
  const styles = ACCENT_STYLES[plan.accent];

  return (
    <article
      className={`relative flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-200 ${styles.card}`}
    >
      <div>
        <div className="flex min-h-7 items-center justify-between gap-2">
          <span className={`text-xs font-extrabold uppercase tracking-wider ${styles.title}`}>
            {plan.title}
          </span>
          {plan.badge && <Badge variant={styles.badgeVariant}>{plan.badge}</Badge>}
        </div>

        <p className="mt-2 min-h-10 text-xs leading-relaxed text-ink-muted">{plan.subtitle}</p>

        <div className="mt-5 border-t border-slate-100 pt-5">
          {details.originalPrice && (
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-ink-muted line-through tabular-nums">
                {details.originalPrice}
              </span>
              {details.discountTag && (
                <span className="inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-700">
                  {details.discountTag}
                </span>
              )}
            </div>
          )}

          <div className="text-2xl font-extrabold tracking-tight text-ink tabular-nums sm:text-3xl">
            {details.price}
          </div>
          <p className="mt-1 text-xs font-medium text-ink-muted">{details.periodText}</p>
        </div>

        <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-ink">
              <span
                className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${styles.checkBg}`}
              >
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-2">
        <DownloadCtaButton
          cta={plan.cta}
          variant={styles.ctaVariant}
          size="md"
          className="w-full"
          onPlaceholderClick={onPlaceholderCta}
        />
      </div>
    </article>
  );
}
