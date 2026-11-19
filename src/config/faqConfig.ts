import type { FaqConfig } from './types';

/**
 * Konfigurasi seksi FAQ (Pertanyaan Umum).
 */
export const faqConfig: FaqConfig = {
  eyebrow: 'Pertanyaan Umum',
  title: 'Hal yang Sering Ditanyakan Sebelum Menginstal',
  subtitle:
    'Informasi ringkas mengenai ketersediaan platform, cakupan fitur, dan pengelolaan data pada Sakuwara.',
  supportBadge: 'Siap Dicoba',
  supportText:
    'Seluruh tangkapan layar di halaman ini adalah tampilan asli dari aplikasi Android Sakuwara.',
  emptyMessage: 'Belum ada pertanyaan yang terdaftar pada konfigurasi.',
  items: [
    {
      id: 'platform',
      question: 'Sakuwara tersedia untuk perangkat apa saja?',
      answer:
        'Saat ini Sakuwara difokuskan untuk perangkat Android. Kamu dapat mengunduhnya melalui tombol Google Play atau file APK rilis resmi pada halaman ini.',
    },
    {
      id: 'cycle-date',
      question: 'Apakah periode anggaran harus mulai tanggal 1 setiap bulan?',
      answer:
        'Tidak. Sakuwara mendukung siklus anggaran kustom (misalnya setiap tanggal 25 hingga tanggal 24 bulan berikutnya) agar selaras dengan tanggal gajianmu.',
    },
    {
      id: 'notes-vs-transaction',
      question: 'Apa fungsi fitur Notes Pengeluaran (Asumsi)?',
      answer:
        'Notes Pengeluaran membantumu menampung wacana belanja atau proyeksi biaya besar (seperti servis kendaraan atau liburan) tanpa langsung memotong saldo, lalu bisa dikonversi jadi transaksi nyata dengan satu tombol Eksekusi.',
    },
    {
      id: 'export-report',
      question: 'Apakah laporan keuangan bisa diekspor untuk diolah ulang?',
      answer:
        'Ya. Di modul Laporan Keuangan, kamu dapat memfilter rentang waktu (Minggu, Bulan, Tahun, atau Kustom) dan mengekspornya langsung ke format Excel.',
    },
    {
      id: 'wallets-assets',
      question: 'Apa bedanya modul Dompet dan Manajemen Aset?',
      answer:
        'Modul Dompet mengelola likuiditas harian seperti uang tunai, rekening bank, dan e-wallet. Modul Manajemen Aset mencatat aset tetap maupun bergerak seperti properti, kendaraan, emas, elektronik, dan saham beserta nilai beli serta estimasi pertumbuhannya.',
    },
  ],
};
