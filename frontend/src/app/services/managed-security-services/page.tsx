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
import Link from "next/link";
import FAQSection from "../../../components/sections/FAQSection";
import MSSP_CTA from "../../../components/sections/MSSP_CTA";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { managesSecurityService } from "../../../services/api/contact";
import { toast } from "react-toastify";


interface ContactFormData {
  email: string;
  companyName: string;
  primaryNeed: string;
  country: string;
  consent: boolean;
  turnstileToken: string;
}

const mssp = [
  {
    heading: "Proactive Monitoring",
    description:
      "Detect threats before they cause damage with round-the-clock SOC coverage.",
    Icon: "icon-park-outline:preschool",
    bgColor: "#0F66EA",
  },
  {
    heading: "AI-Powered Detection",
    description:
      "Behavioral analytics and ML models surface zero-day and APT threats faster.",
    Icon: "mingcute:edit-2-ai-line",
    bgColor: "#C8912A",
  },
  {
    heading: "Compliance Ready",
    description:
      "Audit-ready reporting for ISO 27001, SOC 2, GDPR, RBI, MAS TRM, DORA.",
    Icon: "iconmind:compliance-outline-regular",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Global Delivery",
    description:
      "Serving enterprises across India, USA, UK, UAE, GCC, Singapore & Australia.",
    Icon: "ri:global-line",
    bgColor: "#7D70F0",
  },
];

const OurServices = [
  {
    Icon: "icon-park-outline:preschool",
    heading: "24/7 SOC Monitoring",
    description:
      "Continuously monitor networks, endpoints, servers, & cloud infrastructure to identify suspicious activity & investigate security alerts.",
  },
  {
    Icon: "akar-icons:bug",
    heading: "Threat Detection & Response",
    description:
      "Detect and investigate malware, ransomware, phishing, and other cyber threats to support timely response.",
  },
  {
    Icon: "iconmind:incident-commander-outline-bold",
    heading: "Incident Response",
    description:
      "Support incident triage, investigation, containment, recovery, and root-cause analysis to reduce business impact.",
  },
  {
    Icon: "boxicons:file-report",
    heading: "Vulnerability Management",
    description:
      "Identify, prioritize, and track vulnerabilities across on-premises, cloud, and hybrid environments.",
  },
  {
    Icon: "icon-park-outline:table-report",
    heading: "Compliance & Audit Reporting",
    description:
      "Generate security reports & audit-supporting documentation aligned with relevant standards & regulatory requirements.",
  },
  {
    Icon: "iconmind:vpc-outline-regular",
    heading: "Cloud Security Monitoring",
    description:
      "Monitor cloud environments for misconfigurations, identity-related risks, and suspicious activity.",
  },
  {
    Icon: "bx:search-alt",
    heading: "Threat Hunting",
    description:
      "Proactively investigate unusual behavior and indicators of compromise that may evade routine detection.",
  },
  {
    Icon: "fe:sitemap",
    heading: "SIEM & Log Management",
    description:
      "Centralize and correlate security logs to improve event visibility, investigation, and detection capabilities.",
  },
  {
    Icon: "iconmind:security-champion-outline-bold",
    heading: "Security Consulting & vCISO",
    description:
      "Get strategic guidance, risk assessments, & security program recommendations aligned with business objectives.",
  },
];

const Steps = [
  {
    number: "01",
    step: "Phase 01",
    title: "Discovery & Scoping",
    description:
      "We assess your existing infrastructure, IT assets, compliance requirements, and risk appetite to define the right MSSP scope.",
    side: "left",
  },
  {
    number: "02",
    step: "Phase 02",
    title: "Onboarding & Integration",
    description:
      "Seamless integration of SIEM, EDR, and log sources into our SOC platform with custom detection rules and playbooks.",
    side: "right",
  },
  {
    number: "03",
    step: "Phase 03",
    title: "24/7 Monitoring & Detection",
    description:
      "Continuous monitoring by certified analysts backed by AI analytics, threat intelligence, and MITRE ATT&CK-mapped detection rules.",
    side: "left",
  },
  {
    number: "04",
    step: "Phase 04",
    title: "Triage & Incident Response",
    description:
      "Automated and analyst-driven triage, escalation, containment, and remediation with SLA-backed response times.",
    side: "right",
  },
  {
    number: "05",
    step: "Phase 05",
    title: "Reporting & Insights",
    description:
      "Monthly executive reports, compliance dashboards, threat summaries, and remediation tracking - all in one place.",
    side: "left",
  },
  {
    number: "06",
    step: "Phase 06",
    title: "Continuous Improvement",
    description:
      "Quarterly security reviews, tuning of detection rules, and strategic recommendations to stay ahead of evolving threats.",
    side: "right",
  },
];

const globalRegions = [
  {
    code: "IN",
    title: "India",
    color: "#3B9E6A",
    cities: [
      ["", "Delhi NCR"],
      ["", "Gurgaon"],
      ["", "Noida"],
      ["", "Mumbai"],
      ["", "Bengaluru"],
      ["", "Pune"],
      ["", "Kolkata"],
      ["", "Chennai"],
      ["", "Ahmedabad"],
      ["", "Hyderabad"],
    ],
  },
  {
    code: "ME",
    title: "GCC & Middle East",
    color: "#C8912A",
    cities: [
      ["ae", "Dubai"],
      ["ae", "Abu Dhabi"],
      ["sa", "Riyadh"],
      ["qa", "Doha"],
      ["bh", "Bahrain"],
      ["kw", "Kuwait"],
      ["om", "Muscat"],
    ],
  },
  {
    code: "US",
    title: "USA",
    color: "#315DE5",
    cities: [
      ["us", "New York"],
      ["us", "San Francisco"],
      ["us", "Chicago"],
      ["us", "Austin"],
      ["us", "Dallas"],
      ["us", "Seattle"],
    ],
  },
  {
    code: "APAC",
    title: "Asia Pacific",
    color: "#9060D8",
    cities: [
      ["sg", "Singapore"],
      ["au", "Sydney"],
      ["au", "Melbourne"],
      ["au", "Perth"],
    ],
  },
  {
    code: "EU / UK",
    title: "Europe & UK",
    color: "#E64747",
    cities: [
      ["gb", "London"],
      ["gb", "Manchester"],
      ["de", "Frankfurt"],
      ["nl", "Amsterdam"],
      ["fr", "Paris"],
      ["ie", "Dublin"],
    ],
  },
];

const securityDomains = [
  {
    title: "CERT-In Empanelled",
    description:
      "Officially empanelled by India's national cybersecurity agency, meeting government-recognized security requirements.",
    icon: "charm:certificate",
    background: "bg-[#080D1B]",
  },
  {
    title: "24/7 Certified Analysts",
    description:
      "Certified security professionals providing round-the-clock monitoring and expert threat analysis.",
    icon: "grommet-icons:shield-security",
    background: "bg-[#08142D]",
  },
  {
    title: "Tailored MSSP Programs",
    description:
      "Customized security solutions aligned with your industry, infrastructure, compliance needs, and budget.",
    icon: "fluent-emoji-high-contrast:puzzle-piece",
    background: "bg-gradient-to-b from-[#C8912A] to-[#000000A6]",
  },
  {
    title: "Enterprise Technology Stack",
    description:
      "Advanced SIEM, XDR, SOAR, and threat intelligence for improved threat detection and response.",
    icon: "charm:stack",
    background: "bg-gradient-to-b from-[#C8912A] to-[#000000A6]",
  },
  {
    title: "SLA-Backed Commitments",
    description:
      "Transparent SLAs for detection, escalation, and resolution, backed by regular performance reports.",
    icon: "fa7-regular:handshake-alt",
    background: "bg-[#071126]",
  },
  {
    title: "Global Coverage, Local Expertise",
    description:
      "Transparent SLAs for detection, escalation, and resolution, backed by regular performance reports.",
    icon: "boxicons:globe-alt-3",
    background: "bg-[#080D1B]",
  },
];

const outsourcedDeliverables = [
  {
    title: "Monthly Security Reports",
    description:
      "Executive-level summaries covering incidents detected, threats neutralized, MTTD/MTTR KPIs, & remediation status.",
  },
  {
    title: "Real-Time Threat Alerts",
    description:
      "Immediate notifications for critical threats with context, impact assessment, and recommended actions for your team.",
  },
  {
    title: "Compliance Audit Packs",
    description:
      "Audit-ready documentation packages for ISO 27001, SOC 2, RBI, GDPR, & MAS TRM - aligned to your regulatory obligations.",
  },
  {
    title: "Threat Intelligence Briefings",
    description:
      "Industry-specific threat advisories on emerging attack campaigns, CVEs, and TTPs relevant to your sector & region.",
  },
  {
    title: "Vulnerability Remediation Tracker",
    description:
      "Prioritized list of open vulnerabilities with risk ratings, ownership assignments, & remediation progress tracking.",
  },
  {
    title: "Quarterly Security Reviews",
    description:
      "Strategic review sessions with your CISO/IT leadership covering security posture improvements, roadmap, & emerging risk areas.",
  },
];

const msspFAQs = [
  {
    question: "What is a Managed Security Service Provider (MSSP)?",
    answer:
      "An MSSP delivers outsourced cybersecurity services including 24/7 SOC monitoring, threat detection, incident response, and vulnerability management - acting as a dedicated extension of your internal security team without the overhead of building an in-house SOC.",
  },
  {
    question: "Does ISECURION MSSP support compliance requirements globally?",
    answer:
      "Yes. ISECURION MSSP supports compliance with ISO 27001, SOC 2, NIST, RBI IT Framework, DPDP (India), GDPR (EU/UK), MAS TRM (Singapore), DORA (EU), and SAMA/NCA frameworks (GCC/UAE).",
  },
  {
    question: "Which industries benefit most from MSSP?",
    answer:
      "Banking & financial services, healthcare, e-commerce, IT/SaaS, manufacturing, government, and telecom sectors all benefit greatly from continuous MSSP coverage - especially those subject to regulatory audits and high-value data environments.",
  },
  {
    question: "Can ISECURION MSSP serve organizations outside India?",
    answer:
      "Yes. ISECURION delivers MSSP services globally - including USA, UK, UAE, GCC (Saudi Arabia, Qatar, Bahrain, Oman, Kuwait), Singapore, and Australia. Our follow-the-sun SOC model ensures 24/7 coverage regardless of your time zone.",
  },
  {
    question: "How does MSSP detect and respond to threats?",
    answer:
      "Through enterprise SIEM platforms, AI-based behavioral analytics, global threat intelligence feeds, EDR/XDR tools, and MITRE ATT&CK-mapped detection rules - monitored by certified analysts 24/7 with SOAR-driven automated response playbooks.",
  },
  {
    question: "What is included in MSSP incident response?",
    answer:
      "Detection, triage, investigation, containment, eradication, recovery, root cause analysis, and post-incident reporting with recommendations to prevent recurrence - all covered under our SLA-backed IR commitment.",
  },
  {
    question: "Can MSSP manage cloud security across AWS, Azure, and GCP?",
    answer:
      "Yes. ISECURION MSSP monitors and remediates security issues across AWS, Microsoft Azure, and Google Cloud Platform - including misconfiguration detection, IAM anomalies, data exfiltration, and cloud-native attack patterns.",
  },
  {
    question: "How quickly does ISECURION respond to critical incidents?",
    answer:
      "ISECURION provides rapid response typically within 15–30 minutes for P1 critical incidents, with defined SLAs covering detection, escalation, containment, and resolution timelines agreed upon at contract.",
  },
  {
    question: "Is MSSP scalable for growing organizations?",
    answer:
      "Absolutely. Our MSSP programs scale from SMEs to large enterprises - adapting to infrastructure growth, geographic expansion, M&A activity, and evolving threat landscapes without operational disruption.",
  },
  {
    question: "How do you measure MSSP effectiveness?",
    answer:
      "Through KPIs including Mean Time to Detect (MTTD), Mean Time to Respond (MTTR), threat detection rate, false positive rate, system uptime, compliance posture score, and vulnerability remediation velocity - all reported monthly.",
  },
  {
    question: "Can MSSP services be customized for our industry and region?",
    answer:
      "Yes. ISECURION tailors MSSP programs to your industry (BFSI, healthcare, IT, etc.), region (India, UAE, EU, Singapore, etc.), regulatory obligations, existing security tools, and specific risk profile.",
  },
  {
    question: "How does MSSP integrate with my existing IT and security tools?",
    answer:
      "ISECURION MSSP integrates with your existing firewalls, endpoints, identity systems, ITSM platforms, and ticketing tools - acting as an extension of your team without disrupting existing workflows.",
  },
  {
    question: "Can MSSP help reduce our overall cybersecurity spend?",
    answer:
      "Yes. Outsourcing 24/7 SOC operations eliminates costs associated with hiring, training, retaining, and tooling an in-house security team - typically reducing total security spend by 40–60% while significantly expanding coverage and capability.",
  },
  {
    question: "Is ISECURION CERT-In empanelled?",
    answer:
      "Yes. ISECURION is officially empanelled by CERT-In (Indian Computer Emergency Response Team) and ISO 27001:2022 certified - ensuring our MSSP services meet India's highest government-recognized cybersecurity standards.",
  },
  {
    question: "What tools are used in ISECURION's MSSP platform?",
    answer:
      "We leverage enterprise-grade SIEM platforms, EDR/XDR solutions, SOAR automation, global threat intelligence feeds, network traffic analysis tools, vulnerability scanners, and proprietary analytics - all mapped to MITRE ATT&CK.",
  },
];

function ManagedSecurityServices() {
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
    try {
      const response = await managesSecurityService({
        ...data,
        turnstileToken,
      });
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
          className="pointer-events-none absolute -left-[100px] top-[100px] z-0 h-[550px] w-[560px] rounded-full bg-[#C8912A]/19 blur-[140px] lg:left-[100px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-5 xl:gap-8">
            <Animation>
              <div className="flex flex-col justify-center lg:py-2 text-center md:text-left">
                {/* Eyebrow */}
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-none text-[#C8912A] text-center lg:text-left">
                  MANAGED SECURITY SERVICES
                </p>

                {/* Heading */}
                <h1 className="mt-5 lg:max-w-[470px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left">
                  Managed Security Services (MSSP) - 24/7 SOC & Threat Defense
                </h1>

                {/* Description */}
                <p className="mt-4 lg:max-w-[390px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                  ISECURION delivers enterprise-grade Managed Security Services
                  to organizations across India, USA, UK, UAE, GCC, Singapore,
                  and Australia.
                </p>

                <p className="mt-4 lg:max-w-[410px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                  From 24/7 SOC monitoring and AI-driven threat detection to
                  incident response, vulnerability management, and compliance
                  reporting, we protect your digital infrastructure around the
                  clock.
                </p>

                {/* CTA */}
                <div className="mt-10 text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                  >
                    Book Free Consultation {""}
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
                    Request a Free MSSP Assessment
                  </h2>

                  <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                    Get a free security assessment and tailored MSSP proposal.
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
                        className={`h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585]  ${errors.email ? "border border-red-500" : ""}`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address",
                          },
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

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-5">
                    <div>
                      <label
                        htmlFor="assessmentType"
                        className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                      >
                        Primary Need <span className="text-[#F04444]">*</span>
                      </label>

                      <div className="relative">
                        <select
                          id="target"
                          name="target"
                          defaultValue=""
                          className={`h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD] ${errors.primaryNeed ? "border border-red-500" : ""}`}
                          {...register("primaryNeed", {
                            required: "Primary need is required",
                          })}
                        >
                          <option value="">Select Your Primary Need</option>
                          <option value="24/7 SOC Monitoring">
                            24/7 SOC Monitoring
                          </option>
                          <option value="Threat Detection & Incident Response">
                            Threat Detection & Incident Response
                          </option>
                          <option value="Vulnerability & Risk Management">
                            Vulnerability & Risk Management{" "}
                          </option>
                          <option value="Compliance Reporting (ISO 27001 /SOC 2 / GDPR)">
                            Compliance Reporting (ISO 27001 /SOC 2 / GDPR){" "}
                          </option>
                          <option value="Cloud Security Monitoring (AWS /Azure / GCP)">
                            Cloud Security Monitoring (AWS /Azure / GCP)
                          </option>
                          <option value="Full MSSP Engagement">
                            Full MSSP Engagement
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.primaryNeed && (
                          <p className="text-sm font-normal text-red-500">
                            {errors.primaryNeed.message}
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

                    <div>
                      <label
                        htmlFor="region"
                        className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                      >
                        Region <span className="text-[#E42F23]">*</span>
                      </label>

                      <input
                        id="region"
                        name="region"
                        type="text"
                        placeholder="Country / Region"
                        className={`h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD] ${errors.country ? "border border-red-500" : ""}`}
                        {...register("country", {
                          required: "Region is required",
                        })}
                      />
                      {errors.companyName && (
                        <p className="text-sm font-normal text-red-500">
                          {errors.country.message}
                        </p>
                      )}
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
                      className={`mt-[2px] h-[14px] w-[14px] shrink-0 rounded-[2px] `}
                      {...register("consent", {
                        required: "Please accept the consent to continue.",
                      })}
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
                    Get My Free Assessment{""}
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

      <section className="w-full pt-4 pb-14  bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 overflow-hidden">
          {/* heading  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#C8912A]">
                  UNDERSTANDING MSSP
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                  Your Outsourced Security Operations Center
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full lg:mt-15 text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[640px]">
                  A Managed Security Service Provider (MSSP) delivers continuous
                  cybersecurity monitoring, threat detection, incident response,
                  and compliance support - acting as a dedicated extension of
                  your internal security team.
                </p>
                <p className="mt-6 text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[640px]">
                  ISECURION's MSSP practice combines certified security
                  analysts, advanced SIEM/XDR technology, and global threat
                  intelligence to deliver measurable, SLA-backed security
                  outcomes - whether your team is in Bengaluru, Dubai, London,
                  or New York.
                </p>
              </div>
            </RightAnimation>
          </div>

          <div className="mt-20">
            <Animation>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mssp.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-3 pl-6 border-l border-[#0F66EA29]"
                  >
                    <div
                      className="w-[48px] h-[48px] flex items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${item.bgColor}` }}
                    >
                      <Icon
                        icon={item.Icon}
                        className="text-xl text-[#FFFFFF]"
                      />
                    </div>
                    <h3 className="mt-3 text-base font-medium text-[#F5F0E8]">
                      {item.heading}
                    </h3>
                    <p className="text-sm font-normal leading-[22px] text-[#D1D1D1D6] max-w-[230px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* HYBRID SOC SERVICES */}
      <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
        <Animation>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <div className="max-w-4xl space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#C8912A] ">
                OUR SERVICES
              </p>
              <h2 className="text-[#FFFFFF] max-w-[700px]">
                Managed Security Services to Protect Every Layer of Your
                Business
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[850px]">
                From continuous monitoring and threat hunting to compliance
                management, our MSSP services cover every layer of your security
                posture.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {OurServices.map((item, index) => (
                  <AnimatedCard
                    delay={index * 0.13}
                    key={index}
                    className={`relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F] py-8  }`}
                  >
                    <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#C8912A]"></div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                        {item.heading}
                      </h3>
                      <span>
                        <Icon
                          icon={item.Icon}
                          className="w-[25px] h-[25px] text-[#C8912A]"
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

      <section className="relative w-full overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#C8912A]">
                  How It Works
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                  Our MSSP Delivery Process
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[640px]">
                  A structured onboarding-to-operations lifecycle designed for
                  minimal disruption and maximum security coverage.
                </p>
              </div>
            </RightAnimation>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 lg:mt-20">
            {/* Center line on tablet/desktop; left-side line on mobile */}
            <div className="absolute bottom-5 left-[14px] top-1 w-px bg-gradient-to-b from-[#C8912A] via-[#8E762F] to-[#263343] sm:left-1/2 sm:-translate-x-1/2" />

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
                        <p className="text-sm tracking-[0.12em] text-[#C8912A] sm:text-[14px]">
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
                  <div className="absolute left-0 top-0 z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center border border-[#8E7029] bg-[#10151D] text-[9px] font-normal text-[#C8912A] sm:relative sm:col-start-2 sm:row-start-1 sm:mx-auto sm:h-[36px] sm:w-[36px]">
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
                        <p className="text-sm tracking-[0.12em] text-[#C8912A] sm:text-[14px]">
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

      <section className="bg-[#060D1B] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* SECTION HEADER */}
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-7 lg:grid-cols-2 lg:gap-12 text-center lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#D9A02D] sm:text-base">
                GLOBAL REACH
              </p>

              <h2 className="mt-3 lg:max-w-[520px] text-[30px] font-medium leading-[1.35] tracking-[-0.02em] sm:text-4xl lg:text-[34px]">
                Serving enterprises
                <br className="hidden sm:block" /> across 10+ countries
              </h2>
            </div>

            <p className="lg:max-w-[450px] text-sm leading-6 text-[#D1D1D1] sm:text-base sm:leading-[26px] lg:pt-6">
              Follow-the-sun SOC model - uninterrupted 24/7 coverage regardless
              of your time zone.
            </p>
          </div>

          {/* REGION CARDS */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {globalRegions.map((region) => (
              <article
                key={region.code}
                className="relative min-w-0 overflow-hidden rounded-[5px] border-b border-white/[0.06] bg-[#080F1E] p-4 pt-5 sm:p-5"
              >
                {/* Colored top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-[4px] rounded-t-[5px]"
                  style={{ backgroundColor: region.color }}
                />

                <p
                  className="text-[11px] font-medium uppercase tracking-[1px]"
                  style={{ color: region.color }}
                >
                  {region.code}
                </p>

                <h3 className="mt-3 text-base font-medium leading-5 text-[#F1F3F7] sm:text-lg">
                  {region.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {region.cities.map(([countryCode, city]) => (
                    <span
                      key={city}
                      className="inline-flex min-h-[26px] items-center gap-1.5 rounded-[3px] bg-[#0D1B30] px-2.5 py-1 text-[11px] leading-4 text-[#F0F3F8] sm:px-3"
                    >
                      <Icon
                        icon={`flagpack:${countryCode}`}
                        className="h-[9px] w-[10px] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{city}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}

            {/* GLOBAL CTA CARD */}
            <article className="flex min-w-0 flex-col justify-between rounded-[5px] border-t-[4px] border-white bg-gradient-to-b from-[#070707] to-[#000000] p-4 sm:p-5">
              <div>
                <h3 className="text-base font-medium text-[#F1F1F1] sm:text-lg">
                  Not in the list?
                </h3>

                <p className="mt-2 text-sm leading-[22px] text-[#D1D1D1] sm:text-[15px] sm:leading-6">
                  We serve clients globally. Get in touch to discuss coverage
                  for your region.
                </p>
              </div>

              <Link
                href="/company/contact"
                className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-3 text-center text-xs font-medium text-[#17243A] transition-colors hover:bg-[#E9EDF5] sm:text-[13px]"
              >
                Talk to Our Global Team
                <Icon
                  icon="solar:arrow-right-linear"
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* GLOBAL PRIVACY COVERAGE */}
      <section className="relative overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-[72px]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Intro + Framework Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start lg:gap-8 xl:gap-10">
            {/* Left: Intro */}
            <LeftAnimation>
              <div className="lg:max-w-[400px] text-center lg:text-left">
                <p className="text-[12px] sm:text-base font-semibold uppercase leading-5 text-[#C8912A]">
                  Compliance cOVERAGE
                </p>

                <h2 className="mt-2 leading-[1.5] tracking-[-0.5px] text-white sm:leading-[1.35] lg:max-w-[450px]">
                  Security Operations, Aligned to Global Standards.
                </h2>

                <p className="mt-4 text-[14px] font-normal leading-[23px] text-[#C6C9D0] sm:text-[15px] sm:leading-[25px]">
                  Our MSSP services are aligned to major security standards
                  across every region we serve.
                </p>
              </div>
            </LeftAnimation>

            {/* Right: Regulatory Framework Cards */}
            <RightAnimation>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-4 xl:gap-5">
                {/* India Frameworks */}
                <div className="flex min-w-0 flex-col rounded-[17px] border border-[#4C7370]/16 bg-[#66666614] px-5 sm:pt-[25px] pb-8">
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
                      "RBI IT Framework & DPDP",
                      "SEBI / CSCRF",
                      "SEBI / MSOC",
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

                  <p className="text-sm font-normal text-[#D1D1D1] sm:text-[13px] sm:leading-6 max-w-[280px]">
                    Support for regulatory security, incident reporting, data
                    protection, & cybersecurity requirements across Indian
                    enterprises & regulated sectors.
                  </p>
                </div>

                {/* Global Frameworks */}
                <div className="flex min-w-0 flex-col rounded-[17px] border border-[#4C7370]/16 bg-[#666666]/8 px-3 sm:p-[25px] pb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="shrink-0 text-[20px] leading-none">
                      <Icon icon="fluent-emoji-flat:globe-showing-europe-africa" />
                    </span>
                    <h3 className="text-sm font-semibold leading-5 text-[#E6E8EF] sm:text-[14px]">
                      Global Security Standards
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "ISO 27001:2022",
                      "SOC 2 Type I & II",
                      "NIST CSF / SP 800-53",
                      "GDPR",
                      "MAS TRM",
                      "SAMA / NCA ECC",
                      "DORA",
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

                  <p className="text-sm font-normal text-[#D1D1D1] sm:text-[13px] leading-6 max-w-[270px]">
                    Support for global security, privacy, resilience, and
                    regulatory requirements across international markets.
                  </p>
                </div>
              </div>
            </RightAnimation>
          </div>
        </div>
      </section>

      <section className="bg-[#060D1B] py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
            <p className="mb-2 text-sm font-semibold uppercase text-[#C8912A] sm:text-base">
              Why Choose Us
            </p>

            <h2 className="font-medium leading-tight tracking-tight text-white">
              The ISECURION MSSP Advantage
            </h2>

            <p className="mx-auto mt-4 max-w-[780px] text-[14px] leading-5 text-[#D1D1D1] sm:text-[17px] sm:leading-[26px]">
              What makes our MSSP program different from the rest - and why 100+
              enterprises across 10+ countries trust us.
            </p>
          </div>

          {/* Security Domain Cards */}
          <div className="grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {securityDomains.map((domain, i) => (
              <AnimatedCard
                delay={i * 0.25}
                key={domain.title}
                className={`flex min-h-[220px] flex-col ${domain.background} p-5 transition-colors duration-300 sm:min-h-[230px] sm:p-6 lg:min-h-[234px] lg:px-[30px] lg:pb-14 lg:pt-12`}
              >
                <Icon
                  icon={domain.icon}
                  className="h-[32px] w-[32px] shrink-0 text-white"
                  aria-hidden="true"
                />

                <div className="pt-25">
                  <h3 className="text-base font-medium leading-5 text-white sm:text-lg">
                    {domain.title}
                  </h3>

                  <p className="mt-5 max-w-[330px] text-sm leading-[17px] text-[#D1D1D1] sm:text-base sm:leading-[25px]">
                    {domain.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 sm:px-10 gap-8 lg:gap-15">
          <div className="w-full space-y-4 text-center lg:sticky lg:top-24 lg:h-fit lg:w-1/2 lg:self-start lg:text-left">
            <LeftAnimation>
              <p className="text-sm sm:text-base font-semibold text-[#C8912A]">
                DELIVERABLES
              </p>
              <h2 className="font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF] lg:max-w-[490px]">
                Security Deliverables That Drive Better Decisions
              </h2>
              <p className="text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[509px]">
                Get actionable reports, real-time alerts, audit-ready
                documentation, and strategic insights to strengthen security and
                track performance.
              </p>
            </LeftAnimation>
          </div>

          <div className="flex-1">
            <div className="relative mt-8">
              <div className="absolute top-0 bottom-0 border-l-[2px] border-[#B1B1B114] shadow-[inset_3px_0_4px_0_#FFFFFFCF]"></div>
              <div className="space-y-8 ">
                {outsourcedDeliverables.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="flex gap-10"
                  >
                    <div className="relative w-0"></div>
                    <div className="flex gap-10 items-start">
                      <div>
                        <p className="text-base font-semibold text-[#C8912A] tracking-[2px]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg text-[#FEFEFE]">{item.title}</h3>
                        <p className="text-sm leading-[23px] text-[#D1D1D1] max-w-[460px]">
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
            MSSP
          </>
        }
        description="Find answers to common questions about MSSP services, security coverage, compliance, and how ISECURION helps protect your business."
        faqs={msspFAQs}
      />
      <MSSP_CTA />
    </div>
  );
}

export default ManagedSecurityServices;
