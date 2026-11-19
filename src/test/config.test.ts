import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  assetsConfig,
  featuresConfig,
  heroConfig,
  navbarConfig,
  pricingConfig,
  siteConfig,
} from '@/config';

const EXPECTED_MODULE_IDS = [
  'dashboard',
  'transaksi',
  'dompet',
  'anggaran',
  'tabungan',
  'tagihan',
  'perencanaan',
  'asset',
  'laporan',
  'kategori',
  'notes',
];

describe('Konfigurasi terpusat & pemetaan aset root', () => {
  it('menyediakan seluruh 11 modul fitur Sakuwara berbasis gambar tanpa video', () => {
    expect(featuresConfig).toHaveLength(11);
    const ids = featuresConfig.map((m) => m.id);
    expect(ids).toEqual(EXPECTED_MODULE_IDS);

    for (const moduleItem of featuresConfig) {
      expect(moduleItem.name.trim().length).toBeGreaterThan(0);
      expect(moduleItem.description.trim().length).toBeGreaterThan(0);
      expect(moduleItem.highlights.length).toBeGreaterThanOrEqual(2);
      expect(moduleItem.screenshots.length).toBeGreaterThanOrEqual(1);

      for (const shot of moduleItem.screenshots) {
        expect(shot.src).toBeTruthy();
        expect(shot.alt.trim().length).toBeGreaterThan(5);
      }
    }
  });

  it('memetakan logo dari assets/logo dan mempertahankan seluruh folder assets di root', () => {
    expect(assetsConfig.logo.icon).toBeTruthy();
    expect(assetsConfig.logo.iconText).toBeTruthy();

    const rootAssetsDir = path.resolve(process.cwd(), 'assets');
    expect(fs.existsSync(rootAssetsDir)).toBe(true);
    expect(fs.existsSync(path.join(rootAssetsDir, 'logo', 'icon.png'))).toBe(true);
    expect(fs.existsSync(path.join(rootAssetsDir, 'logo', 'icon-text.png'))).toBe(true);

    for (const folder of EXPECTED_MODULE_IDS) {
      expect(fs.existsSync(path.join(rootAssetsDir, folder))).toBe(true);
    }
  });

  it('memiliki config terpecah per lokasi yang lengkap termasuk navbar, frame HP, ikon tombol, dan harga', () => {
    expect(siteConfig.seo.title).toContain('Sakuwara');
    expect(navbarConfig.links.some((l) => l.label === 'Fitur' && l.href === '#fitur')).toBe(true);
    expect(navbarConfig.links.some((l) => l.label === 'Harga' && l.href === '#harga')).toBe(true);
    expect(navbarConfig.ctaIcon).toBeTruthy();

    expect(heroConfig.phoneFrame.screenshots.length).toBeGreaterThanOrEqual(2);
    expect(heroConfig.phoneFrame.autoSlideIntervalMs).toBeGreaterThan(0);
    expect(heroConfig.primaryCta.icon).toBeTruthy();
    expect(heroConfig.secondaryCta.icon).toBeTruthy();

    expect(pricingConfig.plans).toHaveLength(4);
    expect(pricingConfig.plans.map((p) => p.monthly.price)).toEqual([
      'Rp 0',
      'Rp 15.000 / bln',
      'Rp 45.000 / bln',
      'Rp 75.000 / bln',
    ]);
    expect(pricingConfig.plans.map((p) => p.yearly.price)).toEqual([
      'Rp 0',
      'Rp 162.000 / thn',
      'Rp 486.000 / thn',
      'Rp 810.000 / thn',
    ]);
  });
});
