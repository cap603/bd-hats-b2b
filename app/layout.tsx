import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BD Hats | Premium Custom Hat Manufacturer & B2B Wholesale Supplier",
  description: "Global OEM/ODM hat factory specializing in high-quality custom embroidery baseball caps, beanies, bucket hats, and trucker hats. Low MOQ, fast global shipping.",
  keywords: "wholesale hats, custom hat manufacturer, china hat factory, bulk baseball caps, custom embroidery hats, cap wholesale, OEM hat supplier",
  metadataBase: new URL("https://b2b.bdjunyang.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BD Hats | Custom Hat Manufacturer & B2B Wholesale",
    description: "Get premium custom hats directly from the manufacturer. Specializing in custom embroidery, low MOQ, and bulk wholesale.",
    url: "https://b2b.bdjunyang.com",
    siteName: "BD Hats",
    images: [
      {
        url: "/og-image.jpg", // We can add an OG image later
        width: 1200,
        height: 630,
        alt: "BD Hats Wholesale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BD Hats | Custom Hat Manufacturer & B2B Wholesale",
    description: "Premium custom hats directly from the manufacturer. Custom embroidery, low MOQ.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD for AI & Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BD Hats",
    "url": "https://b2b.bdjunyang.com",
    "logo": "https://sc01.alicdn.com/kf/H4287949d1c4d4ce8901c58aebf06e795L.png",
    "description": "Premium custom hat manufacturer and B2B wholesale supplier specializing in embroidery and customized headwear.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
