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
import type { ButtonIconKey } from '@/config';

const ICON_MAP: Record<Exclude<ButtonIconKey, 'none' | 'google-play'>, LucideIcon> = {
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

export interface ActionIconProps {
  name?: ButtonIconKey;
  className?: string;
}

/**
 * Pemeta ikon tombol yang dapat dikonfigurasi dari `src/config/`.
 * Mendukung ikon Lucide maupun ikon brand kustom (`google-play`).
 */
export function ActionIcon({ name = 'smartphone', className = 'h-4 w-4 shrink-0' }: ActionIconProps) {
  if (name === 'none') {
    return null;
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

  const IconComponent = ICON_MAP[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} aria-hidden="true" />;
}
