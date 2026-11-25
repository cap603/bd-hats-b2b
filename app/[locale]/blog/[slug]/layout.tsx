import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RESOURCES } from "../../../lib/resources-data";
import { getAlternateLanguages } from "../../../lib/seo";

export async function generateStaticParams() {
  const slugs = Object.keys(RESOURCES.en);
  return ["en", "es"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;
  const l = locale === "es" ? "es" : "en";
  const article = RESOURCES[l]?.[slug];

  if (!article) return notFound();

  const path = `/blog/${slug}`;
  const canonical = `https://bdjunyang.com/${l}${path}`;
  const languages = getAlternateLanguages(path);

  return {
    title: {
      absolute: `${article.title} | BD Hats`,
    },
    description: article.metaDesc,
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "BD Hats Factory",
      title: `${article.title} | BD Hats`,
      description: article.metaDesc,
      publishedTime: article.published,
      modifiedTime: article.updated,
    },
  };
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
