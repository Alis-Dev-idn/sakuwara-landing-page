import type { FooterConfig } from './types';

/**
 * Konfigurasi bagian Footer halaman.
 */

const getYears = new Date().getFullYear();

export const footerConfig: FooterConfig = {
  description:
    'Aplikasi manajemen keuangan pribadi berbahasa Indonesia untuk mencatat arus kas, mengelola anggaran, tagihan, aset, hingga mewujudkan target tabungan impian.',
  navigationHeading: 'Navigasi',
  downloadHeading: 'Unduh Android',
  copyrightText: `© ${getYears} Sakuwara. Seluruh hak cipta dilindungi.`,
  // releaseNote: 'Seluruh teks & tautan pada situs ini dikelola terpusat melalui src/config/.',
  releaseNote: '',
};
