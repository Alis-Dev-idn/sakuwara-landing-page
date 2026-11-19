import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Crown,
  Download,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { ButtonIconKey, ButtonPresetIconKey } from '@/config';

type LucidePresetKey = Exclude<ButtonPresetIconKey, 'none' | 'google-play'>;

const ICON_MAP: Record<LucidePresetKey, LucideIcon> = {
  smartphone: Smartphone,
  download: Download,
  sparkles: Sparkles,
  'arrow-right': ArrowRight,
  'arrow-down-right': ArrowDownRight,
  'external-link': ExternalLink,
  'check-circle': CheckCircle2,
  crown: Crown,
  zap: Zap,
  'shield-check': ShieldCheck,
};

function isImagePathOrUrl(value: string): boolean {
  return (
    value.startsWith('/') ||
    value.startsWith('./') ||
    value.startsWith('../') ||
    value.startsWith('http://') ||
    value.startsWith('https://') ||
    value.startsWith('data:') ||
    /\.(png|jpe?g|svg|webp|gif|ico)(\?.*)?$/i.test(value)
  );
}

export interface ActionIconProps {
  name?: ButtonIconKey;
  className?: string;
}

/**
 * Pemeta ikon tombol fleksibel dari `src/config/`.
 * Mendukung preset Lucide, logo `'google-play'`, maupun ikon gambar custom
 * (hasil import aset `@assets/...`, path/URL gambar, atau `{ imageSrc, alt }`).
 */
export function ActionIcon({ name = 'smartphone', className = 'h-4 w-4 shrink-0' }: ActionIconProps) {
  if (!name || name === 'none') {
    return null;
  }

  if (typeof name === 'object' && 'imageSrc' in name) {
    return (
      <img
        src={name.imageSrc}
        alt={name.alt ?? ''}
        aria-hidden={name.alt ? undefined : true}
        className={`${className} object-contain`}
      />
    );
  }

  if (name === 'google-play') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M3.61 1.814L13.793 12 3.61 22.186a1.77 1.77 0 0 1-.61-1.35V3.164c0-.535.236-1.015.61-1.35z"
          fill="#4285F4"
        />
        <path
          d="M17.203 8.59L13.793 12l3.41 3.41 3.854-2.19c.78-.443.78-1.997 0-2.44L17.203 8.59z"
          fill="#FBBC05"
        />
        <path
          d="M17.203 15.41L13.793 12 3.61 22.186c.42.362 1.026.447 1.662.085l11.931-6.861z"
          fill="#EA4335"
        />
        <path
          d="M3.61 1.814L13.793 12l3.41-3.41L5.272 1.729C4.636 1.367 4.03 1.452 3.61 1.814z"
          fill="#34A853"
        />
      </svg>
    );
  }

  if (Object.prototype.hasOwnProperty.call(ICON_MAP, name)) {
    const IconComponent = ICON_MAP[name as LucidePresetKey];
    return <IconComponent className={className} aria-hidden="true" />;
  }

  if (isImagePathOrUrl(name)) {
    return (
      <img
        src={name}
        alt=""
        aria-hidden="true"
        className={`${className} object-contain`}
      />
    );
  }

  return <Smartphone className={className} aria-hidden="true" />;
}
