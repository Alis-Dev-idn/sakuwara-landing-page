import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { DownloadNoticeModal } from '@/components/molecules/DownloadNoticeModal';
import { CtaBannerSection } from '@/components/organisms/CtaBannerSection';
import { FaqSection } from '@/components/organisms/FaqSection';
import { FeatureShowcaseSection } from '@/components/organisms/FeatureShowcaseSection';
import { Footer } from '@/components/organisms/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import { HowItWorksSection } from '@/components/organisms/HowItWorksSection';
import { Navbar } from '@/components/organisms/Navbar';
import { PillarsBentoSection } from '@/components/organisms/PillarsBentoSection';
import { assetsConfig, siteConfig, type DownloadCtaConfig } from '@/config';

/**
 * Komponen akar landing page Sakuwara. Menyinkronkan metadata SEO & favicon
 * dari konfigurasi terpusat dan membungkus seluruh motion dengan `reducedMotion="user"`.
 */
export function App() {
  const [activePlaceholderCta, setActivePlaceholderCta] = useState<DownloadCtaConfig | null>(null);

  useEffect(() => {
    document.title = siteConfig.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', siteConfig.seo.description);
    }

    let faviconLink = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.type = 'image/png';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = assetsConfig.logo.icon;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-canvas text-ink">
        <Navbar />
        <main>
          <HeroSection onPlaceholderCta={setActivePlaceholderCta} />
          <PillarsBentoSection />
          <FeatureShowcaseSection />
          <HowItWorksSection />
          <FaqSection />
          <CtaBannerSection onPlaceholderCta={setActivePlaceholderCta} />
        </main>
        <Footer onPlaceholderCta={setActivePlaceholderCta} />
        <DownloadNoticeModal
          key={activePlaceholderCta?.id ?? 'closed'}
          cta={activePlaceholderCta}
          onClose={() => setActivePlaceholderCta(null)}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
