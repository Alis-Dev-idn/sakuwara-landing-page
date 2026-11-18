import { motion } from 'motion/react';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { siteConfig } from '@/config';

/**
 * Section alur 3 langkah ringkas untuk memulai mengelola keuangan dengan Sakuwara.
 */
export function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={siteConfig.howItWorks.eyebrow}
          title={siteConfig.howItWorks.title}
          subtitle={siteConfig.howItWorks.subtitle}
        />

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {siteConfig.howItWorks.steps.map((step, index) => (
            <motion.article
              key={step.stepNumber}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="relative flex flex-col gap-4 rounded-3xl border border-slate-200/90 bg-canvas p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary text-base font-extrabold tabular-nums text-white shadow-sm">
                  {step.stepNumber}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1 flex-1 ml-4 rounded-full bg-gradient-to-r from-emerald-300/80 to-transparent"
                />
              </div>

              <h3 className="text-lg font-extrabold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
