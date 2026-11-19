import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '@/App';
import {
  faqConfig,
  heroConfig,
  navbarConfig,
  pricingConfig,
  seoConfig,
  showcaseConfig,
} from '@/config';

describe('Landing Page Sakuwara', () => {
  it('merender brand, navbar Fitur & Harga, hero, dan menyinkronkan document.title dari config', () => {
    render(<App />);

    expect(document.title).toBe(seoConfig.title);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: new RegExp(heroConfig.title, 'i'),
      }),
    ).toBeInTheDocument();

    const header = screen.getByRole('banner');
    expect(within(header).getByRole('link', { name: 'Fitur' })).toHaveAttribute('href', '#fitur');
    expect(within(header).getByRole('link', { name: 'Harga' })).toHaveAttribute('href', '#harga');
    expect(document.querySelector('video')).toBeNull();
  });

  it('memungkinkan pergantian modul showcase dan navigasi slide gambar untuk Laporan', () => {
    render(<App />);

    const showcaseTabs = screen.getByRole('tablist', {
      name: showcaseConfig.moduleListAriaLabel,
    });
    const laporanTab = within(showcaseTabs).getByRole('tab', { name: /Laporan Keuangan/i });
    fireEvent.click(laporanTab);

    const panel = screen.getByRole('tabpanel', { name: 'Laporan Keuangan' });
    expect(within(panel).getByRole('heading', { name: 'Laporan Keuangan' })).toBeInTheDocument();

    const nextBtn = within(panel).getByRole('button', {
      name: showcaseConfig.phoneFrame.nextSlideAriaLabel,
    });
    fireEvent.click(nextBtn);
    expect(within(panel).getByText(`${showcaseConfig.phoneFrame.badgeLabel} • 2/3`)).toBeInTheDocument();
  });

  it('menyediakan strip pill horizontal mobile pada showcase fitur yang sinkron dengan panel preview', () => {
    render(<App />);

    const mobileTabs = screen.getByRole('tablist', {
      name: showcaseConfig.mobileModuleListAriaLabel,
    });
    const dompetPill = within(mobileTabs).getByRole('tab', { name: 'Dompet' });
    fireEvent.click(dompetPill);

    expect(screen.getByRole('tabpanel', { name: 'Dompet & Rekening' })).toBeInTheDocument();
  });

  it('memfilter modul berdasarkan kategori dan dapat di-reset ke Semua', () => {
    render(<App />);

    const filterGroup = screen.getByRole('group', {
      name: showcaseConfig.categoryFilterAriaLabel,
    });
    const planningBtn = within(filterGroup).getByRole('button', { name: 'Perencanaan & Target' });
    fireEvent.click(planningBtn);

    const tablist = screen.getByRole('tablist', {
      name: showcaseConfig.moduleListAriaLabel,
    });
    expect(within(tablist).getAllByRole('tab')).toHaveLength(4);

    const allBtn = within(filterGroup).getByRole('button', { name: 'Semua (11)' });
    fireEvent.click(allBtn);
    expect(within(tablist).getAllByRole('tab')).toHaveLength(11);
  });

  it('menampilkan 4 paket harga dan mengganti tampilan harga saat toggle Bulanan / Tahunan ditekan', () => {
    render(<App />);

    expect(screen.getByText('Rp 45.000 / bln')).toBeInTheDocument();

    const yearlyBtn = screen.getByRole('button', {
      name: new RegExp(pricingConfig.yearlyLabel, 'i'),
    });
    fireEvent.click(yearlyBtn);

    expect(screen.getByText('Rp 486.000 / thn')).toBeInTheDocument();
    expect(screen.getByText('Rp 810.000 / thn')).toBeInTheDocument();
  });

  it('membuka dan menutup item FAQ serta drawer menu navigasi mobile', () => {
    render(<App />);

    const secondQuestion = faqConfig.items[1]!.question;
    const faqButton = screen.getByRole('button', { name: secondQuestion });
    expect(faqButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(faqButton);
    expect(faqButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(faqConfig.items[1]!.answer)).toBeInTheDocument();

    const openMenuBtn = screen.getByRole('button', {
      name: navbarConfig.openMenuAriaLabel,
    });
    expect(openMenuBtn).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(openMenuBtn);
    expect(
      screen.getByRole('button', { name: navbarConfig.closeMenuAriaLabel }),
    ).toHaveAttribute('aria-expanded', 'true');
  });
});
