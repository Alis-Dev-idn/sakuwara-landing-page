import type { CtaBannerConfig } from './types';

/**
 * Konfigurasi seksi CTA Banner penutup beserta tombol unduh dan ikonnya.
 */
export const ctaBannerConfig: CtaBannerConfig = {
  eyebrow: 'Siap Pegang Kendali Finansial?',
  title: 'Mulai Rapikan Keuanganmu Hari Ini.',
  subtitle:
    'Unduh Sakuwara di Android dan rasakan tenangnya memantau setiap rupiah—dari kopi harian hingga dana impian jangka panjang.',
  primaryCta: {
    id: 'google-play',
    label: 'Unduh di Google Play',
    sublabel: 'Rekomendasi Android',
    href: '',
    isPlaceholder: false,
    ariaLabel: 'Segera hadir di Google Play Store',
    icon: 'google-play',
  },
  secondaryCta: {
    id: 'apk',
    label: 'Download APK',
    sublabel: 'Langsung Unduh',
    href: 'https://drive.google.com/file/d/1L7WK-Ft38ZUAIJkWdHWIfqCl2hCZTYZa/view?usp=sharing',
    isPlaceholder: false,
    ariaLabel: 'Unduh installer APK Sakuwara sekarang',
    icon: 'download',
  },
  // footnote: 'Tersedia untuk Android • Tautan unduhan dikelola melalui konfigurasi terpusat',
  footnote: '',
};
