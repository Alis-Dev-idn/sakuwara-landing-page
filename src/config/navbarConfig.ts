import type { NavbarConfig } from './types';

/**
 * Konfigurasi navigasi utama (Navbar) beserta label, tautan, dan ikon tombol CTA.
 */
export const navbarConfig: NavbarConfig = {
  ariaLabel: 'Navigasi utama Sakuwara',
  links: [
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Fitur', href: '#fitur' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Unduh Aplikasi',
  ctaHref: '#unduh',
  ctaIcon: 'download',
  openMenuAriaLabel: 'Buka menu navigasi',
  closeMenuAriaLabel: 'Tutup menu navigasi',
};
