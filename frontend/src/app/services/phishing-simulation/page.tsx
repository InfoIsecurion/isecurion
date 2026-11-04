"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Animation,
  AnimatedCard,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";
import Image from "next/image";
import Link from "next/link";
import gridBackground from "../../../assets/services/Clip-path-group-top.png";
import dashboardFrame from "../../../assets/services/mobileFrame.png";
import dashboardImage from "../../../assets/services/view-report-(campaign dashboard).png";
import FAQSection from "../../../components/sections/FAQSection";
import { useForm } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { phishingSimulation } from "../../../services/api/contact";
import { toast } from "react-toastify";

interface ContactFormData {
  email: string;
  companyName: string;
  simulation: string;
  turnstileToken: string;
}
const services = [
  {
    heading: "Realistic Attack Scenarios",
    description:
      "Simulate relevant phishing techniques based on evolving attacker tactics.",
    Icon: "fe:target",
    bgColor: "#0F66EA",
  },
  {
    heading: "Employee Behaviour Analysis",
    description:
      "Measure clicks, reporting behaviour, and simulated credential submission.",
    Icon: "iconmind:eval-report-outline-regular",
    bgColor: "#C8912A",
  },
  {
    heading: "Security Awareness Improvement",
    description:
      "Deliver targeted learning based on identified risks and repeat failures.",
    Icon: "fluent:learning-app-24-regular",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Measurable Risk Reduction",
    description:
      "Track performance trends and improve security awareness through continuous campaigns.",
    Icon: "icon-park-outline:market-analysis",
    bgColor: "#7D70F0",
  },
];

const simulationFeatures = [
  "AI-generated, continuously adaptive phishing scenarios",
  "Human risk scoring across delivery, click, submission and report stages",
  "Built-in security awareness training and LMS - no separate platform needed",
  "Aligned to MITRE ATT&CK, NIST CSF, ISO 27001, SOC 2 and OWASP",
];

const metrics = [
  "Click-Through Rate",
  "Report Rate",
  "Credential Submission",
  "Human Risk Score",
  "Repeat Failure",
];

const scopeOfWork = [
  {
    Icon: "garden:email-stroke-20",
    heading: "Enterprise Email Phishing",
    description:
      "Simulate targeted email campaigns, domain spoofing, malicious links, and credential-harvesting scenarios.",
  },
  {
    Icon: "iconoven:executive",
    heading: "Spear-Phishing for Executives",
    description:
      "Test leadership and privileged users with realistic, high-fidelity scenarios targeting executive-level threats.",
  },
  {
    Icon: "basil:mobile-phone-outline",
    heading: "Vishing & Smishing",
    description:
      "Voice/SMS social engineering to evaluate mobile channel exposure and enterprise reporting behavior for mobile-based threats.",
  },
  {
    Icon: "icon-park-outline:permissions",
    heading: "Role-Based Exposure",
    description:
      "Assess phishing susceptibility across departments and roles to identify where targeted training is needed.",
  },
  {
    Icon: "mdi:shopping-outline",
    heading: "Third-Party & Vendor Risk",
    description:
      "Assess vendor-facing channels and supplier exposure to social-engineering that could pivot to the organisation.",
  },
  {
    Icon: "grommet-icons:analytics",
    heading: "Metrics & Reporting",
    description:
      "Track clicks, reports, credential submissions, repeat failures, and behavioural risk trends through the Drosera dashboard.",
  },
];

const engagementLifecycle = [
  {
    number: "01",
    title: "Recon & Threat Modelling",
    description:
      "Controlled OSINT and threat modelling using current TTPs to craft realistic lures mapped to MITRE ATT&CK techniques.",
  },
  {
    number: "02",
    title: "Campaign Design & Approvals",
    description:
      "Templates, timelines and pre-send checks with executive sign-off (ROE) to protect continuity and legal compliance.",
  },
  {
    number: "03",
    title: "Controlled Execution",
    description:
      "Execute safe campaigns through Drosera’s trusted infrastructure, encrypted capture, and immediate containment.",
  },
  {
    number: "04",
    title: "Analysis & Remediation",
    description:
      "Executive dashboards, SOC playbook tuning, role-based remediation and targeted micro-training to close gaps.",
  },
];

const phishingDeliverables = [
  {
    icon: "iconmind:eval-report-outline-regular",
    title: "Executive Risk Report",
    description:
      "A concise risk scorecard summarising campaign outcomes, key exposures, and business implications.",
  },
  {
    icon: "ic:outline-fact-check",
    title: "Technical Evidence Pack",
    description:
      "Campaign timelines, simulation results, and relevant technical evidence for security and incident response teams.",
  },
  {
    icon: "cuida:settings-outline",
    title: "Remediation Playbook",
    description:
      "Prioritised recommendations, detection improvements, and targeted actions to address identified weaknesses.",
  },
  {
    icon: "icon-park-outline:preschool",
    title: "Training & Workshops",
    description:
      "Role-based micro-learning, awareness sessions, and team debriefs to improve employee response.",
  },
];

const humanRiskMetrics = [
  {
    icon: "lucide:mail",
    title: "Click-Through Rate",
    description:
      "Measure the percentage of recipients who interact with simulated phishing links.",
    value: "12.4%",
    label: "Click-through rate",
    gradient: "from-[#4338CA] to-[#7C3AED]",
    chart: "bars",
  },
  {
    icon: "lucide:shield-alert",
    title: "Report Rate",
    description:
      "Percentage of users reporting suspicious emails to SOC - indicator of security culture.",
    value: "68.7%",
    label: "Report rate",
    gradient: "from-[#0F766E] to-[#059669]",
    chart: "ring-green",
  },
  {
    icon: "lucide:id-card",
    title: "Credential Submission Rate",
    description:
      "Measure attempted submissions on controlled, simulated credential-harvesting pages.",
    value: "2.3%",
    label: "Submission rate",
    gradient: "from-[#2563EB] to-[#0EA5E9]",
    chart: "line",
  },
  {
    icon: "lucide:user-round",
    title: "Human Risk Score",
    description:
      "Combine relevant campaign indicators to identify higher-risk groups and prioritise remediation.",
    value: "36/100",
    label: "Risk score",
    gradient: "from-[#6D28D9] to-[#A855F7]",
    chart: "progress",
  },
  {
    icon: "lucide:refresh-cw",
    title: "Repeat Failure Rate",
    description:
      "Identify recurring susceptibility patterns across campaigns and employee cohorts.",
    value: "8.9%",
    label: "Repeat failure rate",
    gradient: "from-[#DB2777] to-[#D946EF]",
    chart: "pink-bars",
  },
  {
    icon: "lucide:clock",
    title: "Time to Report",
    description:
      "Measure how quickly employees report suspicious messages after receiving them.",
    value: "14 min",
    label: "Average time to report",
    gradient: "from-[#4338CA] to-[#2563EB]",
    chart: "ring-blue",
  },
];

const phishingFAQs = [
  {
    question: "What is a phishing simulation?",
    answer:
      "A controlled exercise that emulates phishing attacks to measure employee response, reporting behaviour and SOC readiness without exposing the organisation to real-world risk.",
  },
  {
    question: "Are these simulations safe and legally compliant?",
    answer:
      "Yes. We operate under a Rules of Engagement (ROE) agreed with stakeholders and legal counsel. Sensitive employees are excluded and evidence is handled securely.",
  },
  {
    question: "How frequently should we run simulations?",
    answer:
      "Continuous programs run monthly micro-campaigns with quarterly comprehensive reporting. Frequency can be adapted by risk cohort.",
  },
  {
    question: "Will employees be penalised for failing?",
    answer:
      "Our recommended approach is coaching and targeted training, not punitive measures. Organisations may define HR policies separately.",
  },
  {
    question: "Do you provide remediation materials?",
    answer:
      "Yes, role-based micro-learning, quizzes, and LMS-integrated modules are supplied to remediate identified weaknesses.",
  },
  {
    question: "Can you simulate credential-harvesting safely?",
    answer:
      "Credential capture is performed on isolated, encrypted endpoints with immediate containment and no storage of plaintext credentials.",
  },
  {
    question: "Are vishing and smishing included?",
    answer:
      "Yes. Voice and SMS channels are available to evaluate mobile risk and reporting behaviour.",
  },
  {
    question: "Can you target specific departments or geographies?",
    answer:
      "Campaigns can be segmented by role, business unit or legal jurisdiction to align with policy constraints and risk focus.",
  },
  {
    question: "How are results shared?",
    answer:
      "Results are distributed via executive summaries, technical evidence packs and an interactive Drosera dashboard for authorised users.",
  },
  {
    question: "What KPIs do you track?",
    answer:
      "CTR, report rate, human risk score, repeat failures, mean time to detect for simulated incidents and remediation completion.",
  },
  {
    question: "How long is onboarding?",
    answer:
      "Onboarding typically takes 1 - 2 weeks for pilots and 2 - 4 weeks for larger rollouts depending on integrations and approvals.",
  },
  {
    question: "Do you integrate with SIEM/LMS/HR systems?",
    answer:
      "Yes. We offer connector-based exports and API integrations to forward events to SIEMs, assign training in LMS and map users in HR systems.",
  },
  {
    question: "Is employee privacy protected?",
    answer:
      "All personal data is protected under contractual safeguards, encrypted in transit and at rest, with retention policies agreed with clients.",
  },
  {
    question: "Does this help with compliance?",
    answer:
      "Yes, deliverables include compliance mapping for ISO 27001, SOC 2 and privacy frameworks to support auditors and attestations.",
  },
  {
    question: "How do we start?",
    answer:
      "Contact ISECURION at info@isecurion.com or submit the enquiry form. We'll schedule a discovery call and provide an SOW and timeline.",
  },
  {
    question: "What is a good phishing click-through rate benchmark?",
    answer:
      "Mature, security-aware organisations typically target a click-through rate below 5%, tracked through continuous monthly simulation programs.",
  },
  {
    question:
      "How is phishing simulation different from a real phishing attack?",
    answer:
      "It uses the same lure techniques as real attackers but runs under an agreed Rules of Engagement, with no data exfiltration, safe credential capture, opt-out lists for sensitive staff, and immediate containment of any accidental exposure.",
  },
  {
    question: "What is Drosera?",
    answer:
      "Drosera is ISECURION's proprietary AI phishing simulation and human risk management platform. It runs continuous, AI-generated phishing campaigns from high-reputation, whitelist-free sending infrastructure and calculates a human risk score from delivery, engagement and reporting behaviour. Learn more at drosera.ai.",
  },
  {
    question: "Does ISECURION use its own tool for phishing simulations?",
    answer:
      "Yes. ISECURION's phishing simulation engagements are powered by Drosera, our in-house AI platform, which is also used by red teams, offensive security teams and MSSPs to run and manage phishing campaigns at scale.",
  },
];

function MetricChart({ type }: { type: string }) {
  if (type === "bars" || type === "pink-bars") {
    const heights = [10, 19, 29, 40];

    return (
      <div
        className="flex h-11 shrink-0 items-end gap-[4px]"
        aria-hidden="true"
      >
        {heights.map((height, index) => (
          <span
            key={height}
            className="w-[9px] rounded-t-[1px]"
            style={{
              height: `${height}px`,
              background:
                type === "bars"
                  ? ["#4F46E5", "#6366F1", "#3B82F6", "#8B5CF6"][index]
                  : ["#6B21A8", "#9333EA", "#D946EF", "#EC4899"][index],
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "ring-green" || type === "ring-blue") {
    return (
      <div
        className={`h-[51px] w-[51px] shrink-0 rounded-full ${
          type === "ring-green"
            ? "border-[5px] border-[#2DD4BF]"
            : "border-[5px] border-[#3B82F6]"
        }`}
        aria-hidden="true"
      />
    );
  }

  if (type === "line") {
    return (
      <svg
        viewBox="0 0 100 44"
        className="h-11 w-[100px] shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="riskLineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1685F8" stopOpacity=".24" />
            <stop offset="100%" stopColor="#1685F8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M2 37 C12 37 14 35 20 31 S31 25 39 29 S49 33 57 24 S68 10 77 11 L89 11 L89 43 L2 43 Z"
          fill="url(#riskLineFill)"
        />
        <path
          d="M2 37 C12 37 14 35 20 31 S31 25 39 29 S49 33 57 24 S68 10 77 11 L89 11"
          stroke="#2787FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="89" cy="11" r="2.2" fill="#2787FF" />
      </svg>
    );
  }

  return (
    <div
      className="h-[6px] w-[125px] max-w-full overflow-hidden rounded-full bg-[#24265C]"
      aria-hidden="true"
    >
      <div className="h-full w-[36%] rounded-full bg-gradient-to-r from-[#9A4BEE] to-[#EC49AD]" />
    </div>
  );
}

function PhishingSimulation() {
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
      const response = await phishingSimulation({ ...data, turnstileToken });
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
        <div className="absolute w-[650px] h-[650px] left-20 rounded-full blur-[200px] pointer-events-none bg-[#7D70F066]"></div>

        <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-15">
          <div className="flex-1">
            <Animation>
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold text-[#7D70F0]">
                  PHISHING SIMULATION & HUMAN RISK MANAGEMENT
                </p>
                <h1 className="text-[#FFFFFF] lg:max-w-[450px]">
                  Enterprise Phishing Simulation, Training & Security Awareness
                </h1>
                <p className="text-base sm:text-[17px] font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D1D1D1] lg:max-w-[450px]">
                  Identify employee vulnerabilities, improve threat reporting,
                  and reduce exposure to phishing, credential theft, and social
                  engineering attacks through realistic, controlled phishing
                  simulations.
                </p>
                <p className="text-base sm:text-[17px] font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D1D1D1] lg:max-w-[460px]">
                  Powered by Drosera, ISECURION's AI-driven platform helps
                  organisations measure human risk and build stronger security
                  awareness.
                </p>
              </div>
            </Animation>
            <Animation>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#7D70F0]"
                  />
                  AI-Powered Phishing Campaigns
                </li>

                <div className="flex flex-col lg:flex-row  gap-4">
                  <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                    <Icon
                      icon="boxicons:seal-check"
                      className="mt-0.5 shrink-0 text-[20px] text-[#7D70F0]"
                    />
                    Targeted Spear-Phishing
                  </li>

                  <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                    <Icon
                      icon="boxicons:seal-check"
                      className="mt-0.5 shrink-0 text-[20px] text-[#7D70F0]"
                    />
                    Vishing & Smishing
                  </li>
                </div>

                <li className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#7D70F0]"
                  />
                  Human Risk Analytics
                </li>
              </ul>
            </Animation>
            <Animation>
              <div className="mt-8 flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-start">
                <button className="flex h-[54px] items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[15px] font-medium text-[#31435C] shadow-lg transition-all duration-200 hover:bg-gray-100">
                  <span>Request Simulation</span>
                  <Icon icon="lucide:arrow-right" className="h-4 w-4" />
                </button>

                <button className="flex h-[54px] items-center justify-center gap-2.5 rounded-lg border-2 border-[#3263B1] bg-gradient-to-r from-[#29559D] to-[#1C3D70] px-6 py-3.5 text-base font-semibold text-white">
                  Explore Drosera
                </button>
              </div>
            </Animation>
          </div>

          {/* right  */}
          <div className="w-full flex-1 rounded-3xl  px-8 py-10 bg-[#202123]">
            <Animation>
              <div className="space-y-1">
                <h3 className="text-[22px] font-semibold text-[#FFFFFF]">
                  Request a Phishing Simulation Quote
                </h3>
                <p className="mt-2 text-base sm:text-[16px] text-[#D9D9D9]">
                  Get a Tailored Phishing Simulation Plan for Your Organisation.
                </p>
              </div>
            </Animation>
            <div className="">
              <Animation>
                <form
                  className="mt-6 space-y-4.5"
                  onSubmit={handleSubmit(submit)}
                >
                  {/* WORK EMAIL & COMPANY NAME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] text-[#FEFEFE] mb-1.5"
                      >
                        Work Email <span className="text-[#E24B4A]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="youremail@gmail.com"
                        className={`w-full h-[46px] rounded-[8px] outline-none bg-[#110404] border border-[#262D3D] px-3.5 text-[14px] text-[#D1D1D1] placeholder-gray-500 ${errors.email ? "border border-red-500" : ""}`}
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
                        htmlFor="company-name"
                        className="block text-[13px] text-[#FEFEFE] mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        id="company-name"
                        type="text"
                        placeholder="Company name"
                        className="w-full h-[46px] rounded-[8px] bg-[#110404] border border-[#262D3D] px-3.5 text-[14px] text-[#D1D1D1] placeholder-gray-500 "
                        {...register("companyName")}
                      />
                    </div>
                  </div>

                  {/* SIMULATION TYPE DROPDOWN */}
                  <div>
                    <label
                      htmlFor="simulation-type"
                      className="block text-[13px] text-[#FEFEFE] mb-1.5"
                    >
                      Simulation Type <span className="text-[#E24B4A]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className={`w-full h-[46px] appearance-none rounded-[8px] bg-[#110404] border border-[#262D3D] outline-none px-3.5 text-[13px] text-[#D1D1D1]  ${errors.simulation ? "border border-red-500" : ""} `}
                        {...register("simulation", {
                          required: "Simulation is required",
                        })}
                      >
                        <option value="">Select Simulation Type</option>
                        <option value="external">
                          Standard Phishing Simulation
                        </option>
                        <option value="internal">
                          Targeted Spear-Phishing
                        </option>
                        <option value="cloud">Vishing & Smishing Add-on</option>
                        <option value="full">
                          Continuous Phishing Program
                        </option>
                      </select>
                      <Icon
                        icon="lucide:chevron-down"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                      />
                      {errors.simulation && (
                        <p className="text-sm font-normal text-red-500">
                          {errors.simulation.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CAPTCHA */}
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

                  {/* TERMS & PRIVACY CHECKBOX */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-[2px] h-[14px] w-[14px] shrink-0 rounded-[2px] border border-[#A8A8A8] "
                    />
                    <label
                      htmlFor="terms"
                      className="text-[11px] leading-relaxed text-[#D1D1D1] max-w-[490px]"
                    >
                      By clicking submit below, you agree to our Terms of Use
                      and Privacy Policy. Additionally, you consent to allow
                      ISECURION Technology &amp; Consulting Pvt. Ltd. to store
                      and process the personal information submitted above to
                      provide you the content requested.
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className={`w-full h-[48px] mt-2 inline-flex items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] text-[15px] font-medium text-white border-[1.5px] border-[#00000000] transition-all duration-200 shadow-md shadow-[#0F66EA]/20 ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                  >
                    <span>{loading ? "getting" : "Get Quote"}</span>
                    <Icon icon="lucide:arrow-right" className="h-4 w-4" />
                  </button>
                </form>
              </Animation>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#060D1B] pt-18 pb-10">
        <div
          aria-label="Key human risk metrics"
          className="marquee relative w-full overflow-hidden border-y border-[#FFFFFF1A] bg-[#070D2E] py-3"
        >
          {/* fade on both edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080B19] to-transparent sm:w-32"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080B19] to-transparent sm:w-32"
            aria-hidden="true"
          />

          {/* the track holds the list twice, so the loop is seamless */}
          <div className="marquee-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0 items-center"
                aria-hidden={copy === 1}
              >
                {metrics.map((item) => (
                  <li
                    key={`${copy}-${item}`}
                    className="flex items-center whitespace-nowrap"
                  >
                    <span className="text-[15px] font-bold text-[#7D70F0] sm:text-lg">
                      {item}
                    </span>
                    <span className="mx-8 text-lg font-bold text-[#AF8BFA] sm:mx-12">
                      /
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Phishing Simulation  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold uppercase text-[#7D70F0]">
                UNDERSTANDING PHISHING SIMULATION
              </p>
              <h2 className="text-[#FEFEFE] lg:max-w-[720px]">
                Turn Employee Awareness into Measurable Security.
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[550px]">
                Phishing simulation is a controlled exercise that replicates
                real-world social engineering techniques to assess employee
                behaviour, reporting habits, and security awareness.
              </p>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[590px]">
                ISECURION combines realistic attack scenarios with behavioural
                insights and targeted training to identify weaknesses and
                strengthen your organisation's human security layer.
              </p>
            </div>
          </Animation>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <Icon
                      icon={item.Icon}
                      className="text-2xl text-[#FFFFFF]"
                    />
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

      <section className="relative isolate bg-[#080B19]">
        {/* ================= BACKGROUND ================= */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-100 bg-no-repeat overflow-hidden"
            style={{
              backgroundImage: `url(${gridBackground.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top bottom",
              backgroundSize: "auto auto",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#11132C]/10 via-transparent to-[#080B19]/50" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-8">
            {/* ---------- LEFT CONTENT ---------- */}
            <LeftAnimation>
              <div className="relative z-10 text-center lg:text-left ">
                <p className="text-[12px] sm:text-base font-semibold uppercase tracking-[0.2px] text-[#7D70F0] text-center lg:text-left">
                  OUR TECHNOLOGY
                </p>

                <h2 className="mt-3 lg:max-w-[470px] leading-[1.48] tracking-[-0.45px] text-[#F7F7FB] sm:leading-[1.4] text-center lg:text-left">
                  AI-Powered Simulations. Actionable Human Risk Insights.
                </h2>

                <p className="mt-4 lg:max-w-[380px] text-[14px] leading-[25px] text-[#C7C9D3] sm:text-[15px] sm:leading-[25.5px] text-center lg:text-left">
                  Drosera is ISECURION&apos;s in-house phishing simulation and
                  human risk management platform, designed to help organisations
                  run campaigns, analyse employee behaviour, and deliver
                  targeted security awareness training.
                </p>

                <ul className="mt-5 space-y-3 text-center lg:text-left">
                  {simulationFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 ">
                      <Icon
                        icon="lucide:badge-check"
                        className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#7D70F0]"
                        aria-hidden="true"
                      />
                      <span className="lg:max-w-[374px] text-[13px] font-medium leading-[21px] text-[#D5D6DF] sm:text-[14px] sm:leading-[22px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="text-center lg:text-left">
                  <Link
                    href="#"
                    className="mt-7 inline-flex min-h-[45px] items-center justify-center gap-2 rounded-[8px] border border-[#568CE0]/60 bg-gradient-to-b from-[#386CC0] to-[#20477E] px-5 py-3 text-[13px] font-medium text-white shadow-[0_4px_16px_rgba(15,102,234,0.15)] transition duration-300 hover:border-[#70A7FF] hover:from-[#437DD5] hover:to-[#285795] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F80FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B19]"
                  >
                    Explore Drosera
                    <Icon
                      icon="lucide:external-link"
                      className="h-[15px] w-[15px]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </LeftAnimation>

            {/* ---------- RIGHT: DEVICE FRAME + DASHBOARD ---------- */}
            <Animation>
              <div className="relative min-w-0 mx-auto w-full max-w-[680px] lg:mx-0 lg:max-w-none">
                {/* Wider than the column on lg+, so it runs off the right edge of the screen */}
                <div className="relative w-full lg:ml-auto lg:w-[min(50rem,calc(100%_+_2rem_+_max(0px,(10vw_-_80rem)/2)))]">
                  {/* 1) FRAME at the bottom. It sets the size and includes the bezel. */}
                  <Image
                    src={dashboardFrame}
                    alt=""
                    width={721}
                    height={539}
                    priority
                    sizes="(max-width: 1023px) 100vw, 60vw"
                    className="pointer-events-none relative z-10 block h-auto w-full"
                  />

                  {/* 2) DARK DASHBOARD on top, covering the frame's white screen */}
                  <div className="absolute bottom-[6%] left-[5.2%] right-0 top-[7%] z-20 overflow-hidden rounded-[6px]">
                    <Image
                      src={dashboardImage}
                      alt="Drosera phishing simulation and human risk dashboard"
                      fill
                      sizes="(max-width: 1023px) 100vw, 60vw"
                      className="object-fill"
                    />
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="relative w-full py-14 overflow-hidden bg-[#050D1C]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -right-20 w-[300px] h-[300px] rounded-full blur-[100px] bg-[#FFFFFF33]" />
        </div>
        <Animation>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#7D70F0]">
                SCOPE OF WORK
              </p>
              <h2 className="text-[#FFFFFF]">
                Measure Your Human Attack Surface
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[647px]">
                Simulate realistic social-engineering threats across people,
                roles, channels, and third parties to identify exposure and
                strengthen security awareness.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {scopeOfWork.map((item, index) => (
                  <AnimatedCard
                    delay={index * 0.15}
                    key={index}
                    className="relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F]"
                  >
                    <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#7D70F0]"></div>
                    <div className="flex items-center justify-between gap-10">
                      <h3 className="text-base sm:text-lg text-[#FFFFFF]">
                        {item.heading}
                      </h3>
                      <span>
                        <Icon
                          icon={item.Icon}
                          className="w-[25px] h-[25px] text-[#7D70F0]"
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

      <section className="relative w-full overflow-hidden bg-[#050D1C] py-14 sm:py-16 lg:py-[72px]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <Animation>
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-[12px] sm:text-base font-semibold uppercase tracking-wide text-[#7D70F0] sm:text-[16px]">
                Methodology
              </p>

              <h2 className="lg:max-w-[630px] leading-[1.3] tracking-[-0.5px] text-white ">
                A Structured Approach to Phishing Simulation
              </h2>

              <p className="max-w-[920px] text-[15px] font-normal leading-[25px] text-[#D1D1D1] sm:text-base sm:leading-[28px] lg:text-[18px] lg:leading-[31px]">
                From threat modelling to targeted remediation, we execute
                controlled phishing campaigns that uncover vulnerabilities,
                measure employee risk, and strengthen your organisation’s
                security resilience.
              </p>
            </div>
          </Animation>

          {/* Five Engagement Stages */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0 xl:gap-x-8">
            {engagementLifecycle.map((item, index) => (
              <AnimatedCard
                key={item.number}
                delay={index * 0.12}
                className="min-w-0"
              >
                <div className="flex h-full flex-col items-start">
                  {/* Number and Arrow */}
                  <div className="flex min-h-[28px] items-center gap-5">
                    <span className="text-[17px] font-medium leading-none tracking-[3px] text-[#7D70F0]">
                      {item.number}
                    </span>

                    {index < engagementLifecycle.length - 1 && (
                      <Icon
                        icon="akar-icons:arrow-right"
                        className="text-[22px] text-[#F5F0E8A1]"
                      />
                    )}
                  </div>

                  {/* Stage Title */}
                  <h3 className="mt-4 min-h-0 text-[16px] font-medium leading-[27px] text-[#F5F0E8] sm:text-lg lg:min-h-[54px] max-w-[175px]">
                    {item.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="mt-2 text-[14px] font-normal leading-[24px] text-[#C3C5CD] lg:text-[15px] lg:leading-[24px] max-w-[200px]">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050D1C] px-0">
        <div className="mx-auto max-w-7xl overflow-hidden ">
          <Animation>
            <div className="px-6 pb-0 pt-[52px] sm:px-10 lg:px-[25px] lg:pt-[51px]">
              <div className="text-center">
                <p className="text-[13px] sm:text-base font-semibold uppercase  text-[#7D70F0]">
                  WHY ISECURION?
                </p>

                <h2 className="mt-[10px] text-[30px] font-normal leading-[1.25] text-white sm:text-[36px] lg:text-[34px]">
                  Human Risk Intelligence that goes <br /> beyond click rates.
                </h2>

                <p className="mx-auto mt-[18px] max-w-[1040px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-lg">
                  ISECURION combines threat-informed simulations, behavioural
                  insights, and targeted remediation to help organisations
                  improve employee resilience against social engineering.
                </p>
              </div>
            </div>
          </Animation>

          <Animation>
            <div className="mt-8 grid grid-cols-1 gap-0 px-4 pb-10 sm:grid-cols-2 sm:px-6 md:grid-cols-3 md:px-6 lg:mt-[46px] lg:px-16 lg:pb-16">
              <div className="relative min-h-[309px] bg-[#050B18] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[30px]">
                <div className="text-white">
                  <Icon icon="boxicons:vector-square" className="text-[36px]" />
                </div>

                <div className="absolute bottom-[62px] left-[25px] right-[30px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    Threat-Informed <br /> Scenarios
                  </h3>

                  <p className="mt-[8px] lg:max-w-[255px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Our templates reflect active adversary campaigns and map to
                    MITRE ATT&CK techniques for relevance and realism.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[309px] bg-[#08142D] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[25px]">
                <div className="text-white">
                  <Icon
                    icon="majesticons:lightbulb-shine-line"
                    className="text-[36px]"
                  />
                </div>

                <div className="absolute bottom-[62px] left-[25px] right-[30px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    Behavioural <br /> Science
                  </h3>

                  <p className="mt-[8px] max-w-[255px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Reinforce safer employee decisions through targeted
                    awareness and practical learning.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[309px] bg-linear-to-b from-[#7D70F0] to-[#48408A] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[28px]">
                <div className="text-white">
                  <Icon icon="hugeicons:ai-chip" className="text-[36px]" />
                </div>

                <div className="absolute bottom-[47px] left-[25px] right-[25px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    In-House AI <br /> Platform
                  </h3>

                  <p className="mt-[8px] lg:max-w-[275px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Powered by Drosera, our proprietary AI phishing simulation
                    platform, not a third-party tool, so campaigns, data and
                    reporting stay in one trusted stack.
                  </p>
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      <section className="bg-[#050D1C] px-0">
        <div className="mx-auto max-w-7xl  px-6 py-[60px] sm:px-10 sm:py-[70px] lg:px-[26px] lg:py-[77px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
            <div className="pb-[50px] lg:pr-[70px] lg:pb-0 text-center lg:text-left">
              <LeftAnimation>
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-[0.2px] text-[#7D70F0]">
                  WHY CHOOSE US?
                </p>

                <h2 className="mt-[17px] lg:max-w-[400px] leading-[1.42] text-white">
                  Why organisations trust ISECURION?
                </h2>

                <p className="mt-[18px] lg:max-w-[420px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px]">
                  Combine proven expertise, industry experience, and
                  compliance-driven security services to strengthen your
                  organisation’s cyber resilience.
                </p>
              </LeftAnimation>
            </div>

            <Animation>
              <div className="border-t border-[#B1B1B114] pt-[45px] lg:border-l lg:border-t-0 lg:pl-[32px] lg:pt-0">
                <div className="space-y-[20px]">
                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] sm:text-base font-medium leading-[1.5] text-[#7D70F0]">
                      01
                    </span>
                    <div>
                      <h3 className="text-[15px] sm:text-lg font-medium leading-[1.5] text-white">
                        Certified Security Team
                      </h3>
                      <p className="mt-[6px] max-w-[460px] text-[13px] sm:text-base font-normal leading-[1.8] text-[#D1D1D1]">
                        OSCP, OSCE, CISSP-certified professionals and
                        experienced security specialists delivering expert-led
                        engagements.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] sm:text-base font-medium leading-[1.5] text-[#7D70F0]">
                      02
                    </span>
                    <div>
                      <h3 className="text-[15px] sm:text-lg font-medium leading-[1.5] text-white">
                        Enterprise Experience
                      </h3>
                      <p className="mt-[6px] max-w-[460px] text-[13px] sm:text-base font-normal leading-[1.8] text-[#D1D1D1]">
                        Proven security programmes across BFSI, healthcare,
                        SaaS, and critical infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] sm:text-base font-medium leading-[1.5] text-[#7D70F0]">
                      03
                    </span>
                    <div>
                      <h3 className="text-[15px] sm:text-lg font-medium leading-[1.5] text-white">
                        Compliance-Aligned Delivery
                      </h3>
                      <p className="mt-[6px] max-w-[460px] text-[13px] sm:text-base font-normal leading-[1.8] text-[#D1D1D1]">
                        Actionable findings and documentation aligned with ISO
                        27001, SOC 2, and relevant compliance frameworks.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] sm:text-base font-medium leading-[1.5] text-[#7D70F0]">
                      04
                    </span>
                    <div>
                      <h3 className="text-[15px] sm:text-lg font-medium leading-[1.5] text-white">
                        Long-Term Partnership
                      </h3>
                      <p className="mt-[6px] max-w-[460px] text-[13px] sm:text-base font-normal leading-[1.8] text-[#D1D1D1]">
                        Continuous security improvement through ongoing
                        assessments, proactive guidance, and measurable
                        progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="bg-[#050D1C] text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            {/* Left: Section introduction */}
            <LeftAnimation>
              <div className="lg:max-w-[470px] md:pt-1 text-center lg:text-left">
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-5 text-[#7D70F0] sm:text-[14px]">
                  PHISHING SIMULATION DELIVERABLES
                </p>

                <h2 className="mt-3 lg:max-w-[400px] leading-[1.28] tracking-[-0.5px] text-[#F8F9FC] sm:leading-[1.35]">
                  What you will receive
                </h2>

                <p className="mt-5 lg:max-w-[420px] text-[15px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[16px]">
                  Receive actionable reporting and remediation guidance to
                  improve awareness, strengthen detection, and reduce employee
                  susceptibility.
                </p>
              </div>
            </LeftAnimation>

            {/* Right: Deliverables grid */}
            <Animation>
              <div className="grid min-w-0 grid-cols-1 overflow-hidden rounded-[6px] border border-[#7D70F03D] sm:grid-cols-2">
                {phishingDeliverables.map((item, index) => (
                  <AnimatedCard
                    key={item.title}
                    className={[
                      "min-w-0 px-5 py-6 sm:px-6 sm:py-7 lg:px-[25px] lg:py-[30px]",
                      index % 2 === 0 ? "sm:border-r sm:border-[#29274D]" : "",
                      index < 2 ? "sm:border-b sm:border-[#29274D]" : "",
                      index < 3
                        ? "border-b border-[#29274D] sm:border-b-0"
                        : "",
                      index >= 2 ? "sm:border-t sm:border-[#29274D]" : "",
                    ].join(" ")}
                  >
                    <Icon
                      icon={item.icon}
                      className="h-[24px] w-[24px] text-[#7D70F0]"
                      aria-hidden="true"
                    />

                    <h3 className="mt-8 text-[17px] font-medium leading-[1.5] text-[#F5F6FA] sm:mt-8">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] font-normal leading-[23px] text-[#D1D1D1] sm:text-[14px] max-w-[260px]">
                      {item.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#08090D] text-white">
        {/* Dark background and subtle purple glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B12] via-[#08090D] to-[#050914]" />
          <div className="absolute -right-20 -top-28 h-[300px] w-[430px] rounded-full bg-[#5934E9]/20 blur-[100px]" />
          <div className="absolute -left-32 top-0 h-[280px] w-[360px] rounded-full bg-[#172D50]/20 blur-[110px]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-[52px]">
          {/* Section heading */}
          <Animation>
            <div className="lg:max-w-[580px] text-center lg:text-left">
              <p className="text-[13px] font-semibold sm:text-base uppercase leading-5 text-[#8B80FF] ">
                MEASURING HUMAN RISK
              </p>

              <h2 className="mt-3 lg:max-w-[520px] leading-[1.3] tracking-[-0.4px] ">
                Six numbers that{" "}
                <span className="text-[#0F66EA]">
                  explain <br />
                </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7D70F0] to-[#0F66EA]">
                  your people.
                </span>
              </h2>

              <p className="mt-3 text-[12px] leading-[21px] text-[#D1D1D1] sm:text-base sm:leading-[28px]">
                Monitor key indicators to understand employee susceptibility and
                evaluate the effectiveness of awareness initiatives.
              </p>
            </div>
          </Animation>

          {/* Six metric cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-[17px]">
            {humanRiskMetrics.map((metric, index) => (
              <AnimatedCard
                delay={index * 0.25}
                key={metric.title}
                className="flex min-h-[193px] min-w-0 flex-col rounded-[12px] border border-[#28254E]/80 bg-gradient-to-br from-[#141427]/95 via-[#10101C]/95 to-[#090B11] p-[17px] sm:p-[18px]"
              >
                {/* Icon and title */}
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[15px] bg-gradient-to-br ${metric.gradient}`}
                  >
                    <Icon
                      icon={metric.icon}
                      className="h-[27px] w-[27px] text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="min-w-0 text-[15px] font-medium leading-[1.5] text-[#F0F0F8] sm:text-lg">
                    {metric.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-[16px] text-[#D1D1D1] sm:text-[14px] sm:leading-[24px] max-w-[330px]">
                  {metric.description}
                </p>

                {/* Metric value and chart */}
                <div className="mt-10 flex min-w-0 items-end justify-between gap-3 pt-4">
                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-[28px] font-semibold leading-7 tracking-[-0.5px] text-[#E5E8FF] sm:text-[30px]">
                      {metric.value}
                    </p>
                    <p className="mt-3 text-[9px] sm:text-[14px] leading-[14px] text-[#8C97D6]">
                      {metric.label}
                    </p>
                  </div>

                  <MetricChart type={metric.chart} />
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Guidance strip */}
          <Animation>
            <div className="mt-5 lg:h-[68px] flex items-start gap-3 rounded-[16px] border border-[#1F2C6B] bg-gradient-to-r from-[#121C5A00] to-[#080E34E5] px-4 py-4 sm:items-center sm:px-[19px] sm:py-[15px]">
              <Icon
                icon="lucide:info"
                className="mt-0.5 h-[21px] w-[21px] shrink-0 text-[#8292FF] sm:mt-0"
                aria-hidden="true"
              />

              <div className="hidden h-6 w-px shrink-0 bg-[#28283D] sm:block" />

              <p className="text-sm leading-[17px] text-[#D1D1D1] sm:text-[15px] sm:leading-[18px]">
                Establish a baseline before setting targets. Success should be
                measured through improvement over time, not a single universal
                benchmark.
              </p>
            </div>
          </Animation>
        </div>
      </section>

      {/* IMPLEMENTATION ROADMAP */}
      <section className="relative isolate overflow-hidden bg-[#070D1B] text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-[68px]">
          {/* Section heading */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:items-start md:gap-10">
            <LeftAnimation>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2px] text-[#7D70F0] sm:text-base">
                  IMPLEMENTATION ROADMAP
                </p>

                <h2 className="mt-2 max-w-[510px] text-[27px] font-normal leading-[1.5] tracking-[-0.4px] text-[#D1D1D1] sm:text-[30px] lg:text-[32px]">
                  A Practical Path to better phishing resilience.
                </h2>
              </div>
            </LeftAnimation>

            <Animation>
              <p className="max-w-[400px] text-[15px] leading-[24px] text-[#C3C7D1] sm:text-[17px] sm:leading-[28px] md:ml-auto md:mt-5 text-center sm:text-left">
                Typical timeline for enterprise engagements. Schedules are
                adjusted to business cycles and regulatory windows.
              </p>
            </Animation>
          </div>

          {/* Roadmap cards */}
          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#FFFFFF1A] sm:mt-10 sm:grid-cols-2 lg:mt-[64px] lg:grid-cols-4">
            {/* Step 1 */}
            <AnimatedCard className="flex min-h-[205px] flex-col bg-[#0F1424] px-5 py-6 sm:px-6 sm:py-7 lg:min-h-[228px] lg:px-6 lg:py-[26px]">
              <p className="text-[42px] font-bold leading-none tracking-[-1px] text-[#8B5CF6] sm:text-[50px]">
                01
              </p>

              <div className="mt-6">
                <h3 className="text-[14px] font-semibold leading-[1.5] text-white sm:text-lg">
                  Scoping &amp; Approvals
                </h3>
                <p className="mt-4 text-[11px] leading-[18px] text-[#D1D1D1] sm:text-sm sm:leading-[22px] max-w-[240px]">
                  Week 0 - 2: ROE, exclusions, stakeholder alignment and legal
                  sign-off.
                </p>
              </div>
            </AnimatedCard>

            {/* Step 2 */}
            <AnimatedCard className="flex min-h-[205px] flex-col border-t border-[#252C3B] bg-[#0C2023] px-5 py-6 sm:border-l sm:px-6 sm:py-7 lg:min-h-[228px] lg:border-t-[11px] lg:border-t-[#202A32] lg:px-6 lg:py-[26px]">
              <p className="text-[42px] font-bold leading-none tracking-[-1px] text-[#3B82F6] sm:text-[50px]">
                02
              </p>

              <div className="mt-6">
                <h3 className="text-[14px] font-semibold leading-[1.5] text-white sm:text-lg">
                  Recon &amp; Pilot
                </h3>
                <p className="mt-4 text-[11px] leading-[18px] text-[#D1D1D1] sm:text-sm sm:leading-[22px]">
                  Week 3 - 4: OSINT, pilot sends on Drosera, SOC validation and
                  immediate micro-training for vulnerable cohorts.
                </p>
              </div>
            </AnimatedCard>

            {/* Step 3 */}
            <AnimatedCard className="flex min-h-[205px] flex-col border-t border-[#252C3B] bg-[#0F1424] px-5 py-6 sm:px-6 sm:py-7 lg:min-h-[228px] lg:border-l lg:px-6 lg:py-[26px]">
              <p className="text-[42px] font-bold leading-none tracking-[-1px] text-[#2DD4BF] sm:text-[50px]">
                03
              </p>

              <div className="mt-6">
                <h3 className="text-[14px] font-semibold leading-[1.5] text-white sm:text-lg">
                  Rollout
                </h3>
                <p className="mt-4 text-[11px] leading-[18px] text-[#D1D1D1] sm:text-sm sm:leading-[22px] max-w-[240px]">
                  Week 5 - 10: Full roll-out with segmented campaigns and
                  executive reporting.
                </p>
              </div>
            </AnimatedCard>

            {/* Step 4 */}
            <AnimatedCard className="flex min-h-[205px] flex-col border-t border-[#252C3B] bg-[#0C2023] px-5 py-6 sm:border-l sm:px-6 sm:py-7 lg:min-h-[228px] lg:border-t-[11px] lg:border-t-[#202A32] lg:px-6 lg:py-[26px]">
              <p className="text-[42px] font-bold leading-none tracking-[-1px] text-[#EC4899] sm:text-[50px]">
                04
              </p>

              <div className="mt-6">
                <h3 className="text-[14px] font-semibold leading-[1.5] text-white sm:text-lg max-w-[200px]">
                  Continuous Improvement
                </h3>
                <p className="mt-4 text-[11px] leading-[18px] text-[#D1D1D1] sm:text-sm sm:leading-[22px]">
                  Ongoing: Monthly micro-campaigns, quarterly SOW reviews and
                  iterative playbooks.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            Phishing Simulation
          </>
        }
        description="Find clear answers to common questions about our phishing simulations, campaign safety, reporting, and measurable security outcomes."
        faqs={phishingFAQs}
      />
    </div>
  );
}

export default PhishingSimulation;
