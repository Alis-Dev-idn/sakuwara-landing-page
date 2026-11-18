import { useState } from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { FeatureIcon } from '@/components/atoms/FeatureIcon';
import { ModuleTabItem } from '@/components/molecules/ModuleTabItem';
import { PhoneMockup } from '@/components/molecules/PhoneMockup';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { featuresConfig, siteConfig, type FeatureCategoryId } from '@/config';

/**
 * Showcase interaktif seluruh 11 modul aplikasi Sakuwara dengan filter kategori,
 * panel detail keunggulan, dan PhoneMockup dinamis (Video MP4 + Galeri PNG).
 */
export function FeatureShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState<FeatureCategoryId>('all');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(featuresConfig[0]?.id ?? 'dashboard');

  const visibleModules =
    selectedCategory === 'all'
      ? featuresConfig
      : featuresConfig.filter((item) => item.category === selectedCategory);

  const activeModule =
    visibleModules.find((item) => item.id === selectedModuleId) ??
    visibleModules[0] ??
    featuresConfig[0];

  const handleCategoryChange = (categoryId: FeatureCategoryId) => {
    setSelectedCategory(categoryId);
    const matching =
      categoryId === 'all'
        ? featuresConfig
        : featuresConfig.filter((item) => item.category === categoryId);
    if (matching.length > 0 && !matching.some((m) => m.id === selectedModuleId)) {
      setSelectedModuleId(matching[0].id);
    }
  };

  return (
    <section id="fitur" className="bg-surface-muted/80 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={siteConfig.showcase.eyebrow}
          title={siteConfig.showcase.title}
          subtitle={siteConfig.showcase.subtitle}
        />

        <div
          role="group"
          aria-label={siteConfig.showcase.categoryFilterAriaLabel}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {siteConfig.showcase.categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleCategoryChange(category.id)}
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                  isActive
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'border border-slate-200 bg-surface text-ink-muted hover:border-emerald-300 hover:text-ink'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {visibleModules.length === 0 ? (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-surface p-10 text-center">
            <p className="text-base font-semibold text-ink">
              {siteConfig.showcase.emptyFilterTitle}
            </p>
            <Button variant="primary" size="md" onClick={() => handleCategoryChange('all')}>
              {siteConfig.showcase.emptyFilterResetLabel}
            </Button>
          </div>
        ) : (
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
            <div
              role="tablist"
              aria-label={siteConfig.showcase.moduleListAriaLabel}
              className="grid gap-2.5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
            >
              {visibleModules.map((moduleItem) => (
                <ModuleTabItem
                  key={moduleItem.id}
                  module={moduleItem}
                  isSelected={activeModule?.id === moduleItem.id}
                  onSelect={setSelectedModuleId}
                />
              ))}
            </div>

            {activeModule && (
              <div
                role="tabpanel"
                aria-label={activeModule.name}
                className="rounded-3xl border border-slate-200/90 bg-surface p-6 shadow-sm sm:p-8 lg:sticky lg:top-24 lg:col-span-7"
              >
                <div className="grid items-center gap-8 md:grid-cols-12">
                  <div className="flex flex-col gap-4 md:col-span-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-soft text-brand-primary">
                        <FeatureIcon name={activeModule.icon} className="h-5 w-5" />
                      </span>
                      <Badge variant="gold">{activeModule.metricBadge}</Badge>
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-tight text-ink">
                      {activeModule.name}
                    </h3>

                    <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                      {activeModule.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
                        {siteConfig.showcase.highlightsHeading}
                      </span>
                      <ul className="mt-3 space-y-2.5">
                        {activeModule.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink">
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-soft text-brand-primary">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="md:col-span-6">
                    <PhoneMockup
                      key={activeModule.id}
                      screenshots={activeModule.screenshots}
                      videoSrc={activeModule.videoSrc}
                      videoLabel={activeModule.videoLabel}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
