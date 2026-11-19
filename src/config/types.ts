/**
 * Kontrak tipe konfigurasi terpusat untuk seluruh teks, tautan, ikon tombol,
 * frame HP, paket harga, dan aset landing page Sakuwara.
 */

export type FeatureCategoryId = 'all' | 'daily' | 'planning' | 'wealth';

export type FeatureIconKey =
  | 'layout-dashboard'
  | 'arrow-left-right'
  | 'wallet'
  | 'piggy-bank'
  | 'gauge'
  | 'receipt'
  | 'calendar-check'
  | 'landmark'
  | 'bar-chart-3'
  | 'tags'
  | 'lightbulb';

export type PillarIconKey = 'trending-up' | 'wallet' | 'shield-check' | 'file-spreadsheet';

export type ButtonIconKey =
  | 'smartphone'
  | 'download'
  | 'sparkles'
  | 'arrow-right'
  | 'arrow-down-right'
  | 'external-link'
  | 'check-circle'
  | 'crown'
  | 'zap'
  | 'shield-check'
  | 'none';

export interface DownloadCtaConfig {
  id: 'google-play' | 'apk' | string;
  label: string;
  sublabel: string;
  href: string;
  isPlaceholder: boolean;
  ariaLabel: string;
  icon?: ButtonIconKey;
}

export interface ActionLinkConfig {
  label: string;
  href: string;
  icon?: ButtonIconKey;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroFloatingMetric {
  id: string;
  label: string;
  value: string;
  trend: string;
  tone: 'emerald' | 'amber';
}

export interface PillarItemConfig {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlightMetric: string;
  highlightLabel: string;
  icon: PillarIconKey;
  variant: 'featured' | 'standard';
}

export interface FeatureScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface PhoneFrameConfig {
  autoSlide: boolean;
  autoSlideIntervalMs: number;
  badgeLabel: string;
  prevSlideAriaLabel: string;
  nextSlideAriaLabel: string;
  slideDotAriaPrefix: string;
}

export interface HeroPhoneFrameConfig extends PhoneFrameConfig {
  screenshots: FeatureScreenshot[];
}

export interface FeatureModuleConfig {
  id: string;
  name: string;
  shortLabel: string;
  category: Exclude<FeatureCategoryId, 'all'>;
  icon: FeatureIconKey;
  tagline: string;
  description: string;
  highlights: string[];
  metricBadge: string;
  screenshots: FeatureScreenshot[];
}

export interface FeatureCategoryFilter {
  id: FeatureCategoryId;
  label: string;
}

export interface StepItemConfig {
  stepNumber: string;
  title: string;
  description: string;
}

export interface PricingPeriodDetails {
  price: string;
  originalPrice?: string;
  discountTag?: string;
  periodText: string;
}

export interface PricingPlanConfig {
  id: 'free' | 'basic' | 'premium' | 'max';
  title: string;
  badge?: string;
  subtitle: string;
  accent: 'neutral' | 'sky' | 'emerald' | 'amber';
  featured?: boolean;
  monthly: PricingPeriodDetails;
  yearly: PricingPeriodDetails;
  features: string[];
  cta: DownloadCtaConfig;
}

export interface PricingConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  monthlyLabel: string;
  yearlyLabel: string;
  yearlyBadge: string;
  footnote: string;
  plans: PricingPlanConfig[];
}

export interface FaqItemConfig {
  id: string;
  question: string;
  answer: string;
}

export interface DownloadNoticeConfig {
  title: string;
  description: string;
  targetLabel: string;
  placeholderUrlLabel: string;
  copyButtonLabel: string;
  copiedLabel: string;
  closeButtonLabel: string;
  helperNote: string;
}

export interface BrandConfig {
  name: string;
  namePrefix: string;
  nameHighlight: string;
  nameSuffix: string;
  tagline: string;
  logoAlt: string;
  logoWordmarkAlt: string;
  homeAriaLabel: string;
  versionBadge: string;
}

export interface SeoConfig {
  title: string;
  description: string;
}

export interface NavbarConfig {
  ariaLabel: string;
  links: NavLinkItem[];
  ctaLabel: string;
  ctaHref: string;
  ctaIcon: ButtonIconKey;
  openMenuAriaLabel: string;
  closeMenuAriaLabel: string;
}

export interface HeroConfig {
  sectionAriaLabel: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  primaryCta: DownloadCtaConfig;
  secondaryCta: DownloadCtaConfig;
  exploreCta: ActionLinkConfig;
  trustPills: string[];
  floatingMetrics: HeroFloatingMetric[];
  phoneFrame: HeroPhoneFrameConfig;
}

export interface PillarsConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: PillarItemConfig[];
}

export interface ShowcaseConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  moduleListAriaLabel: string;
  mobileModuleListAriaLabel: string;
  categoryFilterAriaLabel: string;
  categories: FeatureCategoryFilter[];
  photoBadgeLabel: string;
  slideLabelPrefix: string;
  imageFallbackText: string;
  emptyFilterTitle: string;
  emptyFilterResetLabel: string;
  highlightsHeading: string;
  phoneFrame: PhoneFrameConfig;
}

export interface HowItWorksConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: StepItemConfig[];
}

export interface FaqConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  supportBadge: string;
  supportText: string;
  emptyMessage: string;
  items: FaqItemConfig[];
}

export interface CtaBannerConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: DownloadCtaConfig;
  secondaryCta: DownloadCtaConfig;
  footnote: string;
}

export interface FooterConfig {
  description: string;
  navigationHeading: string;
  downloadHeading: string;
  copyrightText: string;
  releaseNote: string;
}

export interface SiteConfig {
  seo: SeoConfig;
  brand: BrandConfig;
  navbar: NavbarConfig;
  hero: HeroConfig;
  pillars: PillarsConfig;
  showcase: ShowcaseConfig;
  howItWorks: HowItWorksConfig;
  pricing: PricingConfig;
  faq: FaqConfig;
  ctaBanner: CtaBannerConfig;
  footer: FooterConfig;
  downloadNotice: DownloadNoticeConfig;
}
