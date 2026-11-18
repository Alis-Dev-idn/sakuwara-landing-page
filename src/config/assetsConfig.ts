/**
 * Pemetaan seluruh aset visual & video demo resmi Sakuwara dari folder `assets/` di root.
 * Menggunakan static ES imports lewat alias `@assets` agar Vite memvalidasi dan
 * membundel aset dengan content-hash tanpa memindahkan folder `assets/`.
 */

import logoIcon from '@assets/logo/icon.png';
import logoIconText from '@assets/logo/icon-text.png';

import dashboard01 from '@assets/dashboard/dashboard_01.png';
import dashboard02 from '@assets/dashboard/dashboard_02.png';
import dashboardClip01 from '@assets/dashboard/clip_01.mp4';

import transaksi01 from '@assets/transaksi/transaksi_01.png';
import transaksi02 from '@assets/transaksi/transaksi_02.png';
import transaksiClip01 from '@assets/transaksi/transaksi_01.mp4';

import dompet01 from '@assets/dompet/dompet_01.png';
import dompet02 from '@assets/dompet/dompet_02.png';
import dompetClip01 from '@assets/dompet/dompet_01.mp4';

import tabungan01 from '@assets/tabungan/tabungan_01.png';
import tabungan02 from '@assets/tabungan/tabungan_02.png';
import tabunganClip from '@assets/tabungan/tabungan.mp4';

import anggaran01 from '@assets/anggaran/anggaran_01.png';
import anggaran02 from '@assets/anggaran/anggaran_02.png';
import anggaranClip01 from '@assets/anggaran/anggaran_01.mp4';

import tagihan01 from '@assets/tagihan/tagihan_01.png';
import tagihan02 from '@assets/tagihan/tagihan_02.png';
import tagihanClip from '@assets/tagihan/1117.mp4';

import perencanaan01 from '@assets/perencanaan/perencanaan_01.png';

import asset01 from '@assets/asset/asset_01.png';
import asset02 from '@assets/asset/asset_02.png';
import assetClip01 from '@assets/asset/asset_01.mp4';

import laporan01 from '@assets/laporan/laporan_01.png';
import laporan02 from '@assets/laporan/laporan_02.png';
import laporan03 from '@assets/laporan/laporan_03.png';

import kategori01 from '@assets/kategori/kategori_01.png';

import notes01 from '@assets/notes/notes_01.png';
import notes02 from '@assets/notes/notes_02.png';
import notesClip01 from '@assets/notes/notes_01.mp4';

export const assetsConfig = {
  logo: {
    icon: logoIcon,
    iconText: logoIconText,
  },
  modules: {
    dashboard: {
      images: [dashboard01, dashboard02],
      video: dashboardClip01,
    },
    transaksi: {
      images: [transaksi01, transaksi02],
      video: transaksiClip01,
    },
    dompet: {
      images: [dompet01, dompet02],
      video: dompetClip01,
    },
    tabungan: {
      images: [tabungan01, tabungan02],
      video: tabunganClip,
    },
    anggaran: {
      images: [anggaran01, anggaran02],
      video: anggaranClip01,
    },
    tagihan: {
      images: [tagihan01, tagihan02],
      video: tagihanClip,
    },
    perencanaan: {
      images: [perencanaan01],
    },
    asset: {
      images: [asset01, asset02],
      video: assetClip01,
    },
    laporan: {
      images: [laporan01, laporan02, laporan03],
    },
    kategori: {
      images: [kategori01],
    },
    notes: {
      images: [notes01, notes02],
      video: notesClip01,
    },
  },
} as const;
