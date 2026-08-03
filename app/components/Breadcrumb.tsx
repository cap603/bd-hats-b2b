"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useTranslations } from "next-intl";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const t = useTranslations("breadcrumb");

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center gap-1.5 text-xs font-medium text-gray-400 flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
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
  );
}
