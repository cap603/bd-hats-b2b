/**
 * Single source of truth for the comparison-page cluster.
 *
 * Kept in its own module (rather than inside ComparisonShell) because both
 * ComparisonShell and NavCompareMenu render these links — defining them in
 * either component would create a circular import between the two.
 */
export const COMPARISON_LINKS = [
  { href: "/compare/5-panel-vs-6-panel-caps", label: "5-Panel vs 6-Panel Caps" },
  { href: "/compare/flat-embroidery-vs-3d-puff", label: "Flat vs 3D Puff Embroidery" },
  {
    href: "/compare/cotton-twill-vs-brushed-cotton-vs-canvas",
    label: "Cotton Twill vs Brushed Cotton vs Canvas",
  },
  { href: "/compare/snapback-vs-strapback-vs-buckle", label: "Snapback vs Strapback vs Buckle" },
  {
    href: "/compare/china-vs-vietnam-vs-bangladesh-hat-sourcing",
    label: "China vs Vietnam vs Bangladesh",
  },
];
