"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-black transition px-2 py-1 rounded-md hover:bg-gray-100"
      title={t("switchTo")}
    >
      <Globe size={14} />
      <span>{t("label")}</span>
    </button>
  );
}
