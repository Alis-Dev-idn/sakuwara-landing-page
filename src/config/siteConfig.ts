import type { SiteConfig } from './types';

/**
 * Konfigurasi teks terpusat untuk seluruh halaman promosi Sakuwara.
 * Mengubah nilai di file ini otomatis memperbarui seluruh tampilan, metadata,
 * label aksesibilitas, dan tautan unduhan pada landing page.
 */
export const siteConfig: SiteConfig = {
  seo: {
    title: 'Sakuwara — Atur Uang Harian Lebih Tenang & Terencana',
    description:
      'Aplikasi manajemen keuangan pribadi untuk Android. Catat transaksi, kelola multi-dompet, atur anggaran bulanan, capai dana impian, pantau tagihan rutin, aset, dan ekspor laporan Excel.',
  },
  brand: {
    name: 'sakuwara',
    namePrefix: 'saku',
    nameHighlight: 'wa',
    nameSuffix: 'ra',
    tagline: 'Atur Uang Harian Lebih Tenang, Terencana, dan Terukur',
    logoAlt: 'Logo perisai Sakuwara',
    logoWordmarkAlt: 'Logo dan tulisan Sakuwara',
    homeAriaLabel: 'Kembali ke bagian atas Sakuwara',
    versionBadge: 'Android • Rilis Publik v1.0',
  },
  navbar: {
    ariaLabel: 'Navigasi utama Sakuwara',
    links: [
      { label: 'Keunggulan', href: '#keunggulan' },
      { label: '11 Fitur', href: '#fitur' },
      { label: 'Cara Kerja', href: '#cara-kerja' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaLabel: 'Unduh Aplikasi',
    openMenuAriaLabel: 'Buka menu navigasi',
    closeMenuAriaLabel: 'Tutup menu navigasi',
  },
  hero: {
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
    },
    secondaryCta: {
      id: 'apk',
      label: 'Download APK',
      sublabel: 'Langsung Unduh',
      href: '',
      isPlaceholder: false,
      ariaLabel: 'Unduh file instalasi APK Sakuwara Android',
    },
    exploreCta: {
      label: 'Jelajahi 11 Fitur Interaktif',
      href: '#fitur',
    },
    trustPills: [
      '11 Modul Terintegrasi',
      'Ekspor Laporan Excel',
      'Fokus Privasi & Ringan',
    ],
    mockupAlt: 'Tampilan Beranda aplikasi Sakuwara menampilkan total saldo dan arus kas bulan ini',
    mockupCaption: 'Tampilan Beranda Sakuwara — Arus kas & ringkasan dompet real-time',
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
  },
  pillars: {
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
  },
  showcase: {
    eyebrow: 'Eksplorasi Produk Asli',
    title: '11 Modul Lengkap dalam Satu Saku',
    subtitle:
      'Pilih modul di sebelah kiri untuk melihat cuplikan layar dan video demo asli langsung dari aplikasi Android Sakuwara.',
    moduleListAriaLabel: 'Daftar 11 modul fitur Sakuwara',
    categoryFilterAriaLabel: 'Filter kategori modul fitur',
    categories: [
      { id: 'all', label: 'Semua (11)' },
      { id: 'daily', label: 'Keuangan Harian' },
      { id: 'planning', label: 'Perencanaan & Target' },
      { id: 'wealth', label: 'Aset & Analitik' },
    ],
    videoToggleLabel: 'Video Demo',
    photoToggleLabel: 'Screenshot',
    playVideoLabel: 'Putar Video Demo',
    pauseVideoLabel: 'Jeda Video',
    videoBadgeLabel: 'Demo Video Asli',
    photoBadgeLabel: 'Pratinjau Layar',
    slideLabelPrefix: 'Layar',
    reducedMotionHint:
      'Mode hemat gerak aktif — menampilkan pratinjau gambar. Tekan Putar Video jika ingin menonton demo.',
    videoFallbackNotice:
      'Video demo tidak dapat diputar di peramban ini — menampilkan pratinjau screenshot resmi.',
    imageFallbackText: 'Pratinjau media modul Sakuwara tidak tersedia saat ini.',
    emptyFilterTitle: 'Tidak ada modul pada kategori ini.',
    emptyFilterResetLabel: 'Tampilkan Semua Modul',
    highlightsHeading: 'Yang bisa kamu lakukan:',
  },
  howItWorks: {
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
  },
  faq: {
    eyebrow: 'Pertanyaan Umum',
    title: 'Hal yang Sering Ditanyakan Sebelum Menginstal',
    subtitle:
      'Informasi ringkas mengenai ketersediaan platform, cakupan fitur, dan pengelolaan data pada Sakuwara.',
    supportBadge: 'Siap Dicoba',
    supportText:
      'Seluruh tangkapan layar dan video di halaman ini adalah rekaman asli dari aplikasi Android Sakuwara.',
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
  },
  ctaBanner: {
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
    },
    secondaryCta: {
      id: 'apk',
      label: 'Download APK',
      sublabel: 'Langsung Unduh',
      href: '',
      isPlaceholder: false,
      ariaLabel: 'Unduh installer APK Sakuwara sekarang',
    },
    footnote: 'Tersedia untuk Android • Tautan unduhan dikelola melalui konfigurasi terpusat',
  },
  footer: {
    description:
      'Aplikasi manajemen keuangan pribadi berbahasa Indonesia untuk mencatat arus kas, mengelola anggaran, tagihan, aset, hingga mewujudkan target tabungan impian.',
    navigationHeading: 'Navigasi',
    downloadHeading: 'Unduh Android',
    copyrightText: '© 2026 Sakuwara. Seluruh hak cipta dilindungi.',
    releaseNote: 'Seluruh teks & tautan pada situs ini dikelola terpusat melalui src/config/.',
  },
  downloadNotice: {
    title: 'Tautan Unduhan Sakuwara (Placeholder Config)',
    description:
      'Tautan distribusi publik masih menggunakan alamat placeholder pada konfigurasi terpusat. Saat rilis toko aplikasi siap, cukup perbarui URL dan ubah isPlaceholder menjadi false di src/config/siteConfig.ts.',
    targetLabel: 'Saluran dipilih:',
    placeholderUrlLabel: 'URL terkonfigurasi:',
    copyButtonLabel: 'Salin URL Placeholder',
    copiedLabel: 'URL Tersalin',
    closeButtonLabel: 'Tutup',
    helperNote: 'Tips pengelola: seluruh label, URL, dan status placeholder dapat diubah di siteConfig.ts.',
  },
};
