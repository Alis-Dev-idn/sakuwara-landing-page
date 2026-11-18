import { motion } from 'motion/react';
import { Badge } from '@/components/atoms/Badge';
import { FeatureIcon } from '@/components/atoms/FeatureIcon';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { siteConfig } from '@/config';

/**
 * Bento grid asimetris yang merangkum 4 pilar kekuatan utama Sakuwara
 * tanpa tata letak kartu seragam yang hambar.
 */
export function PillarsBentoSection() {
  return (
    <section id="keunggulan" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={siteConfig.pillars.eyebrow}
          title={siteConfig.pillars.title}
          subtitle={siteConfig.pillars.subtitle}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {siteConfig.pillars.items.map((item, index) => {
            const isFeatured = item.variant === 'featured';
            const colSpanClass = isFeatured
              ? 'md:col-span-2 lg:col-span-6 lg:row-span-2'
              : index === 3
                ? 'md:col-span-2 lg:col-span-6'
                : 'lg:col-span-3';

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 ${colSpanClass} ${
                  isFeatured
                    ? 'bg-gradient-to-br from-emerald-deep via-brand-primary to-emerald-700 text-white shadow-xl shadow-emerald-950/15'
                    : 'border border-slate-200/90 bg-surface text-ink shadow-xs transition-shadow hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant={isFeatured ? 'dark' : 'emerald'}>{item.badge}</Badge>
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                        isFeatured
                          ? 'bg-white/15 text-amber-300'
                          : 'bg-emerald-soft text-brand-primary'
                      }`}
                    >
                      <FeatureIcon name={item.icon} className="h-5 w-5" />
                    </span>
                  </div>

                  <h3
                    className={`mt-6 font-extrabold tracking-tight ${
                      isFeatured ? 'text-2xl sm:text-3xl text-white' : 'text-xl text-ink'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed sm:text-base ${
                      isFeatured ? 'text-emerald-50/90' : 'text-ink-muted'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className={`mt-8 rounded-2xl p-4 ${
                    isFeatured
                      ? 'border border-white/20 bg-white/10 backdrop-blur-xs'
                      : 'border border-slate-100 bg-surface-muted/70'
                  }`}
                >
                  <span
                    className={`block text-2xl font-extrabold tabular-nums ${
                      isFeatured ? 'text-amber-300' : 'text-brand-primary'
                    }`}
                  >
                    {item.highlightMetric}
                  </span>
                  <span
                    className={`mt-0.5 block text-xs font-medium ${
                      isFeatured ? 'text-emerald-50' : 'text-ink-muted'
                    }`}
                  >
                    {item.highlightLabel}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
