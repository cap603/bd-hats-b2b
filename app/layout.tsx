import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        {/* —— ANALYTICS: Replace G-XXXXXXXXXX with your GA4 Measurement ID —— */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');`}
        </Script>
        {/* —— CLARITY: Replace XXXXXXXX with your Clarity project ID —— */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","XXXXXXXX");`}
        </Script>
      </body>
    </html>
  );
}
