import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Custom Hat Manufacturing Guide | How to Source Wholesale Caps from China",
  description: "Complete guide for B2B buyers: how to choose a custom hat factory, embroidery types explained, MOQ negotiation, quality control standards, and shipping logistics. Expert advice from a 12-year factory.",
  openGraph: {
    title: "Custom Hat Factory Guide for B2B Buyers | BD Hats",
    description: "Everything you need to know before ordering custom caps from China — factory selection, embroidery types, QC, and shipping.",
    type: "article",
  },
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
