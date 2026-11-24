"use client";
import { Icon } from "@iconify/react";
import herobackground from "../assets/home/heroBg.svg";
import tokenvault from "../assets/home/client/tokenvault.png";
import bookmyshow from "../assets/home/client/bookmyshow.png";
import indegene from "../assets/home/client/indegene.png";
import allianz from "../assets/home/client/allianz.png";
import shellinfo from "../assets/home/client/shellinfo.png";
import bosch from "../assets/home/client/Bosch_logo.png";
import Link from "next/link";
import React from "react";
import FAQSection from "../components/sections/FAQSection";

import indentifyrisk from "../assets/home/indentifyrisk.jpg";
import continuousvalidation from "../assets/home/continuousvalidattion.png";
import defence from "../assets/home/defence.png";
import buildtrust from "../assets/home/buildtrust.png";

import vulnytics from "../assets/home/vulnytics.svg";
import lms from "../assets/home/lms.svg";
import drosera from "../assets/home/droseradashboard.svg";

import left from "../assets/home/left.png";
import right from "../assets/home/right.png";

import IndustriesWeSecure from "../components/home/IndustriesWeSecure";

import iso27001 from "../assets/home/iso27001.png";
import iso90001 from "../assets/home/iso90001.png";

import ceh from "../assets/home/auditorcertifications/ceh.svg";
import ccna from "../assets/home/auditorcertifications/ccna.svg";
import oscp from "../assets/home/auditorcertifications/oscp.svg";
import mobile from "../assets/home/auditorcertifications/mobile.svg";
import cism from "../assets/home/auditorcertifications/cism.png";
import cissp from "../assets/home/auditorcertifications/cissp.svg";
import cisa from "../assets/home/auditorcertifications/cisa.svg";
import crest from "../assets/home/auditorcertifications/crest.svg";
import WordReveal, {
  AnimatedCard,
  Animation,
  LeftAnimation,
  RightAnimation,
} from "../components/ui/Animation";
import { motion } from "framer-motion";
import Image from "next/image";
import healthcare from "../assets/home/health-care.png";
import manufacturing from "../assets/home/manufacturingRight.png";
import rightCircle from "../assets/home/rightCircle.png";
import HomeCTA from "../components/home/HomeCTA";
import crestbackground from "../assets/home/certificationBackground.png";
import crestcertificate from "../assets/home/auditorcertifications/crestcertificate.png";
import { title } from "node:process";
import { link } from "node:fs";
import mapBackground from "../assets/home/mapBackground.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const capabilities = [
  {
    icon: "si:shield-line",
    title: "Proactive Security Validation",
    description:
      "Identify vulnerabilities before attackers exploit them through continuous testing and real-world simulations.",
  },
  {
    icon: "tabler:brain",
    title: "Intelligent Security Platforms",
    description:
      "Purpose-built platforms that simplify vulnerability management, phishing simulations, and security awareness.",
  },
  {
    icon: "streamline:network",
    title: "Enterprise-Grade Expertise",
    description:
      "Trusted by enterprises to deliver scalable cybersecurity services across industries & evolving digital ecosystems.",
  },
];

const ourExpertise = [
  {
    Icon: "icon-park-outline:lock",
    title: "Offensive Security",
    description:
      "Identify vulnerabilities through proactive security testing and real-world attack simulations.",
    services: [
      {
        title: "Vulnerability Assessment & Penetration Testing",
        link: "/services/vulnerability-assessment-penetration-testing",
      },
      {
        title: "Web Application Security Assessment",
        link: "/services/web-application-security-assessment",
      },
      {
        title: "Mobile Application Security (iOS & Android)",
        link: "/services/mobile-application-security",
      },
      // { title: "API Security Testing", link: "/services/" },
      { title: "Secure Code Review", link: "/services/secure-code-review" },
      {
        title: "Crypto Currency Exchange Pentest",
        link: "/services/crypto-currency-exchange",
      },
      {
        title: "Red Team & AI-Augmented Red Team",
        link: "/services/red-team-assessment",
      },
      {
        title: "IoT & Industrial Control System Security",
        link: "/services/iot-security-testing",
      },
    ],
    iconColor: "text-white",
    bgColor: "#88010045",
    hoverFrom: "#3E0302",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#E24B4A]",
    listColor: "text-[#A8A8A8]",
    link: "services/vulnerability-assessment-penetration-testing",
  },
  {
    Icon: "lucide:monitor-cog",
    title: "Managed Security",
    description:
      "24x7 threat detection, round-the-clock SOC monitoring and incident response to detect, contain and remediate attacks quickly.",
    services: [
      {
        title: "Managed Security Services (MSSP)",
        link: "/services/managed-security-services",
      },
      { title: "In-House SOC", link: "/services/inhouse-soc" },
      { title: "Hybrid SOC", link: "/services/hybrid-soc" },
      // { title: "Incident Response & DFIR", link: "/services/" }
    ],
    iconColor: "text-white",
    bgColor: "#001233",
    hoverFrom: "#3477C5",
    hoverTo: "#002E65",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
    link: "services/managed-security-services",
  },
  {
    Icon: "gridicons:cloud-outline",
    title: "Cloud & Infrastructure Security",
    description:
      "Secure AWS, Azure and GCP environments against misconfigurations and threats across modern IT ecosystems.",
    services: [
      {
        title: "Cloud Security Assessment",
        link: "/services/cloud-security-assessment",
      },
      {
        title: "Configuration Review",
        link: "/services/cloud-security-assessment",
      },
      {
        title: "Network & Infrastructure Penetration Testing",
        link: "/services/vulnerability-assessment-penetration-testing",
      },
      {
        title: "Infrastructure Hardening",
        link: "/services/cloud-security-assessment",
      },
    ],
    iconColor: "text-white",
    bgColor: "#00031C",
    hoverFrom: "#002E65",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
    link: "services/cloud-security-assessment",
  },
  {
    Icon: "charm:notes-tick",
    title: "Governance, Risk & Compliance",
    description:
      "Align with Indian and global regulations through audits, advisory and governance frameworks.",
    services: [
      { title: "ISO 27001 27001:2022", link: "/services/iso-27001" },
      { title: "SOC 2 Compliance", link: "/services/soc-2-compliance" },
      { title: "DPDP Act, 2023 & GDPR", link: "/services/dpdp-compliance" },
      {
        title: "RBI Information Security Audit",
        link: "/services/rbi-security-audit",
      },
      // { title: "UAE VASP Compliance", link: "/services/" },
    ],
    iconColor: "text-white",
    bgColor: "#00031C",
    hoverFrom: "#002E65",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
    link: "services/iso-27001",
  },
  {
    Icon: "lucide:users-round",
    title: "Security Advisory",
    description:
      "Strategic cybersecurity leadership, governance and compliance guidance without a full-time CISO.",
    services: [
      { title: "Virtual CISO", link: "/services/vciso" },
      { title: "DPO Services", link: "/services/outsourced-dpo" },
      { title: "Security Roadmaps", link: "/services/vciso" },
      { title: "Risk Management", link: "/services/vciso" },
    ],
    iconColor: "text-white",
    bgColor: "#001233",
    hoverFrom: "#3477C5",
    hoverTo: "#002E65",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
    link: "services/vciso",
  },
  {
    Icon: "material-symbols:warning-outline-rounded",
    title: "Security Awareness & Human Risk",
    description:
      "Test employee awareness with real-world phishing simulation, powered by our Drosera -Phishing simulation platform.",
    services: [
      {
        title: "Security Awareness Training",
        link: " https://drosera.ai/security-awareness",
      },
      { title: "Phishing Simulations", link: "/services/phishing-simulation" },
      { title: "Human Risk Assessment", link: "/services/phishing-simulation" },
      {
        title: "Cybersecurity Workshops",
        link: "https://drosera.ai/security-awareness-lms ",
      },
    ],
    iconColor: "text-white",
    bgColor: "#88010045",
    hoverFrom: "#3E0302",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#E24B4A]",
    listColor: "text-[#A8A8A8]",
    link: "services/phishing-simulation",
  },
];

const mapMarkers = [
  { id: 1, x: "18.4%", y: "38.6%", type: "red" },
  { id: 2, x: "49.3%", y: "31%", type: "red" },
  { id: 3, x: "54%", y: "51%", type: "blue" },
  { id: 4, x: "63.9%", y: "49%", type: "red" },
  { id: 5, x: "65.8%", y: "49%", type: "red" },
  { id: 6, x: "72.5%", y: "51.7%", type: "red" },
  { id: 7, x: "80.1%", y: "59.1%", type: "red" },
  { id: 8, x: "93.7%", y: "77.9%", type: "red" },
];

const auditorCertificates = [
  {
    img: ceh,
  },
  {
    img: ccna,
  },
  {
    img: oscp,
  },
  {
    img: mobile,
  },
  {
    img: cism,
  },
  {
    img: cissp,
  },
  {
    img: cisa,
  },
];

const trustedCompanies = [
  {
    src: tokenvault.src,
    alt: "Tokenvault",
    className: "h-10 w-35",
  },
  {
    src: bookmyshow.src,
    alt: "Bookmyshow",
    className: "h-10 w-35",
  },
  {
    src: bosch.src,
    alt: "Bosch",
    className: "h-8 w-35",
  },
  {
    src: indegene.src,
    alt: "Indegene",
    className: "h-7 w-35",
  },
  {
    src: allianz.src,
    alt: "Allianz",
    className: "h-8 w-35",
  },
  {
    src: shellinfo.src,
    alt: "ShellInfo",
    className: "h-10 w-35",
  },
];

const impactCards = [
  {
    category: "GOVERNMENT",
    categoryBg: "#B78A27",
    bgColor: "#D9A235",
    title: "Strengthening Public Sector Cyber Resilience.",
    description:
      "Enhanced security posture and compliance readiness through continuous assessment and proactive threat validation.",
    linkColor: "#000000",
  },
  {
    category: "TELECOM",
    categoryBg: "#164D48",
    bgColor: "#080E1B",
    title: "Securing Critical Network Infrastructure.",
    description:
      "Validated security controls across distributed environments and strengthened defenses against advanced threats.",
    linkColor: "#3B9E6A",
  },
  {
    category: "FINANCIAL SERVICES",
    categoryBg: "#541A2A",
    bgColor: "#080E1B",
    title: "Preventing Credential Compromise in a Financial Institution.",
    description:
      "Strengthened identity security through phishing simulations and targeted awareness that closed critical gaps.",
    linkColor: "#E24B4A",
  },
];

const homeFAQs = [
  {
    question: "Is ISECURION CREST accredited?",
    answer: (
      <>
        {" "}
        Yes. ISECURION is a CREST Member, accredited for Penetration Testing.
        CREST is an international accreditation body for the cyber security
        industry, and its company accreditation is awarded to organisations that
        meet its standards for processes, technical methodologies and data
        handling. The CREST accreditation applies to ISECURION's Penetration
        Testing service. ISECURION is also CERT-In empanelled and ISO 27001:2022
        certified.{" "}
        <a
          href="https://www.crest-approved.org/"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about CREST →
        </a>
      </>
    ),
  },
  {
    question:
      "What does CREST accreditation mean for penetration testing, and why does it matter?",
    answer:
      "CREST accreditation is an independent assessment of a company's penetration testing processes, technical methodologies and data-handling practices. For clients, it provides assurance that testing is delivered to a recognised international standard, which is valued by enterprises, regulated sectors and organisations that work with global partners. ISECURION is a CREST Member accredited for Penetration Testing.",
  },
  {
    question: "What is VAPT and why does my organisation need it?",
    answer:
      "VAPT stands for Vulnerability Assessment and Penetration Testing. The assessment phase identifies known vulnerabilities in your systems, while the penetration testing phase simulates real-world attacks to exploit those weaknesses. Organisations need VAPT to discover security gaps before malicious actors do, to meet regulatory compliance requirements (CERT-In, RBI, SEBI, etc.), and to protect sensitive customer data from breach.",
  },
  {
    question:
      "What is the difference between vulnerability assessment and penetration testing?",
    answer:
      "A vulnerability assessment identifies, classifies and prioritises security weaknesses across systems, applications and networks, usually with a broad scan supported by manual validation. Penetration testing goes further: skilled testers actively attempt to exploit vulnerabilities to show real-world impact and attack paths. Together they make up VAPT, giving both wide coverage and proof of what an attacker could actually achieve.",
  },
  {
    question: "Is ISECURION CERT-In empanelled?",
    answer:
      "Yes, ISECURION is a CERT-In (Indian Computer Emergency Response Team) empanelled cybersecurity company. This empanelment is granted by the Ministry of Electronics and Information Technology (MeitY), Government of India, and confirms that our team meets the stringent technical and quality standards required to conduct cybersecurity audits and penetration testing for government and critical-sector organisations across India.",
  },
  {
    question:
      "What is the difference between CERT-In empanelment and CREST accreditation?",
    answer:
      "CERT-In empanelment is an Indian government recognition that allows an organisation to conduct information security audits, and it is widely required by Indian government bodies and regulated entities. CREST accreditation is an international accreditation for penetration testing providers, recognised by clients and regulators in many countries. ISECURION holds both: it is CERT-In empanelled and a CREST Member accredited for Penetration Testing.",
  },
  {
    question: "How do I choose a VAPT or penetration testing company in India?",
    answer:
      "Look for recognised credentials such as CERT-In empanelment and CREST accreditation, testers who hold qualifications like OSCP, CEH or CISSP, a methodology that combines manual testing with tools rather than relying only on scanners, clear reports with remediation guidance and a retest, strong confidentiality and data-handling practices, and experience in your industry. ISECURION is CERT-In empanelled, a CREST Member accredited for Penetration Testing and ISO 27001:2022 certified.",
  },
  {
    question: "What types of penetration testing does ISECURION offer?",
    answer:
      "ISECURION offers web application, mobile application (iOS and Android), cloud (AWS, Azure and GCP), network and infrastructure, API, IoT, industrial control system, smart contract and crypto exchange penetration testing, along with secure code review, red team assessments and AI-augmented red teaming. The CREST accreditation applies to ISECURION's Penetration Testing service.",
  },
  {
    question:
      "What is the difference between penetration testing and red teaming?",
    answer:
      "A penetration test is a scoped exercise that aims to find and exploit as many vulnerabilities as possible in specific systems. A red team assessment is objective-based: testers simulate a real adversary across people, process and technology to test whether your organisation can detect and respond to an attack. ISECURION provides both penetration testing and red team assessments, including AI-augmented red teaming.",
  },
  {
    question: "How long does a typical VAPT engagement take?",
    answer:
      "The duration depends on the scope and complexity of the systems being assessed. A web application assessment typically takes 5-10 business days, a mobile application test takes 5-7 days, a network infrastructure assessment ranges from 7-15 days, and a comprehensive red team exercise can take 3-6 weeks. ISECURION provides a detailed timeline estimate after an initial scoping call.",
  },
  {
    question: "What deliverables will I receive after a VAPT engagement?",
    answer:
      "After every VAPT engagement, ISECURION provides: an executive summary for management, a detailed technical report with all findings classified by severity (Critical, High, Medium, Low, Informational), proof-of-concept screenshots or videos, step-by-step remediation guidance for every vulnerability, and a remediation-verification retest (included) to confirm that fixes have been applied correctly.",
  },
  {
    question: "How much does a VAPT or penetration test cost in India?",
    answer:
      "The cost depends on the scope: the number of applications, APIs, IP addresses or cloud environments, the complexity of the systems, the testing approach (black box, grey box or white box), the depth required and whether a retest is included. ISECURION prepares a fixed-scope quotation after a short scoping call. To request one, email info@isecurion.com or call +91 88612 01570.",
  },
  {
    question: "How often should an organisation conduct penetration testing?",
    answer:
      "Most organisations should run a penetration test at least once a year and after significant changes such as a major release, infrastructure or cloud migration, acquisition or security incident. Frameworks and regulators including SOC 2, ISO 27001, PCI DSS and sector regulators in India expect regular security testing, and high-risk or fast-changing environments often test more frequently.",
  },
  {
    question: "What industries does ISECURION serve?",
    answer:
      "ISECURION serves a broad range of industries including BFSI (Banking, Financial Services and Insurance), fintech, healthcare, e-commerce, government and public sector, IT and SaaS, manufacturing, automotive, crypto and blockchain, and telecommunications. We serve clients across India - Bangalore, Mumbai, Delhi, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Noida - and globally in the USA, UK, UAE, Qatar, Singapore, Australia, and across the GCC region.",
  },
  {
    question: "What compliance frameworks does ISECURION support?",
    answer:
      "ISECURION supports a comprehensive range of compliance frameworks: SOC 2, ISO 27001:2022, GDPR, India's DPDP Act, RBI Information Security Audit, IRDA Audit, SEBI CSCRF and Market SOC (MSOC), AADHAR/UIDAI Audit, DORA Compliance (EU), FIU-IND for Crypto and Virtual Digital Assets, UAE VASP Compliance, ISO 42001 (AI Management Systems), BSE/NSE Audit, ILDC, CICRA, and UPI Compliance Audit.",
  },
  {
    question: "What compliance frameworks does ISECURION support?",
    answer:
      "ISECURION supports a comprehensive range of compliance frameworks: SOC 2, ISO 27001:2022, GDPR, India's DPDP Act, RBI Information Security Audit, IRDA Audit, SEBI CSCRF and Market SOC (MSOC), AADHAR/UIDAI Audit, DORA Compliance (EU), FIU-IND for Crypto and Virtual Digital Assets, UAE VASP Compliance, ISO 42001 (AI Management Systems), BSE/NSE Audit, ILDC, CICRA, and UPI Compliance Audit.",
  },
  {
    question: "Does ISECURION provide 24x7 SOC and managed security services?",
    answer:
      "Yes. ISECURION offers Managed Security Services (MSSP), In-House SOC and Hybrid SOC services, providing round-the-clock monitoring, threat detection and incident response so that attacks can be detected, contained and remediated quickly.",
  },
  {
    question: "Does ISECURION provide 24x7 SOC and managed security services?",
    answer:
      "Yes. ISECURION offers Managed Security Services (MSSP), In-House SOC and Hybrid SOC services, providing round-the-clock monitoring, threat detection and incident response so that attacks can be detected, contained and remediated quickly.",
  },
  {
    question: "Does ISECURION offer cybersecurity services outside India?",
    answer:
      "Yes. ISECURION delivers cybersecurity services globally. We have an office in Schaumburg, Illinois, USA, and regularly serve clients in the United Kingdom, the European Union, the UAE, Qatar, Singapore, Australia, Saudi Arabia, Kuwait, Bahrain, and Oman. Remote assessments and on-site engagements are both available for international clients.",
  },
  {
    question: "Does ISECURION offer cybersecurity services outside India?",
    answer:
      "Yes. ISECURION delivers cybersecurity services globally. We have an office in Schaumburg, Illinois, USA, and regularly serve clients in the United Kingdom, the European Union, the UAE, Qatar, Singapore, Australia, Saudi Arabia, Kuwait, Bahrain, and Oman. Remote assessments and on-site engagements are both available for international clients.",
  },
  {
    question: "Where are ISECURION's offices and how can I contact the team?",
    answer:
      "ISECURION's corporate office is in Bengaluru, with offices in Kolkata, Mumbai, Ahmedabad and Noida in India, and in Schaumburg, Illinois in the United States. To contact the team, email info@isecurion.com or call +91 88612 01570.",
  },
  {
    question: "Where are ISECURION's offices and how can I contact the team?",
    answer:
      "ISECURION's corporate office is in Bengaluru, with offices in Kolkata, Mumbai, Ahmedabad and Noida in India, and in Schaumburg, Illinois in the United States. To contact the team, email info@isecurion.com or call +91 88612 01570.",
  },
  {
    question: "What is Vulnytics and how does it help my security team?",
    answer:
      "Vulnytics is ISECURION's proprietary vulnerability management platform. It aggregates findings from penetration tests, automated scanners, and bug bounty programs into a single workspace, enabling security and development teams to assign tasks, track remediation progress, and generate executive and technical reports. It is purpose-built for enterprises, startups, and MSSPs that want to streamline their entire vulnerability lifecycle. ",
  },
  {
    question: "What is Vulnytics and how does it help my security team?",
    answer:
      "Vulnytics is ISECURION's proprietary vulnerability management platform. It aggregates findings from penetration tests, automated scanners, and bug bounty programs into a single workspace, enabling security and development teams to assign tasks, track remediation progress, and generate executive and technical reports. It is purpose-built for enterprises, startups, and MSSPs that want to streamline their entire vulnerability lifecycle. ",
  },
  {
    question: "What is Drosera, ISECURION's phishing simulation platform?",
    answer: (
      <>
        Drosera is ISECURION's <strong>phishing simulation platform</strong>. It
        helps organisations run realistic phishing campaigns, measure how
        employees respond and strengthen security awareness over time. Drosera
        complements ISECURION's Phishing Simulation service.{" "}
        <a
          href="https://drosera.ai/"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Drosera →
        </a>
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="w-full bg-[#060D1B]">
      {/* this is the hero section  */}
      <section
        className="w-full  flex items-center py-14 bg-cover bg-center"
        style={{ backgroundImage: `url(${herobackground.src})` }}
      >
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10">
          <div className="space-y-4 text-center lg:text-left">
            <p
              className="text-sm sm:text-base font-semibold text-[#0F66EA] sectionheading animate-hero-reveal uppercase"
              style={{ animationDelay: "150ms" }}
            >
              Build for Trust. Designed for Cyber Resilience.
            </p>

            <WordReveal
              text="CREST MEMBER & CERT-IN EMPANELLED VAPT COMPANY IN INDIA"
              className="text-transparent font-bold bg-clip-text bg-linear-to-r from-[#E5ECF7] via-[#8FB1F4] to-[#86D7E2] max-w-[840px]"
            ></WordReveal>

            <p
              className="text-sm sm:text-base lg:text-[17px] font-medium  lg:max-w-xl leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#ACAFEE] animate-hero-reveal"
              style={{ animationDelay: "650ms" }}
            >
              ISECURION is a CERT-In empanelled, ISO 27001:2022 certified
              cybersecurity company and a CREST Member, accredited for
              Penetration Testing. We help organizations anticipate threats,
              reduce cyber risk, and build lasting resilience through VAPT,
              cloud security, SOC 2 compliance, phishing simulation and
              intelligent security platforms.
            </p>
          </div>
          <div
            className="flex flex-col justify-center lg:justify-start sm:flex-row gap-3 py-4 opacity-0 animate-hero-reveal mt-4"
            style={{ animationDelay: "600ms" }}
          >
            <Animation>
              <button
                className="flex items-center justify-center gap-3 py-3 px-5 text-base font-medium cursor-pointer rounded-[10px] text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] border-2 border-[#3263B1] animate-hero-reveal"
                style={{ animationDelay: "1200ms" }}
              >
                <Link href="/company/contact">Schedule a Consultation </Link>
                <span>
                  <Icon icon="mdi:arrow-right" width={20} />
                </span>
              </button>
            </Animation>
            <Animation>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="flex items-center justify-center gap-3 py-3 px-5 text-base font-medium cursor-pointer text-white rounded-lg border border-[#FFFFFF29] animate-hero-reveal"
                style={{ animationDelay: "1800ms" }}
              >
                <span></span>
                Explore services ›
              </button>
            </Animation>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="w-full bg-[#01060E] shadow-[0_0_45px_rgba(15,102,234,0.20)]">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-10 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Stat 1 */}
              <AnimatedCard>
                <div className="relative px-0 py-6 sm:px-6 xl:px-8 xl:py-0">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F66EA]">
                      50+
                    </p>

                    <p className="mt-1 lg:min-h-[56px] text-base sm:text-lg font-medium leading-7 text-[#8E8E8E]">
                      Enterprise Customers
                    </p>

                    <p className="lg:min-h-[54px] text-sm sm:text-base font-medium leading-7 text-white">
                      Trusted by organizations across sectors
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Stat 2 */}
              <AnimatedCard delay={0.5}>
                <div className="relative border-t border-[#505050] px-0 py-6 lg:border-t-0 sm:px-6 xl:px-8 xl:py-0">
                  {/* Desktop Divider */}
                  <div className="absolute left-0 top-1/2 hidden h-[106px] w-px -translate-y-1/2 bg-[#505050] lg:block" />

                  <div className="flex flex-col gap-1">
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F66EA]">
                      1K+
                    </p>

                    <p className="mt-1 lg:min-h-[56px] text-base sm:text-lg font-medium leading-7 text-[#999999]">
                      Projects Completed
                    </p>

                    <p className="lg:min-h-[54px] text-sm sm:text-base font-medium leading-7 text-white">
                      Across VAPT, cloud and compliance
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Stat 3 */}
              <AnimatedCard delay={0.8}>
                <div className="relative border-t border-[#505050] px-0 py-6 sm:px-6 lg:border-t-0 xl:px-8 xl:py-0">
                  {/* Desktop Divider */}
                  <div className="absolute left-0 top-1/2 hidden h-[106px] w-px -translate-y-1/2 bg-[#505050] lg:block" />

                  <div className="flex flex-col gap-1">
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F66EA]">
                      15+
                    </p>

                    <p className="mt-1 lg:min-h-[56px] text-base sm:text-lg font-medium leading-7 text-[#999999]">
                      Years of Cybersecurity Excellence
                    </p>

                    <p className="lg:min-h-[54px] text-sm sm:text-base font-medium leading-7 text-white">
                      Proven track record
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Stat 4 */}
              <AnimatedCard delay={1.2}>
                <div className="relative border-t border-[#505050] px-0 py-6 sm:px-6 lg:border-t-0 xl:px-8 xl:py-0">
                  {/* Desktop Divider */}
                  <div className="absolute left-0 top-1/2 hidden h-[106px] w-px -translate-y-1/2 bg-[#505050] lg:block" />

                  <div className="flex flex-col gap-1">
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F66EA]">
                      500+
                    </p>

                    <p className="mt-1 lg:min-h-[56px] text-base sm:text-lg font-medium leading-7 text-[#999999]">
                      Start-up Companies
                    </p>

                    <p className="lg:min-h-[54px] text-sm sm:text-base font-medium leading-7 text-white">
                      Long-term partnerships built on trust
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY LEADING ORGANIZATIONS */}
      <div className="bg-[#060D1B]">
        <div className="mx-auto max-w-7xl  py-14">
          {/* Heading */}
          <Animation>
            <div className="px-6 sm:px-10 ">
              <WordReveal
                text="TRUSTED BY LEADING ORGANIZATIONS"
                className="text-center text-[20px] font-medium leading-[27px] tracking-[1.3px] text-[#7E93B4] animate-hero-reveal"
              ></WordReveal>
            </div>
          </Animation>
        </div>
        {/*logos */}
        <div className="pb-10 overflow-hidden">
          <div className="flex  animate-tcar03-scroll">
            {/* First set */}
            <div className="flex shrink-0 items-center gap-16 pr-16">
              {trustedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex h-12 w-35 shrink-0 items-center justify-center"
                >
                  <img
                    src={company.src}
                    alt={company.alt}
                    className={`${company.className} object-contain brightness-0 invert opacity-80 transition-all duration-500 hover:brightness-100 hover:invert-0 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set */}
            <div
              className="flex shrink-0 items-center gap-16 pr-16"
              aria-hidden="true"
            >
              {trustedCompanies.map((company, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex h-12 w-35 shrink-0 items-center justify-center"
                >
                  <img
                    src={company.src}
                    alt=""
                    className={`${company.className} object-contain brightness-0 invert opacity-80 transition-all duration-500 hover:brightness-100 hover:invert-0 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHY ORGANIZATIONS CHOOSE ISECURION */}
      <div className="bg-[#070D1A]  overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 bg-[#070D1A]  py-10">
          <LeftAnimation>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span className="block h-6 w-[2px] bg-[#0F66EA]"></span>

              <span className="text-sm sm:text-base font-semibold text-center uppercase sectionheading text-[#0F66EA]  tracking-[2px] lg:text-left">
                WHY ORGANIZATIONS CHOOSE ISECURION
              </span>
            </p>
          </LeftAnimation>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-5">
            <LeftAnimation>
              <h2 className="text-center lg:text-left text-white">
                Security is more than <br />
                protection. <br /> It's the foundation of <br />
                <span className="text-[#0F66EA]">confident business.</span>
              </h2>
            </LeftAnimation>
            <RightAnimation>
              <p className="sectionDescription  lg:max-w-[575px] text-center lg:text-left  text-[#D1D1D1]">
                Organizations rely on applications, cloud infrastructure,
                digital identities and connected systems to operate. ISECURION,
                a CERT-In empanelled VAPT company, helps validate security
                continuously, reduce risk proactively and build long-term cyber
                resilience.
              </p>
            </RightAnimation>
          </div>

          <div>
            <Animation>
              <div className="flex flex-col lg:flex-row gap-5 mt-10">
                <div className="relative group bg-cover w-full lg:flex-2 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer overflow-hidden transition-all duration-500">
                  <div className="absolute inset-0  w-full rounded-2xl ">
                    <Image
                      src={indentifyrisk}
                      alt="indentifyrisk"
                      className="h-full w-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-115 "
                    />
                  </div>
                  <div className="relative z-10 flex max-w-[360px] rounded-[5px] bg-linear-to-r from-[#002A69] to-[#000000] px-4 py-8">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-white">
                        Identify Risk
                      </h3>

                      <div className="flex items-center gap-3 h-[70px] ">
                        <p className="mt-3 transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm font-medium text-[#ACACAC] max-w-[252px] ">
                          Uncover exploitable vulnerabilities through
                          vulnerability assessment and penetration testing
                          (VAPT) before they become business disruptions.
                        </p>

                        <Link
                          href="services/vulnerability-assessment-penetration-testing"
                          className="ml-auto flex w-[40px] shrink-0 lg:shrink items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between"
                        >
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore VAPT & Penetration Testing
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-cover w-full lg:flex-1   min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl w-full">
                    <Image
                      src={continuousvalidation}
                      alt="continuousvalidation"
                      className="h-full w-full object-cover group-hover:scale-115 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-[5px] bg-linear-to-r from-[#002A69] to-[#000000] px-4 py-8">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-white">
                        Validate Continuously
                      </h3>

                      <div className="flex items-center gap-3 h-[70px]">
                        <p className="mt-3 transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm font-medium max-w-[282px] text-[#ACACAC] lg:leading-[21px]">
                          Continuously test security across web applications,
                          mobile apps, APIs, cloud (AWS, Azure and GCP),
                          identities and infrastructure.
                        </p>

                        <Link
                          href="services/web-application-security-assessment"
                          className="ml-auto flex w-[40px] shrink-0 lg:shrink  items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between"
                        >
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore Continuous Validation
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
            <Animation>
              <div className="flex flex-col lg:flex-row gap-5 mt-10">
                <div className="relative flex-1 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={defence}
                      alt="defence"
                      className="h-full w-full w-full object-cover group-hover:scale-115 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-md bg-linear-to-r from-[#002A69] to-[#000000] px-4 py-8">
                    <div className="w-full">
                      <h3 className="mb-4 text-base font-medium h-[20px] text-white">
                        Strengthen Defenses
                      </h3>

                      <div className="flex items-center gap-3 h-[60px]">
                        <p className="mt-3 transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm max-w-[235px] font-medium text-[#ACACAC] lg:leading-[21px]">
                          Red team assessment and AI-augmented red teaming that
                          transform findings into measurable resilience.
                        </p>

                        <Link
                          href="services/red-team-assessment"
                          className="ml-auto flex w-[40px] items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between"
                        >
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore Offensive Security
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group bg-cover bg-center flex-2 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={buildtrust}
                      alt="buildtrust"
                      className="h-full w-full object-cover group-hover:scale-115 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-[370px] rounded-md bg-linear-to-l to-[#002A69] from-[#000000] px-4 py-8">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-white">
                        Build Trust
                      </h3>

                      <div className="flex items-center gap-3 h-[60px]">
                        <p className="mt-4 transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm  font-medium text-[#ACACAC] lg:leading-[21px] max-w-[282px]">
                          SOC 2, ISO 27001 and DPDP Act compliance that protects
                          business continuity and strengthens customer trust.
                        </p>

                        <Link
                          href="services/soc-2-compliance"
                          className="ml-auto flex w-[40px] shrink-0 lg:shrink items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between"
                        >
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore Compliance & Trust
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>

      {/* Capabilities  */}
      <div className="bg-[#070D1A] overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 bg-[#070D1A] py-10">
          <Animation>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
              <div>
                <LeftAnimation>
                  <h2 className="lg:max-w-md text-center lg:text-left text-white">
                    Capabilities that strengthen{" "}
                    <span className="text-[#0F66EA]">every layer</span> of your
                    organization.
                  </h2>
                </LeftAnimation>
              </div>
              <div className="lg:max-w-[550px]">
                <RightAnimation>
                  <div className="space-y-4">
                    <p className="hidden lg:block  text-base font-semibold text-[#0F66EA] sectionheading tracking-[0.5px]">
                      OUR EXPERTISE
                    </p>
                    <p className="sectionDescription text-center lg:text-left  text-white">
                      A comprehensive portfolio of VAPT, compliance, SOC &
                      advisory services, plus platforms built to reduce risk,
                      improve resilience & enable secure growth.
                    </p>
                  </div>
                </RightAnimation>
              </div>
            </div>
          </Animation>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
            {ourExpertise.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div
                  key={index}
                  className="relative z-10 overflow-hidden flex flex-col justify-between rounded-[14px] p-5 cursor-pointer group transition-all duration-500 h-[485px]"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom, ${item.hoverFrom}, ${item.hoverTo})`,
                    }}
                  />
                  <Icon
                    icon={item.Icon}
                    className="absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 text-[#62748E1C] group-hover:top-1/3 group-hover:right-[20%] group-hover:text-[#FFFFFF2B] transition-all duration-500"
                  />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon
                        icon={item.Icon}
                        className={`h-8 w-8 ${item.iconColor} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>

                    <h3
                      className={`mb-3 ${item.headingColor} text-xl font-semibold group-hover:text-white transition-colors duration-300`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm font-medium leading-6 ${item.descriptionColor} group-hover:text-white transition-colors duration-300 max-w-[277px]`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-4">
                    <ul className="space-y-2">
                      {item.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.link}
                            className={`inline-flex items-center gap-1 text-sm font-medium ${item.listColor} transition-all duration-300 group-hover:text-white hover:text-[#0F66EA] hover:underline hover:underline-offset-4`}
                          >
                            <span className="shrink-0">
                              <Icon icon="mingcute:right-fill" />
                            </span>

                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={item.link}
                    className="relative z-10 mt-5 flex cursor-pointer items-center text-[15px] font-medium text-[#0F66EA] transition-colors duration-300 group-hover:text-white"
                  >
                    View Services{""}
                    <span className="ml-1">
                      <Icon icon="solar:arrow-right-bold" />
                    </span>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our platform  */}
      <div className="bg-[#070D1A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 bg-[#070D1A] py-14">
          <div className="space-y-3 lg:max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <Animation>
              <p className="flex items-center gap-2 ">
                <span className="block h-6 w-[2px] bg-[#0F66EA]"></span>

                <span className="text-sm sm:text-base font-semibold uppercase text-[#0F66EA] sectionheading tracking-[1px]">
                  OUR PLATFORMS
                </span>
              </p>
            </Animation>
            <Animation>
              <h2 className=" text-white ">
                Intelligent platforms for{" "}
                <span className="text-[#0F66EA]">continuous</span> security.
              </h2>
            </Animation>
            <Animation>
              <p className="sectionDescription text-[#D1D1D1] ">
                Purpose-built platforms that help organizations manage
                vulnerabilities, run phishing simulations and train employees,
                so security keeps improving after every assessment.
              </p>
            </Animation>
          </div>

          <div className="relative mt-10">
            <div className="sticky top-20 z-10 py-8 bg-[#060D1B]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#4ADE80]">
                      Vulnytics: Vulnerability Management Platform
                    </h3>
                    <span className="mt-2 bg-[#818181] w-15 h-0.5"></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold lg:max-w-md  text-white py-2">
                    Continuous Vulnerability{" "}
                    <span className="text-[#4ADE80]">Intelligence.</span>
                  </h3>
                  <p className="font-medium max-w-[408px]  leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Vulnytics brings findings from penetration tests, scanners
                    and bug bounty programs into one workspace, so security and
                    development teams can assign tasks, track remediation and
                    generate executive and technical reports. Built for
                    enterprises, startups and MSSPs.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Unified Vulnerability Tracking</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Risk Prioritization</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Executive & Technical Reporting</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Seamless Integrations</span>
                    </li>
                  </ul>
                  <Link href="https://vulnytics.isecurion.com/" target="_blank">
                    <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#3B9E6A]">
                      Learn More{" "}
                      <span>
                        <Icon icon="ep:right" />
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="flex-1 group">
                  <div className="bg-linear-to-b from-[#0B241B] to-[#2A8A67] max-h-[500px] rounded-4xl overflow-hidden">
                    <img
                      src={vulnytics.src}
                      alt="vulnytics"
                      className="w-full translate-x-[8%] translate-y-[8%] rounded-none transition-all duration-700 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[2%] group-hover:rounded-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-24 z-20 py-8 bg-[#060D1B]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#7D70F0]">
                      Drosera: Phishing Simulation Platform
                    </h3>
                    <span className="bg-[#818181] w-15 h-0.5 mt-2"></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold max-w-md text-white lg:leading-[40px] py-2">
                    Security Awareness that actually{" "}
                    <span className="text-[#7D70F0]">
                      changes behavior.
                    </span>{" "}
                  </h3>
                  <p className="text-base font-medium max-w-[400px] leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Run realistic phishing campaigns, measure how your employees
                    respond and strengthen security awareness across your
                    organization.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Phishing Simulations</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Campaign Management</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Awareness Training</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Advanced Reporting</span>
                    </li>
                  </ul>
                  <Link href="https://drosera.ai/" target="_blank">
                    <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#7D70F0]">
                      Learn More{" "}
                      <span>
                        <Icon icon="ep:right" />
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="flex-1 group">
                  <div className="bg-linear-to-b from-[#6F6C9066] to-[#8B5CF680] max-h-[500px] rounded-4xl overflow-hidden">
                    <img
                      src={drosera.src}
                      alt="Drosera"
                      className="w-full translate-x-[8%] translate-y-[8%] rounded-none transition-all duration-700 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[2%] group-hover:rounded-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-28 z-30 py-8 bg-[#060D1B]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-5">
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#38BDF8]">
                      Learning Management System (LMS): Security Learning &
                      Awareness
                    </h3>
                    <span className="bg-[#818181] w-15 h-0.5 mt-2"></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold max-w-md  lg:leading-[40px] text-white">
                    Security{" "}
                    <span className="text-[#38BDF8]">Learning & Awareness</span>
                  </h3>
                  <p className="text-base font-medium max-w-[400px] leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Deliver engaging training, validate knowledge, and empower
                    your teams with role-based learning journeys.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Role-based Learning</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Assessments & Quizzes</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Learning Analytics</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Mobile Learning</span>
                    </li>
                  </ul>
                  <Link href="https://lms.drosera.ai/" target="_blank">
                    <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#38BDF8]">
                      Learn More{" "}
                      <span>
                        <Icon icon="ep:right" />
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="flex-1 group">
                  <div className="bg-linear-to-b from-[#38BDF866] to-[#38BDF833] max-h-[500px] rounded-4xl overflow-hidden">
                    <img
                      src={lms.src}
                      alt="LMS (Learning Management Sysytem)"
                      className="w-full translate-x-[8%] translate-y-[8%] rounded-none transition-all duration-700 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[2%] group-hover:rounded-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative overflow-hidden bg-linear-to-l from-[#092E70] to-[#071C41]">
        {/* Right background circle */}
        <div className="pointer-events-none absolute right-0 top-[-80px] z-0 hidden w-[500px] lg:block">
          <Image src={rightCircle} alt="" className="h-auto w-full" />
        </div>

        {/* 7xl content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-10">
          {/* Quote */}
          <Animation>
            <div className="mx-auto flex max-w-5xl items-center gap-5">
              <div className="shrink-0">
                <img
                  src={right.src}
                  alt="right"
                  className="h-[70px] w-[30px] sm:h-[76px] sm:w-[45px]"
                />
              </div>

              <div>
                <p className="text-center text-base font-normal text-[#EBEBEB] sm:text-[22px]">
                  ISECURION helps organizations strengthen their security
                  posture with expert-led services, advanced technology, and a
                  relentless focus on results.
                </p>
              </div>

              <div className="shrink-0">
                <img
                  src={left.src}
                  alt="left"
                  className="h-[70px] w-[30px] sm:h-[76px] sm:w-[45px]"
                />
              </div>
            </div>
          </Animation>

          {/* Stats */}
          <Animation>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { value: "50+", label: "Enterprise Customers" },
                { value: "1K+", label: "Projects Completed" },
                { value: "500+", label: "Start Up Companies" },
                { value: "5", label: "of the Top 10 Global Tech Companies" },
                { value: "40+", label: "Fintech & Healthcare Companies" },
              ].map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className={`mx-auto px-14 text-center ${
                    index !== 4 ? "lg:border-r lg:border-[#888888]" : ""
                  }`}
                >
                  <h3 className="text-[16px] font-normal text-white sm:text-3xl">
                    {item.value}
                  </h3>

                  <p className="mt-3 max-w-[130px] text-[14px] font-medium leading-6 text-[#C5C5C5]">
                    {item.label}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </Animation>
        </div>
      </div>

      {/* INDUSTRIES WE SECURE  */}
      <IndustriesWeSecure />

      <section className="relative w-full overflow-hidden bg-[#060D1B]">
        <div className="relative mx-auto flex min-h-[550px] max-w-7xl flex-col justify-center px-6 py-10 sm:px-10 lg:min-h-[600px] lg:py-20 overflow-hidden">
          {/* Left Content */}
          <div className="relative z-20 w-full lg:w-[45%] xl:w-[43%]">
            <p className="text-sm font-semibold text-[#0F66EA] sm:text-base">
              GLOBAL PRESENCE
            </p>

            <h2 className="mt-5 text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-3xl xl:text-[40px] xl:leading-[1.2]">
              Cybersecurity expertise
              <br />
              across the industries that matter.
            </h2>

            <p className="mt-7 text-base leading-7 text-[#D1D1D1] sm:text-lg lg:max-w-[450px]">
              We serve BFSI, fintech, healthcare, e-commerce, government, IT and
              SaaS, manufacturing, automotive, crypto and blockchain, and
              telecommunications, with solutions built for each industry's risks
              and regulations.
            </p>

            {/* Country Tabs */}
            <div className="mt-6 flex w-full min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide sm:gap-3 lg:max-w-full lg:gap-2">
              {/* India - Active Country */}
              <div className="flex shrink-0 items-center gap-2 rounded-full bg-[#F1F5FF] px-3 py-2 text-sm font-medium text-[#111827]">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 rounded-full bg-[#2563EB] opacity-30 blur-[3px]" />
                  <span className="relative h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_6px_2px_#2563EB80]" />
                </span>
                India
              </div>

              <span className="h-6 w-px shrink-0 bg-[#88888880]" />

              {/* Other Countries */}
              {[
                "USA",
                "UK",
                "UAE",
                "Qatar",
                "Singapore",
                "Australia",
                "GCC",
              ].map((country, index) => (
                <React.Fragment key={country}>
                  <span className="shrink-0 text-sm font-medium text-[#D1D1D1] sm:text-base">
                    {country}
                  </span>

                  {index !== 6 && (
                    <span className="h-6 w-px shrink-0 bg-[#787891]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Map + Markers */}
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-full lg:w-[62%] lg:aspect-auto xl:w-[68%]">
            <Image
              src={mapBackground}
              alt="Global presence map"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 62vw, 68vw"
              className="object-contain object-center"
            />

            {mapMarkers.map((marker) => (
              <div
                key={marker.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: marker.x, top: marker.y }}
              >
                <span
                  className={`block rounded-full ${
                    marker.type === "blue"
                      ? "h-3.5 w-3.5 bg-[#2563EB] shadow-[0_0_12px_5px_#2563EB80]"
                      : "h-2.5 w-2.5 bg-[#EF5350] shadow-[0_0_8px_3px_#EF535080]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full mt-20 mb-3">
        <Image
          alt="crestbackground"
          className="absolute w-full h-full"
          src={crestbackground}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-10">
          <Animation>
            <div className="text-center space-y-4">
              <div className="mx-auto flex w-full max-w-[550px] items-center gap-4 px-3 py-1">
                <span className="h-px flex-1 bg-linear-to-r to-[#FFFFFFE3] from-[#DADADA0A]" />

                <p className=" text-base sm:text-lg font-medium text-[#D9D9D9] uppercase">
                  Recognition and Certifications
                </p>

                <span className="h-px flex-1 bg-linear-to-r from-[#FFFFFFE3] to-[#DADADA0A]" />
              </div>
              <h2 className="text-[#FEFEFE]">
                Proven impact. Trusted by enterprises{" "}
                <span className="text-[#0F66EA]">worldwide.</span>
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                Our commitment to excellence is reflected in industry
                recognitions and globally recognised certifications.
              </p>
            </div>
          </Animation>
          <Animation>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-10 mt-10">
              <div className="pr-10 md:border-r border-[#88888861]">
                <Image
                  alt="crest certificate"
                  src={crestcertificate}
                  className="w-[180px] h-[200px]"
                />
              </div>
              <div className="pr-10 md:border-r border-[#88888861]">
                <Image
                  alt="crest certificate"
                  src={crest}
                  className="w-[180px] h-[200px]"
                />
              </div>
              <div className="w-[350px] ">
                <p className="text-base sm:text-lg font-medium text-center md:text-left text-[#D1D1D1]">
                  ISECURION is a{" "}
                  <span className="font-semibold text-[#FFFFFF]">
                    CREST Member
                  </span>
                  , accredited for
                  <span className="font-semibold text-[#FFFFFF]">
                    {" "}
                    Penetration Testing.
                  </span>
                </p>
                <p className="mt-2 text-base sm:text-lg font-medium text-center md:text-left text-[#D1D1D1]">
                  We are also{" "}
                  <span className="font-semibold text-[#FFFFFF]">
                    CERT-In empanelled{" "}
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#FFFFFF]">
                    ISO 27001:2022 certified.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="relative flex w-full items-center justify-center mt-10">
                <img
                  src={iso27001.src}
                  alt="ISO 27001"
                  className="relative z-10 w-[120px] sm:w-[150px]"
                />

                <Icon
                  icon="line-md:star-twotone"
                  className="absolute left-1/2 top-1/2 z-20 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 text-[#0F66EA33] sm:h-[150px] sm:w-[150px]"
                />

                <img
                  src={iso90001.src}
                  alt="ISO 9001"
                  className="relative z-10 ml-10 w-[120px] sm:ml-16 sm:w-[150px]"
                />
              </div>
            </div>
          </Animation>
        </div>
      </section>

      <div className="relative  -mt-7 mx-auto max-w-7xl p-5 rounded-lg  border border-gray-700 bg-linear-to-r from-[#060D1B] to-[#091c3b] opacity-90">
        <h3 className="text-center text-[20px] font-semibold uppercase text-white sm:text-[22px]">
          Auditors Certifications
        </h3>
        <div className=" mt-8 grid grid-cols-2 items-center justify-items-center gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {auditorCertificates.map((item, index) => (
            <AnimatedCard key={index} delay={index * 0.15}>
              <img
                src={item.img.src}
                alt=""
                className="h-[100px] w-[90px] object-contain"
              />
            </AnimatedCard>
          ))}
        </div>
      </div>

      <FAQSection
        title={<>Frequently Asked Questions</>}
        description="Everything you need to know about ISECURION's cybersecurity, CREST-accredited penetration testing and VAPT services."
        faqs={homeFAQs}
      />
      <HomeCTA />
    </div>
  );
}
