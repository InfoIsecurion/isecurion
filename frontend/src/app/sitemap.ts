
import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo/site.config";
import { services } from "../lib/seo/services";

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
  "dora-compliance",
];

const companyPages = ["/company/about", "/company/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = serviceFolders.map(
    (folder) => `/services/${folder}`
  );

  // Combine all paths and remove duplicates globally
  const allPaths = Array.from(
    new Set([
      ...services.map((service) => service.path),
      ...servicePaths,
      ...companyPages,
    ])
  );

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...allPaths.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: companyPages.includes(path)
        ? ("yearly" as const)
        : ("monthly" as const),
      priority: companyPages.includes(path) ? 0.6 : 0.8,
    })),
  ];
}
