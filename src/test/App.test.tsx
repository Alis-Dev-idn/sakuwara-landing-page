import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { App } from '@/App';
import { siteConfig } from '@/config';

describe('Landing Page Sakuwara', () => {
  it('merender brand, hero, CTA utama, dan menyinkronkan document.title dari config', () => {
    render(<App />);

    expect(document.title).toBe(siteConfig.seo.title);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: new RegExp(siteConfig.hero.title, 'i'),
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole('button', { name: siteConfig.hero.primaryCta.ariaLabel })).toHaveLength(1);
    expect(screen.getAllByRole('img', { name: siteConfig.brand.logoWordmarkAlt })).toHaveLength(2);
    expect(screen.getByRole('img', { name: siteConfig.brand.logoAlt })).toBeInTheDocument();
  });

  it('memungkinkan pergantian modul showcase dan menampilkan slide multi-screenshot untuk Laporan', () => {
    render(<App />);

    const showcaseTabs = screen.getByRole('tablist', {
      name: siteConfig.showcase.moduleListAriaLabel,
    });
    const laporanTab = within(showcaseTabs).getByRole('tab', { name: /Laporan Keuangan/i });
    fireEvent.click(laporanTab);

    const panel = screen.getByRole('tabpanel', { name: 'Laporan Keuangan' });
    expect(within(panel).getByRole('heading', { name: 'Laporan Keuangan' })).toBeInTheDocument();
    expect(
      within(panel).getByRole('button', { name: `${siteConfig.showcase.slideLabelPrefix} 3` }),
    ).toBeInTheDocument();
  });

  it('memfilter modul berdasarkan kategori dan dapat di-reset ke Semua', () => {
    render(<App />);

    const filterGroup = screen.getByRole('group', {
      name: siteConfig.showcase.categoryFilterAriaLabel,
    });
    const planningBtn = within(filterGroup).getByRole('button', { name: 'Perencanaan & Target' });
    fireEvent.click(planningBtn);

    const tablist = screen.getByRole('tablist', {
      name: siteConfig.showcase.moduleListAriaLabel,
    });
    expect(within(tablist).getAllByRole('tab')).toHaveLength(4);

    const allBtn = within(filterGroup).getByRole('button', { name: 'Semua (11)' });
    fireEvent.click(allBtn);
    expect(within(tablist).getAllByRole('tab')).toHaveLength(11);
  });

  it('melakukan fallback ke PNG ketika video demo mengalami error', () => {
    render(<App />);

    const tablist = screen.getByRole('tablist', {
      name: siteConfig.showcase.moduleListAriaLabel,
    });
    fireEvent.click(within(tablist).getByRole('tab', { name: /Daftar Transaksi/i }));

    const panel = screen.getByRole('tabpanel', { name: 'Daftar Transaksi' });
    const videoEl = panel.querySelector('video');
    expect(videoEl).not.toBeNull();
    // Lapisan screenshot PNG sudah terender di bawah video sebelum frame video selesai dimuat
    expect(within(panel).getByRole('img')).toBeInTheDocument();

    fireEvent.error(videoEl!);

    expect(within(panel).getByText(siteConfig.showcase.videoFallbackNotice)).toBeInTheDocument();
    expect(within(panel).getByRole('img')).toBeInTheDocument();
  });

  it('menghormati prefers-reduced-motion dengan menampilkan screenshot statis & petunjuk putar manual', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    try {
      render(<App />);
      const panel = screen.getByRole('tabpanel', { name: 'Beranda Ringkas' });
      expect(panel.querySelector('video')).toBeNull();
      expect(within(panel).getByText(siteConfig.showcase.reducedMotionHint)).toBeInTheDocument();
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });

  it('membuka dan menutup item FAQ secara aksesibel serta menampilkan modal placeholder CTA', () => {
    render(<App />);

    const secondQuestion = siteConfig.faq.items[1]!.question;
    const faqButton = screen.getByRole('button', { name: secondQuestion });
    expect(faqButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(faqButton);
    expect(faqButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(siteConfig.faq.items[1]!.answer)).toBeInTheDocument();

    const downloadBtn = screen.getByRole('button', { name: siteConfig.hero.primaryCta.ariaLabel });
    fireEvent.click(downloadBtn);

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText(siteConfig.downloadNotice.title)).toBeInTheDocument();
    expect(within(dialog).getByText(siteConfig.hero.primaryCta.href)).toBeInTheDocument();

    const closeBtn = within(dialog).getAllByRole('button', {
      name: siteConfig.downloadNotice.closeButtonLabel,
    })[0]!;
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('membuka dan menutup drawer menu navigasi mobile', () => {
    render(<App />);

    const openMenuBtn = screen.getByRole('button', {
      name: siteConfig.navbar.openMenuAriaLabel,
    });
    expect(openMenuBtn).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(openMenuBtn);
    expect(
      screen.getByRole('button', { name: siteConfig.navbar.closeMenuAriaLabel }),
    ).toHaveAttribute('aria-expanded', 'true');
  });
});
