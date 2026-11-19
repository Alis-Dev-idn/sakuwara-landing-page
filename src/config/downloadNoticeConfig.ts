import type { DownloadNoticeConfig } from './types';

/**
 * Konfigurasi modal informasi placeholder CTA unduhan.
 */
export const downloadNoticeConfig: DownloadNoticeConfig = {
  title: 'Tautan Unduhan Sakuwara (Placeholder Config)',
  description:
    'Tautan distribusi publik masih menggunakan alamat placeholder pada konfigurasi terpusat. Saat rilis toko aplikasi siap, cukup perbarui URL dan ubah isPlaceholder menjadi false di file config terkait.',
  targetLabel: 'Saluran dipilih:',
  placeholderUrlLabel: 'URL terkonfigurasi:',
  copyButtonLabel: 'Salin URL Placeholder',
  copiedLabel: 'URL Tersalin',
  closeButtonLabel: 'Tutup',
  helperNote: 'Tips pengelola: seluruh label, URL, ikon tombol, dan status placeholder dapat diubah di src/config/.',
};
