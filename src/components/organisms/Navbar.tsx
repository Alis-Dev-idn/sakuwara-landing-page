import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/atoms/BrandLogo';
import { Button } from '@/components/atoms/Button';
import { siteConfig } from '@/config';

/**
 * Header navigasi lengket dengan logo adaptif permukaan terang dan drawer responsif mobile.
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#beranda"
          aria-label={siteConfig.brand.homeAriaLabel}
          className="inline-flex min-h-11 items-center rounded-xl px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          <BrandLogo surface="light" size="md" />
        </a>

        <nav aria-label={siteConfig.navbar.ariaLabel} className="hidden items-center gap-1 md:flex">
          {siteConfig.navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-xl px-3.5 text-sm font-semibold text-ink-muted transition-colors hover:bg-emerald-soft/70 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#unduh" variant="primary" size="md">
            {siteConfig.navbar.ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen
              ? siteConfig.navbar.closeMenuAriaLabel
              : siteConfig.navbar.openMenuAriaLabel
          }
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-surface text-ink hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent md:hidden cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          aria-label={siteConfig.navbar.ariaLabel}
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white/95 px-4 pt-3 pb-5 shadow-xl backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            {siteConfig.navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3.5 text-sm font-semibold text-ink hover:bg-emerald-soft hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-slate-100">
              <Button
                href="#unduh"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {siteConfig.navbar.ctaLabel}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
