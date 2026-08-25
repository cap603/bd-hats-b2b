import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Snapback Hats | Custom Snapback Manufacturer | BD Hats",
  description: "Factory-direct wholesale snapback hats from China. Custom snapbacks with 3D puff embroidery, MOQ 200pcs, $0.98-$3.90 FOB, SGS verified. Free samples program — get your quote in 12 hours.",
  openGraph: {
    title: "Wholesale Snapback Hats — Custom Snapback Factory | BD Hats",
    description: "Custom snapback hats at factory prices. 3D puff embroidery, 30+ colors, MOQ 200pcs, 15-day production. Direct from our SGS-verified factory.",
    type: "website",
  },
};

export default function SnapbacksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
