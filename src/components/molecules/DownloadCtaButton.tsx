import { ActionIcon } from '@/components/atoms/ActionIcon';
import { Button, type ButtonVariant } from '@/components/atoms/Button';
import type { DownloadCtaConfig } from '@/config';

export interface DownloadCtaButtonProps {
  cta: DownloadCtaConfig;
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  className?: string;
  onPlaceholderClick: (cta: DownloadCtaConfig) => void;
}

/**
 * Tombol aksi terpusat dengan ikon yang dapat diubah melalui konfigurasi:
 * membuka tautan atau memicu modal informasi placeholder bila `isPlaceholder === true`.
 */
export function DownloadCtaButton({
  cta,
  variant = 'primary',
  size = 'lg',
  className = '',
  onPlaceholderClick,
}: DownloadCtaButtonProps) {
  const iconName = cta.icon ?? 'smartphone';

  if (cta.isPlaceholder) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        aria-label={cta.ariaLabel}
        onClick={() => onPlaceholderClick(cta)}
      >
        <ActionIcon name={iconName} />
        <span>{cta.label}</span>
      </Button>
    );
  }

  const isInternalAnchor = cta.href.startsWith('#') || cta.href === '';

  return (
    <Button
      href={cta.href}
      target={isInternalAnchor ? undefined : '_blank'}
      rel={isInternalAnchor ? undefined : 'noopener noreferrer'}
      variant={variant}
      size={size}
      className={className}
      aria-label={cta.ariaLabel}
    >
      <ActionIcon name={iconName} />
      <span>{cta.label}</span>
    </Button>
  );
}
