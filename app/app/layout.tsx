import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "BD Hats - Premium Hat Manufacturer & B2B Supplier",
  description: "High-quality hats for wholesale. Custom designs and bulk orders available.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
