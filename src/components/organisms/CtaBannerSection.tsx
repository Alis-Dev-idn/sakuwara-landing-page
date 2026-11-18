import { Badge } from '@/components/atoms/Badge';
import { BrandLogo } from '@/components/atoms/BrandLogo';
import { DownloadCtaButton } from '@/components/molecules/DownloadCtaButton';
import { siteConfig, type DownloadCtaConfig } from '@/config';

export interface CtaBannerSectionProps {
  onPlaceholderCta: (cta: DownloadCtaConfig) => void;
}

/**
 * Banner ajakan unduh penutup berlatar gradien Emerald Deep agar logo `icon-text.png`
 * tampil kontras dan memicu konversi di akhir halaman.
 */
export function CtaBannerSection({ onPlaceholderCta }: CtaBannerSectionProps) {
  return (
    <section id="unduh" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-deep via-brand-primary to-teal-700 px-6 py-12 text-center text-white shadow-2xl shadow-emerald-950/20 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <BrandLogo surface="dark" size="lg" />

            <Badge variant="dark">{siteConfig.ctaBanner.eyebrow}</Badge>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {siteConfig.ctaBanner.title}
            </h2>

            <p className="max-w-prose text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              {siteConfig.ctaBanner.subtitle}
            </p>

            <div className="mt-2 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <DownloadCtaButton
                cta={siteConfig.ctaBanner.primaryCta}
                variant="accent-light"
                size="lg"
                onPlaceholderClick={onPlaceholderCta}
              />
              <DownloadCtaButton
                cta={siteConfig.ctaBanner.secondaryCta}
                variant="secondary"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50"
                onPlaceholderClick={onPlaceholderCta}
              />
            </div>

            <p className="text-xs text-emerald-100/80">{siteConfig.ctaBanner.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
