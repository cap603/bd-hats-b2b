import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://b2b.bdjunyang.com"),
  title: {
    default: "BD Hats | Premium Custom Hat Factory & B2B Wholesale",
    template: "%s | BD Hats",
  },
  description: "Get premium custom hats directly from the factory. OEM/ODM since 2014. Custom embroidery, MOQ 200pcs, free 3D mockup, 7-day samples. SGS verified factory in Baoding, China.",
  keywords: ["wholesale hats", "custom hat factory", "china hat manufacturer", "bulk baseball caps", "custom embroidery hats", "cap wholesale", "OEM hat supplier", "custom snapback", "dad hat factory", "trucker hat wholesale"],
  authors: [{ name: "Baoding Junyang Hat Manufacturing Co., Ltd." }],
  creator: "Baoding Junyang",
  publisher: "Baoding Junyang Hat Manufacturing Co., Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://b2b.bdjunyang.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://b2b.bdjunyang.com",
    siteName: "BD Hats Factory",
    title: "BD Hats | Premium Custom Hat Factory — Factory Direct, MOQ 200pcs",
    description: "Premium custom hats directly from the factory since 2014. Custom embroidery, MOQ 200pcs, free 3D mockup, 7-day samples, shipped globally.",
    images: [
      {
        url: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
        width: 960,
        height: 960,
        alt: "BD Hats Factory - Custom Embroidery Baseball Caps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BD Hats | Premium Custom Hat Factory",
    description: "Factory-direct custom hats since 2014. MOQ 200pcs · Free 3D Mockup · 7-Day Samples · Global Shipping.",
    images: ["https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png"],
  },
  verification: {
    other: {
      "baidu-site-verification": "code",
    },
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
        <link rel="preconnect" href="https://sc01.alicdn.com" />
        <link rel="preconnect" href="https://sc02.alicdn.com" />
        <link rel="preconnect" href="https://sc04.alicdn.com" />
        <link rel="preconnect" href="https://s.alicdn.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
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
