import React from "react";
import { Icon } from "@iconify/react";
import {
  Animation,
  AnimatedCard,
  LeftAnimation,
  GradientIcon,
  RightAnimation,
} from "../../../components/ui/Animation";
import FAQSection from "../../../components/sections/FAQSection";
import RBI_CTA from "../../../components/sections/RBI_CTA";

const objectives = [
  {
    icon: "iconmind:security-champion-outline-bold",
    title: "Protect Customer Trust",
    description:
      "Financial data is sensitive. Ensuring its protection helps maintain confidence in your institution.",
  },
  {
    icon: "akar-icons:bug",
    title: "Mitigate Operational Risk",
    description:
      "Identify and address vulnerabilities that could disrupt operations.",
  },
  {
    icon: "hugeicons:legal-01",
    title: "Regulatory Compliance",
    description:
      "Avoid penalties, adverse regulatory observations, and reputational damage.",
  },
  {
    icon: "grommet-icons:shield-security",
    title: "Strengthen Security Posture",
    description: "Build proactive defenses against cyberattacks and fraud.",
  },
  {
    icon: "fa7-regular:handshake-alt",
    title: "Stakeholder Confidence",
    description:
      "Demonstrate to regulators, investors, and customers that cybersecurity is a priority.",
  },
];

const organizationsWeSupport = [
  {
    Icon: "boxicons:bank",
    heading: "Scheduled Commercial Banks",
    description:
      "Public, private, and regional banks managing customer accounts and financial transactions.",
  },
  {
    Icon: "fa7-regular:handshake-alt",
    heading: "Cooperative Banks",
    description:
      "Urban and other cooperative banking institutions seeking to assess security controls and regulatory readiness.",
  },
  {
    Icon: "ic:round-business",
    heading: "Non-Banking Financial Companies (NBFCs)",
    description:
      "Organizations providing lending, financing, and other regulated financial services.",
  },
  {
    Icon: "boxicons:bank",
    heading: "Small Finance & Payment Banks",
    description:
      "Institutions supporting digital banking, deposits, and payment services.",
  },
  {
    Icon: "boxicons:scan-search",
    heading: "FinTech Companies",
    description:
      "Financial technology organizations providing regulated or bank-connected digital services.",
  },
  {
    Icon: "iconmind:marketplace-outline-regular",
    heading: "Technology Vendors & Third Parties",
    description:
      "Ensuring systems that support financial institutions are secure and compliant.",
  },
];

const ourServices = [
  {
    title: "Governance & Policy Review",
    description:
      "Evaluate cybersecurity strategy, IT policies, and governance mechanisms aligned with RBI expectations.",
    icon: "iconmind:compliance-outline-regular",
    background: "bg-[#080D1B]",
  },
  {
    title: "Network & Infrastructure Security",
    description:
      "Assess firewalls, routers, network segmentation, VPNs, and cloud infrastructure.",
    icon: "fe:sitemap",
    background: "bg-[#08142D]",
  },
  {
    title: "Application Security",
    description:
      "Test core banking systems, web apps, mobile banking apps, and APIs for vulnerabilities.",
    icon: "fa:mobile",
    background: "bg-gradient-to-b from-[#3B9E6A] to-[#000000A6]",
  },
  {
    title: "Identity & Access Management (IAM)",
    description:
      "Review user roles, privileged account management, multi-factor authentication, and segregation of duties.",
    icon: "famicons:finger-print",
    background: "bg-gradient-to-b from-[#3B9E6A] to-[#000000A6]",
  },
  {
    title: "Data Security & Encryption",
    description:
      "Validate encryption of data at rest, in transit, and backups.",
    icon: "iconmind:broken-access-outline-bold",
    background: "bg-[#071126]",
  },
  {
    title: "Incident Response & Monitoring",
    description:
      "Assess Security Operations Center (SOC), SIEM systems, alerts, and response plans.",
    icon: "akar-icons:bell",
    background: "bg-[#080D1B]",
  },
  {
    title: "Business Continuity & Disaster Recovery",
    description:
      "Ensure documented and tested recovery plans for uninterrupted services.",
    icon: "lucide:briefcase-business",
    background: "bg-[#080D1B]",
  },
  {
    title: "Third-Party & Vendor Risk Management",
    description:
      "Evaluate vendor compliance and contractual security obligations.",
    icon: "fa7-regular:handshake-alt",
    background: "bg-[#08142D]",
  },
  {
    title: "Regulatory Mapping",
    description:
      "Map controls and findings to relevant RBI circulars, notifications, and compliance frameworks.",
    icon: "gravity-ui:list-timeline",
    background: "bg-gradient-to-b from-[#3B9E6A] to-[#000000A6]",
  },
];

const Steps = [
  {
    number: "01",
    step: "Phase 01",
    title: "Planning & Scoping",
    description:
      "Define audit objectives, understand infrastructure and operations, and identify applicable regulatory requirements.",
    side: "left",
  },
  {
    number: "02",
    step: "Phase 02",
    title: "Documentation Review",
    description:
      "Examine IT policies, SOPs, governance documents, and relevant security procedures.",
    side: "right",
  },
  {
    number: "03",
    step: "Phase 03",
    title: "Technical Assessment",
    description:
      "Review infrastructure, applications, configurations, and technical controls within the agreed scope.",
    side: "left",
  },
  {
    number: "04",
    step: "Phase 04",
    title: "Control Validation",
    description:
      "Evaluate whether security controls are implemented and operating effectively.",
    side: "right",
  },
  {
    number: "05",
    step: "Phase 05",
    title: "Gap Analysis & Risk Assessment",
    description:
      "Identify weaknesses, assess potential impact, and prioritize remediation actions.",
    side: "left",
  },
  {
    number: "06",
    step: "Phase 06",
    title: "Reporting & Recommendations",
    description:
      "Prepare an audit report with findings, risk ratings, supporting evidence, and actionable recommendations.",
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
    title: "Comprehensive Audit Report",
    description:
      "Detailed assessment results, control observations, compliance gaps, and risk ratings.",
  },
  {
    title: "Executive Summary",
    description:
      "A concise overview of key findings and priorities for senior management.",
  },
  {
    title: "Gap Analysis & Remediation Roadmap",
    description:
      "Practical recommendations and a prioritized plan to address identified gaps.",
  },
  {
    title: "Risk Register",
    description:
      "A structured record of risks, potential impact, and recommended actions.",
  },
  {
    title: "Compliance Evidence Pack",
    description:
      "Organized supporting documentation and evidence for applicable regulatory reviews.",
  },
  {
    title: "Follow-Up Support",
    description:
      "Remediation tracking and verification support, where included in the engagement.",
  },
];

const securityAreas = [
  {
    heading: "Network Security",
    description:
      "Firewalls, segmentation, VPNs, infrastructure hardening, and secure configurations.",
    Icon: "fe:sitemap",
    bgColor: "#0F66EA",
  },
  {
    heading: "Application & API Security",
    description:
      "Core banking systems, digital applications, APIs, and secure integrations.",
    Icon: "boxicons:message-bubble-code",
    bgColor: "#C8912A",
  },
  {
    heading: "Identity & Access Management",
    description:
      "Role-based access, MFA, privileged accounts, and access governance.",
    Icon: "iconmind:broken-access-outline-bold",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Data Protection & Encryption",
    description:
      "Sensitive data safeguards, encryption, key management, and backup protection.",
    Icon: "boxicons:check-shield",
    bgColor: "#7D70F0",
  },
  {
    heading: "Monitoring & Incident Response",
    description:
      "SOC readiness, SIEM, threat detection, alerting, and incident handling.",
    Icon: "boxicons:target",
    bgColor: "#0F66EA",
  },
  {
    heading: "Third-Party & Vendor Risk",
    description:
      "Vendor controls, outsourcing arrangements, contractual obligations, and integrations.",
    Icon: "akar-icons:people-group",
    bgColor: "#C8912A",
  },
  {
    heading: "Business Continuity & Recovery",
    description:
      "Backup, failover mechanisms, recovery plans, and resilience testing.",
    Icon: "ic:baseline-loop",
    bgColor: "#3B9E6A",
  },
  {
    heading: "ISO 27001 Alignment",
    description: "Controls mapped to international security best practices.",
    Icon: "charm:certificate",
    bgColor: "#7D70F0",
  },
];

const services = [
  {
    title: "Regulatory Expertise",
    description:
      "Deep understanding of RBI circulars, notifications, and compliance requirements.",
  },
  {
    title: "Technical Proficiency",
    description:
      "Hands-on experience in cybersecurity, penetration testing, and IT audits.",
  },
  {
    title: "Actionable Recommendations",
    description: "Practical guidance, not just theoretical checklists.",
  },
  {
    title: "End-to-End Audit Support",
    description:
      "Support planning, assessment, reporting, and remediation follow-up within the agreed scope.",
  },
  {
    title: "CERT-In Empanelled Auditors",
    description:
      "Certified auditors with proven experience in financial sector audits.",
  },
  {
    title: "Financial Sector Experience",
    description: "Extensive work with banks, NBFCs, and fintech platforms.",
  },
  {
    title: "Real-World Focus",
    description:
      "We ensure your organization is not only compliant but secure, resilient, and trusted.",
  },
  {
    title: "Regional Coverage",
    description:
      "Support organizations across India and relevant South Asian markets.",
  },
];

const RBI_FAQs = [
  {
    question: "What is RBI IS Audit?",
    answer:
      "It is a regulatory audit that assesses an institution's cybersecurity, IT governance, and risk management framework in alignment with RBI guidelines. The audit evaluates technical controls, policies, procedures, and operational practices to ensure financial institutions are secure and compliant.",
  },
  {
    question: "Who is required to undergo the audit?",
    answer:
      "Banks, NBFCs, payment banks, small finance banks, and fintechs regulated by the RBI are required to undergo regular IS audits to ensure compliance with RBI's cybersecurity and IT governance requirements.",
  },
  {
    question: "How often should the audit be conducted?",
    answer:
      "Banks, NBFCs, payment banks, small finance banks, and fintechs regulated by the RBI are required to undergo regular IS audits to ensure compliance with RBI's cybersecurity and IT governance requirements.",
  },
  {
    question: "Does the audit include technical testing?",
    answer:
      "Yes, including vulnerability assessments, penetration testing, and application security reviews. We conduct thorough technical assessments of core banking systems, mobile apps, APIs, and infrastructure.",
  },
  {
    question: "Can audits be conducted remotely?",
    answer:
      "Yes, with secure access to systems and documentation. We use secure remote assessment methodologies while maintaining audit rigor and ensuring no compromise on quality or coverage.",
  },
  {
    question: "What deliverables will I receive?",
    answer:
      "Audit report, executive summary, gap analysis, risk register, remediation roadmap, and compliance evidence pack ready for RBI submission and board presentations.",
  },
  {
    question: "Does ISECURION provide remediation support?",
    answer:
      "Yes, we help implement and verify all remediation actions. Our team provides guidance on implementing recommended controls and conducts follow-up assessments to ensure fixes are effective.",
  },
  {
    question: "Are audits aligned with ISO 27001?",
    answer:
      "Yes, where applicable, controls are mapped to international security best practices including ISO 27001, helping you achieve dual compliance objectives.",
  },
  {
    question: "What are common audit findings?",
    answer:
      "Weak access management, unpatched systems, insufficient monitoring, gaps in policies, inadequate incident response procedures, and incomplete vendor risk assessments are among the most common findings.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Duration depends on the size and complexity of the organization. Typically, audits range from 3-8 weeks depending on the number of systems, branches, and scope of assessment.",
  },
  {
    question: "Does this audit improve customer trust?",
    answer:
      "Absolutely. Demonstrating compliance and security strengthens client confidence, builds stakeholder trust, and enhances your institution's reputation in the market.",
  },
  {
    question: "Is third-party vendor risk included?",
    answer:
      "Yes, vendor controls and integrations are assessed. We evaluate third-party risk management frameworks, vendor contracts, and security practices of critical service providers.",
  },
  {
    question: "Can multiple branches or entities be audited together?",
    answer:
      "Yes, scalable frameworks allow multi-entity assessments. This is particularly useful for banks with multiple branches or banking groups with different entities.",
  },
  {
    question: "How is business continuity assessed?",
    answer:
      "We evaluate disaster recovery plans, backup strategies, and failover mechanisms. This includes reviewing documented procedures, testing frequency, recovery time objectives (RTO), and recovery point objectives (RPO).",
  },
  {
    question: "Why choose ISECURION for RBI IS Audit?",
    answer:
      "Our combination of regulatory expertise, technical skill, and practical recommendations ensures comprehensive, actionable, and reliable audit outcomes. We don't just help you comply - we help you operate securely and build resilience against cyber threats.",
  },
  {
    question: "What RBI circulars are covered in the audit?",
    answer:
      "We cover all relevant RBI circulars including those on Cyber Security Framework, IT Governance, Outsourcing guidelines, Digital Payment Security Controls, and other applicable notifications based on your institution type.",
  },
  {
    question: "Do you assess cloud banking infrastructure?",
    answer:
      "Yes, we assess both on-premise and cloud-based banking infrastructure, including hybrid environments. Our audits cover cloud security configurations, data protection, access controls, and compliance with RBI's guidelines on cloud adoption.",
  },
  {
    question: "Are mobile banking applications included?",
    answer:
      "Yes, mobile banking and payment applications are thoroughly assessed for security vulnerabilities, authentication mechanisms, data encryption, session management, and compliance with secure coding practices.",
  },
];

function page() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-black py-10 sm:py-12 lg:py-[55px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[100px] top-[100px] z-0 h-[550px] w-[560px] rounded-full bg-[#3B9E6A]/28 blur-[140px] lg:left-[100px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-5 xl:gap-8">
            <Animation>
              <div className="flex flex-col justify-center lg:py-2 text-center md:text-left">
                {/* Eyebrow */}
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-7 text-[#3B9E6A] text-center lg:text-left lg:max-w-[410px]">
                  RBI Compliance • Banking Security
                </p>

                {/* Heading */}
                <h1 className="mt-5 lg:max-w-[450px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left">
                  RBI Information Security (IS) Audit Services for Financial
                  Institutions
                </h1>

                {/* Description */}
                <p className="mt-4 lg:max-w-[400px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                  Strengthen your institution’s cybersecurity and regulatory
                  readiness with a comprehensive RBI Information Security Audit.
                  Evaluate IT controls, protect sensitive financial data, &
                  improve resilience across banking and digital financial
                  services.
                </p>

                <ul className="mt-8 grid grid-cols gap-y-4 ">
                  {[
                    "RBI Regulatory Alignment",
                    "Financial Data Protection",
                    "IT & Cybersecurity Assessment",
                    "Audit Readiness & Reporting",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base font-normal tracking-[0.04em] leading-4.5 text-[#D1D1D1]"
                    >
                      <span className="mt-[5px] h-[6px] w-[6px] shrink-0 bg-[#3B9E6A]" />
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
                    Request RBI IS Audit Consultation
                  </h2>

                  <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                    Discuss your RBI IS audit requirements with our experts.
                  </p>
                </div>

                {/* Form*/}
                <form className="mt-8">
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
                        required
                        className="h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                      />
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
                        required
                        aria-label="Select Industry Sector"
                        className="h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                      >
                        <option selected>Select Organization Type</option>

                        <option>Scheduled Commercial Bank</option>
                        <option>Cooperative Bank / Urban Co-op</option>
                        <option>Non-Banking Financial Company (NBFC)</option>
                        <option>Small Finance Bank</option>
                        <option>Payment Bank</option>
                        <option>FinTech Company</option>
                        <option>Technology Vendor for Banking</option>
                        <option>Other Financial Institution</option>
                      </select>

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
                      <span className="text-[13px] leading-5 text-[#E7E7E7]">
                        Captcha
                      </span>

                      <span className="flex h-[32px] min-w-[127px] items-center justify-center rounded-[5px] bg-[#3B9E6AC9] px-5 text-[13px] font-medium tracking-wide text-white">
                        ZRLD9Y
                      </span>
                    </div>

                    <input
                      id="captcha"
                      name="captcha"
                      type="text"
                      placeholder="Enter the text shown above"
                      required
                      className="mt-3 h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                    />
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
                    Request RBI Audit Consultation{""}
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
                  UNDERSTANDING RBI IS AUDITS
                </p>

                <h2 className="mx-auto mt-4 max-w-[570px] text-center text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[34px] lg:text-left lg:mx-0 lg:text-[36px] xl:text-[40px]">
                  Secure India’s Digital Banking Landscape
                </h2>

                <div className="mx-auto mt-[22px] max-w-[525px] space-y-5 text-center text-[15px] font-normal leading-[1.72] text-[#D1D1D1] sm:text-[16px] lg:text-left lg:mx-0 lg:text-[16px] xl:text-[17px]">
                  <p>
                    Digital banking, online payments, and financial technology
                    services rely on interconnected systems that handle
                    sensitive customer and financial information. Effective
                    information security controls are essential to protect these
                    systems from cyber threats and operational disruption.
                  </p>

                  <p className="max-w-[]">
                    An RBI Information Security Audit assesses an organization’s
                    information security governance, technical safeguards, and
                    operational controls against applicable RBI requirements. It
                    helps identify weaknesses, prioritize remediation, and
                    strengthen audit readiness.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: OBJECTIVES */}
              <div className="min-w-0">
                <p className="mb-7 text-center text-[14px] font-semibold uppercase leading-[18px] text-[#3B9E6A] sm:text-base md:text-left">
                  Why RBI IS Audits Are Critical
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
                ORGANIZATIONS WE SUPPORT
              </p>
              <h2 className="text-[#FFFFFF] max-w-[700px]">
                RBI Audit Support Across the Financial Sector
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[750px]">
                Support information security and compliance needs across
                banking, lending, payments, and digital financial services.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {organizationsWeSupport.map((item, index) => (
                  <AnimatedCard
                    delay={index * 0.13}
                    key={index}
                    className={`relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F] py-8  ${
                      index === 7 ? "lg:col-span-2" : ""
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
                    <p className="mt-4 text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[280px]">
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
            <p className="mb-2 text-sm font-semibold uppercase text-[#3B9E6A] sm:text-base">
              Our Services
            </p>

            <h2 className="">Comprehensive RBI IS Audit Framework</h2>

            <p className="mx-auto mt-4 text-[14px] leading-5 text-[#D1D1D1] sm:text-[17px] sm:leading-[26px]">
              Complete coverage of all critical areas ensuring regulatory
              compliance and cybersecurity excellence.
            </p>
          </div>

          {/* Security Domain Cards */}
          <div className="mt-18 grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {ourServices.map((domain, i) => (
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
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#3B9E6A] uppercase">
                  Our Approach
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[518px]">
                  Proven, Structured RBI IS Audit Methodology
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                  A systematic assessment journey to evaluate controls, identify
                  gaps, and support meaningful security improvements.
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
                    className={`col-start-2 min-w-0 w-full sm:col-start-1 sm:row-start-1 ${
                      item.side === "left"
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
                    className={`min-w-0 w-full sm:col-start-3 sm:row-start-1 ${
                      item.side === "right"
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

      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 sm:px-10 gap-8 lg:gap-15">
          <div className="w-full lg:w-[50%] space-y-4 text-center lg:text-left">
            <LeftAnimation>
              <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
                WHAT YOU RECEIVE
              </p>
              <h2 className="mt-2 font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF] lg:max-w-[490px]">
                Complete Audit Documentation & Actionable Insights
              </h2>
              <p className="mt-4 text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[500px]">
                Receive structured audit documentation to support regulatory
                readiness, management decisions, and continuous security
                improvement.
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
                        <p className="text-base font-semibold text-[#3B9E6A] tracking-[2px]">
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
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#3B9E6A] uppercase">
                  SECURITY FOCUS AREAS
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                  Strengthen the Controls Protecting Financial Services
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                  Comprehensive security improvements across all critical
                  banking infrastructure components.
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

      <section className="relative bg-gradient-to-b from-[#1D3126] to-[#090B21]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="px-5 py-9 sm:px-8 sm:py-11 lg:px-9 lg:py-[66px]">
            <div className="relative grid grid-cols-1 gap-9 lg:grid-cols-[0.9fr_1.9fr] lg:gap-12 xl:grid-cols-[0.95fr_2fr] xl:gap-[52px]">
              {/* LEFT CONTENT */}
              <LeftAnimation>
                <div className="min-w-0 text-center lg:text-left">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.01em] text-[#3B9E6A] sm:text-base">
                    Our Differentiators
                  </p>

                  <h2 className="mt-4 lg:max-w-[330px] leading-[1.35] tracking-[-0.025em] text-[#D1D1D1]">
                    Why Choose ISECURION for RBI IS Audits
                  </h2>

                  <p className="mt-6 lg:max-w-[300px] text-base leading-[1.5] text-[#D1D1D1] sm:text-[17px]">
                    A trusted RBI IS Audit partner combining regulatory
                    expertise with cybersecurity excellence.
                  </p>
                </div>
              </LeftAnimation>

              {/* RIGHT SERVICE LIST */}
              <div className="min-w-0">
                <div className="">
                  {services.map((service, index) => (
                    <AnimatedCard
                      key={service.title}
                      className="grid grid-cols-[18px_minmax(0,1fr)] gap-x-3 gap-y-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[18px_minmax(0,1fr)] sm:gap-x-3 sm:py-6 lg:grid-cols-[18px_minmax(0,1.1fr)_minmax(0,1.25fr)] lg:gap-x-3 lg:gap-y-0 lg:py-[23px]"
                    >
                      <span className="pt-[3px] text-[14px] font-normal text-[#3B9E6A]">
                        {index + 1}.
                      </span>

                      <h3 className="min-w-0 text-[14px] font-medium leading-[1.5] text-white sm:text-base lg:pr-2 max-w-[300px]">
                        {service.title}
                      </h3>

                      <p className="col-start-2 min-w-0 text-[13px] leading-[1.7] text-[#D1D1D1] sm:text-[14px] lg:col-start-auto lg:pl-1 max-w-[368px]">
                        {service.description}
                      </p>
                    </AnimatedCard>
                  ))}
                </div>
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
            RBI IS Audit
          </>
        }
        description="Common questions about RBI Information Security audits and banking cybersecurity compliance."
        faqs={RBI_FAQs}
      />
      <RBI_CTA />
    </div>
  );
}

export default page;
