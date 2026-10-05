export const siteInfo = Object.freeze({
  name: 'Voice of Ex-Servicemen Society',
  legalName: 'Voice of Ex-Servicemen Society (Regd.) India',
  email: 'info@voiceofexservicemen.co.in',
  phone: '9897468767',
  addressLines: Object.freeze([
    '59, Vipin Garden Extension Dwarka',
    'New Delhi-110059'
  ])
});

export const officeAddress = siteInfo.addressLines.join(', ');
export const phoneLink = `tel:${siteInfo.phone}`;

export function emailLink(subject) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${siteInfo.email}${query}`;
}
