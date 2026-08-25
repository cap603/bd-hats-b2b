import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM Hat Manufacturer China | Private Label Hat Factory | BD Hats",
  description: "Full-service OEM/ODM hat manufacturer in China. 100+ embroidery machines, 50,000sqm factory, SGS/CE/REACH certified, AQL 2.5 QC. Private label baseball caps, snapbacks, beanies since 2014.",
  openGraph: {
    title: "OEM Hat Manufacturer China — Private Label Factory | BD Hats",
    description: "Complete OEM/ODM hat manufacturing: design, sample, production, QC, packaging. 300+ brands served in 50+ countries. Factory-direct since 2014.",
    type: "website",
  },
};

export default function OemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
