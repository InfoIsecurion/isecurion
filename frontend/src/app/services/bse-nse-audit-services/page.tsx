"use client";
import React, { useRef, useState } from "react";
import {
  Animation,
  AnimatedCard,
  LeftAnimation,
  GradientIcon,
  RightAnimation,
} from "../../../components/ui/Animation";
import { Icon } from "@iconify/react";
import Image from "next/image";
import FAQSection from "../../../components/sections/FAQSection";
import BSE_NSE_CTA from "../../../components/sections/BSE_NSE_CTA";
import { useForm } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { bseNseAudit, phishingSimulation } from "../../../services/api/contact";
import { toast } from "react-toastify";
import Link from "next/link";

interface ContactFormData {
  email: string;
  companyName: string;
  organizationtype: string;
  turnstileToken: string;
}

const objectives = [
  {
    icon: "grommet-icons:vulnerability",
    title: "Ensure Regulatory Alignment",
    description:
      "Assess IT and cybersecurity practices against applicable SEBI guidelines and BSE/NSE requirements.",
  },
  {
    icon: "boxicons:check-shield",
    title: "Strengthen IT Governance",
    description:
      "Evaluate security policies, risk management processes, accountability, and governance controls.",
  },
  {
    icon: "boxicons:lock-keyhole",
    title: "Protect Investor & Trading Data",
    description:
      "Review data protection, access management, encryption, and information security safeguards.",
  },
  {
    icon: "iconmind:compliance-outline-regular",
    title: "Improve Operational Resilience",
    description:
      "Evaluate incident response, business continuity, and disaster recovery readiness.",
  },
];

const industriesWeServe = [
  {
    Icon: "keyline-icons:chart-stock-up",
    heading: "Stock Brokers & Sub-Brokers",
    description:
      "Equity, derivatives, and currency brokers operating on recognized stock exchanges.",
  },
  {
    Icon: "basil:exchange-solid",
    heading: "Trading & Clearing Members",
    description:
      "Trading members, clearing members, & custodial participants supporting exchange operations and settlement.",
  },
  {
    Icon: "iconmind:cheque-deposit-outline-regular",
    heading: "Depository Participants",
    description:
      "NSDL and CDSL participants managing dematerialized securities and investor accounts.",
  },
  {
    Icon: "iconmind:index-fund-outline-regular",
    heading: "Mutual Funds & AMCs",
    description:
      "Asset management companies, mutual fund houses and investment management entities regulated by SEBI.",
  },
  {
    Icon: "fe:document",
    heading: "RTAs & PMS Providers",
    description:
      "Organizations managing investor records, securities transfers, and related financial services.",
  },
  {
    Icon: "akar-icons:people-group",
    heading: "Investment Advisors & Analysts",
    description:
      "Registered investment advisors, research analysts, and other applicable capital-market participants.",
  },
];

const whyAuditMatters = [
  {
    title: "Regulatory Compliance",
    description:
      "Mandatory compliance with SEBI cybersecurity and IT governance guidelines to maintain trading and operational licenses.",
    icon: "hugeicons:legal-01",
    background: "bg-[#080D1B]",
  },
  {
    title: "Risk Prevention",
    description:
      "Address security weaknesses that could lead to data breaches, trading disruptions, or operational failures.",
    icon: "bx:lock",
    background: "bg-[#08142D]",
  },
  {
    title: "Investor Data Protection",
    description:
      "Strengthen safeguards for sensitive investor information, financial records, and trading data.",
    icon: "iconmind:security-champion-outline-bold",
    background: "bg-gradient-to-b from-[#3B9E6A] to-[#000000A6]",
  },
  {
    title: "Incident Response Readiness",
    description:
      "Evaluate monitoring, incident handling, escalation, and regulatory reporting capabilities.",
    icon: "iconmind:compliance-outline-regular",
    background: "bg-gradient-to-b from-[#3B9E6A] to-[#000000A6]",
  },
  {
    title: "Reduced Compliance Exposure",
    description:
      "Address audit observations and reduce the risk of regulatory consequences arising from control deficiencies.",
    icon: "iconmind:return-policy-outline-regular",
    background: "bg-[#071126]",
  },
  {
    title: "Systemic Stability",
    description:
      "Contribution to overall capital market stability through validated cybersecurity and operational resilience controls.",
    icon: "fe:sitemap",
    background: "bg-[#080D1B]",
  },
];

const Steps = [
  {
    number: "01",
    step: "Phase 01",
    title: "Audit Planning & Scoping",
    description:
      "Identify applicable SEBI and exchange requirements while understanding your systems, applications, and business processes.",
    side: "left",
  },
  {
    number: "02",
    step: "Phase 02",
    title: "Control Assessment",
    description:
      "Review governance documents, security policies, procedures, and the design and implementation of controls.",
    side: "right",
  },
  {
    number: "03",
    step: "Phase 03",
    title: "Technical Validation",
    description:
      "Evaluate configurations, access controls, monitoring mechanisms, and incident response capabilities.",
    side: "left",
  },
  {
    number: "04",
    step: "Phase 04",
    title: "Risk & Gap Analysis",
    description:
      "Identify control weaknesses and compliance gaps, classifying findings according to risk and business impact.",
    side: "right",
  },
  {
    number: "05",
    step: "Phase 05",
    title: "Reporting & Closure Support",
    description:
      "Prepare structured audit reports and support remediation planning and relevant regulatory clarifications.",
    side: "left",
  },
  {
    number: "06",
    step: "Phase 06",
    title: "Continuous Improvement",
    description:
      "Provide follow-up support, remediation validation, and guidance for future audit cycles.",
    side: "right",
  },
];

const whatYouReceive = [
  {
    heading: "BSE/NSE-Compliant Report",
    description:
      "Exchange-ready audit report aligned with prescribed formats and regulatory requirements.",
    Icon: "iconmind:mark-scheme-outline-regular",
    bgColor: "#0F66EA",
  },
  {
    heading: "Executive Summary",
    description:
      "Board-ready executive summary with risk ratings and compliance posture assessment.",
    Icon: "akar-icons:people-group",
    bgColor: "#C8912A",
  },
  {
    heading: "Detailed Findings",
    description:
      "Control-by-control assessment results with risk ratings and evidence documentation.",
    Icon: "boxicons:message-code",
    bgColor: "#3B9E6A",
  },
  {
    heading: "SEBI Gap Analysis",
    description:
      "Regulatory gap analysis mapping findings to specific SEBI and exchange requirements.",
    Icon: "garden:line-graph-square-stroke-20",
    bgColor: "#7D70F0",
  },
  {
    heading: "Remediation Roadmap",
    description:
      "Actionable recommendations with prioritization, timelines and implementation guidance.",
    Icon: "fa7-regular:lightbulb",
    bgColor: "#0F66EA",
  },
  {
    heading: "Evidence Mapping",
    description:
      "Complete audit trail with evidence artifacts and traceability documentation.",
    Icon: "akar-icons:link-chain",
    bgColor: "#C8912A",
  },
  {
    heading: "Submission Support",
    description:
      "Assistance with exchange submission, clarification responses and audit closure.",
    Icon: "fa7-regular:handshake-alt",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Remediation Support",
    description:
      "Post-audit remediation assistance and validation testing for critical findings.",
    Icon: "eva:repeat-fill",
    bgColor: "#7D70F0",
  },
];

const whatSetsUsApart = [
  {
    title: "Capital Markets Expertise",
    description:
      "Understand the technology environments, trading operations, and compliance challenges of capital-market entities.",
  },
  {
    title: "Regulatory-Focused Approach",
    description:
      "Assess controls against applicable SEBI, BSE, and NSE requirements.",
  },
  {
    title: "Multidisciplinary Security Team",
    description:
      "Bring together compliance professionals, IT auditors, and cybersecurity specialists for comprehensive assessments.",
  },
  {
    title: "Actionable Remediation Guidance",
    description:
      "Translate audit observations into practical recommendations that help address security and compliance gaps.",
  },
  {
    title: "Minimal Business Disruption",
    description:
      "Plan audit activities around business operations to minimize disruption to trading and day-to-day activities.",
  },
  {
    title: "Long-Term Cyber Resilience",
    description:
      "Focus on sustainable security improvements beyond the immediate audit cycle.",
  },
];

const BSE_NSE_FAQs = [
  {
    question: "Is BSE/NSE audit mandatory in India?",
    answer:
      "Yes, SEBI mandates periodic IT and cybersecurity audits for applicable capital market entities including stock brokers, trading members, clearing members and depository participants as per regulatory circulars.",
  },
  {
    question: "How often should BSE/NSE audits be conducted?",
    answer:
      "Typically annually, or as specified by SEBI and exchange circulars. Entities should also conduct audits after significant system changes, security incidents or when required by regulators.",
  },
  {
    question: "Does ISECURION follow SEBI and exchange formats?",
    answer:
      "Yes, all reports are prepared in alignment with prescribed SEBI, BSE and NSE formats and guidelines to ensure seamless regulatory submission and acceptance.",
  },
  {
    question: "Can you help with pre-audit readiness?",
    answer:
      "Yes, we offer comprehensive gap assessments and readiness reviews to identify control weaknesses and prepare your organization before the formal audit engagement begins.",
  },
  {
    question: "Do you support audit remediation?",
    answer:
      "Yes, we assist with closure of audit findings through detailed remediation guidance, implementation support, control validation testing and regulatory response preparation.",
  },
  {
    question: "Are cloud systems included in scope?",
    answer:
      "Yes, both cloud-based and on-premises environments are covered as per SEBI guidelines for technology infrastructure, including hybrid and multi-cloud deployments.",
  },
  {
    question: "Is incident response assessed?",
    answer:
      "Yes, incident response readiness, procedures, team capabilities, regulatory reporting mechanisms and forensic preparedness are key audit focus areas under SEBI requirements.",
  },
  {
    question: "Will the audit impact daily operations?",
    answer:
      "No, audits are carefully planned and executed to minimize disruption to trading and business operations. We work closely with your team to schedule activities during non-peak hours where necessary.",
  },
  {
    question: "Are third-party vendors reviewed?",
    answer:
      "Yes, vendor and third-party risk management is assessed where mandated by SEBI guidelines, including outsourcing arrangements, cloud service providers and critical technology vendors.",
  },
  {
    question: "Do you provide executive summaries?",
    answer:
      "Yes, comprehensive executive summaries are provided for senior management and boards, highlighting key risks, compliance status and critical recommendations.",
  },
  {
    question: "Can FinTech companies undergo this audit?",
    answer:
      "Yes, if they are exchange-integrated, regulated by SEBI or providing services to capital market participants, they can and should undergo BSE/NSE compliance audits.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Typically 2 to 6 weeks depending on organization size, system complexity and scope of coverage. Larger organizations with multiple locations may require extended timelines.",
  },
  {
    question: "Is this audit the same as VAPT?",
    answer:
      "No, while technical security testing is included, BSE/NSE audits focus primarily on compliance, governance and operational controls. VAPT may be conducted as a complementary activity.",
  },
  {
    question: "Do you assist with regulatory queries?",
    answer:
      "Yes, we support organizations in responding to exchange and SEBI clarifications, queries and follow-up communications related to audit findings.",
  },
  {
    question: "Do you offer ongoing compliance support?",
    answer:
      "Yes, continuous compliance monitoring, periodic assessments, vCISO services and advisory support are available to maintain regulatory posture between audit cycles.",
  },
];

const auditGroups = [
  {
    id: "A",
    title: "GOVERNANCE & POLICY REVIEW",
    description:
      "Evaluate your governance framework and policy controls to ensure regulatory alignment and operational discipline.",
    items: [
      {
        icon: "fe:document",
        title: "Information Security Policy",
        description:
          "SEBI-aligned security policy framework, roles and responsibilities documentation.",
      },
      {
        icon: "ph:tree-structure-bold",
        title: "IT Governance Framework",
        description:
          "Board oversight, IT steering committee, risk management framework and compliance governance.",
      },
      {
        icon: "iconmind:mark-scheme-outline-regular",
        title: "Cyber Security Strategy",
        description:
          "Strategic planning, threat assessment, risk treatment plans and security roadmap validation.",
      },
      {
        icon: "fluent:document-multiple-prohibited-24-regular",
        title: "Regulatory Documentation",
        description:
          "Compliance registers, audit trails, regulatory reporting mechanisms and policy adherence.",
      },
    ],
  },
  {
    id: "B",
    title: "TECHNICAL & OPERATIONAL CONTROLS",
    description:
      "Assess the technical architecture and operational processes that support a secure and compliant exchange environment.",
    items: [
      {
        icon: "akar-icons:network",
        title: "Network Security",
        description:
          "Firewall configurations, network segmentation, DMZ architecture, IDS/IPS deployment and perimeter security.",
      },
      {
        icon: "boxicons:server",
        title: "Infrastructure Hardening",
        description:
          "Server, database, endpoint security, patch management, vulnerability management and secure configurations.",
      },
      {
        icon: "iconmind:identity-outline-regular",
        title: "Identity & Access Management",
        description:
          "User provisioning, privileged access management (PAM), multi-factor authentication and access governance.",
      },
      {
        icon: "icon-park-outline:api-app",
        title: "Application Security",
        description:
          "Trading platform security, web/mobile application controls, API security and secure development practices.",
      },
    ],
  },
  {
    id: "C",
    title: "CYBER SECURITY & RESILIENCE",
    description:
      "Strengthen your ability to detect, respond and recover from threats across people, processes and technology.",
    items: [
      {
        icon: "ic:baseline-screenshot-monitor",
        title: "Security Monitoring",
        description:
          "SIEM implementation, log management, security event correlation, alerting mechanisms and 24/7 monitoring.",
      },
      {
        icon: "iconmind:incident-report-outline-regular",
        title: "Incident Response",
        description:
          "Incident management procedures, SEBI/exchange reporting protocols, forensic readiness and response team capabilities.",
      },
      {
        icon: "akar-icons:data",
        title: "Data Protection",
        description:
          "Encryption standards, data classification, data loss prevention (DLP), backup verification and retention compliance.",
      },
      {
        icon: "streamline:dangerous-zone-sign-remix",
        title: "Threat Intelligence",
        description:
          "Threat feeds, vulnerability intelligence, attack surface monitoring and proactive threat hunting.",
      },
    ],
  },
  {
    id: "D",
    title: "COMPLIANCE & BUSINESS CONTINUITY",
    description:
      "Ensure regulatory compliance and business continuity with robust vendor, third-party and recovery practices.",
    items: [
      {
        icon: "ph:storefront",
        title: "Vendor Risk Management",
        description:
          "Third-party security assessments, vendor due diligence, contract reviews and outsourcing governance.",
      },
      {
        icon: "lucide:briefcase-business",
        title: "Business Continuity Plan (BCP)",
        description:
          "BCP documentation, testing evidence, recovery procedures and alternate site readiness.",
      },
      {
        icon: "emojione-monotone:cyclone",
        title: "Disaster Recovery (DR)",
        description:
          "DR strategy, RTO/RPO compliance, backup restoration testing and failover mechanisms validation.",
      },
      {
        icon: "iconmind:compliance-outline-regular",
        title: "Audit Trails & Documentation",
        description:
          "Comprehensive audit logs, evidence preservation, regulatory submission documentation and compliance artifacts.",
      },
    ],
  },
];
function page() {
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
    console.log(data);
    setLoading(true);
    try {
      if (!turnstileToken) {
        toast.error("Please complete CAPTCHA verification.");
        return;
      }
      const response = await bseNseAudit({ ...data, turnstileToken });
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
    <div className="bg-black">
      <section className="relative isolate overflow-hidden bg-black py-10 sm:py-12 lg:py-[55px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[100px] top-[100px] z-0 h-[550px] w-[560px] rounded-full bg-[#3B9E6A]/27 blur-[140px] lg:left-[100px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl  px-6 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-5 xl:gap-8">
            <Animation>
              <div className="flex flex-col justify-center lg:py-2 text-center md:text-left">
                {/* Eyebrow */}
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-7 text-[#3B9E6A] text-center lg:text-left">
                  SEBI-Compliant BSE / NSE Audit Services
                </p>

                {/* Heading */}
                <h1 className="mt-5 lg:max-w-[500px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left">
                  BSE / NSE Audit Services for Capital Market Entities
                </h1>

                {/* Description */}
                <p className="mt-4 lg:max-w-[410px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                  Strengthen your regulatory compliance and cybersecurity
                  posture with comprehensive BSE/NSE audits. Assess IT
                  governance, security controls, and operational resilience in
                  alignment with applicable SEBI and exchange requirements.
                </p>

                <ul className="mt-8 grid grid-cols gap-y-4">
                  {[
                    "SEBI Guidelines Aligned",
                    "BSE/NSE Circular Compliant",
                    "Minimal Business Disruption",
                    "Exchange-Ready Reports",
                  ].map((item) => (
                    <li key={item} className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base font-normal tracking-[0.04em] leading-4.5 text-[#D1D1D1]">
                      <span className="mt-[5px] h-[6px] w-[6px] shrink-0 bg-[#3B9E6A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10 text-center lg:text-left">
                  <Link href="/company/contact">
                    <button
                      type="button"
                      className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                    >
                      Request Free Consultation{""}
                      <span className="ml-1.5 text-[17px] leading-none text-[#31435C]">
                        <Icon icon="mdi:arrow-right"></Icon>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </Animation>

            <Animation>
              <div className="w-full rounded-[20px] bg-[#202123] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[32px] lg:p-[30px] xl:p-[40px]">
                <div>
                  <h2 className="text-[18px] font-medium leading-[1.3] text-white sm:text-[19px]">
                    Request BSE/NSE Audit Consultation
                  </h2>

                  <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                    Share your details to discuss your BSE/NSE audit
                    requirements.
                  </p>
                </div>

                {/* Form*/}
                <form className="mt-8" onSubmit={handleSubmit(submit)}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="workEmail"
                        className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                      >
                        Work Email <span className="text-[#E42F23]">*</span>
                      </label>

                      <input
                        id="workEmail"
                        name="workEmail"
                        type="email"
                        placeholder="youremail@gmail.com"
                        className={`h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD] ${errors.email ? "border border-red-500" : ""}`}
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-sm font-normal text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                      >
                        Company Name
                      </label>

                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Company name"
                        className="h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                        {...register("companyName")}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="assessmentType"
                      className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                    >
                      Organization Type{" "}
                      <span className="text-[#F04444]">*</span>
                    </label>

                    <div className="relative">
                      <select
                        id="target"
                        name="target"
                        aria-label="Select Industry Sector"
                        className={`h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD] ${errors.organizationtype ? "border border-red-500" : ""}`}
                        {...register("organizationtype", {
                          required: "Organization type is required",
                        })}
                      >
                        <option value="">Select Organization Type</option>

                        <option value="Stock Broker">Stock Broker</option>
                        <option value="Sub-Broker">Sub-Broker</option>
                        <option value="Stock Broker / Trading">
                          Stock Broker / Trading
                        </option>
                        <option value="Trading Member (TM)">
                          Trading Member (TM)
                        </option>
                        <option value="Clearing Member (CM)">
                          Clearing Member (CM)
                        </option>
                        <option value="Depository Participant (NSDL/CDSL)">
                          Depository Participant (NSDL/CDSL)
                        </option>
                        <option value="Mutual Fund / AMC">
                          Mutual Fund / AMC
                        </option>
                        <option value="Registrar & Transfer Agent (RTA)">
                          Registrar & Transfer Agent (RTA)
                        </option>
                        <option value="Portfolio Management Service (PMS)">
                          Portfolio Management Service (PMS)
                        </option>
                        <option value="Investment Advisor">
                          Investment Advisor
                        </option>
                        <option value="Research Analyst">
                          Research Analyst
                        </option>
                        <option value="Market Infrastructure Institution">
                          Market Infrastructure Institution
                        </option>
                        <option value="FinTech Company">FinTech Company</option>
                        <option value="Other Capital Market Entity">
                          Other Capital Market Entity
                        </option>
                      </select>
                      {errors.organizationtype && (
                        <p className="text-sm font-normal text-red-500">
                          {errors.organizationtype.message}
                        </p>
                      )}

                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777]">
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M1 1L7 7L13 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="mt-7">
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

                  {/* Consent */}
                  <div className="mt-5 flex items-start gap-2.5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-[2px] h-[14px] w-[14px] shrink-0 rounded-[2px] border border-[#A8A8A8] "
                    />

                    <label
                      htmlFor="consent"
                      className="text-[10px] leading-[1.7] text-[#BDBDBD] sm:text-[11px]"
                    >
                      By clicking submit below, you agree to our Terms of Use
                      and Privacy Policy. Additionally, you consent to allow
                      ISECURION Technology & Consulting Pvt. Ltd. to store and
                      process the personal information submitted above to
                      provide you the content requested.
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-8 flex h-[51px] w-full items-center justify-center rounded-[7px] border border-[#4D78C4] bg-gradient-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(39,84,148,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#5282D3] hover:to-[#2B5CA0] active:translate-y-0"
                  >
                    Request BSE / NSE Audit Consultation {""}
                    <span className="ml-1.5 text-[18px] leading-none">
                      <Icon icon="mdi:arrow-right" />
                    </span>
                  </button>
                </form>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-[#07101D] pt-16 text-white sm:pt-18 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Animation>
            <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
              {/* LEFT COLUMN: OVERVIEW */}
              <div className="min-w-0">
                <p className="text-center text-[14px] font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#3B9E6A] sm:text-base lg:text-left">
                  UNDERSTANDING BSE/NSE AUDITS
                </p>

                <h2 className="mx-auto mt-4 max-w-[570px] text-center text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[34px] lg:text-left lg:mx-0 lg:text-[36px] xl:text-[40px]">
                  SEBI-Aligned IT & Cybersecurity Audits for Capital Market
                  Entities
                </h2>

                <div className="mx-auto mt-[22px] max-w-[570px] space-y-5 text-center text-[15px] font-normal leading-[1.72] text-[#D1D1D1] sm:text-[16px] lg:text-left lg:mx-0 lg:text-[16px] xl:text-[17px]">
                  <p>
                    Organizations operating in India's capital markets must
                    address regulatory requirements relating to IT governance,
                    cybersecurity, data protection, and operational resilience.
                  </p>

                  <p>
                    ISECURION's BSE/NSE Audit Services help evaluate your IT
                    infrastructure, cybersecurity controls, governance
                    practices, and operational processes against applicable SEBI
                    guidelines and exchange requirements. Identify compliance
                    gaps, strengthen security controls, and improve readiness
                    for regulatory assessments.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: OBJECTIVES */}
              <div className="min-w-0">
                <p className="mb-7 text-center text-[14px] font-semibold uppercase leading-[18px] text-[#3B9E6A] sm:text-base md:text-left">
                  Key Objectives of a BSE/NSE Audit
                </p>

                <div className="relative">
                  {objectives.map((step, index) => (
                    <AnimatedCard
                      key={index}
                      delay={index * 0.15}
                      className="relative z-10 flex min-w-0 items-start gap-3 pb-7 last:pb-0 sm:gap-5"
                    >
                      {/* ICON BADGE */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#8D8D8D57] text-[#A0AEC0]">
                        <Icon
                          icon={step.icon}
                          className="h-[22px] w-[22px] text-gray-300"
                        />
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="min-w-0 pt-2">
                        <h3 className="text-[15px] font-medium leading-tight text-white sm:text-base">
                          {step.title}
                        </h3>

                        <p className="mt-1 max-w-[370px] text-[13px] leading-relaxed text-[#D1D1D1] sm:text-[14px]">
                          {step.description}
                        </p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
        <Animation>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <div className="max-w-4xl space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#3B9E6A] ">
                INDUSTRIES WE SERVE
              </p>
              <h2 className="text-[#FFFFFF] max-w-[700px]">
                BSE/NSE Audit Support Across Capital Market Entities
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[850px]">
                Support regulatory and cybersecurity requirements across
                organizations operating within India's financial markets.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {industriesWeServe.map((item, index) => (
                  <AnimatedCard
                    delay={index * 0.13}
                    key={index}
                    className={`relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F] py-8  ${index === 7 ? "lg:col-span-2" : ""
                      }`}
                  >
                    <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#3B9E6A]"></div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                        {item.heading}
                      </h3>
                      <span>
                        <Icon
                          icon={item.Icon}
                          className="w-[25px] h-[25px] text-[#3B9E6A]"
                        />
                      </span>
                    </div>
                    <p className="mt-4 text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[300px]">
                      {item.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </Animation>
      </section>

      <section className="bg-[#060D1B] py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[#3B9E6A] sm:text-base">
              WHY BSE/NSE AUDITS MATTER
            </p>

            <h2 className="mt-3 text-2xl font-medium leading-tight text-[#FEFEFE] sm:text-3xl md:text-4xl lg:text-[38px] lg:leading-[1.3] max-w-3xl">
              Mandatory Regulatory Assessment for Market Participants
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-sm font-normal leading-6 text-[#D1D1D1] sm:text-base sm:leading-7">
              A structured audit helps identify security weaknesses, improve
              governance, and maintain the reliability of systems supporting
              financial market operations.
            </p>
          </div>

          {/* Security Domain Cards */}
          <div className="mt-18 grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {whyAuditMatters.map((domain, i) => (
              <AnimatedCard
                delay={i * 0.1}
                key={domain.title}
                className={`flex min-h-[220px] flex-col ${domain.background} p-5 transition-colors duration-300 sm:min-h-[230px] sm:p-6 lg:min-h-[234px] lg:px-[30px] lg:pb-14 lg:pt-12`}
              >
                <Icon
                  icon={domain.icon}
                  className="h-[32px] w-[32px] shrink-0 text-white"
                  aria-hidden="true"
                />

                <div className="pt-25">
                  <h3 className="text-base font-medium leading-7 text-white sm:text-lg ">
                    {domain.title}
                  </h3>

                  <p className="mt-5 max-w-[330px] text-sm leading-[20px] text-[#D1D1D1] sm:text-base sm:leading-[25px]">
                    {domain.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#070D19] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADING */}
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase text-[#3B9E6A] sm:text-base ">
              Compliance & Assurance
            </p>

            <h2 className="mt-2 max-w-[650px] leading-[1.35] text-white ">
              Comprehensive BSE / NSE Audit Coverage
            </h2>

            <p className="mt-3 max-w-[780px] text-base leading-[1.8] text-[#D1D1D1] sm:text-[17px]">
              From governance to operations, we assess the controls, processes
              and systems that keep your exchange secure, resilient and
              compliant.
            </p>
          </div>

          {/* AUDIT CATEGORY CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {auditGroups.map((group, i) => (
              <AnimatedCard
                delay={0.2 * i}
                key={group.id}
                className="rounded-[9px] border border-[#18242F] bg-[#0E1623] p-4 sm:p-5 lg:px-8 lg:py-12"
              >
                {/* CATEGORY HEADING */}
                <div className="mb-8">
                  <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#3B9E6A] sm:text-sm">
                    <span className="h-[0.1px] w-6 bg-[#3B9E6A]" />
                    {group.id}. {group.title}
                  </p>

                  <p className="mt-4 lg:max-w-[500px] text-sm leading-[1.6] text-[#D1D1D1] sm:text-[14px]">
                    {group.description}
                  </p>
                </div>

                {/* CATEGORY ITEMS */}
                <div className="space-y-4 sm:space-y-5">
                  {group.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      {/* ICON */}
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#182331] sm:h-12 sm:w-12">
                        <Icon
                          icon={item.icon}
                          className="text-[15px] text-[#D3DCE8] sm:text-[21px]"
                        />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[12px] font-medium leading-[1.5] text-white sm:text-[15px]">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-[10px] leading-[1.6] text-[#D1D1D1] sm:text-[12px] max-w-[400px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#3B9E6A] uppercase">
                  Our Approach
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[460px]">
                  A Structured, SEBI-Aligned Audit Process
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[600px]">
                  A systematic approach to evaluating controls, identifying
                  compliance gaps, and strengthening your organization's
                  security posture.
                </p>
              </div>
            </RightAnimation>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 lg:mt-20">
            {/* Center line on tablet/desktop; left-side line on mobile */}
            <div className="absolute bottom-5 left-[14px] top-1 w-px bg-gradient-to-b from-[#3B9E6A] to-[#263028] sm:left-1/2 sm:-translate-x-1/2" />

            <div className="relative space-y-8 sm:space-y-8 lg:space-y-9">
              {Steps.map((item, index) => (
                <AnimatedCard
                  delay={index * 0.15}
                  key={item.number}
                  className="relative grid min-w-0 grid-cols-[30px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] sm:gap-x-0"
                >
                  {/* Left content */}

                  <div
                    className={`col-start-2 min-w-0 w-full sm:col-start-1 sm:row-start-1 ${item.side === "left"
                        ? "sm:pr-7 sm:text-right lg:pr-8"
                        : "hidden sm:invisible sm:block sm:pl-7 lg:pl-8"
                      }`}
                  >
                    {item.side === "left" && (
                      <>
                        <p className="text-sm tracking-[0.12em] text-[#3B9E6A] sm:text-[14px]">
                          {item.step}
                        </p>
                        <h3 className="mt-2 sm:mt-3 text-base font-medium leading-5 text-[#FEFEFE] sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-3 sm:mt-5 w-full max-w-[475px] break-words text-sm font-normal leading-[21px] text-[#D1D1D1] sm:text-[15px] sm:leading-[24px]">
                          {item.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Number marker */}
                  <div className="absolute left-0 top-0 z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center border border-[#3B9E6A]/60 bg-[#0A0D0B] text-[11px] font-normal text-[#3B9E6A] sm:relative sm:col-start-2 sm:row-start-1 sm:mx-auto sm:h-[36px] sm:w-[36px]">
                    {item.number}
                  </div>

                  {/* Right content */}

                  <div
                    className={`min-w-0 w-full sm:col-start-3 sm:row-start-1 ${item.side === "right"
                        ? "col-start-2 sm:pl-5 sm:text-left lg:pl-4"
                        : "hidden sm:invisible sm:block sm:pr-5 lg:pr-0"
                      }`}
                  >
                    {item.side === "right" && (
                      <>
                        <p className="text-sm tracking-[0.12em] text-[#3B9E6A] sm:text-[14px]">
                          {item.step}
                        </p>
                        <h3 className="mt-2 sm:mt-3 text-base font-medium leading-5 text-[#FEFEFE] sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-3 sm:mt-5 w-full max-w-[485px] break-words text-sm font-normal leading-[21px] text-[#D1D1D1] sm:text-[15px] sm:leading-[24px]">
                          {item.description}
                        </p>
                      </>
                    )}
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-4 pb-14  bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6  overflow-hidden">
          {/* heading  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#3B9E6A] uppercase">
                  WHAT YOU RECEIVE
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[428px]">
                  Comprehensive Audit Documentation
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                  Get detailed audit reports, compliance insights, and
                  actionable recommendations to support regulatory readiness.
                </p>
              </div>
            </RightAnimation>
          </div>

          <div className="mt-20">
            <Animation>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whatYouReceive.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-3 pl-5 border-l border-[#0F66EA29]"
                  >
                    <div
                      className="w-[45px] h-[45px] flex items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${item.bgColor}` }}
                    >
                      <Icon
                        icon={item.Icon}
                        className="text-xl text-[#FFFFFF]"
                      />
                    </div>
                    <h3 className="mt-3 text-[15px] font-medium text-[#F5F0E8]">
                      {item.heading}
                    </h3>
                    <p className="text-[13px] font-normal leading-[22px] text-[#D1D1D1D6] max-w-full">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 sm:px-10 gap-8 lg:gap-15">
          <div className="w-full space-y-4 text-center lg:sticky lg:top-24 lg:h-fit lg:w-1/2 lg:self-start lg:text-left">
            <LeftAnimation>
              <p className="mt-10 text-sm sm:text-base font-semibold text-[#3B9E6A]">
                WHAT SETS US APART
              </p>
              <h2 className="mt-2 font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF] lg:max-w-[490px]">
                Your Partner in Capital Market Cybersecurity & Compliance
              </h2>
              <p className="mt-4 text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[500px]">
                Combine regulatory understanding, cybersecurity expertise, and
                practical remediation guidance to strengthen your organization's
                audit readiness.
              </p>
            </LeftAnimation>
          </div>

          <div className="flex-1">
            <div className="relative mt-8">
              <div className="absolute top-0 bottom-0 border-l-[2px] border-[#B1B1B114] shadow-[inset_3px_0_4px_0_#FFFFFFCF]"></div>
              <div className="space-y-8 ">
                {whatSetsUsApart.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="flex gap-10"
                  >
                    <div className="relative w-0"></div>
                    <div className="flex gap-10 items-start">
                      <div>
                        <p className="text-base font-semibold text-[#3B9E6A] tracking-[2px]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg text-[#FEFEFE]">{item.title}</h3>
                        <p className="text-sm leading-[23px] text-[#D1D1D1] max-w-[410px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            BSE / NSE Audit Services
          </>
        }
        description="Find answers to common questions about regulatory requirements, audit scope, reporting, and compliance support."
        faqs={BSE_NSE_FAQs}
      />

      <BSE_NSE_CTA />
    </div>
  );
}

export default page;
