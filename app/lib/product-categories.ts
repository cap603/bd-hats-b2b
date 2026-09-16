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
    // Points straight at the product page so buyers reach a buyable cap in one
    // click from the nav. Swap back to "/custom-trucker-hats" if the line grows
    // into a multi-product category page.
    href: "/product/custom-foam-front-trucker-hat",
    label: "Trucker Hat",
    desc: "Mesh back · foam front",
  },
  {
    href: "/product/vintage-flat-brim-snapback-cap",
    label: "Snapback Cap",
    desc: "Flat brim · adjustable buckle",
  },
  {
    href: "/custom-beanies-manufacturer",
    label: "Beanie",
    desc: "Cuffed · pom-pom · jacquard knit",
  },
  {
    href: "/product/nylon-large-brim-bucket-hat",
    label: "Bucket Hat",
    desc: "Nylon · large brim · waterproof",
  },
];
