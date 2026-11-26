/**
 * Single source of truth for all site-wide SEO data.
 * Change a value once and every meta tag, schema node and sitemap entry follows.
 */

const url = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://isecurion.com").replace(/\/$/, "");

export type Office = {
  /** Fragment used for the schema @id, e.g. "office-bangalore" */
  id: string;
  name: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: { latitude: number; longitude: number };
};

export const siteConfig = {
  url,
  name: "ISECURION",
  legalName: "ISECURION TECHNOLOGIES",
  alternateName: "ISECURION Technologies",
  slogan: "Your Security, Our Responsibility",
  foundingDate: "2014",
  email: "info@isecurion.com",
  telephone: "+91-88612-01570",
  author: "ISECURION",
  themeColor: "#3498db",
  locale: "en_IN",
  language: "en",
  twitterHandle: "@ISECURION",

  /** Used in <meta name="description"> and as the default for pages */
  metaDescription:
    "ISECURION is a CERT-In empanelled VAPT & cybersecurity company and a CREST Member, accredited for Penetration Testing. We offer penetration testing, cloud security, SOC 2 compliance and phishing simulation across India including Bangalore, Mumbai, Delhi, Pune, and more.",

  /** Longer description used inside the Organization schema node */
  description:
    "ISECURION is a CERT-In empanelled cybersecurity company and a CREST Member, accredited for Penetration Testing. It offers VAPT, penetration testing, cloud security assessments, SOC 2 audits, ISO 27001 compliance, phishing simulation and managed security services across India and globally.",

  logo: {
    url: `${url}/images/isecurion1.png`,
    width: 200,
    height: 60,
  },

  /** Default Open Graph / Twitter image (1200x630 is ideal; swap when you have one) */
  defaultOgImage: {
    url: `${url}/images/isecurion1.png`,
    alt: "ISECURION - CREST Member & CERT-In Empanelled cybersecurity company",
  },

  sameAs: [
    "https://www.linkedin.com/company/isecurion",
    "https://twitter.com/isecurion",
    "https://www.facebook.com/ISECURION/",
  ],

  memberOf: { name: "CREST", url: "https://www.crest-approved.org/" },

  credentials: [
    {
      name: "CREST Member - accredited for Penetration Testing",
      category: "accreditation",
      recognizedBy: {
        type: "Organization",
        name: "CREST",
        url: "https://www.crest-approved.org/",
      },
    },
    {
      name: "CERT-In Empanelled Information Security Auditing Organisation",
      category: "empanelment",
      recognizedBy: {
        type: "GovernmentOrganization",
        name: "CERT-In (Indian Computer Emergency Response Team), Ministry of Electronics and Information Technology, Government of India",
        url: "https://www.cert-in.org.in/",
      },
    },
    {
      name: "ISO/IEC 27001:2022 Certified",
      category: "certification",
      recognizedBy: undefined,
    },
  ] as {
    name: string;
    category: string;
    recognizedBy?: { type: string; name: string; url: string };
  }[],

  knowsAbout: [
    "CREST accredited penetration testing",
    "Vulnerability Assessment and Penetration Testing (VAPT)",
    "Web application security",
    "Mobile application security",
    "Cloud security assessment",
    "Red team assessment",
    "Secure code review",
    "SOC 2 compliance",
    "ISO 27001 compliance",
    "DPDP Act compliance",
    "Phishing simulation",
    "Vulnerability management",
    "Managed security services (SOC)",
    "Incident response and digital forensics",
  ],

  areaServedCountries: [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Qatar",
    "Singapore",
    "Australia",
    "Saudi Arabia",
    "Kuwait",
    "Bahrain",
    "Oman",
    "Germany",
    "France",
    "Netherlands",
  ],

  areaServedCities: [
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Noida",
    "Gurugram",
  ],

  /** Corporate office first - it is also used as the Organization address */
  offices: [
    {
      id: "office-bangalore",
      name: "ISECURION - Bangalore (Corporate Office)",
      telephone: "+91-88612-01570",
      email: "info@isecurion.com",
      address: {
        streetAddress: "37, Judicial Layout 2nd Phase, Kanakapura Main Rd, Thalaghattaapura",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560109",
        addressCountry: "IN",
      },
      geo: { latitude: 12.8684, longitude: 77.5381 },
    },
        {
      id: "office-mumbai",
      name: "ISECURION - Mumbai Office",
      telephone: "+91-83560-80559",
      email: "sales.mumbai@isecurion.com",
      address: {
        streetAddress: "Millennial POD, A-203, A Wing, Boomerang, Chandivali Farm Road, Andheri East",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400072",
        addressCountry: "IN",
      },
      geo: { latitude: 19.1197, longitude: 72.8697 },
    },
    {
      id: "office-kolkata",
      name: "ISECURION - Kolkata Office",
      telephone: "+91-98305-54255",
      email: "sales.kol@isecurion.com",
      address: {
        streetAddress: "Arch Square, 8th Floor, Unit No. 809, Tower 1, Salt Lake City, Sector-V",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700091",
        addressCountry: "IN",
      },
      geo: { latitude: 22.5726, longitude: 88.4317 },
    },
    {
      id: "office-ahmedabad",
      name: "ISECURION - Ahmedabad Office",
      telephone: "+91-88612-01570",
      email: "info@isecurion.com",
      address: {
        streetAddress: "GF-001 Mauryansh Elanza, Shyamal Cross Road, Nr. Parekh Hospital, Satelite",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380015",
        addressCountry: "IN",
      },
      geo: { latitude: 23.0225, longitude: 72.5714 },
    },
    {
      id: "office-noida",
      name: "ISECURION - Noida Office",
      telephone: "+91-88612-01570",
      email: "info@isecurion.com",
      address: {
        streetAddress: "5006, 5th Floor, Nukleus Tower, Plot No. 29, Sector 142",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201305",
        addressCountry: "IN",
      },
      geo: { latitude: 28.5355, longitude: 77.391 },
    },
    {
      id: "office-usa",
      name: "ISECURION - United States Office",
      telephone: "+91-88612-01570",
      email: "info@isecurion.com",
      address: {
        streetAddress: "1014 N Plum Grove Road",
        addressLocality: "Schaumburg",
        addressRegion: "IL",
        postalCode: "60173",
        addressCountry: "US",
      },
      geo: { latitude: 42.0334, longitude: -88.0834 },
    },
  ] satisfies Office[],

  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$$",

  /** Software products that get a SoftwareApplication node on the home page */
  products: [
    {
      id: "vulnytics",
      name: "Vulnytics - Vulnerability Management Platform",
      applicationCategory: "SecurityApplication",
      url: `https://vulnytics.isecurion.com/`,
      image: `${url}/assets/images/vulnytics-logo.png`,
      description:
        "Vulnytics is a vulnerability tracking and penetration testing workflow platform designed for enterprises, startups and MSSPs to streamline remediation and improve security posture.",
      // NOTE: the live site declares this as price 0 INR (free). Remove `offer`
      // if Vulnytics is not actually free, otherwise Google may show "Free".
      offer: { price: "0", priceCurrency: "INR" },
    },
    {
      id: "drosera",
      name: "Drosera - Phishing Simulation Platform",
      alternateName: "Drosera",
      applicationCategory: "SecurityApplication",
      applicationSubCategory: "Phishing Simulation",
      url: "https://drosera.ai/",
      description:
        "Drosera is ISECURION's phishing simulation platform that helps organisations run realistic phishing campaigns, measure employee response and strengthen security awareness.",
    },
  ] as {
    id: string;
    name: string;
    alternateName?: string;
    applicationCategory: string;
    applicationSubCategory?: string;
    url: string;
    image?: string;
    description: string;
    offer?: { price: string; priceCurrency: string };
  }[],

  /** Cookie-gated analytics. IDs are public (they appear in page source). */
  analytics: {
    gaIds: [
      process.env.NEXT_PUBLIC_GA_ID ?? "G-BQZN1BW01T",
      process.env.NEXT_PUBLIC_GADS_ID ?? "AW-878467290",
    ],
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "tiaxjmjjzf",
  },
} as const;

/** "/" -> "https://isecurion.com/", "/a/b" -> "https://isecurion.com/a/b" */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${p}`;
}

/** Schema @id helper: schemaId("organization") -> "https://isecurion.com/#organization" */
export function schemaId(fragment: string): string {
  return `${siteConfig.url}/#${fragment}`;
}