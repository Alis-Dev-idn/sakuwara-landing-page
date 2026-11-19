import type { ShowcaseConfig } from './types';

/**
 * Konfigurasi seksi Showcase Fitur (galeri gambar interaktif tanpa video).
 */
export const showcaseConfig: ShowcaseConfig = {
  eyebrow: 'Eksplorasi Produk Asli',
  title: '11 Modul Lengkap dalam Satu Saku',
  subtitle:
    'Pilih modul untuk melihat cuplikan layar asli langsung dari aplikasi Android Sakuwara. Geser gambar ke kiri atau kanan untuk menelusuri tiap layar.',
  moduleListAriaLabel: 'Daftar 11 modul fitur Sakuwara',
  mobileModuleListAriaLabel: 'Pilih cepat modul fitur Sakuwara',
  categoryFilterAriaLabel: 'Filter kategori modul fitur',
  categories: [
    { id: 'all', label: 'Semua (11)' },
    { id: 'daily', label: 'Keuangan Harian' },
    { id: 'planning', label: 'Perencanaan & Target' },
    { id: 'wealth', label: 'Aset & Analitik' },
  ],
  photoBadgeLabel: 'Pratinjau Layar',
  slideLabelPrefix: 'Layar',
  imageFallbackText: 'Pratinjau gambar modul Sakuwara tidak tersedia saat ini.',
  emptyFilterTitle: 'Tidak ada modul pada kategori ini.',
  emptyFilterResetLabel: 'Tampilkan Semua Modul',
  highlightsHeading: 'Yang bisa kamu lakukan:',
  phoneFrame: {
    autoSlide: true,
    autoSlideIntervalMs: 4500,
    badgeLabel: 'Pratinjau Layar',
    prevSlideAriaLabel: 'Layar sebelumnya',
    nextSlideAriaLabel: 'Layar berikutnya',
    slideDotAriaPrefix: 'Tampilkan layar',
  },
};
