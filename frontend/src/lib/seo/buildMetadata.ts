import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site.config";
import { getService } from "./services";

export type SeoInput = {
  /** Page title. The layout template appends " | ISECURION" unless absoluteTitle is true. */
  title: string;
  description: string;
  /** Route path, e.g. "/technical-services/cloud-security-assessment" */
  path: string;
  keywords?: readonly string[];
  /** Use the title exactly as given (home page) */
  absoluteTitle?: boolean;
  /** Override Open Graph / Twitter text when it should differ from the page title */
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  /** Absolute or site-relative image URL */
  image?: { url: string; alt?: string; width?: number; height?: number };
  /** Keep out of search results (thank-you pages, internal pages) */
  noindex?: boolean;
  ogType?: "website" | "article";
};

export function buildMetadata(input: SeoInput): Metadata {
  const canonical = absoluteUrl(input.path);
  const image: NonNullable<SeoInput["image"]> = input.image ?? siteConfig.defaultOgImage;
  const imageUrl = absoluteUrl(image.url);
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;

  const robots: Metadata["robots"] = input.noindex
    ? { index: false, follow: true }
    : {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      };

  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    keywords: input.keywords ? [...input.keywords] : undefined,
    alternates: { canonical },
    robots,
    openGraph: {
      type: input.ogType ?? "website",
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: imageUrl,
          alt: image.alt ?? siteConfig.defaultOgImage.alt,
          ...(image.width ? { width: image.width } : {}),
          ...(image.height ? { height: image.height } : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      title: input.twitterTitle ?? ogTitle,
      description: input.twitterDescription ?? ogDescription,
      images: [imageUrl],
    },
  };
}

/** Exact tags from the live isecurion.com home page */
export const homeSeo: SeoInput = {
  path: "/",
  absoluteTitle: true,
  title: "ISECURION | CREST Member & CERT-In Empanelled VAPT Company in India",
  description: siteConfig.metaDescription,
  keywords: [
    "CREST accredited penetration testing",
    "CREST member India",
    "CREST accredited company India",
    "CREST penetration testing company",
    "CREST accredited VAPT",
    "VAPT services India",
    "penetration testing company India",
    "cybersecurity company Bangalore",
    "CERT-IN empanelled",
    "CERT-In empanelled auditor",
    "SOC 2 compliance",
    "ISO 27001 audit",
    "DPDP compliance",
    "red team assessment",
    "cloud security assessment",
    "phishing simulation platform",
    "Drosera",
    "Vulnytics",
    "vulnerability management platform",
  ],
  ogTitle: "CREST Member & CERT-In Empanelled VAPT & Penetration Testing Company in India - ISECURION",
  ogDescription:
    "ISECURION is a CREST Member, accredited for Penetration Testing, and a CERT-In empanelled and ISO 27001:2022 certified company providing VAPT services in India. Get application penetration testing, SOC 2 compliance & security audits done.",
  twitterTitle: "CREST Member & CERT-In Empanelled VAPT & Penetration Testing Company in India",
  twitterDescription:
    "A CREST Member (accredited for Penetration Testing), CERT-In empanelled and ISO 27001:2022 certified cybersecurity company providing VAPT services in India.",
};

/** One-liner for any service page: export const metadata = serviceMetadata("cloud-security") */
export function serviceMetadata(slug: string): Metadata {
  const s = getService(slug);
  return buildMetadata({
    title: s.title,
    description: s.description,
    path: s.path,
    keywords: s.keywords,
    ogTitle: s.ogTitle ?? `${s.title} | ${siteConfig.name}`,
    ogDescription: s.ogDescription,
    twitterTitle: s.twitterTitle,
    twitterDescription: s.twitterDescription,
    image: s.image,
  });
}