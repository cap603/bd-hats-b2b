import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BD Hats | Premium Custom Hat Factory & B2B Wholesale",
  description: "Get premium custom hats directly from the factory. Specializing in custom embroidery, low MOQ, and bulk wholesale.",
  keywords: "wholesale hats, custom hat factory, china hat factory, bulk baseball caps, custom embroidery hats, cap wholesale, OEM hat supplier",
  openGraph: {
    title: "BD Hats | Premium Custom Hat Factory",
    description: "Premium custom hats directly from the factory. Custom embroidery, low MOQ.",
    images: ["https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Baoding Junyang Hat Manufacturing Co., Ltd.",
    "url": "https://b2b.bdjunyang.com",
    "logo": "https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png",
    "description": "Premium custom hat factory and B2B wholesale supplier specializing in embroidery and customized headwear.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "admin@bdjunyang.com"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
