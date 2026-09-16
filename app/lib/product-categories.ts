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
    categories: ["Baseball Caps", "Vintage Series", "Sports & Active"],
  },
  {
    href: "/custom-trucker-hats",
    label: "Trucker Hat",
    desc: "Mesh back · foam or cotton front",
    categories: ["Trucker Hats"],
  },
  {
    href: "/wholesale-snapbacks",
    label: "Snapback Cap",
    desc: "Flat brim · adjustable buckle",
    categories: ["Snapback Caps"],
  },
  {
    href: "/custom-beanies-manufacturer",
    label: "Beanie",
    desc: "Cuffed · pompom · satin lined",
    categories: ["Beanies"],
  },
  {
    href: "/custom-bucket-hats-manufacturer",
    label: "Bucket Hat",
    desc: "Nylon · large brim · waterproof",
    categories: ["Bucket Hats"],
  },
] as const;

/** Product links shown per category before the "View all" link takes over. */
export const PRODUCTS_PER_NAV_CATEGORY = 5;
