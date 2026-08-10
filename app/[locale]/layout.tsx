import type { Metadata } from "next";
import { I18nProvider } from "../lib/i18n";
import { notFound } from "next/navigation";
import { locales } from "../../i18n";
import { Analytics } from "@vercel/analytics/react";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import "../globals.css";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    metadataBase: new URL("https://b2b.bdjunyang.com"),
    title: {
      default: messages.meta.homeTitle,
      template: `%s | BD Hats`,
    },
    description: messages.meta.homeDesc,
    keywords: [
      "wholesale hats",
      "custom hat factory",
      "china hat manufacturer",
      "bulk baseball caps",
      "custom embroidery hats",
      "cap wholesale",
      "OEM hat supplier",
      "custom snapback",
      "dad hat factory",
      "trucker hat wholesale",
    ],
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
      languages: {
        en: "https://b2b.bdjunyang.com/en",
        es: "https://b2b.bdjunyang.com/es",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: "https://b2b.bdjunyang.com",
      siteName: "BD Hats Factory",
      title: locale === "es"
        ? "BD Hats | Fábrica Premium de Gorras — Directo de Fábrica, MOQ 200uds"
        : "BD Hats | Premium Custom Hat Factory — Factory Direct, MOQ 200pcs",
      description: locale === "es"
        ? "Gorras personalizadas premium directamente de fábrica desde 2014. Bordado personalizado, MOQ 200uds, muestras en 7 días, envíos globales."
        : "Premium custom hats directly from the factory since 2014. Custom embroidery, MOQ 200pcs, 7-day samples, shipped globally.",
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
      description: "Factory-direct custom hats since 2014. MOQ 200pcs · 7-Day Samples · Global Shipping.",
      images: ["https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Baoding Junyang Hat Manufacturing Co., Ltd.",
    url: "https://b2b.bdjunyang.com",
    logo: "https://sc01.alicdn.com/kf/H77e3adefc7b64346986b3b9b66ab5940x.png",
    description: "Premium custom hat factory and B2B wholesale supplier specializing in embroidery and customized headwear.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "admin@bdjunyang.com",
    },
  };

  return (
    <html lang={locale} className="scroll-smooth">
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
        <I18nProvider locale={locale} messages={messages}>
          {children}
        </I18nProvider>
        {/* Vercel Analytics — zero-config traffic & pageview tracking */}
        <Analytics />
        {/* Floating WhatsApp button — appears on every page */}
        <WhatsAppFloat />
        {/* —— ANALYTICS: Replace YOUR-GA4-ID with your actual Google Analytics 4 Measurement ID —— */}
        {/*
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA4-ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-YOUR-GA4-ID');"}
        </Script>
        */}
        {/* —— CLARITY: Replace YOUR-CLARITY-ID with your Microsoft Clarity project ID —— */}
        {/*
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {"(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','YOUR-CLARITY-ID');"}
        </Script>
        */}
      </body>
    </html>
  );
}
