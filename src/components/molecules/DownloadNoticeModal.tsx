import { useEffect, useState } from 'react';
import { Check, Copy, Info, X } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { siteConfig, type DownloadCtaConfig } from '@/config';

export interface DownloadNoticeModalProps {
  cta: DownloadCtaConfig | null;
  onClose: () => void;
}

/**
 * Dialog modal aksesibel saat pengunjung mengklik tombol unduh yang masih berstatus placeholder
 * di konfigurasi terpusat.
 */
export function DownloadNoticeModal({ cta, onClose }: DownloadNoticeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!cta) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cta, onClose]);

  if (!cta) {
    return null;
  }

  const handleCopy = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(cta.href);
        setCopied(true);
        return;
      } catch {
        // Fallback jika izin clipboard ditolak
      }
    }
    setCopied(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-notice-title"
        className="w-full max-w-md rounded-3xl border border-slate-200 bg-surface p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-soft text-brand-primary">
            <Info className="h-5 w-5" aria-hidden="true" />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={siteConfig.downloadNotice.closeButtonLabel}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-ink-muted hover:bg-slate-100 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <h3 id="download-notice-title" className="mt-4 text-lg font-bold text-ink">
          {siteConfig.downloadNotice.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {siteConfig.downloadNotice.description}
        </p>

        <div className="mt-4 space-y-2 rounded-2xl border border-slate-200 bg-surface-muted p-3.5 text-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-ink-muted">
              {siteConfig.downloadNotice.targetLabel}
            </span>
            <span className="font-semibold text-ink">{cta.label}</span>
          </div>
          <div>
            <span className="block font-medium text-ink-muted">
              {siteConfig.downloadNotice.placeholderUrlLabel}
            </span>
            <code className="mt-1 block overflow-x-auto whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 font-mono text-[11px] text-brand-primary">
              {cta.href}
            </code>
          </div>
        </div>

        <p className="mt-3 text-xs text-ink-muted">{siteConfig.downloadNotice.helperNote}</p>

        <div className="mt-5 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
          <Button variant="secondary" size="md" onClick={onClose}>
            {siteConfig.downloadNotice.closeButtonLabel}
          </Button>
          <Button variant="primary" size="md" onClick={() => void handleCopy()}>
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{siteConfig.downloadNotice.copiedLabel}</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>{siteConfig.downloadNotice.copyButtonLabel}</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
