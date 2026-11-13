"use client";
import { Icon } from "@iconify/react";
import {
  AnimatedCard,
  Animation,
  GradientIcon,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";
import { motion } from "framer-motion";
import world from "../../../assets/services/world.svg";
import Image from "next/image";
import isecurionapartbackground from "../../../assets/services/isecurion-apart-background.png";
import FAQSection from "../../../components/sections/FAQSection";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { vcsio } from "../../../services/api/contact";
import Link from "next/link";

interface ContactFormData {
  fullname: string;
  companyname: string;
  email: string;
  phonenumber: string;
  location: string;
  engagement: string;
  message: string;
}

const cisoServices = [
  {
    Icon: "mingcute:file-security-line",
    heading: "Security Governance",
  },
  {
    Icon: "iconmind:eval-report-outline-regular",
    heading: "Risk & Compliance",
  },
  {
    Icon: "at-icons:line-graph",
    heading: "Security Strategy",
  },
  {
    Icon: "boxicons:lock-keyhole",
    heading: "Security Risk Management",
  },
];

const services = [
  {
    heading: "Security Leadership",
    description:
      "Executive-level cybersecurity strategy and governance without a full-time hire.",
    Icon: "iconmind:security-champion-outline-bold",
    bgColor: "#0F66EA",
  },
  {
    heading: "Risk & Compliance",
    description:
      "Multi-framework compliance management - RBI, CERT-In, ISO 27001, SOC 2 and more.",
    Icon: "fa-solid:shield-alt",
    bgColor: "#C8912A",
  },
  {
    heading: "Flexible Engagement",
    description:
      "Retainer, on-demand, or fully outsourced, designed to scale with your growth.",
    Icon: "boxicons:calendar-check",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Board Reporting",
    description:
      "Executive dashboards and board-level security briefings for confident decisions.",
    Icon: "iconmind:api-analytics-outline-regular",
    bgColor: "#7D70F0",
  },
];

const whoNeedsCiso = [
  {
    Icon: "boxicons:bank",
    heading: "Regulated Organizations",
    description:
      "Banks, NBFCs, fintechs, and regulated entities managing RBI, CERT-In, SEBI/CSCRF, and IRDAI requirements.",
  },
  {
    Icon: "iconmind:compliance-outline-regular",
    heading: "Compliance & Audit Readiness",
    description:
      "Organizations pursuing ISO 27001 or SOC 2, meeting DPDP obligations, or strengthening security documentation and controls.",
  },
  {
    Icon: "healthicons:chart-cured-increasing-24px",
    heading: "Businesses & Startups",
    description:
      "Scaling companies that need investor-ready security, enterprise client assurance, and a roadmap without a full-time CISO.",
  },
  {
    Icon: "akar-icons:people-group",
    heading: "No Security Leadership",
    description:
      "Businesses needing interim CISO support, executive security guidance, and clear board-level accountability.",
  },
  {
    Icon: "ri:global-line",
    heading: "Businesses Serving Global Clients",
    description:
      "Organizations handling security questionnaires, client assessments, & international security expectations across markets.",
  },
  {
    Icon: "charm:shield-warning",
    heading: "Incident-Prone Businesses",
    description:
      "Organizations recovering from cyber incidents that need stronger governance, incident response planning, & measures to prevent recurrence.",
  },
];

const cisoStas = [
  {
    number: "500+",
    heading: "Clients Served Globally",
    description:
      "From startups to Fortune 500s, we help organizations across industries secure what matters most.",
  },
  {
    number: "10+",
    heading: "Years of Experience",
    description:
      "A decade of hands-on expertise in cybersecurity, risk and resilience.",
  },
  {
    number: "13+",
    heading: "Compliance Frameworks",
    description:
      "Aligned with global standards to help you meet today’s and tomorrow’s challenges.",
  },
];

const indiaRegulatoryCiso = [
  "RBI",
  "CERT-In",
  "DPDP Act",
  "SEBI / CSCRF",
  "IRDAI",
];

const globalSecurityStandards = [
  "ISO 27001",
  "SOC 2",
  "GDPR",
  "HIPAA",
  "PDPA",
  "NIST CSF",
];

const regulatoryAndCompliance = [
  {
    Icon: "iconmind:eval-report-outline-regular",
    title: "Regulatory Compliance",
    description:
      "Coordinate applicable compliance requirements, gap assessments, evidence, and audit readiness.",
    bgColor: "#0F66EA",
  },
  {
    Icon: "fa-solid:shield-alt",
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate security and compliance risks.",
    bgColor: "#C8912A",
  },
  {
    Icon: "cuida:settings-outline",
    title: "Security Controls",
    description:
      "Implement and monitor effective security controls and processes.",
    bgColor: "#3B9E6A",
  },
  {
    Icon: "material-symbols:description-outline-rounded",
    title: "Executive Reporting",
    description:
      "Enable visibility, build accountability, and support informed decisions.",
    bgColor: "#7E71F0",
  },
];

const engagementLifeCycle = [
  {
    title: "Initial Assessment",
    description:
      "Evaluate current security posture, risks, and compliance gaps.",
    period: "Week 1-2",
  },
  {
    title: "Strategy Development",
    description:
      "Evaluate current security posture, risks, and compliance gaps.",
    period: "Month 1",
  },
  {
    title: "Governance Implementation",
    description: "Establish policies, processes, and control frameworks.",
    period: "Months 1–3",
  },
  {
    title: "Monitoring & Metrics",
    description:
      "Track risk, measure progress, and drive continuous improvement.",
    period: "Month 3",
  },
  {
    title: "Continuous Advisory",
    description: "Provide ongoing guidance and strategic security support.",
    period: "Continuous",
  },
];

const engagementMilestones = [
  {
    period: "Week 1–2",
    title: "Security assessment & current-state analysis",
    description: "Evaluate posture, identify gaps and define priorities.",
  },
  {
    period: "Month 1",
    title: "Security roadmap & risk register",
    description: "Set strategic direction and prioritize key risks.",
  },
  {
    period: "Months 1–3",
    title: "Governance policies & control setup",
    description: "Implement frameworks, policies and process controls.",
  },
  {
    period: "Month 3",
    title: "Audit readiness evidence",
    description: "Prepare reports, documentation and board updates.",
  },
  {
    period: "Ongoing",
    title: "Advisory, monitoring & optimization",
    description:
      "Track performance, adapt to changes and provide continuous support.",
  },
];
const regulatoryCoverage = [
  {
    Icon: "lucide:landmark",
    heading: "BFSI & FinTech",
    subheading: "RBI · CERT-In · DPDP",
    description: "Manage risk, ensure compliance and build customer trust.",
  },
  {
    Icon: "lucide:route",
    heading: "SEBI-Regulated Entities",
    subheading: "CSCRF · Reporting",
    description: "Meet market regulations and protect investor  trust.",
  },
  {
    Icon: "akar-icons:cloud",
    heading: "IT / SaaS",
    subheading: "ISO 27001 · SOC 2 · GDPR",
    description: "Secure your platforms and customer data.",
  },
  {
    Icon: "lucide:rocket",
    heading: "Startups & High-Growth",
    subheading: "Security foundations",
    description: "Build a strong security foundation for scale.",
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
const isecurionApart = [
  {
    Icon: "akar-icons:people-group",
    heading: "One Coordinated Team",
    description:
      "Bring security strategy, governance, risk management, and compliance expertise together under one engagement.",
  },
  {
    Icon: "icon-park-twotone:database-network-point",
    heading: "Multi-Framework Expertise",
    description:
      "Coordinate overlapping regulatory and security requirements across applicable frameworks without managing each in isolation.",
  },
  {
    Icon: "akar-icons:briefcase",
    heading: "Business-Aligned Strategy",
    description:
      "Prioritize security initiatives based on business objectives, risk exposure, regulatory obligations, and available resources.",
  },
  {
    Icon: "iconmind:visibility-outline-bold",
    heading: "Executive-Level Visibility",
    description:
      "Give leadership clear reporting on security posture, key risks, compliance progress, and recommended actions.",
  },
];

const deliverable = [
  {
    heading: "Security Strategy & Roadmap",
    description:
      "12–36 month security strategy with prioritised quarterly milestones and budget guidance.",
  },
  {
    heading: "Risk Assessment & Treatment Plan",
    description:
      "Enterprise-wide quantified risk register with formal mitigation and acceptance decisions.",
  },
  {
    heading: "Governance Policies & ISMS",
    description: (
      <>
        Complete security governance documents, ISMS policies, and procedure
        frameworks aligned with{" "}
        <span className="text-[#0F66EA]">ISO 27001.</span>
      </>
    ),
  },
  {
    heading: "Multi-Framework Gap Analysis",
    description:
      "Comprehensive gap analysis against RBI, CERT-In, DPDP, ISO 27001, SOC 2, GDPR, and regional standards.",
  },
  {
    heading: "Business Continuity & IR Plans",
    description: (
      <>
        Structured BCMS, DR plan, and{" "}
        <span className="text-[#0F66EA]">incident response</span> playbooks with
        CERT-In reporting workflows.
      </>
    ),
  },
  {
    heading: "Executive Security Dashboard",
    description:
      "KPI-driven quarterly dashboards, risk heat maps, and compliance scorecards for leadership.",
  },
  {
    heading: "Awareness & Training Programs",
    description: (
      <>
        Security awareness modules,{" "}
        <span className="text-[#0F66EA]">phishing simulations</span>, and annual
        training calendars.
      </>
    ),
  },
  {
    heading: "Board-Level Governance Reports",
    description:
      "Monthly/quarterly executive governance reports and board presentations with strategic risk insights.",
  },
  {
    heading: "Vendor Security Assessment",
    description:
      "Third-party risk evaluation frameworks aligned with RBI and CERT-In TPRM requirements.",
  },
  {
    heading: "Cloud Security Architecture",
    description: (
      <>
        <span className="text-[#0F66EA]">Cloud security</span> design review and
        multi-cloud governance for AWS, Azure, GCP with data localisation
        guidance.
      </>
    ),
  },
  {
    heading: "Audit Readiness Support",
    description:
      "Pre-audit assessments, evidence collection, & audit coordination for ISO 27001, SOC 2, RBI IS, SEBI, & CERT-In audits.",
  },
  {
    heading: "DevSecOps Integration",
    description: (
      <>
        <span className="text-[#0F66EA]">DevSecOps</span> maturity assessment
        and secure SDLC implementation guidance for technology teams.
      </>
    ),
  },
];

const vcisoFAQs = [
  {
    question: "What is a vCISO (Virtual CISO)?",
    answer:
      "A vCISO (Virtual Chief Information Security Officer) is an outsourced security leader who provides high-level strategic and operational cybersecurity leadership to organisations without a full-time in-house CISO. ISECURION's vCISO services are available across India (Bangalore, Mumbai, Delhi, Pune, Hyderabad, Chennai) and globally across USA, Singapore, UAE, Australia, and Europe.",
  },
  {
    question: "Why do Indian companies specifically need vCISO services?",
    answer:
      "Indian organisations face some of the most complex regulatory requirements in the world - mandatory CERT-In incident reporting within 6 hours, RBI cybersecurity frameworks for banks and NBFCs, DPDP Act data protection obligations, SEBI's CSCRF for capital market entities, and IRDAI guidelines for insurers. Simultaneously, Indian IT exporters face ISO 27001 and SOC 2 demands from global enterprise clients. A vCISO brings deep expertise in all these frameworks simultaneously, at a fraction of the cost of a full-time hire in India's competitive CISO hiring market.",
  },
  {
    question: "What is the difference between vCISO and GRC services?",
    answer:
      "A vCISO is a strategic security leadership role - an experienced executive who owns your organisation's entire information security function, including governance, risk, compliance, incident response, board advisory, cloud security, vendor risk, and security culture. GRC (Governance, Risk & Compliance) is a framework or function - typically focused on policy documentation, risk registers, and compliance gap analysis. GRC is a subset of what a vCISO manages. ISECURION's vCISO service includes and leads GRC, plus cloud security, AppSec, TPRM, awareness training, and executive reporting - under one unified engagement.",
  },
  {
    question: "Which Indian cities does ISECURION serve for vCISO services?",
    answer:
      "ISECURION provides vCISO services across all major Indian cities including Bangalore, Mumbai, Delhi NCR, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Noida, Gurgaon, and beyond. Our engagements are available through flexible remote, hybrid, and on-site models. ISECURION has offices in Bengaluru (HQ), Kolkata, Ahmedabad, and Noida for on-site engagements across India.",
  },
  {
    question: "Can a vCISO help with RBI compliance for banks and NBFCs?",
    answer:
      "Yes. ISECURION's vCISOs have direct experience with RBI's Master Direction on IT governance, cybersecurity frameworks, IS audit requirements, incident reporting obligations, and board-level cyber risk reporting. We help banks, NBFCs, payment aggregators, fintech companies, and co-operative banks design and maintain RBI-compliant security programmes, prepare for RBI IS audits, and meet cybersecurity resilience benchmarks set by the regulator.",
  },
  {
    question: "Can a vCISO help with DPDP Act 2023 compliance?",
    answer:
      "Yes. India's Digital Personal Data Protection (DPDP) Act 2023 creates significant new obligations for organisations that process personal data of Indian residents. ISECURION's vCISO helps classify personal data, implement consent management frameworks, establish breach notification procedures, support DPO appointment, and build technical controls aligned with DPDP obligations.",
  },
  {
    question: "What industries benefit most from vCISO services in India?",
    answer:
      "In India, the highest-impact sectors include BFSI (banks, NBFCs, fintech, insurance, capital markets), IT/ITES and SaaS companies exporting to global markets, healthcare and health-tech, e-commerce and digital platforms, government-adjacent IT companies, manufacturing and automotive technology firms, and early-stage startups seeking ISO 27001 or SOC 2 certification to win enterprise customers.",
  },
  {
    question: "How quickly can ISECURION deploy a vCISO?",
    answer:
      "We can onboard a Virtual CISO within 1-2 weeks following an initial briefing and engagement agreement. For organisations facing urgent regulatory deadlines (CERT-In audit, RBI IS audit, SOC 2 readiness window), we prioritise rapid onboarding to ensure momentum is not lost.",
  },
  {
    question: "Is vCISO suitable for startups and early-stage companies?",
    answer:
      "Absolutely. vCISO is ideal for startups and SMEs that need enterprise-grade security leadership but cannot justify a full-time CISO hire. We offer foundational vCISO packages specifically designed for early-stage organisations - helping them achieve ISO 27001 certification, SOC 2 readiness, or DPDP compliance to win enterprise customers and meet investor requirements.",
  },
  {
    question: "Does the vCISO participate in board and management meetings?",
    answer:
      "Yes. Our vCISO attends and presents at board meetings, executive committees, IT steering committees, and audit committee meetings - briefing leadership on security posture, strategic risks, compliance status, and investment recommendations. This is particularly important for organisations regulated by RBI, SEBI, and IRDAI where board-level accountability for cybersecurity is explicitly required by the regulator.",
  },
  {
    question:
      "Can vCISO services handle multiple compliance frameworks simultaneously?",
    answer:
      "Yes. ISECURION's vCISO is specifically designed for multi-framework compliance. Many Indian organisations need to simultaneously address RBI requirements, CERT-In obligations, ISO 27001 certification for clients, and SOC 2 reports for US customers. We use unified control mapping to avoid duplication of effort - ensuring evidence collected for one framework satisfies requirements across multiple standards efficiently.",
  },
  {
    question: "How can we get started with ISECURION's vCISO services?",
    answer:
      "Reach out via our Contact Page, fill the consultation form at the top of this page, call us at +91-88612 01570, or email info@isecurion.com. We will schedule an initial consultation to understand your organisation's size, regulatory obligations, security maturity, and engagement needs - and provide a tailored proposal within 48 hours.",
  },
  {
    question:
      "What should we look for when evaluating CISO advisory companies?",
    answer:
      "When shortlisting CISO advisory companies, look for demonstrated regulatory depth (RBI, CERT-In, DPDP, SEBI, ISO 27001, SOC 2), a team-based delivery model rather than a single consultant, references from your industry, clear board-reporting capability, and the ability to move from advisory recommendations to hands-on implementation. ISECURION combines all of these - a CERT-In empanelled, ISO 27001:2022 certified practice with a bench of certified vCISOs across BFSI, IT/ITES, healthcare, and manufacturing sectors.",
  },
];

function Vicso() {
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
      const response = await vcsio({ ...data, turnstileToken });
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
      <section className="relative overflow-hidden   py-14 flex items-center  bg-[#000000]">
        <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-15">
          <div className="absolute w-[650px] h-[650px] left-20 rounded-full blur-[200px] pointer-events-none bg-[#0F66EA80]"></div>
          <div className="flex-1">
            <div className="space-y-4 text-center lg:text-left">
              <p
                className="text-sm sm:text-base font-semibold text-[#0F66EA] opacity-0 animate-hero-reveal sectionheading"
                style={{ animationDelay: "150ms" }}
              >
                VIRTUAL CISO SERVICES
              </p>
              <h1
                className="text-[#FFFFFF] opacity-0 animate-hero-reveal"
                style={{ animationDelay: "300ms" }}
              >
                Strategic Security Leadership. Without the Full-Time Overhead.
              </h1>
              <p
                className="text-base sm:text-lg font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D1D1D1] opacity-0 animate-hero-reveal"
                style={{ animationDelay: "450ms" }}
              >
                Access experienced cybersecurity leadership to manage risk,
                strengthen governance, and navigate compliance requirements.
                ISECURION’s Virtual CISO services help turn security priorities
                into a practical, business-aligned strategy.
              </p>
            </div>
            <div
              className="mt-5 flex items-center justify-center lg:justify-start opacity-0 animate-hero-reveal"
              style={{ animationDelay: "600ms" }}
            >
              <div className="grid grid-cols-2 gap-y-4">
                {cisoServices.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-[#8D8D8D57]">
                      <Icon
                        icon={item.Icon}
                        className="text-[22px] text-[#FFFFFF]"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-medium text-[#F5F0E8]">
                      {item.heading}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex flex-col sm:flex-row  justify-center lg:justify-start gap-4 mt-8 opacity-0 animate-hero-reveal"
              style={{ animationDelay: "750ms" }}
            >
              <Link href="/company/contact">
                <button className="text-[15px] font-medium px-4 py-4 flex items-center gap-2 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF]">
                  Request a vCISO Consultation{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" className="text-lg" />
                  </span>
                </button>
              </Link>
              {/* <button className="text-[15px] font-medium px-4 py-4  rounded-[10px] cursor-pointer text-[#FFFFFF] border border-[#FFFFFF29]">
                View Scope of Work{" "}
              </button> */}
            </div>
          </div>
          <div className="flex-1  px-7 py-5 rounded-3xl space-y-3 bg-linear-to-r from-[#7B6FE829] to-[#090B21]">
            <form
              action=""
              className="space-y-3"
              onSubmit={handleSubmit(submit)}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor=""
                    className="text-[#FEFEFE] text-sm font-normal"
                  >
                    Full Name <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                    {...register("fullname", {
                      required: "Full name is required",
                    })}
                  />
                  {errors.fullname && (
                    <p className="text-sm font-normal text-red-500">
                      {errors.fullname.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor=""
                    className="text-[#FEFEFE] text-[15px] font-normal"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                    {...register("companyname")}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor=""
                    className="text-[#FEFEFE] text-[15px] font-medium"
                  >
                    Email <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-sm font-normal text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor=""
                    className="text-[#FEFEFE] text-[15px] font-medium"
                  >
                    Phone Number <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 987-654-321"
                    className="text-sm font-normal px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
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
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor=""
                    className="text-[#FEFEFE] text-[15px] font-medium"
                  >
                    Location
                  </label>
                  <select
                    name=""
                    id=""
                    className=" text-sm font-normal  py-3 w-full px-3 rounded-[10px] cursor-pointer outline-none  text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                    {...register("location")}
                  >
                    <option value="">Select your loaction</option>
                    <optgroup label="India">
                      India
                      <option value="India - Bangalore">
                        India - Bangalore
                      </option>
                      <option value="India - Mumbai">India - Mumbai</option>
                      <option value="India - Delhi NCR">
                        India - Delhi NCR
                      </option>
                      <option value="India - Pune">India - Pune</option>
                      <option value="India - Hyderabad">
                        India - Hyderabad
                      </option>
                      <option value="India - Chennai">India - Chennai</option>
                      <option value="India - Other">India - Other</option>
                    </optgroup>
                    <optgroup label="Global">
                      <option value="USA">USA</option>
                      <option value="Singapore">Singapore</option>
                      <option value="UAE - Dubai">UAE - Dubai</option>
                      <option value="UAE - Abu Dhabi">UAE - Abu Dhabi</option>
                      <option value="Australia">Australia</option>
                      <option value="Europe - UK">Europe - UK</option>
                      <option value="Europe - Other">Europe - Other</option>
                      <option value="GCC - Other">GCC - Other</option>
                      <option value="Other">Other</option>
                    </optgroup>
                  </select>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor=""
                    className="text-[#FEFEFE] text-[15px] font-medium"
                  >
                    Engagement Type{" "}
                    <span className="text-[#E42F23]">*</span>{" "}
                  </label>
                  <select
                    name=""
                    id=""
                    className="  text-sm font-normal  py-3 w-full px-3 rounded-[10px] cursor-pointer outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                    {...register("engagement", {
                      required: "Engagement type is required",
                    })}
                  >
                    <option value="">Choose enagament type</option>
                    <option value="foundational vciso(startup/sme)">
                      Foundational vCISO (Startup / SME)
                    </option>
                    <option value="growth vciso(mid-market)">
                      Growth vCISO (Mid-Market)
                    </option>
                    <option value="enterprise vciso">
                      Enterprise vCISO (Continuous)
                    </option>
                    <option value="on-demand advisory/retailer">
                      On-demand Advisory / Retainer
                    </option>
                    <option value="compliance vciso  (rbi/cert-in/dpdp/sebi)">
                      Compliance vCISO (RBI / CERT-In / DPDP / SEBI)
                    </option>
                    <option value="compliance vciso(iso/27001/soc 2 /gdpr)">
                      Compliance vCISO (ISO 27001 / SOC 2 / GDPR)
                    </option>
                  </select>
                  {errors.engagement && (
                    <p className="text-sm font-normal text-red-500">
                      {errors.engagement.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#FEFEFE] text-[15px] font-medium"
                >
                  How Can We Help?
                </label>
                <textarea
                  placeholder=" Brief requirement (optional)"
                  name=""
                  id=""
                  className="text-sm font-normal px-3 py-3 w-full rounded-[10px] text-[#D1D1D1] bg-[#000C1C] border border-[#262D3D] outline-none"
                  {...register("message")}
                ></textarea>
              </div>
              <div>
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="border border-[#D1D1D1] bg-none"
                />
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
                className={`text-base sm:text-lg font-medium flex items-center justify-center gap-3 py-3 w-full rounded-[10px] text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] border-2 border-[#577bbd] ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
              >
                Request Consultation{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" className="text-lg" />
                </span>{" "}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Understanding vCISO  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="max-w-xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold uppercase text-[#0F66EA] sectionheading">
                Understanding vCISO
              </p>
              <h2 className="text-[#FEFEFE]">
                Executive-level cybersecurity expertise, built around your
                business.
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                A Virtual Chief Information Security Officer (vCISO) provides
                strategic and operational security leadership on a flexible,
                outsourced basis.
              </p>
              <p className="sectionDescription text-[#D1D1D1]">
                From risk management and security policies to compliance and
                incident readiness, ISECURION helps your teams build and
                maintain a structured security programme without the cost of a
                full-time executive hire.
              </p>
            </div>
          </Animation>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {services.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="space-y-3 pl-6 border-l border-[#0F66EA29]"
                >
                  <div
                    className="w-[48px] h-[48px] flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <Icon icon={item.Icon} className="text-xl text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-base font-medium text-[#F5F0E8]">
                    {item.heading}
                  </h3>
                  <p className="text-sm font-normal leading-[21px] text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO NEEDS A vCISO?  */}
      <section className="relative w-full py-14 bg-[#060D1B] space-y-10 overflow-hidden">
        <div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <Animation>
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-4">
                <p className="text-sm sm:text-base font-semibold text-[#0F66EA] sectionheading">
                  WHO NEEDS A vCISO?
                </p>
                <h2 className="text-[#FFFFFF]">
                  The right security leadership for your next stage of growth.
                </h2>
                <p className="sectionDescription text-[#D1D1D1]">
                  Whether you're scaling operations, preparing for an audit, or
                  strengthening accountability, a vCISO helps your organization
                  take a more structured approach to cybersecurity.
                </p>
              </div>
            </Animation>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whoNeedsCiso.map((item, index) => (
                  <AnimatedCard
                    delay={index * 0.15}
                    key={index}
                    className="relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F]"
                  >
                    <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#0F66EA]"></div>
                    <div className="flex items-center justify-between gap-10">
                      <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                        {item.heading}
                      </h3>
                      <span>
                        <Icon
                          icon={item.Icon}
                          className="w-[25px] h-[25px] text-[#0F66EA]"
                        />
                      </span>
                    </div>
                    <p className="text-[15px] font-normal leading-[24px] text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISECURION vCISO PRACTICE  */}
      <section className="relative bg-[#060D1B] overflow-hidden">
        <div className="absolute w-[700px] h-[400px] top-0 right-0 blur-[100px] rounded-2xl pointer-events-none bg-[#102F5F]"></div>

        <div className="max-w-7xl px-6 sm:px-10 mx-auto flex  flex-col-reverse lg:flex-row">
          <div className="relative flex-1 border-l-2 border-[#454545] bg-[#000000]">
            <div className="absolute w-[600px] h-[300px] -right-40 top-0 blur-[300px]  bg-[#102F5F]"></div>
            <div className="space-y-4 py-5 px-5">
              {cisoStas.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-[20px] h-[20px] rounded-full shrink-0 border-2 border-[#D1D1D1]"></div>
                  <div className="space-y-1">
                    <h3 className="text-3xl font-semibold text-[#0F66EA]">
                      {item.number}
                    </h3>
                    <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <p className="text-[15px] max-w-md font-normal text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 z-10 p-4 space-y-4 text-center lg:text-left bg-[#003833]">
            <p className="text-sm sm:text-base font-semibold text-[#0F66EA] sectionheading">
              ISECURION vCISO PRACTICE
            </p>
            <h2 className="text-[#FFFFFF]">Meet the ISECURION vCISO Team</h2>
            <p className="sectionDescription text-[#D1D1D1]">
              ISECURION's vCISO practice is a dedicated team of certified
              security leaders, governance experts, and regulatory compliance
              specialists - built specifically for India's complex regulatory
              landscape and global enterprise demands.
            </p>
            <p className="sectionDescription text-[#D1D1D1]">
              With deep experience across BFSI, healthcare, IT/ITES,
              manufacturing, and regulated industries, the team delivers{""}
              <span className="font-semibold">
                security leadership from Day 1
              </span>
              {""}, not after a 3-month ramp-up.
            </p>
            <div className="flex gap-3 flex-wrap mt-5">
              <div>
                <p className="inline-flex px-3 py-1.5 gap-2 items-center text-[13px] rounded-[32px] text-[#E0F2FE] bg-[#FFFFFF1F] border border-[#FFFFFF33]">
                  <span>
                    <Icon
                      icon="boxicons:certification-filled"
                      className="shrink-0 "
                    />
                  </span>
                  CERT-In Empanelled
                </p>
              </div>
              <div>
                <p className="inline-flex px-3 py-1.5 gap-2 items-center text-[13px] rounded-[32px] text-[#E0F2FE] bg-[#FFFFFF1F] border border-[#FFFFFF33]">
                  <span>
                    <Icon
                      icon="fluent:ribbon-star-24-filled"
                      className="shrink-0 "
                    />
                  </span>
                  ISO 27001:2022 Certified
                </p>
              </div>
              <div>
                <p className="inline-flex px-3 py-1.5 gap-2 items-center text-[13px] rounded-[32px] text-[#E0F2FE] bg-[#FFFFFF1F] border border-[#FFFFFF33]">
                  <span>
                    <Icon icon="bi:person-badge-fill" className="shrink-0" />
                  </span>
                  CISSP, CISA, CISM, CEH
                </p>
              </div>
              <div>
                <p className="inline-flex px-3 py-1.5 gap-2 items-center text-[13px] rounded-[32px] text-[#E0F2FE] bg-[#FFFFFF1F] border border-[#FFFFFF33]">
                  <span>
                    <Icon icon="mdi:map-marker" className="shrink-0" />
                  </span>
                  Bengaluru & Kolkata Offices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Compliance Expertise  */}
      <section className="w-full py-14 overflow-hidden bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col xl:flex-row">
            <LeftAnimation>
              <div className="w-full space-y-4 lg:w-[500px] text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold uppercase text-[#0F66EA] sectionheading">
                  Regulatory & Compliance Expertise
                </p>
                <h2 className="text-[#FFFFFF]">
                  Navigate complex requirements with a{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-l from-[#0F66EA] to-[#FFFFFF]">
                    coordinated security strategy .
                  </span>
                </h2>
                <p className="sectionDescription text-[#D1D1D1]">
                  ISECURION’s vCISO team helps organizations align security
                  governance and compliance activities with the frameworks
                  relevant to their industry and markets.
                </p>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="flex-2 flex flex-col sm:flex-row gap-10 mt-10 lg:mt-0">
                <div className="h-auto md:h-[270px] p-4 space-y-4 rounded-[21px] border border-[#4C737029] bg-[#66666614]">
                  <h3 className="text-sm font-bold flex gap-4 text-[#E9E9ED]">
                    <span>
                      <Icon
                        icon="emojione:flag-for-india"
                        className="w-[28px] h-[28px]"
                      />
                    </span>
                    <span>India Regulatory Frameworks</span>
                  </h3>
                  <div>
                    <div className="flex flex-wrap gap-4">
                      {indiaRegulatoryCiso.map((item, index) => (
                        <div
                          key={index}
                          className="text-xs font-medium px-4 py-3 rounded-sm w-auto text-[#FFFFFF] bg-[#42515059]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="border-[1.5px] border-[#7590B833] my-3" />
                  <p className="text-sm font-normal text-[#B7C5DC]">
                    Support for applicable financial-sector, incident reporting,
                    privacy, and cybersecurity governance requirements.
                  </p>
                </div>
                <div className="h-auto md:h-[270px] p-4 space-y-4 rounded-[21px] border border-[#4C737029] bg-[#66666614]">
                  <h3 className="text-sm font-bold flex gap-4 text-[#E9E9ED]">
                    <span>
                      <Icon
                        icon="fluent-emoji-flat:globe-showing-europe-africa"
                        className="w-[28px] h-[28px]"
                      />
                    </span>
                    <span>Global Security Standards</span>
                  </h3>
                  <div>
                    <div className="flex flex-wrap gap-4">
                      {globalSecurityStandards.map((item, index) => (
                        <div
                          key={index}
                          className="text-xs font-medium px-4 py-3 rounded-sm  text-[#FFFFFF] bg-[#42515059]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="border-[1.5px] border-[#7590B833] my-4" />
                  <p className="text-sm font-normal text-[#B7C5DC]">
                    Support for security management systems, assurance
                    requirements, and relevant privacy or industry standards.
                  </p>
                </div>
              </div>
            </RightAnimation>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {regulatoryAndCompliance.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.12}
                  className="pl-5 space-y-3 border-l border-[#0F66EA29]"
                >
                  <div
                    className="w-[48px] h-[48px] flex items-center justify-center rounded-xl "
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <Icon icon={item.Icon} className="w-5 h-5 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-[#F5F0E8]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-[21px] text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* eNGAGEMENT LIFECYCLE  */}
      <section className="w-full py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="lg:max-w-xl space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA] sectionheading">
                ENGAGEMENT LIFECYCLE
              </p>
              <h2 className="text-[#FFFFFF]">
                vCISO Services Across Key Markets
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                ISECURION provides dedicated vCISO services in every major
                Indian business hub, with remote, hybrid, and on-site engagement
                models available.
              </p>
            </div>
          </Animation>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-5">
              {engagementLifeCycle.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="w-[260px] space-y-4 flex flex-col justify-between"
                >
                  <p className="text-base font-semibold flex items-center gap-2 text-[#0F66EA]">
                    0{index + 1}{" "}
                    <span className="text-[#F5F0E8A1]">
                      <Icon icon="akar-icons:arrow-right" />
                    </span>
                  </p>
                  <h3 className="text-base font-medium text-[#F5F0E8]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-[21px] text-[#D1D1D1]">
                    {item.description}
                  </p>
                  <div
                    className={`w-[100px] h-[27px] text-center rounded-[5px]  border-[0.3px] border-[#FFFFFF26] shadow-[inset_0_0px_10px_#FFFFFF26]  ${index === 5 ? "bg-[#A4FFCF38]" : ""}`}
                  >
                    <p className="text-[13px] font-semibold text-center text-[#FFFFFF]">
                      {item.period}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row gap-10">
            <div className="flex-1 p-6 rounded-lg border border-[#18242F] bg-[#0E1623]">
              <div className="space-y-3 text-center lg:text-left">
                <h4 className="text-sm font-semibold flex items-center justify-center lg:justify-start gap-3 uppercase tracking-[3px] text-[#0F66EA]">
                  <span className="w-[35px] h-[2px] bg-[#0F66EA]"></span>{" "}
                  Engagement milestones
                </h4>
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium text-[#FFFFFF]">
                  Key steps. Measurable outcomes.
                </h3>
              </div>
              <div className="mt-8">
                <div className="space-y-7 relative">
                  {engagementMilestones.map((item, index) => (
                    <AnimatedCard
                      key={index}
                      delay={index * 0.12}
                      className="relative flex gap-6 z-10"
                    >
                      {index !== engagementMilestones.length - 1 && (
                        <div className="absolute left-[21px] top-[47px] w-[2px] h-[calc(100%-19px)] -z-10 bg-[#38A8F580]" />
                      )}
                      <div className="">
                        <div className="w-[43px] h-[43px] flex items-center justify-center rounded-full border-[1.48px]  border-[#5EB0EC] ring-4 ring-[#2E89E469]">
                          <p className="text-sm font-normal text-[#22D3EE]">
                            0{index + 1}
                          </p>
                        </div>
                      </div>
                      <div className="flex py-2 gap-8 border-b border-[#13304F5E] ">
                        <div className="w-[80px]">
                          <p className="text-sm font-medium text-[#22D3EE]">
                            {item.period}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[15px] font-normal text-[#FFFFFF]">
                            {item.title}
                          </h3>
                          <p className="text-[13px] font-normal text-[#D1D1D1]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 rounded-lg border border-[#18242F] bg-[#0E1623]">
              <div className="space-y-3 text-center lg:text-left">
                <h4 className="text-sm font-semibold flex items-center justify-center lg:justify-start gap-3 uppercase tracking-[3px] text-[#0F66EA]">
                  <span className="w-[35px] h-[2px] bg-[#0F66EA]"></span>{" "}
                  Regulatory coverage by industry
                </h4>
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium text-[#FFFFFF]">
                  Industry-aligned. Regulation-ready.
                </h3>
                <p className="text-sm sm:text-base font-normal leading-[28px] text-[#D1D1D1]">
                  Deep domain expertise and framework knowledge across key
                  sectors, so you stay compliant and future-ready.
                </p>
              </div>
              <div className="mt-8">
                <div className="space-y-7 ">
                  {regulatoryCoverage.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-3 justify-between px-4 md:px-7 py-2 rounded-[6px] border border-[#66666614] bg-linear-to-l from-[#181E2F] via-[#0F66EA12] from-[#181E2F]"
                    >
                      <div className="flex gap-5">
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full shrink-0 bg-[#050D1C] border border-[#13304F]">
                          <Icon
                            icon={item.Icon}
                            className="text-lg text-[#22D3EE]"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium text-[#FFFFFF]">
                            {item.heading}
                          </h3>
                          <p className="text-xs font-normal text-[#D1D1D1]">
                            {item.subheading}
                          </p>
                        </div>
                      </div>
                      <div className="w-[180px] pl-4 border-l border-[#929BFF94]">
                        <p className="text-xs font-normal leading-[15px] text-[#9DB4CF]">
                          {item.description}
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

      {/* vCISO Services Across Key Markets  */}
      <section className="w-full py-14 relative overflow-hidden bg-[#060D1B]">
        <div className="absolute inset-0 bg-center opacity-50 bg-cover pointer-events-none">
          <Image src={world} alt="world" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 ">
          <div className="flex gap-10 flex-col lg:flex-row">
            <div className="flex-1 space-y-4">
              <LeftAnimation>
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-[#FEFEFE]">
                    vCISO Services Across Key Markets{" "}
                  </h2>
                  <p className="sectionDescription text-[#D1D1D1]">
                    ISECURION provides dedicated vCISO services in every major
                    Indian business hub, with remote, hybrid, and on-site
                    engagement models available.
                  </p>
                </div>
              </LeftAnimation>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 rounded-[26px] bg-[#DADADA0A] border border-gray-600"
            >
              <div className="grid grid-cols-1 sm:grid-cols-4  gap-y-6 w-full p-4">
                {locations.map((item, index) => {
                  const isLastColumn = (index + 1) % 4 === 0;
                  const isLastRow = index >= locations.length - 4;
                  return (
                    <div key={index}>
                      <div
                        className={`space-y-3 p-3 flex flex-col items-center ${!isLastColumn ? "sm:order-r border-[#242A3B]" : ""} `}
                      >
                        <GradientIcon Icon={item.Icon} />

                        <h3 className="text-base md:text-lg font-normal text-[#D1D1D1]">
                          {item.location}
                        </h3>
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
          <div className="flex flex-col lg:flex-row items-center py-10 px-6 sm:px-10 mt-10 rounded-[19px] gap-10  border border-gray-700 bg-linear-to-r from-[#1D1E2A]/4 to-[#3B9E6A]/25">
            <div className="w-full flex-1 space-y-4 ">
              <p className="text-base sm:text-lg lg:text-xl font-medium text-center md:text-left text-[#0F66EA] sectionheading">
                GLOBAL COVERAGE
              </p>
              <h3 className="text-xl md:text-2xl font-medium leading-[35px] md:leading-[38px] text-center md:text-left text-[#FEFEFE]">
                Global reach. <br /> Consistent standards.
              </h3>
              <p className="text-base sm:text-[17px] font-normal max-w-sm leading-[28px] text-center md:text-left text-[#D1D1D1]">
                India-headquartered expertise. Globally deployed. Locally
                compliant.
              </p>
            </div>
            <div className="w-full flex-2 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {globalLocations.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className={`w-[150px] flex flex-col items-center gap-3 px-3 ${index !== globalLocations.length - 1 ? "border-[#2B3756] sm:border-r" : ""}`}
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

      {/* What Sets ISECURION Apart?  */}
      <section className="w-full py-14">
        <div
          className="w-full bg-cover bg-center h-[460px]"
          style={{ backgroundImage: `url(${isecurionapartbackground.src})` }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 h-full flex items-center justify-start">
            <Animation>
              <div className="space-y-4 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold uppercase text-[#C8912A] sectionheading">
                  What Sets ISECURION Apart?
                </p>
                <h2 className="text-[#FFFFFF]">
                  Connecting Security Strategy, Compliance & Execution
                </h2>
                <p className="text-base sm:text-lg font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
                  ISECURION combines strategic security leadership, regulatory
                  expertise, and practical execution to help organizations
                  strengthen security posture, manage risk, and meet evolving
                  compliance requirements.
                </p>
              </div>
            </Animation>
          </div>
        </div>
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {isecurionApart.map((item, index) => (
                <AnimatedCard
                  delay={index * 0.15}
                  key={index}
                  className="space-y-2"
                >
                  <div className="relative">
                    <Icon
                      icon={item.Icon}
                      className="w-[30px] h-[30px] relative z-10 text-[#3B9E6A]"
                    />
                    <div className="absolute top-4 bottom-0 left-4 z-0 w-[21px] h-[21px] rounded-full bg-[#232930]"></div>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mt-6 text-[#F5F0E8]">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base font-normal leading-[24px] text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full py-5 bg-[#08152899] border-t border-b border-[#13304F]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-2xl lg:text-[30px] font-medium font-Montserrat text-[#FFFFFF]">
                500+
              </h3>
              <p className="text-sm font-normal text-[#B1B2B4]">
                Clients Served Globally
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-2xl lg:text-[30px] font-medium font-Montserrat text-[#FFFFFF]">
                1-2 wks
              </h3>
              <p className="text-sm font-normal text-[#B1B2B4]">
                Rapid Deployment
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-2xl lg:text-[30px] font-medium font-Montserrat text-[#FFFFFF]">
                7
              </h3>
              <p className="text-sm font-normal text-[#B1B2B4]">
                Global Markets
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-2xl lg:text-[30px] font-medium font-Montserrat text-[#FFFFFF]">
                0
              </h3>
              <p className="text-sm font-normal text-[#B1B2B4]">
                failed regulatory audits on our watch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VCISO DELIVERABLES  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-10">
          <div className="w-full space-y-4 text-center lg:sticky lg:top-24 lg:h-fit lg:w-1/2 lg:self-start lg:text-left">
            <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
              VCISO DELIVERABLES
            </p>
            <h2 className="text-[#FFFFFF]">
              Clear Deliverables. Measurable Security Progress.
            </h2>
            <p className="text-base sm:text-lg font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
              Get actionable security documentation, prioritized improvement
              plans, and compliance insights that help turn strategic priorities
              into measurable outcomes.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative mt-8">
              <div className="absolute top-0 bottom-0 border-l-[3px] border-[#152329] shadow-[inset_13px_0_4px_0_#FFFFFFCF]"></div>
              <div className="space-y-8">
                {deliverable.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="flex gap-10"
                  >
                    <div className="relative w-0">
                      <div className="absolute top-0 -left-[9px] w-[20px] h-[20px] rounded-full border border-[#FFFFFF] bg-[#0F66EA]" />
                    </div>
                    <div className="flex gap-10 items-start">
                      <div>
                        <p className="text-base font-semibold text-[#0F66EA]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-medium text-[#FEFEFE]">
                          {item.heading}
                        </h3>
                        <p className="text-sm sm:text-base font-normal leading-[23px] text-[#D1D1D1]">
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
        title={<>Frequently Asked Questions - vCISO Services </>}
        description="Common questions from organisations in India and globally about Virtual CISO services, India compliance, and engagements."
        faqs={vcisoFAQs}
      />
      {/* Ready to Strengthen Your Cybersecurity Posture?  */}
      <section className="w-full py-8 rounded-tr-[42px] rounded-tl-[42px] bg-[#121828]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 ">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-semibold lg:max-w-lg text-[#FFFFFF]">
              Ready to Strengthen Your Cybersecurity Posture?
            </h2>
            <p className="text-base sm:text-[17px] lg:max-w-2xl font-medium text-[#D1D1D1]">
              Get expert vCISO services in India - Bangalore, Mumbai, Delhi,
              Pune, Hyderabad - and globally across USA, Singapore, UAE, Europe,
              and Australia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/company/contact">
                <button className="text-base font-medium p-3 flex items-center gap-2 mx-auto lg:mx-0 rounded-[10px] cursor-pointer text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] border border-[#FFFFFF1F] shadow-[inset_0_0_4px_#FFFFFF1F,0_4px_10px_#3263B199]">
                  Schedule Consultation{" "}
                  <span>
                    <Icon
                      icon="akar-icons:arrow-right"
                      className="w-[25px] h-[25px]"
                    />
                  </span>
                </button>
              </Link>
              <Link href="tel:+918861201570" target="_blank">
                <button className="text-base font-medium p-3 flex items-center rounded-[10px] mx-auto lg:mx-0 text-[#FFFFFF] border border-[#FFFFFF29] cursor-pointer">
                  <span>
                    <Icon
                      icon="flowbite:outgoing-call-outline"
                      className="w-[20px] h-[20px]"
                    />
                  </span>
                  Call India (Bangalore): +91- 8861201570
                </button>
              </Link>
              <Link href="mailto:info@isecurion.com" target="_blank">
                <button className="text-base font-medium p-3 gap-2 flex items-center rounded-[10px] mx-auto lg:mx-0 text-[#FFFFFF] border border-[#FFFFFF29] cursor-pointer">
                  <span>
                    <Icon
                      icon="eva:email-outline"
                      className="w-[21px] h-[21px]"
                    />
                  </span>
                  info@isecurion.com
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vicso;
