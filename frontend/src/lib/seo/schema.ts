import { absoluteUrl, schemaId, siteConfig, type Office } from "./site.config";
import { homeFaqs, type Faq } from "./faqs";
import { getService, services, type ServiceEntry } from "./services";

type Json = Record<string, unknown>;

const orgRef = { "@id": schemaId("organization") };
const context = "https://schema.org";

const countries = () => siteConfig.areaServedCountries.map((name) => ({ "@type": "Country", name }));
const cities = () => siteConfig.areaServedCities.map((name) => ({ "@type": "City", name }));

function postalAddress(a: Office["address"]): Json {
  return { "@type": "PostalAddress", ...a };
}

// ---------------------------------------------------------------- site-wide

export function organizationSchema(): Json {
  const hq = siteConfig.offices[0];
  return {
    "@type": "Organization",
    "@id": schemaId("organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo.url,
      width: siteConfig.logo.width,
      height: siteConfig.logo.height,
    },
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    memberOf: { "@type": "Organization", ...siteConfig.memberOf },
    hasCredential: siteConfig.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.name,
      credentialCategory: c.category,
      ...(c.recognizedBy
        ? {
          recognizedBy: {
            "@type": c.recognizedBy.type,
            name: c.recognizedBy.name,
            url: c.recognizedBy.url,
          },
        }
        : {}),
    })),
    knowsAbout: siteConfig.knowsAbout,
    sameAs: siteConfig.sameAs,
    address: postalAddress(hq.address),
    areaServed: [...countries(), ...cities()],
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": schemaId("website"),
    url: absoluteUrl("/"),
    name: siteConfig.name,
    publisher: orgRef,
    inLanguage: siteConfig.language,
  };
}

/** Organization + WebSite. Emitted once from the root layout so every page can reference them by @id. */
export function globalGraph(): Json {
  return { "@context": context, "@graph": [organizationSchema(), websiteSchema()] };
}

// ------------------------------------------------------------------- pages

export function webPageSchema(opts: {
  path: string;
  name: string;
  description?: string;
  dateModified?: string;
  image?: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
}): Json {
  const url = absoluteUrl(opts.path);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    isPartOf: { "@id": schemaId("website") },
    about: orgRef,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: opts.image ?? siteConfig.defaultOgImage.url,
    },
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    inLanguage: siteConfig.language,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[], idFragment = "faq", path = "/"): Json {
  const base = absoluteUrl(path);
  return {
    "@type": "FAQPage",
    "@id": path === "/" ? schemaId(idFragment) : `${base}#${idFragment}`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// ---------------------------------------------------------------- products

export function softwareApplicationSchemas(): Json[] {
  return siteConfig.products.map((p) => ({
    "@type": "SoftwareApplication",
    "@id": schemaId(p.id),
    name: p.name,
    ...(p.alternateName ? { alternateName: p.alternateName } : {}),
    applicationCategory: p.applicationCategory,
    ...(p.applicationSubCategory ? { applicationSubCategory: p.applicationSubCategory } : {}),
    operatingSystem: "Web",
    brand: orgRef,
    publisher: orgRef,
    url: p.url,
    ...(p.image ? { image: p.image } : {}),
    description: p.description,
    ...(p.offer
      ? {
        offers: {
          "@type": "Offer",
          url: p.url,
          price: p.offer.price,
          priceCurrency: p.offer.priceCurrency,
          availability: "https://schema.org/InStock",
        },
      }
      : {}),
  }));
}

// ---------------------------------------------------------------- services

function serviceAreas(s: ServiceEntry): Json[] {
  return [
    ...(s.areaServed ?? siteConfig.areaServedCountries).map((name) => ({ "@type": "Country", name })),
    ...(s.areaServedCities ?? []).map((name) => ({ "@type": "City", name })),
    ...(s.areaServedPlaces ?? []).map((name) => ({ "@type": "Place", name })),
  ];
}

export function serviceSchema(s: ServiceEntry): Json {
  return {
    "@type": "Service",
    "@id": s.idFragment ? schemaId(s.idFragment) : `${absoluteUrl(s.path)}#service`,
    name: s.name,
    ...(s.alternateNames?.length ? { alternateName: s.alternateNames } : {}),
    serviceType: s.serviceType,
    ...(s.serviceCategory ? { serviceCategory: s.serviceCategory } : {}),
    provider: orgRef,
    areaServed: serviceAreas(s),
    ...(s.audiences?.length
      ? {
        serviceAudience: s.audiences.map((audienceType) => ({
          "@type": "Audience",
          audienceType,
        })),
      }
      : {}),
    ...(s.offerCatalog
      ? {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: s.offerCatalog.name,
          itemListElement: s.offerCatalog.items.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      }
      : {}),
    ...(s.schemaKeywords?.length ? { keywords: s.schemaKeywords } : {}),
    url: absoluteUrl(s.path),
    description: s.schemaDescription ?? s.description,
  };
}

export function howToSchema(s: ServiceEntry): Json | null {
  if (!s.howTo) return null;
  return {
    "@type": "HowTo",
    "@id": `${absoluteUrl(s.path)}#howto`,
    name: s.howTo.name,
    description: s.howTo.description,
    step: s.howTo.steps.map((st, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: st.name,
      text: st.text,
    })),
  };
}

/** Fixed "CREST-Accredited Penetration Testing" node used on the home page (independent of the VAPT page block) */
export function crestPenTestSchema(): Json {
  return {
    "@type": "Service",
    "@id": schemaId("crest-penetration-testing"),
    name: "CREST-Accredited Penetration Testing",
    serviceType: "Penetration Testing",
    provider: orgRef,
    areaServed: countries(),
    url: absoluteUrl("/services/vapt"),
    description:
      "Penetration testing delivered by ISECURION, a CREST Member accredited for Penetration Testing and a CERT-In empanelled company.",
  };
}

/** The "ISECURION Cybersecurity Services" offer catalog used on the home page */
export function servicesCatalogSchema(): Json {
  return {
    "@type": "Service",
    "@id": schemaId("services"),
    serviceType: "Cybersecurity, VAPT, Penetration Testing, Compliance Audits",
    provider: orgRef,
    areaServed: countries(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ISECURION Cybersecurity Services",
      itemListElement: services.flatMap((s) =>
        (s.catalogNames ?? [s.name]).map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, url: absoluteUrl(s.path) },
        })),
      ),
    },
  };
}

// local business

export function localBusinessSchemas(): Json[] {
  return siteConfig.offices.map((o) => ({
    "@type": "LocalBusiness",
    "@id": schemaId(o.id),
    name: o.name,
    image: siteConfig.logo.url,
    priceRange: siteConfig.priceRange,
    telephone: o.telephone,
    email: o.email,
    url: absoluteUrl("/"),
    openingHours: siteConfig.openingHours,
    address: postalAddress(o.address),
    geo: { "@type": "GeoCoordinates", latitude: o.geo.latitude, longitude: o.geo.longitude },
  }));
}

// ------------------------------------------------------------ page graphs

/** Everything the live home page emits, except Organization + WebSite (those come from the layout). */
export function homeGraph(opts: { dateModified?: string; name?: string } = {}): Json {
  return {
    "@context": context,
    "@graph": [
      webPageSchema({
        path: "/",
        name: opts.name ?? "ISECURION | CREST Member & CERT-In Empanelled VAPT Company in India",
        dateModified: opts.dateModified,
      }),
      ...softwareApplicationSchemas(),
      crestPenTestSchema(),
      servicesCatalogSchema(),
      ...localBusinessSchemas(),
      faqSchema(homeFaqs),
    ],
  };
}

/** WebPage + Service + Breadcrumbs (+ FAQPage when the service has FAQs) */
export function serviceGraph(slug: string, opts: { dateModified?: string } = {}): Json {
  const s = getService(slug);
  const dateModified = opts.dateModified ?? s.lastModified;
  return {
    "@context": context,
    "@graph": [
      webPageSchema({
        path: s.path,
        name: `${s.title} | ${siteConfig.name}`,
        description: s.description,
        dateModified,
      }),
      serviceSchema(s),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: s.name, path: s.path },
      ]),
            ...(s.howTo ? [howToSchema(s)] : []),
    ],
  };
}