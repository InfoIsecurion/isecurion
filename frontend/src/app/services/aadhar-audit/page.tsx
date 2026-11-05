"use client";
import { Icon } from "@iconify/react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { AnimatedCard } from "../../../components/ui/Animation";
import Image from "next/image";
import yes from "../../../assets/services/yes.svg";
import FAQSection from "../../../components/sections/FAQSection";
import { useForm } from "react-hook-form";
import { aadharAudit } from "../../../services/api/contact";
interface ContactFormData {
  email: string;
  companyname: string;
  entity: string;
  turstileToken: string;
}

const aadharAuditServices = [
  "UIDAI AUA/KUA Audit Support",
  "Aadhaar Data Protection",
  "Security Control Assessment",
  "Audit Readiness & Reporting",
];

const keyObjectives = [
  {
    Icon: "grommet-icons:vulnerability",
    heading: "Protect Aadhaar-Related Information",
    description:
      "Review safeguards for sensitive identity data and related information handled within the approved scope.",
  },
  {
    Icon: "boxicons:check-shield",
    heading: "Assess Security Controls",
    description:
      "Evaluate technical and administrative controls protecting Aadhaar-enabled systems and services.",
  },
  {
    Icon: "boxicons:lock-keyhole",
    heading: "Support Regulatory Alignment",
    description:
      "Map audit findings to applicable UIDAI requirements and organizational obligations.",
  },
  {
    Icon: "iconmind:compliance-outline-regular",
    heading: "Strengthen Operational Security",
    description:
      "Identify security gaps and prioritize improvements across systems, access, and processes.",
  },
];

const organizationsSupported = [
  {
    Icon: "keyline-icons:chart-stock-up",
    heading: "Authentication User Agencies (AUAs)",
    description:
      "Organizations using Aadhaar authentication services for approved use cases.",
  },
  {
    Icon: "basil:exchange-solid",
    heading: "KYC User Agencies (KUAs)",
    description:
      "Entities using Aadhaar-based e-KYC services within their authorized scope.",
  },
  {
    Icon: "fe:sitemap",
    heading: "Sub-AUAs & Sub-KUAs",
    description:
      "Organizations providing services through an authorized AUA or KUA arrangement.",
  },
  {
    Icon: "boxicons:bank",
    heading: "Banks & Financial Institutions",
    description:
      "Institutions using Aadhaar-enabled services for permitted customer onboarding or verification workflows.",
  },
  {
    Icon: "boxicons:scan-search",
    heading: "FinTech & Digital Service Providers",
    description:
      "Businesses integrating approved Aadhaar-related services into digital customer journeys.",
  },
  {
    Icon: "icon-park-outline:preschool",
    heading: "Technology & Integration Partners",
    description:
      "Service providers supporting Aadhaar-related systems, integrations, and infrastructure.",
  },
];

const whyAadhaarAuditsMatter = [
  {
    Icon: "bx:lock",
    heading: "Protect Sensitive Information",
    description:
      "Review controls designed to protect identity data and related information.",
  },
  {
    Icon: "iconmind:compliance-outline-regular",
    heading: "Improve Regulatory Readiness",
    description:
      "Identify gaps against applicable UIDAI requirements and prepare supporting documentation.",
  },
  {
    Icon: "famicons:finger-print",
    heading: "Authentication Integrity",
    description: "Secures OTP, biometric, and Face Authentication mechanisms.",
  },
  {
    Icon: "griddy-icons:hacker",
    heading: "Fraud Prevention",
    description:
      "Detects vulnerabilities that could lead to identity misuse or unauthorized access.",
  },
  {
    Icon: "boxicons:check-shield",
    heading: "Operational Resilience",
    description:
      "Ensures uninterrupted authentication services even under threat conditions.",
  },
  {
    Icon: "akar-icons:people-group",
    heading: "Customer Trust",
    description:
      "Demonstrates responsible handling of citizen data to clients, users, and regulators.",
  },
];

const ourServices = [
  {
    Icon: "basil:document-outline",
    heading: "Regulatory Mapping",
    description:
      "Align security policies and organizational controls with applicable UIDAI regulatory requirements.",
    list: [
      "Align all policies, procedures, and systems with UIDAI guidelines",
      "Map current controls to regulatory requirements",
      "Identify compliance gaps and remediation priorities",
    ],
  },
  {
    Icon: "fa7-solid:exchange-alt",
    heading: "Data Flow Assessment",
    description:
      "Evaluate how Aadhaar-related information is collected, transmitted, stored, and managed.",
    list: [
      "Examine data collection, transmission, and storage practices",
      "Validate data retention and disposal mechanisms",
      "Ensure secure data handling across all touchpoints",
    ],
  },
  {
    Icon: "ant-design:mobile-twotone",
    heading: "Authentication Systems Review",
    description:
      "Assess the security and reliability of OTP, biometric, and face authentication workflows.",
    list: [
      "Evaluate OTP, biometric, and Face Authentication mechanisms",
      "Assess security and compliance of authentication workflows",
      "Validate API integration and error handling",
    ],
  },
  {
    Icon: "akar-icons:people-group",
    heading: "Identity & Access Management",
    description:
      "Strengthen user access governance, privileged permissions, and accountability.",
    list: [
      "Validate role-based access controls",
      "Review segregation of duties",
      "Assess privileged user controls and monitoring",
    ],
  },
  {
    Icon: "boxicons:lock-keyhole",
    heading: "Encryption & Cryptography",
    description:
      "Protect sensitive Aadhaar information through secure encryption and key management practices.",
    list: [
      "Ensure Aadhaar data encryption at rest and in transit",
      "Validate cryptographic key management",
      "Assess compliance with UIDAI encryption standards",
    ],
  },
  {
    Icon: "iconmind:compliance-outline-regular",
    heading: "Logging & Monitoring",
    description:
      "Maintain visibility into system activities through secure logging and continuous monitoring.",
    list: [
      "Assess audit trails and tamper-proof logs",
      "Review monitoring processes and alert mechanisms",
      "Validate log retention and analysis capabilities",
    ],
  },
  {
    Icon: "akar-icons:truck",
    heading: "Third-Party & Vendor Controls",
    description:
      "Ensure external partners and service providers follow required security practices.",
    list: [
      "Review compliance of Sub-AUAs and Sub-KUAs",
      "Assess vendor security controls",
      "Validate service provider agreements and oversight",
    ],
  },
  {
    Icon: "akar-icons:truck",
    heading: "Face Authentication Readiness",
    description:
      "Assess the security and reliability of face authentication systems.",
    list: [
      "Ensure API integration meets UIDAI requirements",
      "Validate biometric capture and processing systems",
      "Assess liveness detection and anti-spoofing controls",
    ],
  },
];

const ourApproach = [
  {
    phase: "Phase 01",
    heading: " Planning & Scoping",
    description:
      "Understand the organization’s role, Aadhaar-related services, system boundaries, and applicable requirements.",
  },
  {
    phase: "Phase 02",
    heading: "Documentation Review",
    description:
      "Review policies, procedures, risk records, architecture documents, and relevant evidence.",
  },
  {
    phase: "Phase 03",
    heading: "Technical & Control Assessment",
    description:
      "Evaluate in-scope infrastructure, applications, access controls, data safeguards, and security processes.",
  },
  {
    phase: "Phase 04",
    heading: "Risk & Gap Analysis",
    description:
      "Identify control gaps, assess their potential impact, and prioritize findings.",
  },
  {
    phase: "Phase 05",
    heading: "Reporting & Recommendations",
    description:
      "Document observations, supporting evidence, risk ratings, and recommended corrective actions.",
  },
  {
    phase: "Phase 06",
    heading: "Remediation & Follow-Up",
    description:
      "Support remediation planning and follow-up validation, where included in the engagement.",
  },
];

const aadharAuditBenefits = [
  {
    heading: "UIDAI Audit Report",
    description:
      "Detailed assessment of controls, compliance status, and identified risks.",
  },
  {
    heading: "Executive Summary",
    description:
      "A concise overview of key findings, risk exposure, and recommended priorities.",
  },
  {
    heading: "UIDAI Requirement Gap Analysis",
    description:
      "Mapping of relevant findings to applicable requirements within the agreed scope.",
  },
  {
    heading: "Risk Register",
    description:
      "A prioritized record of identified risks, potential impact, and recommended actions.",
  },
  {
    heading: "Compliance Evidence Pack",
    description:
      "Organized assessment records and supporting evidence, as applicable.",
  },
  {
    heading: "Follow-Up Support",
    description:
      "Remediation tracking and validation support, where included in the engagement.",
  },
];

const ourDifferentiators = [
  {
    heading: "Technical Expertise",
    description:
      "Deep understanding of authentication systems, encryption, and network security.",
  },
  {
    heading: "Regulatory Knowledge",
    description:
      "Expertise in UIDAI, AUA/KUA, Sub-AUA/Sub-KUA, and Face Authentication compliance.",
  },
  {
    heading: "Audit Experience",
    description:
      "Worked with banks, fintechs, telecom operators, and government agencies.",
  },
  {
    heading: "Actionable Recommendations",
    description: "Practical guidance tailored to operational realities.",
  },
  {
    heading: "End-to-End Support",
    description: "From planning to remediation and continuous compliance.",
  },
  {
    heading: "Incident Response & BCP",
    description:
      "We ensure your organization is not just compliant but secure, resilient, and trusted in India's digital identity ecosystem.",
  },
];

const aadharFaqs = [
  {
    question: "What is Aadhaar/UIDAI Audit?",
    answer:
      "It is a compliance audit for AUAs, KUAs, Sub-AUAs, Sub-KUAs, and entities implementing Face Authentication to ensure alignment with UIDAI security and operational guidelines.",
  },
  {
    question: "Who is required to undergo the audit?",
    answer:
      "Banks, NBFCs, fintechs, telecom operators, government agencies, and Sub-AUA/Sub-KUA entities.",
  },
  {
    question: "Does the audit include Face Authentication systems?",
    answer:
      "Yes, all biometric and Face Authentication systems are assessed for security and compliance.",
  },
  {
    question: "Can audits be conducted remotely?",
    answer:
      "Yes, with secure access to systems and submission of required documents.",
  },
  {
    question: "What deliverables will I receive?",
    answer:
      "Detailed audit report, executive summary, gap analysis, risk register, remediation roadmap, and evidence documentation.",
  },
  {
    question: "Does ISECURION assist with remediation?",
    answer: "Yes, we provide guidance, verification, and re-audit support.",
  },
  {
    question: "Is this audit mandatory?",
    answer:
      "Yes, UIDAI mandates compliance for all AUA/KUA, Sub-AUA/Sub-KUA, and entities using authentication services.",
  },
  {
    question: "How long does the audit take?",
    answer: "Duration depends on the size, complexity, and number of systems.",
  },
  {
    question: "Does the audit improve operational security?",
    answer:
      "Absolutely, it strengthens authentication processes, monitoring, and incident response.",
  },
  {
    question: "Are third-party vendors included?",
    answer:
      "Yes, Sub-AUAs, Sub-KUAs, and integration partners are included in the scope.",
  },
  {
    question: "Is encryption mandatory?",
    answer:
      "Yes, UIDAI requires encryption of data at rest and in transit for all Aadhaar information.",
  },
  {
    question: "Does the audit assess logs and monitoring?",
    answer:
      "Yes, tamper-proof audit trails and real-time monitoring systems are reviewed.",
  },
  {
    question: "Are biometric systems tested?",
    answer:
      "Yes, both fingerprint and Face Authentication systems are validated.",
  },
  {
    question: "Can multiple entities be audited together?",
    answer:
      "Yes, scalable frameworks allow auditing of multiple systems and entities concurrently.",
  },
  {
    question: "Why choose ISECURION?",
    answer:
      "Our combination of regulatory expertise, cybersecurity knowledge, and practical guidance ensures secure, compliant, and resilient Aadhaar/UIDAI operations.",
  },
];

function AadharAudit() {
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
    console.log(data);
    try {
      if (!turnstileToken) {
        toast.error("Please complete CAPTCHA verification.");
        return;
      }
      const response = await aadharAudit({ ...data, turnstileToken });
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
      <section className="relative bg-[#000000] py-14 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-10 ">
          <div className="absolute w-[650px] h-[650px] blur-[130px] rounded-full pointer-events-none bg-[#3B9E6A45]"></div>
          {/* left  */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              UIDAI Compliance Experts
            </p>
            <h1 className="text-[#FFFFFF]">
              Aadhaar/UIDAI Audit Services for AUA, KUA, Sub-AUA & Face
              Authentication
            </h1>
            <p className="text-base sm:text-lg font-medium leading-[28px] text-[#D1D1D1]">
              Strengthen the security and compliance of your Aadhaar-enabled
              systems with a structured audit of information security controls,
              data protection practices, and operational safeguards.
            </p>
            <div className="mx-auto lg:mx-0">
              <ul className="space-y-2">
                {aadharAuditServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-sm font-normal flex items-center gap-3 text-[#D1D1D1]"
                  >
                    <span className="inline-block w-[6px] h-[6px] bg-[#3B9E6A]"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <button className="text-[15px] font-medium flex items-center px-3 py-3 mx-auto lg:mx-0 rounded-[10px] text-[#31435C] bg-[#FFFFFF]">
              Request Audit Quote{" "}
              <span>
                <Icon icon="akar-icons:arrow-right" />
              </span>
            </button>
          </div>
          {/* right  */}
          <div className="flex-1 px-6 py-6 rounded-[23px] bg-[#202123]">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF]">
                Request UIDAI Audit Consultation
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#D9D9D9]">
                Discuss your UIDAI audit requirements with our experts.
              </p>
            </div>
            <form className="mt-5 space-y-3" onSubmit={handleSubmit(submit)}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-[#FEFEFE]"
                  >
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className={`text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.email ? "border border-red-500" : "border-[1.14px] border-[#262D3D]"}`}
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
                    className="text-sm font-medium text-[#FEFEFE]"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="company name"
                    className={`text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.companyname ? "border border-red-500" : "border-[1.14px] border-[#262D3D]"}`}
                    {...register("companyname", {
                      required: "Company name is required",
                    })}
                  />
                  {errors.companyname && (
                    <p className="text-sm font-normal text-red-500">
                      {errors.companyname.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm font-medium text-[#FEFEFE]"
                >
                  Entity Type <span className="text-red-500">*</span>
                </label>
                <select
                  name=""
                  id=""
                  className={`text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.entity ? "border border-red-500" : "border-[1.14px] border-[#262D3D]"}`}
                  {...register("entity", { required: "Entity is required" })}
                >
                  <option value="">Select your Entity Type</option>
                  <option value="AUA (Authentication User Agency)">
                    AUA (Authentication User Agency)
                  </option>
                  <option value="KUA (eKYC User Agency)">
                    KUA (eKYC User Agency)
                  </option>
                  <option value="Sub-AUA">Sub-AUA</option>
                  <option value="Sub-KUA">Sub-KUA</option>
                  <option value="Face Authentication Provider">
                    Face Authentication Provider
                  </option>
                  <option value="Bank/NBFC">Bank/NBFC</option>
                  <option value="FinTech Company">FinTech Company</option>
                  <option value="Telecom Operator">Telecom Operator</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Other">Other</option>
                </select>
                {errors.entity && (
                  <p className="text-sm font-normal text-red-500">
                    {errors.entity.message}
                  </p>
                )}
              </div>
              <div className=" flex flex-col gap-2">
                <p className="text-sm font-medium text-white">Captcha</p>

                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  required
                  className="appearance-auto not-checked:appearance-none w-4 h-4 rounded-sm shrink-0 cursor-pointer  text-white border-[1.4px] border-[#D1D1D1] bg-[#202123] "
                />{" "}
                <p className="text-xs font-medium leading-[22px] text-[#D1D1D1]">
                  By clicking submit below, you agree to our Terms of Use and
                  Privacy Policy. Additionally, you consent to allow ISECURION
                  Technology & Consulting Pvt. Ltd. to store and process the
                  personal information submitted above to provide you the
                  content requested.
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-sm sm:text-base font-semibold flex items-center justify-center gap-3 px-3 py-3 rounded-[10px] text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70]"
              >
                Request UIDAI Audit{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING AADHAAR AUDITS  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row justify-between gap-10">
          {/* left  */}
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
              UNDERSTANDING AADHAAR AUDITS
            </p>
            <h2 className="text-[#FEFEFE]">
              Secure Your Aadhaar Ecosystem with Confidence
            </h2>
            <p className="sectionDescription text-[#D1D1D1]">
              Organizations involved in Aadhaar authentication and related
              services must protect sensitive identity information and maintain
              appropriate security controls across their systems and processes.
            </p>
            <p className="sectionDescription text-[#D1D1D1]">
              An Aadhaar / UIDAI audit evaluates the security, governance, and
              operational controls within the agreed assessment scope. It helps
              identify gaps, assess risks, and strengthen readiness for
              applicable UIDAI requirements.
            </p>
          </div>
          {/* right  */}
          <div className="w-full lg:w-[40%]">
            <p className="text-sm sm:text-base font-semibold text-center lg:text-left uppercase text-[#3B9E6A]">
              Key Objectives of an Aadhaar Audit
            </p>
            <div className="space-y-3 mt-8">
              {keyObjectives.map((objective, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="flex gap-3 sm:gap-4"
                >
                  <div className="w-[48px] h-[48px] flex items-center justify-center rounded-xl shrink-0 bg-[#8D8D8D57]">
                    <Icon
                      icon={objective.Icon}
                      className="w-[24px] h-[24px] text-[#FFFFFF]"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[17px] font-medium text-[#FFFFFF]">
                      {objective.heading}
                    </h3>
                    <p className="text-sm font-normal leading-[24px] text-[#D1D1D1]">
                      {objective.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS WE SUPPORT  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="max-w-3xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
              ORGANIZATIONS WE SUPPORT
            </p>
            <h2 className="text-[#FFFFFF]">
              Aadhaar Audit Support Across the Identity Ecosystem
            </h2>
            <p className="sectionDescription text-[#D1D1D1]">
              Support security and compliance needs for organizations that use
              or provide Aadhaar-enabled services.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
              {organizationsSupported.map((organization, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.12}
                  className="relative flex flex-col justify-between px-6 py-5 space-y-3 rounded-lg bg-[#66666614]"
                >
                  <div className="absolute left-0 h-[23px] w-[2px] rounded-tr-sm rounded-br-sm  bg-[#3B9E6A]"></div>
                  <div className="flex justify-between gap-4">
                    <h3 className="text-[15px] sm:text-[17px] font-medium text-[#FFFFFF]">
                      {organization.heading}
                    </h3>
                    <span>
                      <Icon
                        icon={organization.Icon}
                        className="w-[30px] h-[30px] text-[#3B9E6A]"
                      />
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] font-normal leading-[24px] text-[#D1D1D1]">
                    {organization.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY AADHAAR AUDITS MATTER  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
              WHY AADHAAR AUDITS MATTER
            </p>
            <h2 className="text-[#FFFFFF]">
              Build Trust Through Stronger Identity Security
            </h2>
            <p className="sectionDescription text-[#D1D1D1]">
              A structured audit helps organizations understand security risks
              across Aadhaar-related services and improve the safeguards that
              protect sensitive identity information.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {whyAadhaarAuditsMatter.map((audit, index) => (
                <div
                  key={index}
                  className={`p-4 ${index === 0 ? "bg-[#060D1B]" : index === 1 ? "bg-[#08142D]" : index === 2 || index === 3 ? "bg-linear-to-b from-[#3B9E6A] to-[#000000A6]" : index === 4 ? "bg-[#071126]" : "bg-[#060D1B]"}`}
                >
                  <div>
                    <Icon
                      icon={audit.Icon}
                      className="w-[30px] h-[30px] text-[#FFFFFF]"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium mt-10 text-[#FFFFFF]">
                    {audit.heading}
                  </h3>
                  <p className="text-base font-normal mt-3 text-[#D1D1D1]">
                    {audit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className=" lg:max-w-2xl space-y-4 text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold uppercase text-[#3B9E6A]">
              Our Services
            </p>
            <h2 className="text-[#FFFFFF]">
              Comprehensive Aadhaar/UIDAI Audit Coverage
            </h2>
            <p className="sectionDescription text-[#D1D1D1]">
              End-to-end audit services covering all critical areas of UIDAI
              compliance.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              {ourServices.map((service, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.12}
                  className="p-5 rounded-[9px] bg-[#0E1623] border border-[#18242F]"
                >
                  <div className="flex">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold tracking-[3px] flex items-center  gap-2 text-[#3B9E6A]">
                        <span className="inline-block w-[35px] h-[1px] bg-[#3B9E6A]"></span>{" "}
                        {service.heading}
                      </h3>
                      <p className="text-base font-normal text-[#D1D1D1]">
                        {service.description}
                      </p>
                    </div>
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-xl shrink-0 text-[#FFFFFF] bg-[#182331]">
                      <Icon icon={service.Icon} />
                    </div>
                  </div>
                  <div className="mt-4 ml-3">
                    <ul className="list-disc space-y-2">
                      {service.list.map((item, listindex) => (
                        <li
                          key={listindex}
                          className="text-[15px] font-normal text-[#D1D1D1]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base font-semibold text-center lg:text-left uppercase text-[#3B9E6A]">
              Our Approach
            </p>
            <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left">
              <h2 className="w-full lg:w-[50%] text-[#FFFFFF]">
                A Structured, Risk-Based Aadhaar Audit Process
              </h2>
              <p className="w-full lg:w-[40%] sectionDescription text-[#D1D1D1]">
                A clear assessment journey designed to identify gaps, validate
                controls, and support practical security improvements.
              </p>
            </div>
          </div>
          <div className="relative mt-10">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-[17px] w-[1px] bg-linear-to-b from-[#3B9E6A] to-[#263028] sm:left-1/2 sm:-translate-x-1/2" />

            <div className="relative flex flex-col gap-5">
              {ourApproach.map((item, index) => {
                const isLeft = index % 2 === 0;
                const phase = String(index + 1).padStart(2, "0");

                return (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="relative grid min-h-[135px] grid-cols-[36px_minmax(0,1fr)] gap-x-4 sm:grid-cols-2"
                  >
                    {/* Number */}
                    <div className="absolute left-0 top-1 z-10 flex h-[36px] w-[36px] items-center justify-center ring-[0.5px] ring-[#C6FF3D7D] text-[11.52px] font-normal text-[#3B9E6A] bg-[#0A0D0B] border border-[#3B9E6A] sm:left-1/2 sm:-translate-x-1/2">
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
                          <p className="text-[15px] font-normal tracking-[2px] text-[#3B9E6A]">
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
                          <p className="text-[15px] font-normal tracking-[2px] text-[#3B9E6A]">
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
        </div>
      </section>

      {/* WHAT YOU RECEIVE  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-8 lg:gap-15">
          {/* left  */}
          <div className="flex-1">
            <div className="space-y-4 lg:sticky lg:top-24 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
                WHAT YOU RECEIVE
              </p>
              <h2 className="text-[#FFFFFF]">
                Audit Reports & Actionable Security Insights
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                Receive structured findings, compliance documentation, and
                practical recommendations to support audit readiness and
                security improvements.
              </p>
            </div>
          </div>
          {/* right  */}
          <div className="flex-1 px-4 sm:px-10 border-l border-[#B1B1B114]">
            <div className="space-y-4">
              {aadharAuditBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div>
                    <p className="text-sm sm:text-base font-semibold  text-[#3B9E6A]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {benefit.heading}
                    </h3>
                    <p className="text-base sm:text-[17px] font-normal text-[#D1D1D1]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR DIFFERENTIATORS  */}
      <section className="relative w-full py-14 ">
        <div className="absolute inset-0 w-full">
          <Image src={yes} alt="control" fill className="w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#181E29]/90 to-[#090B211C]"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-sm sm:text-base font-semibold text-[#3B9E6A]">
              OUR DIFFERENTIATORS
            </p>
            <h2 className="text-[#FFFFFF]">
              A Security-Focused Partner for Aadhaar Audit Readiness
            </h2>
            <p className="sectionDescription text-[#D1D1D1]">
              Combine cybersecurity assessment expertise with practical guidance
              to strengthen identity-related systems and processes.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {ourDifferentiators.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="space-y-2"
                >
                  <div className="w-[58px] h-[11px] rounded-xl bg-linear-to-l from-[#3B9E6A] to-[#6D758F]"></div>
                  <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base font-normal leading-[26px] text-[#D1D1D1]">
                    {item.description}
                  </p>
                </AnimatedCard>
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
            Aadhaar/UIDAI Audit
          </>
        }
        description="Find answers to common questions about UIDAI audit scope, security controls, and audit readiness."
        faqs={aadharFaqs}
      />

      <section className="w-full py-14 rounded-tl-[42px] rounded-tr-[42px] bg-[#121828]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="mx-0 lg:max-w-lg font-semibold text-[#FFFFFF]">
              Ready to Achieve UIDAI Compliance?
            </h2>
            <p className="mx-0 lg:max-w-3xl text-base sm:text-[17px] font-medium text-[#D1D1D1]">
              Partner with ISECURION for comprehensive Aadhaar/UIDAI audit
              services that ensure security, compliance, and operational
              resilience.
            </p>
            <button className="mx-auto lg:mx-0 text-sm sm:text-[15px] font-medium flex items-center gap-3 px-4 py-4 rounded-[10px] text-[#FFFFFF] border-2 border-[#3263B199] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70]">
              Schedule UIDAI Audit Consultation{" "}
              <span>
                <Icon
                  icon="akar-icons:arrow-right"
                  className="w-[23px] h-[23px]"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AadharAudit;
