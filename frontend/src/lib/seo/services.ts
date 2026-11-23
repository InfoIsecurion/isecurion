/**
 * Page registry: one block per page. The block holds the page's <head> tags.
 * The page's own JSON-LD schema lives in src/lib/seo/schemas/<slug>.json.
 *
 * - slug = folder name of the page (src/app/services/<slug>) = name of its JSON file.
 * - `title` has NO " | ISECURION" ending: the root layout adds it.
 * - Blocks marked "DRAFT" are placeholders written from the first page source you sent.
 *   Replace them when you convert that page.
 */

export type ServiceFaq = { question: string; answer: string };

export type ServiceEntry = {
  /** Use the folder name of the page, e.g. "red-team-assessment" */
  slug: string;
  isPage?: boolean;
  /** Real URL path of the page */
  path: string;
  /** Keeps an existing schema @id stable. Default: "<page url>#service" (only used when the page has no JSON file) */
  idFragment?: string;

  // ---- tags in <head> ----
  /** <title> WITHOUT the " | ISECURION" ending (the layout adds it) */
  title: string;
  /** Meta description */
  description: string;
  keywords: string[];
  /** Full text for og:title. Default: title + " | ISECURION" */
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  /** Social share image. Default: the site-wide image */
  image?: { url: string; alt?: string; width?: number; height?: number };

  // ---- Service schema (used for the home-page service list, and as a fallback if the page has no JSON file) ----
  /** Name used in the Service schema node */
  name: string;
  alternateNames?: string[];
  /** Extra names listed in the home-page offer catalog (all point at this page) */
  catalogNames?: string[];
  serviceType: string | string[];
  serviceCategory?: string;
  /** Longer description for the schema. Default: the meta description */
  schemaDescription?: string;
  schemaKeywords?: string[];
  /** Countries served. Default: the site-wide list */
  areaServed?: string[];
  areaServedCities?: string[];
  /** Regions such as "Europe" or "GCC" */
  areaServedPlaces?: string[];
  audiences?: string[];
  /** The page's own list of offered services */
  offerCatalog?: { name: string; items: string[] };

  // ---- extra schema ----
  faqs?: ServiceFaq[];
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  };
  /** ISO date, e.g. "2026-11-18" */
  lastModified?: string;
};

export const services: ServiceEntry[] = [
  // ---- converted pages ----
  {
    slug: "vapt",
    path: "/services/vapt",
    name: "Vulnerability Assessment and Penetration Testing (VAPT)",
    serviceType: "Vulnerability Assessment and Penetration Testing",
    title:
      "VAPT Services in India | Penetration Testing Company in Bangalore, Mumbai, Hyderabad | CERT-In Empanelled",
    description:
      "ISECURION is a CERT-In empanelled VAPT company providing Vulnerability Assessment and Penetration Testing in Bangalore, Mumbai, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Noida, and globally. Expert web, mobile, cloud, network, and API penetration testing with compliance-ready reports for ISO 27001, SOC 2, PCI DSS, and RBI.",
    ogTitle:
      "VAPT Services India | CERT-In Empanelled Penetration Testing Company - Bangalore, Mumbai, Hyderabad",
    ogDescription:
      "India's trusted CERT-In empanelled VAPT company. Serving Bangalore, Mumbai, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Noida and globally. Expert penetration testing for web, mobile, cloud, network and API.",
    twitterTitle:
      "VAPT Services India | CERT-In Empanelled Penetration Testing Experts",
    twitterDescription:
      "ISECURION provides expert VAPT and penetration testing in Bangalore, Mumbai, Hyderabad, Pune, Kolkata, Ahmedabad, Noida and globally.",
    image: {
      url: "https://www.isecurion.com/images/TechnicalServices/VulnerabilityAssessment.jpg",
    },
    catalogNames: [
      "CREST-Accredited Penetration Testing",
      "Vulnerability Assessment and Penetration Testing (VAPT)",
    ],
    keywords: [
      "VAPT services India",
      "VAPT company India",
      "VAPT services Bangalore",
      "VAPT company Bangalore",
      "penetration testing Bangalore",
      "VAPT services Mumbai",
      "VAPT company Mumbai",
      "penetration testing Mumbai",
      "VAPT services Hyderabad",
      "VAPT company Hyderabad",
      "penetration testing Hyderabad",
      "VAPT services Chennai",
      "penetration testing Chennai",
      "VAPT services Pune",
      "penetration testing Pune",
      "VAPT services Kolkata",
      "penetration testing Kolkata",
      "VAPT services Ahmedabad",
      "penetration testing Ahmedabad",
      "VAPT services Noida",
      "penetration testing Noida",
      "VAPT services Delhi",
      "VAPT services NCR",
      "penetration testing Delhi",
      "VAPT services Kochi",
      "penetration testing Kochi",
      "VAPT services Gurgaon",
      "VAPT services Chandigarh",
      "VAPT services Jaipur",
      "vulnerability assessment and penetration testing",
      "VAPT audit India",
      "CERT-In empanelled VAPT provider",
      "CERT-In empanelled penetration testing company",
      "web application penetration testing India",
      "mobile application security testing India",
      "cloud security testing India",
      "network penetration testing India",
      "API security testing",
      "infrastructure security assessment",
      "ethical hacking services India",
      "red team assessment India",
      "ISO 27001 VAPT",
      "SOC 2 penetration testing",
      "PCI DSS penetration testing",
      "HIPAA security testing",
      "RBI VAPT compliance",
      "SEBI CSCRF penetration testing",
      "VAPT services USA",
      "VAPT services UK",
      "VAPT services UAE",
      "VAPT services Australia",
      "VAPT services Singapore",
      "best VAPT company India",
      "top penetration testing company Bangalore",
      "VAPT for SaaS",
      "VAPT for FinTech",
      "VAPT for healthcare",
      "VAPT for startups",
      "vulnerability scanning and penetration testing",
      "application security testing services",
    ],
  },
  {
    slug: "ai-augamented-red-team",
    path: "/services/ai-augamented-red-team",
    name: "AI-Augmented Red Team Services",
    serviceType: "AI Red Team Testing",
    title: "AI-Augmented Red Team Services | Global LLM & AI Security Testing",
    description:
      "CERT-In empanelled AI-Augmented Red Team services for enterprises in the USA, Europe, GCC, Singapore, Australia, and India. LLM/agent red teaming, prompt injection testing, AI supply chain attack simulation, deepfake vishing simulation & AI-accelerated recon benchmarking. Global delivery. Contact +91-88612 01570 / info@isecurion.com.",
    ogTitle: "AI-Augmented Red Team Services | Global Coverage | ISECURION",
    ogDescription:
      "LLM/agent red teaming, AI supply chain attack simulation, deepfake vishing simulation, and AI-accelerated recon benchmarking. CERT-In empanelled. Serving USA, Europe, GCC, Singapore, Australia & India.",
    twitterTitle: "AI-Augmented Red Team Services | Global | ISECURION",
    twitterDescription:
      "CERT-In empanelled AI-Augmented Red Team testing: LLM/agent red teaming, AI supply chain attacks, deepfake vishing simulation, AI-driven recon benchmarking. USA, Europe, GCC, Singapore, Australia, India.",
    image: {
      url: "https://isecurion.com/images/TechnicalServices/AI-Augmented-Red-Team.jpg",
    },
    keywords: [
      "AI red team testing",
      "AI-augmented red team services",
      "LLM red teaming",
      "AI red team USA",
      "AI red team UK",
      "AI red team Europe",
      "AI red team Germany",
      "AI red team UAE",
      "AI red team Dubai",
      "AI red team Saudi Arabia",
      "AI red team GCC",
      "AI red team Singapore",
      "AI red team Australia",
      "AI red team India",
      "AI security testing global",
      "AI security testing company",
      "prompt injection testing",
      "direct prompt injection testing",
      "indirect prompt injection testing",
      "jailbreak testing LLM",
      "LLM guardrail testing",
      "LLM guardrail bypass testing",
      "AI agent security testing",
      "agentic AI security testing",
      "agentic AI penetration testing",
      "tool calling hijack testing",
      "function calling security testing",
      "excessive agency testing AI",
      "system prompt extraction testing",
      "confidential instruction extraction LLM",
      "AI supply chain attack simulation",
      "ML pipeline security testing",
      "ML supply chain security",
      "model poisoning testing",
      "malicious model upload testing",
      "dataset poisoning testing",
      "Hugging Face supply chain attack simulation",
      "MLOps security testing",
      "deepfake vishing simulation",
      "deepfake BEC simulation",
      "voice clone vishing test",
      "AI voice cloning security test",
      "deepfake video call simulation",
      "business email compromise simulation",
      "executive impersonation attack simulation",
      "out of band verification testing",
      "AI accelerated recon benchmark",
      "agentic recon tooling benchmark",
      "AI vs manual pentest comparison",
      "CERT-In empanelled AI red team",
      "global AI red team provider",
      "AI threat readiness assessment",
      "AI risk assessment for enterprises",
      "LLM security audit",
      "chatbot security testing",
      "copilot security testing",
      "generative AI security testing",
      "genAI red teaming",
      "GenAI penetration testing",
      "AI red team for banks",
      "AI red team for fintech",
      "AI red team for healthcare",
      "AI red team for insurance",
      "AI red team for government",
      "OWASP LLM Top 10 testing",
      "OWASP for LLM applications",
      "AI penetration testing company",
      "LLM pentest company",
      "AI red team consulting",
      "board level AI risk briefing",
      "AI attack surface assessment",
      "remote AI red team engagement",
      "offshore AI security testing partner",
    ],
  },
  {
    slug: "soc-2-compliance",
    path: "/services/soc-2-compliance",
    name: "SOC 2 Compliance Services",
    serviceType: "SOC 2 Compliance",
    title: "SOC 2 Compliance Services in India",
    description:
      "End-to-end SOC 2 compliance services in India: gap assessment, control implementation, evidence readiness and CPA audit support. CERT-In empanelled.",
    ogDescription:
      "SOC 2 readiness, gap assessment, control implementation and CPA audit coordination for SaaS, FinTech and cloud companies in India. CERT-In empanelled.",
    twitterDescription:
      "SOC 2 readiness, gap assessment, control implementation and CPA audit coordination for companies in India and globally.",
    keywords: [
      "SOC 2 compliance services India",
      "SOC 2 compliance India",
      "SOC 2 audit India",
      "SOC 2 consulting India",
      "SOC 2 readiness assessment",
      "SOC 2 gap assessment",
      "SOC 2 Type I and Type II",
      "SOC 2 Type II India",
      "SOC 2 certification India",
      "SOC 2 for startups India",
      "SOC 2 for SaaS companies",
      "SOC 2 audit cost India",
      "SOC 2 compliance Bangalore",
      "SOC 2 compliance Mumbai",
      "SOC 2 compliance Hyderabad",
      "SOC 2 compliance Chennai",
      "SOC 2 compliance Pune",
      "SOC 2 compliance Kolkata",
      "SOC 2 compliance Delhi NCR",
      "SOC 2 compliance Kochi",
      "SOC 2 compliance USA",
      "SOC 2 compliance UK",
      "SOC 2 compliance UAE",
      "SOC 2 compliance Singapore",
      "SOC 2 compliance Australia",
      "AICPA Trust Services Criteria",
      "service organization control audit",
      "SOC 2 vs ISO 27001",
      "CERT-In empanelled auditor",
      "cybersecurity compliance India",
    ],
  },
  {
    slug: "vciso",
    path: "/services/vciso",
    name: "vCISO Services",
    serviceType: "Virtual CISO / Cybersecurity Leadership",
    title: "vCISO Services in India | Virtual CISO Bangalore, Mumbai, Delhi",
    description:
      "ISECURION is one of India's leading CISO advisory companies, delivering vCISO Services in Bangalore, Mumbai, Delhi, Pune, Hyderabad, Chennai, and globally across USA, Singapore, UAE, Europe & Australia. RBI, CERT-In, DPDP, SEBI, ISO 27001, SOC 2 compliance expertise.",
    ogDescription:
      "ISECURION delivers expert vCISO services in India and globally. RBI, CERT-In, DPDP, SEBI compliance expertise. CERT-In Empanelled. ISO 27001:2022 Certified.",
    twitterDescription:
      "Expert Virtual CISO services across India and globally. RBI, CERT-In, DPDP, SEBI, ISO 27001, SOC 2 compliance. CERT-In Empanelled firm.",
    image: {
      url: "https://isecurion.com/assets/images/vciso-og-image.jpg",
      alt: "ISECURION vCISO Services in India - Virtual CISO Bangalore Mumbai Delhi",
      width: 1200,
      height: 630,
    },
    keywords: [
      "vCISO services India",
      "virtual CISO India",
      "vCISO Bangalore",
      "vCISO Mumbai",
      "vCISO Delhi",
      "vCISO Pune",
      "vCISO Hyderabad",
      "vCISO Chennai",
      "CISO as a Service India",
      "vCISO RBI compliance",
      "vCISO CERT-In",
      "vCISO DPDP",
      "vCISO SEBI",
      "virtual chief information security officer India",
      "CISO advisory companies",
      "CISO advisory companies in india",
      "CISO advisory companies in bangalore",
      "CISO advisory companies in mumbai",
      "CISO advisory companies in usa",
      "CISO advisory companies in kolkata",
      "CISO advisory services",
      "CISO advisory services in bangalore",
      "CISO advisory services in mumbai",
      "CISO advisory services in kolkata",
      "CISO advisory services in usa",
      "CISO advisory firm",
      "CISO advisory firm in india",
      "CISO advisory firm in bangalore",
      "CISO advisory firm in mumbai",
      "CISO advisory firm in kolkata",
      "CISO advisory firm in usa",
      "top CISO advisory companies in India",
      "best CISO advisory companies",
      "CISO consulting companies",
      "CISO consulting companies in india",
      "CISO consulting companies in bangalore",
      "CISO consulting companies in mumbai",
      "CISO consulting companies in kolkata",
      "CISO consulting companies in usa",
      "security advisory companies",
      "CISO as a service companies",
      "information security advisory companies",
      "cybersecurity advisory firms India",
    ],
  },
  {
    slug: "dpdp-compliance",
    path: "/services/dpdp-compliance",
    name: "DPDP Compliance",
    serviceType: "DPDP Cybersecurity Audit & Technical Compliance Services",
    title: "DPDP Cybersecurity Audit Services India | CERT-In Empanelled",
    description:
      "CERT-In empanelled DPDP cybersecurity audit services in India. Technical security controls, VAPT, data security assessments and compliance under the Digital Personal Data Protection Act 2023. Penalties up to ₹250 crore - get audit-ready now.",
    ogDescription:
      "CERT-In empanelled cybersecurity audit and technical compliance under India's DPDP Act 2023. Security controls, VAPT on data systems, breach readiness and gap assessments.",
    keywords: [
      "DPDP cybersecurity audit India",
      "DPDP security controls India",
      "DPDP technical compliance India",
      "DPDP VAPT India",
      "DPDP data security audit India",
      "Digital Personal Data Protection Act cybersecurity",
      "DPDP compliance fintech India",
      "DPDP compliance healthcare India",
      "DPDP compliance SaaS India",
      "DPDP Act 2023 security requirements",
      "DPDP audit services India",
      "CERT-In DPDP audit",
      "data security audit DPDP",
      "DPDP breach notification India",
      "DPDP penalty India",
      "significant data fiduciary security India",
    ],
  },
  {
    slug: "red-team-assessment",
    path: "/services/red-team-assessment",
    name: "Red Team Assessment",
    serviceType: "Red Team Assessment Services",
    title: "Red Team Assessment Services in India",
    description:
      "Simulate real-world attacks with ISECURION Red Team Assessment. Identify gaps, test defenses, and strengthen your cybersecurity posture.",
    ogDescription:
      "Simulate real-world cyber attacks with ISECURION Red Team Assessments and improve organizational security posture.",
    keywords: [
      "Red Team Assessment India",
      "Red Team Testing",
      "Penetration Testing",
      "Adversary Simulation",
      "Cybersecurity Assessment",
      "Threat Emulation",
      "Purple Team",
      "Attack Simulation",
      "Security Testing Services",
      "Cyber Risk Assessment",
    ],
  },

  {
    slug: "web-application-security-assessment",
    path: "/services/web-application-security-assessment",
    name: "Web Application Security Assessment",
    serviceType: "Web Application Security Assessment",
    title:
      "Web Application Security Assessment - Secure Web App Audit Services",
    description:
      "Protect your web applications and user data with ISECURION's Web Application Security Assessment services. Conducted by CERT-IN empanelled experts using industry best practices.",
    keywords: [
      "web application security assessment",
      "Web App Security Audit",
      "Secure Website Assessment",
      "Application Penetration Testing",
      "ISECURION Web Security",
    ],
    ogTitle:
      "Web Application Security Assessment - Secure Web App Audit Services | ISECURION",
    ogDescription:
      "Protect your web applications and user data with ISECURION's Web Application Security Assessment services. Conducted by CERT-IN empanelled experts using industry best practices.",
    ogType: "website",
  },

  {
    slug: "mobile-application-security",
    path: "/services/mobile-application-security",
    name: "Mobile Application Security Testing",
    serviceType: "Mobile Application Security Testing",
    title: "Mobile Application Security Assessment & Testing",
    description:
      "End-to-end mobile application security assessment for iOS and Android. Identify vulnerabilities, reduce risk, and meet compliance with expert-led testing and remediation.",
    keywords: [
      "mobile application security",
      "mobile app pentest",
      "ios security testing",
      "android security testing",
      "mobile VAPT",
      "OWASP MASVS",
      "security assessment",
    ],
    ogTitle: "Mobile Application Security Assessment & Testing | ISECURION",
    ogDescription:
      "Expert-led iOS & Android application security assessments mapped to OWASP MASVS. Prioritized remediation and clear reporting.",
    ogType: "website",
    twitterTitle:
      "Mobile Application Security Assessment & Testing | ISECURION",
    twitterDescription:
      "Harden your mobile apps with comprehensive security testing and remediation guidance.",
  },

  {
    slug: "secure-code-review",
    path: "/services/secure-code-review",
    name: "Secure Code Reveiew",
    serviceType: "Secure code Reveiew",
    title: "Secure Code Review - Application Vulnerability Assessment",
    description:
      "Commission a secure code review / audit to ensure your application is free of weaknesses & user data is protected. Opt for comprehensive security testing.",
    keywords: [],
    ogTitle: "Secure Code Review - Application Vulnerability Assessment",
    ogDescription:
      "Commission a secure code review / audit to ensure your application is free of weaknesses & user data is protected. Opt for comprehensive security testing.",
    ogType: "website",
  },

  {
    slug: "iot-security-testing",
    path: "/services/iot-security-testing",
    name: "IOT Security Testing",
    serviceType: "Security Testing",
    title: "IoT Security Testing - Web Application Cyber Security Audit",
    description:
      "Thorough testing & assessment of IoT devices as well as networks is crucial for maintaining comprehensive security. Contact us for security testing services.",
    keywords: [],
    ogTitle: "IoT Security Testing - Web Application Cyber Security Audit",
    ogDescription:
      "Thorough testing & assessment of IoT devices as well as networks is crucial for maintaining comprehensive security. Contact us for security testing services.",
    ogType: "website",
  },

  {
    slug: "industrial-control-systems-security-assessment",
    path: "/services/industrial-control-systems-security-assessment",
    name: "industrial-control-systems-security-assessment",
    serviceType: "Security Testing",
    title: "Industrial Control Systems Security Assessment - SCADA Audit",
    description:
      "Modern industrial control systems (SCADA) can be vulnerable to threats due to being connected to the internet. Opt for comprehensive expert security audits.",
    keywords: [],
    ogTitle: "Industrial Control Systems Security Assessment - SCADA Audit",
    ogDescription:
      "Modern industrial control systems (SCADA) can be vulnerable to threats due to being connected to the internet. Opt for comprehensive expert security audits.",
    ogType: "website",
  },

  {
    slug: "crypto-currency-exchange",
    path: "/services/crypto-currency-exchange",
    name: "Crypto Currency Exchange",
    serviceType: "Security Testing",
    title: "Crypto Currency Exchange - Security Audit & Pentest Services",
    description:
      "Threat assessment, security audits & pentesting services tailored for crypto currency exchange helps avoid commercial fraud & monetary loss for end users.",
    keywords: [],
    ogTitle: "Crypto Currency Exchange - Security Audit & Pentest Services",
    ogDescription:
      "Threat assessment, security audits & pentesting services tailored for crypto currency exchange helps avoid commercial fraud & monetary loss for end users.",
    ogType: "website",
  },

  {
    slug: "smart-contract-security",
    path: "/services/smart-contract-security",
    name: "Smart Contract Security",
    serviceType: "Security Testing",
    title: "Smart Contract Security Audit - Security Testing Service",
    description:
      "Proactive smart contract security audit is key for reducing financial risk; fixing potential vulnerabilities with comprehensive assessment & audit service.",
    keywords: [],
    ogTitle: "Smart Contract Security Audit - Security Testing Service",
    ogDescription:
      "Proactive smart contract security audit is key for reducing financial risk; fixing potential vulnerabilities with comprehensive assessment & audit service.",
    ogType: "website",
  },

  {
    slug: "cloud-security-assessment",
    path: "/services/cloud-security-assessment",
    name: "Cloud Security Assessment",
    serviceType: "Cloud Security Assessment",
    title: "Cloud Security Assessment Services | CERT-IN Cybersecurity Audit",
    description:
      "ISECURION provides expert Cloud Security Assessment services. Ensure secure cloud infrastructure with CERT-IN certified auditors, risk analysis, and compliance readiness.",
    keywords: [
      "cloud security assessment",
      "Cloud Security Audit",
      "Cyber Security Audit",
      "CERT-IN Cloud Assessment",
      "Cloud Compliance",
      "ISO 27001 Cloud Security",
      "IaaS Security",
      "PaaS Security",
      "SaaS Security",
      "Cloud Vulnerability Assessment",
    ],
    ogTitle: "Cloud Security Assessment Services | CERT-IN Cybersecurity Audit",
    ogDescription:
      "ISECURION provides expert Cloud Security Assessment services. Ensure secure cloud infrastructure with CERT-IN certified auditors, risk analysis, and compliance readiness.",
    ogType: "website",
    twitterTitle:
      "Cloud Security Assessment Services | CERT-IN Cybersecurity Audit",
    twitterDescription:
      "ISECURION provides expert Cloud Security Assessment services. Ensure secure cloud infrastructure with CERT-IN certified auditors, risk analysis, and compliance readiness.",
  },

  {
    slug: "dpo-services",
    path: "/services/dpo-services",
    name: "Outsourced DPO Services",
    serviceType: "Outsourced Data Protection Officer / Privacy Compliance",
    title: "Outsourced DPO Services in India | Virtual Data Protection Officer",
    description:
      "Leading Outsourced DPO Services in India - Bangalore, Mumbai, Delhi, Pune, Hyderabad, Chennai. ISECURION provides Virtual Data Protection Officer services globally across USA, Singapore, UAE, Europe & Australia. DPDP Act, GDPR, RBI, SEBI compliance expertise.",
    ogTitle:
      "Outsourced DPO Services in India | Virtual Data Protection Officer | ISECURION",
    ogDescription:
      "ISECURION delivers expert Outsourced DPO services in India and globally. DPDP Act, GDPR, RBI, SEBI compliance expertise. CERT-In Empanelled. ISO 27001:2022 Certified.",
    twitterDescription:
      "Expert Outsourced Data Protection Officer services across India and globally. DPDP Act, GDPR, RBI, SEBI compliance. CERT-In Empanelled firm.",
    image: {
      url: "https://isecurion.com/assets/images/dpo-og-image.jpg",
      alt: "ISECURION Outsourced DPO Services in India - Bangalore Mumbai Delhi",
      width: 1200,
      height: 630,
    },
    keywords: [
      "outsourced DPO services India",
      "virtual data protection officer India",
      "DPO as a service",
      "DPO Bangalore",
      "DPO Mumbai",
      "DPO Delhi",
      "DPO Pune",
      "DPO Hyderabad",
      "DPO Chennai",
      "DPDP Act DPO appointment",
      "GDPR DPO services",
      "data protection officer consulting India",
    ],
  },
  {
    slug: "gdpr",
    path: "/services/gdpr",
    name: "GDPR Compliance Audit",
    serviceType: "GDPR Compliance Audit",
    title:
      "GDPR Compliance Audit Services in India | Readiness, Gap Analysis & Certification — ISECURION",
    description:
      "ISECURION provides GDPR readiness assessments, gap analysis, remediation support and certification-ready reports. Avoid fines, secure EU business and demonstrate robust data protection.",
    ogTitle: "GDPR Compliance Audit Services in India | ISECURION",
    ogDescription:
      "Get GDPR readiness assessments, gap analysis and certification-ready reports from ISECURION. Protect data, avoid fines and stay audit-ready.",
    image: {
      url: "https://isecurion.com/images/ComplianceAuditServices/GDPRAudit.jpg",
    },
    keywords: [
      "GDPR compliance audit",
      "GDPR audit India",
      "GDPR readiness assessment",
      "GDPR gap analysis",
      "EU data protection compliance",
      "GDPR remediation",
    ],
  },
  {
    slug: "managed-security-services",
    path: "/services/managed-security-services",
    name: "Managed Security Services (MSSP)",
    serviceType: "Managed Security Service Provider (MSSP)",
    title: "Managed Security Services (MSSP)",
    description:
      "CERT-In empanelled MSSP: 24/7 SOC monitoring, threat detection, incident response and compliance reporting across India, USA, UK, UAE, GCC & APAC.",
    ogTitle:
      "Managed Security Services (MSSP) | 24/7 SOC & Threat Detection | ISECURION",
    ogDescription:
      "End-to-end MSSP services - 24/7 SOC monitoring, threat detection, incident response & compliance. Serving India, USA, UK, UAE, GCC, Singapore & Australia. CERT-In empanelled & ISO 27001 certified.",
    twitterTitle: "Managed Security Services (MSSP) | ISECURION",
    twitterDescription:
      "24/7 MSSP - threat detection, SOC monitoring, incident response, vulnerability management. Serving India, USA, UK, UAE, GCC, Singapore & Australia. CERT-In empanelled.",
    image: {
      url: "https://isecurion.com/images/isecurion1.png",
      alt: "ISECURION - Managed Security Services (MSSP)",
    },
    keywords: [
      "managed security services",
      "MSSP",
      "24/7 SOC monitoring",
      "threat detection and response",
      "incident response",
      "vulnerability management",
      "managed detection and response",
      "SOC as a service",
      "cloud security monitoring",
      "CERT-In empanelled MSSP",
      "managed security services india",
      "MSSP india",
      "managed security service provider india",
      "24/7 SOC services india",
      "threat detection and response india",
      "incident response services india",
      "vulnerability management india",
      "managed SOC india",
      "cybersecurity monitoring india",
      "SIEM managed services india",
      "managed detection and response india",
      "MDR services india",
      "SOC as a service india",
      "cloud security monitoring india",
      "ISO 27001 compliance india",
      "SOC 2 compliance monitoring",
      "CERT-In empanelled MSSP",
      "cybersecurity outsourcing india",
      "managed security services bangalore",
      "managed security services mumbai",
      "managed security services delhi",
      "managed security services hyderabad",
      "managed security services chennai",
      "managed security services pune",
      "MSSP usa",
      "MSSP uk",
      "MSSP UAE",
      "MSSP singapore",
      "MSSP australia",
      "MSSP GCC",
      "MSSP global",
      "enterprise MSSP india",
      "managed security services provider globally",
    ],
  },
  {
    slug: "aadhar-audit",
    path: "/services/aadhar-audit",
    name: "Aadhaar / UIDAI Compliance Audit Services",
    serviceType: "UIDAI Compliance Audit",
    title:
      "Aadhaar/UIDAI Audit Services | AUA, KUA, Sub-AUA Compliance | ISECURION India",
    description:
      "ISECURION provides comprehensive Aadhaar/UIDAI audit services for AUA, KUA, Sub-AUA, Sub-KUA, and Face Authentication compliance. Expert UIDAI security audits for banks, NBFCs, fintech, telecom, and government agencies across India.",
    ogTitle: "Aadhaar/UIDAI Audit Services | AUA, KUA Compliance | ISECURION",
    ogDescription:
      "Comprehensive UIDAI audit services for AUA, KUA, Sub-AUA entities. Expert Aadhaar security audits ensuring compliance with UIDAI guidelines across India.",
    keywords: [
      "Aadhaar audit services India",
      "UIDAI audit services",
      "UIDAI compliance audit India",
      "AUA audit services India",
      "KUA audit services India",
      "Sub-AUA audit",
      "Sub-KUA audit",
      "Face Authentication audit UIDAI",
      "Aadhaar security audit",
      "Aadhaar compliance assessment",
      "eKYC audit UIDAI",
      "biometric authentication audit",
      "UIDAI guidelines compliance",
      "Aadhaar data protection audit",
      "UIDAI security audit",
      "Aadhaar authentication system audit",
    ],
  },
  {
    slug: "irda-audit",
    path: "/services/irda-audit",
    name: "IRDAI ISNP Audit Services",
    serviceType: "Insurance Security Audit",
    title: "IRDAI ISNP Audit Services India | Insurance Security Compliance",
    description:
      "ISECURION provides comprehensive IRDAI ISNP Audit services for insurance companies, TPAs, aggregators, and technology providers across India. Expert security audits ensuring compliance with IRDAI guidelines for digital insurance platforms.",
    ogTitle:
      "IRDAI ISNP Audit Services India | Insurance Security Compliance | ISECURION",
    ogDescription:
      "Expert IRDAI ISNP Audit services for insurance companies, TPAs, and aggregators. Comprehensive security audits ensuring compliance with IRDAI regulations and protecting policyholder data.",
    keywords: [
      "IRDAI ISNP audit",
      "IRDAI compliance audit",
      "insurance security audit India",
      "insurance cybersecurity audit",
      "IRDAI guidelines compliance",
      "TPA security audit",
      "insurance aggregator audit",
      "digital insurance platform security",
      "insurance data protection audit",
      "ISNP audit services",
      "IRDAI mandatory audit",
      "insurance penetration testing",
      "cloud security audit insurance",
      "ISO 27001 insurance compliance",
      "third party administrator audit",
      "insurance vulnerability assessment",
      "policyholder data security",
      "insurance network security audit",
      "IRDAI regulatory compliance",
      "insurance IT audit India",
    ],
  },
  {
    slug: "rbi-security-audit",
    path: "/services/rbi-security-audit",
    name: "RBI Information Security Audit Services",
    serviceType: "RBI Information Security Audit",
    title: "RBI Information Security Audit Services India | Banking Compliance",
    description:
      "ISECURION provides comprehensive RBI Information Security (IS) Audit services for banks, NBFCs, payment banks, and fintech companies across India. Expert cybersecurity audits ensuring compliance with RBI guidelines and regulations.",
    ogTitle:
      "RBI Information Security Audit Services India | Banking Compliance | ISECURION",
    ogDescription:
      "Expert RBI IS Audit services for banks, NBFCs, and fintech companies. Comprehensive security audits ensuring compliance with RBI regulations and protecting customer financial data.",
    keywords: [
      "RBI IS audit",
      "RBI information security audit",
      "banking cybersecurity audit",
      "RBI compliance audit",
      "NBFC security audit",
      "RBI IT audit",
      "information security audit India",
      "banking security compliance",
      "RBI cyber security framework",
      "digital banking security audit",
      "core banking security assessment",
      "payment bank audit",
      "fintech security audit",
      "cooperative bank security audit",
      "small finance bank audit",
      "RBI guidelines compliance",
      "vulnerability assessment banking",
      "penetration testing banking",
      "IT governance audit",
      "cyber security audit financial institutions",
      "RBI circular compliance",
      "ISO 27001 banking audit",
      "third party risk assessment banking",
      "vendor risk management audit",
      "business continuity audit banking",
      "disaster recovery audit",
      "cloud banking security audit",
      "mobile banking security audit",
      "API security assessment",
      "incident response audit",
      "access control audit banking",
      "data protection audit",
      "regulatory compliance India",
      "banking IT controls audit",
    ],
  },

  {
    slug: "iso27001",
    path: "/services/iso27001",
    name: "ISO 27001 Audit & Certification Services",
    serviceType: "ISO 27001 Certification Audit",
    title:
      "ISO 27001 Audit & Certification Services in India | ISMS Consulting – ISECURION",
    description:
      "ISECURION is India's top ISO 27001 audit and certification consultancy. We deliver ISMS gap analysis, risk treatment, documentation, internal audit and full certification support for SaaS, FinTech, Healthcare and enterprise clients across Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, USA, UK, UAE, Singapore and Australia. Book a free readiness call today.",
    ogTitle: "ISO 27001 Audit & Certification Services in India – ISECURION",
    ogDescription:
      "CERT-In empanelled ISO 27001 consultants. ISMS gap analysis, risk treatment, documentation, internal audit and certification support for organisations across India, USA, UK, UAE, Singapore and Australia.",
    twitterTitle: "ISO 27001 Audit & Certification Services – ISECURION",
    twitterDescription:
      "CERT-In empanelled ISO 27001 consultants. Gap analysis, ISMS implementation and certification support across India, USA, UK, UAE, Singapore and Australia.",
    image: {
      url: "https://isecurion.com/images/ComplianceAuditServices/isoAudit.jpg",
    },
    keywords: [
      "ISO 27001 audit India",
      "ISO 27001 certification India",
      "ISMS audit",
      "ISO 27001 gap analysis",
      "ISO 27001 readiness assessment",
      "information security management system",
      "ISO 27001 consulting Bengaluru",
      "ISO 27001 consulting Mumbai",
      "ISO 27001 consulting Delhi",
      "ISO 27001 consulting Hyderabad",
      "ISO 27001 consulting Chennai",
      "ISO 27001 consulting Pune",
      "ISO 27001 audit USA",
      "ISO 27001 audit UK",
      "ISO 27001 audit UAE",
      "ISO 27001 audit Singapore",
      "ISO 27001 audit Australia",
      "ISO 27001 internal audit",
      "ISO 27001 certification support",
      "ISO 27001 implementation",
      "ISO 27001 lead auditor",
      "ISO 27001 Annex A controls",
      "ISO 27001 risk assessment",
      "ISO 27001 SoA",
      "Statement of Applicability",
      "ISMS documentation",
      "ISMS framework",
      "ISO 27001 certification cost India",
      "ISO 27001 consultant",
      "ISO 27001 compliance services",
      "information security audit",
      "cybersecurity compliance India",
      "ISO 27001 SaaS",
      "ISO 27001 FinTech",
      "ISO 27001 healthcare",
      "ISO 27001 for startups",
      "ISO 27001 2022",
      "ISO IEC 27001",
      "CERT-In empanelled auditor",
      "ISO 27001 managed services",
    ],
  },
  {
    slug: "cicra-audit-services",
    path: "/services/cicra-audit-services",
    name: "CICRA Audit Services",
    serviceType: "Critical Infrastructure Cyber Risk Assessment",
    title:
      "CICRA Audit Services India | Critical Infrastructure Cyber Risk Assessment",
    description:
      "ISECURION provides comprehensive CICRA (Critical Information & Cyber Risk Assessment) Audit services for critical infrastructure in India. Expert assessments for BFSI, healthcare, energy, government, telecom, and IT sectors ensuring regulatory compliance and cyber resilience.",
    ogTitle:
      "CICRA Audit Services India | Critical Infrastructure Cyber Risk Assessment | ISECURION",
    ogDescription:
      "Expert CICRA Audit services for critical infrastructure in India. Comprehensive cyber risk assessments ensuring regulatory compliance and resilience across BFSI, healthcare, energy, government, and telecom sectors.",
    keywords: [
      "CICRA audit",
      "critical infrastructure audit",
      "cyber risk assessment India",
      "CERT-In audit",
      "RBI cybersecurity framework",
      "SEBI cyber resilience",
      "IRDAI security audit",
      "critical information infrastructure",
      "CII protection",
      "IT infrastructure security audit",
      "BFSI security assessment",
      "healthcare security audit",
      "energy infrastructure security",
      "government cybersecurity audit",
      "telecom security assessment",
      "cloud infrastructure audit",
      "data center security",
      "incident response assessment",
      "business continuity audit",
      "disaster recovery audit",
      "DPDP compliance",
      "ISO 27001 audit",
      "NIST cybersecurity framework",
      "infrastructure resilience",
      "operational security maturity",
      "vendor risk assessment",
      "supply chain security",
      "SOC maturity assessment",
      "critical asset protection",
    ],
  },
  {
    slug: "bse-nse-audit-services",
    path: "/services/bse-nse-audit-services",
    name: "BSE / NSE Audit Services",
    serviceType: "SEBI-Compliant IT & Cyber Security Audit",
    title:
      "BSE / NSE Audit Services in India | SEBI-Compliant IT & Cyber Security Audits",
    description:
      "BSE and NSE audit services for stock brokers, trading members, depository participants, mutual funds and capital market entities. SEBI-compliant IT governance, cybersecurity and operational resilience audits by ISECURION.",
    ogTitle:
      "BSE / NSE Audit Services in India | SEBI-Compliant IT & Cyber Security Audits | ISECURION",
    ogDescription:
      "ISECURION provides comprehensive BSE/NSE audit services for capital market entities including stock brokers, trading members, depository participants and mutual funds in compliance with SEBI guidelines.",
    keywords: [
      "BSE audit",
      "NSE audit",
      "SEBI compliance audit",
      "stock broker IT audit",
      "trading member audit",
      "depository participant audit",
      "capital market cybersecurity audit",
      "BSE NSE compliance",
      "SEBI IT audit",
      "stock exchange audit India",
      "clearing member audit",
      "mutual fund IT audit",
      "RTA audit",
      "PMS audit",
    ],
  },
  {
    slug: "continuous-breach-attack-simulation",
    path: "/services/continuous-breach-attack-simulation",
    name: "Continuous Breach Attack Simulation (CBAS)",
    serviceType: "Breach and Attack Simulation",
    title: "Continuous Breach Attack Simulation (CBAS) Services in India",
    description:
      "ISECURION offers Continuous Breach Attack Simulation (CBAS) services in India. Detect threats in real-time, validate defenses, identify gaps, and build proactive cybersecurity resilience with continuous security validation.",
    ogTitle:
      "Continuous Breach Attack Simulation (CBAS) Services in India | ISECURION",
    ogDescription:
      "Validate your cyber defenses 24/7 with ISECURION’s Continuous Breach Attack Simulation. Stay ahead of attackers with real-world adversary simulations.",
    keywords: [
      "Continuous Breach Attack Simulation India",
      "Breach and Attack Simulation services",
      "Continuous Security Validation",
      "BAS services India",
      "Real-time Cyber Attack Simulation",
      "Adversary Simulation",
      "Proactive Cybersecurity India",
      "Threat Emulation",
      "Cybersecurity Assessment India",
    ],
  },
  {
    slug: "phishing-simulation",
    path: "/services/phishing-simulation",
    name: "Phishing Simulation Services",
    serviceType: "Phishing Simulation",
    title:
      "Phishing Simulation Services India | Email, Vishing & Smishing Testing - ISECURION",
    description:
      "ISECURION delivers enterprise phishing simulation services powered by Drosera: AI-driven email phishing, spear-phishing, vishing, smishing, credential-harvest testing, security awareness training and executive reporting to reduce human cyber risk. CERT-In empanelled, ISO 27001 aligned.",
    ogTitle: "Phishing Simulation Services in India | ISECURION",
    ogDescription:
      "Reduce human-driven breaches with ISECURION's realistic phishing simulation, powered by our Drosera AI platform, plus vishing/smishing testing, awareness training and executive metrics.",
    twitterDescription:
      "Enterprise phishing simulation powered by Drosera AI, plus vishing/smishing testing and security awareness training with executive reporting.",
    keywords: [
      "Phishing Simulation",
      "Phishing Simulation Services India",
      "Phishing Test",
      "Phishing Testing Services",
      "Security Awareness Training",
      "Email Phishing Simulation",
      "Spear-phishing Simulation",
      "Vishing Simulation",
      "Smishing Simulation",
      "Human Firewall",
      "Human Risk Management",
      "Anti Phishing Services India",
      "Enterprise Phishing Simulation",
      "Business Email Compromise Testing",
      "BEC Simulation",
      "Credential Harvesting Simulation",
      "Social Engineering Assessment",
      "Phishing Awareness Training",
      "Cybersecurity Training for Employees",
      "Phishing Susceptibility Testing",
      "Continuous Phishing Program",
      "Managed Phishing Simulation",
      "Phishing Simulation for Banks",
      "Phishing Simulation for BFSI",
      "Phishing Simulation Healthcare",
      "Phishing Simulation SaaS Companies",
      "ISO 27001 Awareness Training",
      "SOC 2 Security Awareness",
      "Incident Response Training",
      "Cybersecurity Training India",
      "Drosera",
      "Drosera AI",
      "Drosera Phishing Simulation Platform",
      "AI Phishing Simulation Platform",
      "Human Risk Management Platform",
      "Human Risk Score",
      "ISECURION",
    ],
  },

  {
    slug: "inhouse-soc",
    path: "/services/inhouse-soc",
    name: "In-house SOC",
    serviceType: "Cloud Security Assessment",
    title: "In-house Security Operation Center - Data Protection Audit",
    description:
      "Establish a resilient in-house security operations center with the help of our cyber security experts who can help implement proven SIEM & MDR technologies.",
    keywords: [],
    ogTitle: "In-house Security Operation Center - Data Protection Audit",
    ogDescription:
      "Establish a resilient in-house security operations center with the help of our cyber security experts who can help implement proven SIEM & MDR technologies.",
    ogType: "website",
  },

  {
    slug: "hybrid-soc",
    path: "/services/hybrid-soc",
    name: "Hybrid SOC",
    serviceType: "Cloud Security Assessment",
    title: "Hybrid SOC - Managed Threat Assessment & Pentesting Service",
    description:
      "Leverage the expertise of an external cyber security company to complement the in house SOC to provide flexible, scalable security to protect your business.",
    keywords: [],
    ogTitle: "Hybrid SOC - Managed Threat Assessment & Pentesting Service",
    ogDescription:
      "Leverage the expertise of an external cyber security company to complement the in house SOC to provide flexible, scalable security to protect your business.",
    ogType: "website",
  },

  {
    slug: "company-contact",
    path: "/company/contact",
    name: "Contact Us",
    serviceType: "",
    title: "Contact-us",
    description:
      "Contact ISECURION - India's CERT-IN empanelled cybersecurity firm. Offices in Bangalore, Kolkata, Mumbai, Ahmedabad, Noida (UP), USA & UAE partner. Reach us for VAPT, penetration testing, SOC 2, ISO 27001, RBI audit, GDPR & compliance services.",
    keywords: [
      "contact ISECURION",
      "cybersecurity company India",
      "VAPT company Bangalore",
      "penetration testing Noida",
      "cybersecurity Ahmedabad",
      "cybersecurity Kolkata",
      "CERT-IN empanelled company",
      "SOC 2 compliance India",
      "ISO 27001 audit India",
      "RBI security audit",
      "GDPR compliance India",
      "DPDP compliance",
      "cloud security assessment",
      "red team assessment",
      "DevSecOps India",
      "vCISO services India",
      "incident response India",
      "ISECURION contact",
    ],
    ogTitle:
      "Contact ISECURION | CERT-IN Empanelled VAPT & Cybersecurity Company India",
    ogDescription:
      "Get in touch with ISECURION for VAPT, penetration testing, SOC 2, ISO 27001, RBI audit & compliance services. Offices across Bangalore, Kolkata, Mumbai, Ahmedabad, Noida and the USA.",
    ogType: "website",
    twitterTitle: "Contact ISECURION | VAPT & Cybersecurity Services India",
    twitterDescription:
      "Reach ISECURION for VAPT, penetration testing, compliance audits & cybersecurity consulting across India and globally.",
  },

  {
    slug: "company-about",
    path: "/company/about",
    isPage: true,
    name: "About",
    serviceType: "Page",
    title:
      "About ISECURION | CREST Member & CERT-In Empanelled Cyber Security Company",
    description:
      "ISECURION is a CREST Member (accredited for Penetration Testing) and CERT-In empanelled cyber security company in Bangalore offering VAPT, compliance audits and penetration testing services.",
    keywords: [],
  },
  {
    slug: "privacy-policy",
    path: "/privacy-policy",
    isPage: true,
    name: "Privacy Policy",
    serviceType: "Page",
    title: "Privacy Policy | ISECURION - Risk Assessment & Penetration Testing",
    description:
      "Learn how your data is protected when browsing the website of iSecurion, a leader in mobile / web application penetration testing & security audit services.",
    ogDescription:
      "Read ISECURION’s privacy policy to understand how we collect, use, and safeguard your personal information when you visit our website.",
    keywords: [],
  },
  {
    slug: "disclaimer",
    path: "/disclaimer",
    isPage: true,
    name: "Disclaimer",
    serviceType: "Page",
    title: "Disclaimer | ISECURION - Cyber Security & VAPT Services",
    description:
      "Read the disclaimer for ISECURION, a CERT-In empanelled cybersecurity provider offering SOC 2 audits, VAPT, and compliance services.",
    ogDescription:
      "Disclaimer for iSecurion, a top cyber security vendor for comprehensive SOC 2 audit, web application penetration testing & regulatory compliance services.",
    keywords: [],
  },
  {
    slug: "terms-of-use",
    path: "/terms-of-use",
    isPage: true,
    name: "Terms of Use",
    serviceType: "Page",
    title:
      "ISECURION Terms of Use | Cybersecurity, VAPT, and Compliance Services India",
    description:
      "Explore ISECURION's Terms of Use detailing cybersecurity audit, VAPT, and compliance service terms in India. Know your rights and our responsibilities.",
    ogTitle: "Terms of Use | ISECURION - Cybersecurity & VAPT Services India",
    ogDescription:
      "Read through the terms of use applicable when using the website of iSecurion, a leading cyber security vendor & IT data security auditor based in Bangalore.",
    keywords: [],
  },
];

export function getService(slug: string): ServiceEntry {
  const s = services.find((x) => x.slug === slug);
  if (!s)
    throw new Error(
      `Unknown service slug "${slug}". Add it to lib/seo/services.ts`,
    );
  return s;
}
