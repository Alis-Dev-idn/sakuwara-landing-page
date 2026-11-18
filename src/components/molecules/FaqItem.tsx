import { ChevronDown } from 'lucide-react';
import type { FaqItemConfig } from '@/config';

export interface FaqItemProps {
  item: FaqItemConfig;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

/**
 * Item akordeon FAQ aksesibel dengan `aria-expanded` dan dukungan keyboard penuh.
 */
export function FaqItem({ item, isOpen, onToggle }: FaqItemProps) {
  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-surface shadow-xs transition-colors hover:border-emerald-200">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(item.id)}
          className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold text-ink transition-colors hover:bg-slate-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
        >
          <span>{item.question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-brand-primary transition-transform duration-200 motion-reduce:transition-none ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-slate-100 px-5 pt-3 pb-5 text-sm leading-relaxed text-ink-muted"
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}
