import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo/site.config";
import { services } from "../lib/seo/services";

/**
 * Folder names inside src/app/services.
 * Each one must contain a page.tsx, otherwise remove it from this list.
 */
const serviceFolders = [
  "aadhar-audit",
  "ai-augmented-red-team",
  "bse-nse-audit-services",
  "cicra-audit-services",
  "cloud-security-assessment",
  "continuous-breach-attack-simulation",
  "crypto-currency-exchange",
  "devsecops",
  "dpdp-compliance",
  "outsourced-dpo",
  "gdpr",
  "hybrid-soc",
  "industrial-control-systems-security-assessment",
  "inhouse-soc",
  "iot-security-testing",
  "irda-audit",
  "iso-27001",
  "managed-security-services",
  "mobile-application-security",
  "phishing-simulation",
  "rbi-security-audit",
  "red-team-assessment",
  "secure-code-review",
  "smart-contract-security",
  "soc-2-compliance",
  "vulnerability-assessment-penetration-testing",
  "vciso",
  "web-application-security-assessment",
];

const companyPages = ["/company/about", "/company/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages already in services.ts and the folder list above are merged, with no duplicates
  const servicePaths = Array.from(
    new Set([...services.map((s) => s.path), ...serviceFolders.map((f) => `/services/${f}`)]),
  );

  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    ...servicePaths.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...companyPages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}