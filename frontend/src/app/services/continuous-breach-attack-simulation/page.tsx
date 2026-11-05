"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import approachBg from "../../../assets/services/red-team-approach.svg";
import {
  Animation,
  AnimatedCard,
  LeftAnimation,
} from "../../../components/ui/Animation";
import FAQSection from "../../../components/sections/FAQSection";
import { Turnstile } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import {
  aiAugamented,
  breachAttackSimulation,
} from "../../../services/api/contact";
import { toast } from "react-toastify";

interface ContactFormData {
  email: string;
  companyName: string;
  simulation: string;
  turnstileToken: string;
}

const cbsFAQs = [
  {
    question: "What is CBAS?",
    answer:
      "Continuous Breach Attack Simulation validates defenses 24/7 by mimicking real-world attackers using adversary simulation.",
  },
  {
    question: "How is CBAS different from Penetration Testing?",
    answer:
      "Pen testing is point-in-time. CBAS is continuous, automated, and ensures defenses stay validated.",
  },
  {
    question: "Which industries benefit most?",
    answer:
      "Banks, SaaS, FinTech, Healthcare, Govt, and Enterprises handling sensitive data.",
  },
  {
    question: "Does CBAS support compliance?",
    answer:
      "Yes, CBAS helps achieve ISO 27001, SOC 2, PCI DSS, RBI, and GDPR compliance.",
  },
  {
    question: "How often should CBAS be done?",
    answer:
      "CBAS runs continuously but results can be reviewed weekly or monthly for optimization.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Typically 1-2 weeks depending on infrastructure complexity and integrations.",
  },
  {
    question: "Can CBAS detect zero-day threats?",
    answer:
      "Yes, CBAS adapts to new TTPs and exploits through continuous updates.",
  },
  {
    question: "Does CBAS disrupt operations?",
    answer:
      "No, it runs safely in production without disrupting normal business workflows.",
  },
  {
    question: "How does ISECURION deliver reports?",
    answer:
      "We provide executive summaries, technical findings, and remediation guidance via dashboards & reports.",
  },
  {
    question: "Why choose ISECURION for CBAS?",
    answer:
      "ISECURION combines CERT-In expertise, certified professionals, and years of experience in adversary simulations.",
  },
];

const governanceCards = [
  {
    icon: "iconmind:eval-report-outline-regular",
    title: "Executive Report",
    description:
      "High-level summary for leadership with risk exposure details.",
  },
  {
    icon: "material-symbols:search-insights-rounded",
    title: "Technical Findings",
    description:
      "Detailed attack paths, vulnerabilities, and missed detections.",
  },
  {
    icon: "boxicons:workflow",
    title: "Remediation Steps",
    description:
      "Actionable fixes to close gaps and strengthen security posture.",
  },
  {
    icon: "akar-icons:people-group",
    title: "Team Debrief",
    description: "Workshops with SOC/IT teams to improve incident readiness.",
  },
];

function ContinuousBreachAttackSimulation() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);

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
      const response = await breachAttackSimulation({
        ...data,
        turnstileToken,
      });
      if (response.status === 200) {
        toast.success(response.message);
        reset();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-black text-white py-6 border-b border-white/5">
        <div className="absolute -left-[100px] lg:-left-[0px] top-[100px] w-[600px] h-[580px] rounded-full bg-[#E24B4A4F] pointer-events-none z-0 blur-[140px]" />

        <div className="relative overflow-hidden max-w-7xl mx-auto px-7 py-10 sm:px-10 lg:px-8 lg:py-10 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* LEFT COLUMN: HERO CONTENT */}
            <div className="lg:col-span-6 text-center md:text-left">
              {/* EYEBROW */}
              <p className="text-sm sm:text-base font-semibold tracking-[0.02em] uppercase text-[#E24B4A]">
                CONTINUOUS BREACH ATTACK SIMULATION
              </p>

              {/* HEADING */}
              <Animation>
                <h1 className="mt-4 font-semibold leading-[1.4] tracking-[-0.02em] text-white lg:max-w-[400px]">
                  Continuously validate your defenses against real-world
                  attacks.
                </h1>
              </Animation>

              {/* DESCRIPTION */}
              <Animation>
                <p className="mt-5 text-[14px] sm:text-[16px] leading-[1.7] text-[#D1D1D1] lg:max-w-[380px]">
                  ISECURION&apos;s CBAS continuously simulates real-world
                  attacks to identify gaps, validate defenses, and improve your
                  cybersecurity posture proactively.
                </p>
              </Animation>

              {/* CTA BUTTON */}
              <Animation>
                <div className="mt-8">
                  <button className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[15px] font-medium text-[#31435C] transition-all duration-200 hover:bg-gray-100 shadow-lg">
                    <span>Request Simulation</span>
                    <Icon icon="lucide:arrow-right" className="h-4 w-4" />
                  </button>
                </div>
              </Animation>

              {/* FOOTER TAGLINE */}
              <p className="mt-10 text-[13px] sm:text-[14px] lg:text-[16px] font-medium leading-7 text-[#0F66EA] lg:max-w-[360px]">
                Continuous Validation · Adversary Simulation · MITRE ATT&amp;CK
                · Security Resilience
              </p>
            </div>

            {/* RIGHT COLUMN: REQUEST A BAS QUOTE FORM */}
            <div className="lg:col-span-6">
              <Animation>
                <div className="rounded-[20px] bg-[#202123] p-6 sm:px-10 sm:py-14 shadow-2xl backdrop-blur-md">
                  <p className="text-[18px] sm:text-[20px] font-semibold text-white leading-10">
                    Request a BAS Quote
                  </p>
                  <p className="mt-1 text-[14px] text-[#D9D9D9]">
                    Get a Quote for Continuous Security Validation.
                  </p>

                  <form className="mt-6 space-y-4.5">
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
                          className="w-full h-[46px] rounded-[8px] bg-[#110404] border border-[#262D3D] px-3.5 text-[14px] text-[#D1D1D1] placeholder-gray-500 "
                          required
                        />
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
                        />
                      </div>
                    </div>

                    {/* SIMULATION TYPE DROPDOWN */}
                    <div>
                      <label
                        htmlFor="simulation-type"
                        className="block text-[13px] text-[#FEFEFE] mb-1.5"
                      >
                        Simulation Type{" "}
                        <span className="text-[#E24B4A]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          className="w-full h-[46px] appearance-none rounded-[8px] bg-[#110404] border border-[#262D3D] px-3.5 text-[13px] text-[#D1D1D1]"
                          required
                        >
                          <option value="">Select Simulation Type</option>
                          <option value="external">
                            External Attack Simulation
                          </option>
                          <option value="internal">
                            Internal Threat Simulation
                          </option>
                          <option value="cloud">
                            Cloud Security Simulation
                          </option>
                          <option value="full">Full Breach Simulation</option>
                        </select>
                        <Icon
                          icon="lucide:chevron-down"
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* CAPTCHA */}
                    <div className="mt-7">
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={(token) => setTurnstileToken(token)}
                        onExpire={() => setTurnstileToken("")}
                        onError={() => setTurnstileToken("")}
                      />
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
                      className="w-full h-[48px] mt-2 inline-flex items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] text-[15px] font-medium text-white border-[1.5px] border-[#00000000] transition-all duration-200 shadow-md shadow-[#0F66EA]/20"
                    >
                      <span>Get Quote</span>
                      <Icon icon="lucide:arrow-right" className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050B1A]">
        <Animation>
          <div className="mx-auto max-w-7xl px-7 py-10 sm:px-10 lg:px-8 lg:py-14 xl:px-10 text-center md:text-left">
            <h2 className="text-[26px] font-normal leading-[1.4]  text-white sm:text-[36px] lg:text-[38px]">
              What is Continuous Breach Attack Simulation?
            </h2>
            <p className="mt-7 font-medium leading-[1.8] text-[#D1D1D1] max-w-[700px]">
              Continuous Breach Attack Simulation (CBAS) is an automated,
              ongoing process that mimics cyber attackers using adversary
              simulation techniques.
            </p>
            <p className="mt-10 text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px] lg:text-[17px] max-w-[700px]">
              It validates your security investments daily, tests real-world
              attack scenarios, and provides actionable insights to strengthen
              resilience.
            </p>
          </div>
        </Animation>
      </section>

      <section className="bg-black px-0 relative overflow-hidden">
        <div className="relative min-h-[671px] overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${approachBg.src || approachBg})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0A1119]/[51%]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:min-h-[671px] lg:px-[26px] lg:py-[58px] flex items-center">
            {/* Fluid Responsive Grid Layout */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}

              <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-center md:text-left">
                <Animation>
                  <div>
                    <p className="text-[14px] sm:text-base font-semibold leading-[18px] text-[#E24B4A]">
                      OUR APPROACH
                    </p>

                    <p className="mt-3 text-[34px] sm:text-[38px] lg:text-[40px] font-medium leading-[1.4] text-white max-w-[450px]">
                      How We Validate Your Defenses?
                    </p>
                  </div>
                </Animation>

                <Animation>
                  <p className="lg:mt-45 max-w-[350px] text-[14px] sm:text-[15px] font-normal leading-[1.72] text-[#D1D1D1]">
                    A continuous, controlled approach to simulate real-world
                    attack techniques, measure security control effectiveness,
                    and identify gaps before attackers do.
                  </p>
                </Animation>
              </div>

              {/* 4 Cards Grid */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                {/* Card 01 */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="mingcute:apple-intelligence-line"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        01
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 1: Threat Modeling
                      </h3>
                      <p className="max-w-[200px] mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1]">
                        Define relevant attack scenarios using threat
                        intelligence and MITRE ATT&CK.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 02 (Staggered offset) */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5 lg:-translate-y-10">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="icon-park-outline:target-one"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        02
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.5] text-[#F5F0E8]">
                        Step 2: Automated <br /> Simulation
                      </h3>
                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1] max-w-[200px]">
                        Continuously execute controlled attack scenarios across
                        your security environment.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 03 */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="iconmind:goal-outline-bold"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        03
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 3: Gap Analysis
                      </h3>
                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1] max-w-[200px]">
                        Identify detection gaps and validate the effectiveness
                        of security controls.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 04 (Staggered offset) */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5 lg:-translate-y-10">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="iconmind:growth-chart-outline-bold"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        04
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 4: Reporting
                      </h3>
                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1] max-w-[200px]">
                        Deliver clear findings, control insights, and
                        prioritized recommendations.
                      </p>
                    </div>
                  </div>
                </Animation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050B1A]">
        <Animation>
          <div className="mx-auto max-w-7xl px-7 py-10 sm:px-10 lg:px-8 lg:py-14 xl:px-10 text-center md:text-left">
            <h2 className="text-[26px] font-normal leading-[1.4]  text-white sm:text-[36px] lg:text-[38px]">
              What is Continuous Breach Attack Simulation?
            </h2>
            <p className="mt-7 font-medium leading-[1.8] text-[#D1D1D1] max-w-[700px]">
              Continuous Breach Attack Simulation (CBAS) is an automated,
              ongoing process that mimics cyber attackers using adversary
              simulation techniques.
            </p>
            <p className="mt-10 text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px] lg:text-[17px] max-w-[700px]">
              It validates your security investments daily, tests real-world
              attack scenarios, and provides actionable insights to strengthen
              resilience.
            </p>
          </div>
        </Animation>
      </section>

      <section className="bg-black px-0 relative overflow-hidden">
        <div className="relative min-h-[671px] overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${approachBg.src || approachBg})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0A1119]/[51%]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:min-h-[671px] lg:px-[26px] lg:py-[58px] flex items-center">
            {/* Fluid Responsive Grid Layout */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}

              <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-center md:text-left">
                <Animation>
                  <div>
                    <p className="text-[14px] sm:text-base font-semibold leading-[18px] text-[#E24B4A]">
                      OUR APPROACH
                    </p>

                    <p className="mt-3 text-[34px] sm:text-[38px] lg:text-[40px] font-medium leading-[1.4] text-white max-w-[450px]">
                      How We Validate Your Defenses?
                    </p>
                  </div>
                </Animation>

                <Animation>
                  <p className="lg:mt-45 max-w-[350px] text-[14px] sm:text-[15px] font-normal leading-[1.72] text-[#D1D1D1]">
                    A continuous, controlled approach to simulate real-world
                    attack techniques, measure security control effectiveness,
                    and identify gaps before attackers do.
                  </p>
                </Animation>
              </div>

              {/* 4 Cards Grid */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                {/* Card 01 */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="mingcute:apple-intelligence-line"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        01
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 1: Threat Modeling
                      </h3>
                      <p className="max-w-[200px] mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1]">
                        Define relevant attack scenarios using threat
                        intelligence and MITRE ATT&CK.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 02 (Staggered offset) */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5 lg:-translate-y-10">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="icon-park-outline:target-one"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        02
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.5] text-[#F5F0E8]">
                        Step 2: Automated <br /> Simulation
                      </h3>
                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1] max-w-[200px]">
                        Continuously execute controlled attack scenarios across
                        your security environment.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 03 */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="iconmind:goal-outline-bold"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        03
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 3: Gap Analysis
                      </h3>
                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1] max-w-[200px]">
                        Identify detection gaps and validate the effectiveness
                        of security controls.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 04 (Staggered offset) */}
                <Animation>
                  <div className="relative flex flex-col justify-between min-h-[250px] w-full rounded-[7px] border border-white/[9%] bg-black/[51%] p-5 lg:-translate-y-10">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="iconmind:growth-chart-outline-bold"
                        className="text-[25px] text-white"
                      />
                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        04
                      </span>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 4: Reporting
                      </h3>
                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1] max-w-[200px]">
                        Deliver clear findings, control insights, and
                        prioritized recommendations.
                      </p>
                    </div>
                  </div>
                </Animation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050B18] px-0">
        <div className="mx-auto max-w-7xl overflow-hidden ">
          <Animation>
            <div className="px-6 pb-0 pt-[52px] sm:px-10 lg:px-[25px] lg:pt-[51px]">
              <div className="text-center">
                <p className="text-[13px] sm:text-base font-semibold uppercase  text-[#E24B4A]">
                  WHAT SETS US APART
                </p>

                <p className="mt-[10px] text-[32px] font-medium leading-[1.25] text-white sm:text-[38px] lg:text-[40px]">
                  Security validation that keeps evolving.
                </p>

                <p className="mx-auto mt-[18px] max-w-[700px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px]">
                  Continuous validation powered by real-world attack
                  intelligence, practical recommendations, and proactive
                  security improvement.
                </p>
              </div>
            </div>
          </Animation>

          <div className="mt-[46px] grid grid-cols-1 sm:grid-cols-3 px-16 pb-16">
            <Animation>
              <div className="relative min-h-[309px] bg-[#050B18] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[30px]">
                <div className="text-white">
                  <Icon icon="boxicons:vector-square" className="text-[36px]" />
                </div>

                <div className="absolute bottom-[62px] left-[25px] right-[30px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    Latest Attack <br /> Vectors
                  </h3>

                  <p className="mt-[8px] max-w-[225px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    CBAS adapts to zero-days and evolving attacker TTPs for
                    maximum relevance.
                  </p>
                </div>
              </div>
            </Animation>

            <Animation>
              <div className="relative min-h-[309px] bg-[#08142D] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[25px]">
                <div className="text-white">
                  <Icon
                    icon="majesticons:lightbulb-shine-line"
                    className="text-[36px]"
                  />
                </div>

                <div className="absolute bottom-[85px] left-[25px] right-[30px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    Attack-Driven <br /> Insight
                  </h3>

                  <p className="mt-[8px] max-w-[225px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Receive recommendations tailored to your environment.
                  </p>
                </div>
              </div>
            </Animation>

            <Animation>
              <div className="relative min-h-[309px] bg-[#170404] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[28px]">
                <div className="text-white">
                  <Icon
                    icon="iconmind:session-fixation-guard-outline-regular"
                    className="text-[36px]"
                  />
                </div>

                <div className="absolute bottom-[62px] left-[25px] right-[25px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    Proactive <br /> Security
                  </h3>

                  <p className="mt-[8px] max-w-[225px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Move from reactive fixes to proactive resilience with
                    continuous validation.
                  </p>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="bg-[#050B18] px-0">
        <div className="mx-auto max-w-7xl  px-6 py-[60px] sm:px-10 sm:py-[70px] lg:px-[26px] lg:py-[77px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
            <div className="pb-[50px] lg:pr-[70px] lg:pb-0 text-center md:text-left">
              <LeftAnimation>
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-[0.2px] text-[#E24B4A]">
                  WHY CHOOSE US?
                </p>

                <p className="mt-[17px] max-w-[400px] text-[32px] font-medium leading-[1.42] text-white sm:text-[36px] lg:text-[40px]">
                  Why Organizations trust ISECURION
                </p>

                <p className="mt-[18px] max-w-[420px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px]">
                  Certified expertise, proven experience, and globally
                  recognized security practices built to deliver continuous
                  security validation.
                </p>
              </LeftAnimation>
            </div>

            <Animation>
              <div className="border-t border-[#B1B1B114] pt-[45px] lg:border-l lg:border-t-0 lg:pl-[32px] lg:pt-0">
                <div className="space-y-[20px]">
                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] font-medium leading-[1.5] text-[#E24B4A]">
                      01
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium leading-[1.5] text-white">
                        Certified Experts
                      </h3>
                      <p className="mt-[6px] max-w-[400px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                        Team with OSCP, CEH, CISSP certifications & hands-on
                        experience.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] font-medium leading-[1.5] text-[#E24B4A]">
                      02
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium leading-[1.5] text-white">
                        Proven Experience
                      </h3>
                      <p className="mt-[6px] max-w-[400px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                        Hundreds of breach simulations across BFSI, SaaS, and
                        healthcare.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] font-medium leading-[1.5] text-[#E24B4A]">
                      03
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium leading-[1.5] text-white">
                        Trusted Partnership
                      </h3>
                      <p className="mt-[6px] max-w-[350px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                        Long-term client engagement with continuous guidance &
                        remediation.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] font-medium leading-[1.5] text-[#E24B4A]">
                      04
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium leading-[1.5] text-white">
                        Global Standards
                      </h3>
                      <p className="mt-[6px] max-w-[380px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                        Aligned with MITRE ATT&CK, NIST CSF, and ISO 27001.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="bg-[#050B18] ">
        <div className="max-w-7xl mx-auto pt-4 pb-18 px-6 sm:px-10">
          <div className="px-6">
            <div className="text-center">
              <p className="text-[13px] sm:text-base font-semibold uppercase  text-[#E24B4A]">
                DELIVERABLES
              </p>

              <h2 className="mt-[10px] text-[24px] font-normal leading-[1.4] text-white sm:text-[36px] lg:text-[34px]">
                From attack simulation to <br></br>actionable improvement.
              </h2>

              <p className="mx-auto mt-[18px] max-w-[750px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px]">
                Get clear, actionable outcomes from every simulation, from
                leadership-level risk visibility to technical remediation and
                team readiness.
              </p>
            </div>
          </div>

          <Animation>
            <div className="mt-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {governanceCards.map((card, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.2}
                  className="border-l border-[#0F66EA29] p-4 "
                >
                  {/* ICON BADGE */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#8D8D8D57] text-gray-300">
                    <Icon icon={card.icon} className="h-4 w-4" />
                  </div>

                  {/* CARD TITLE */}
                  <h4 className="mt-5 text-[15px] text-[#F5F0E8]">
                    {card.title}
                  </h4>

                  <p className="mt-4 text-[12px] text-[#D1D1D1D6] max-w-[240px] leading-6">
                    {card.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </Animation>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            Continuous Breach Attack Simulation
          </>
        }
        description="Answers to common questions about Red Team engagements, scope, and outcomes."
        faqs={cbsFAQs}
      />
    </div>
  );
}

export default ContinuousBreachAttackSimulation;
