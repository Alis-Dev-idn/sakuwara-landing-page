import type { HowItWorksConfig } from './types';

/**
 * Konfigurasi seksi Alur Cara Kerja 3 Langkah.
 */
export const howItWorksConfig: HowItWorksConfig = {
  eyebrow: 'Mulai dalam 3 Menit',
  title: 'Alur Sederhana Menuju Keuangan Lebih Rapi',
  subtitle:
    'Tanpa konfigurasi rumit. Mulai dari dompet yang kamu pakai setiap hari dan biarkan Sakuwara merangkum sisanya.',
  steps: [
    {
      stepNumber: '01',
      title: 'Tambahkan Dompet & Saldo Awal',
      description:
        'Catat dompet tunai, rekening bank, atau e-wallet yang aktif kamu gunakan agar total kekayaan langsung terpetakan.',
    },
    {
      stepNumber: '02',
      title: 'Atur Anggaran & Tagihan Rutin',
      description:
        'Tentukan pagu belanja per kategori sesuai tanggal siklus gajian dan daftarkan tagihan bulanan otomatis maupun manual.',
    },
    {
      stepNumber: '03',
      title: 'Pantau Tren, Impian & Ekspor Laporan',
      description:
        'Catat transaksi harian atau wacana belanja, kejar target tabungan impian, dan evaluasi arus kas lewat grafik atau Excel.',
    },
  ],
};
