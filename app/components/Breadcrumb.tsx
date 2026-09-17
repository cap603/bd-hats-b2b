"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useT, useLang } from "../lib/i18n";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const SITE = "https://bdjunyang.com";

/**
 * Visible breadcrumb + matching BreadcrumbList JSON-LD.
 *
 * The schema lives here rather than in each page so every consumer gets it.
 * Landing pages and comparison pages already rendered this component's markup
 * but declared no structured data, so 32 URLs had a visible breadcrumb that
 * search engines and AI retrieval could not read as one.
 *
 * Pages that need a different hierarchy (product pages) simply pass their own
 * items — there is no second schema to keep in sync.
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const t = useT("breadcrumb");
  const lang = useLang();

  // The shells pass href "/" for Home. Resolve it to the current locale rather
  // than leaning on the root redirect, so an ES page keeps the visitor in ES.
  const resolved = items.map((item, i) =>
    i === 0 && item.href === "/" ? { ...item, href: `/${lang}` } : item
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: resolved.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      // The final crumb is the current page; omitting `item` is valid and
      // avoids pointing at a URL that may differ from the canonical.
      ...(item.href && i < resolved.length - 1
        ? { item: `${SITE}${item.href.startsWith("/") ? item.href : `/${item.href}`}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-8 max-w-7xl mx-auto">
        <ol className="flex items-center gap-1.5 text-xs font-medium text-gray-400 flex-wrap">
          {resolved.map((item, i) => {
            const isLast = i === resolved.length - 1;
            return (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} className="shrink-0 text-gray-300" />}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-black transition-colors truncate max-w-[200px]"
                  >
                    {i === 0 && <Home size={12} className="inline mr-1 -mt-0.5" />}
                    {item.label}
                  </Link>
                ) : (
                  <span className={`truncate max-w-[280px] ${isLast ? "text-black font-semibold" : ""}`}>
                    {isLast ? item.label : (
                      <>
                        {i === 0 && <Home size={12} className="inline mr-1 -mt-0.5" />}
                        {item.label}
                      </>
                    )}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
