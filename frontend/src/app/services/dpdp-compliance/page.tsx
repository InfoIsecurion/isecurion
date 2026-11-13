"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  AnimatedCard,
  Animation,
  WordReveal,
} from "../../../components/ui/Animation";
import ecommerce from "../../../assets/services/dpdp/e-commerce.png";
import edtech from "../../../assets/services/dpdp/edtech.png";
import fintechBfsi from "../../../assets/services/dpdp/fintechBfsi.png";
import healthtech from "../../../assets/services/dpdp/healthtech.png";
import manufacturing from "../../../assets/services/dpdp/manufacturing.png";
import sass from "../../../assets/services/dpdp/sass.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FAQSection from "../../../components/sections/FAQSection";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { dpdp } from "../../../services/api/contact";
import Link from "next/link";

interface ContactFormData {
  email: string;
  companyname: string;
  industry: string;
}

const whoNeedsDpdp = [
  {
    Icon: "akar-icons:data",
    heading: "Process Personal Data",
    description:
      "Collect, store, or process personal data of individuals in India.",
  },
  {
    Icon: "fa7-regular:handshake-simple",
    heading: "Offering Goods or Services",
    description: "Provide goods or services to individuals located in India.",
  },
  {
    Icon: "fa7-regular:handshake-simple",
    heading: "Digitise Personal Data",
    description:
      "Convert offline personal data into digital form for processing.",
  },
  {
    Icon: "tabler:automation",
    heading: "Process Data for Others",
    description:
      "Process personal data on behalf of another organisation as a Data Processor.",
  },
  {
    Icon: "ic:round-business",
    heading: "Industries covered:",
    description:
      "Fintech & BFSI, Healthcare, SaaS & IT, E-commerce, EdTech, Telecom, Manufacturing, Hospitality, and Government , Essentially every organization that handles customer, employee, or user data, anywhere in India.",
  },
];

// DPDP Security & Breach Response Requirements
const securitySafeguards = [
  "Encryption of personal data at rest and in transit",
  "Access control and identity management (IAM)",
  "Security monitoring, logging, and alerting",
  "Secure SDLC and secure code review practices",
  "Vendor and third-party security assessments",
  "VAPT of applications and infrastructure handling personal data",
];

const breachNotification = [
  "Notify affected Data Principals without undue delay",
  "Maintain incident response logs and documentation",
  "Implement breach containment and remediation procedures",
  "Penalty for non-notification: up to ₹200 crore",
  "Notify the Data Protection Board of any personal data breach",
];

// SECURITY CONTROLS
const securityControls = [
  {
    Icon: "line-md:security",
    heading: "Reasonable Security Safeguards",
    description: "Protect personal data through appropriate security measures.",
    technicalControl: "Encryption, IAM, network segmentation, logging",
    isecurionService: "Security Controls + VAPT",
  },
  {
    Icon: "akar-icons:data",
    heading: "Prevent Personal Data Breach",
    description:
      "Reduce the risk of unauthorised access, leakage, or data loss.",
    technicalControl: "VAPT of web apps, APIs, databases holding personal data",
    isecurionService: (
      <>
        {" "}
        <Link href="/services/vapt">
          <span className="underline text-[#0F66EA]">VAPT Services</span>{" "}
        </Link>
      </>
    ),
  },
  {
    Icon: "akar-icons:bell",
    heading: "Breach Detection & Notification",
    description: "Detect, respond and notify in case of a security incident.",
    technicalControl: "SIEM, security monitoring, incident response playbooks",
    isecurionService: (
      <>
        {" "}
        <span className="underline text-[#0F66EA]">
          Incident Response & DFIR
        </span>{" "}
      </>
    ),
  },
  {
    Icon: "ci:file-document",
    heading: "Data Accuracy & Integrity",
    description: "Ensure data remains accurate, complete and unaltered.",
    technicalControl:
      "Data integrity controls, audit trails, change management",
    isecurionService: "Security Architecture Review",
  },
  {
    Icon: "akar-icons:people-group",
    heading: "Vendor/Processor Security",
    description: "Manage risks from third-party vendors and processors.",
    technicalControl:
      "Third-party security assessments, DPA review, vendor VAPT",
    isecurionService: "Vendor Risk Assessment",
  },
  {
    Icon: "boxicons:scan-detail",
    heading: "SDF: DPIA for High-Risk Processing",
    description:
      "Assess and mitigate risks for high-risk processing activities.",
    technicalControl:
      "Privacy impact assessment + supporting technical controls",
    isecurionService: "DPIA & SDF Readiness",
  },
  {
    Icon: "akar-icons:calendar",
    heading: "SDF: Periodic Security Audit",
    description:
      "Conduct regular audits to verify compliance & security posture.",
    technicalControl: "Annual/bi-annual third-party security audit",
    isecurionService: (
      <>
        {" "}
        {""}
        <span className="underline text-[#0F66EA]">
          CERT-In Empanelled Audit
        </span>
      </>
    ),
  },
  {
    Icon: "boxicons:code-alt",
    heading: "Secure SDLC (data-handling applications)",
    description: "Build security into the development lifecycle.",
    technicalControl: "Secure code review, SAST/DAST, security in CI/CD",
    isecurionService: (
      <>
        {" "}
        {""}
        <Link href="/services/secure-code-review">
          <span className="underline text-[#0F66EA]">Secure Code Review</span>
        </Link>
      </>
    ),
  },
];

// Framework Comparison
const frameworkComparasion = [
  {
    aspect: "Type",
    dpdp: "Indian Law (mandatory)",
    iso: "International Standard (voluntary)",
    certIn: "Indian Govt Directions (mandatory)",
  },
  {
    aspect: "Focus",
    dpdp: "Personal data privacy + security",
    iso: "	Information security management",
    certIn: "Cybersecurity incident reporting",
  },
  {
    aspect: "Security Controls",
    dpdp: "✔ Required (broad)",
    iso: "✔ Required (detailed Annex A)",
    certIn: "✔ Required (specific directives)",
  },
  {
    aspect: "VAPT Requirement",
    dpdp: "✔ Implied (reasonable safeguards)",
    iso: "✔ Explicit (A.12.6, A.18.2)",
    certIn: "✔ Explicit directive",
  },
  {
    aspect: "Breach Notification",
    dpdp: "✔ Mandatory to DPB + individuals",
    iso: "- Internal process only",
    certIn: "✔ 6-hour reporting to CERT-In",
  },
  {
    aspect: "Data Principal Rights",
    dpdp: "✔ Access, correction, erasure",
    iso: "- Not covered",
    certIn: "- Not covered",
  },
  {
    aspect: "Consent Management",
    dpdp: "✔ Mandatory",
    iso: "- Not covered",
    certIn: "- Not covered",
  },
  {
    aspect: "Penalty",
    dpdp: "Up to ₹250 crore",
    iso: "Loss of certification",
    certIn: "Criminal liability + fines",
  },
  {
    aspect: "Regulator",
    dpdp: "Data Protection Board (DPB)",
    iso: "Certification body",
    certIn: "CERT-In / MeitY",
  },
];

const ourProjects = [
  {
    heading: "Manufacturing & Enterprise",
    description:
      "Employee and supplier data obligations under DPDP. OT/IT convergence creates additional personal data exposure.",
    list: [
      "VAPT of HR systems, ERP platforms, supplier portals",
      "Employee data protection audit and policy review",
      "OT/IT boundary security assessment",
      "Third-party supplier security assessment",
    ],
    button: "Manufacturing VAPT and Compliance ",
    img: manufacturing,
  },
  {
    heading: "EdTech & Academic",
    description:
      "Processes student data including minors - children's data protection provisions under DPDP are stricter and carry higher penalties.",
    list: [
      "VAPT of LMS platforms, student portals, mobile apps",
      "Children's data protection compliance review",
      "Parental consent mechanism design and audit",
      "Data minimization audit for student data collection",
    ],
    button: "EdTech VAPT and Compliance",
    img: edtech,
  },
  {
    heading: "E-commerce & Retail",
    description:
      "Large-scale consumer data collection. High breach exposure. Third-party logistics and payment partners add vendor risk.",
    list: [
      "VAPT of e-commerce platform, recommendation engines",
      "Consent management for marketing and personalization",
      "Vendor security assessment for payment processors",
      "Breach response playbook for customer data incidents",
    ],
    button: "Get DPDP Assessment",
    img: ecommerce,
  },
  {
    heading: "SaaS & IT Companies",
    description:
      "Processes customer data on behalf of clients (Data Processor role). Contractual and regulatory obligations under DPDP.",
    list: [
      "VAPT of SaaS applications and APIs handling customer PII",
      "SOC 2 + DPDP alignment audit",
      "Secure SDLC and code review for data-handling modules",
      "Data processing agreement (DPA) review",
    ],
    button: "SOC 2 + DPDP Compliance",
    img: sass,
  },
  {
    heading: "Healthcare & HealthTech",
    description:
      "Processes sensitive health data. High breach impact. SDF candidate for large hospital networks and health platforms.",
    list: [
      "VAPT of EHR systems, patient portals, health apps",
      "Encryption of health records and biometric data",
      "Access control audit for clinical staff systems",
      "Vendor security assessment for third-party health platforms",
    ],
    button: "Healthcare VAPT & Compliance",
    img: healthtech,
  },
  {
    heading: "Fintech & BFSI",
    description:
      "Highest DPDP risk profile. Processes financial + personal data at scale. Likely SDF designation.",
    list: [
      "VAPT of payment systems, APIs, mobile banking apps",
      "Encryption of financial + Aadhaar-linked data",
      "DPIA for high-volume transaction processing",
      "Breach detection and 6-hour CERT-In reporting alignment",
    ],
    button: "FinTech VAPT & Compliance",
    img: fintechBfsi,
  },
];

// dpdp scope
const dpdpScope = [
  {
    heading: "Security Gap Assessment",
    description: `Map your current security controls against DPDP's "reasonable safeguards" requirement.`,
  },
  {
    heading: "VAPT of Personal Data Systems",
    description: `Test applications, APIs, and databases that store or process personal data for security vulnerabilities.`,
  },
  {
    heading: "Encryption & Access Control Audit",
    description:
      "Assess data encryption at rest and in transit, along with identity and access management controls.",
  },
  {
    heading: "Breach Detection & Response Readiness",
    description:
      "Review security monitoring and alerting, and prepare breach response and notification procedures.",
  },
  {
    heading: "Vendor & Third-Party Security",
    description:
      "Assess third-party data processors, review Data Processing Agreements (DPAs), and verify security standards.",
  },
  {
    heading: "DPIA & SDF Security Support",
    description:
      "Support privacy impact assessments, security reviews, and regulatory documentation.",
  },
  {
    heading: "Secure Code Review (Data Modules)",
    description:
      "Review application code for vulnerabilities in personal data collection, storage, and processing.",
  },
  {
    heading: "DPIA & SDF Security Support",
    description:
      "Track how personal data is collected, stored, processed, and shared across systems.",
  },
  {
    heading: "Ongoing Compliance & Monitoring",
    description:
      "Maintain security through continuous monitoring, periodic VAPT, and regular compliance reviews.",
  },
];
// methodology
const methodology = [
  {
    heading: "Discovery & Data Mapping",
    description:
      "Identify personal data assets, data flows, processing activities, third-party processors, and existing security controls.",
    phase: "Phase 1",
  },
  {
    heading: "Security Gap Analysis",
    description:
      "Compare existing controls against DPDP requirements, identify compliance gaps, & prioritize risks for remediation.",
    phase: "Phase 2",
  },
  {
    heading: "VAPT & Technical Audit",
    description:
      "Test personal data systems for vulnerabilities & assess encryption, access controls, monitoring, & secure code practices.",
    phase: "Phase 3",
  },
  {
    heading: "Controls & Documentation",
    description:
      "Implement remediation, security controls, breach response playbooks, RoPA, DPIA (for SDFs) & compliance documentation.",
    phase: "Phase 4",
  },
  {
    heading: "Audit Report & Ongoing Support",
    description:
      "Deliver audit reports, train teams on breach notifications, and provide periodic reassessments.",
    phase: "Phase 5",
  },
];

// whatyouwillreceive
const whatYouWillReceive = [
  {
    heading: "DPDP Security Audit Report",
    description:
      "Detailed findings against DPDP's security requirements with evidence, risk ratings, and executive summary.",
  },
  {
    heading: "VAPT Report (Personal Data Systems)",
    description:
      "Full penetration testing report on applications and infrastructure processing personal data, with CVSS scores & remediation guidance.",
  },
  {
    heading: "Gap Analysis & Remediation Roadmap",
    description:
      "Prioritized remediation actions mapped to DPDP obligations, with timelines, ownership and effort estimates.",
  },
  {
    heading: "Data Inventory & Flow Maps",
    description:
      "Visual mapping of personal data lifecycle, collection, storage, processing, transfer and deletion - across your systems.",
  },
  {
    heading: "Breach Notification Playbook",
    description:
      "DPDP-aligned incident response & breach notification procedures covering DPB reporting & Data Principal notification.",
  },
  {
    heading: "DPIA Report (for SDFs)",
    description:
      "Data Protection Impact Assessment for high-risk processing activities, as required for Significant Data Fiduciaries.",
  },
  {
    heading: "Record of Processing Activities (RoPA)",
    description:
      "Structured documentation of all personal data processing activities across your organization.",
  },
  {
    heading: "Vendor Security Assessment Checklist",
    description:
      "Checklist for evaluating third-party data processors against DPDP security requirements.",
  },
  {
    heading: "Privacy Policies & Notice Templates",
    description:
      "Custom-drafted privacy policies and consent notice templates aligned to DPDP requirements.",
  },
];

const whyIsecurion = [
  {
    Icon: "charm:certificate",
    heading: "CERT-In Empanelled Expertise",
    description:
      "Work with a government-recognized security auditor for DPDP cybersecurity assessments.",
  },
  {
    Icon: "grommet-icons:shield-security",
    heading: "Integrated Security & Privacy",
    description:
      "Combine VAPT, incident response, cloud security, and secure code review expertise.",
  },
  {
    Icon: "pajamas:review-checkmark",
    heading: "DPDP, ISO 27001 & CERT-In Alignment",
    description:
      "Align security audits with applicable DPDP requirements, ISO 27001 controls, and CERT-In directives.",
  },
  {
    Icon: "mingcute:certificate-line",
    heading: "Deep Indian Regulatory Experience",
    description:
      "Address overlapping requirements across RBI, SEBI, IRDAI, UIDAI, and CERT-In frameworks.",
  },
  {
    Icon: "gravity-ui:list-timeline",
    heading: "Accelerated Compliance Timeline",
    description:
      "Use structured audit frameworks, checklists, and templates to streamline compliance activities.",
  },
  {
    Icon: "akar-icons:people-group",
    heading: "Dedicated Consultant Throughout",
    description:
      "Receive consistent support from initial gap assessment through final reporting and remediation review.",
  },
];

const locations = [
  {
    direction: "North",
    list: ["Delhi NCR", "Gurgaon", "Noida", "Chandigarh"],
  },
  {
    direction: "South",
    list: [
      "Bengaluru",
      "Chennai",
      "Kochi",
      "Hyderabad",
      "Thiruvananthapuram",
      "Kozhikode",
      "Thrissur",
      "Kollam",
      "Coimbatore",
    ],
  },
  {
    direction: "East & Central",
    list: [
      "Kolkata",
      "Cuttack",
      "Patna",
      "Bhubaneswar",
      "Raipur",
      "Bhopal",
      "Lucknow",
    ],
  },
  {
    direction: "West",
    list: ["Mumbai", "Pune", "Ahmedabad", "Jaipur"],
  },
];

const dpdpFaqs = [
  {
    question: "What does DPDP compliance in India actually involve?",
    answer:
      "DPDP compliance in India involves both legal/privacy obligations (consent management, privacy notices, data principal rights, RoPA) and technical security obligations under Section 8(5) of the DPDP Act 2023 - encryption, access control, VAPT, security monitoring, secure SDLC, breach detection, and breach notification to the Data Protection Board and affected individuals. A complete DPDP compliance program in India brings governance, legal documentation and technical security controls together in one engagement.",
  },
  {
    question: "What cybersecurity controls are mandatory under the DPDP Act?",
    answer: `Section 8(5) of the DPDP Act requires "reasonable security safeguards to prevent personal data breach." In practice this means: encryption of personal data at rest and in transit, access control and identity management (IAM), security monitoring and logging, VAPT of data-handling systems, secure SDLC practices, and documented incident response and breach notification procedures. Significant Data Fiduciaries (SDFs) additionally need periodic third-party security audits and DPIAs.`,
  },
  {
    question:
      "Does the DPDP Act require a VAPT or security audit of our data systems?",
    answer: `Yes. Section 8(5) of the DPDP Act requires Data Fiduciaries to implement "reasonable security safeguards to prevent personal data breach." Industry best practice - and what regulators will expect evidence of - is regular VAPT of applications and infrastructure that store or process personal data, along with periodic security audits. For Significant Data Fiduciaries, periodic third-party audits are explicitly required under the Act.`,
  },
  {
    question: "What is the penalty for a data breach under the DPDP Act?",
    answer:
      "Penalties under the DPDP Act go up to ₹250 crore for failure to implement adequate security safeguards that lead to a personal data breach. Failure to notify the Data Protection Board (DPB) and affected individuals of a breach can attract an additional penalty of up to ₹200 crore. Failure to fulfil data principal rights can attract penalties up to ₹50 crore.",
  },
  {
    question: "How is DPDP different from ISO 27001 and CERT-In guidelines?",
    answer:
      "ISO 27001 is a global information security management standard covering security controls broadly. CERT-In guidelines are mandatory cybersecurity directions for Indian organizations including 6-hour breach reporting. DPDP Act is India's data protection law adding specific privacy obligations on top of security - consent management, data principal rights, breach notification to DPB and individuals, and cross-border transfer restrictions. They overlap significantly on security controls - an ISO 27001 and CERT-In compliant organization has a strong head start on DPDP security requirements, but will still need to address DPDP-specific privacy obligations.",
  },
  {
    question: "Who needs to comply with the DPDP Act?",
    answer:
      "Any organization that processes personal data of individuals in India - including startups, enterprises, SaaS companies, fintech firms, healthcare providers, e-commerce platforms, and government bodies - must comply with the DPDP Act. This includes foreign companies that offer goods or services to individuals located in India.",
  },
  {
    question:
      "What is a Significant Data Fiduciary (SDF) and what additional obligations do they have?",
    answer:
      "A Significant Data Fiduciary is an organization designated by the government based on volume of data processed, sensitivity, risk to data principals, national security implications or impact on sovereignty. SDFs have enhanced obligations including: appointing a Data Protection Officer (DPO), conducting Data Protection Impact Assessments (DPIAs) for high-risk processing, periodic third-party security audits, and additional accountability measures. Large fintech, healthcare, and e-commerce platforms are likely SDF candidates.",
  },
  {
    question: "How can ISECURION help with DPDP compliance in India?",
    answer:
      "As a CERT-In empanelled organization, ISECURION provides end-to-end DPDP compliance in India: security gap assessment against DPDP's reasonable safeguards requirement, VAPT of personal data-handling applications and infrastructure, encryption and IAM audit, breach detection and notification readiness, vendor security assessment, RoPA and DPIA support for SDFs, and ongoing compliance monitoring. We also align DPDP compliance with ISO 27001 and CERT-In guidelines to maximize efficiency across frameworks.",
  },
  {
    question: "Does DPDP apply to data collected offline?",
    answer:
      "Yes. If offline data is digitized and processed digitally, it falls under the DPDP Act. This is particularly relevant for healthcare providers, banks, and government agencies that traditionally collected data on paper but now digitize records for processing.",
  },
  {
    question: "Does DPDP allow cross-border data transfers?",
    answer:
      "Yes, but only to countries notified by the Indian government as having adequate data protection standards. Restrictions and additional safeguards may apply for certain categories of sensitive data. Organizations using international cloud providers or offshoring data processing need to review their cross-border data transfer arrangements for DPDP compliance.",
  },
  {
    question: "How long does a DPDP cybersecurity audit engagement take?",
    answer:
      "A DPDP cybersecurity gap assessment and VAPT engagement typically takes 3–6 weeks depending on the size of your organization and the number of systems processing personal data. The full compliance implementation cycle - including controls remediation, documentation, and final audit - typically ranges from 8–16 weeks. ISECURION's pre-built frameworks and templates significantly reduce this timeline compared to starting from scratch.",
  },

  {
    question:
      "How much does DPDP compliance in India cost for a mid-sized company?",
    answer:
      "Cost depends on the number of systems processing personal data, whether the organization is likely to be classified as a Significant Data Fiduciary, and how much legal/technical documentation already exists (for example, prior ISO 27001 or SOC 2 work). A scoped gap assessment is the fastest way to get an accurate quote - ISECURION offers a free initial DPDP gap assessment to size the engagement before you commit to cost.",
  },
  {
    question: "Is DPDP compliance mandatory now, or is there a grace period?",
    answer:
      "The DPDP Act 2023 has been enacted, and rules under the Act govern the compliance and enforcement timeline. Organizations should not wait for enforcement to begin before building security safeguards, breach-readiness processes and consent mechanisms - technical controls such as encryption, VAPT and access management typically take weeks to months to implement properly, so early action reduces risk.",
  },
  {
    question:
      "Does ISECURION provide DPDP compliance services outside major metros, such as Bhubaneswar or Kerala?",
    answer:
      "Yes. ISECURION delivers DPDP compliance in India across all states and union territories, including Bhubaneswar in Odisha and Kerala cities such as Kochi (Ernakulam), Thiruvananthapuram, Kozhikode, Thrissur and Kollam, through a combination of remote assessments and on-site audits.",
  },
];

function DpdpCompliance() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const submit = async (data: ContactFormData) => {
    console.log("this is executing the subit");
    console.log(data);
    setLoading(true);
    try {
      if (!turnstileToken) {
        toast.error("Please complete CAPTCHA verification.");
        return;
      }
      const response = await dpdp({ ...data, turnstileToken });
      if (response.status === 200) {
        toast.success(response.message);
        reset();
        setTurnstileToken("");
        turnstileRef.current?.reset();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#060D1B]">
      {/* hero section  */}
      <section className="relative w-full min-h-[80vh] flex items-center py-14 overflow-hidden bg-[#000000]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-15">
          <div className="absolute left-10 w-[500px] h-[500px] blur-[120px] rounded-full bg-[#3B9E6A45]"></div>
          {/* left  */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <p
              className="text-sm sm:text-base font-semibold uppercase sectionheading text-[#3B9E6A] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "150ms" }}
            >
              DPDP Compliance in India
            </p>
            <h1
              className="text-[#FFFFFF] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "300ms" }}
            >
              DPDP Compliance in India: Cybersecurity Audit & Technical
              Compliance Services
            </h1>
            <p
              className="text-base sm:text-[17px] font-medium leading-[26px] md:leading-[28px] text-[#D1D1D1] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "450ms" }}
            >
              Identify security gaps, strengthen technical safeguards, and
              address the cybersecurity obligations of India’s Digital Personal
              Data Protection Act, 2023.
            </p>
            <p
              className="text-base sm:text-[17px] font-medium leading-[26px] md:leading-[28px] text-[#D1D1D1] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "600ms" }}
            >
              As a CERT-In empanelled cybersecurity company, ISECURION delivers
              complete DPDP compliance in India - identifying security gaps,
              hardening data systems, and meeting DPDP's technical obligations -
              before enforcement hits.
            </p>
            {/* <Link href="/company/contact">
              <button
                className="mx-auto lg:mx-0 flex items-center px-4 py-3 mt-5 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF] opacity-0 animate-hero-reveal"
                style={{ animationDelay: "650ms" }}
              >
                Get a Free Gap Assessment{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>
              </button>
            </Link> */}
          </div>
          {/* right  */}
          <div className="w-full lg:flex-1  px-10 py-8 rounded-[23px] bg-[#202123]">
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF]">
                Request a Free DPDP Security Gap Assessment
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#D9D9D9]">
                Get your security gap summary — free, no commitment.
              </p>
            </div>
            <form className="mt-4 space-y-3" onSubmit={handleSubmit(submit)}>
              {/* email+company name  */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-normal  text-[#FEFEFE]"
                  >
                    Work Email <span className="text-[#E42F23]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className={`text-[15px] font-normal px-3 py-2.5 rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] ${errors.emai ? "border border-red-500" : "border-[1.12px] border-[#262D3D] "}`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-sm font-normal text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-normal  text-[#FEFEFE]"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="text-[15px] font-normal px-3 py-2.5  rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]"
                    {...register("companyname")}
                  />
                </div>
              </div>

              {/* industry  */}
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm font-normal text-[#FEFEFE]"
                >
                  Industry / Sector <span className="text-[#E24B4A]">*</span>
                </label>
                <select
                  name=""
                  id=""
                  className="text-sm font-no py-3 w-full px-3 py-2.5 rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border border-[#262D3D]"
                  {...register("industry", {
                    required: "Industry/Sector is required",
                  })}
                >
                  <option value="">Select Industry / Sector</option>
                  <option value="SaaS / Technology ">SaaS / Technology </option>
                  <option value="FinTech / BFSI">FinTech / BFSI</option>
                  <option value="Healthcare / HealthTech">
                    Healthcare / HealthTech
                  </option>
                  <option value="E-commerce / Retail">
                    E-commerce / Retail
                  </option>
                  <option value="IT Services / MSP">IT Services / MSP</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* captcha  */}
              <div className="">
                <div className="flex items-center gap-3">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken("")}
                    onError={() => setTurnstileToken("")}
                  />
                </div>
              </div>
              {/* check box  */}
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="rounded-[23px] border-[1.4px] border-[#D1D1D1]"
                />{" "}
                <p className="text-xs font-medium text-[#D1D1D1]">
                  By clicking submit below, you agree to our Terms of Use and
                  Privacy Policy. Additionally, you consent to allow ISECURION
                  Technology & Consulting Pvt. Ltd. to store and process the
                  personal information submitted above to provide you the
                  content requested.
                </p>
              </div>
              <button
                type="submit"
                className={`w-full text-base font-semibold flex items-center justify-center py-2.5 gap-2 rounded-[10px] text-[#FFFFFF] border-2 border-[#00000000] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
              >
                Get My Free Gap Assessment{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" className="text-2xl" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/*  DPDP Compliance in India */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-4 text-center  lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase sectionheading text-[#3B9E6A]">
              DPDP Compliance in India
            </p>
            {/* <h2 className="text-[#FEFEFE]">
              What Does the Act Require from a Cybersecurity Standpoint?
            </h2> */}
            <WordReveal
              text="What Does the Act Require from a Cybersecurity Standpoint?"
              className="text-[#FFFFFF]"
            />
            <p className="text-base sm:text-[18px] font-normal leading-[26px] md:leading-[31px]  text-[#D1D1D1]">
              Most organisations focus on DPDP’s legal and privacy obligations,
              including consent management, privacy notices, and data principal
              rights. However, the Act’s cybersecurity obligations are equally
              significant.
            </p>
            <p className="text-base sm:text-[18px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              Section 8(5) of the DPDP Act requires every Data Fiduciary to
              implement reasonable security safeguards to prevent personal data
              breaches. ISECURION assesses security controls, encryption, access
              management, incident response readiness, and vendor security
              practices to help organisations identify and address gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs DPDP Compliance?  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              Who Needs DPDP Compliance?
            </p>
            {/* <h2 className="text-[#FFFFFF]">
              The DPDP Act Applies to Organisations that:
            </h2> */}
            <WordReveal
              text="The DPDP Act Applies to Organisations that:"
              className="text-[#FFFFFF]"
            />
            <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              Understand whether the DPDP Act applies to your organisation based
              on how you collect, process, and manage personal data in India.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-6">
              {whoNeedsDpdp.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.12}
                  className={`relative px-5 pt-6 pb-10 rounded-lg space-y-3 bg-[#66666614] ${index == 4 ? "lg:col-span-2" : ""}`}
                >
                  <div className="absolute left-0 w-[2px] h-[24px] rounded-tr-sm rounded-br-sm bg-[#3B9E6A]"></div>
                  <div className="flex justify-between">
                    <h3 className="text-sm sm:text-lg font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <span>
                      <Icon
                        icon={item.Icon}
                        className="w-[28px] h-[28px] text-[#3B9E6A]"
                      />
                    </span>
                  </div>
                  <p className="text-[15px] font-normal text-[#D1D1D1] ">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DPDP Security & Breach Response Requirements  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <Animation>
            <div className="max-w-4xl space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
                DPDP Security & Breach Response Requirements
              </p>
              {/* <h2 className="text-[#FFFFFF]">
                Strengthen Data Security & Breach Preparedness
              </h2> */}
              <WordReveal
                text="Strengthen Data Security & Breach Preparedness"
                className="text-[#FFFFFF]"
              />
              <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
                Explore the essential safeguards, monitoring practices, and
                response measures that help protect personal data and address
                breaches in line with applicable DPDP requirements.
              </p>
            </div>
          </Animation>
          {/* content  */}
          <Animation>
            <div className="flex flex-col lg:flex-row justify-between gap-15 mt-10">
              {/* Security Safeguards Required  */}
              <div className="w-full lg:w-[45%]">
                <div className="flex gap-6">
                  <div className="w-[50px] h-[50px] flex items-center justify-center shrink-0 rounded-full bg-[#1C2332]">
                    <Icon
                      icon="fa-solid:shield-alt"
                      className="w-[22px] h-[25px] text-[#0F66EA]"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#0F66EA]">
                      Security Safeguards Required
                    </h3>
                    <p className="mt-4 text-sm sm:text-base  font-normal text-[#D1D1D1]">
                      Implement essential technical controls to protect personal
                      data, prevent unauthorised access, and reduce security
                      vulnerabilities.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-5">
                  {securitySafeguards.map((item, index) => (
                    <p
                      key={index}
                      className="text-sm sm:text-base font-medium flex items-center gap-3 text-[#D9D9D9]"
                    >
                      <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 64 64"
                        >
                          <path d="M0 0h64v64H0z" fill="none" />
                          <path
                            fill="#3B9E6A"
                            d="M58.4 0L23.6 38.3l-10.1-7.7H7.9l15.7 25.5L64 0z"
                          />
                          <path
                            fill="#1C2332"
                            d="M53.9 56.1c0 .6-.5 1.1-1.1 1.1H7.9c-.6 0-1.1-.5-1.1-1.1V11.2c0-.6.5-1.1 1.1-1.1h30.7l6.1-6.7H2.2C1 3.4 0 4.4 0 5.6v56.1C0 63 1 64 2.2 64h56.1c1.2 0 2.2-1 2.2-2.2V18.1l-6.7 9.4c.1 0 .1 28.6.1 28.6"
                          />
                        </svg>
                      </span>{" "}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              {/* Breach Notification Obligations  */}
              <div className="w-full lg:w-[45%]">
                <div className="flex gap-6">
                  <div className="w-[50px] h-[50px] flex items-center justify-center shrink-0 rounded-full bg-[#1C2332]">
                    <Icon
                      icon="boxicons:bell-check-filled"
                      className="w-[22px] h-[25px] text-[#E24B4A]"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#E24B4A]">
                      Breach Notification Obligations
                    </h3>
                    <p className="mt-4 text-sm sm:text-base  font-normal text-[#D1D1D1]">
                      Establish clear incident response procedures to detect,
                      report, and manage personal data breaches in line with
                      applicable DPDP requirements.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-5">
                  {breachNotification.map((item, index) => (
                    <p
                      key={index}
                      className="text-sm sm:text-base font-medium flex items-center gap-3 text-[#D9D9D9]"
                    >
                      <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 64 64"
                        >
                          <path d="M0 0h64v64H0z" fill="none" />
                          <path
                            fill="#3B9E6A"
                            d="M58.4 0L23.6 38.3l-10.1-7.7H7.9l15.7 25.5L64 0z"
                          />
                          <path
                            fill="#1C2332"
                            d="M53.9 56.1c0 .6-.5 1.1-1.1 1.1H7.9c-.6 0-1.1-.5-1.1-1.1V11.2c0-.6.5-1.1 1.1-1.1h30.7l6.1-6.7H2.2C1 3.4 0 4.4 0 5.6v56.1C0 63 1 64 2.2 64h56.1c1.2 0 2.2-1 2.2-2.2V18.1l-6.7 9.4c.1 0 .1 28.6.1 28.6"
                          />
                        </svg>
                      </span>{" "}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      {/* SECURITY CONTROLS  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
              SECURITY CONTROLS
            </p>
            {/* <h2 className="text-[#FFFFFF]">
              What Security Controls Does the DPDP Act Mandate?
            </h2> */}
            <WordReveal
              text="What Security Controls Does the DPDP Act Mandate?"
              className="text-[#FFFFFF]"
            />
            <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              We map key DPDP obligations to the technical controls,
              assessments, and security services needed to strengthen personal
              data protection.
            </p>
          </div>
          {/* content  */}
          <div className="mt-10 w-full">
            <div className="overflow-x-auto">
              <div className="min-w-[850px]">
                {/* Header */}
                <div className="flex justify-between gap-6 border-b border-[#D9D9D95E] pb-4">
                  <div className="relative w-[400px] shrink-0">
                    <div className="absolute -bottom-4 h-[1px] w-[100px] bg-[#698099]" />
                    <p className="text-base sm:text-lg font-medium text-[#D1D1D1]">
                      DPDP OBLIGATION
                    </p>
                  </div>

                  <div className="relative w-[300px] shrink-0">
                    <div className="absolute -bottom-4 h-[1px] w-[100px] bg-[#698099]" />
                    <p className="text-base sm:text-lg font-medium text-[#D1D1D1]">
                      TECHNICAL CONTROL
                    </p>
                  </div>

                  <div className="relative w-[200px] shrink-0">
                    <div className="absolute -bottom-4 h-[1px] w-[100px] bg-[#698099]" />
                    <p className="text-base sm:text-lg font-medium text-[#3B9E6A]">
                      ISECURION SERVICE
                    </p>
                  </div>
                </div>

                <div>
                  {securityControls.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-6 border-b border-[#66666680] py-6"
                    >
                      <div className="flex w-[400px] shrink-0 items-start gap-5">
                        <div className="flex shrink-0 items-center gap-4">
                          <p className="text-base font-medium text-[#808CA3]">
                            {String(index + 1).padStart(2, "0")}
                          </p>

                          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[13px] bg-[#182331]">
                            <Icon
                              icon={item.Icon}
                              className="h-5 w-5 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base font-medium text-[#FFFFFF]">
                            {item.heading}
                          </h3>
                          <p className="text-[13px] font-normal text-[#D1D1D1]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="w-[300px] shrink-0">
                        <p className="text-sm font-normal leading-6 text-[#D1D1D1]">
                          {item.technicalControl}
                        </p>
                      </div>

                      <div className="w-[200px] shrink-0">
                        <p className="text-sm font-normal leading-6 text-[#D1D1D1]">
                          {item.isecurionService}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Comparison  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="max-w-4xl space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              Framework Comparison
            </p>
            <h2 className="text-[#FFFFFF]">
              DPDP vs ISO 27001 vs CERT-In Guidelines - What Indian Companies
              Need to Know
            </h2>
            <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              These three frameworks overlap significantly. Understanding the
              differences helps you maximize compliance efficiency, work done
              for one reduces effort for the others.
            </p>
          </div>
          <div className="mt-10 w-full">
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Header */}
                <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 border-b border-[#D9D9D95E] pb-4">
                  {[
                    "ASPECT",
                    "DPDP Act 2023",
                    "ISO 27001",
                    "CERT-In Guidelines (2022)",
                  ].map((heading, index) => (
                    <div key={heading} className="relative min-w-0 pb-1">
                      <div className="absolute -bottom-4 left-0 h-px w-[62px] bg-[#698099]" />
                      <p
                        className={`text-base sm:text-lg font-medium text-[#D1D1D1]  ${
                          index === 3 ? "uppercase" : ""
                        }`}
                      >
                        {heading}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {frameworkComparasion.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 border-b border-[#66666680] py-6"
                  >
                    <p className="text-base sm:text-lg font-semibold text-[#FFFFFF] ">
                      {item.aspect}
                    </p>

                    <p className="text-base font-normal text-[#D1D1D1]">
                      {item.dpdp}
                    </p>

                    <p className="text-base font-normal text-[#D1D1D1]">
                      {item.iso}
                    </p>

                    <p className="text-base font-normal text-[#D1D1D1]">
                      {item.certIn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* by sector  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="space-y-4 text-center">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              By Sector
            </p>
            <h2 className="text-[#FFFFFF]">
              DPDP Cybersecurity Obligations by Industry
            </h2>
            <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              Different sectors face different DPDP risk profiles. Here's what
              your industry needs to prioritize.
            </p>
          </div>
          <div className="mt-10">
            <div className="relative w-full">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={500}
                pagination={{
                  clickable: true,
                  el: ".sector-pagination",
                }}
                className="sector-swiper overflow-hidden rounded-[20px]"
              >
                {ourProjects.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-[540px] w-full overflow-hidden rounded-[20px]">
                      <Image
                        src={item.img}
                        alt={item.heading}
                        fill
                        priority={index === 0}
                        className="object-cover object-center"
                        sizes="100vw"
                      />

                      {/* Card wrapper */}
                      <div className="absolute left-4 top-[60px] z-10 flex w-[calc(100%-2rem)] flex-col sm:left-[40px] sm:w-[500px]">
                        <div className="pointer-events-none absolute inset-0">
                          <div className="absolute inset-y-0 left-0 right-[78px] rounded-xl rounded-xl bg-[#000C1C]" />

                          <div className="absolute bottom-0 right-0 top-[75px] w-[100px] rounded-xl bg-[#000C1C]">
                            <span className="absolute -top-4 left-0 h-4 w-4 bg-[radial-gradient(circle_at_100%_0,transparent_16px,#000C1C_16.5px)] rounded-2xl" />
                          </div>
                        </div>

                        {/* Arrow button inside the notch */}
                        <a
                          href={item.button}
                          aria-label={`View ${item.heading}`}
                          className="absolute right-0 top-0 z-20 flex h-[66px] w-[66px] items-center justify-center rounded-xl bg-[#0F66EA] text-2xl text-white transition-colors group hover:bg-[#000000]"
                        >
                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="group-hover:rotate-45 transition-all duration-300"
                          />
                        </a>

                        {/* Card content */}
                        <div className="relative z-10 flex flex-col p-5 sm:p-6 space-y-4">
                          <div className="mt-7 w-fit flex items-center px-3 py-2 gap-2 rounded-full bg-[#182331]">
                            <span className="w-2 h-2 inline-flex rounded-full bg-[#0F66EA]"></span>
                            <p className="text-sm font-medium text-[#FFFFFF]">
                              {item.heading}
                            </p>
                          </div>

                          <h3 className="text-base sm:text-lg font-medium  text-[#FFFFFF]">
                            {item.description}
                          </h3>

                          <ul className="space-y-1 text-sm font-normal leading-6 text-[#D1D1D1]">
                            {item.list?.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex gap-2">
                                <span>•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          <button className="text-[15px] font-semibold flex items-center justify-center gap-2 p-4 text-center mt-5 rounded-md text-[#FFFFFF]  bg-[#0049801A] border border-[#0000000A]">
                            {item.button}
                            <span>
                              <Icon
                                icon="akar-icons:arrow-right"
                                className="text-lg"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Clickable Pagination Dots */}
              <div className="sector-pagination mt-6 flex justify-center gap-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Our DPDP Audit Scope  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row justify-between">
          {/* left  */}
          <div className="w-full lg:w-[30%] text-center lg:text-left space-y-4">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              Our DPDP Audit Scope
            </p>
            <h2 className="text-[#FFFFFF]">
              Technical and Governance Services for DPDP Readiness
            </h2>
            <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              Know the key entities and their responsibilities, along with
              breach response obligations, under the DPDP Act, encompassing
              security controls, documentation, and audit support.
            </p>
          </div>
          {/* right  */}
          <div className="w-full lg:w-[60%] mt-10 lg:mt-0">
            <div className="space-y-3 md:space-y-5">
              {dpdpScope.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2 ">
                  <div className="flex-1 flex items-center gap-3">
                    <p className="text-sm font-normal w-[20px]  text-[#3B9E6A]">
                      {index + 1}.
                    </p>
                    <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-normal max-w-lg lg:m-0 leading-[21px]  text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="max-w-3xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              Methodology
            </p>
            <h2 className="text-[#FFFFFF]">
              How ISECURION Executes DPDP Cybersecurity Compliance
            </h2>

            <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              A structured five-phase approach to assess security gaps, test
              technical controls, strengthen compliance, and maintain ongoing
              DPDP readiness.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {methodology.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between space-y-4"
                >
                  <p className="flex items-center gap-4">
                    <span className="text-base font-semibold text-[#3B9E6A]">
                      0{index + 1}{" "}
                    </span>
                    <span>
                      <Icon
                        icon="akar-icons:arrow-right"
                        className="text-[#F5F0E8A1]"
                      />
                    </span>{" "}
                  </p>
                  <h3 className="text-base font-medium text-[#F5F0E8]">
                    {item.heading}
                  </h3>
                  <p className="text-sm font-normal text-[#D1D1D1]">
                    {item.description}
                  </p>
                  <button className="text-sm font-semibold w-fit px-5 py-2 rounded-[5px] leading-[22px] text-[#FFFFFF] bg-[#514F6E40] border-[0.3px] border-[#6F6C8F] shadow-[inset_0_1px_8px_#ABB6E933,inset_0_-1px_2px_#FFFFFF26]">
                    {item.phase}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Receive  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row justify-between gap-10">
          {/* left  */}
          <div className="w-full lg:w-[30%] text-center lg:text-left">
            <div className="space-y-4 lg:sticky lg:top-24">
              <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
                What You Will Receive
              </p>
              <h2 className="text-[#FFFFFF]">
                Deliverables That Strengthen DPDP Compliance
              </h2>
              <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
                Get actionable audit reports, security assessments, and
                essential documentation to support compliance and protect
                personal data.
              </p>
            </div>
          </div>
          {/* right  */}
          <div className="w-full lg:w-[50%] border-l  border-[#B1B1B114]">
            <div className="space-y-4">
              {whatYouWillReceive.map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 px-3 lg:px-10 ">
                  <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <p className="text-sm sm:text-base font-normal max-w-xl leading-[20px] lg:leading-[28px] text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ISECURION  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
              WHY ISECURION
            </p>
            <h2 className="text-[#FFFFFF]">
              Why Choose ISECURION for DPDP Cybersecurity Compliance
            </h2>
            <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px]  text-[#D1D1D1]">
              Leverage deep cybersecurity expertise, regulatory experience, and
              a security-first approach to simplify DPDP compliance and
              strengthen data protection.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {whyIsecurion.map((item, index) => (
                <div
                  key={index}
                  className={`p-10 ${index === 0 || index === whyIsecurion.length - 1 ? "bg-[#060D1B]" : index === 1 ? "bg-[#08142D]" : index === 2 || index === 3 ? "bg-linear-to-b from-[#0A1119] to-[#3B9E6A]" : index === 4 ? "bg-[#010611]" : ""}`}
                >
                  <Icon
                    icon={item.Icon}
                    className="w-[24px] h-[32px] text-[#FFFFFF]"
                  />
                  <h3 className="mt-18 text-base sm:text-lg font-medium mt-8 text-[#FFFFFF]">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base font-normal mt-3 text-[#D1D1D1]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Coverage  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="text-center lg:text-left space-y-4">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              Pan-India Coverage
            </p>
            <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-4">
              <div className="w-full lg:w-[40%]">
                <h2 className="text-[#FFFFFF] ">
                  DPDP Compliance in India - Cities & States We Serve
                </h2>
              </div>
              <div className="w-full lg:w-[40%]">
                <p className="text-base sm:text-lg font-normal  text-[#D1D1D1]">
                  ISECURION delivers DPDP compliance in India through a mix of
                  remote assessments and on-site audits, covering every major
                  business hub across the country - including Eastern India and
                  Kerala.
                </p>
              </div>
            </div>
          </div>
          {/* content  */}
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {locations.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-6 space-y-4 rounded-md border border-[#3B9E6A30]"
                >
                  <p className="text-xs font-medium text-[#3B9E6A]">
                    {item.direction.charAt(0)}
                  </p>
                  <h3 className="text-lg font-medium text-[#EDEFE6]">
                    {item.direction}
                  </h3>
                  <div className="flex flex-wrap gap-3 ">
                    {item.list.map((city, index) => (
                      <p
                        key={index}
                        className="text-xs font-medium px-3 py-2 rounded-sm bg-[#1B242E]  text-[#FFFFFF]"
                      >
                        {city}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* faqs  */}
      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            DPDP Compliance in India
          </>
        }
        description="Find clear answers to common questions about DPDP requirements, cybersecurity controls, penalties, compliance timelines, and how ISECURION can help."
        faqs={dpdpFaqs}
      />
      <section className="py-10 rounded-tl-[42px] rounded-tr-[42px] bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left space-y-4">
            <h2 className="font-semibold text-[#FFFFFF]">
              Get DPDP Audit-Ready with ISECURION
            </h2>
            <p className="text-base sm:text-lg font-medium leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
              CERT-In empanelled cybersecurity auditors. One engagement - DPDP
              security requirements, ISO 27001, and CERT-In guidelines covered.
              Book a free gap assessment call today.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <Link href="/company/contact">
                <button className="text-base font-medium flex items-center gap-3 px-4 py-3 rounded-[10px] cursor-pointer ring-2 ring-[#29559D] text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70]">
                  Book a Free Call{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" />
                  </span>
                </button>
              </Link>
              <Link href="/services/vapt">
                <button className="text-base font-medium px-4 py-3 rounded-[10px] cursor-pointer text-[#FFFFFF] border border-[#FFFFFF29]">
                  View VAPT Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DpdpCompliance;
