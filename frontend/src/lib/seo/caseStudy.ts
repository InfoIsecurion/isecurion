import { cache } from "react";
import type { Metadata } from "next";
import { buildMetadata } from "./buildMetadata";
import { absoluteUrl, schemaId, siteConfig } from "./site.config";
import { caseStudySeo } from "./caseStudySeo";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type CaseStudySeo = {
  title: string;
  slug: string;
  heading?: string;
  description?: string;
  faqs?: { question: string; answer: string }[];
  featuredImage?: { imageData?: string; alt?: string };
  createdAt?: string;
  updatedAt?: string;
};

/** One request per page render (page + generateMetadata share it) */
export const getCaseStudyBySlug = cache(async (slug: string) => {
  const res = await fetch(`${API_URL}/api/case-studies/get-all`, { cache: "no-store" });
  if (!res.ok) return undefined;
  const json = await res.json();
  return (json.data as CaseStudySeo[] | undefined)?.find((x) => x.slug === slug);
});

const clip = (t: string, max = 160) => {
  const s = t.replace(/\s+/g, " ").trim();
  return s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
};

export async function caseStudyMetadata(slug: string): Promise<Metadata> {
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return {};
  const seo = caseStudySeo[slug];
  const apiImg = cs.featuredImage?.imageData;
  const image =
    seo?.image ??
    (apiImg && /^https?:\/\//.test(apiImg) ? { url: apiImg, alt: cs.featuredImage?.alt || cs.title } : undefined);
  const keywords = seo?.keywords;

  const md = buildMetadata({
    title: seo?.title ?? cs.title,
    description: seo?.description ?? clip(cs.description || cs.heading || cs.title),
    path: `/case-studies/${slug}`,
    keywords,
    ogTitle: seo?.ogTitle ?? `${seo?.title ?? cs.title} | ${siteConfig.name}`,
    ogDescription: seo?.ogDescription,
    twitterTitle: seo?.twitterTitle,
    twitterDescription: seo?.twitterDescription,
    image,
  });

  const canonical = absoluteUrl(`/case-studies/${slug}`);
  const published = seo?.publishedTime ?? cs.createdAt;
  return {
    ...md,
    openGraph: {
      ...md.openGraph,
      type: "article",
      ...(published ? { publishedTime: published } : {}),
      ...((seo?.modifiedTime ?? cs.updatedAt) ? { modifiedTime: seo?.modifiedTime ?? cs.updatedAt } : {}),
      authors: ["ISECURION"],
      ...(seo?.section ? { section: seo.section } : {}),
      ...(seo?.tags ? { tags: seo.tags } : {}),
      ...(seo?.alternateLocales ? { alternateLocale: seo.alternateLocales } : {}),
    } as Metadata["openGraph"],
    ...(seo?.hreflang
      ? { alternates: { ...md.alternates, languages: Object.fromEntries(seo.hreflang.map((l) => [l, canonical])) } }
      : {}),
  };
}

export function caseStudySchema(cs: CaseStudySeo) {
  const seo = caseStudySeo[cs.slug];
  const published = seo?.publishedTime ?? cs.createdAt;
  const modified = seo?.modifiedTime ?? cs.updatedAt ?? published;
  const url = absoluteUrl(`/case-studies/${cs.slug}`);
  const img = cs.featuredImage?.imageData;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: cs.title,
      description: clip(cs.description || cs.heading || cs.title, 300),
      url,
      mainEntityOfPage: url,
      ...(img && /^https?:\/\//.test(img) ? { image: img } : {}),
      ...(published ? { datePublished: published } : {}),
      ...(modified ? { dateModified: modified } : {}),
      ...(seo?.section ? { articleSection: seo.section } : {}),
      author: { "@id": schemaId("organization") },
      publisher: { "@id": schemaId("organization") },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: absoluteUrl("/case-studies") },
        { "@type": "ListItem", position: 3, name: cs.title, item: url },
      ],
    },
  ];
  if (cs.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: cs.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
