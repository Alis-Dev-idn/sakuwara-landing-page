import { brandConfig, seoConfig } from './brandConfig';
import { ctaBannerConfig } from './ctaBannerConfig';
import { downloadNoticeConfig } from './downloadNoticeConfig';
import { faqConfig } from './faqConfig';
import { footerConfig } from './footerConfig';
import { heroConfig } from './heroConfig';
import { howItWorksConfig } from './howItWorksConfig';
import { navbarConfig } from './navbarConfig';
import { pillarsConfig } from './pillarsConfig';
import { pricingConfig } from './pricingConfig';
import { showcaseConfig } from './showcaseConfig';
import type { SiteConfig } from './types';

/**
 * Agregasi seluruh konfigurasi per lokasi ke satu objek `siteConfig`.
 * Untuk mengedit tiap bagian dengan cepat, buka file config masing-masing di `src/config/`.
 */
export const siteConfig: SiteConfig = {
  seo: seoConfig,
  brand: brandConfig,
  navbar: navbarConfig,
  hero: heroConfig,
  pillars: pillarsConfig,
  showcase: showcaseConfig,
  howItWorks: howItWorksConfig,
  pricing: pricingConfig,
  faq: faqConfig,
  ctaBanner: ctaBannerConfig,
  footer: footerConfig,
  downloadNotice: downloadNoticeConfig,
};
