import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BD Hats | 12-Year Custom Hat Factory in Baoding, China",
  description: "From a 15-person workshop to a 50,000sqm facility serving 300+ global brands. Learn about Baoding Junyang's journey, mission, team, and factory capabilities since 2014.",
  openGraph: {
    title: "About BD Hats | Our Factory Story & Mission",
    description: "12 years of custom hat manufacturing excellence. 300+ brands, 50+ countries, 5M+ caps produced annually.",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
