import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Trucker Hats Wholesale | Mesh Back Caps Factory | BD Hats",
  description: "Wholesale custom trucker hats from a Chinese factory. Foam front + mesh back caps, custom embroidery & printing, MOQ 200pcs, factory direct pricing. SGS verified manufacturer since 2014.",
  openGraph: {
    title: "Custom Trucker Hats — Mesh Back Wholesale Factory | BD Hats",
    description: "Custom trucker hats with foam fronts and breathable mesh backs. Ideal for promo, beverage and outdoor brands. MOQ 200pcs, 15-day production.",
    type: "website",
  },
};

export default function TruckerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
