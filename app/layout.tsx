// Root layout — required by Next.js App Router.
// All actual layout work is in [locale]/layout.tsx.
// This file MUST return children directly for next-intl to work.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
