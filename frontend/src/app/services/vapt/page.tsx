"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import securityvalidation from "../../../assets/services/securityvalidation.jpg";
import settingImage from "../../../assets/services/settingImage.png";
import Image from "next/image";
import {
  Animation,
  AnimatedHeading,
  AnimatedCard,
  LeftAnimation,
  GradientIcon,
} from "../../../components/ui/Animation";
import attackerkey from "../../../assets/services/attackerkey.png";
import world from "../../../assets/services/world.svg";
import Link from "next/link";
import FAQSection from "../../../components/sections/FAQSection";
import VAPT_CTA from "../../../components/sections/VAPT_CTA";


const vapt = [
  {
    no: "500+",
    title: "VAPT Engagements",
  },
  {
    no: "100+",
    title: "Enterprise Customers",
  },
  {
    no: "CERT-In",
    title: "Empanelled",
  },
];

const data = [
  {
    icon: "material-symbols:lock-outline",
    title: "Prevent Breaches",
    description:
      "Proactively detect and remediate high-risk vulnerabilities before attackers exploit them.",
  },
  {
    icon: "mdi:partnership-outline",
    title: "Build Trust",
    description:
      "Demonstrate security assurance to customers, investors, auditors, and regulators.",
  },
  {
    icon: "hugeicons:balance-scale",
    title: "Stay Compliant",
    description:
      "Meet ISO 27001, SOC 2, PCI DSS, HIPAA, RBI, SEBI, IRDAI, and DPDP requirements effortlessly.",
  },
  {
    icon: "uil:money-insert",
    title: "Reduce Financial Risk",
    description:
      "Avoid costs from downtime, regulatory penalties, litigation, and breach remediation.",
  },
];

const services = [
  {
    Icon: "akar-icons:globe",
    title: "Web Application Penetration Testing",
    description:
      "Identify and exploit vulnerabilities across web applications.",
    list: [
      "OWASP Top 10 testing",
      "Authentication & authorization testing",
      "Business logic & API vulnerabilities",
    ],
  },
  {
    Icon: "akar-icons:mobile-device",
    title: "Mobile Application Security Testing",
    description:
      "Assess mobile apps for vulnerabilities across Android and iOS.",
    list: [
      "Static & dynamic analysis",
      "API security testing",
      "Data storage & binary protection",
    ],
  },
  {
    Icon: "akar-icons:cloud",
    title: "Cloud Security Assessment",
    description:
      "Strengthen cloud environments against configuration & access risks.",
    list: [
      "Cloud configuration review",
      "IAM & access control analysis",
      "AWS, Azure & GCP security",
    ],
  },
  {
    Icon: "akar-icons:network",
    title: "Network & Infra Penetration Testing",
    description:
      "Uncover weaknesses across internal and external infrastructure.",
    list: [
      "Port & service enumeration",
      "Firewall and network testing",
      "Lateral movement simulation",
    ],
  },
  {
    Icon: "ant-design:api-outlined",
    title: "API Security Testing",
    description:
      "Secure APIs against authorization, exposure and injection risks.",
    list: [
      "OWASP API Top 10",
      "Access control testing",
      "Injection & data exposure testing",
    ],
  },
  {
    Icon: "fe:target",
    title: "Red Team Assessment",
    description: "Simulate real-world attacks to test your security readiness.",
    list: [
      "Phishing & social engineering",
      "Lateral movement and persistence",
      "Detection and response validation",
    ],
  },
  {
    Icon: "carbon:iot-connect",
    title: "IoT & ICS / SCADA Security Testing",
    description:
      "Protect connected devices and critical industrial environments.",
    list: [
      "OT network security",
      "Device and firmware assessment",
      "ICS / SCADA vulnerability testing",
    ],
  },
  {
    Icon: "boxicons:code-alt",
    title: "Secure Code Review",
    description:
      "Identify security flaws before vulnerable code reaches production.",
    list: [
      "Secure coding assessment",
      "Manual & automated code analysis",
      "Java, Python, .NET, PHP & more",
    ],
  },
  {
    Icon: "ant-design:audit-outlined",
    title: "Smart Contract & Blockchain Security Audit",
    description:
      "Identify vulnerabilities across blockchain applications & smart contracts.",
    list: [
      "Smart contract security",
      "Access control and logic testing",
      "Reentrancy and oracle manipulation",
    ],
  },
  {
    Icon: "ic:round-query-stats",
    title: "Vulnytics - VAPT Platform & Dashboard",
    description:
      "ISECURION's proprietary security platform gives you real-time visibility into your VAPT findings, risk ratings, remediation status, and trends, all in one dashboard.",
    list: [
      "Vulnerability discovery & tracking",
      "Risk prioritization and remediation",
      "Continuous monitoring and reporting",
    ],
    product: "Explore Vulnytics →",
  },
];

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    subheading: "Planning & Reconnaissance",
    icon: "pajamas:issue-type-objective",
    description:
      "Define scope, rules of engagement, test objectives, and gather OSINT intelligence for attack surface mapping.",
  },
  {
    number: "02",
    title: "ASSESS",
    subheading: "Vulnerability Assessment",
    icon: "flowbite:file-search-outline",
    description:
      "Automated and manual checks to identify vulnerabilities, misconfigurations, patch gaps, and insecure services across the target environment.",
  },
  {
    number: "03",
    title: "VALIDATE",
    subheading: "Exploitation & Post-Exploitation",
    icon: "boxicons:bell-check",
    description:
      "Ethically exploit identified vulnerabilities to demonstrate real-world impact, privilege escalation, lateral movement, and data access simulation.",
  },
  {
    number: "04",
    title: "REMEDIATE",
    subheading: "Reporting & Remediation",
    icon: "oui:app-reporting",
    description:
      "Deliver a detailed report with CVSS risk ratings, PoC evidence, compliance mapping, and step-by-step remediation guidance.",
  },
  {
    number: "05",
    title: "VERIFY",
    subheading: "Re-test & Closure",
    icon: "boxicons:badge-check",
    description:
      "Re-validate fixes through complementary re-testing, issue closure report and attestation letter for auditors and stakeholders.",
  },
];
const locations = [
  {
    location: "Bangalore",
    Icon: "reicon:city",
  },
  {
    location: "Mumbai",
    Icon: "game-icons:tower-bridge",
  },
  {
    location: "Hyderabad",
    Icon: "fluent:building-mosque-12-regular",
  },
  {
    location: "Chennai",
    Icon: "la:vihara",
  },
  {
    location: "Pune",
    Icon: "icon-park-outline:city-gate",
  },
  {
    location: "Delhi NCR",
    Icon: "hugeicons:india-gate",
  },
  {
    location: "Gurgaon",
    Icon: "icon-park-outline:city-one",
  },
  {
    location: "Kochi",
    Icon: "lucide:tree-palm",
  },
  {
    location: "Ahmedabad",
    Icon: "streamline-plump:government-building-1",
  },
  {
    location: "Kolkata",
    Icon: "game-icons:arch-bridge",
  },
  {
    location: "Chandigarh",
    Icon: "icon-park-outline:eiffel-tower",
  },
  {
    location: "Jaipur",
    Icon: "tdesign:palace-1",
  },
];

const globalLocations = [
  {
    location: "US",
    fullName: "United States",
    Icon: "mingcute:statue-of-liberty-line",
  },
  {
    location: "UK",
    fullName: "United Kingdom",
    Icon: "hugeicons:twin-tower",
  },
  {
    location: "AE",
    fullName: "UAE / Dubai",
    Icon: "hugeicons:cayan-tower",
  },
  {
    location: "AU",
    fullName: "Australia",
    Icon: "mingcute:sydney-opera-house-line",
  },
  {
    location: "QA",
    fullName: "Qatar",
    Icon: "hugeicons:cayan-tower",
  },
];

const whyChooseIsecurion = [
  {
    Icon: "basil:award-outline",
    title: "CERT-In Empanelled",
    description: "India's government-recognized security auditor for VAPT.",
  },
  {
    Icon: "majesticons:document-award-line",
    title: "ISO 27001:2022 Certified",
    description: "We maintain the highest international security standards.",
  },
  {
    Icon: "eva:shopping-bag-outline",
    title: "CERT-In Empanelled",
    description: "Across 40+ industries in India and globally.",
  },
  {
    Icon: "boxicons:location",
    title: "4 Offices in India",
    description:
      "Bangalore, Kolkata, Ahmedabad, and Noida for on-site engagements.",
  },
  {
    Icon: "ant-design:field-time-outlined",
    title: "Zero-day Aware",
    description:
      "Updated on latest CVEs, exploit techniques, and attacker TTPs.",
  },
  {
    Icon: "ic:baseline-loop",
    title: "Free Re-test Included",
    description: "No additional charge for validating your fixes.",
  },
  {
    Icon: "bx:layer",
    title: "Multi-framework Expertise",
    description: "ISO 27001, SOC 2, PCI DSS, HIPAA, RBI, SEBI, IRDAI, DPDP.",
  },
  {
    Icon: "akar-icons:globe",
    title: "Fully Remote-capable",
    description: "Serving all cities in India and clients globally.",
  },
  {
    Icon: "pajamas:search-results",
    title: "Proprietary VAPT Platform:",
    product: "Vulny­tics",
    description:
      "Our in-house dashboard delivers real-time visibility into findings, risk trends, and remediation progress.",
  },
];

const whatYouWillReceive = [
  {
    Icon: "material-symbols:description-outline-rounded",
    title: "Executive Summary",
    description: "Non-technical overview for management and the board.",
  },
  {
    Icon: "tabler:report-search",
    title: "Detailed Technical Report",
    description:
      "Every finding with PoC evidence, screenshots, and reproduction steps.",
  },
  {
    Icon: "jam:triangle-danger",
    title: "CVSS v3.1 Risk Ratings",
    description:
      "Critical, High, Medium, Low, and Informational classifications.",
  },
  {
    Icon: "icon-park-outline:mind-mapping",
    title: "Compliance Mapping",
    description:
      "Findings mapped to ISO 27001, SOC 2, PCI DSS, RBI, SEBI, DPDPA as applicable.",
  },
  {
    Icon: "ic:outline-tips-and-updates",
    title: "Remediation Guidance",
    description: "Clear, prioritized, and actionable fix recommendations.",
  },
  {
    Icon: "tabler:file-infinity",
    title: "Re-test Report",
    description: "Confirmation of remediation effectiveness.",
  },
  {
    Icon: "humbleicons:certificate",
    title: "Attestation / Closure Letter",
    description: "For auditors, customers, and regulatory submissions.",
  },
];
const whoWeServe = [
  {
    Icon: "akar-icons:cloud",
    title: "SaaS & Product Companies",
    locations: "Bangalore, Hyderabad, Pune",
  },
  {
    Icon: "fluent:building-bank-24-regular",
    title: "FinTech & BFSI Organizations",
    locations: "Mumbai, Chennai, Delhi NCR",
  },
  {
    Icon: "line-md:medical-services",
    title: "Healthcare & Pharma Technology",
    locations: "Hyderabad, Kochi, Pune",
  },
  {
    Icon: "hugeicons:factory",
    title: "Manufacturing & OT/SCADA",
    locations: "Across India",
  },
];

const domainsWeTest = [
  {
    Icon: "mdi:application-brackets-outline",
    title: "Application Security",
    description: "Web, mobile, API, thick-client, and SaaS platform security.",
  },
  {
    Icon: "icon-park-outline:database-network-point",
    title: "Network & Perimeter",
    description:
      "Firewall rules, VPN, DMZ, network segmentation, & perimeter controls.",
  },
  {
    Icon: "akar-icons:cloud",
    title: "Cloud & Container",
    description:
      "AWS, Azure, GCP, Kubernetes, Docker security and IAM policy review.",
  },
  {
    Icon: "mingcute:directory-line",
    title: "Active Directory & IAM",
    description:
      "AD misconfigurations, Kerberoasting, pass-the-hash, and privilege escalation.",
  },
];

const vaptServicesInIndia = [
  {
    title: "VAPT Companies in Bangalore",
    description:
      "Bangalore (Bengaluru) is India's technology capital, home to over 6,000 technology companies in areas like Whitefield, Electronic City, Koramangala, HSR Layout, and JP Nagar. ISECURION is headquartered in JP Nagar, Bangalore, and has served 150+ Bangalore-based technology companies with VAPT, penetration testing, and compliance auditing. Our Bangalore team provides both on-site and remote VAPT services, covering web applications, mobile apps, cloud infrastructure, and network security testing.",
  },
  {
    title: "VAPT Services in Kolkata",
    description:
      "Kolkata's Sector V and Salt Lake City technology corridor is home to a growing number of IT services companies, fintech startups, and enterprise technology teams. ISECURION operates a local branch office in Kolkata, enabling on-site VAPT engagements for organizations across Eastern India. Our Kolkata team delivers web application security testing, network penetration testing, compliance-aligned VAPT for RBI and ISO 27001 requirements, and security assessments for BFSI and government sector organizations operating from Kolkata and the wider West Bengal region.",
  },
  {
    title: "Penetration Testing Companies in Mumbai",
    description:
      "Mumbai's FinTech, BFSI, e-commerce, and cloud services ecosystem demands rigorous security testing. ISECURION provides VAPT services to Mumbai-based organizations including RBI-regulated entities, insurance companies, payment platforms, and enterprise SaaS providers. Our VAPT reports are structured to meet RBI Cyber Security Framework requirements, PCI DSS mandates, and ISO 27001 audit evidence needs.",
  },
  {
    title: "VAPT Services in Hyderabad",
    description:
      "Hyderabad's HITEC City is home to major global technology firms, healthcare IT companies, and Indian unicorns with significant cloud and data workloads. ISECURION provides comprehensive VAPT and penetration testing to Hyderabad-based organizations, including SEBI CSCRF-aligned security testing for capital market participants and HIPAA-oriented testing for healthcare technology companies.",
  },
  {
    title: "Penetration Testing in Ahmedabad and Noida",
    description:
      "ISECURION operates offices in both Ahmedabad (Gujarat) and Noida (Uttar Pradesh / NCR), enabling on-site VAPT engagements for enterprises in these fast-growing technology hubs. Ahmedabad's expanding IT and manufacturing sectors, and Noida's dense enterprise IT corridor including Sector 62 and Sector 142, are well served by ISECURION's local presence and remote delivery capabilities.",
  },
  {
    title: "VAPT for Compliance - ISO 27001, SOC 2, PCI DSS, RBI, and DPDP",
    description:
      "VAPT is a core requirement or strongly recommended control in virtually every major compliance framework applicable in India. ISO 27001:2022 (Annex A 8.8 – Management of technical vulnerabilities) requires organizations to regularly assess and address vulnerabilities. SOC 2 (Trust Services Criteria CC6 and CC7) mandates periodic security testing. PCI DSS v4.0 (Requirement 11) mandates penetration testing at least annually and after significant changes. The RBI Cyber Security Framework requires banks and NBFCs to conduct VAPT regularly. India's DPDP Act and CERT-In incident reporting requirements further incentivize organizations to maintain a proactive security testing posture.",
  },
  {
    title: "How Much Does VAPT Cost in India?",
    description:
      "VAPT costs in India vary significantly based on the scope (number of applications, IPs, environments), test methodology (black-box, grey-box, white-box), complexity, and the depth of testing required. ISECURION provides transparent, scope-based pricing with no hidden charges. Our VAPT pricing is significantly more competitive than international consultancies while delivering internationally comparable quality, making us the preferred VAPT partner for both Indian organizations and global companies seeking cost-effective Indian delivery.",
  },
];

const vaptFAQs = [
  {
    question:
      "What is Vulnerability Assessment and Penetration Testing (VAPT)?",
    answer:
      "VAPT combines vulnerability assessment (systematically identifying known weaknesses) with penetration testing (actively exploiting them to measure real-world impact). Together they provide comprehensive security coverage - breadth from the assessment and depth from the penetration test - across web applications, mobile apps, networks, cloud environments, and infrastructure.",
  },
  {
    question: "Why is VAPT important for organizations in India?",
    answer:
      "VAPT aligns with CERT-In directives and sectoral guidelines from RBI, SEBI (CSCRF), IRDAI, UIDAI, and NPCI. It protects sensitive customer data, reduces breach likelihood, strengthens compliance posture for ISO 27001, SOC 2, PCI DSS, HIPAA, and India's Digital Personal Data Protection (DPDP) Act, and builds trust with global enterprise customers who require security attestations.",
  },
  {
    question: "Which cities in India does ISECURION provide VAPT services?",
    answer:
      "ISECURION provides VAPT services across all major Indian cities including Bangalore, Mumbai, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Noida, Delhi NCR, Gurgaon, Kochi, Chandigarh, Jaipur, and more. We have physical offices in Bangalore (HQ), Kolkata, Ahmedabad, and Noida for on-site engagements, and are fully remote-capable for all other locations across India.",
  },
  {
    question:
      "What is the difference between Vulnerability Assessment and Penetration Testing?",
    answer:
      "A vulnerability assessment identifies and catalogues weaknesses at scale using automated scanning and manual review - providing broad coverage across your attack surface. Penetration testing goes further by actively exploiting confirmed vulnerabilities with proof-of-concept evidence, demonstrating real-world attack paths and business impact. VAPT combines both approaches for comprehensive coverage.",
  },
  {
    question: "How often should VAPT be conducted?",
    answer:
      "At minimum, annually. Additionally, VAPT should be performed after major application releases, significant infrastructure changes, cloud migrations, new third-party integrations, organizational mergers, or whenever mandated by compliance frameworks (ISO 27001, PCI DSS v4.0, SOC 2) or customer contracts. High-risk environments like FinTech and healthcare benefit from quarterly assessments.",
  },
  {
    question: "Is VAPT mandatory for ISO 27001, SOC 2, or PCI DSS compliance?",
    answer:
      "Yes. ISO 27001:2022 (Annex A 8.8) requires technical vulnerability management and periodic penetration testing. SOC 2 Trust Services Criteria (CC6, CC7) requires regular security testing. PCI DSS v4.0 (Requirement 11.3 and 11.4) mandates penetration testing at least annually and after significant infrastructure changes. RBI Cyber Security Framework and SEBI CSCRF also explicitly require VAPT for regulated entities.",
  },
  {
    question: "What types of VAPT does ISECURION offer?",
    answer:
      "ISECURION offers: Web Application Penetration Testing, Mobile Application Security Testing (Android & iOS), Cloud Security Assessment (AWS, Azure, GCP), Network & Infrastructure Penetration Testing, API Security Testing, Red Team Assessment, IoT Security Testing, ICS / SCADA Security Assessment, Smart Contract Security Audit, Secure Code Review, Phishing Simulation, and DevSecOps Integration Testing.",
  },
  {
    question:
      "Will penetration testing affect our live servers or business operations?",
    answer:
      "ISECURION uses safe, non-intrusive methodologies on production environments with agreed change-control procedures and rollback plans documented before testing begins. For aggressive scenarios such as DoS simulation or exploit chaining, we strongly recommend using a staging environment and obtain explicit written approval before proceeding. Our team coordinates closely with your IT operations team throughout the engagement.",
  },
  {
    question: "How long does a VAPT engagement typically take?",
    answer:
      "A single web application or network segment typically takes 3–7 business days depending on scope complexity, number of features, API endpoints, and test depth. Mobile application testing typically takes 5–7 days. Red team engagements may span 2–4 weeks. Cloud security assessments for large environments take 5–10 days. We provide a detailed timeline estimate during initial scoping at no charge.",
  },
  {
    question: "What deliverables will we receive after the VAPT?",
    answer:
      "You receive: an Executive Summary for management, a Detailed Technical Report with proof-of-concept evidence and reproduction steps, CVSS v3.1 risk ratings (Critical/High/Medium/Low/Informational), compliance mapping for applicable frameworks, step-by-step remediation guidance, a Re-test Report validating your fixes, and an Attestation / Closure Letter for auditors, customers, or regulators.",
  },
  {
    question:
      "Does ISECURION provide a re-test after we fix the vulnerabilities?",
    answer:
      "Yes. A complimentary re-test is included within the agreed window to verify that all identified vulnerabilities have been successfully remediated. Upon successful closure, ISECURION issues a closure letter or attestation document that can be shared with auditors, customers, regulators, or as part of your ISO 27001 / SOC 2 evidence pack.",
  },
  {
    question: "What frameworks and standards does ISECURION follow for VAPT?",
    answer:
      "ISECURION follows: OWASP (Web Top 10, Mobile Top 10, API Security Top 10), NIST SP 800-115 (Technical Guide to Information Security Testing), PTES (Penetration Testing Execution Standard), OSSTMM (Open Source Security Testing Methodology Manual), CVSS v3.1 for risk scoring, and CERT-In guidelines for India-specific compliance requirements. All testing is performed within mutually agreed rules of engagement.",
  },
  {
    question: "What information is needed to start a VAPT engagement?",
    answer:
      "We need: defined scope (target URLs, IP ranges, application list), access model (black-box, grey-box, or white-box), preferred test window and change-freeze periods, points of contact for your technical team, test credentials for grey-box/white-box engagements, and any compliance frameworks to map in the final report (ISO 27001, SOC 2, PCI DSS, RBI, SEBI, etc.).",
  },
  {
    question: "Does ISECURION provide VAPT services outside India?",
    answer:
      "Yes. ISECURION provides VAPT and penetration testing to clients in the USA, UK, UAE (Dubai, Abu Dhabi), Australia (Sydney, Melbourne), Qatar, and Singapore. All international engagements are fully remote, timezone-flexible, and priced significantly below local consultancies in those markets - with no compromise on quality or report standards.",
  },
  {
    question: "Is ISECURION CERT-In empanelled for penetration testing?",
    answer:
      "Yes. ISECURION is empanelled by CERT-In (Indian Computer Emergency Response Team), India's national nodal agency for cybersecurity under the Ministry of Electronics & Information Technology (MeitY). CERT-In empanelment is the highest government-recognized credential for information security auditors in India. ISECURION is also ISO 27001:2022 certified, demonstrating that we maintain the same standards we help our clients achieve.",
  },
];
function Vapt() {
  return (
    <div className="bg-[#060D1B]">
      {/* this is the hero section  */}
      <section className="relative w-full py-14 flex flex-col justify-center items-center min-h-[88vh] 2xl:min-h-[68vh] overflow-hidden  bg-linear-to-b from-[#1F407C] to-[#455F6D]">
        {/* this dot images  */}
        <div className="absolute top-0 -left-20 w-[220px] h-[200px] opacity-20 z-10 pointer-events-none bg-[radial-gradient(circle,#FFFFFF_3px,transparent_3px)] [background-size:20px_20px]"></div>
        <div className="absolute -right-20 bottom-0 w-[220px] h-[200px] opacity-20 z-10 pointer-events-none bg-[radial-gradient(circle,#FFFFFF_3px,transparent_3px)] [background-size:20px_20px]"></div>
        {/* Outer Large Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[900px] h-[900px] rounded-full bg-[#FFFFFFA1]/20 flex justify-center items-center pointer-events-none">
          <div className="w-[450px] h-[450px] rounded-full bg-[#1F407C]/35"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 space-y-8 text-center flex flex-col items-center">
          {/* Heading */}
          <AnimatedHeading>
            Vulnerability Assessment & Penetration Testing (VAPT) Services in
          </AnimatedHeading>

          {/* Paragraph */}
          <AnimatedHeading>
            <p className="text-base sm:text-lg font-medium max-w-3xl mx-auto text-[#D9D9D9] leading-[28px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]">
              Identify security vulnerabilities before attackers do. Our
              expert-led VAPT services combine automated scanning with manual
              penetration testing to uncover real-world risks across
              applications, networks, cloud environments, and infrastructure.
            </p>
          </AnimatedHeading>

          {/* BUTTONS CONTAINER */}
          <Animation>
            <div className="relative flex flex-wrap gap-4 items-center justify-center ">
              <Link href="#services">
              <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg cursor-pointer text-base font-semibold text-white border-2 border-[#3263B1] bg-gradient-to-r from-[#29559D] to-[#1C3D70]">
                Explore VAPT Services{""}
                <span>
                  <Icon icon="ep:right" className="text-lg" />
                </span>
              </button>
              </Link>
              <Link href="/company/contact">
              <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-[10px] cursor-pointer text-base font-semibold text-[#31435C] border border-[#FFFFFF29] bg-[#FFFFFF]  transition duration-200">
                Request a Consultation{""}
                <span>
                  <Icon icon="ep:right" className="text-lg" />
                </span>
              </button>
              </Link>
            </div>
          </Animation>
        </div>
      </section>

      {/* What is VAPT? */}
      <section className="pb-14 w-full relative bg-[#060D1B]">
        <div className="max-w-3xl mx-auto  py-7  relative bottom-10 sm:bottom-10 z-30 rounded-xl bg-[#01060E] shadow-md shadow-[#7D70F024]">
          <div className="grid grid-cols-3 items-center justify-around">
            {vapt.map((item, index) => (
              <div
                key={index}
                className={`text-center space-y-2 ${index == 2 ? "" : "border-r border-[#4E5052]"}`}
              >
                <h3 className="text-base sm:text-xl font-semibold text-[#0F66EA]">
                  {item.no}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#8E8E8E]">
                  {item.title}
                </p>
                <hr className="border border-[#4E5052] max-w-[30px] mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-10 right-0 w-75 h-75 rounded-full blur-3xl bg-[#4675CE1F]"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* this is the heading  */}
          <Animation>
            <div className="text-center lg:text-left space-y-4">
              <h2 className="font-medium text-[#FEFEFE]">What is VAPT?</h2>
              <p className="sectionDescription max-w-[600px] mx-auto lg:mx-0  text-[#D1D1D1]">
                Vulnerability Assessment and Penetration Testing (VAPT) is a
                comprehensive cybersecurity approach that helps organizations
                identify, validate and remediate security weaknesses before
                attackers can exploit them.
              </p>
              <ul className="space-y-2 mt-3">
                <li className="text-sm sm:text-base font-normal  flex items-center gap-2 text-[#D1D1D1]">
                  <span>
                    <Icon
                      icon="boxicons:badge-check"
                      className="text-[#0F66EA]"
                    />
                  </span>
                  {""}
                  Combines automated vulnerability scanning with expert-led
                  penetration testing.
                </li>
                <li className="text-sm sm:text-base font-normal  flex items-center gap-2 text-[#D1D1D1]">
                  <span>
                    <Icon
                      icon="boxicons:badge-check"
                      className="text-[#0F66EA]"
                    />
                  </span>
                  {""}
                  Provides complete visibility of your security posture and
                  business risks.
                </li>
              </ul>
            </div>
          </Animation>
          <div className="flex mt-10 gap-10 flex-col lg:flex-row">
            <div className="flex-1 relative bg-cover  p-4 flex flex-col justify-around rounded-xl">
              <div
                className="opacity-34 inset-0 absolute bg-cover rounded-2xl pointer-events-none"
                style={{ backgroundImage: `url(${securityvalidation.src})` }}
              ></div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center  bg-[#012B6A] z-10">
                <Icon
                  icon="material-symbols:lock-outline"
                  className=" w-5 h-5 text-[#FFFFFF]"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-base sm:text-lg font-semibold max-w-[200px] text-[#FEFEFE]">
                  Comprehensive Security Validation
                </h3>
                <p className="text-sm sm:text-base font-normal max-w-[300px] leading-[30px] text-[#D1D1D1]">
                  Gain complete visibility into your organization’s security
                  posture through automated vulnerability discovery and
                  expert-led penetration testing.
                </p>
              </div>

              <Link href="#methodology">
              <button className="flex gap-2 text-[16px] font-semibold w-fit z-20 py-3 px-4 items-center justify-center rounded-lg cursor-pointer bg-gradient-to-r text-white  from-[#29559D] to-[#1C3D70] border-2 border-[#3263B1] "
              >
                Explore Our Methodology
                <span>
                  <Icon icon="ep:right" width={20} />{" "}
                </span>
              </button>
              </Link>
              
            </div>
            {/* second  */}
            <div className="flex-2  grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.12}
                  className="space-y-10 rounded-xl p-5 bg-linear-to-b from-[#0A1119] to-[#17366E] border border-[#002C8C]"
                >
                  <div className="h-12 w-12 rounded-full flex items-center justify-center shadow-xl  bg-[#012B6A]">
                    <Icon icon={item.icon} className="w-5 h-5 text-[#FFFFFF]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#FEFEFE]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal leading-[23px] text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* our services  */}
      <section id="services" className="w-full py-14 bg-[#060607]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <Animation>
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              <div className="rounded-4xl px-4 py-2 w-fit  bg-[#161B2F]">
                <p className="text-sm font-medium flex items-center gap-2  uppercase text-[#B4CAFD]">
                  <span>
                    <Icon
                      icon="uil:setting"
                      className="text-[#0F66EA] text-[18px]"
                    />
                  </span>{" "}
                  OUR SERVICES
                </p>
              </div>
              <h2 className=" max-w-xl text-center lg:text-left text-[#FEFEFE]">
                End-to-End VAPT Penetration Testing Services
              </h2>
              <p className="sectionDescription max-w-lg text-center lg:text-left text-[#D1D1D1]">
                End-to-end security testing across every layer of your
                technology stack, from Bangalore to New York.
              </p>
            </div>
          </Animation>
          <Animation>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-12">
                {services.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className={` relative flex flex-col justify-between p-5 rounded-lg bg-[#000726] shadow-2xl shadow-[#8997BA26] ${index === 9 ? "w-full lg:col-span-3" : "col-span-1"}`}
                  >
                    <div className="absolute -top-8 right-0 w-13 h-13  flex flex-col items-center justify-center rounded-xl  border-[3px] border-[#B6D1F5] bg-[#3B9E6A]">
                      <Icon
                        icon={item.Icon}
                        className="text-2xl text-[#FFFFFF]"
                      />
                    </div>
                    <div className="space-y-3 flex flex-col justify-between">
                      <h3 className="text-base font-semibold  mt-4 h-[50px]  text-[#FEFEFE]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-normal leading-[22px] text-[#D1D1D1]">
                        {item.description}
                      </p>
                    </div>
                    <div
                      className={`p-3 mt-4 rounded-[5px] h-[165px] bg-[#03163E] `}
                    >
                      <ul className="space-y-3">
                        {item.list.map((listItem, listIndex) => (
                          <li
                            key={listIndex}
                            className="text-sm font-medium flex items-center gap-2 text-[#D1D1D1]"
                          >
                            <span className="w-[16px] h-[16px] flex items-center justify-center rounded-xl bg-[#3B9E6A]">
                              <Icon icon="charm:tick" className="text-[10px]" />
                            </span>
                            {listItem}
                          </li>
                        ))}
                      </ul>
                      {item.product && (
                        <div className="flex justify-end items-end">
                          <Link
                            href="https://vulnytics.isecurion.com"
                            className="text-[15px] font-medium px-3 py-3 rounded-[10px] cursor-pointer text-[#FFFFFF] border-2 border-[#0F66EA] bg-linear-to-r from-[#3263B1]  via-[#29559D] to-[#1C3D70]  shadow-[#0F66EA14]"
                          >
                            {item.product}
                          </Link>
                        </div>
                      )}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </Animation>
        </div>
      </section>

      {/* A proven methodology for finding what matters.  */}
      <section id="methodology" className="w-full py-14 relative bg-[#060D1B] overflow-hidden">
        <div className="w-[200px] h-[200px] absolute -top-10 right-0 opacity-8">
          <Image src={settingImage} alt="setting" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10  ">
          <Animation>
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="font-medium text-[#FEFEFE]">
                A proven methodology for finding what matters.
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                Our VAPT engagements combine structured reconnaissance,
                technical validation and evidence-led remediation, aligned with
                globally recognized frameworks.
              </p>
            </div>
          </Animation>
          <Animation>
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
              {steps.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className="relative w-full md:w-1/2 lg:w-1/5 text-center py-5 md:px-4 lg:px-2"
                >
                  {/* Number */}
                  <div>
                    <p className="text-sm sm:text-base  text-[#999999] mb-2">
                      {item.number}
                    </p>
                  </div>

                  {/* Icon + connector */}
                  <div className="relative flex justify-center">
                    <div className="w-[64px] h-[64px] sm:w-[68px] sm:h-[68px] rounded-full border border-[#7D70F0] bg-[#0D0B25] flex items-center justify-center relative z-10 shadow-[0px_0px_15px_#7B6FE86E]">
                      <Icon
                        icon={item.icon}
                        className="text-2xl sm:text-3xl text-white"
                      />
                    </div>

                    {index !== steps.length - 1 && (
                      <div className=" hidden lg:flex absolute left-[calc(50%+34px)] right-[-50%] top-1/2 -translate-y-1/2 items-center">
                        <div className="w-full h-px bg-[#7D70F0]" />

                        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#0F66EA] border-2 border-[#FFFFFF]" />
                      </div>
                    )}

                    {index !== steps.length - 1 && (
                      <div className=" lg:hidden absolute top-[68px] bottom-[-20px] left-1/2 -translate-x-1/2 w-px bg-[#7D70F0]">
                        <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3B82F6] border border-[#A5B4FC]" />
                      </div>
                    )}
                  </div>

                  <div
                    className={`min-h-[300px] p-2 border-[#34405399] ${index !== steps.length - 1 ? "border-r" : ""}`}
                  >
                    <div className="h-[100px]  flex flex-col justify-between">
                      <h3 className=" text-base md:text-lg font-medium text-[#FEFEFE]">
                        {item.title}
                      </h3>

                      <p className="text-sm md:text-base font-medium text-[#0F66EA]">
                        {item.subheading}
                      </p>

                      <div className="w-10 h-px bg-[#455F6DB5] mx-auto my-3 p-px rounded-2xl" />
                    </div>

                    <p className="text-sm md:text-base font-normal  max-w-47 mx-auto leading-6 text-[#9AA4BA] ">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </Animation>
        </div>
      </section>

      {/* VAPT expertise across India’s leading tech hubs. */}
      <section className="w-full py-14 relative bg-[#060D1B]">
        <div className="absolute inset-0 bg-center bg-cover pointer-events-none">
          <Image src={world} alt="world" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 ">
          <div className="flex gap-10 flex-col lg:flex-row">
            <div className="flex-1 space-y-4">
              <LeftAnimation>
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className=" text-[#FEFEFE]">
                    VAPT expertise across India’s leading{" "}
                    <span className="text-[#0F66EA]">tech hubs.</span>
                  </h2>
                  <p className="sectionDescription text-[#D1D1D1]">
                    From local assessments to nationwide engagements, ISECURION
                    delivers on-ground and remote VAPT expertise across every
                    major Indian technology hub.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                  <div className="flex gap-5 border-[#8F90AB38] sm:border-r ">
                    <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] bg-[#1D1A37]">
                      <Icon
                        icon="fa7-solid:star-of-david"
                        className="text-[#0F66EA] text-2xl"
                      />
                    </div>
                    <p className="text-sm font-normal  max-w-25 text-[#FFFFFF]">
                      On-ground expertise
                    </p>
                  </div>
                  <div className="flex gap-5 border-[#8F90AB38] sm:border-r">
                    <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] bg-[#1D1A37]">
                      <Icon
                        icon="fa-solid:retweet"
                        className="text-[#0F66EA] text-2xl"
                      />
                    </div>

                    <p className="text-sm font-normal max-w-25 text-[#FFFFFF]">
                      Remote engagements
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <div className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] bg-[#1D1A37]">
                      <Icon
                        icon="boxicons:science"
                        className="text-[#0F66EA] text-2xl"
                      />
                    </div>

                    <p className="text-sm font-normal max-w-25 text-[#FFFFFF]">
                      Consistent methodology
                    </p>
                  </div>
                </div>
              </LeftAnimation>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 rounded-[26px] bg-[#1D1E2AB2] border border-gray-800"
            >
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 w-full p-4 ">
                {locations.map((item, index) => {
                  const isLastColumn = (index + 1) % 4 === 0;
                  const isLastRow = index >= locations.length - 4;
                  return (
                    <div key={index}>
                      <div
                        className={`space-y-3 p-3 flex flex-col items-center ${!isLastColumn ? "border-r border-[#242A3B]" : ""} `}
                      >
                        {/* <Icon
                          icon={item.Icon}
                          className="text-3xl text-[#0FEADB]"
                        /> */}

                        <GradientIcon Icon={item.Icon} />

                        <h3 className="text-base md:text-lg font-normal text-[#D1D1D1]">
                          {item.location}
                        </h3>
                        {!isLastRow && (
                          <div className="absolute left-1/2 -translate-x-1/2 -bottom-px w-16 border-b border-[#242A3B]" />
                        )}
                      </div>
                      <div
                        className={`mt-4 ${!isLastRow ? "border border-[#242A3B]" : ""}`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          {/* global coverage  */}
          <div className="flex flex-col lg:flex-row items-center py-10 px-6 sm:px-10 mt-10 rounded-[19px] gap-10  border border-gray-700 bg-linear-to-r from-[#1D1E2A]/19 to-[#0F66EA]/25">
            <div className="w-full flex-1 space-y-4 text-center lg:text-left">
              <p className="text-lg sm:text-xl font-medium text-[#0F66EA]">
                GLOBAL COVERAGE
              </p>
              <h3 className="text-2xl font-medium leading-[35px] md:leading-[38px] text-[#FEFEFE]">
                Global reach. Consistent standards.
              </h3>
              <p className="sectionDescription text-[#D1D1D1]">
                International-standard VAPT services delivered across key global
                markets.
              </p>
            </div>
            <div className="w-full flex-2 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {globalLocations.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className={`w-[150px] flex flex-col items-center gap-3 px-3 ${index !== globalLocations.length - 1 ? "border-[#2B3756] border-r" : ""}`}
                  >
                    <GradientIcon Icon={item.Icon} />

                    <h3 className="text-base font-normal text-[#D1D1D1]">
                      {item.location}
                    </h3>
                    <div className="h-[2px] w-[30px] rounded-[1px] border border-[#455F6DB5] bg-[#0F66EA]"></div>
                    <p className="text-sm sm:text-base font-normal text-center text-[#D1D1D1]">
                      {item.fullName}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See your security through an attacker’s eye  */}
      <section className="w-full py-14 relative">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px]"
          style={{ backgroundImage: `url(${attackerkey.src})` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-8 md:gap-10 z-10">
          <div className="flex-1 ">
            <LeftAnimation>
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-sm font-medium sectionheading text-[#E76A34]">
                  WHY CHOOSE ISECURION FOR VAPT
                </p>
                <h2 className=" text-[#FEFEFE]">
                  See your security through an{" "}
                  <span className="text-[#E76A34]">attacker’s eye</span>
                </h2>
                <p className="sectionDescription text-[#D1D1D1]">
                  We go beyond automated scans to uncover real-world
                  vulnerabilities, validate their impact, and help you build
                  stronger defenses.
                </p>
                <div className="py-8 px-3 flex gap-8 rounded-xl border-[#686868] border bg-[#222939F0]">
                  <div className="p-3 border-r border-[#6268778F]">
                    <Icon
                      icon="lucide-lab:crosshair-2-dot"
                      className="w-[55px] h-[55px]  text-[#0F66EA]"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#FFFFFF]">
                      Find it. <span className="text-[#0F66EA]">Prove it.</span>
                      Fix it. {""}
                    </h3>
                    <p className="text-sm font-normal max-w-md leading-8 text-[#D1D1D1]">
                      Every assessment is designed to demonstrate real-world
                      risk and turn findings into actionable security
                      improvements.
                    </p>
                  </div>
                </div>
              </div>
            </LeftAnimation>
          </div>
          <div className="flex-1 rounded-xl space-y-5 p-5 bg-[#262D3DBD]">
            {whyChooseIsecurion.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.15}
                className="flex gap-4"
              >
                <div className="w-[55px] h-[55px] flex items-center justify-center shrink-0 rounded-full bg-[#111223]">
                  <Icon icon={item.Icon} className="text-2xl text-[#E78434]" />
                </div>
                <div className="border relative border-[#626877]">
                  <div className="absolute w-[10px] h-[10px] -left-[4px] top-3 rounded-full bg-[#E78434]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-semibold text-[#FEFEFE]">
                    {item.title}{" "}
                    <span className="text-[#E78434]">{item.product}</span>
                  </h3>
                  <p className="text-sm font-normal leading-[23px] text-[#D1D1D1]">
                    {item.description}{" "}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* VAPT for every industry, every stage.  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto  flex flex-col xl:flex-row  gap-8  md:gap-10 overflow-hidden">
          <div className="h-auto xl:h-[660px] w-full lg:w-[550px]  p-4 relative rounded-2xl bg-linear-to-l from-[#000000] to-[#0A264F]">
            <div className="absolute -top-6 md:-right-10 opacity-90">
              <Icon
                icon="tabler:medal"
                className="w-[205px] h-[204px] text-[#EBEBEB05]"
              />
            </div>
            <h3 className="text-lg md:text-xl font-medium  text-[#FFFFFF]">
              What You Will Receive
            </h3>
            <div className="relative mt-8">
              <div className="absolute left-[75px] top-0 bottom-0 border-l border-[#626877]" />
              <div className="space-y-5">
                {whatYouWillReceive.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="flex gap-5"
                  >
                    <div className="w-[55px] h-[55px] flex items-center justify-center shrink-0 rounded-full bg-[#DADADA26]">
                      <Icon
                        icon={item.Icon}
                        className="text-2xl text-[#FFFFFF]"
                      />
                    </div>
                    <div className="relative w-0">
                      <div className="absolute top-3 -left-[5px] w-[11px] h-[11px] rounded-full border border-[#FFFFFF] bg-[#0F66EA]" />
                    </div>
                    <div className="">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-[#FEFEFE]">
                          {item.title}
                        </h3>
                        <p className="text-sm font-normal leading-[23px] text-[#D1D1D1]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-5">
            {/* Who We Serve  */}
            <div className="relative p-4 md:p-6 rounded-2xl bg-linear-to-l from-[#000000] to-[#0A264F] overflow-hidden">
              <div className="absolute -top-10 -right-12">
                <Icon
                  icon="bi:question-lg"
                  className="w-[200px] h-[200px] text-[#EDF9F20D]"
                />
              </div>
              <div className="space-y-2">
                <div className="space-y-4 text-center lg:text-left">
                  <p className="text-base sm:text-lg font-medium uppercase text-[#FFFFFF]">
                    Who We Serve
                  </p>
                  <h2 className=" text-[#FEFEFE]">
                    VAPT for every industry, <br />
                    <span className="text-[#0F66EA]">every stage.</span>
                  </h2>
                  <p className="text-sm font-normal mt-3 max-w-md leading-[24px] text-[#D1D1D1]">
                    VAPT is essential for organizations operating in India’s
                    digital economy. From SaaS and FinTech to healthcare and
                    manufacturing, it helps businesses strengthen security, meet
                    compliance requirements, and build customer trust.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
                  {whoWeServe.map((item, index) => (
                    <AnimatedCard
                      key={index}
                      delay={index * 0.15}
                      className="flex flex-col justify-between space-y-3 px-3 py-3 rounded-xl border border-[#1F314C]"
                    >
                      <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#0F66EA] shadow-2xl shadow-[#8997BA26]">
                        <Icon
                          icon={item.Icon}
                          className="text-xl text-[#FFFFFF]"
                        />
                      </div>
                      <h3 className="text-xs font-semibold leading-[18px] text-[#FEFEFE]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-normal leading-[15px] text-[#D1D1D1]">
                        {item.locations}
                      </p>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
            {/* Key Security Domains We Test  */}
            <div className="p-5 md:p-6 rounded-2xl bg-linear-to-l from-[#000000] to-[#0A264F] ">
              <div>
                <p className="text-base md:text-xl font-medium text-[#FEFEFE]">
                  Key Security Domains We Test
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-6">
                  {domainsWeTest.map((item, index) => (
                    <AnimatedCard
                      key={index}
                      delay={index * 0.15}
                      className="flex flex-col  space-y-3 px-3 py-4 rounded-xl border border-[#1F314C]"
                    >
                      <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#2A3E5C] shadow-2xl shadow-[#8997BA26]">
                        <Icon
                          icon={item.Icon}
                          className="text-xl text-[#FFFFFF]"
                        />
                      </div>

                      <h3 className="text-xs font-semibold h-[30px]  leading-[17px] text-[#FEFEFE]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-normal leading-[17px] text-[#D1D1D1]">
                        {item.description}
                      </p>
                    </AnimatedCard>
                  ))}
                </div>
                <Link href="/services/soc-2-compliance">
                <p className="text-sm font-medium flex items-center gap-3 justify-center  mt-4 text-[#0F66EA]">
                  Explore SOC 2 + VAPT bundled services {""}
                  <span>
                    <Icon icon="akar-icons:arrow-right" />
                  </span>
                </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VAPT Services in India - Everything You Need to Know  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="max-w-2xl mx-auto lg:mx-0  space-y-4 text-center lg:text-left">
              <h2 className=" text-[#FEFEFE]">
                VAPT Services in India - Everything You Need to Know
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                VAPT is essential for organizations operating in India's digital
                economy. From SaaS and FinTech to healthcare and manufacturing,
                it helps businesses strengthen security, meet compliance
                requirements, and build customer trust.
              </p>
            </div>
          </Animation>

          <div className="space-y-5 mt-10">
            {vaptServicesInIndia.map((item, index) => (
              <div key={index}>
                <Animation>
                  <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-base sm:text-lg font-semibold text-[#FEFEFE]">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg font-normal leading-[30px] sm:leading-[34px] md:leading-[36px] lg:leading-[38px] text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </Animation>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection
        title={
          <>
            Frequently Asked Questions - VAPT &
            <br className="hidden sm:block" />
            Penetration Testing
          </>
        }
        description="Common questions from organizations across Bangalore, Mumbai, Hyderabad, Kolkata, Ahmedabad, Noida, and globally."
        faqs={vaptFAQs}
      />
      <VAPT_CTA />
    </div>
  );
}

export default Vapt;
