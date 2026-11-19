import { CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ActionIcon } from '@/components/atoms/ActionIcon';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { DownloadCtaButton } from '@/components/molecules/DownloadCtaButton';
import { PhoneMockup } from '@/components/molecules/PhoneMockup';
import { heroConfig, type DownloadCtaConfig } from '@/config';

export interface HeroSectionProps {
  onPlaceholderCta: (cta: DownloadCtaConfig) => void;
}

/**
 * Bagian Hero asimetris dengan headline utama, dual CTA unduhan Android,
 * trust pills, serta panggung mockup swipeable Sakuwara dan floating telemetry pills.
 */
export function HeroSection({ onPlaceholderCta }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      aria-label={heroConfig.sectionAriaLabel}
      className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.16),transparent_55%),radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.1),transparent_50%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6 lg:col-span-7"
        >
          <Badge variant="emerald">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
            <span>{heroConfig.eyebrow}</span>
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            {heroConfig.title}{' '}
            <span className="bg-gradient-to-r from-brand-primary via-emerald-600 to-brand-gold bg-clip-text text-transparent">
              {heroConfig.titleHighlight}
            </span>
          </h1>

          <p className="max-w-prose text-base leading-relaxed text-ink-muted sm:text-lg">
            {heroConfig.subtitle}
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <DownloadCtaButton
              cta={heroConfig.primaryCta}
              variant="primary"
              size="lg"
              onPlaceholderClick={onPlaceholderCta}
            />
            <DownloadCtaButton
              cta={heroConfig.secondaryCta}
              variant="secondary"
              size="lg"
              onPlaceholderClick={onPlaceholderCta}
            />
            <Button href={heroConfig.exploreCta.href} variant="ghost" size="lg">
              <span>{heroConfig.exploreCta.label}</span>
              <ActionIcon name={heroConfig.exploreCta.icon ?? 'arrow-down-right'} />
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-2">
            {heroConfig.trustPills.map((pill) => (
              <li
                key={pill}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
                <span>{pill}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center lg:col-span-5"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl"
          />

          <PhoneMockup
            screenshots={heroConfig.phoneFrame.screenshots}
            frameConfig={heroConfig.phoneFrame}
          />

          <div className="mt-4 grid w-full max-w-sm grid-cols-2 gap-3 lg:hidden">
            {heroConfig.floatingMetrics.map((metric) => (
              <div
                key={metric.id}
                className="rounded-2xl border border-slate-200/90 bg-surface p-3 shadow-sm"
              >
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                  {metric.label}
                </span>
                <span className="mt-1 block text-sm font-bold tabular-nums text-ink">
                  {metric.value}
                </span>
                <span
                  className={`mt-0.5 block text-[11px] font-medium ${
                    metric.tone === 'emerald' ? 'text-brand-primary' : 'text-amber-700'
                  }`}
                >
                  {metric.trend}
                </span>
              </div>
            ))}
          </div>

          {heroConfig.floatingMetrics[0] && (
            <div className="pointer-events-none absolute top-14 -left-4 hidden rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-md lg:block">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                {heroConfig.floatingMetrics[0].label}
              </span>
              <span className="mt-0.5 block text-base font-extrabold tabular-nums text-ink">
                {heroConfig.floatingMetrics[0].value}
              </span>
              <span className="mt-0.5 inline-flex items-center rounded-full bg-emerald-soft px-2 py-0.5 text-[11px] font-semibold text-brand-primary">
                {heroConfig.floatingMetrics[0].trend}
              </span>
            </div>
          )}

          {heroConfig.floatingMetrics[1] && (
            <div className="pointer-events-none absolute -right-2 bottom-24 hidden rounded-2xl border border-amber-200/90 bg-white/95 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-md lg:block">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                {heroConfig.floatingMetrics[1].label}
              </span>
              <span className="mt-0.5 block text-base font-extrabold tabular-nums text-ink">
                {heroConfig.floatingMetrics[1].value}
              </span>
              <span className="mt-0.5 inline-flex items-center rounded-full bg-amber-soft px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                {heroConfig.floatingMetrics[1].trend}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
