"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Animation,
  AnimatedCard,
  LeftAnimation,
  GradientIcon,
  RightAnimation,
} from "../../../components/ui/Animation";
import FAQSection from "../../../components/sections/FAQSection";
import IRDIA_CTA from "../../../components/sections/IRDIA_CTA";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { irda } from "../../../services/api/contact";

interface ContactFormData {
  email: string;
  companyName: string;
  organizationtype: string;
  turnstileToken: string;
}

const objectives = [
  {
    icon: "iconmind:security-champion-outline-bold",
    title: "Protects Policyholder Data",
    description:
      "Secures sensitive personal and financial information from unauthorized access.",
  },
  {
    icon: "hugeicons:legal-01",
    title: "Ensures Regulatory Alignment",
    description:
      "Avoids penalties and demonstrates adherence to IRDAI guidelines.",
  },
  {
    icon: "akar-icons:bug",
    title: "Mitigates Cyber Risks",
    description:
      "Identifies and addresses vulnerabilities in digital platforms.",
  },
  {
    icon: "fa7-regular:handshake-alt",
    title: "Enhances Customer Trust",
    description: "Consumers feel confident knowing their data is protected.",
  },
  {
    icon: "grommet-icons:shield-security",
    title: "Reduces Fraud",
    description:
      "Validates controls to prevent policy, claim, and payment fraud.",
  },
];

const insuranceEcosystem = [
  {
    Icon: "keyline-icons:chart-stock-up",
    heading: "Insurance Companies",
    description:
      "Life, general, health, and other insurance providers operating digital platforms.",
  },
  {
    Icon: "iconmind:marketplace-outline-regular",
    heading: "Insurance Aggregators & Marketplaces",
    description:
      "Platforms supporting online policy comparison, distribution, and issuance.",
  },
  {
    Icon: "fa7-regular:handshake-alt",
    heading: "Third-Party Administrators (TPAs)",
    description:
      "Organizations managing claims, policyholder information, and insurance administration.",
  },
  {
    Icon: "icon-park-outline:preschool",
    heading: "Technology & Platform Providers",
    description:
      "Companies providing software, infrastructure, or digital services to insurers.",
  },
  {
    Icon: "fe:document",
    heading: "Policy Servicing Providers",
    description:
      "Organizations supporting customer servicing, digital transactions, and authentication workflows.",
  },
  {
    Icon: "iconmind:vpc-outline-regular",
    heading: "Cloud & On-Premise Systems",
    description:
      "Insurance systems hosted across cloud, on-premises, and hybrid infrastructure.",
  },
];

const businessImpact = [
  {
    title: "Regulatory Mapping",
    description:
      "Aligning internal policies, procedures, and systems with IRDAI guidelines and circulars.",
    icon: "iconmind:compliance-outline-regular",
    background: "bg-[#080D1B]",
  },
  {
    title: "Data Security Assessment",
    description:
      "Ensuring secure storage, encryption, and transmission of customer and policy data.",
    icon: "akar-icons:data",
    background: "bg-[#08142D]",
  },
  {
    title: "Access Management",
    description:
      "Evaluating user authentication, role-based access, and segregation of duties.",
    icon: "iconmind:broken-access-outline-bold",
    background: "bg-gradient-to-b from-[#7D70F0] to-[#000000A6]",
  },
  {
    title: "Transaction Logging & Audit Trails",
    description:
      "Validating tamper-proof logs for claims, premium collections, and policy issuance.",
    icon: "game-icons:backward-time",
    background: "bg-gradient-to-b from-[#7D70F0] to-[#000000A6]",
  },
  {
    title: "Infrastructure & Network Security",
    description:
      "Reviewing firewalls, servers, cloud infrastructure, and endpoint protection.",
    icon: "fe:sitemap",
    background: "bg-[#071126]",
  },
  {
    title: "Application & API Security",
    description:
      "Testing web and mobile applications, including policy servicing portals.",
    icon: "fa:mobile",
    background: "bg-[#080D1B]",
  },
  {
    title: "Third-Party & Vendor Controls",
    description:
      "Assessing TPAs, technology vendors, and integration partners for compliance.",
    icon: "fa7-regular:handshake-alt",
    background: "bg-[#080D1B]",
  },
  {
    title: "Incident Response & Monitoring",
    description:
      "Evaluating SOC readiness, alerting mechanisms, and forensic capabilities.",
    icon: "akar-icons:bell",
    background: "bg-[#08142D]",
  },
  {
    title: "Business Continuity & Disaster Recovery",
    description:
      "Assessing backup strategies, failover mechanisms, and recovery processes.",
    icon: "lucide:briefcase-business",
    background: "bg-gradient-to-b from-[#7D70F0] to-[#000000A6]",
  },
];

const Steps = [
  {
    number: "01",
    step: "Phase 01",
    title: "Planning & Scoping",
    description:
      "Understand your insurance platforms, data flows, business processes, and applicable regulatory requirements.",
    side: "left",
  },
  {
    number: "02",
    step: "Phase 02",
    title: "Documentation Review",
    description:
      "Examine policies, SOPs, system architecture, and governance documentation.",
    side: "right",
  },
  {
    number: "03",
    step: "Phase 03",
    title: "Technical Assessment",
    description:
      "Review relevant infrastructure, applications, network configurations, and technical security controls.",
    side: "left",
  },
  {
    number: "04",
    step: "Phase 04",
    title: "Control Evaluation",
    description:
      "Evaluate whether technical, administrative, and operational controls are implemented effectively.",
    side: "right",
  },
  {
    number: "05",
    step: "Phase 05",
    title: "Gap Analysis & Risk Prioritization",
    description:
      "Identify weaknesses, assess potential impact, and prioritize remediation actions.",
    side: "left",
  },
  {
    number: "06",
    step: "Phase 06",
    title: "Reporting & Recommendations",
    description:
      "Deliver structured audit findings, compliance observations, and actionable recommendations.",
    side: "right",
  },
  {
    number: "07",
    step: "Phase 07",
    title: "Follow-Up & Verification",
    description:
      "Support remediation tracking and follow-up validation, where included in the engagement.",
    side: "left",
  },
];

const whatYouReceive = [
  {
    title: "ISNP Audit Report",
    description:
      "Detailed findings, risk ratings, and assessment results across in-scope audit areas.",
  },
  {
    title: "Executive Summary",
    description:
      "A concise overview of key observations, compliance gaps, and priorities for leadership.",
  },
  {
    title: "Gap Analysis & Remediation Roadmap",
    description:
      "Actionable guidance to address identified gaps and strengthen security controls.",
  },
  {
    title: "Risk Register",
    description:
      "A prioritized record of identified risks, potential impact, and recommended actions.",
  },
  {
    title: "Evidence Documentation",
    description:
      "Organized supporting records and compliance evidence, as applicable to the engagement.",
  },
  {
    title: "Follow-Up Support",
    description:
      "Guidance for remediation and validation of corrective actions, where agreed.",
  },
];

const securityAreas = [
  {
    heading: "Policyholder Data Protection",
    description:
      "Encryption, secure storage, and data transmission safeguards.",
    Icon: "iconmind:security-champion-outline-bold",
    bgColor: "#0F66EA",
  },
  {
    heading: "Authentication & Access Controls",
    description: "Role-based access, MFA, and privileged account management.",
    Icon: "famicons:finger-print",
    bgColor: "#C8912A",
  },
  {
    heading: "Transaction Integrity",
    description:
      "Controls supporting secure premium payments, claims processing, and policy issuance.",
    Icon: "basil:exchange-solid",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Application & API Security",
    description:
      "Web and mobile application safeguards, API protection, and secure integrations.",
    Icon: "boxicons:file-code",
    bgColor: "#7D70F0",
  },
  {
    heading: "Monitoring & Incident Response",
    description:
      "Security alerts, monitoring processes, and incident investigation readiness.",
    Icon: "boxicons:target",
    bgColor: "#0F66EA",
  },
  {
    heading: "Third-Party & Vendor Risk",
    description:
      "Assessment of TPAs, technology providers, and integration partners.",
    Icon: "akar-icons:people-group",
    bgColor: "#C8912A",
  },
  {
    heading: "Business Continuity & Recovery",
    description:
      "Backup strategies, disaster recovery, and service recovery procedures.",
    Icon: "ic:baseline-loop",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Security Framework Alignment",
    description:
      "Mapping relevant controls to recognized security practices, where applicable.",
    Icon: "charm:certificate",
    bgColor: "#7D70F0",
  },
];

const IRDAI_FAQs = [
  {
    question: "What is IRDAI ISNP Audit?",
    answer:
      "A regulatory audit to ensure digital insurance platforms comply with IRDAI security and operational guidelines. It evaluates information security controls, network infrastructure, data protection mechanisms, and operational processes.",
  },
  {
    question: "Who needs to undergo the audit?",
    answer:
      "Insurance companies, aggregators, TPAs, and technology providers handling sensitive insurance data are required to undergo IRDAI ISNP audits to ensure compliance with regulatory requirements.",
  },
  {
    question: "Does the audit include technical testing?",
    answer:
      "Yes, it includes vulnerability assessment, penetration testing, and application security testing to identify technical vulnerabilities in your digital insurance platforms and infrastructure.",
  },
  {
    question: "Are cloud platforms included?",
    answer:
      "Yes, both on-premise and cloud-based systems are assessed. We evaluate cloud security configurations, data protection controls, and service provider compliance.",
  },
  {
    question: "Can audits be conducted remotely?",
    answer:
      "Yes, with secure access to systems and documentation. We use secure remote assessment methodologies while maintaining the same level of rigor and thoroughness.",
  },
  {
    question: "What deliverables are provided?",
    answer:
      "Audit report, executive summary, gap analysis, risk register, remediation roadmap, and evidence pack ready for IRDAI submission.",
  },
  {
    question: "Do you assist with remediation?",
    answer:
      "Yes, we provide guidance and verification for remediation steps. Our team helps you implement recommended controls and validates their effectiveness through follow-up assessments.",
  },
  {
    question: "Is ISNP audit mandatory?",
    answer:
      "Yes, IRDAI mandates this audit for all regulated digital insurance platforms to ensure policyholder data protection and operational security.",
  },
  {
    question: "What are common findings?",
    answer:
      "Weak access controls, insecure APIs, lack of monitoring, incomplete logging, insufficient encryption, and gaps in incident response procedures are among the most common findings.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Duration depends on platform complexity, number of systems, and organizational size. Typically, audits range from 2-6 weeks depending on scope.",
  },
  {
    question: "Does this audit improve customer trust?",
    answer:
      "Yes, secure platforms build confidence with policyholders and partners. Demonstrating IRDAI compliance strengthens your market reputation and customer relationships.",
  },
  {
    question: "Is ISO 27001 alignment included?",
    answer:
      "Yes, controls are mapped to ISO 27001 best practices where applicable, helping you achieve dual compliance objectives.",
  },
  {
    question: "Are third-party vendors audited?",
    answer:
      "Yes, TPAs and other vendors are included in the scope. We assess third-party risk management controls and vendor security practices.",
  },
  {
    question: "Can multiple platforms be audited together?",
    answer:
      "Yes, scalable frameworks allow multi-platform audits. This is often more efficient for organizations with multiple digital insurance systems.",
  },
  {
    question: "Why choose ISECURION?",
    answer:
      "Our combination of regulatory expertise, cybersecurity skill, and practical guidance ensures comprehensive, actionable, and reliable audit outcomes that help you operate securely and confidently.",
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
    setLoading(true);
    try {
      if (!turnstileToken) {
        toast.error("Please complete CAPTCHA verification.");
        return;
      }
      const response = await irda({ ...data, turnstileToken });
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
          className="pointer-events-none absolute -left-[100px] top-[100px] z-0 h-[550px] w-[560px] rounded-full bg-[#7D70F0]/28 blur-[140px] lg:left-[100px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-5 xl:gap-8">
            <Animation>
              <div className="flex flex-col justify-center lg:py-2 text-center md:text-left">
                {/* Eyebrow */}
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-7 text-[#7D70F0] text-center lg:text-left lg:max-w-[410px]">
                  IRDAI COMPLIANCE • INSURANCE CYBERSECURITY • ISNP AUDIT
                </p>

                {/* Heading */}
                <h1 className="mt-5 lg:max-w-[500px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left">
                  IRDAI ISNP Audit Services for Digital Insurance Platforms
                </h1>

                {/* Description */}
                <p className="mt-4 lg:max-w-[390px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                  Strengthen the security and compliance of your digital
                  insurance ecosystem with a structured IRDAI ISNP audit. Assess
                  cybersecurity controls, protect policyholder data, and improve
                  operational resilience across your insurance platforms.
                </p>

                <ul className="mt-8 grid grid-cols gap-y-4">
                  {[
                    "IRDAI Regulatory Alignment",
                    "Policyholder Data Protection",
                    "Digital Platform Security",
                    "Audit Readiness & Reporting",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base font-normal tracking-[0.04em] leading-4.5 text-[#D1D1D1]"
                    >
                      <span className="mt-[5px] h-[6px] w-[6px] shrink-0 bg-[#7D70F0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10 text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                  >
                    Request Consultation{""}
                    <span className="ml-1.5 text-[17px] leading-none text-[#31435C]">
                      <Icon icon="mdi:arrow-right"></Icon>
                    </span>
                  </button>
                </div>
              </div>
            </Animation>

            <Animation>
              <div className="w-full rounded-[20px] bg-[#202123] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[32px] lg:p-[30px] xl:p-[40px]">
                <div>
                  <h2 className="text-[18px] font-medium leading-[1.3] text-white sm:text-[19px]">
                    Request IRDAI ISNP Audit Consultation
                  </h2>

                  <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                    Discuss your IRDAI ISNP audit requirements with our experts.
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
                        defaultValue=""
                        aria-label="Select Industry Sector"
                        {...register("organizationtype", {
                          required: "Organization type is required",
                        })}
                        className={`h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none  ${errors.organizationtype ? "border border-red-500" : ""}`}
                      >
                        <option value="">Select Organization Type</option>

                        <option value="Life Insurance Company">
                          Life Insurance Company
                        </option>
                        <option value="Non-Life Insurance Company">
                          Non-Life Insurance Company
                        </option>
                        <option value="Health Insurance Company">
                          Health Insurance Company
                        </option>
                        <option value="General Insurance Company">
                          General Insurance Company
                        </option>
                        <option value="Insurance Aggregator/Marketplace">
                          Insurance Aggregator/Marketplace
                        </option>
                        <option value="Third-Party Administrator(TPA)">
                          Third-Party Administrator(TPA)
                        </option>
                        <option value="Technology Provider for Insurance">
                          Technology Provider for Insurance
                        </option>
                        <option value="Policy Servicing Provider">
                          Policy Servicing Provider
                        </option>
                        <option value="Other">Other</option>
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
                    className={`mt-8 flex h-[51px] w-full items-center justify-center rounded-[7px] border border-[#4D78C4] bg-gradient-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(39,84,148,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#5282D3] hover:to-[#2B5CA0] active:translate-y-0 ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                  >
                    {loading
                      ? "Request sending"
                      : "Request IRDAI Audit Consultation"}
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
                <p className="text-center text-[14px] font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#7D70F0] sm:text-base lg:text-left">
                  UNDERSTANDING IRDAI ISNP AUDITS
                </p>

                <h2 className="mx-auto mt-4 max-w-[570px] text-center text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[34px] lg:text-left lg:mx-0 lg:text-[36px] xl:text-[40px]">
                  Protecting Policyholder Data in the Digital Insurance
                  Ecosystem
                </h2>

                <div className="mx-auto mt-[22px] max-w-[535px] space-y-5 text-center text-[15px] font-normal leading-[1.72] text-[#D1D1D1] sm:text-[16px] lg:text-left lg:mx-0 lg:text-[16px] xl:text-[17px]">
                  <p>
                    Digital insurance platforms support online policy issuance,
                    premium payments, claims processing, and customer servicing.
                    These interconnected systems handle sensitive policyholder
                    information and require effective security and operational
                    controls.
                  </p>

                  <p className="max-w-[]">
                    An IRDAI Information Security and Network Platform (ISNP)
                    audit evaluates relevant security controls, infrastructure,
                    applications, data protection practices, and operational
                    processes against applicable regulatory requirements. It
                    helps organizations identify gaps, strengthen safeguards,
                    and improve audit readiness.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: OBJECTIVES */}
              <div className="min-w-0">
                <p className="mb-7 text-center text-[14px] font-semibold uppercase leading-[18px] text-[#7D70F0] sm:text-base md:text-left">
                  Why IRDAI ISNP Audits Are Essential
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
              <p className="text-sm sm:text-base font-semibold text-[#7D70F0] ">
                INSURANCE ECOSYSTEM COVERAGE
              </p>
              <h2 className="text-[#FFFFFF] max-w-[700px]">
                IRDAI Audit Support Across Insurance Organizations
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[750px]">
                Support security and compliance needs across organizations
                operating digital insurance services.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {insuranceEcosystem.map((item, index) => (
                  <AnimatedCard
                    delay={index * 0.13}
                    key={index}
                    className={`relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F] py-8  ${
                      index === 7 ? "lg:col-span-2" : ""
                    }`}
                  >
                    <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#7D70F0]"></div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                        {item.heading}
                      </h3>
                      <span>
                        <Icon
                          icon={item.Icon}
                          className="w-[25px] h-[25px] text-[#7D70F0]"
                        />
                      </span>
                    </div>
                    <p className="mt-4 text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[250px]">
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
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase text-[#7D70F0] sm:text-base">
              Our Services
            </p>

            <h2 className="">
              Comprehensive IRDAI ISNP Audit <br /> Framework
            </h2>

            <p className="mx-auto mt-4 text-[14px] leading-5 text-[#D1D1D1] sm:text-[17px] sm:leading-[26px]">
              Evaluate the technical, administrative, and operational controls
              supporting secure digital insurance operations.
            </p>
          </div>

          {/* Security Domain Cards */}
          <div className="mt-18 grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {businessImpact.map((domain, i) => (
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
                  <h3 className="text-base font-medium leading-7 text-white sm:text-lg max-w-[230px]">
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

      <section className="relative w-full overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#7D70F0] uppercase">
                  Our Approach
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[518px]">
                  A Structured, Phased IRDAI ISNP Audit Process
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                  A systematic assessment approach to evaluate controls,
                  identify gaps, and support practical security improvements.
                </p>
              </div>
            </RightAnimation>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 lg:mt-20">
            {/* Center line on tablet/desktop; left-side line on mobile */}
            <div className="absolute bottom-5 left-[14px] top-1 w-px bg-gradient-to-b from-[#7D70F0] to-[#263028] sm:left-1/2 sm:-translate-x-1/2" />

            <div className="relative space-y-8 sm:space-y-8 lg:space-y-9">
              {Steps.map((item, index) => (
                <AnimatedCard
                  delay={index * 0.15}
                  key={item.number}
                  className="relative grid min-w-0 grid-cols-[30px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] sm:gap-x-0"
                >
                  {/* Left content */}

                  <div
                    className={`col-start-2 min-w-0 w-full sm:col-start-1 sm:row-start-1 ${
                      item.side === "left"
                        ? "sm:pr-7 sm:text-right lg:pr-8"
                        : "hidden sm:invisible sm:block sm:pl-7 lg:pl-8"
                    }`}
                  >
                    {item.side === "left" && (
                      <>
                        <p className="text-sm tracking-[0.12em] text-[#7D70F0] sm:text-[14px]">
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
                  <div className="absolute left-0 top-0 z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center border border-[#7D70F0]/60 bg-[#0A0D0B] text-[11px] font-normal text-[#7D70F0] sm:relative sm:col-start-2 sm:row-start-1 sm:mx-auto sm:h-[36px] sm:w-[36px]">
                    {item.number}
                  </div>

                  {/* Right content */}

                  <div
                    className={`min-w-0 w-full sm:col-start-3 sm:row-start-1 ${
                      item.side === "right"
                        ? "col-start-2 sm:pl-5 sm:text-left lg:pl-4"
                        : "hidden sm:invisible sm:block sm:pr-5 lg:pr-0"
                    }`}
                  >
                    {item.side === "right" && (
                      <>
                        <p className="text-sm tracking-[0.12em] text-[#7D70F0] sm:text-[14px]">
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

      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 sm:px-10 gap-8 lg:gap-15">
          <div className="w-full space-y-4 text-center lg:sticky lg:top-24 lg:h-fit lg:w-1/2 lg:self-start lg:text-left">
            <LeftAnimation>
              <p className="text-sm sm:text-base font-semibold text-[#7D70F0]">
                WHAT YOU RECEIVE
              </p>
              <h2 className="mt-2 font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF] lg:max-w-[490px]">
                Comprehensive Audit Reports & Actionable Insights
              </h2>
              <p className="mt-4 text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[500px]">
                Receive structured documentation to support regulatory
                readiness, management decisions, and ongoing security
                improvements.
              </p>
            </LeftAnimation>
          </div>

          <div className="flex-1">
            <div className="relative mt-8">
              <div className="absolute top-0 bottom-0 border-l-[2px] border-[#B1B1B114] shadow-[inset_3px_0_4px_0_#FFFFFFCF]"></div>
              <div className="space-y-8 ">
                {whatYouReceive.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="flex gap-10"
                  >
                    <div className="relative w-0"></div>
                    <div className="flex gap-10 items-start">
                      <div>
                        <p className="text-base font-semibold text-[#7D70F0] tracking-[2px]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg text-[#FEFEFE]">{item.title}</h3>
                        <p className="text-sm leading-[23px] text-[#D1D1D1] max-w-[400px]">
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

      <section className="w-full pt-4 pb-14  bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6  overflow-hidden">
          {/* heading  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#7D70F0] uppercase">
                  SECURITY FOCUS AREAS
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                  Strengthen the Controls Protecting Insurance Platforms
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                  Comprehensive security improvements across all critical
                  insurance platform components.
                </p>
              </div>
            </RightAnimation>
          </div>

          <div className="mt-20">
            <Animation>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityAreas.map((item, index) => (
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

      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            IRDAI ISNP Audit
          </>
        }
        description="Common questions about IRDAI ISNP audits and insurance cybersecurity compliance."
        faqs={IRDAI_FAQs}
      />
      <IRDIA_CTA />
    </div>
  );
}

export default page;
