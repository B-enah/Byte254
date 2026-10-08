/**
 * Format a number to Kenyan Shilling currency string.
 * Example: formatCurrency(245000) => "KSh 245,000"
 */
export function formatCurrency(amount: number): string {
  return `KSh ${amount.toLocaleString()}`;
}
