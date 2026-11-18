import { assetsConfig, siteConfig } from '@/config';

export interface BrandLogoProps {
  surface: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const ICON_HEIGHT: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'h-8',
  md: 'h-9',
  lg: 'h-12',
};

const TEXT_SIZE: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

const DARK_FRAME_CLASSES: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'h-12 w-36',
  md: 'h-16 w-44',
  lg: 'h-20 w-56',
};

const DARK_IMG_CLASSES: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'h-36 w-36',
  md: 'h-44 w-44',
  lg: 'h-56 w-56',
};

/**
 * Menampilkan logo resmi Sakuwara dari `assets/logo/` dengan menjaga kontras:
 * - `dark`: memakai `icon-text.png` yang memiliki teks `"saku"` berwarna putih,
 *   dibingkai presisi agar whitespace vertikal bawaan tidak mengecilkan wordmark.
 * - `light`: memakai `icon.png` berpadu wordmark gelap-emerald agar tajam di latar terang.
 */
export function BrandLogo({ surface, size = 'md' }: BrandLogoProps) {
  if (surface === 'dark') {
    return (
      <span
        className={`inline-flex items-center justify-center overflow-hidden select-none ${DARK_FRAME_CLASSES[size]}`}
      >
        <img
          src={assetsConfig.logo.iconText}
          alt={siteConfig.brand.logoWordmarkAlt}
          className={`${DARK_IMG_CLASSES[size]} max-w-none shrink-0 object-contain`}
        />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <img
        src={assetsConfig.logo.icon}
        alt={siteConfig.brand.logoAlt}
        className={`${ICON_HEIGHT[size]} w-auto object-contain`}
      />
      <span className={`${TEXT_SIZE[size]} font-extrabold tracking-tight leading-none`}>
        <span className="text-ink">{siteConfig.brand.namePrefix}</span>
        <span className="text-brand-primary">{siteConfig.brand.nameHighlight}</span>
        <span className="text-brand-gold">{siteConfig.brand.nameSuffix}</span>
      </span>
    </span>
  );
}
