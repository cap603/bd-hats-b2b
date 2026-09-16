/**
 * Product categories for the top-navigation "Products" dropdown.
 *
 * SINGLE SOURCE OF TRUTH — to add a new category later, append one entry here
 * and every header that renders <NavProductsMenu /> picks it up automatically.
 *
 * `href` is either:
 *   - "#catalog"  → scrolls to the product grid on the homepage
 *   - "/slug"     → a category landing page
 * Both are prefixed with the active locale at render time.
 */
export const PRODUCT_CATEGORIES = [
  {
    href: "#catalog",
    label: "Baseball Cap",
    desc: "5-panel · 6-panel · A-frame · dad hats",
  },
  {
    href: "/custom-trucker-hats",
    label: "Trucker Hat",
    desc: "Mesh back · foam front",
  },
  {
    href: "/wholesale-snapbacks",
    label: "Snapback Cap",
    desc: "Flat brim · plastic snap closure",
  },
  {
    href: "/custom-beanies-manufacturer",
    label: "Beanie",
    desc: "Cuffed · pom-pom · jacquard knit",
  },
  {
    href: "/custom-bucket-hats-manufacturer",
    label: "Bucket Hat",
    desc: "Soft brim · cotton twill · corduroy",
  },
];
