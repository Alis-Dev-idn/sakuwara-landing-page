import { assetsConfig } from './assetsConfig';
import type { HeroConfig } from './types';

/**
 * Konfigurasi bagian Hero, tombol CTA utama, metrik mengambang, dan galeri frame HP Hero.
 * Tambah/kurangi item pada `phoneFrame.screenshots` untuk mengatur banyaknya gambar di frame HP Hero.
 */
export const heroConfig: HeroConfig = {
  sectionAriaLabel: 'Ringkasan aplikasi Sakuwara',
  eyebrow: 'Aplikasi Keuangan Pribadi • Android',
  title: 'Satu Aplikasi untuk Semua Dompet,',
  titleHighlight: 'Anggaran, dan Impianmu.',
  subtitle:
    'Catat transaksi harian dalam hitungan detik, pantau selisih kas per dompet, cegah bocor anggaran bulanan, hingga ukur kekayaan bersih—semua tersusun rapi dan nyaman dilihat.',
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
    ariaLabel: 'Unduh file instalasi APK Sakuwara Android',
    icon: 'download',
  },
  exploreCta: {
    label: 'Jelajahi Fitur Interaktif',
    href: '#fitur',
    icon: 'arrow-down-right',
  },
  trustPills: [
    'Modul Terintegrasi',
    'Ekspor Laporan Excel',
    'Fokus Privasi & Ringan',
  ],
  floatingMetrics: [
    {
      id: 'selisih',
      label: 'Selisih Bulan Ini',
      value: 'Rp 13.873.000',
      trend: '+76,0% tersimpan',
      tone: 'emerald',
    },
    {
      id: 'tagihan',
      label: 'Tagihan Rutin',
      value: '6 Jadwal Aktif',
      trend: 'Auto-debit siap pantau',
      tone: 'amber',
    },
  ],
  phoneFrame: {
    autoSlide: true,
    autoSlideIntervalMs: 4200,
    badgeLabel: 'Pratinjau Aplikasi',
    prevSlideAriaLabel: 'Gambar sebelumnya',
    nextSlideAriaLabel: 'Gambar berikutnya',
    slideDotAriaPrefix: 'Tampilkan layar',
    screenshots: [
      {
        src: assetsConfig.modules.dashboard.images[0],
        alt: 'Tampilan Beranda aplikasi Sakuwara menampilkan total saldo dan arus kas bulan ini',
        caption: 'Beranda Sakuwara — Arus kas & ringkasan dompet real-time',
      },
      {
        src: assetsConfig.modules.dompet.images[0],
        alt: 'Tampilan Multi-Dompet Sakuwara untuk Tunai, Bank, dan E-Wallet',
        caption: 'Multi-Dompet — Pisahkan saldo tunai, bank, dan e-wallet',
      },
      {
        src: assetsConfig.modules.anggaran.images[0],
        alt: 'Tampilan Anggaran Bulanan Sakuwara dengan indikator batas kategori',
        caption: 'Anggaran Bulanan — Pantau batas belanja sebelum kebobolan',
      },
      {
        src: assetsConfig.modules.laporan.images[0],
        alt: 'Tampilan Laporan Keuangan Sakuwara dengan grafik tren arus uang',
        caption: 'Laporan & Tren — Evaluasi arus kas dan ekspor ke Excel',
      },
    ],
  },
};
