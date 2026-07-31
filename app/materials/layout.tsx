import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Hat Materials Guide | Cotton, Wool, Polyester & More | BD Hats",
  description: "Complete guide to custom hat materials: cotton twill, brushed cotton, wool, polyester, nylon, canvas. Learn closure types (snapback, buckle, velcro, fitted) and panel construction for your wholesale cap order.",
  openGraph: {
    title: "Hat Materials & Customization Options Guide | BD Hats Factory",
    description: "Everything about cap fabrics, closures, panels, and custom options. Cotton twill, snapback, buckle, fitted — make the right choice for your brand.",
    type: "article",
  },
};

export default function MaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
