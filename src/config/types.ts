/**
 * Kontrak tipe konfigurasi terpusat untuk seluruh teks, tautan, dan aset
 * landing page Sakuwara.
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

export interface DownloadCtaConfig {
  id: 'google-play' | 'apk';
  label: string;
  sublabel: string;
  href: string;
  isPlaceholder: boolean;
  ariaLabel: string;
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
  videoSrc?: string;
  videoLabel?: string;
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

export interface SiteConfig {
  seo: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    namePrefix: string;
    nameHighlight: string;
    nameSuffix: string;
    tagline: string;
    logoAlt: string;
    logoWordmarkAlt: string;
    homeAriaLabel: string;
    versionBadge: string;
  };
  navbar: {
    ariaLabel: string;
    links: NavLinkItem[];
    ctaLabel: string;
    openMenuAriaLabel: string;
    closeMenuAriaLabel: string;
  };
  hero: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: DownloadCtaConfig;
    secondaryCta: DownloadCtaConfig;
    exploreCta: {
      label: string;
      href: string;
    };
    trustPills: string[];
    mockupAlt: string;
    mockupCaption: string;
    floatingMetrics: HeroFloatingMetric[];
  };
  pillars: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: PillarItemConfig[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    subtitle: string;
    moduleListAriaLabel: string;
    categoryFilterAriaLabel: string;
    categories: FeatureCategoryFilter[];
    videoToggleLabel: string;
    photoToggleLabel: string;
    playVideoLabel: string;
    pauseVideoLabel: string;
    videoBadgeLabel: string;
    photoBadgeLabel: string;
    slideLabelPrefix: string;
    reducedMotionHint: string;
    videoFallbackNotice: string;
    imageFallbackText: string;
    emptyFilterTitle: string;
    emptyFilterResetLabel: string;
    highlightsHeading: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: StepItemConfig[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    supportBadge: string;
    supportText: string;
    emptyMessage: string;
    items: FaqItemConfig[];
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: DownloadCtaConfig;
    secondaryCta: DownloadCtaConfig;
    footnote: string;
  };
  footer: {
    description: string;
    navigationHeading: string;
    downloadHeading: string;
    copyrightText: string;
    releaseNote: string;
  };
  downloadNotice: DownloadNoticeConfig;
}
