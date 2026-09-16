/**
 * Price display helpers.
 *
 * Products carry either a numeric band ("$3.50 - $7.00") or a quote-on-request
 * string ("Contact for factory pricing"). Every render site must handle both,
 * otherwise cards would print awkward text like "FOB Contact for factory
 * pricing" and the Product schema would emit a non-numeric price.
 */

/** True when the product has a numeric FOB band we can parse and emit as schema prices. */
export function hasNumericPrice(price: string): boolean {
  return price.trim().startsWith("$");
}

/** Card / meta label: "$3.50 - $7.00" → "FOB $3.50"; quote-on-request passes through. */
export function priceLabel(price: string): string {
  if (!hasNumericPrice(price)) return price;
  return `FOB ${price.split("-")[0].trim()}`;
}

/** Numeric low/high for schema.org offers. Returns null when pricing is on request. */
export function priceRange(price: string): { low: string; high: string } | null {
  if (!hasNumericPrice(price)) return null;
  const parts = price.split("-").map((p) => p.replace("$", "").trim());
  return { low: parts[0], high: parts[1] || parts[0] };
}
