import { Smartphone } from 'lucide-react';
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
 * Tombol aksi unduhan terpusat: membuka tautan eksternal aman bila sudah rilis,
 * atau memicu modal informasi placeholder bila `isPlaceholder === true`.
 */
export function DownloadCtaButton({
  cta,
  variant = 'primary',
  size = 'lg',
  className = '',
  onPlaceholderClick,
}: DownloadCtaButtonProps) {
  if (cta.isPlaceholder) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        aria-label={cta.ariaLabel}
        onClick={() => onPlaceholderClick(cta)}
      >
        <Smartphone className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{cta.label}</span>
      </Button>
    );
  }

  return (
    <Button
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      aria-label={cta.ariaLabel}
    >
      <Smartphone className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{cta.label}</span>
    </Button>
  );
}
