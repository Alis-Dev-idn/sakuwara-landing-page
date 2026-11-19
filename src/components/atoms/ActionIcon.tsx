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

const ICON_MAP: Record<Exclude<ButtonIconKey, 'none'>, LucideIcon> = {
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
 */
export function ActionIcon({ name = 'smartphone', className = 'h-4 w-4 shrink-0' }: ActionIconProps) {
  if (name === 'none') {
    return null;
  }

  const IconComponent = ICON_MAP[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} aria-hidden="true" />;
}
