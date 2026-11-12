"use client";
import React, { useRef, useState } from "react";
import WordReveal, {
  Animation,
  AnimatedCard,
  LeftAnimation,
  GradientIcon,
  RightAnimation,
} from "../../../components/ui/Animation";
import { Icon } from "@iconify/react";
import Image from "next/image";
import dots from "../../../assets/services/Dots.png";
import FAQSection from "../../../components/sections/FAQSection";
import CICRA_CTA from "../../../components/sections/CICRA_CTA";
import { useForm } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { cicraAudit } from "../../../services/api/contact";
import { toast } from "react-toastify";
import Link from "next/link";

interface ContactFormData {
  email: string;
  companyName: string;
  industry: string;
  turnstileToken: string;
}

const objectives = [
  {
    icon: "famicons:contract",
    title: "Identify Critical Assets",
    description:
      "Map essential systems, sensitive data, infrastructure, and operational dependencies.",
  },
  {
    icon: "akar-icons:bug",
    title: "Assess Threat Impact",
    description:
      "Evaluate threats, vulnerabilities, potential business impact, and risk severity.",
  },
  {
    icon: "gravity-ui:list-timeline",
    title: "Evaluate Security & Compliance",
    description:
      "Review existing security controls and map findings to applicable regulatory requirements.",
  },
  {
    icon: "iconmind:bias-audit-outline-regular",
    title: "Prioritize Risk Reduction",
    description:
      "Develop an actionable roadmap to address critical security gaps and strengthen cyber resilience.",
  },
];

const industriesWeServe = [
  {
    Icon: "boxicons:bank",
    heading: "Financial Services & FinTech",
    description:
      "Banks, NBFCs, payment aggregators, stock brokers, trading platforms, and FinTech startups handling financial transactions.",
  },
  {
    Icon: "iconmind:medical-record-outline-regular",
    heading: "Healthcare & HealthTech",
    description:
      "Hospitals, diagnostic centers, telemedicine platforms, health data processors, and medical device companies.",
  },
  {
    Icon: "pepicons-pop:electricity",
    heading: "Energy & Critical Infrastructure",
    description:
      "Identify risks across power systems, industrial environments, energy networks, and operational technology.",
  },
  {
    Icon: "mingcute:government-line",
    heading: "Government & Public Sector",
    description:
      "Strengthen the protection of e-governance platforms, public services, and sensitive government information.",
  },
  {
    Icon: "iconmind:vpc-outline-regular",
    heading: "IT, SaaS & Cloud Providers",
    description:
      "Review cloud infrastructure, data centers, enterprise applications, and technology service environments.",
  },
  {
    Icon: "eos-icons:satellite-alt-outlined",
    heading: "Telecom & Digital Infrastructure",
    description:
      "Assess network infrastructure, connectivity services, internet exchanges, and related security dependencies.",
  },
];

const businessImpact = [
  {
    title: "Protect Critical Business Operations",
    description:
      "Identify critical dependencies, weaknesses & potential points of failure before they disrupt essential services.",
    icon: "bx:server",
    background: "bg-[#080D1B]",
  },
  {
    title: "Reduce Regulatory & Legal Risk",
    description:
      "Align with RBI, SEBI, IRDAI, CERT-In, DPDP Act, and sectoral cybersecurity frameworks.",
    icon: "hugeicons:legal-01",
    background: "bg-[#08142D]",
  },
  {
    title: "Strengthen Cyber Resilience",
    description:
      "Evaluate whether your infrastructure, controls and response capabilities can withstand cyber disruption.",
    icon: "boxicons:check-shield",
    background: "bg-gradient-to-b from-[#0A1119] to-[#7D70F0]",
  },
  {
    title: "Improve Executive & Board Visibility",
    description:
      "Translate technical findings into measurable risks, business impact and prioritized actions.",
    icon: "gravity-ui:list-timeline",
    background: "bg-gradient-to-b from-[#0A1119] to-[#7D70F0]",
  },
  {
    title: "Enhance Stakeholder Trust",
    description:
      "Demonstrate commitment to cybersecurity governance and risk transparency to customers and partners.",
    icon: "akar-icons:people-group",
    background: "bg-[#010611]",
  },
  {
    title: "Support Cyber Insurance",
    description:
      "Structured risk assessments improve underwriting confidence and third-party vendor trust.",
    icon: "iconmind:compliance-outline-regular",
    background: "bg-[#080D1B]",
  },
];

const assessmentCoverage = [
  {
    title: "Critical Asset Identification & Mapping",
    description:
      "Identify critical systems, sensitive data, infrastructure dependencies and business-impact relationships.",
  },
  {
    title: "Cyber Threat & Risk Assessment",
    description:
      "Evaluate threat exposure, vulnerabilities, likelihood, impact and overall risk priority.",
  },
  {
    title: "Governance & Policy Review",
    description:
      "Assess information security governance, risk management, access controls and third-party security practices.",
  },
  {
    title: "Technical Security Assessment",
    description:
      "Review network architecture, perimeter controls, endpoint security, cloud environments and IAM.",
  },
  {
    title: "Compliance & Regulatory Mapping",
    description:
      "Map applicable requirements across relevant regulatory and security frameworks.",
  },
  {
    title: "Incident Response & Continuity",
    description:
      "Assess detection, response, recovery, backup, disaster recovery and business continuity readiness.",
  },
];

const Steps = [
  {
    number: "01",
    step: "Phase 01",
    title: "Planning & Scoping",
    description:
      "Define scope and critical assets, identify regulatory requirements, conduct stakeholder interviews to understand business context and priorities",
    side: "left",
  },
  {
    number: "02",
    step: "Phase 02",
    title: "Asset & Infrastructure Analysis",
    description:
      "Infrastructure mapping, data flow diagrams, critical dependency assessment to understand interconnections and single points of failure.",
    side: "right",
  },
  {
    number: "03",
    step: "Phase 03",
    title: "Risk Identification & Assessment",
    description:
      "Threat intelligence integration, risk scoring using standardized frameworks (NIST, ISO 27005), comprehensive gap analysis.",
    side: "left",
  },
  {
    number: "04",
    step: "Phase 04",
    title: "Control Evaluation",
    description:
      "Technical configuration review, administrative control verification, compliance mapping to ensure controls are effective in practice.",
    side: "right",
  },
  {
    number: "05",
    step: "Phase 05",
    title: "Reporting & Risk Prioritization",
    description:
      "Executive summary for leadership, detailed technical findings, risk heat maps for visual representation, prioritized remediation roadmap.",
    side: "left",
  },
  {
    number: "06",
    step: "Phase 06",
    title: "Management & Board Presentation",
    description:
      "Strategic risk overview, budgetary security recommendations, long-term resilience planning aligned with business objectives.",
    side: "right",
  },
];

const whatYouReceive = [
  {
    title: "Detailed CICRA Audit Report",
    description:
      "Detailed assessment of critical infrastructure, vulnerabilities, controls and risk exposure.",
  },
  {
    title: "Critical Asset Inventory",
    description:
      "Documented view of critical systems, data and infrastructure components.",
  },
  {
    title: "Risk Register",
    description:
      "Prioritized risks with severity, likelihood, impact and recommended action.",
  },
  {
    title: "Compliance Gap Analysis",
    description:
      "Mapping of identified gaps against applicable regulatory and security requirements.",
  },
  {
    title: "Risk Heat Map",
    description:
      "Visual representation of risk landscape for quick executive understanding and decision-making.",
  },
  {
    title: "Executive Summary",
    description:
      "Non-technical overview suitable for board presentations and senior management review.",
  },
  {
    title: "Remediation Roadmap",
    description:
      "Prioritized action plan with immediate, short-term, and long-term remediation steps",
  },
  {
    title: "Evidence Documentation",
    description:
      "Complete evidence pack ready for regulatory submission and compliance verification",
  },
  {
    title: "Follow-Up Support",
    description:
      "Advisory and verification assistance to ensure effective remediation implementation",
  },
];

const differentiators = [
  {
    heading: "Industry-Experienced Auditors",
    description:
      "Certified professionals (CISSP, CISA, ISO 27001 LA, CEH) with deep expertise in critical infrastructure security",
    Icon: "iconmind:security-champion-outline-bold",
    bgColor: "#0F66EA",
  },
  {
    heading: "Regulatory-Focused Approach",
    description:
      "Deep understanding of CERT-In, RBI, SEBI, IRDAI, MeitY, and sectoral cybersecurity requirements.",
    Icon: "hugeicons:legal-01",
    bgColor: "#C8912A",
  },
  {
    heading: "Technical + Governance Assessment",
    description:
      "Combine technical security evaluation with governance, policy and risk analysis.",
    Icon: "boxicons:message-code",
    bgColor: "#3B9E6A",
  },
  {
    heading: "PAN-India Presence",
    description:
      "Offices in Bangalore, Mumbai, Delhi, Chennai, Hyderabad with nationwide service capability.",
    Icon: "boxicons:globe-alt-3",
    bgColor: "#7D70F0",
  },
  {
    heading: "Practical Recommendations",
    description:
      "Actionable, implementable remediation guidance aligned with your business context and constraints.",
    Icon: "fa7-regular:lightbulb",
    bgColor: "#0F66EA",
  },
  {
    heading: "Critical Sector Experience",
    description:
      "Proven track record across BFSI, healthcare, energy, government, telecom, and cloud infrastructure sectors.",
    Icon: "icon-park-outline:energy-socket",
    bgColor: "#C8912A",
  },
  {
    heading: "End-to-End Services",
    description:
      "Complete security ecosystem including VAPT, SOC, compliance, vCISO, and managed security services.",
    Icon: "iconoven:terms-agreement",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Long-Term Partnership",
    description:
      "Confidential, ethical, structured audit process focused on building enduring security partnerships.",
    Icon: "fa7-regular:handshake-alt",
    bgColor: "#7D70F0",
  },
];

const cicraFAQs = [
  {
    question: "What is a CICRA Audit and why is it important?",
    answer:
      "A CICRA (Critical Information & Cyber Risk Assessment) Audit is a comprehensive evaluation of an organization's critical systems, infrastructure, data assets, cyber threat exposure, and security controls. Unlike traditional compliance audits, CICRA focuses on risk prioritization and resilience enhancement, ensuring critical business services remain secure and operational during cyber incidents. It's essential for organizations in regulated sectors like BFSI, healthcare, energy, and government.",
  },
  {
    question: "Who needs a CICRA Audit?",
    answer:
      "CICRA audits are crucial for organizations operating in high-risk and regulated industries including banks, NBFCs, payment aggregators, stock brokers, FinTech companies, hospitals, telemedicine platforms, power distribution companies, oil and gas operators, government departments, smart city projects, data centers, SaaS providers, cloud service providers, telecom operators, and ISPs. Any organization handling critical infrastructure or sensitive data should conduct regular CICRA audits.",
  },
  {
    question: "Is CICRA audit mandatory in India?",
    answer:
      "CICRA audit requirements depend on regulatory and sectoral guidelines. Organizations in BFSI, telecom, energy, and healthcare sectors often face mandatory cybersecurity assessments under regulations from CERT-In, RBI, SEBI, IRDAI, and MeitY. While specific CICRA branding may not be mandated, the comprehensive risk assessment approach aligns with regulatory expectations for critical infrastructure protection.",
  },
  {
    question: "How long does a CICRA audit typically take?",
    answer:
      "A typical CICRA audit takes 3-8 weeks depending on organizational size, complexity, number of critical systems, infrastructure scope, and geographical spread. Smaller organizations with limited infrastructure may complete audits in 3-4 weeks, while large enterprises with multiple locations, complex cloud environments, and extensive third-party integrations may require 6-8 weeks or more.",
  },
  {
    question: "How is CICRA different from ISO 27001 audit?",
    answer:
      "ISO 27001 focuses on establishing and maintaining an Information Security Management System (ISMS) with documented policies and procedures. CICRA emphasizes critical risk exposure, infrastructure resilience, and operational continuity. CICRA is more tactical and risk-focused, identifying vulnerabilities in critical systems and assessing real-world threat impacts. ISO 27001 provides the governance framework, while CICRA ensures critical assets can withstand and recover from cyber incidents.",
  },
  {
    question: "Does CICRA audit include technical security testing?",
    answer:
      "Yes, CICRA audits include comprehensive technical security assessments such as vulnerability scanning, penetration testing, network architecture review, firewall and IDS/IPS configuration analysis, endpoint protection assessment, cloud security evaluation, Identity & Access Management (IAM) control validation, and application security testing. Technical testing ensures security controls are effective in practice, not just documented.",
  },
  {
    question: "Can CICRA help with RBI, SEBI, or IRDAI compliance?",
    answer:
      "Absolutely. CICRA audits are specifically designed to support regulatory alignment. Our assessments map findings to RBI Cybersecurity Framework, SEBI Cyber Resilience Guidelines, IRDAI Information Security Guidelines, DPDP Act requirements, ISO 27001 Annex A controls, and NIST Cybersecurity Framework. The audit provides documentation and evidence suitable for regulatory submission and demonstrates compliance commitment.",
  },
  {
    question: "Is cloud infrastructure covered in CICRA audits?",
    answer:
      "Yes, cloud infrastructure is a critical component of CICRA audits. We assess cloud configuration security, data protection controls, access management, encryption implementation, cloud service provider compliance, hybrid cloud architecture, multi-cloud environments, container security, serverless security, and cloud-native application security. Cloud environments often host critical systems, making them essential to the assessment.",
  },
  {
    question: "How often should CICRA audits be conducted?",
    answer:
      "CICRA audits should be conducted annually at minimum, or more frequently after major system changes, infrastructure upgrades, cloud migrations, merger and acquisition activities, significant security incidents, or regulatory updates. Organizations in highly regulated sectors or with rapidly evolving threat landscapes should consider bi-annual assessments to maintain continuous resilience.",
  },
  {
    question: "Does ISECURION provide remediation support after the audit?",
    answer:
      "Yes, we provide comprehensive remediation support including advisory services, implementation guidance, security control deployment assistance, configuration hardening, policy development, incident response plan creation, and follow-up verification testing. Our goal is not just to identify risks but to help you systematically mitigate and manage them to build long-term cyber resilience.",
  },
  {
    question: "Will we receive board-level reporting and executive summaries?",
    answer:
      "Yes, all CICRA audits include executive summaries specifically designed for board and senior management presentations. These summaries provide strategic risk overview, business impact analysis, key findings in non-technical language, prioritized recommendations, budgetary considerations for security improvements, and long-term resilience planning insights. Detailed technical reports are also provided for IT and security teams.",
  },
  {
    question: "Can startups and smaller organizations benefit from CICRA?",
    answer:
      "Yes, especially FinTech startups, SaaS companies, healthtech platforms, and technology providers handling critical or sensitive data. CICRA helps startups establish security foundations, meet investor due diligence requirements, demonstrate security maturity to enterprise clients, achieve regulatory compliance for growth, and build cyber resilience before incidents occur. We tailor assessments to organizational size and maturity level.",
  },
  {
    question: "Is CICRA aligned with the DPDP Act?",
    answer:
      "Yes, CICRA audits strengthen data protection governance in alignment with India's Digital Personal Data Protection (DPDP) Act. We assess data classification, consent management, data flow mapping, purpose limitation controls, data minimization practices, security safeguards, breach notification readiness, and data subject rights implementation. CICRA provides the security foundation necessary for DPDP compliance.",
  },
  {
    question: "Does CICRA audit help with cyber insurance requirements?",
    answer:
      "Yes, CICRA audits provide structured risk documentation that significantly supports cyber insurance underwriting. Insurers require evidence of cybersecurity maturity, risk management practices, incident response capabilities, and business continuity preparedness. A comprehensive CICRA audit demonstrates due diligence, potentially improving coverage terms and reducing premiums while ensuring you meet policy requirements.",
  },
  {
    question: "Is the CICRA audit process confidential?",
    answer:
      "Absolutely. All CICRA audits are conducted under strict Non-Disclosure Agreements (NDAs) and confidentiality protocols. We follow ethical audit practices, secure handling of sensitive information, restricted access to audit data, encrypted communication channels, and secure documentation storage. Your critical infrastructure details, vulnerabilities, and business information remain completely confidential throughout and after the engagement.",
  },
  {
    question: "How do we initiate a CICRA audit with ISECURION?",
    answer:
      "Contact our cybersecurity experts through our website, email (info@isecurion.com), or phone (+91 88612 01570). We'll schedule an initial consultation to understand your organization, critical infrastructure, regulatory requirements, and specific concerns. Based on this discussion, we'll provide a tailored proposal outlining scope, methodology, timeline, deliverables, and investment. Once agreed, we'll begin with planning and scoping.",
  },
  {
    question: "What makes ISECURION different for CICRA audits?",
    answer:
      "ISECURION combines industry-experienced cybersecurity auditors with regulatory-focused assessment approaches. Our team holds certifications including CISSP, CISA, ISO 27001 LA, and CEH. We provide both governance analysis and deep technical testing in a single comprehensive audit. With PAN-India presence and experience across BFSI, healthcare, energy, government, and technology sectors, we deliver practical, implementable recommendations tailored to your risk landscape and business context.",
  },
  {
    question: "Does CICRA assess third-party and supply chain risks?",
    answer:
      "Yes, third-party and supply chain risk assessment is a critical component of CICRA audits. We evaluate vendor risk management practices, third-party security controls, contractual security obligations, vendor access controls, data sharing agreements, supply chain dependencies, critical vendor identification, vendor security assessments, and integration point security. Supply chain compromises are increasingly common attack vectors.",
  },
  {
    question: "What deliverables will we receive from the CICRA audit?",
    answer:
      "You will receive a comprehensive package including: Detailed CICRA Audit Report with findings and analysis, Critical Asset Inventory documenting all critical systems, Risk Register with severity classification and prioritization, Compliance Gap Analysis mapped to relevant regulations, Risk Heat Map Dashboard for visual risk overview, Executive Summary for board and leadership, Remediation Roadmap with immediate, short-term, and long-term actions, and Evidence documentation suitable for regulatory submission.",
  },
  {
    question: "Can CICRA audits be conducted remotely?",
    answer:
      "Yes, CICRA audits can be conducted remotely with secure access to systems, documentation, and key personnel. We use secure remote assessment methodologies, encrypted communication channels, and virtual interviews while maintaining comprehensive audit coverage. However, critical infrastructure assessments may benefit from on-site components for physical security evaluation, data center inspection, and network infrastructure review depending on scope and requirements.",
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
      const response = await cicraAudit({ ...data, turnstileToken });
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
    <div className="bg-[#050B18]">
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
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-7 text-[#7D70F0] text-center lg:text-left">
                  CRITICAL INFRASTRUCTURE • CYBER RESILIENCE <br /> • RISK
                  ASSESSMENT
                </p>

                {/* Heading */}
                <h1 className="mt-5 lg:max-w-[500px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left animate-hero-reveal" style={{animationDelay:"500ms"}}>
                  CICRA Audit Services for Critical Infrastructure Protection
                </h1>

                {/* Description */}
                <p className="mt-4 lg:max-w-[390px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left animate-hero-reveal" style={{animationDelay:"750ms"}}>
                  ISECURION delivers industry-leading CICRA Audit Services in
                  India, helping organizations identify, assess, and mitigate
                  risks to their Critical Information Infrastructure (CII) and
                  sensitive digital assets.
                </p>

                <ul className="mt-4 space-y-2">
                  <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px] animate-hero-reveal" style={{animationDelay:"950ms"}}>
                    <Icon
                      icon="boxicons:seal-check"
                      className="mt-0.5 shrink-0 text-[20px] text-[#7D70F0]"
                    />
                    Critical Infrastructure
                  </li>

                  <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px] animate-hero-reveal" style={{animationDelay:"1050ms"}}>
                    <Icon
                      icon="boxicons:seal-check"
                      className="mt-0.5 shrink-0 text-[20px] text-[#7D70F0]"
                    />
                    Risk-Based Assessment
                  </li>

                  <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px] animate-hero-reveal" style={{animationDelay:"1200ms"}}>
                    <Icon
                      icon="boxicons:seal-check"
                      className="mt-0.5 shrink-0 text-[20px] text-[#7D70F0]"
                    />
                    Regulatory Aligned
                  </li>
                </ul>

                {/* CTA */}
                {/* <div className="mt-10 text-center lg:text-left">
                  <Link href="/company/contact">
                  <button
                    type="button"
                    className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                  >
                    Request a CICRA Audit{""}
                    <span className="ml-1.5 text-[17px] leading-none text-[#31435C]">
                      <Icon icon="mdi:arrow-right"></Icon>
                    </span>
                  </button>
                  </Link>
                </div> */}
              </div>
            </Animation>

              <div className="w-full rounded-[20px] bg-[#202123] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[32px] lg:p-[30px] xl:p-[40px]">
                <div>
                  <h2 className="text-[18px] font-medium leading-[1.3] text-white sm:text-[19px]">
                    Request CICRA Audit Consultation
                  </h2>

                  <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                    Discuss your CICRA audit needs with our experts.
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
                        className={`h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] ${errors.email ? "border border-red-500" : ""}`}
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
                        className="h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] "
                        {...register("companyName")}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="assessmentType"
                      className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                    >
                      Industry Sector <span className="text-[#F04444]">*</span>
                    </label>

                    <div className="relative">
                      <select
                        id="target"
                        name="target"
                        defaultValue=""
                        aria-label="Select Industry Sector"
                        className={`h-[43px] w-full appearance-none rounded-[7px] border ${
                          errors.industry
                            ? "border-red-500"
                            : "border-[#29292C]"
                        } bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none`}
                        {...register("industry", {
                          required: "Please select an industry sector.",
                        })}
                      >
                        <option value="">Select Industry Sector</option>
                        <option value="Banking & Financial Services">
                          Banking & Financial Services
                        </option>
                        <option value="NBFC / Payment Aggregator">
                          NBFC / Payment Aggregator
                        </option>
                        <option value="Stock Broker / Trading">
                          Stock Broker / Trading
                        </option>
                        <option value="FinTech Company">FinTech Company</option>
                        <option value="Hospital / HealthTech Platform">
                          Hospital / HealthTech Platform
                        </option>
                        <option value="Telemedicine / HealthTech Platform">
                          Telemedicine / HealthTech Platform
                        </option>
                        <option value="Power / Energy Company">
                          Power / Energy Company
                        </option>
                        <option value="Oil & Gas Operator">
                          Oil & Gas Operator
                        </option>
                        <option value="Government / Public Sector">
                          Government / Public Sector
                        </option>
                        <option value="Smart City Project">
                          Smart City Project
                        </option>
                        <option value="Data Center / Cloud Provider">
                          Data Center / Cloud Provider
                        </option>
                        <option value="Saas / IT Services Company">
                          Saas / IT Services Company
                        </option>
                        <option value="Telecom Operator / ISP">
                          Telecom Operator / ISP
                        </option>
                        <option value="Other Critical Infrastructure">
                          Other Critical Infrastructure
                        </option>
                      </select>

                      {errors.industry && (
                        <p className="text-sm font-normal text-red-500">
                          {errors.industry.message}
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
                    Request CICRA Audit Consultation{""}
                    <span className="ml-1.5 text-[18px] leading-none">
                      <Icon icon="mdi:arrow-right" />
                    </span>
                  </button>
                </form>
              </div>
          </div>
        </div>
      </section>

      {/* Understanding CICRA */}
      <section className="relative border-t border-white/5 bg-[#07101D] pt-16 text-white sm:pt-18 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Animation>
            <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
              {/* LEFT COLUMN: OVERVIEW */}
              <div className="min-w-0">
                <p className="text-center text-[14px] font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#7D70F0] sm:text-[15px] md:text-left">
                  UNDERSTANDING CICRA
                </p>

                <WordReveal  text="Protect Your Critical Information Infrastructure" className="mx-auto mt-4 max-w-[570px] text-center text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[34px] md:text-left lg:mx-0 lg:text-[36px] xl:text-[40px]">
                 
                </WordReveal>

                <div className="mx-auto mt-[22px] max-w-[530px] space-y-5 text-center text-[15px] font-normal leading-[1.72] text-[#D1D1D1] sm:text-[16px] md:text-left lg:mx-0 lg:text-[16px] xl:text-[17px]">
                  <p className="animate-hero-reveal" style={{animationDelay:"500ms"}}>
                    A CICRA (Critical Information & Cyber Risk Assessment) Audit
                    is a comprehensive evaluation of an organization's critical
                    systems and infrastructure, sensitive data assets and data
                    flows, cyber threat exposure, vulnerabilities and risk
                    posture, security governance and control effectiveness, and
                    incident response and business continuity readiness.
                  </p>

                  <p className="animate-hero-reveal" style={{animationDelay:"750ms"}}>
                    Unlike an audit focused solely on documentation, a
                    risk-based CICRA assessment considers how security gaps
                    could affect essential operations, data integrity, and
                    business continuity.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: OBJECTIVES */}
              <div className="min-w-0">
                <p className="mb-7 text-center text-[14px] font-medium uppercase leading-[18px] text-[#7D70F0] sm:text-[15px] md:text-left">
                  Key Objectives of a CICRA Audit
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

                        <p className="mt-1 max-w-[360px] text-[13px] leading-relaxed text-[#D1D1D1] sm:text-[14px]">
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
                INDUSTRIES WE SERVE
              </p>
              <WordReveal text="CICRA Audits for High-Risk and Regulated Industries" className="text-[#FFFFFF] max-w-[700px]">
                
              </WordReveal>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[850px] animate-hero-reveal" style={{animationDelay:"800ms"}}>
                ISECURION's CICRA Audit Services are tailored for organizations
                operating in high-risk and regulated industries.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {industriesWeServe.map((item, index) => (
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
                    <p className="mt-4 text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[338px]">
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
              BUSINESS IMPACT
            </p>

            <h2 className="">
              <WordReveal as="span" text="Understand the Risk Behind Your"></WordReveal> <br /> <WordReveal as="span" text="Critical Operations"></WordReveal>
            </h2>

            <p className="mx-auto mt-4 text-[14px] leading-5 text-[#D1D1D1] sm:text-[17px] sm:leading-[26px] animate-hero-reveal" style={{animationDelay:"600ms"}}>
              A CICRA assessment gives leadership a clearer view of where cyber
              risk could directly affect business continuity.
            </p>
          </div>

          {/* Security Domain Cards */}
          <div className="mt-18 grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {businessImpact.map((domain, i) => (
              <AnimatedCard
                delay={i * 0.2}
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

      <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#181E29] to-[#090B21] py-14 sm:py-16 lg:py-20">
        {/* Dotted background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src={dots}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium tracking-wide text-[#7D70F0] sm:text-sm">
              ASSESSMENT COVERAGE
            </p>

            <WordReveal text="One Assessment Across Your Critical Security Landscape" className="mt-3 text-2xl font-medium leading-tight text-[#FEFEFE] sm:text-3xl md:text-4xl lg:text-[38px] lg:leading-[1.3]">
              
            </WordReveal>

            <p className="mx-auto mt-5 max-w-3xl text-sm font-normal leading-6 text-[#D1D1D1] sm:text-base sm:leading-7 animate-hero-reveal" style={{animationDelay:"800ms"}}>
              A comprehensive assessment of the technical, governance, and
              operational controls protecting your critical environment.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
            {assessmentCoverage.map((item, index) => (
              <AnimatedCard
                key={item.title}
                delay={index * 0.1}
                className="min-w-0"
              >
                <div className="mb-3 h-[7px] w-[50px] rounded-full bg-gradient-to-r from-[#7D70F0] to-[#6D758F]" />

                <h3 className="text-base font-medium leading-6 text-[#FEFEFE] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-[23px] text-[#D1D1D1] sm:text-base sm:leading-[24px] max-w-[315px]">
                  {item.description}
                </p>
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
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#7D70F0]">
                  Our Approach
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                  ISECURION's CICRA Audit Methodology
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[600px]">
                  A structured, risk-based approach that moves from critical
                  asset discovery to validated findings and prioritized
                  remediation.
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
              <p className="mt-10 text-sm sm:text-base font-semibold text-[#7D70F0]">
                WHAT YOU RECEIVE
              </p>
              <h2 className="mt-2 font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF] lg:max-w-[490px]">
                Complete CICRA Audit Deliverables Package
              </h2>
              <p className="mt-4 text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[500px]">
                Clear, actionable outputs that turn assessment findings into
                prioritized security and remediation decisions.
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
                  Our Differentiators
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                  What Sets ISECURION Apart for CICRA Audits
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                  Deep regulatory expertise and technical capability to assess
                  critical risks and turn findings into practical security
                  improvements.
                </p>
              </div>
            </RightAnimation>
          </div>

          <div className="mt-20">
            <Animation>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {differentiators.map((item, index) => (
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
            CICRA Audit
          </>
        }
        description="Common questions about Critical Information & Cyber Risk Assessment audits."
        faqs={cicraFAQs}
      />

      <CICRA_CTA />
    </div>
  );
}

export default page;
