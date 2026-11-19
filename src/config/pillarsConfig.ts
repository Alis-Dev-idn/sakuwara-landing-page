import type { PillarsConfig } from './types';

/**
 * Konfigurasi seksi Pilar Keunggulan (Bento Grid).
 */
export const pillarsConfig: PillarsConfig = {
  eyebrow: 'Kenapa Sakuwara?',
  title: 'Dirancang untuk Kebiasaan Finansial yang Nyata',
  subtitle:
    'Bukan sekadar buku kas biasa. Sakuwara menggabungkan pencatatan harian dengan kontrol anggaran, wacana belanja, dan pemantauan aset.',
  items: [
    {
      id: 'cashflow',
      badge: 'Kendali Real-Time',
      title: 'Pantau Arus Kas & Selisih Bulan Ini Sekilas Pandang',
      description:
        'Ketahui langsung perbandingan uang masuk, uang keluar, dan sisa bersih pada periode siklus gajimu—lengkap dengan grafik harian dan ringkasan dompet.',
      highlightMetric: '11 Modul',
      highlightLabel: 'Tersambung dalam satu alur keuangan pribadi',
      icon: 'trending-up',
      variant: 'featured',
    },
    {
      id: 'wallets-goals',
      badge: 'Multi-Dompet & Impian',
      title: 'Pisahkan Tunai, Bank, E-Wallet, hingga Dana Impian',
      description:
        'Pantau saldo BCA, Mandiri, GoPay, dan uang tunai secara terpisah sambil melacak progres Dana Darurat atau target liburan.',
      highlightMetric: '100% Jelas',
      highlightLabel: 'Pemasukan & pengeluaran per rekening',
      icon: 'wallet',
      variant: 'standard',
    },
    {
      id: 'budget-guard',
      badge: 'Anti-Kebobolan',
      title: 'Peringatan Anggaran & Tagihan Auto-Debit',
      description:
        'Lihat kategori yang mendekati atau melewati batas seketika, plus kelola tagihan listrik, air, dan langganan bulanan agar tidak pernah telat.',
      highlightMetric: 'Reset Kustom',
      highlightLabel: 'Sesuaikan tanggal awal siklus bulanan',
      icon: 'shield-check',
      variant: 'standard',
    },
    {
      id: 'notes-export',
      badge: 'Wacana & Analitik',
      title: 'Notes Asumsi Belanja & Ekspor Laporan Excel',
      description:
        'Uji rencana belanja besar di Notes Pengeluaran sebelum dieksekusi jadi transaksi, lalu unduh laporan tren tahunan ke format Excel.',
      highlightMetric: '1-Klik Eksekusi',
      highlightLabel: 'Konversi wacana langsung jadi transaksi',
      icon: 'file-spreadsheet',
      variant: 'standard',
    },
  ],
};
