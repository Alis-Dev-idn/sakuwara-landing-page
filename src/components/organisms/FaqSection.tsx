import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { FaqItem } from '@/components/molecules/FaqItem';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { siteConfig } from '@/config';

/**
 * Section FAQ akordeon 2 kolom dengan empty state terpusat bila daftar item kosong.
 */
export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(siteConfig.faq.items[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="bg-surface-muted/80 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="flex flex-col items-start gap-6 lg:col-span-5">
          <SectionHeader
            eyebrow={siteConfig.faq.eyebrow}
            title={siteConfig.faq.title}
            subtitle={siteConfig.faq.subtitle}
            align="left"
          />

          <div className="w-full rounded-3xl border border-emerald-200/80 bg-emerald-soft/70 p-5">
            <Badge variant="emerald">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{siteConfig.faq.supportBadge}</span>
            </Badge>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {siteConfig.faq.supportText}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          {siteConfig.faq.items.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-surface p-8 text-center text-sm text-ink-muted">
              {siteConfig.faq.emptyMessage}
            </div>
          ) : (
            <div className="space-y-3">
              {siteConfig.faq.items.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
