import type { BrandConfig, SeoConfig } from './types';

/**
 * Konfigurasi identitas brand dan metadata SEO halaman.
 */
export const seoConfig: SeoConfig = {
  title: 'Sakuwara — Atur Uang Harian Lebih Tenang & Terencana',
  description:
    'Aplikasi manajemen keuangan pribadi untuk Android. Catat transaksi, kelola multi-dompet, atur anggaran bulanan, capai dana impian, pantau tagihan rutin, aset, dan ekspor laporan Excel.',
};

export const brandConfig: BrandConfig = {
  name: 'sakuwara',
  namePrefix: 'saku',
  nameHighlight: 'wa',
  nameSuffix: 'ra',
  tagline: 'Atur Uang Harian Lebih Tenang, Terencana, dan Terukur',
  logoAlt: 'Logo perisai Sakuwara',
  logoWordmarkAlt: 'Logo dan tulisan Sakuwara',
  homeAriaLabel: 'Kembali ke bagian atas Sakuwara',
  versionBadge: 'Android • Rilis Publik v1.0',
};
