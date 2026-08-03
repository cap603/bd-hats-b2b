import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Hat Pricing, MOQ & Shipping Guide | Wholesale Cost Breakdown | BD Hats",
  description: "Transparent pricing guide for custom hats: how much do custom caps cost, FOB vs CIF explained, MOQ 200pcs, air freight vs sea freight costs, sample fees, and volume discounts. Factory-direct from China.",
  openGraph: {
    title: "Custom Hat Pricing & Shipping Guide | BD Hats Factory",
    description: "Complete cost breakdown for custom hat orders: wholesale pricing, MOQ, shipping methods, sample costs, and volume discounts explained.",
    type: "article",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
