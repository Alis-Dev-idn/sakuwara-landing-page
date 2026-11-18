import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { assetsConfig, featuresConfig, siteConfig } from '@/config';

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

const MODULES_WITH_VIDEO = [
  'dashboard',
  'transaksi',
  'dompet',
  'anggaran',
  'tabungan',
  'tagihan',
  'asset',
  'notes',
];

describe('Konfigurasi terpusat & pemetaan aset root', () => {
  it('menyediakan seluruh 11 modul fitur Sakuwara beserta screenshot dan video yang tepat', () => {
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

      if (MODULES_WITH_VIDEO.includes(moduleItem.id)) {
        expect(moduleItem.videoSrc).toBeTruthy();
      } else {
        expect(moduleItem.videoSrc).toBeUndefined();
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

  it('memiliki teks terpusat lengkap pada siteConfig tanpa string penting kosong', () => {
    expect(siteConfig.seo.title).toContain('Sakuwara');
    expect(siteConfig.navbar.links.length).toBeGreaterThanOrEqual(3);
    expect(siteConfig.pillars.items).toHaveLength(4);
    expect(siteConfig.howItWorks.steps).toHaveLength(3);
    expect(siteConfig.faq.items.length).toBeGreaterThanOrEqual(4);
    expect(siteConfig.hero.primaryCta.label).toBeTruthy();
    expect(siteConfig.hero.secondaryCta.label).toBeTruthy();
  });
});
