export function formatCurrency(amount: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency,
  }).format(amount);
}
