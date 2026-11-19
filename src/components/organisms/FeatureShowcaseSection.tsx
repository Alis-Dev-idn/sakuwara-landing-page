import { useState } from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { FeatureIcon } from '@/components/atoms/FeatureIcon';
import { ModuleTabItem } from '@/components/molecules/ModuleTabItem';
import { PhoneMockup } from '@/components/molecules/PhoneMockup';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { featuresConfig, showcaseConfig, type FeatureCategoryId } from '@/config';

/**
 * Showcase interaktif seluruh 11 modul aplikasi Sakuwara dengan filter kategori,
 * strip pill horizontal cepat untuk mobile (`< lg`), daftar tab desktop (`lg+`),
 * dan galeri PhoneMockup swipeable berbasis gambar.
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
          eyebrow={showcaseConfig.eyebrow}
          title={showcaseConfig.title}
          subtitle={showcaseConfig.subtitle}
        />

        <div
          role="group"
          aria-label={showcaseConfig.categoryFilterAriaLabel}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {showcaseConfig.categories.map((category) => {
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
              {showcaseConfig.emptyFilterTitle}
            </p>
            <Button variant="primary" size="md" onClick={() => handleCategoryChange('all')}>
              {showcaseConfig.emptyFilterResetLabel}
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid items-start gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-8">
            {/* Strip pill horizontal untuk mobile/tablet agar user langsung melihat preview tanpa scroll jauh */}
            <div
              role="tablist"
              aria-label={showcaseConfig.mobileModuleListAriaLabel}
              className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory lg:hidden"
            >
              {visibleModules.map((moduleItem) => {
                const isSelected = activeModule?.id === moduleItem.id;
                return (
                  <button
                    key={moduleItem.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedModuleId(moduleItem.id)}
                    className={`inline-flex min-h-11 shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                      isSelected
                        ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
                        : 'border-slate-200 bg-surface text-ink hover:border-emerald-300'
                    }`}
                  >
                    <FeatureIcon name={moduleItem.icon} className="h-4 w-4 shrink-0" />
                    <span>{moduleItem.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Daftar vertikal untuk desktop */}
            <div
              role="tablist"
              aria-label={showcaseConfig.moduleListAriaLabel}
              className="hidden gap-2.5 lg:col-span-5 lg:grid lg:grid-cols-1"
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
                        {showcaseConfig.highlightsHeading}
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
                      frameConfig={showcaseConfig.phoneFrame}
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
