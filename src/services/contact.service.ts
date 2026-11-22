import { BUSINESS_CONFIG } from '../config/business';

export function getTelUrl(): string {
  return `tel:${BUSINESS_CONFIG.phoneNumber}`;
}

export function getMailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const queryString = params.toString();
  return `mailto:${BUSINESS_CONFIG.email}${queryString ? `?${queryString}` : ''}`;
}

export function getInstagramUrl(): string {
  return BUSINESS_CONFIG.instagram;
}

export function validatePhone(phone: string): boolean {
  const digits = phone.replace(/[^0-9]/g, '');
  return digits.length >= 10 && digits.length <= 15;
}
