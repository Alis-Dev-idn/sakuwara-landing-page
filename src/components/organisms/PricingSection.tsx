import { useState } from 'react';
import { PricingCard } from '@/components/molecules/PricingCard';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { pricingConfig, type DownloadCtaConfig } from '@/config';

export interface PricingSectionProps {
  onPlaceholderCta: (cta: DownloadCtaConfig) => void;
}

/**
 * Seksi Harga 4 paket Sakuwara (Gratis, Basic, Premium, Max) dengan toggle
 * siklus tagihan Bulanan / Tahunan dan tombol CTA terkonfigurasi.
 */
export function PricingSection({ onPlaceholderCta }: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="harga" className="bg-canvas py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={pricingConfig.eyebrow}
          title={pricingConfig.title}
          subtitle={pricingConfig.subtitle}
        />

        <div className="mt-8 flex justify-center">
          <div
            role="group"
            aria-label={pricingConfig.eyebrow}
            className="inline-flex items-center rounded-2xl border border-slate-200 bg-surface-muted p-1 shadow-xs"
          >
            <button
              type="button"
              aria-pressed={billingPeriod === 'monthly'}
              onClick={() => setBillingPeriod('monthly')}
              className={`min-h-10 rounded-xl px-4 py-2 text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                billingPeriod === 'monthly'
                  ? 'bg-surface text-ink shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {pricingConfig.monthlyLabel}
            </button>
            <button
              type="button"
              aria-pressed={billingPeriod === 'yearly'}
              onClick={() => setBillingPeriod('yearly')}
              className={`inline-flex min-h-10 items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                billingPeriod === 'yearly'
                  ? 'bg-surface text-ink shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <span>{pricingConfig.yearlyLabel}</span>
              <span className="rounded-full bg-emerald-soft px-2 py-0.5 text-[11px] font-bold text-brand-primary">
                {pricingConfig.yearlyBadge}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingConfig.plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
              onPlaceholderCta={onPlaceholderCta}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted">{pricingConfig.footnote}</p>
      </div>
    </section>
  );
}
