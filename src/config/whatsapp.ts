import type { WhatsAppCtaConfig } from './types';

/**
 * Normalisasi nomor WhatsApp (mis. `0812...` atau `+62 812-...` -> `62812...`)
 * dan menyusun tautan `https://wa.me/<nomor>?text=<pesan>`.
 */
export function buildWhatsAppUrl({ nomor, message }: WhatsAppCtaConfig): string {
  const digitsOnly = nomor.replace(/\D/g, '');
  const normalizedNumber = digitsOnly.startsWith('+62')
    ? `62${digitsOnly.slice(1)}`
    : digitsOnly;
  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    return `https://wa.me/${normalizedNumber}`;
  }

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(trimmedMessage)}`;
}
