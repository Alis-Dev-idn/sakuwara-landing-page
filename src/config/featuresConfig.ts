import { assetsConfig } from './assetsConfig';
import type { FeatureModuleConfig } from './types';

/**
 * Katalog terpusat untuk 11 modul fitur aplikasi Sakuwara.
 * Setiap modul terhubung langsung ke aset gambar PNG aktual di `assets/`.
 */
export const featuresConfig: FeatureModuleConfig[] = [
  {
    id: 'dashboard',
    name: 'Beranda Ringkas',
    shortLabel: 'Beranda',
    category: 'daily',
    icon: 'layout-dashboard',
    tagline: 'Seluruh kesehatan kasmu dalam satu layar pembuka.',
    description:
      'Lihat total saldo gabungan, perbandingan uang masuk vs uang keluar, selisih bersih bulan berjalan, serta grafik arus uang tanpa perlu membuka banyak menu.',
    highlights: [
      'Kartu ringkasan Total Saldo dengan toggle privasi nominal',
      'Indikator Selisih Bulan Ini lengkap dengan persentase pertumbuhan',
      'Grafik Arus Uang & akses cepat Dompet Saya serta Transaksi Terakhir',
    ],
    metricBadge: 'Ringkasan Real-Time',
    screenshots: [
      {
        src: assetsConfig.modules.dashboard.images[0],
        alt: 'Layar Beranda Sakuwara menampilkan total saldo Rp 72.294.500 dan grafik arus uang',
        caption: 'Beranda utama — Total Saldo, Selisih Bulan Ini, dan grafik arus uang',
      },
      {
        src: assetsConfig.modules.dashboard.images[1],
        alt: 'Layar Beranda Sakuwara bagian bawah menampilkan daftar dompet dan transaksi terakhir',
        caption: 'Ringkasan dompet aktif dan daftar transaksi terbaru',
      },
    ],
  },
  {
    id: 'transaksi',
    name: 'Daftar Transaksi',
    shortLabel: 'Transaksi',
    category: 'daily',
    icon: 'arrow-left-right',
    tagline: 'Catat pemasukan dan pengeluaran harian secepat kilat.',
    description:
      'Semua transaksi dikelompokkan rapi per tanggal dengan total pengeluaran harian dan bulanan, lengkap dengan pencarian instan berdasarkan catatan maupun kategori.',
    highlights: [
      'Pengelompokan otomatis per hari dengan ringkasan subtotal',
      'Pencarian catatan transaksi & filter periode siklus bulanan',
      'Terhubung langsung ke dompet sumber (Tunai, Bank, E-Wallet)',
    ],
    metricBadge: 'Pencatatan Instan',
    screenshots: [
      {
        src: assetsConfig.modules.transaksi.images[0],
        alt: 'Layar Daftar Transaksi Sakuwara dengan pencarian catatan dan pengelompokan tanggal',
        caption: 'Riwayat transaksi harian lengkap dengan pencarian & filter',
      },
      {
        src: assetsConfig.modules.transaksi.images[1],
        alt: 'Layar detail pencatatan transaksi pada aplikasi Sakuwara',
        caption: 'Input & detail transaksi per kategori serta dompet',
      },
    ],
  },
  {
    id: 'dompet',
    name: 'Dompet & Rekening',
    shortLabel: 'Dompet',
    category: 'daily',
    icon: 'wallet',
    tagline: 'Pisahkan uang tunai, bank, e-wallet, hingga investasi.',
    description:
      'Pantau total kekayaan bersih antar-kantong tanpa tercampur. Setiap kartu dompet menampilkan arus masuk dan keluar bulan ini secara terpisah.',
    highlights: [
      'Kategori dompet lengkap: Tunai, Bank, E-Wallet, & Investasi',
      'Ringkasan pemasukan & pengeluaran bulanan di tiap kartu dompet',
      'Penanda dompet dengan aktivitas pengeluaran terbesar',
    ],
    metricBadge: 'Multi-Dompet',
    screenshots: [
      {
        src: assetsConfig.modules.dompet.images[0],
        alt: 'Layar Dompet dan Rekening Sakuwara menampilkan Dompet Tunai, Bank BCA, Mandiri, dan GoPay',
        caption: 'Daftar dompet dengan rincian masuk/keluar bulan ini',
      },
      {
        src: assetsConfig.modules.dompet.images[1],
        alt: 'Layar pengelolaan detail dompet di Sakuwara',
        caption: 'Detail transaksi dan mutasi per dompet',
      },
    ],
  },
  {
    id: 'anggaran',
    name: 'Anggaran Bulanan',
    shortLabel: 'Anggaran',
    category: 'planning',
    icon: 'gauge',
    tagline: 'Jaga batas belanja tiap kategori sebelum kebobolan.',
    description:
      'Tetapkan pagu per kategori sesuai siklus gajianmu. Sakuwara langsung menandai kategori yang melebihi batas agar kamu bisa mengerem tepat waktu.',
    highlights: [
      'Kartu Total Anggaran vs Terpakai dan Sisa Anggaran periode berjalan',
      'Peringatan otomatis kategori yang melebihi batas anggaran',
      'Siklus reset fleksibel (misalnya tiap tanggal 25)',
    ],
    metricBadge: 'Kontrol Batas',
    screenshots: [
      {
        src: assetsConfig.modules.anggaran.images[0],
        alt: 'Layar Anggaran Bulanan Sakuwara menampilkan status aman dan kategori melebihi anggaran',
        caption: 'Pemantauan sisa anggaran & peringatan kategori over-budget',
      },
      {
        src: assetsConfig.modules.anggaran.images[1],
        alt: 'Layar daftar progres kategori anggaran bulanan di Sakuwara',
        caption: 'Progres pemakaian per kategori anggaran',
      },
    ],
  },
  {
    id: 'tabungan',
    name: 'Dana Impian & Tabungan',
    shortLabel: 'Tabungan',
    category: 'planning',
    icon: 'piggy-bank',
    tagline: 'Wujudkan dana darurat, liburan, hingga barang impian.',
    description:
      'Visualisasikan progres tabungan menuju setiap target jangka pendek maupun panjang lengkap dengan tanggal target dan sisa nominal yang perlu dikumpulkan.',
    highlights: [
      'Pantau Total Terkumpul vs Target keseluruhan impian',
      'Progress bar per target (Dana Darurat, Liburan, Gadget, Qurban)',
      'Informasi jelas nominal terkumpul, target, dan kekurangannya',
    ],
    metricBadge: 'Target Terukur',
    screenshots: [
      {
        src: assetsConfig.modules.tabungan.images[0],
        alt: 'Layar Dana Impian dan Tabungan Sakuwara menampilkan target Dana Darurat dan Liburan ke Jepang',
        caption: 'Daftar dana impian dengan persentase progres dan tanggal target',
      },
      {
        src: assetsConfig.modules.tabungan.images[1],
        alt: 'Layar rincian alokasi tabungan impian di Sakuwara',
        caption: 'Detail setoran & progres pencapaian tabungan',
      },
    ],
  },
  {
    id: 'tagihan',
    name: 'Tagihan Berulang',
    shortLabel: 'Tagihan',
    category: 'planning',
    icon: 'receipt',
    tagline: 'Listrik, PDAM, internet, hingga langganan selalu tepat waktu.',
    description:
      'Kelola seluruh tagihan bulanan dalam satu daftar berjadwal—bedakan mana yang Auto Debit dan mana yang Manual dengan status lunas periode ini.',
    highlights: [
      'Filter cepat Semua, Auto Debit, dan Manual',
      'Tanggal jatuh tempo jelas serta tombol Tandai Bayar',
      'Ringkasan total tagihan rutin Auto Debit vs Manual setiap bulan',
    ],
    metricBadge: 'Auto-Debit & Manual',
    screenshots: [
      {
        src: assetsConfig.modules.tagihan.images[0],
        alt: 'Layar Tagihan Berulang Sakuwara menampilkan tagihan PLN, PDAM, Spotify, dan Biznet',
        caption: 'Daftar tagihan rutin dengan status jatuh tempo & switch Auto Debit',
      },
      {
        src: assetsConfig.modules.tagihan.images[1],
        alt: 'Layar pengelolaan jadwal tagihan berulang Sakuwara',
        caption: 'Detail jadwal pembayaran & status lunas periode ini',
      },
    ],
  },
  {
    id: 'perencanaan',
    name: 'Perencanaan Bulanan',
    shortLabel: 'Perencanaan',
    category: 'planning',
    icon: 'calendar-check',
    tagline: 'Susun daftar kebutuhan periode ini sebelum uang keluar.',
    description:
      'Buat checklist belanja bulanan, menu masak mingguan, atau pos hobi lengkap dengan estimasi biaya dan pemantauan realisasi terhadap pagu utama.',
    highlights: [
      'Checklist item kebutuhan per pos rencana bulanan',
      'Perbandingan Budget Utama, Total Budget, Terpakai, & Sisa Anggaran',
      'Pengelompokan fleksibel seperti Belanja Bulanan & Pos Tagihan',
    ],
    metricBadge: 'Checklist Anggaran',
    screenshots: [
      {
        src: assetsConfig.modules.perencanaan.images[0],
        alt: 'Layar Perencanaan Bulanan Sakuwara menampilkan ringkasan anggaran dan daftar pos kebutuhan',
        caption: 'Rencana kebutuhan bulanan berbasis checklist dan estimasi pagu',
      },
    ],
  },
  {
    id: 'asset',
    name: 'Manajemen Aset',
    shortLabel: 'Aset',
    category: 'wealth',
    icon: 'landmark',
    tagline: 'Ukur total kekayaan bersih (Net Worth) secara menyeluruh.',
    description:
      'Pantau nilai aset tetap dan bergerak—mulai dari properti, kendaraan, emas antam, elektronik, hingga portofolio saham—beserta persentase kenaikannya.',
    highlights: [
      'Kalkulasi Total Kekayaan Bersih (Net Worth) & jumlah item tercatat',
      'Filter Aset Bergerak dan Aset Tetap dengan badge kategori',
      'Perbandingan harga beli awal vs nilai kini (+% / -%)',
    ],
    metricBadge: 'Pelacak Net Worth',
    screenshots: [
      {
        src: assetsConfig.modules.asset.images[0],
        alt: 'Layar Manajemen Aset Sakuwara menampilkan properti, kendaraan, emas antam, dan saham',
        caption: 'Ringkasan Total Kekayaan Bersih & daftar aset tetap/bergerak',
      },
      {
        src: assetsConfig.modules.asset.images[1],
        alt: 'Layar detail nilai aset dan riwayat valuasi di Sakuwara',
        caption: 'Rincian harga beli dan perubahan nilai aset',
      },
    ],
  },
  {
    id: 'laporan',
    name: 'Laporan Keuangan',
    shortLabel: 'Laporan',
    category: 'wealth',
    icon: 'bar-chart-3',
    tagline: 'Analisis tren arus kas dan ekspor ke Excel kapan saja.',
    description:
      'Bandingkan pemasukan dan pengeluaran per minggu, bulan, tahun, atau rentang tanggal kustom. Dilengkapi grafik tren, Top 5 kategori, dan tombol Export Excel.',
    highlights: [
      'Filter periode Minggu, Bulan, Tahun, dan Kustom',
      'Tab Arus Kas & Tren, Kategori & Top 5, serta ringkasan Anggaran',
      'Tombol Export Excel langsung dari halaman laporan',
    ],
    metricBadge: 'Export Excel',
    screenshots: [
      {
        src: assetsConfig.modules.laporan.images[0],
        alt: 'Layar Laporan Keuangan Sakuwara menampilkan grafik Tren Arus Uang dan Tren Bulanan',
        caption: 'Grafik tren arus uang tahunan & perbandingan bulanan',
      },
      {
        src: assetsConfig.modules.laporan.images[1],
        alt: 'Layar Laporan Keuangan Sakuwara tab Kategori dan Top 5 pengeluaran',
        caption: 'Analisis distribusi kategori & Top 5 pengeluaran',
      },
      {
        src: assetsConfig.modules.laporan.images[2],
        alt: 'Layar Laporan Keuangan Sakuwara tab evaluasi Anggaran',
        caption: 'Laporan realisasi anggaran & ekspor data',
      },
    ],
  },
  {
    id: 'kategori',
    name: 'Kategori Kustom',
    shortLabel: 'Kategori',
    category: 'daily',
    icon: 'tags',
    tagline: 'Sesuaikan pos pengeluaran & pemasukan dengan ikon berwarna.',
    description:
      'Atur kategori seperti Makanan & Minuman, Transportasi, Belanja, Kesehatan, hingga Donasi dengan ikon dan palet lembut yang mudah dicari.',
    highlights: [
      'Tab terpisah untuk kategori Pengeluaran dan Pemasukan',
      'Pencarian cepat & ketuk tile untuk ubah atau hapus kategori',
      'Ikon konsisten yang otomatis terpakai di grafik laporan',
    ],
    metricBadge: 'Personalisasi Penuh',
    screenshots: [
      {
        src: assetsConfig.modules.kategori.images[0],
        alt: 'Layar Kategori Sakuwara menampilkan grid ikon kategori pengeluaran berwarna',
        caption: 'Grid kategori Pengeluaran & Pemasukan yang dapat dikustomisasi',
      },
    ],
  },
  {
    id: 'notes',
    name: 'Notes Pengeluaran (Asumsi)',
    shortLabel: 'Notes Asumsi',
    category: 'wealth',
    icon: 'lightbulb',
    tagline: 'Simulasikan belanja wacana sebelum uang benar-benar keluar.',
    description:
      'Simpan ide belanja atau kebutuhan mendatang lengkap dengan level prioritas (Rendah, Sedang, Tinggi) dan statusnya, lalu ubah jadi transaksi 1-klik saat dieksekusi.',
    highlights: [
      'Tab status Wacana Aktif, Sedang Berjalan, Terealisasi, & Dibatalkan',
      'Label urgensi (Rendah, Sedang, Tinggi) & estimasi tanggal target',
      'Tombol 1-klik Eksekusi untuk mengonversi catatan menjadi transaksi',
    ],
    metricBadge: 'Proyeksi Antisipatif',
    screenshots: [
      {
        src: assetsConfig.modules.notes.images[0],
        alt: 'Layar Notes Pengeluaran Asumsi Sakuwara dengan tombol Eksekusi dan tab status wacana',
        caption: 'Daftar belanja wacana lengkap dengan urgensi dan tombol Eksekusi',
      },
      {
        src: assetsConfig.modules.notes.images[1],
        alt: 'Layar detail catatan pengeluaran asumsi di Sakuwara',
        caption: 'Pengelolaan proyeksi biaya antisipatif sebelum realisasi',
      },
    ],
  },
];
