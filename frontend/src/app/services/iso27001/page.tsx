"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  AnimatedCard,
  Animation,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";
import iso27001 from "../../../assets/services/iso27001-background.png";
import yes from "../../../assets/services/yes.svg";

import FAQSection from "../../../components/sections/FAQSection";
import { useForm } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";
import { iso27001api } from "../../../services/api/contact";
import { toast } from "react-toastify";
import Link from "next/link";

interface ContactFormData {
  email: string;
  companyname: string;
  phonenumber: string;
  scope: string;
  industry: string;
}

const iso27001Services = [
  "ISO/IEC 27001:2022",
  "End-to-End ISMS Implementation",
  "Risk-Based Security Controls",
  "Certification Audit Support",
];

const understandingIso = [
  {
    Icon: "iconoven:executive",
    heading: "Confidentiality",
    description: "Protect sensitive business and customer information.",
    bgColor: "#0F66EA",
  },
  {
    Icon: "charm:clipboard-tick",
    heading: "Integrity",
    description: "Maintain accurate, complete, and reliable information.",
    bgColor: "#C8912A",
  },
  {
    Icon: "iconmind:solar-system-outline-regular",
    heading: "Availability",
    description:
      "Keep critical systems and information accessible when needed.",
    bgColor: "#3B9E6A",
  },
  {
    Icon: "energy-icons:file-warning-48-bold",
    heading: "Risk Management",
    description:
      "Identify, assess, and treat information security risks systematically.",
    bgColor: "#7D70F0",
  },
];

const whoNeedsIso27001 = [
  {
    Icon: "healthicons:chart-cured-increasing-24px",
    heading: "SaaS & Technology Companies",
    description:
      "Demonstrate security maturity and meet enterprise customer expectations.",
  },
  {
    Icon: "boxicons:bank",
    heading: "FinTech & BFSI",
    description:
      "Strengthen information security governance and support applicable regulatory obligations.",
  },
  {
    Icon: "iconmind:medical-record-outline-regular",
    heading: "Healthcare & HealthTech",
    description:
      "Protect sensitive patient information and connected healthcare systems.",
  },
  {
    Icon: "ic:baseline-computer",
    heading: "IT Services & Consulting",
    description:
      "Address client security requirements and strengthen vendor credibility.",
  },
  {
    Icon: "iconmind:vpc-outline-regular",
    heading: "Cloud Providers & MSPs",
    description:
      "Improve cloud security governance and demonstrate control maturity.",
  },
  {
    Icon: "ic:outline-business-center",
    heading: "Startups & Growing Businesses",
    description:
      "Build scalable security practices and prepare for larger customer engagements.",
  },
  {
    Icon: "akar-icons:shopping-bag",
    heading: "E-commerce & Retail",
    description:
      "Protect customer information, business applications, and digital transactions.",
  },
  {
    Icon: "bx:network-chart",
    heading: "Data Centres & Hosting Providers",
    description:
      "Establish structured controls for infrastructure and information assets.",
  },
];

const whyIso27001 = [
  {
    heading: "Win Enterprise Opportunities",
    description:
      "Address security requirements during vendor assessments, procurement, and enterprise onboarding.",
  },
  {
    heading: "Reduce Information Security Risks",
    description:
      "Identify weaknesses and implement controls based on business impact and risk exposure.",
  },
  {
    heading: "Strengthen Customer Trust",
    description:
      "Demonstrate a structured, independently assessed approach to information security.",
  },
  {
    heading: "Support Regulatory Alignment",
    description:
      "Map relevant controls to applicable privacy, security, and industry requirements.",
  },
  {
    heading: "Improve Operational Consistency",
    description:
      "Establish clear policies, responsibilities, and repeatable security processes.",
  },
  {
    heading: "Build a Competitive Advantage",
    description:
      "Strengthen your credibility when pursuing partnerships, tenders, and global markets.",
  },
];

const scopeofwork = [
  {
    Icon: "bx:search-alt",
    heading: "Gap & Risk Assessment",
    description:
      "Evaluate existing security practices, identify compliance gaps, assess risks, and prioritise remediation actions.",
    bgColor: "#112533",
    textColor: "#0FEADB",
  },
  {
    Icon: "hugeicons:api-gateway",
    heading: "ISMS Framework & Documentation",
    description:
      "Develop tailored security policies, procedures, risk registers, asset inventories, and the Statement of Applicability (SoA).",
    bgColor: "#111514",
    textColor: "#0FEADB",
  },
  {
    Icon: "eva:settings-2-outline",
    heading: "Control Design & Implementation",
    description:
      "Implement organisational and technical controls for access management, encryption, monitoring, and supplier security.",
    bgColor: "#EBEBEB",
    textColor: "#090B21",
  },
  {
    Icon: "fa-solid:shield-alt",
    heading: "Internal Audit & Readiness Review",
    description:
      "Evaluate ISMS effectiveness, identify nonconformities, and prepare for the certification audit.",
    bgColor: "#EBEBEB",
    textColor: "#034829",
  },
  {
    Icon: "iconmind:bias-audit-outline-regular",
    heading: "Certification Audit Support",
    description:
      "Organise audit evidence, coordinate with certification bodies, and address audit findings.",
    bgColor: "#111514",
    textColor: "#0FEADB",
  },
  {
    Icon: "ri:loop-left-ai-line",
    heading: "Ongoing Compliance & Maintenance",
    description:
      "Monitor security controls, prepare for surveillance audits, and support continual ISMS improvement.",
    bgColor: "#112533",
    textColor: "#0FEADB",
  },
];

const methodology = [
  {
    phase: "Phase 01",
    heading: "Scoping & Consultation",
    description:
      "Define the ISMS scope, business context, key stakeholders, information assets, and certification objectives.",
  },
  {
    phase: "Phase 02",
    heading: "Gap Assessment & Risk Treatment",
    description:
      "Review existing controls, identify compliance gaps, assess risks, and prioritise corrective actions.",
  },
  {
    phase: "Phase 03",
    heading: "Documentation & Control Design",
    description:
      "Develop required ISMS documentation, define control responsibilities, and establish the Statement of Applicability.",
  },
  {
    phase: "Phase 04",
    heading: "Implementation & Internal Audit",
    description:
      "Support control implementation, staff awareness, internal auditing, management review, and nonconformity resolution.",
  },
  {
    phase: "Phase 05",
    heading: "Certification & Continuous Improvement",
    description:
      "Coordinate certification audit preparation, support audit findings, and establish ongoing monitoring and maintenance.",
  },
];

const projectDeliverables = [
  {
    heading: "ISMS Scope & Asset Inventory",
    description: "Documented boundaries, key systems, and information assets.",
  },
  {
    heading: "Risk Assessment & Treatment Plan",
    description:
      "Prioritised risks, treatment options, responsibilities, and recommended actions.",
  },
  {
    heading: "Statement of Applicability (SoA)",
    description:
      "Documented control applicability, implementation status, and justification.",
  },
  {
    heading: "Policies & Procedures",
    description:
      "Security documentation tailored to your organisation and ISMS scope.",
  },
  {
    heading: "Internal Audit & Corrective Action Report",
    description:
      "Findings, nonconformities, and a structured plan for closure.",
  },
  {
    heading: "Management Review Support",
    description: "Inputs and documentation to support management oversight.",
  },
  {
    heading: "Certification Audit Support",
    description:
      "Evidence preparation and coordination throughout the certification process.",
  },
  {
    heading: "Ongoing Maintenance Plan",
    description:
      "Recommendations for monitoring, reviews, and continual improvement.",
  },
];

const controlSecurity = [
  {
    heading: "Access & Identity",
    description:
      "RBAC, MFA, JML processes and Privileged Access Management recommendations aligned to Annex A.5 and A.8.",
  },
  {
    heading: "Logging & Monitoring",
    description:
      "SIEM integration, audit log requirements, security alerting and KPI dashboard design per ISO 27001 A.8.15.",
  },
  {
    heading: "Encryption & Key Management",
    description:
      "Encryption-at-rest and in-transit strategy, KMS design and HSM guidance per Annex A.8.24.",
  },
  {
    heading: "Secure Development",
    description:
      "SSDLC framework, SAST/DAST tooling integration and secure deployment pipelines per Annex A.8.25–A.8.28.",
  },
  {
    heading: "Awareness & Training",
    description:
      "Phishing simulations, role-based security training, policy attestation and security culture workshops.",
  },
  {
    heading: "Incident Response & BCP",
    description:
      "IR playbooks, tabletop exercises, business continuity plans & disaster recovery testing aligned to Annex A.5.26 & A.5.29.",
  },
];

const iso27001faqs = [
  {
    question: "How long does ISO 27001 certification take?",
    answer:
      "A scoped ISO 27001 implementation typically takes 2–4 months for mid-sized organisations. Larger enterprises with complex environments or significant control gaps may require 4–6 months. ISECURION's proven templates and accelerators consistently deliver certification in around 2 months for well-scoped SaaS and technology companies. Transition from ISO 27001:2013 to 2022 typically takes 4–8 weeks.",
  },
  {
    question: "What is the cost of ISO 27001 certification in India?",
    answer:
      "ISO 27001 certification cost in India has two components: (1) Consulting fees - for gap analysis, ISMS implementation and audit readiness, which depend on organisational size and scope; and (2) Certification body fees - paid directly to the accredited CB (BSI, Bureau Veritas, TÜV, DNV, etc.), typically ranging from ₹1.5 lakh to ₹5 lakh for a 3-year cycle. Contact ISECURION for a tailored consulting quote based on your headcount and scope.",
  },
  {
    question: "Do we need a certification body to get ISO 27001 certified?",
    answer:
      "Yes. ISO 27001 certification is issued only by an accredited third-party certification body (CB) - ISECURION cannot issue the certificate. Accredited CBs include BSI, Bureau Veritas, TÜV SÜD, TÜV Rheinland, DNV, NQA and SGS. ISECURION prepares your complete ISMS documentation and PBC artifacts, and coordinates Stage 1 and Stage 2 audits with the CB on your behalf.",
  },
  {
    question: "Does ISO 27001 overlap with SOC 2?",
    answer:
      "Yes - approximately 70–80% of ISO 27001 Annex A controls overlap with SOC 2 Trust Services Criteria. ISECURION harmonises your control sets and documentation so you can pursue both frameworks simultaneously, significantly reducing duplicated effort and total compliance cost. Many of our clients achieve both ISO 27001 and SOC 2 within the same engagement.",
  },
  {
    question: "What version of ISO 27001 should we certify on?",
    answer:
      "ISO/IEC 27001:2022 is the current standard and all new certifications must be issued against this edition. The deadline for transitioning from ISO 27001:2013 was October 31, 2025 - organisations still certified against the 2013 edition must transition immediately. ISECURION handles 2013→2022 transition projects including the updated SoA and 11 new controls gap assessment.",
  },
  {
    question: "Is ISO 27001 mandatory in India?",
    answer:
      "ISO 27001 is not universally mandatory in India, but it is strongly recommended or contractually required in many sectors. Key contexts where ISO 27001 is expected or mandated: RBI-regulated payment and banking systems, SEBI's CSCRF framework, IRDAI information security guidelines, DPDP Act compliance, government and defence supplier requirements, and enterprise customer security questionnaires. Many Fortune 500 procurement teams will not onboard vendors without ISO 27001 certification.",
  },
  {
    question: "Does ISECURION provide ISO 27001 services outside India?",
    answer:
      "Yes. ISECURION provides ISO 27001 consulting services globally - both remotely and on-site where applicable. Our international coverage includes USA (New York, San Francisco, Chicago, Seattle), UK (London, Manchester), UAE (Dubai, Abu Dhabi), GCC (Qatar, Saudi Arabia, Kuwait, Bahrain, Oman), Singapore, Australia (Sydney, Melbourne) and EU (Netherlands, Germany, France).",
  },
  {
    question: "What is an ISMS gap analysis and what does it cover?",
    answer:
      "An ISMS gap analysis evaluates your existing information security controls against all requirements of ISO 27001:2022 - Clauses 4–10 plus all 93 Annex A controls. The output includes: a control maturity score (0–5 scale), a heat map of gaps by risk severity, a prioritised remediation roadmap, effort and timeline estimates, and an indicative Statement of Applicability (SoA). ISECURION typically completes a gap analysis within 1–2 weeks for most organisations.",
  },
  {
    question: "How many Annex A controls are in ISO 27001:2022?",
    answer:
      "ISO 27001:2022 includes 93 Annex A controls across four themes: Organisational (37), People (8), Physical (14) and Technological (34). This is reduced from 114 controls in the 2013 edition, with 11 new controls added including threat intelligence, ICT readiness for business continuity, web filtering, secure coding and data masking. ISECURION maps all 93 controls to your environment during the gap assessment.",
  },
  {
    question:
      "What happens after ISO 27001 certification - do we need ongoing support?",
    answer:
      "ISO 27001 certification is valid for 3 years, with annual surveillance audits by the CB in Year 1 and Year 2, and a recertification audit in Year 3. Maintaining certification requires ongoing ISMS activities: internal audits, management reviews, continual improvement programmes, incident management and control effectiveness monitoring. ISECURION offers post-certification maintenance retainers to ensure you remain audit-ready and surveillance-proof throughout the 3-year cycle.",
  },
];

function Iso27001() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const submit = async (data) => {
    setLoading(true);
    try {
      if (!turnstileToken) {
        toast.error("Please complete CAPTCHA verification");
        return;
      }
      const response = await iso27001api({ ...data, turnstileToken });
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
      <section className="relative  w-full py-14 overflow-hidden bg-[#000000]">
        <div className="absolute left-30  w-[500px] h-[650px] rounded-full blur-[180px] bg-[#C8912A30]"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-10">
          {/* left  */}
          <div className="flex-1 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <p
              className="text-sm sm:text-base font-semibold text-[#0FEADB] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "150ms" }}
            >
              ISO 27001 COMPLIANCE & CERTIFICATION
            </p>
            <h1
              className="text-[#FFFFFF] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "300ms" }}
            >
              ISO 27001 Audit, Implementation & Certification
            </h1>
            <p
              className="text-base sm:text-lg font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D1D1D1] opacity-0 animate-hero-reveal max-w-[440px]"
              style={{ animationDelay: "450ms" }}
            >
              Establish a robust Information Security Management System (ISMS)
              with expert guidance across risk assessment, security controls,
              documentation, internal audits, and certification readiness.
            </p>
            {/* <Link href="/company/contact">
            <button
              className="text-base font-medium flex items-center gap-2 px-3 py-4 mx-auto lg:mx-0 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "600ms" }}
            >
              Book a Free Readiness Call{" "}
              <span>
                <Icon icon="akar-icons:arrow-right" />
              </span>
            </button>
            </Link> */}
            <div
              className="opacity-0 animate-hero-reveal"
              style={{ animationDelay: "750ms" }}
            >
              <ul className="space-y-2 ">
                {iso27001Services.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-base font-normal flex items-center gap-3 text-[#D1D1D1] justify-center lg:justify-start"
                  >
                    {" "}
                    <span className="w-2 h-2 inline-flex bg-[#0FEADB]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* right  */}
          <div className="flex-1 px-6 py-4 rounded-[23px] bg-[#202123]">
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF]">
                Get a Free ISO 27001 Gap Snapshot
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#D9D9D9]">
                Get your gap summary and timeline, commitment-free.
              </p>
            </div>
            <form
              action=""
              className="mt-4 space-y-3"
              onSubmit={handleSubmit(submit)}
            >
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
                    className="text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]"
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
                    className="text-sm font-normal px-3 py-3  rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]"
                    {...register("companyname")}
                  />
                </div>
              </div>
              {/* phone number+scope  */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-normal  text-[#FEFEFE]"
                  >
                    Phone Number <span className="text-[#E42F23]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number"
                    className="text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]"
                    {...register("phonenumber", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phonenumber && (
                    <p className="text-sm font-normal text-red-500">
                      {errors.phonenumber.message}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-normal text-[#FEFEFE]"
                  >
                    Scope <span className="text-[#E24B4A]">*</span>
                  </label>
                  <select
                    name=""
                    id=""
                    className="text-sm font-normal px-3 py-3 w-full  rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border border-[#262D3D]"
                    {...register("scope", { required: "Scope is required" })}
                  >
                    <option value="">What's your Scope?</option>
                    <option value="Product/Saas">Product/Saas </option>
                    <option value="Platform">Platform</option>
                    <option value="Entire Organisation">
                      Entire Organisation
                    </option>
                    <option value="Transition from ISO 27001:2013">
                      Transition from ISO 27001:2013
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.scope && (
                    <p className="text-sm font-normal text-red-500">
                      {errors.scope.message}
                    </p>
                  )}
                </div>
              </div>
              {/* industry  */}
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm font-normal text-[#FEFEFE]"
                >
                  Industry <span className="text-[#E24B4A]">*</span>
                </label>
                <select
                  name=""
                  id=""
                  className="text-sm font-normal px-3 py-3 py-3 w-full   rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border border-[#262D3D]"
                  {...register("industry", {
                    required: "Industry is required",
                  })}
                >
                  <option value="">Your industry</option>
                  <option value="SaaS / Technology">SaaS / Technology </option>
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
                {errors.industry && (
                  <p className="text-sm font-normal text-red-500">
                    {errors.industry.message}
                  </p>
                )}
              </div>
              {/* captcha  */}
              <div className="">
                <div className="flex flex-col  gap-3">
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
                className={`w-full text-sm sm:text-base font-semibold flex items-center justify-center py-2.5 gap-2 rounded-[10px]  text-[#FFFFFF] border-2 border-[#00000000] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
              >
                Get My Free Gap Snapshot{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING ISO 27001  */}
      <section className="w-full py-14 overflow-hidden bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-[40%]">
              <LeftAnimation>
                <div className="space-y-4 text-center lg:text-left">
                  <p className="text-sm sm:text-base font-semibold text-[#0FEADB] sectionheading">
                    UNDERSTANDING ISO 27001
                  </p>
                  <h2 className="text-[#FEFEFE]">
                    Make Information Security a Business Priority
                  </h2>
                </div>
              </LeftAnimation>
            </div>
            <div className="w-full lg:w-[50%] ">
              <RightAnimation>
                <div className="space-y-4 text-center lg:text-left">
                  <p className="sectionDescription text-[#D1D1D1]">
                    ISO/IEC 27001:2022 is an internationally recognised standard
                    for establishing, implementing, maintaining, and continually
                    improving an Information Security Management System.
                  </p>
                  <p className="sectionDescription text-[#D1D1D1]">
                    It helps organisations identify security risks, protect
                    sensitive information, strengthen internal processes, and
                    demonstrate their commitment to information security to
                    customers, partners, and stakeholders.
                  </p>
                </div>
              </RightAnimation>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {understandingIso.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="px-5 py-3 space-y-3 border-l-[1.03px] border-[#0F66EA29]"
                >
                  <div
                    className="w-[48px] h-[48px] flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <Icon
                      icon={item.Icon}
                      className="w-[20px] h-[20px] text-[#FFFFFF]"
                    />
                  </div>
                  <h3 className="sectionDescription text-[#F5F0E8]">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-[15px] font-normal leading-[21px] text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO NEEDS ISO 27001?  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <Animation>
            <div className="lg:max-w-3xl space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#0FEADB] sectionheading">
                WHO NEEDS ISO 27001?
              </p>
              <h2 className="text-[#FFFFFF]">
                Built for Businesses That Value Information Security
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                Whether you're a growing startup or an established enterprise,
                ISO 27001 helps build a structured security programme that
                scales with your business.
              </p>
            </div>
          </Animation>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
              {whoNeedsIso27001.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="relative px-5 pt-4 pb-8 space-y-3 rounded-lg bg-[#66666614] border-[0.99px] border-[#0B15301F]"
                >
                  <div className="absolute left-0 w-[2px] h-[23px] rounded-tr-sm rounded-br-sm bg-[#0FEADB]"></div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <span>
                      <Icon
                        icon={item.Icon}
                        className="w-[25px] h-[25px] text-[#0FEADB]"
                      />
                    </span>
                  </div>
                  <p className="mt-6 text-[15px] font-normal text-[#D1D1D1] max-w-[300px]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ISO 27001 MATTERS  */}
      <section className="w-full py-14 bg-[#011322] border-t-[0.62px] border-b-[0.62px] border-[#263028]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-10">
          {/* heading  */}
          <div className="flex-1 ">
            <LeftAnimation>
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold text-[#0FEADB] sectionheading">
                  WHY ISO 27001 MATTERS
                </p>
                <h2 className="text-[#FFFFFF]">
                  Turn Security Compliance into Business Confidence
                </h2>
                <p className="sectionDescription text-[#D1D1D1]">
                  Whether you're a growing startup or an established enterprise,
                  ISO 27001 helps build a structured security programme that
                  scales with your business.
                </p>
              </div>
            </LeftAnimation>
          </div>
          <div className="flex-2">
            <div className="space-y-4 sm:space-y-7">
              {whyIso27001.map((item, index) => (
                <AnimatedCard
                  key={index}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <div className="flex flex-1 items-center gap-4">
                    <p className="text-sm font-normal text-[#0FEADB]">
                      {index + 1}.
                    </p>
                    <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-[15px] font-normal leading-[23px] text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE OF WORK  */}
      <section className="relative w-full mt-15">
        {/* Heading / Background image */}
        <div className="relative h-[40vh] lg:h-[60vh]">
          <div className="absolute inset-0 bg-linear-to-r from-[#0F2D70]/20 to-transparent" />
          <div className="absolute inset-0">
            <Image
              src={iso27001}
              alt="ISO 27001"
              className="object-cover object-left"
            />
          </div>

          {/* Heading */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-14">
            <div className="max-w-lg mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base text-[#0FEADB] sectionheading">
                SCOPE OF WORK
              </p>

              <h2 className="text-[#FFFFFF]">
                End-to-End ISO 27001 Implementation & Audit Support
              </h2>
            </div>
          </div>
        </div>

        {/* Scope of work cards */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 -mt-20 lg:-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {scopeofwork.map((item, index) => (
              <div
                key={index}
                className="px-8 py-6 space-y-6  border-[0.68px] border-[#262836]"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="flex items-center justify-between">
                  <p
                    className="text-base font-normal"
                    style={{ color: item.textColor }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <Icon
                    icon={item.Icon}
                    className={`w-[30px] h-[30px] ${index === 0 || index === 1 || index === 4 || index === 5 ? "text-[#0FEADB]" : ""}`}
                  />
                </div>

                <h3
                  className={`text-base sm:text-lg md:text-xl font-semibold  ${index === 0 || index === 1 || index === 4 || index === 5 ? "text-[#FFFFFF]" : "text-[#090B21]"}`}
                >
                  {item.heading}
                </h3>

                <p
                  className={`text-[15px] font-normal leading-[25px] ${index === 0 || index === 1 || index === 4 || index === 5 ? "text-[#D1D1D1]" : index === 2 ? "text-[#000000A6]" : index === 3 ? "text-[#525252]" : ""}`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* methodology  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <p className="text-sm sm:text-base font-semibold text-[#0FEADB] sectionheading">
                OUR METHODOLOGY
              </p>
              <h2 className="text-[#FFFFFF]">
                A Structured Path to ISO 27001 Readiness
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                A phased approach that aligns security requirements with your
                business priorities, resources, and operational environment.
              </p>
            </div>
          </Animation>
          <div className="relative mt-10">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-[17px] w-[1px] bg-linear-to-b from-[#0FEADB] to-[#263028] sm:left-1/2 sm:-translate-x-1/2" />

            <div className="relative flex flex-col gap-5">
              {methodology.map((item, index) => {
                const isLeft = index % 2 === 0;
                const phase = String(index + 1).padStart(2, "0");

                return (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="relative grid min-h-[135px] grid-cols-[36px_minmax(0,1fr)] gap-x-4 sm:grid-cols-2"
                  >
                    {/* Number */}
                    <div className="absolute left-0 top-1 z-10 flex h-[36px] w-[36px] items-center justify-center ring-[0.5px] ring-[#C6FF3D7D] text-[11.52px] font-normal text-[#0FEADB] bg-[#0A0D0B] border border-[#0FEADB] sm:left-1/2 sm:-translate-x-1/2">
                      {phase}
                    </div>

                    {/* Left card */}
                    <div
                      className={`col-start-2 flex flex-col ${
                        isLeft
                          ? "items-start pl-0 text-left sm:col-start-1 sm:items-end sm:pr-10 sm:text-right"
                          : "hidden sm:col-start-1 sm:block sm:invisible"
                      }`}
                    >
                      {isLeft && (
                        <div className="space-y-3">
                          <p className="text-[15px] font-normal tracking-[2px] text-[#0FEADB]">
                            Phase {phase}
                          </p>

                          <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                            {item.heading}
                          </h3>

                          <p className="text-sm sm:text-[15px] font-normal max-w-md leading-[25px] text-[#D1D1D1]">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right card */}
                    <div
                      className={`col-start-2 flex flex-col justify-start ${
                        !isLeft
                          ? "items-start pl-0 text-left sm:col-start-2 sm:pl-10"
                          : "hidden sm:col-start-2 sm:block sm:invisible"
                      }`}
                    >
                      {!isLeft && (
                        <div className="space-y-3">
                          <p className="text-[15px] font-normal tracking-[2px] text-[#0FEADB]">
                            Phase {phase}
                          </p>

                          <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                            {item.heading}
                          </h3>

                          <p className="text-sm sm:text-[15px] font-normal max-w-md leading-[25px] text-[#D1D1D1]">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
          <p className="text-sm sm:text-base font-medium text-center mt-10 italic text-[#D1D1D1]">
            Every phase is tailored to your organisation's scope, maturity, and
            certification goals.
          </p>
        </div>
      </section>

      {/* PROJECT DELIVERABLES  */}
      <section className="w-full py-14 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-4 ">
            <div className="space-y-4 text-center lg:text-left sticky lg:top-24">
              <p className="text-sm sm:text-base font-semibold text-[#0FEADB] sectionheading">
                PROJECT DELIVERABLES
              </p>
              <h2 className="text-[#FFFFFF]">
                Clear Documentation. Actionable Security Improvements.
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                Every engagement is designed to provide practical outputs your
                team can use to implement, monitor, and maintain information
                security controls.
              </p>
            </div>
          </div>
          <div className="flex-1 px-5 border-l border-[#B1B1B114]">
            <div className="space-y-4">
              {projectDeliverables.map((item, index) => (
                <AnimatedCard key={index} className="flex items-start gap-5">
                  <div>
                    <p className="text-sm sm:text-basem font-semibold text-[#0FEADB]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <p className="text-sm sm:text-base font-normal max-w-md text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY CONTROL COVERAGE  */}
      <section className="relative w-full py-14 ">
        <div className="absolute inset-0 w-full">
          <Image src={yes} alt="control" fill className="w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#181E29]/90 to-[#090B211C]"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-sm sm:text-base font-semibold text-[#0FEADB] sectionheading">
              SECURITY CONTROL COVERAGE
            </p>
            <h2 className="text-[#FFFFFF]">
              Strengthen the Controls That Protect Your Business
            </h2>
            <p className="sectionDescription text-[#D1D1D1]">
              Explore the essential security controls that safeguard your
              information, systems, and business operations.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {controlSecurity.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="space-y-2"
                >
                  <div className="w-[58px] h-[11px] rounded-xl bg-linear-to-l from-[#0FEADB] to-[#6D758F]"></div>
                  <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-[#D1D1D1]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            ISO 27001
          </>
        }
        description="Everything you need to know about ISO 27001 certification in India and globally."
        faqs={iso27001faqs}
      />
      <section className="w-full pt-10 rounded-tl-[42px] rounded-tr-[42px] bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="lg:max-w-2xl space-y-4 text-center lg:text-left">
            <h2 className="font-semibold text-[#FFFFFF]">
              Get ISO 27001 Ready with ISECURION
            </h2>
            <p className="text-base sm:text-lg font-normal text-[#D1D1D1]">
              Book a free readiness discussion and receive a gap summary,
              timeline, effort estimate and indicative cost, all in one call.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link href="/company/contact">
                <button className="text-base font-medium flex items-center gap-2 px-4 py-3 rounded-[10px] cursor-pointer text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70]">
                  Book a Free Call{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" />
                  </span>
                </button>
              </Link>
              <Link href="tel:+918861201570" target="_blank">
                <button className="text-base font-medium flex items-center gap-2 px-4 py-3 rounded-[10px] cursor-pointer text-[#FFFFFF] border border-[#FFFFFF29]">
                  <span>
                    <Icon icon="flowbite:outgoing-call-outline" />
                  </span>
                  Call India (Bangalore): +91- 8861201570
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Iso27001;
