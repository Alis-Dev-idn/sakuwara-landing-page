/**
 * Pemetaan seluruh aset visual resmi Sakuwara dari folder `assets/` di root.
 * Menggunakan static ES imports lewat alias `@assets` agar Vite memvalidasi dan
 * membundel aset dengan content-hash tanpa memindahkan folder `assets/`.
 */

import logoIcon from '@assets/logo/icon.png';
import logoIconText from '@assets/logo/icon-text.png';

import dashboard01 from '@assets/dashboard/dashboard_01.png';
import dashboard02 from '@assets/dashboard/dashboard_02.png';

import transaksi01 from '@assets/transaksi/transaksi_01.png';
import transaksi02 from '@assets/transaksi/transaksi_02.png';

import dompet01 from '@assets/dompet/dompet_01.png';
import dompet02 from '@assets/dompet/dompet_02.png';

import tabungan01 from '@assets/tabungan/tabungan_01.png';
import tabungan02 from '@assets/tabungan/tabungan_02.png';

import anggaran01 from '@assets/anggaran/anggaran_01.png';
import anggaran02 from '@assets/anggaran/anggaran_02.png';

import tagihan01 from '@assets/tagihan/tagihan_01.png';
import tagihan02 from '@assets/tagihan/tagihan_02.png';

import perencanaan01 from '@assets/perencanaan/perencanaan_01.png';

import asset01 from '@assets/asset/asset_01.png';
import asset02 from '@assets/asset/asset_02.png';

import laporan01 from '@assets/laporan/laporan_01.png';
import laporan02 from '@assets/laporan/laporan_02.png';
import laporan03 from '@assets/laporan/laporan_03.png';

import kategori01 from '@assets/kategori/kategori_01.png';

import notes01 from '@assets/notes/notes_01.png';
import notes02 from '@assets/notes/notes_02.png';

export const assetsConfig = {
  logo: {
    icon: logoIcon,
    iconText: logoIconText,
  },
  modules: {
    dashboard: {
      images: [dashboard01, dashboard02],
    },
    transaksi: {
      images: [transaksi01, transaksi02],
    },
    dompet: {
      images: [dompet01, dompet02],
    },
    tabungan: {
      images: [tabungan01, tabungan02],
    },
    anggaran: {
      images: [anggaran01, anggaran02],
    },
    tagihan: {
      images: [tagihan01, tagihan02],
    },
    perencanaan: {
      images: [perencanaan01],
    },
    asset: {
      images: [asset01, asset02],
    },
    laporan: {
      images: [laporan01, laporan02, laporan03],
    },
    kategori: {
      images: [kategori01],
    },
    notes: {
      images: [notes01, notes02],
    },
  },
} as const;
