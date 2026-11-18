import { BrandLogo } from '@/components/atoms/BrandLogo';
import { Badge } from '@/components/atoms/Badge';
import { siteConfig, type DownloadCtaConfig } from '@/config';

export interface FooterProps {
  onPlaceholderCta: (cta: DownloadCtaConfig) => void;
}

/**
 * Footer gelap (`slate-950`) menampilkan logo wordmark `icon-text.png` kontras tinggi,
 * navigasi cepat, tautan unduhan terpusat, serta catatan hak cipta.
 */
export function Footer({ onPlaceholderCta }: FooterProps) {
  const downloadLinks = [siteConfig.hero.primaryCta, siteConfig.hero.secondaryCta];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <a
              href="#beranda"
              aria-label={siteConfig.brand.homeAriaLabel}
              className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <BrandLogo surface="dark" size="md" />
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.footer.description}
            </p>
            <Badge variant="dark">{siteConfig.brand.versionBadge}</Badge>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              {siteConfig.footer.navigationHeading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navbar.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-9 items-center text-sm text-slate-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              {siteConfig.footer.downloadHeading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {downloadLinks.map((cta) => (
                <li key={cta.id}>
                  {cta.isPlaceholder ? (
                    <button
                      type="button"
                      onClick={() => onPlaceholderCta(cta)}
                      className="inline-flex min-h-9 items-center text-sm text-slate-300 underline-offset-4 hover:text-amber-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg cursor-pointer"
                    >
                      {cta.label} ({cta.sublabel})
                    </button>
                  ) : (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center text-sm text-slate-300 underline-offset-4 hover:text-amber-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
                    >
                      {cta.label} ({cta.sublabel})
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800/90 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.footer.copyrightText}</p>
          <p>{siteConfig.footer.releaseNote}</p>
        </div>
      </div>
    </footer>
  );
}
