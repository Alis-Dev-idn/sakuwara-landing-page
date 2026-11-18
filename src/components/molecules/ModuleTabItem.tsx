import { Video } from 'lucide-react';
import { FeatureIcon } from '@/components/atoms/FeatureIcon';
import { siteConfig, type FeatureModuleConfig } from '@/config';

export interface ModuleTabItemProps {
  module: FeatureModuleConfig;
  isSelected: boolean;
  onSelect: (moduleId: string) => void;
}

/**
 * Item pemilih modul interaktif pada section Showcase 11 Fitur.
 */
export function ModuleTabItem({ module, isSelected, onSelect }: ModuleTabItemProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      onClick={() => onSelect(module.id)}
      className={`group flex min-h-14 w-full items-start gap-3.5 rounded-2xl border p-3.5 text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${
        isSelected
          ? 'border-emerald-500 bg-emerald-soft/90 shadow-sm'
          : 'border-slate-200/80 bg-surface hover:border-emerald-300 hover:bg-emerald-soft/40'
      }`}
    >
      <span
        className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
          isSelected
            ? 'bg-brand-primary text-white'
            : 'bg-surface-muted text-ink-muted group-hover:bg-emerald-100 group-hover:text-brand-primary'
        }`}
      >
        <FeatureIcon name={module.icon} className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-bold text-ink">{module.name}</span>
          {module.videoSrc && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/90 px-2 py-0.5 text-[11px] font-semibold text-amber-900">
              <Video className="h-3 w-3" aria-hidden="true" />
              <span>{siteConfig.showcase.videoToggleLabel}</span>
            </span>
          )}
        </span>
        <span className="mt-1 block line-clamp-2 text-xs leading-relaxed text-ink-muted">
          {module.tagline}
        </span>
      </span>
    </button>
  );
}
