"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Animation, AnimatedCard, GradientIcon, LeftAnimation, RightAnimation } from "../../../components/ui/Animation";
import heroBackground from "../../../assets/services/backgroundPattern.png";
import privacySectionBackground from "../../../assets/services/your-privacyBackground.png";
import FAQSection from "../../../components/sections/FAQSection";
import DPO_CTA from "../../../components/sections/DPO_CTA";
import { useForm } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { dpoServices } from "../../../services/api/contact";
import { toast } from "react-toastify";

interface ContactFormData {
  fullname: string;
  companyname: string;
  email: string;
  phonenumber: string;
  location: string;
  engagement: string;
  message: string;
  turnstileToken: string;
}

const services = [
  {
    heading: "Independent Privacy Oversight",
    description:
      "Review data processing activities, identify privacy risks, and provide objective recommendations.",
    Icon: "iconmind:security-champion-outline-bold",
    bgColor: "#0F66EA",
  },
  {
    heading: "Regulatory Guidance",
    description:
      "Support the interpretation and implementation of applicable data protection requirements.",
    Icon: "fa-solid:shield-alt",
    bgColor: "#C8912A",
  },
  {
    heading: "Data Subject Rights",
    description:
      "Establish structured processes for managing privacy requests, grievances, and related obligations.",
    Icon: "icon-park-outline:permissions",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Executive Reporting",
    description:
      "Provide leadership with visibility into privacy risks, compliance gaps, and improvement priorities.",
    Icon: "iconmind:api-analytics-outline-regular",
    bgColor: "#7D70F0",
  },
];

const globalCards = [
  {
    heading: "Privacy Governance",
    description:
      "Establish privacy policies, roles, accountability and operating processes.",
    Icon: "iconmind:eval-report-outline-regular",
    bgColor: "#0F66EA",
  },
  {
    heading: "Data & Risk Assessment",
    description:
      "Identify privacy risks, processing activities, gaps and regulatory exposure.",
    Icon: "fa-solid:shield-alt",
    bgColor: "#C8912A",
  },
  {
    heading: "Rights & Control Management",
    description:
      "Strengthen consent, data rights, retention, breach response and privacy controls.",
    Icon: "cuida:settings-outline",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Documentation & Monitoring",
    description:
      "Maintain evidence, regulatory reporting, assessments and ongoing compliance monitoring.",
    Icon: "material-symbols:description-outline-rounded",
    bgColor: "#7D70F0",
  },
];

const whoNeedsDpo = [
    {
        Icon: "boxicons:bank",
        heading: "Regulated Organizations",
        description:
            "Businesses operating under data protection laws or sector-specific regulatory requirements that need structured privacy oversight.",
    },
    {
        Icon: "iconmind:compliance-outline-regular",
        heading: "GDPR-Regulated Businesses",
        description:
            "Organisations whose processing activities meet the criteria for mandatory DPO appointment under GDPR.",
    },
    {
        Icon: "healthicons:chart-cured-increasing-24px",
        heading: "Startups & SaaS Companies",
        description:
            "Scaling businesses that need privacy governance to support enterprise customers, partnerships, and market expansion.",
    },
    {
        Icon: "ri:global-line",
        heading: "Businesses Handling Global Data",
        description:
            "Organisations processing personal data across multiple jurisdictions with overlapping privacy requirements.",
    },
    {
        Icon: "material-symbols:vpn-key-alert-outline",
        heading: "Organisations Facing Privacy Gaps",
        description:
            "Businesses with incomplete privacy documentation, unclear accountability, or gaps in data handling processes.",
    },
    {
        Icon: "charm:shield-warning",
        heading: "Businesses Facing Data Breaches",
        description:
            "Organisations seeking structured support for data breaches, privacy complaints, and remediation activities.",
    },
];

const engagementLifecycle = [
  {
    number: "01",
    title: "Data Mapping & Assessment",
    description:
      "Map personal data flows, processing activities, and applicable regulatory obligations (DPDP, GDPR, PDPA and more).",
  },
  {
    number: "02",
    title: "DPO Appointment & Onboarding",
    description:
      "Define the engagement scope, responsibilities, reporting arrangements, and appointment formalities where required.",
  },
  {
    number: "03",
    title: "Governance Implementation",
    description:
      "Implement privacy notices, consent mechanisms, DPIAs, records of processing, and vendor data processing agreements.",
  },
  {
    number: "04",
    title: "DSAR & Grievance Operations",
    description:
      "Establish and run intake, verification, and response workflows for data subject requests within statutory timelines.",
  },
  {
    number: "05",
    title: "Continuous Advisory",
    description:
      "Ongoing regulatory tracking, breach response support, board briefings, and audit readiness across all applicable jurisdictions.",
  },
];

const engagementMilestones = [
  {
    number: "01",
    period: "Week 1–2",
    title: "Privacy Assessment & Data Mapping",
    description:
      "Review data processing, identify gaps, and assess applicable requirements.",
  },
  {
    number: "02",
    period: "Month 1",
    title: "DPO appointed & registered",
    description: "Prioritise risks and define compliance improvement actions.",
  },
  {
    number: "03",
    period: "Months 1–3",
    title: "Governance framework implemented",
    description: "Establish privacy policies, records, and procedures.",
  },
  {
    number: "04",
    period: "Month 3",
    title: "Audit Readiness",
    description: "Organise evidence and address priority compliance gaps.",
  },
  {
    number: "05",
    period: "Ongoing",
    title: "Continuous advisory, monitoring & improvement",
    description:
      "Monitor risks, support privacy requests, and coordinate incident response.",
  },
];

const regulatoryCoverage = [
  {
    icon: "lucide:landmark",
    title: "Banks, NBFCs & FinTech",
    subtitle: "RBI · DPDP",
    description:
      "Manage data protection obligations and cross-border transfer restrictions through one privacy programme.",
  },
  {
    icon: "lucide:route",
    title: "SaaS & IT/ITES Exporters",
    subtitle: "GDPR · CCPA/CPRA · PDPA",
    description:
      "Address privacy requirements for customers across the EU, US, & APAC through unified controls.",
  },
  {
    icon: "ic:outline-medical-information",
    title: "Healthcare & Health-Tech",
    subtitle: "HIPAA · DPDP Act",
    description:
      "Support sensitive personal data protection and cross-border health data transfer assessments.",
  },
  {
    icon: "lucide:rocket",
    title: "High-Growth Companies",
    subtitle: "DPDP/GDPR Readiness",
    description:
      "Build scalable privacy processes and accelerate compliance readiness as your business grows.",
  },
];

const dpoLocations = [
  { name: "Bangalore",
      Icon: "reicon:city" 
    },
  { name: "Mumbai", Icon: "game-icons:tower-bridge" },
  { name: "Hyderabad", Icon: "fluent:building-mosque-12-regular" },
  { name: "Noida", Icon: "icon-park-outline:city-one" },
  { name: "Pune", Icon: "icon-park-outline:city-gate" },
  { name: "Delhi NCR", Icon: "hugeicons:india-gate" },
  { name: "Kolkata", Icon: "game-icons:arch-bridge" },
  { name: "Ahmedabad", Icon: "streamline-plump:government-building-1" },
];

const globalDpoRegions = [
    { code: "US", name: "United States", icon: "mingcute:statue-of-liberty-line" },
    { code: "SG", name: "Singapore", icon: "hugeicons:twin-tower" },
    { code: "AE", name: "UAE / Dubai", icon: "hugeicons:cayan-tower" },
    { code: "AU", name: "Australia", icon: "mingcute:sydney-opera-house-line" },
    { code: "EU", name: "Europe", icon: "icon-park-outline:eiffel-tower" },
];

const outsourcedDeliverables = [
  {
    title: "Privacy Strategy & Roadmap",
    description:
      "12–24 month privacy programme roadmap with prioritised milestones across jurisdictions.",
  },
  {
    title: "Data Mapping & RoPA",
    description:
      "Complete records of processing activities and personal data flow inventory.",
  },
  {
    title: "Privacy Notices & Policies",
    description:
      "Complete privacy notice, internal policy, and consent framework documentation.",
  },
  {
    title: "Multi-Framework Gap Analysis",
    description:
      "Comprehensive gap analysis against DPDP, GDPR, PDPA, Privacy Act, and other applicable laws.",
  },
  {
    title: "Breach Response Plan",
    description:
      "Structured breach playbook with regulator notification workflows and timelines.",
  },
  {
    title: "Executive Privacy Dashboard",
    description:
      "KPI-driven quarterly dashboards, DSAR metrics, and compliance scorecards for leadership.",
  },
  {
    title: "Awareness & Training Programs",
    description:
      "Privacy awareness modules and role-based training calendars for staff.",
  },
  {
    title: "Board-Level Governance Reports",
    description:
      "Monthly/quarterly executive governance reports and board presentations on privacy risk.",
  },
  {
    title: "Vendor DPA Review",
    description:
      "Data processing agreement templates and third-party privacy risk assessments.",
  },
  {
    title: "Audit Readiness Support",
    description:
      "Pre-audit assessments, evidence collection, and coordination for privacy audits and certifications.",
  },
  {
    title: "Cross-Border Transfer Documentation",
    description:
      "SCCs, transfer impact assessments, and localisation compliance guidance.",
  },
  {
    title: "DSAR Workflow & Log",
    description:
      "Documented DSAR intake process, tracking log, and closure reports for audit evidence.",
  },
];

const privacyLeadershipFeatures = [
  {
    icon: "akar-icons:people-group",
    title: "One Coordinated Team",
    description:
      "Bring privacy and security expertise together under one engagement with defined responsibilities and coordinated support.",
  },
  {
    icon: "codicon:law",
    title: "Multi-Jurisdiction Expertise",
    description:
      "Coordinate overlapping privacy requirements across applicable frameworks without managing each in isolation.",
  },
  {
    icon: "iconmind:session-fixation-guard-outline-regular",
    title: "Business-Aligned Privacy",
    description:
      "Prioritise improvements according to regulatory obligations, processing risks, business objectives, and available resources.",
  },
  {
    icon: "iconmind:visibility-outline-bold",
    title: "Executive-Level Visibility",
    description:
      "Provide clear reporting on privacy risks, open actions, compliance progress, and recommended next steps.",
  },
];

const dpoFAQs = [
  {
    question: "What is an Outsourced DPO (Data Protection Officer)?",
    answer:
      "An Outsourced DPO is an external, independent data protection expert who performs the statutory functions of a Data Protection Officer - monitoring compliance, advising on data protection obligations, handling data subject requests, and liaising with regulators - without being a full-time employee. ISECURION's Outsourced DPO services are available across India and globally across USA, UK, EU, GCC, Singapore, and Australia.",
  },
  {
    question: "Is a DPO mandatory under India's DPDP Act 2023?",
    answer:
      "Under India's Digital Personal Data Protection (DPDP) Act 2023, entities classified as Significant Data Fiduciaries are required to appoint a Data Protection Officer based in India. Many other organisations voluntarily appoint a DPO or equivalent contact person to manage grievance redressal and demonstrate accountability, even where not strictly mandated.",
  },
  {
    question: "Do we need a DPO under GDPR?",
    answer:
      "Under GDPR Article 37, a DPO is mandatory for public authorities, organisations whose core activities involve large-scale, regular and systematic monitoring of individuals, or large-scale processing of special category data. Many organisations outside these categories still appoint a DPO voluntarily as a best practice and trust signal for customers.",
  },
  {
    question: "What is the difference between an Outsourced DPO and a vCISO?",
    answer:
      "A DPO focuses specifically on data protection and privacy compliance - lawful processing, consent, data subject rights, breach notification, and regulator liaison. A vCISO owns the broader information security function, including infrastructure, application, and cyber risk. Many organisations engage both; ISECURION can deliver DPO and vCISO services under one coordinated engagement.",
  },
  {
    question: "Which Indian cities does ISECURION serve for DPO services?",
    answer:
      "ISECURION provides outsourced DPO services across all major Indian cities including Bangalore, Mumbai, Delhi NCR, Pune, Hyderabad, Kolkata, Ahmedabad, Noida, Gurgaon, Chennai, and beyond, through flexible remote, hybrid, and on-site engagement models.",
  },
  {
    question:
      "Can an Outsourced DPO handle Data Subject Access Requests (DSARs)?",
    answer:
      "Yes. ISECURION's DPO team manages the full DSAR lifecycle - intake, identity verification, response drafting, and timely closure - in line with DPDP Act and GDPR timelines, along with grievance redressal officer duties where required.",
  },
  {
    question: "Can the DPO act as the point of contact for regulators?",
    answer:
      "Yes. ISECURION's Outsourced DPO can be formally designated as the organisation's point of contact for the Data Protection Board of India, supervisory authorities under GDPR, or equivalent regulators, and will manage regulator correspondence, audits, and breach notifications on your behalf.",
  },
  {
    question: "How quickly can ISECURION appoint an outsourced DPO?",
    answer:
      "We can formally appoint and onboard an Outsourced DPO within 1-2 weeks of engagement, including registration of the DPO's contact details as required under applicable law.",
  },
  {
    question: "Is outsourced DPO suitable for startups and SMEs?",
    answer:
      "Yes. Outsourced DPO is ideal for startups, SMEs, and mid-market companies that need qualified privacy leadership and a named point of contact for compliance without the cost of a full-time in-house hire.",
  },
  {
    question: "Can DPO services cover multiple countries at once?",
    answer:
      "Yes. ISECURION's DPO function is designed for organisations operating across multiple jurisdictions - India, USA, UK, EU, GCC, Singapore, and Australia - managing each applicable framework under one coordinated engagement with unified reporting.",
  },
  {
    question:
      "How can we get started with ISECURION's Outsourced DPO services?",
    answer:
      "Reach out via our Contact Page, fill the consultation form at the top of this page, call us at +91-88612 01570, or email info@isecurion.com. We will schedule an initial consultation to assess your data processing activities, regulatory obligations, and DPO requirements, and provide a tailored proposal within 48 hours.",
  },
];

function DpoServices() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const submit = async (data: ContactFormData) => {
    console.log(data);
    setLoading(true);
    try {
      if (!turnstileToken) {
        toast.error("Please complete CAPTCHA verification");
        return;
      }
      const response = await dpoServices({ ...data, turnstileToken });
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
    <div>
      {/* hero section  */}
      <section className="relative overflow-hidden min-h-[80vh] py-14 flex items-center  bg-[#000000]">
        <div className="absolute w-[650px] h-[650px] left-20 rounded-full blur-[200px] pointer-events-none bg-[#0F66EA80]"></div>

        <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-15">
          <div className="flex-1">
            <Animation>
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                  OUTSOURCED DATA PROTECTION OFFICER
                </p>
                <h1 className="text-[#FFFFFF] lg:max-w-[440px]">
                  Expert Privacy Leadership. Without the Full-Time Overhead.
                </h1>
                <p className="text-base sm:text-[17px] font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D1D1D1] lg:max-w-[450px]">
                  Strengthen data protection, manage privacy obligations, and
                  build customer trust with outsourced DPO services tailored to
                  your organisation’s regulatory requirements and business
                  needs.
                </p>
                <p className="text-base sm:text-[17px] font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D1D1D1] lg:max-w-[460px]">
                  ISECURION helps organisations establish privacy governance,
                  manage compliance responsibilities, and improve accountability
                  across the personal data lifecycle.
                </p>
              </div>
            </Animation>
            <Animation>
              <ul className="mt-4 space-y-2 ">
                <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Privacy Governance & Compliance
                </li>

                <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  DPDP Act & GDPR Support
                </li>

                <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Data Subject Rights Management
                </li>

                <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Breach Response & Risk Advisory
                </li>
              </ul>
            </Animation>
            <Animation>
              <div className="flex flex-col sm:flex-row  justify-center lg:justify-start gap-4 mt-8">
                <div className="mt-8 text-center">
                  <button className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[15px] font-medium text-[#31435C] transition-all duration-200 hover:bg-gray-100 shadow-lg">
                    <span>Request a DPO Consultation</span>
                    <Icon icon="lucide:arrow-right" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Animation>
          </div>

          <div className="flex-1 px-8 py-5 rounded-3xl space-y-5 bg-linear-to-r from-[#7B6FE860] to-[#7B6FE839] min-h-[800px]">
            <form
              action=""
              className="space-y-5"
              onSubmit={handleSubmit(submit)}
            >
              <Animation>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col w-full gap-3">
                    <label
                      htmlFor=""
                      className="text-[#FEFEFE] text-sm font-normal"
                    >
                      First Name <span className="text-[#E42F23]">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className={`px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C] ${errors.fullname ? "border border-red-500" : ""}`}
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
                  <div className="flex flex-col w-full gap-3">
                    <label
                      htmlFor=""
                      className="text-[#FEFEFE] text-[15px] font-normal"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]"
                      {...register("companyname")}
                    />
                  </div>
                </div>
              </Animation>
              <Animation>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col w-full gap-3">
                    <label
                      htmlFor=""
                      className="text-[#FEFEFE] text-[15px] font-medium"
                    >
                      Email <span className="text-[#E42F23]">*</span>{" "}
                    </label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      className={`px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C] ${errors.email ? "border border-red-500" : ""}`}
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-sm font-normal text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full gap-3">
                    <label
                      htmlFor=""
                      className="text-[#FEFEFE] text-[15px] font-medium"
                    >
                      Phone Number{" "}
                      <span className="text-[#E42F23]">*</span>{" "}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 987-654-321"
                      className={`px-3 py-3 rounded-[10px] outline-none text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C] ${errors.phonenumber ? "border border-red-500" : ""}`}
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
              </Animation>
              <Animation>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col w-full gap-3">
                    <label
                      htmlFor=""
                      className="text-[#FEFEFE] text-[15px] font-medium"
                    >
                      Location
                    </label>
                    <select
                      name=""
                      id=""
                      className={`h-12 w-full px-3 rounded-[10px] cursor-pointer outline-none  text-[#D1D1D1] border border-[#262D3D] bg-[#000C1C]`}
                      {...register("location")}
                    >
                      <option value="">Select your loaction</option>

                      <optgroup label="India">
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
                        <option value="India - Kolkata">India - Kolkata</option>
                        <option value="India - Ahmedabad">
                          India - Ahmedabad
                        </option>
                        <option value="India - Noida">India - Noida</option>
                        <option value="India - Chennai">India - Chennai</option>
                        <option value="India - Other">India - Other</option>
                      </optgroup>

                      <optgroup label="Global">
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Europe - Other">Europe - Other</option>
                        <option value="GCC - UAE">GCC - UAE</option>
                        <option value="GCC - Other">GCC - Other</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="flex flex-col w-full gap-3 ">
                    <label
                      htmlFor=""
                      className="text-[#FEFEFE] text-[15px] font-medium"
                    >
                      Engagement Type
                    </label>
                    <select
                      name=""
                      id=""
                      className="h-12 w-full px-2 rounded-[10px] cursor-pointer outline-none text-[#D1D1D1] bg-[#000C1C]"
                      {...register("engagement")}
                    >
                      <option value="">Choose enagament type</option>
                      <option value="">Foundational DPO (Startup / SME)</option>
                      <option value="">Growth DPO (Mid-Market)</option>
                      <option value="">Enterprise DPO (Continuous)</option>
                      <option value="">On-demand Advisory / Retainer</option>
                      <option value="">DPDP Act DPO Appointment</option>
                      <option value="">GDPR Article 37 DPO Appointment</option>
                    </select>
                  </div>
                </div>
              </Animation>
              <Animation>
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
                    className="px-3 py-3 w-full rounded-[10px] text-[#D1D1D1] bg-[#000C1C] border border-[#262D3D] outline-none"
                    rows={5}
                    {...register("message")}
                  ></textarea>
                </div>
              </Animation>
              <Animation>
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
              </Animation>
              <Animation>
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
              </Animation>
              <Animation>
                <button
                  type="submit"
                  className={`text-base sm:text-lg font-medium flex items-center justify-center py-3 w-full rounded-[10px] cursor-pointer text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] border-2 border-[#577bbd] h-[54px] ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                >
                  Request Consultation{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" className="text-lg" />
                  </span>{" "}
                </button>
              </Animation>
            </form>
          </div>
        </div>
      </section>

      {/* Understanding DPO  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold uppercase text-[#0F66EA]">
                UNDERSTANDING OUTSOURCED DPO
              </p>
              <h2 className="text-[#FEFEFE] max-w-[720px]">
                Independent Privacy Oversight. Practical Business Support.
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[550px]">
                An outsourced Data Protection Officer (DPO) provides specialist
                privacy guidance, compliance oversight, and regulatory
                coordination without requiring a full-time internal appointment.
              </p>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[550px]">
                ISECURION helps organisations manage privacy responsibilities
                through structured governance, documented processes, and ongoing
                advisory support.
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
                  <p className="text-sm font-normal leading-[22px] text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO NEEDS A DPO?  */}
      <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -right-20 w-[300px] h-[300px] rounded-full blur-[100px] bg-[#FFFFFF33]" />
        </div>
        <Animation>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA] ">
                WHO NEEDS AN OUTSOURCED DPO?
              </p>
              <h2 className="text-[#FFFFFF]">
                Does your organisation need an Outsourced DPO?
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[600px]">
                If you recognise any one of these situations, an Outsourced DPO
                engagement will deliver immediate impact across privacy and
                compliance.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whoNeedsDpo.map((item, index) => (
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
                    <p className="text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[338px]">
                      {item.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </Animation>
      </section>

      {/* ISECURION OUTSOURCED DPO TEAM */}
      <section className="bg-[#060D1B] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <LeftAnimation>
            <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[44%_56%]">
              {/* LEFT: STATISTICS */}

              <div className="relative flex flex-col justify-center gap-8 border-l border-[#FFFFFF1A] bg-[#030707] px-7 py-10 sm:gap-10 sm:px-10 sm:py-12 lg:gap-8 lg:px-10 lg:py-10 xl:px-14">
                {/* Vertical divider */}
                <div className="absolute bottom-0 left-0 top-0 w-px bg-[#FFFFFF12]" />

                {/* Statistic 1 */}
                <div className="relative pl-5 sm:pl-7">
                  <span className="absolute left-[-7px] top-[5px] h-4 w-4 rounded-full border-2 border-[#D1D5DB] bg-[#030707]" />

                  <h3 className="text-[28px] font-semibold leading-none tracking-[1px] text-[#0F66EA] sm:text-[30px] lg:text-[30px]">
                    500+
                  </h3>
                  <h4 className="mt-3 text-sm font-semibold leading-5 text-white sm:text-[15px]">
                    Clients Served Globally
                  </h4>
                  <p className="mt-2 max-w-[290px] text-[13px] leading-[21px] text-[#D1D1D1] sm:text-[13px] sm:leading-[22px]">
                    From startups to Fortune 500s, we help organizations across
                    industries secure what matters most.
                  </p>
                </div>

                {/* Statistic 2 */}
                <div className="relative pl-5 sm:pl-7">
                  <span className="absolute left-[-7px] top-[5px] h-4 w-4 rounded-full border-2 border-[#D1D5DB] bg-[#030707]" />

                  <h3 className="text-[28px] font-semibold leading-none tracking-[1px] text-[#0F66EA] sm:text-[30px] lg:text-[30px]">
                    10+
                  </h3>
                  <h4 className="mt-3 text-sm font-semibold leading-5 text-white sm:text-[15px]">
                    Years of Experience
                  </h4>
                  <p className="mt-2 max-w-[290px] text-[13px] leading-[21px] text-[#D1D1D1] sm:text-[13px] sm:leading-[22px]">
                    A decade of hands-on expertise in cybersecurity, risk and
                    resilience.
                  </p>
                </div>

                {/* Statistic 3 */}
                <div className="relative pl-5 sm:pl-7">
                  <span className="absolute left-[-7px] top-[5px] h-4 w-4 rounded-full border-2 border-[#D1D5DB] bg-[#030707]" />

                  <h3 className="text-[28px] font-semibold leading-none tracking-[1px] text-[#0F66EA] sm:text-[30px] lg:text-[30px]">
                    10+
                  </h3>
                  <h4 className="mt-3 text-sm font-semibold leading-5 text-white sm:text-[15px]">
                    Privacy Frameworks
                  </h4>
                  <p className="mt-2 max-w-[280px] text-[13px] leading-[21px] text-[#D1D1D1] sm:text-[13px] sm:leading-[22px]">
                    Aligned with global standards to help you meet today’s and
                    tomorrow’s challenges.
                  </p>
                </div>
              </div>

              {/* RIGHT: DPO TEAM CONTENT */}
              <RightAnimation>
                <div className="flex flex-col justify-center bg-[#003833] px-6 py-9 sm:px-9 sm:py-11 md:px-10 lg:px-8 lg:py-10 xl:px-8 2xl:px-10">
                  <p className="text-[12px] sm:text-base font-semibold uppercase leading-5 text-[#0F66EA] ">
                    ISECURION PRIVACY PRACTICE
                  </p>

                  <h2 className="mt-2 max-w-[520px] text-[24px] font-normal leading-[1.5] tracking-[-0.5px] text-white sm:text-[32px] md:text-[34px] lg:text-[30px] xl:text-[32px]">
                    Meet the ISECURION Outsourced DPO Team
                  </h2>

                  <p className="mt-8 max-w-[505px] text-[14px] font-normal leading-[25px] text-[#D1D1D1] sm:text-[15px] sm:leading-[25px]">
                    ISECURION&apos;s privacy practice is a dedicated team of
                    certified data protection professionals, privacy
                    lawyers-in-consult, and compliance specialists - built for
                    India&apos;s DPDP Act and global privacy regimes alike.
                  </p>

                  <p className="mt-6 max-w-[505px] text-[14px] font-normal leading-[25px] text-[#D1D1D1] sm:text-[15px] sm:leading-[25px]">
                    With experience across BFSI, healthcare, IT/ITES,
                    e-commerce, and regulated industries, the team delivers{" "}
                    <span className="font-semibold text-white">
                      privacy leadership from Day 1,
                    </span>{" "}
                    not after a lengthy ramp-up.
                  </p>

                  {/* Credentials */}
                  <div className="mt-18 flex flex-wrap gap-2">
                    <span className="inline-flex min-h-[29px] items-center gap-1.5 rounded-full border border-[#FFFFFF24] bg-[#FFFFFF12] px-3 py-1 text-[10px] font-medium leading-4 text-[#E0F2FE] sm:text-[11px]">
                      <Icon
                        icon="boxicons:certification-filled"
                        className="shrink-0 text-[12px]"
                      />
                      CERT-In Empanelled
                    </span>

                    <span className="inline-flex min-h-[29px] items-center gap-1.5 rounded-full border border-[#FFFFFF24] bg-[#FFFFFF12] px-3 py-1 text-[10px] font-medium leading-4 text-[#E0F2FE] sm:text-[11px]">
                      <Icon
                        icon="fluent:ribbon-star-24-filled"
                        className="shrink-0 text-[12px]"
                      />
                      ISO 27001:2022 Certified
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex min-h-[29px] items-center gap-1.5 rounded-full border border-[#FFFFFF24] bg-[#FFFFFF12] px-3 py-1 text-[10px] font-medium leading-4 text-[#E0F2FE] sm:text-[11px]">
                      <Icon
                        icon="bi:person-badge-fill"
                        className="shrink-0 text-[12px]"
                      />
                      CIPP/E, CIPM, CDPO, ISO 27701 LI
                    </span>

                    <span className="inline-flex min-h-[29px] items-center gap-1.5 rounded-full border border-[#FFFFFF24] bg-[#FFFFFF12] px-3 py-1 text-[10px] font-medium leading-4 text-[#E0F2FE] sm:text-[11px]">
                      <Icon
                        icon="mdi:map-marker"
                        className="shrink-0 text-[13px]"
                      />
                      Bengaluru &amp; Kolkata Offices
                    </span>
                  </div>
                </div>
              </RightAnimation>
            </div>
          </LeftAnimation>
        </div>
      </section>

      {/* GLOBAL PRIVACY COVERAGE */}
      <section className="relative overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-[72px]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Intro + Framework Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start lg:gap-8 xl:gap-10">
            {/* Left: Intro */}
            <LeftAnimation>
              <div className="lg:max-w-[480px] text-center lg:text-left">
                <p className="text-[12px] sm:text-base font-semibold uppercase leading-5 text-[#0F66EA] ">
                  GLOBAL PRIVACY COVERAGE
                </p>

                <h2 className="mt-2 leading-[1.5] tracking-[-0.5px] text-white sm:leading-[1.35] lg:max-w-[450px]">
                  One Coordinated Privacy Programme across multiple
                  jurisdictions.
                </h2>

                <p className="mt-4 text-[14px] font-normal leading-[23px] text-[#C6C9D0] sm:text-[15px] sm:leading-[25px]">
                  Navigate evolving data protection requirements with a
                  structured approach to privacy governance, risk assessment,
                  documentation, and compliance monitoring.
                </p>
              </div>
            </LeftAnimation>

            {/* Right: Regulatory Framework Cards */}
            <RightAnimation>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-4 xl:gap-5">
                {/* India Frameworks */}
                <div className="flex min-w-0 flex-col rounded-[17px] border border-[#4C737029] bg-[#66666614] p-4 sm:p-[17px]">
                  <div className="flex items-center gap-2.5">
                    <span className="shrink-0 text-[20px] leading-none">
                      <Icon icon="emojione:flag-for-india" />
                    </span>
                    <h3 className="text-sm font-semibold leading-5 text-[#E6E8EF] sm:text-[14px]">
                      India Regulatory Frameworks
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "RBI",
                      "CERT-In",
                      "DPDP Act",
                      "IT Act",
                      "SEBI",
                      "IRDAI",
                      "DPDP Rules",
                    ].map((framework) => (
                      <span
                        key={framework}
                        className="inline-flex min-h-[23px] items-center rounded-[4px] bg-[#42515059] px-2.5 py-1 text-[9px] font-normal leading-3 text-[#E2E5EB] sm:text-[10px]"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>

                  <div className="my-4 h-px w-full bg-[#7590B833]" />

                  <p className="text-sm font-normal text-[#AEB8CB] sm:text-[13px] sm:leading-6 max-w-[280px]">
                    Privacy, cybersecurity, incident response, and
                    sector-specific regulatory requirements across Indian
                    organizations.
                  </p>
                </div>

                {/* Global Frameworks */}
                <div className="flex min-w-0 flex-col rounded-[17px] border border-[#FFFFFF0D] bg-[#101521] p-4 sm:p-[17px]">
                  <div className="flex items-center gap-2.5">
                    <span className="shrink-0 text-[20px] leading-none">
                      <Icon icon="fluent-emoji-flat:globe-showing-europe-africa" />
                    </span>
                    <h3 className="text-sm font-semibold leading-5 text-[#E6E8EF] sm:text-[14px]">
                      Global Privacy Frameworks
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "GDPR",
                      "UK GDPR",
                      "UAE PDPL",
                      "Saudi PDPL",
                      "Singapore PDPA",
                      "Australia Privacy Act",
                      "CCPA/CPRA",
                    ].map((framework) => (
                      <span
                        key={framework}
                        className="inline-flex min-h-[23px] items-center rounded-[4px] bg-[#42515059] px-2.5 py-1 text-[10px] font-normal leading-3 text-[#E2E5EB] sm:text-[10px]"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>

                  <div className="my-4 h-px w-full bg-[#7590B833]" />

                  <p className="text-sm font-normal text-[#AEB8CB] sm:text-[13px] leading-6">
                    Support privacy governance, accountability, data rights,
                    breach response, and jurisdiction-specific requirements.
                  </p>
                </div>
              </div>
            </RightAnimation>
          </div>

          {/* Privacy Programme Capabilities */}
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {globalCards.map((item, index) => (
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
                  <p className="text-sm font-normal leading-[22px] text-[#D1D1D1D6] max-w-[250px]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT LIFECYCLE */}
      <section className="relative w-full overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-[72px]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <Animation>
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-[12px] font-medium uppercase tracking-wide text-[#0F66EA] sm:text-[16px]">
                ENGAGEMENT LIFECYCLE
              </p>

              <p className="max-w-[670px] text-[32px] font-medium leading-[1.3] tracking-[-0.5px] text-white sm:text-[36px] lg:text-[40px]">
                How ISECURION delivers outsourced DPO services
              </p>

              <p className="max-w-[819px] text-[15px] font-normal leading-[25px] text-[#D1D1D1] sm:text-base sm:leading-[28px] lg:text-[18px] lg:leading-[31px]">
                A practical engagement model that establishes privacy
                foundations, operational workflows, and continuous oversight.
              </p>
            </div>
          </Animation>

          {/* Five Engagement Stages */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-0 xl:gap-x-8">
            {engagementLifecycle.map((item, index) => (
              <AnimatedCard
                key={item.number}
                delay={index * 0.12}
                className="min-w-0"
              >
                <div className="flex h-full flex-col items-start">
                  {/* Number and Arrow */}
                  <div className="flex min-h-[28px] items-center gap-5">
                    <span className="text-[17px] font-medium leading-none tracking-[3px] text-[#1680FF]">
                      {item.number}
                    </span>

                    {index < engagementLifecycle.length - 1 && (
                      <Icon
                        icon="akar-icons:arrow-right"
                        className="text-[22px] text-[#A5A8B0]"
                      />
                    )}
                  </div>

                  {/* Stage Title */}
                  <h3 className="mt-4 min-h-0 text-[16px] font-medium leading-[27px] text-[#F5F0E8] sm:text-[16px] lg:min-h-[54px] max-w-[150px]">
                    {item.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="mt-2 text-[14px] font-normal leading-[24px] text-[#C3C5CD] lg:text-[14px] lg:leading-[24px] max-w-[195px]">
                    {item.description}
                  </p>

                  {/* Timeline Badge */}
                  <div className="mt-5 pt-0">
                    <span
                      className={`inline-flex min-h-[30px] items-center justify-center whitespace-nowrap rounded-[6px] border px-3.5 py-1 text-[13px] font-medium leading-5 ${
                        index === engagementLifecycle.length - 1
                          ? "border-[#526F69] bg-[#A4FFCF38] text-white"
                          : "border-[#343B50] bg-[#514F6E40] text-white"
                      }`}
                    >
                      {
                        [
                          "Week 1-2",
                          "Month 1",
                          "Months 1-3",
                          "Month 3",
                          "Continuous",
                        ][index]
                      }
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MILESTONES & REGULATORY COVERAGE */}
      <section className="relative w-full overflow-hidden bg-[#060D1B] py-10">
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-64 rounded-full bg-[#0E1623] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-5 xl:gap-6">
            {/* LEFT PANEL: ENGAGEMENT MILESTONES */}
            <Animation>
              <div className="h-full rounded-[9px] border border-[#FFFFFF0D] bg-[#0E1623] p-5 sm:p-6 lg:p-6 xl:p-[26px] ">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-[0.4px] w-8 shrink-0 bg-[#0F66EA]" />
                  <p className="text-sm sm:text-base font-semibold uppercase tracking-[2.5px] text-[#0F66EA] sm:text-[12px] ">
                    ENGAGEMENT MILESTONES
                  </p>
                </div>

                <h2 className="mt-5 text-[22px] font-medium leading-[1.35] tracking-[-0.4px] text-white sm:text-[25px] lg:text-[22px] xl:text-[24px]">
                  Key steps. Measurable privacy outcomes.
                </h2>

                {/* Timeline */}
                <div className="mt-7 grid grid-cols-[46px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-x-4">
                  {/* Number circles and continuous vertical line */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute bottom-[35px] top-[21px] w-px bg-[#17416B]" />

                    {engagementMilestones.map((item, index) => (
                      <AnimatedCard
                        delay={index * 0.18}
                        key={item.number}
                        className="relative z-10 flex min-h-[75px] w-full flex-1 items-start justify-center"
                      >
                        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#5EB0EC] bg-[#050D1C] shadow-[inset_0_0_0_1px_#3B82F680,0_0_0_3px_#2E89E462]">
                          <span className="text-[12px] font-medium text-[#22D3EE]">
                            {item.number}
                          </span>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>

                  {/* Period and milestone content */}
                  <div className="flex min-w-0 flex-col">
                    {engagementMilestones.map((item, index) => (
                      <AnimatedCard
                        delay={index * 0.1}
                        key={item.number}
                        className={`grid min-h-[75px] grid-cols-[84px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-x-4 ${
                          index !== engagementMilestones.length - 1
                            ? "border-b border-[#172338] pb-3"
                            : ""
                        }`}
                      >
                        <div className="pt-[30px]">
                          <p className="text-[11px] font-medium leading-5 text-[#22D3EE] sm:text-[12px]">
                            {item.period}
                          </p>
                        </div>

                        <div className="min-w-0 pt-4">
                          <h3 className="text-[12px] font-medium leading-[20px] text-white sm:text-[13px] sm:leading-[21px]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-[11px] font-normal leading-[18px] text-[#D1D1D1] sm:text-[12px] sm:leading-[18px] max-w-[344px]">
                            {item.description}
                          </p>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              </div>
            </Animation>

            {/* RIGHT PANEL: REGULATORY COVERAGE */}
            <Animation>
              <div className="h-full rounded-[9px] border border-[#FFFFFF0D] bg-[#101724] p-5 sm:p-6 lg:p-6 xl:p-[26px]">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-[0.4px] w-8 shrink-0 bg-[#0F66EA]" />
                  <p className="text-sm sm:text-base font-semibold uppercase tracking-[2px] text-[#0F66EA] sm:text-[12px] sm:tracking-[2.3px]">
                    REGULATORY COVERAGE BY SECTOR &amp; REGION
                  </p>
                </div>

                <h2 className="mt-5 text-[23px] font-normal leading-[1.35] tracking-[-0.4px] text-white sm:text-[27px] lg:text-[23px] xl:text-[25px]">
                  Industry-aligned. Privacy-ready.
                </h2>

                <p className="mt-3 text-[13px] font-normal leading-[23px] text-[#D1D1D1] sm:text-[14px] sm:leading-[26px] max-w-[500px]">
                  ISECURION connects regulatory requirements with practical
                  privacy governance and data protection processes.
                </p>

                {/* Sector Cards */}
                <div className="mt-6 flex flex-col gap-3.5">
                  {regulatoryCoverage.map((item) => (
                    <AnimatedCard
                      key={item.title}
                      className="grid grid-cols-1 gap-3 rounded-[6px] border border-[#FFFFFF05] bg-gradient-to-r from-[#19243A] via-[#152F59] to-[#101D32] p-3.5 sm:grid-cols-[42px_minmax(0,1fr)] sm:items-center sm:gap-3.5 sm:p-3.5 md:grid-cols-[42px_minmax(0,1fr)_minmax(0,0.95fr)] md:gap-3 lg:grid-cols-[42px_minmax(0,1fr)] xl:grid-cols-[42px_minmax(0,1fr)_minmax(0,0.95fr)] xl:gap-3.5"
                    >
                      {/* Icon */}
                      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#050D1C] border-2 border-[#13304F]">
                        <Icon
                          icon={item.icon}
                          className="text-[17px] text-[#00D9F5]"
                        />
                      </div>

                      {/* Sector and Regulations */}
                      <div className="min-w-0 self-center">
                        <h3 className="text-[12px] font-medium leading-[19px] text-white sm:text-[12px]">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-[10px] font-normal leading-[17px] text-[#D1D1D1] sm:text-[10px]">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Sector Description */}
                      <div className="min-w-0 border-t border-[#929BFF94] pt-3 sm:pt-3 md:border-l md:border-t-0 md:pl-3 md:pt-0 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-3 xl:border-l xl:border-t-0 xl:pl-3 xl:pt-0 max-w-[191px]">
                        <p className="text-[10px] font-normal leading-[15px] text-[#9DB4CF] sm:text-[10px] sm:leading-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* OUTSOURCED DPO SERVICES ACROSS KEY MARKETS */}
      <section
        className="relative isolate overflow-hidden bg-[#060D1B] bg-cover bg-center bg-no-repeat py-12 sm:py-14 lg:py-[72px]"
        style={{ backgroundImage: `url(${heroBackground.src})` }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP: INDIAN MARKETS */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
            {/* Intro */}
            <LeftAnimation>
              <div className="lg:max-w-[470px] text-center lg:text-left">
                <h2 className="text-[28px] font-normal leading-[1.4] tracking-[-0.4px] text-white sm:text-[32px] sm:leading-[1.45] lg:text-[32px] xl:text-[34px]">
                  Outsourced DPO Services Across Key Markets
                </h2>

                <p className="mt-4 text-[14px] leading-[25px] text-[#C5C9D2] sm:text-[15px] sm:leading-[26px]">
                  ISECURION provides dedicated DPO services in every major
                  Indian business hub, with remote, hybrid, and on-site
                  engagement models available.
                </p>
              </div>
            </LeftAnimation>

            {/* Indian Office Locations */}
            <div className="rounded-[24px] border border-[#596173]/70 bg-[#DADADA0A] p-4 sm:p-5 lg:p-5 xl:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4">
                {dpoLocations.map((location, index) => (
                  <AnimatedCard
                    delay={index * 0.1}
                    key={location.name}
                    className={`flex min-w-0 flex-col items-center justify-center gap-3 px-2 py-5 sm:py-6 ${
                      index < 4
                        ? "border-b border-[#FFFFFF0D] sm:border-b-0"
                        : ""
                    } ${
                      index % 4 !== 3 ? "sm:border-r sm:border-[#FFFFFF05]" : ""
                    } ${
                      index % 2 === 0
                        ? "border-r border-[#FFFFFF08] sm:border-r-0"
                        : ""
                    } ${index >= 4 ? "sm:border-t sm:border-[#FFFFFF0D]" : ""}`}
                  >
                    <GradientIcon Icon={location.Icon} />

                    <span className="text-center text-[13px] font-normal leading-5 text-[#D1D3DB] sm:text-[15px]">
                      {location.name}
                    </span>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM: GLOBAL COVERAGE */}
          <div className="relative mt-8 overflow-hidden rounded-[18px] border border-[#52606C]/70 bg-gradient-to-r from-[#1D1E2AF]  to-[#122D2C] sm:mt-9 lg:mt-8">
            <div className="relative grid grid-cols-1 items-center gap-7 p-5 sm:p-6 lg:grid-cols-[minmax(230px,1.2fr)_minmax(0,3fr)] lg:gap-5 lg:p-6 xl:p-6">
              {/* Global Coverage Intro */}
              <Animation>
                <div className="min-w-0">
                  <p className="text-[15px] font-medium uppercase tracking-wide text-[#1680FF] sm:text-[17px]">
                    GLOBAL COVERAGE
                  </p>

                  <h3 className="mt-3 text-[21px] font-normal leading-[1.5] text-white sm:text-[23px]">
                    Global reach.
                    <br />
                    Consistent standards.
                  </h3>

                  <p className="mt-3 text-[14px] leading-[25px] text-[#C5C9D2] sm:text-[15px] sm:leading-[26px]">
                    India-headquartered expertise.
                    <br className="hidden sm:block" />
                    Globally deployed. Locally compliant.
                  </p>
                </div>
              </Animation>

              {/* Global Regions */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {globalDpoRegions.map((region, index) => (
                  <AnimatedCard
                    delay={index * 0.1}
                    key={region.code}
                    className={`flex min-w-0 flex-col items-center justify-center px-2 py-5 text-center sm:px-3 lg:py-3 ${
                      index % 2 === 0 ? "border-r border-[#243849]" : ""
                    } ${
                      index === 1 || index === 3
                        ? "sm:border-r sm:border-[#243849]"
                        : ""
                    } ${
                      index < 3 ? "border-b border-[#243849] sm:border-b-0" : ""
                    } ${
                      index === 2
                        ? "sm:border-r sm:border-[#243849] lg:border-r lg:border-[#243849]"
                        : ""
                    } ${
                      index === 3
                        ? "sm:border-r-0 lg:border-r lg:border-[#243849]"
                        : ""
                    } ${index === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                  >
                    <GradientIcon
                      Icon={region.icon}
                      className="h-[43px] w-[43px] text-[#00D6E9] sm:h-[46px] sm:w-[46px]"
                      aria-hidden="true"
                    />

                    <span className="mt-4 text-[12px] font-medium tracking-wide text-[#BFC4CE]">
                      {region.code}
                    </span>

                    <span className="mt-2 h-[2px] w-[23px] bg-[#315A7D]" />

                    <span className="mt-2 text-[12px] leading-5 text-[#C5C9D2] sm:text-[13px]">
                      {region.name}
                    </span>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#060D1B] pb-12 sm:pb-14 lg:pb-[76px]">
        {/* Background image: waves and shield illustration */}
        <div
          className="absolute inset-x-0 top-0 h-[570px] bg-cover bg-center bg-no-repeat sm:h-[600px] lg:h-[572px]"
          style={{
            backgroundImage: `url(${privacySectionBackground.src})`,
          }}
          aria-hidden="true"
        />

        {/* Blue overlay to retain the reference's background tone */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[570px] bg-gradient-to-r from-[#287C91]/50 via-[#355D7B]/35 to-[#29415D]/45 sm:h-[600px] lg:h-[572px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8 lg:pt-[48px]">
          {/* Intro */}
          <Animation>
            <div className="max-w-[590px]">
              <p className="text-[12px] font-medium uppercase leading-5 text-white sm:text-[13px]">
                WHAT SETS ISECURION APART?
              </p>

              <h2 className="mt-2 max-w-[570px] text-[30px] font-normal leading-[1.3] tracking-[-0.45px] text-white sm:text-[34px] sm:leading-[1.4] lg:text-[36px]">
                Privacy Leadership that connects regulation, governance, and
                execution.
              </h2>

              <p className="mt-4 max-w-[560px] text-[14px] leading-[25px] text-[#D0D6E0] sm:text-[15px] sm:leading-[25px]">
                ISECURION combines privacy expertise, security knowledge, and
                practical implementation support to help organisations manage
                their data protection responsibilities.
              </p>
            </div>
          </Animation>

          {/* Four feature cards */}

          <div className="relative z-10 mt-7 rounded-[17px] border bg-gradient-to-b from-[#202123AD] to-[#090B21] px-5 py-7 shadow-[0_3px_0_rgba(15,102,234,0.16)] sm:mt-8 sm:px-7 sm:py-8 lg:mt-[26px] lg:px-[30px] lg:pb-[50px] lg:pt-[48px]">
            <div className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-0">
              {privacyLeadershipFeatures.map((feature, index) => (
                <AnimatedCard
                  delay={index * 0.13}
                  key={feature.title}
                  className="min-w-0"
                >
                  {/* Gradient-colored icon */}
                  <div className="relative mb-7 flex h-[22px] w-[30px] items-center">
                    <GradientIcon
                      Icon={feature.icon}
                      className="relative z-10 h-[30px] w-[30px] text-[#00D9EF] drop-shadow-[1px_1px_0px_#0F66EA]"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute left-[13px] top-[11px] h-[21px] w-[21px] rounded-full bg-[#4A4A4A]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-[15px] font-medium leading-[1.45] text-white sm:text-[16px] max-w-[199px]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[22px] text-[#D1D1D1D6] sm:text-[14px] sm:leading-[22px] max-w-[220px]">
                    {feature.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTSOURCED DELIVERABLES  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 sm:px-10 gap-8 lg:gap-15">
          <div className="w-full lg:w-[50%] space-y-4 text-center lg:text-left">
            <LeftAnimation>
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                OUTSOURCED DPO DELIVERABLES
              </p>
              <h2 className="font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF] lg:max-w-[490px]">
                Clear Privacy Deliverables. Measurable Compliance Progress.
              </h2>
              <p className="text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[509px]">
                Get practical privacy documentation, structured workflows, and
                actionable reporting that help strengthen data protection and
                improve compliance readiness.
              </p>
            </LeftAnimation>
          </div>

          <div className="flex-1">
            <div className="relative mt-8">
              <div className="absolute top-0 bottom-0 border-l-[3px] border-[#152329] shadow-[inset_3px_0_4px_0_#FFFFFFCF]"></div>
              <div className="space-y-8 ">
                {outsourcedDeliverables.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="flex gap-10"
                  >
                    <div className="relative w-0">
                      <div className="absolute top-0 -left-[8px] w-[18px] h-[18px] rounded-full border border-[#FFFFFF] bg-[#0F66EA]" />
                    </div>
                    <div className="flex gap-10 items-start">
                      <div>
                        <p className="text-base font-semibold text-[#0F66EA] tracking-[2px]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg text-[#FEFEFE]">{item.title}</h3>
                        <p className="text-sm leading-[23px] text-[#D1D1D1] max-w-[380px]">
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
            Outsourced DPO Services
          </>
        }
        description="Common questions from organisations in India and globally about Outsourced DPO services, appointment, and engagement."
        faqs={dpoFAQs}
      />

      <DPO_CTA />
    </div>
  );
}

export default DpoServices;
