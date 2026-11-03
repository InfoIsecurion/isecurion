"use client";
import { Icon } from "@iconify/react";
import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "react-toastify";
import { useState } from "react";
import attackSurfaceBackground from "../../../assets/services/attackSurfaceBackground.png";
import redTeamHeroBackground from "../../../assets/services/Ellipse.png";
import bookIcon from "../../../assets/services/icons/bookIcon.png";
import networkIcon from "../../../assets/services/icons/network-point.png";
import wifiIcon from "../../../assets/services/icons/credit-card-wireless.png";
import solidShield from "../../../assets/services/icons/solid_shield.png";
import guardIcon from "../../../assets/services/icons/guard-duotone.png";
import approachBg from "../../../assets/services/red-team-approach.svg";
import frame1 from "../../../assets/services/Frame1.png";
import frame2 from "../../../assets/services/Frame2.png";
import frame3 from "../../../assets/services/Frame3.png";
import frame4 from "../../../assets/services/Frame4.png";
import frame5 from "../../../assets/services/Frame5.png";
import FAQSection from "../../../components/sections/FAQSection";
import { Animation, LeftAnimation } from "../../../components/ui/Animation";
import { redTeamAssessment } from "../../../services/api/contact";
import { useForm } from "react-hook-form";

interface ContactFormData {
  email: string;
  companyName: string;
  assessment: string;
}

const redTeamAssessmentFAQs = [
  {
    question: "What is a Red Team Assessment?",
    answer:
      "A Red Team Assessment simulates real-world cyber attacks to evaluate an organization's security posture and response effectiveness.",
  },
  {
    question: "Why is Red Teaming important for businesses?",
    answer:
      "It helps organizations identify hidden vulnerabilities, improve incident response, and ensure regulatory compliance while preparing for advanced cyber threats.",
  },
  {
    question: "How often should a Red Team Assessment be conducted?",
    answer:
      "Ideally, annually or after significant infrastructure changes. Frequent assessments help maintain strong security posture.",
  },
  {
    question:
      "What is the difference between Red Team and Penetration Testing?",
    answer:
      "Penetration Testing focuses on specific systems or applications, whereas Red Team Assessment simulates full-scope, realistic attacks across multiple vectors.",
  },
  {
    question: "Does Red Teaming include physical security testing?",
    answer:
      "Yes, Red Team exercises can simulate social engineering attacks and assess physical security controls like access to premises or sensitive areas.",
  },
  {
    question: "How does ISECURION report Red Team findings?",
    answer:
      "Detailed reports include vulnerability findings, attack paths, risk ratings, and actionable remediation plans tailored to the organization.",
  },
  {
    question: "Can Red Team Assessments help with regulatory compliance?",
    answer:
      "Absolutely. They help organizations meet compliance requirements such as ISO 27001, SOC 2, GDPR, and other cybersecurity regulations.",
  },
  {
    question: "How long does a typical Red Team Assessment take?",
    answer:
      "Duration varies based on scope, but most assessments take 2-4 weeks, including planning, simulation, and reporting phases.",
  },
  {
    question: "What industries benefit most from Red Teaming?",
    answer:
      "Any organization handling sensitive data, including finance, healthcare, government, and technology sectors, can benefit significantly.",
  },
  {
    question: "What makes ISECURION’s Red Team Assessment unique?",
    answer:
      "Our assessments combine CERT-In expertise, hands-on real-world attack simulations, compliance focus, and actionable remediation strategies.",
  },
];

export default function RedTeamAssessmentPage() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const submit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      if (!turnstileToken) {
        toast.error("Please complete CAPTCHA verification");
        return;
      }
      const response = await redTeamAssessment({ ...data, turnstileToken });
      console.log(data);
      if (response.status === 200) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-black text-white">
      {/* RED TEAM SECTION */}

      <section className="mx-auto max-w-7xl bg-black">
        <div className="relative overflow-hidden px-7 py-10 sm:px-10 lg:px-8 lg:py-10 xl:px-10">
          <img
            src={redTeamHeroBackground.src}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[-300px] top-[-210px] z-0 w-[760px] max-w-none opacity-98 sm:left-[-280px] sm:top-[-210px] sm:w-[800px] lg:left-[-300px] lg:top-[-230px] lg:w-[830px] xl:left-0 xl:top-[20px] xl:w-[860px]"
          />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[500px_minmax(0,0.9fr)] lg:items-center lg:gap-8">
            <Animation>
              <div className="flex flex-col justify-center lg:py-2 text-center md:text-left">
                {/* Eyebrow */}
                <p className="text-[13px] sm:text-base font-semibold uppercase leading-none text-[#E24B4A] sm:text-sm text-center lg:text-left">
                  Red Team Assessment
                </p>

                {/* Heading */}
                <h1 className="mt-5 lg:max-w-[430px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left">
                  Red Team Assessment Services
                </h1>

                {/* Description */}
                <p className="mt-4 lg:max-w-[390px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                  Test your defenses against sophisticated attackers. ISECURION
                  helps identify gaps, simulate attacks, and improve security
                  posture across people, processes, and technology.
                </p>

                {/* CTA */}
                <div className="mt-6 text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                  >
                    Request Assessment{""}
                    <span className="ml-1.5 text-[17px] leading-none text-[#31435C]">
                      <Icon icon="mdi:arrow-right"></Icon>
                    </span>
                  </button>
                </div>

                {/* ==================== STATS ==================== */}
                <div className="mt-9 grid lg:max-w-[380px] grid-cols-3 lg:grid-cols-2 gap-x-10 gap-y-6 text-center">
                  {/* 150+ */}
                  <div>
                    <p className="text-[21px] font-semibold leading-none text-[#E24B4A] sm:text-[22px]">
                      150+
                    </p>

                    <p className="mt-2 text-[13px] leading-5 text-[#D1D1D1] sm:text-[14px]">
                      Red Team Engagements
                    </p>
                  </div>

                  {/* 30+ */}
                  <div>
                    <p className="text-[21px] font-semibold leading-none text-[#E24B4A] sm:text-[22px]">
                      30+
                    </p>

                    <p className="mt-2 text-[13px] leading-5 text-[#D1D1D1] sm:text-[14px]">
                      Industries Served
                    </p>
                  </div>

                  {/* 100% */}
                  <div>
                    <p className="text-[21px] font-semibold leading-none text-[#E24B4A] sm:text-[22px]">
                      100%
                    </p>

                    <p className="mt-2 text-[13px] leading-5 text-[#D1D1D1] sm:text-[14px]">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </Animation>

            <Animation>
              <div className="w-full rounded-[20px] bg-[#202123] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[32px] lg:h-[600px] lg:p-[30px] xl:p-[40px]">
                <div>
                  <h2 className="text-[18px] font-medium leading-[1.3] text-white sm:text-[19px]">
                    Request a Red Team Quote
                  </h2>

                  <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                    Get a customized assessment plan and timeline.
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
                        className="h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                        {...register("email", {
                          required: "Email is required",
                        })}
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

                  <div className="mt-5">
                    <label
                      htmlFor="assessmentType"
                      className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                    >
                      Assessment Type <span className="text-[#F04444]">*</span>
                    </label>

                    <div className="relative">
                      <select
                        id="assessmentType"
                        name="assessmentType"
                        defaultValue=""
                        required
                        className="h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                        {...register("assessment", {
                          required: "Assessment is required",
                        })}
                      >
                        <option value="" disabled>
                          Select Assessment Type
                        </option>

                        <option value="external">
                          External Red Team Assessment
                        </option>

                        <option value="internal">
                          Internal Red Team Assessment
                        </option>

                        <option value="web">
                          Web Application Red Team Assessment
                        </option>

                        <option value="mobile">
                          Mobile Application Red Team Assessment
                        </option>
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
                      <p className="text-sm font-medium text-white">Captcha</p>

                      <Turnstile
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
                    Get Quote{""}
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

      <section className="bg-[#050B1A]">
        <Animation>
          <div className="mx-auto max-w-7xl px-7 py-10 sm:px-10 lg:px-8 lg:py-14 xl:px-10 text-center md:text-left">
            <h2 className="leading-[1.2]  text-white">
              What is Red Team Assessment?
            </h2>
            <p className="mt-7 text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px] lg:text-[18px] max-w-[700px]">
              Red Team assessments are goal-oriented attack simulations designed
              to test how well your people, processes, and technology can
              withstand a targeted attack.
            </p>
            <p className="mt-10 text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px] lg:text-[18px] max-w-[700px]">
              Unlike traditional penetration testing, Red Team exercises mirror
              real adversary tactics to achieve objectives such as data
              exfiltration, system compromise, or physical access.
            </p>
          </div>
        </Animation>{" "}
      </section>

      {/* RED TEAM ASSESSMENT OBJECTIVES */}
      <section className="mx-auto max-w-7xl overflow-hidden bg-black">
        <div className="relative px-8 py-16 sm:px-10 sm:py-20 lg:min-h-[575px] lg:px-9 lg:py-[82px] xl:px-10">
          {/* ==================== BACKGROUND GLOW ==================== */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_48%,rgba(100,20,25,0.16),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(80,10,15,0.12),transparent_40%)]" />

          {/* ==================== HEADER ==================== */}
          <div className="relative z-10 mx-auto max-w-[1050px] text-center">
            {/* Heading */}
            <h2 className="text-[32px] font-normal leading-[1.2] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[44px]">
              Red Team Assessment Objectives
            </h2>

            {/* Description */}
            <p className="mx-auto mt-7  text-[15px] font-normal leading-[1.8] text-[#C7C7CB] sm:text-[16px] lg:text-[20px]">
              ISECURION proposes a Red Team Assessment Solution based on
              real-life attack scenarios to test security controls that could be
              bypassed by a threat actor.
            </p>
          </div>

          {/* ==================== OBJECTIVES ==================== */}
          <Animation>
            <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:mt-[78px] lg:grid-cols-4">
              {/* ==================== OBJECTIVE 01 ==================== */}
              <div className="relative px-6 py-2 sm:px-7 lg:min-h-[188px] lg:px-6 xl:px-6">
                {/* Vertical Divider */}
                <div className="absolute left-0 top-0 hidden  w-[1.03px] bg-[#E24B4A2B] h-[167px] sm:block" />

                {/* Icon */}
                <div className="relative z-10">
                  <Icon
                    icon="fa-solid:shield-alt"
                    className="text-[20px] text-[#D83C43]"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-4 text-[17px] leading-[1.4] text-[#F5F0E8]">
                  Threat Actors
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-3 max-w-[275px] text-[14px] leading-[1.8] text-[#AFAFB4]">
                  Evaluate your environment against realistic adversary tactics
                  and attack vectors.
                </p>

                {/* Number */}
                {/* Number */}
                <span className="px-5 pointer-events-none absolute bottom-[-8px] right-1 select-none font-black text-[70px] leading-[98.92px] tracking-[-3.96px] text-transparent [-webkit-text-stroke:1.03px_rgba(245,240,232,0.07)]">
                  01
                </span>
              </div>

              {/* ==================== OBJECTIVE 02 ==================== */}
              <div className="relative px-6 py-2 sm:px-7 lg:min-h-[188px] lg:px-6 xl:px-6">
                {/* Vertical Divider */}
                <div className="absolute left-0 top-0 hidden w-[1.03px] bg-[#E24B4A2B] h-[167px] sm:block" />

                {/* Icon */}
                <div className="relative z-10">
                  <Icon
                    icon="fluent:panel-left-key-24-filled"
                    className="text-[20px] text-[#D83C43]"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-4 text-[16px]  leading-[1.4] text-[#F5F0E8]">
                  Security Controls
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-3 max-w-[275px] text-[13px] leading-[1.8] text-[#D1D1D1D9]">
                  Test physical, human, and digital controls for weaknesses and
                  bypass opportunities.
                </p>

                {/* Number */}
                {/* Number */}
                <span className="px-5 pointer-events-none absolute bottom-[-8px] right-1 select-none font-black text-[70px] leading-[98.92px] tracking-[-3.96px] text-transparent [-webkit-text-stroke:1.03px_rgba(245,240,232,0.07)]">
                  02
                </span>
              </div>

              {/* ==================== OBJECTIVE 03 ==================== */}
              <div className="relative px-6 py-2 sm:px-7 lg:min-h-[188px] lg:px-6 xl:px-6">
                {/* Vertical Divider */}
                <div className="absolute left-0 top-0 hidden w-[1.03px] bg-[#E24B4A2B] h-[167px] sm:block" />

                {/* Icon */}
                <div className="relative z-10">
                  <Icon
                    icon="iconmind:step-back-prompt-duotone-bold"
                    className="text-[23px] text-[#D83C43]"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-4 text-[16px]  leading-[1.4] text-[#F5F0E8]">
                  Detection and Response
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-3 max-w-[275px] text-[13px] leading-[1.8] text-[#AFAFB4]">
                  Determine whether your security teams can detect, investigate,
                  and respond to an active attack.
                </p>

                {/* Number */}
                {/* Number */}
                <span className="px-5 pointer-events-none absolute bottom-[-8px] right-1 select-none font-black text-[70px] leading-[98.92px] tracking-[-3.96px] text-transparent [-webkit-text-stroke:1.03px_rgba(245,240,232,0.07)]">
                  03
                </span>
              </div>

              {/* ==================== OBJECTIVE 04 ==================== */}
              <div className="relative px-6 py-2 sm:px-7 lg:min-h-[188px] lg:px-6 xl:px-6">
                {/* Vertical Divider */}
                <div className="absolute left-0 top-0 hidden w-[1.03px] bg-[#E24B4A2B] h-[167px] sm:block" />

                {/* Icon */}
                <div className="relative z-10">
                  <Icon
                    icon="ic:baseline-business-center"
                    className="text-[23px] text-[#D83C43]"
                  />
                </div>

                {/* Title */}
                <h4 className="relative z-10 mt-4 text-[16px]  leading-[1.4] text-[#F5F0E8]">
                  Business Impact
                </h4>

                {/* Description */}
                <p className="relative z-10 mt-3 max-w-[275px] text-[13px] leading-[1.8] text-[#AFAFB4]">
                  Understand potential attack paths to critical systems,
                  privileged access, and sensitive information.
                </p>

                {/* Number */}
                {/* Number */}
                <span className="px-5 pointer-events-none absolute bottom-[-8px] right-1 select-none font-black text-[70px] leading-[98.92px] tracking-[-3.96px] text-transparent [-webkit-text-stroke:1.03px_rgba(245,240,232,0.07)]">
                  04
                </span>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      {/* WHAT WE ASSESS */}

      <section className="bg-[#050D1D]">
        {/* ==================== ATTACK SURFACE ==================== */}
        <div
          className="relative min-h-[385px] bg-cover bg-center bg-no-repeat sm:min-h-[410px] lg:min-h-[385px]"
          style={{ backgroundImage: `url(${attackSurfaceBackground.src})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,19,0.98)_0%,rgba(3,10,19,0.92)_25%,rgba(3,10,19,0.62)_48%,rgba(3,10,19,0.15)_75%,rgba(3,10,19,0.05)_100%)]" />

          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,19,0.88)_0%,rgba(3,10,19,0.62)_55%,rgba(3,10,19,0.8)_100%)] lg:hidden" />

          {/* Content */}
          <Animation>
            <div className="mx-auto max-w-7xl overflow-hidden relative z-10 flex min-h-[385px] items-center px-7 py-14 sm:min-h-[410px] sm:px-10 sm:py-16 lg:min-h-[385px] lg:px-7 lg:py-12 xl:px-7">
              <div className="max-w-[430px] text-center md:text-left">
                {/* Eyebrow */}
                <p className="text-[13px] sm:text-base font-semibold uppercase text-[#E24B4A] sm:text-[15px]">
                  What We Assess
                </p>

                {/* Heading */}
                <h2 className="mt-4 text-[32px] font-normal leading-[1.5] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[38px] xl:text-[40px]">
                  The Attack Surface,{""}
                  <span className="block text-[#E24B4A]">Fully Tested.</span>
                </h2>

                {/* Description */}
                <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-[#D1D1D1] sm:text-[17px] lg:text-[16px]">
                  <p>
                    Key activities carried out during the Red Team Assessment to
                    evaluate your security posture.
                  </p>

                  <p>
                    From technical systems to people, wireless, and physical
                    environments.
                    <br className="hidden sm:block" />
                    Our approach identifies entry points, attack paths, and
                    opportunities to bypass defenses.
                  </p>
                </div>
              </div>
            </div>
          </Animation>
        </div>

        {/* ==================== ASSESSMENT AREAS ==================== */}
        <Animation>
          <div className="relative mx-auto max-w-7xl px-7 py-14 sm:px-10 sm:py-16 lg:px-7 lg:py-[76px] xl:px-8 items-center ">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-5 lg:gap-x-14 ">
              {/* ==================== OPEN SOURCE INTELLIGENCE ==================== */}
              <div className="min-w-0">
                <div className="relative h-[30px] w-[30px]">
                  <span className="absolute bottom-0 right-1 h-[18px] w-[18px] rounded-full bg-[#232930]" />
                  <img
                    src={bookIcon.src}
                    alt=""
                    className="relative z-10 h-[22px] w-[22px]"
                  />
                </div>

                <h3 className="mt-5 text-[14px] font-medium leading-[1.4] text-[#F5F0E8] sm:text-[16px]">
                  Open Source Intelligence
                </h3>

                <p className="mt-3 max-w-[170px] text-[12px] leading-[1.8] text-[#D1D1D1D6] ">
                  Gather intelligence from publicly available sources to map
                  your exposure.
                </p>
              </div>

              {/* ==================== NETWORK ATTACKS ==================== */}
              <div className="min-w-0">
                <div className="relative h-[30px] w-[30px]">
                  <span className="absolute bottom-0 right-1 h-[18px] w-[18px] rounded-full bg-[#232930]" />
                  <img
                    src={networkIcon.src}
                    alt=""
                    className="relative z-10 h-[22px] w-[22px]"
                  />
                </div>

                <h3 className="mt-5 text-[15px] font-medium leading-[1.4] text-[#F5F0E8] sm:text-[16px]">
                  Network Attacks
                </h3>

                <p className="mt-3 max-w-[190px] text-[12px] leading-[1.8] text-[#D1D1D1D6] ">
                  Simulated external and internal attacks to uncover weaknesses
                  in your infrastructure.
                </p>
              </div>

              {/* ==================== WIRELESS & ENDPOINT ==================== */}
              <div className="min-w-0">
                <div className="relative h-[30px] w-[30px]">
                  <span className="absolute bottom-0 right-1 h-[18px] w-[18px] rounded-full bg-[#232930]" />
                  <img
                    src={wifiIcon.src}
                    alt=""
                    className="relative z-10 h-[22px] w-[22px]"
                  />
                </div>

                <h3 className="mt-5 text-[15px] font-medium leading-[1.4] text-[#F5F0E8] sm:text-[16px]">
                  Wireless & Endpoint
                </h3>

                <p className="mt-3 max-w-[160px] text-[12px] leading-[1.8] text-[#D1D1D1D6] ">
                  Assess Wi-Fi, removable media, & endpoint security for bypass
                  opportunities.
                </p>
              </div>

              {/* ==================== COVERT TECHNIQUES ==================== */}
              <div className="min-w-0">
                <div className="relative h-[30px] w-[30px]">
                  <span className="absolute bottom-0 right-1 h-[18px] w-[18px] rounded-full bg-[#232930]" />
                  <img
                    src={solidShield.src}
                    alt=""
                    className="relative z-10 h-[22px] w-[22px]"
                  />
                </div>

                <h3 className="mt-5 text-[15px] font-medium leading-[1.4] text-[#F5F0E8] sm:text-[16px]">
                  Covert Techniques
                </h3>

                <p className="mt-3 max-w-[180px] text-[12px] leading-[1.8] text-[#D1D1D1D6] ">
                  Use stealth methods to simulate insider and persistent
                  threats.
                </p>
              </div>

              {/* ==================== PHYSICAL SECURITY ==================== */}
              <div className="min-w-0">
                <div className="relative h-[30px] w-[30px]">
                  <span className="absolute bottom-0 right-1 h-[18px] w-[18px] rounded-full bg-[#232930]" />
                  <img
                    src={guardIcon.src}
                    alt=""
                    className="relative z-10 h-[22px] w-[22px]"
                  />
                </div>

                <h3 className="mt-5 text-[15px] font-medium leading-[1.4] text-[#F5F0E8] sm:text-[16px]">
                  Physical Security
                </h3>

                <p className="mt-3 max-w-[160px] text-[12px] leading-[1.8] text-[#D1D1D1D6] ">
                  Test resilience of on-site controls like tailgating and rogue
                  device detection.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-14 h-[1.2px] w-full bg-[#DADADA45] sm:mt-16 lg:mt-[72px]" />
          </div>
        </Animation>
      </section>

      <section className="bg-black px-0">
        <div className="relative min-h-[671px] overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${approachBg.src})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0A1119]/[51%]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:min-h-[671px] lg:px-[26px] lg:py-[58px]">
            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:block">
              <div className="relative min-h-[555px]">
                {/* Left content */}
                <Animation>
                  <div className="absolute left-0 top-0 w-[500px]">
                    <p className="text-[15px] sm:text-base font-semibold leading-[18px] text-[#E24B4A]">
                      OUR APPROACH
                    </p>

                    <h2 className="mt-[12px] max-w-[500px] text-[40px] font-normal leading-[1.5] text-white">
                      From Intelligence to
                      <br />
                      Objective
                      <br />
                      Achievement
                    </h2>

                    <p className="absolute left-0 top-[392px] max-w-[382px] text-[16px] font-normal leading-[1.72] text-[#D1D1D1]">
                      A structured, adversary-driven methodology designed to
                      simulate real-world attacks, uncover attack paths, and
                      strengthen your organizations ability to detect, respond,
                      and withstand them.
                    </p>
                  </div>
                </Animation>

                {/* Card 01 */}
                <Animation>
                  <div className="absolute left-[690px] top-[60px] h-[240px] w-[242px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] px-[20px] py-[20px]">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="fa6-regular:handshake"
                        className="text-[25px] text-white"
                      />

                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        01
                      </span>
                    </div>

                    <div className="absolute bottom-[23px] left-[20px] right-[20px]">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 1: Pre-Engagement
                      </h3>

                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1]">
                        Define scope, objectives, and rules of engagement with
                        stakeholders.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 02 */}
                <Animation>
                  <div className="absolute left-[947px] top-0 h-[240px] w-[242px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] px-[20px] py-[20px]">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="iconmind:click-and-collect-outline-regular"
                        className="text-[25px] text-white"
                      />

                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        02
                      </span>
                    </div>

                    <div className="absolute bottom-[23px] left-[20px] right-[20px]">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 2: Reconnaissance
                      </h3>

                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1]">
                        Gather OSINT, scan networks, and profile employees for
                        attack planning.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 03 */}
                <Animation>
                  <div className="absolute left-[690px] top-[315px] h-[240px] w-[242px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[50%] px-[20px] py-[20px]">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="iconmind:goal-outline-bold"
                        className="text-[25px] text-white"
                      />

                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        03
                      </span>
                    </div>

                    <div className="absolute bottom-[23px] left-[20px] right-[20px]">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 3: Attack Execution
                      </h3>

                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1]">
                        Perform phishing, exploitation, lateral movement, and
                        privilege escalation.
                      </p>
                    </div>
                  </div>
                </Animation>

                {/* Card 04 */}
                <Animation>
                  <div className="absolute left-[947px] top-[250px] h-[240px] w-[242px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] px-[20px] py-[20px]">
                    <div className="flex items-start justify-between">
                      <Icon
                        icon="iconmind:growth-chart-outline-bold"
                        className="text-[25px] text-white"
                      />

                      <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                        04
                      </span>
                    </div>

                    <div className="absolute bottom-[23px] left-[20px] right-[20px]">
                      <h3 className="text-[14px] font-medium leading-[1.45] text-[#F5F0E8]">
                        Step 4: Analysis & Reporting
                      </h3>

                      <p className="mt-[11px] text-[13px] leading-[1.6] text-[#D1D1D1]">
                        Document findings, attack paths, and provide remediation
                        guidance.
                      </p>
                    </div>
                  </div>
                </Animation>
              </div>
            </div>

            {/* ================= TABLET ================= */}
            <div className="hidden md:block lg:hidden">
              {/* Heading */}
              <div className="mx-auto max-w-[600px] text-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E24B4A]">
                  OUR APPROACH
                </p>

                <h2 className="mt-3 text-[36px] font-normal leading-[1.35] text-white">
                  From Intelligence to
                  <br />
                  Objective Achievement
                </h2>

                <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.72] text-[#D1D1D1]">
                  A structured, adversary-driven methodology designed to
                  simulate real-world attacks, uncover attack paths, and
                  strengthen your organizations ability to detect, respond, and
                  withstand them.
                </p>
              </div>

              {/* Cards */}
              <div className="mt-12 grid grid-cols-2 gap-5">
                {/* Card 01 */}
                <div className="relative min-h-[240px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="fa6-regular:handshake"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                      01
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 1: Pre-Engagement
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Define scope, objectives, and rules of engagement with
                      stakeholders.
                    </p>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="relative min-h-[240px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="iconmind:click-and-collect-outline-regular"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                      02
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 2: Reconnaissance
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Gather OSINT, scan networks, and profile employees for
                      attack planning.
                    </p>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="relative min-h-[240px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="iconmind:goal-outline-bold"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                      03
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 3: Attack Execution
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Perform phishing, exploitation, lateral movement, and
                      privilege escalation.
                    </p>
                  </div>
                </div>

                {/* Card 04 */}
                <div className="relative min-h-[240px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="iconmind:growth-chart-outline-bold"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[38px] font-normal leading-none text-[#E24B4A85]">
                      04
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 4: Analysis & Reporting
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Document findings, attack paths, and provide remediation
                      guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="md:hidden">
              {/* Heading */}
              <div className="text-left">
                <p className="text-[14px] font-medium leading-[18px] text-[#E24B4A]">
                  OUR APPROACH
                </p>

                <h2 className="mt-3 text-[32px] font-normal leading-[1.3] text-white">
                  From Intelligence to
                  <br />
                  Objective Achievement
                </h2>

                <p className="mt-6 max-w-[500px] text-[15px] leading-[1.75] text-[#D1D1D1]">
                  A structured, adversary-driven methodology designed to
                  simulate real-world attacks, uncover attack paths, and
                  strengthen your organizations ability to detect, respond, and
                  withstand them.
                </p>
              </div>

              {/* Cards */}
              <div className="mt-10 grid grid-cols-1 gap-5">
                {/* Card 01 */}
                <div className="relative min-h-[220px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="fa6-regular:handshake"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[36px] font-normal leading-none text-[#E24B4A85]">
                      01
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 1: Pre-Engagement
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Define scope, objectives, and rules of engagement with
                      stakeholders.
                    </p>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="relative min-h-[220px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="iconmind:click-and-collect-outline-regular"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[36px] font-normal leading-none text-[#E24B4A85]">
                      02
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 2: Reconnaissance
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Gather OSINT, scan networks, and profile employees for
                      attack planning.
                    </p>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="relative min-h-[220px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="iconmind:goal-outline-bold"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[36px] font-normal leading-none text-[#E24B4A85]">
                      03
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 3: Attack Execution
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Perform phishing, exploitation, lateral movement, and
                      privilege escalation.
                    </p>
                  </div>
                </div>

                {/* Card 04 */}
                <div className="relative min-h-[220px] rounded-[7px] border-[0.9px] border-white/[9%] bg-black/[51%] p-5">
                  <div className="flex items-start justify-between">
                    <Icon
                      icon="iconmind:growth-chart-outline-bold"
                      className="text-[25px] text-white"
                    />

                    <span className="text-[36px] font-normal leading-none text-[#E24B4A85]">
                      04
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[14px] font-medium text-[#F5F0E8]">
                      Step 4: Analysis & Reporting
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.6] text-[#D1D1D1]">
                      Document findings, attack paths, and provide remediation
                      guidance.
                    </p>
                  </div>
                </div>
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
                  WHY ISECURION?
                </p>

                <h2 className="mt-[10px] text-[30px] font-normal leading-[1.25] text-white sm:text-[36px] lg:text-[34px]">
                  Built around the{" "}
                  <span className="text-[#E24B4A]">Real Adversary</span>
                </h2>

                <p className="mx-auto mt-[18px] max-w-[700px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px]">
                  Beyond identifying vulnerabilities, we provide the
                  intelligence, validation, and guidance needed to strengthen
                  your defenses against real-world attack scenarios.
                </p>
              </div>
            </div>
          </Animation>

          <Animation>
            <div className="mt-[46px] grid grid-cols-1 sm:grid-cols-3 px-16 pb-16">
              <div className="relative min-h-[309px] bg-[#050B18] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[30px]">
                <div className="text-white">
                  <Icon icon="boxicons:vector-square" className="text-[36px]" />
                </div>

                <div className="absolute bottom-[62px] left-[25px] right-[30px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    Latest Threat <br /> Vectors
                  </h3>

                  <p className="mt-[8px] max-w-[255px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Insights into the newest adversary tactics, techniques, and
                    procedures (TTPs).
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
                    Attack-Driven <br /> Insight
                  </h3>

                  <p className="mt-[8px] max-w-[255px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Turn observed attack paths and weaknesses into clear,
                    prioritized security improvements.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[309px] bg-[#170404] px-[25px] pb-[42px] pt-[31px] sm:px-[25px] lg:px-[28px]">
                <div className="text-white">
                  <Icon
                    icon="iconmind:session-fixation-guard-outline-regular"
                    className="text-[36px]"
                  />
                </div>

                <div className="absolute bottom-[62px] left-[25px] right-[25px]">
                  <h3 className="max-w-[180px] text-[16px] font-medium leading-[1.55] text-white">
                    Defense <br /> Validation
                  </h3>

                  <p className="mt-[8px] max-w-[255px] text-[13px] font-normal leading-[1.6] text-[#B9BDC5]">
                    Measure how effectively your people, processes, and
                    technology detect and withstand realistic attacks.
                  </p>
                </div>
              </div>
            </div>
          </Animation>
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

                <h2 className="mt-[17px] max-w-[400px] text-[32px] font-normal leading-[1.42] text-white sm:text-[36px] lg:text-[34px]">
                  Trusted{" "}
                  <span className="text-[#E24B4A]">Red Team Experts</span>
                </h2>

                <p className="mt-[18px] max-w-[420px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px]">
                  ISECURION is a trusted partner for organizations looking to
                  strengthen their defenses through real-world adversary
                  simulations.
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
                        Our team holds industry-recognized certifications like
                        OSCP, OSCE, CEH, and CISSP, ensuring top-quality
                        assessments.
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
                      <p className="mt-[6px] max-w-[420px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                        Years of experience conducting Red Team operations
                        across industries including finance, healthcare, and
                        critical infrastructure.
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
                      <p className="mt-[6px] max-w-[400px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                        We prioritize long-term client relationships by
                        providing guidance, remediation support, and continuous
                        improvement.
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
                        Our methodology aligns with MITRE ATT&CK, NIST, and
                        global security frameworks for comprehensive coverage.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                    <span className="text-[13px] font-medium leading-[1.5] text-[#E24B4A]">
                      05
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium leading-[1.5] text-white">
                        Client-Centric Approach
                      </h3>
                      <p className="mt-[6px] max-w-[350px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                        Every engagement is tailored to your unique threat
                        landscape and business objectives, ensuring actionable
                        outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#050B18] pb-2 pt-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-9 lg:px-[33px]">
          {/* Header */}
          <div className="text-center">
            <p className="text-[14px] sm:text-base font-semibold tracking-wide text-[#E24B4A] sm:text-[16px]">
              DELIVERABLES
            </p>

            <h2 className="mt-4 text-[34px] font-normal leading-[1.15] text-white sm:text-[42px] lg:text-[40px]">
              The Outcome of Every Engagement
            </h2>

            <p className="mx-auto mt-7 max-w-[900px] text-[16px] font-normal leading-[1.7] text-[#D1D1D1] sm:text-[14px] lg:text-[18px]">
              Clear attack paths, validated findings, and actionable
              recommendations to help your teams understand
              <br className="hidden lg:block" />
              exposure and strengthen defenses.
            </p>
          </div>

          {/* ================= DESKTOP ================= */}
          <Animation>
            <div className="relative mt-[88px] hidden lg:block">
              {/* Connecting line */}
              <div className="absolute left-[8%] right-[8%] top-[68px] z-0 h-[5px] bg-[#8997BA4F]" />

              <div className="relative z-10 grid grid-cols-5">
                {/* 1. Executive Summary */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-[136px] w-[136px] items-center justify-center">
                    {/* Hide connector behind the transparent center */}
                    <div className="absolute z-10 h-[75px] w-[75px] rotate-45 bg-[#050B18] " />

                    {/* Frame */}
                    <img
                      src={frame1.src}
                      alt=""
                      className="relative z-20 h-[136px] w-[136px]"
                    />
                  </div>

                  <div className="mt-[48px] px-2">
                    <h3 className="text-[18px] font-medium leading-[1.3] text-white">
                      Executive Summary
                    </h3>

                    <p className="mx-auto mt-5 max-w-[220px] text-[16px] leading-[1.9] text-[#D1D1D1]">
                      High-level findings for leadership with risk overview and
                      strategic recommendations.
                    </p>
                  </div>
                </div>

                {/* 2. Technical Report */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-[136px] w-[136px] items-center justify-center">
                    <div className="absolute z-10 h-[75px] w-[75px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame2.src}
                      alt=""
                      className="relative z-20 h-[136px] w-[136px]"
                    />
                  </div>

                  <div className="mt-[48px] px-2">
                    <h3 className="text-[18px] font-medium leading-[1.3] text-white">
                      Technical Report
                    </h3>

                    <p className="mx-auto mt-5 max-w-[180px] text-[16px] leading-[1.9] text-[#D1D1D1]">
                      Detailed attack paths, vulnerabilities discovered,
                      exploitation steps, and evidence.
                    </p>
                  </div>
                </div>

                {/* 3. Remediation Guidance */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-[136px] w-[136px] items-center justify-center">
                    <div className="absolute z-10 h-[75px] w-[75px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame3.src}
                      alt=""
                      className="relative z-20 h-[136px] w-[136px]"
                    />
                  </div>

                  <div className="mt-[48px] px-2">
                    <h3 className="text-[18px] font-medium leading-[1.3] text-white">
                      Remediation Guidance
                    </h3>

                    <p className="mx-auto mt-5 max-w-[200px] text-[16px] leading-[1.9] text-[#D1D1D1]">
                      Actionable steps to mitigate risks, strengthen defenses,
                      &amp; improve security posture.
                    </p>
                  </div>
                </div>

                {/* 4. Defense Evaluation */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-[136px] w-[206px] items-center justify-center">
                    <div className="absolute z-10 h-[75px] w-[75px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame4.src}
                      alt=""
                      className="relative z-20 h-[136px] w-[136px]"
                    />
                  </div>

                  <div className="mt-[48px] px-2">
                    <h3 className="text-[18px] font-medium leading-[1.3] text-white">
                      Defense Evaluation
                    </h3>

                    <p className="mx-auto mt-5 max-w-[170px] text-[16px] leading-[1.9] text-[#D1D1D1]">
                      Assessment of SOC, detection, and response capabilities.
                    </p>
                  </div>
                </div>

                {/* 5. Team Debrief */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-[136px] w-[136px] items-center justify-center">
                    <div className="absolute z-10 h-[75px] w-[75px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame5.src}
                      alt=""
                      className="relative z-20 h-[136px] w-[136px]"
                    />
                  </div>

                  <div className="mt-[48px] px-2">
                    <h3 className="text-[18px] font-medium leading-[1.3] text-white">
                      Team Debrief
                    </h3>

                    <p className="mx-auto mt-5 max-w-[200px] text-[17px] leading-[1.9] text-[#D1D1D1]">
                      Interactive session with your security and IT teams to
                      review findings and recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Animation>

          {/* ================= TABLET / MOBILE ================= */}
          <div className="mt-14 lg:hidden">
            <div className="relative">
              <div className="relative space-y-8">
                {/* ================= EXECUTIVE SUMMARY ================= */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Frame */}
                  <div className="relative z-10 flex h-[100px] w-[100px] items-center justify-center">
                    {/* Background mask to hide the vertical line */}
                    <div className="absolute z-10 h-[62px] w-[62px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame1.src}
                      alt=""
                      className="relative z-20 h-[100px] w-[100px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-4">
                    <h3 className="text-[16px] font-medium leading-[1.3] text-white">
                      Executive Summary
                    </h3>

                    <p className="mx-auto mt-3 max-w-[250px] text-[15px] leading-[1.8] text-[#C7CAD3]">
                      High-level findings for leadership with risk overview and
                      strategic recommendations.
                    </p>
                  </div>
                </div>

                {/* ================= TECHNICAL REPORT ================= */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Frame */}
                  <div className="relative z-10 flex h-[100px] w-[100px] items-center justify-center">
                    <div className="absolute z-10 h-[62px] w-[62px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame2.src}
                      alt=""
                      className="relative z-20 h-[100px] w-[100px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-4">
                    <h3 className="text-[16px] font-medium leading-[1.3] text-white">
                      Technical Report
                    </h3>

                    <p className="mx-auto mt-3 max-w-[280px] text-[15px] leading-[1.8] text-[#C7CAD3]">
                      Detailed attack paths, vulnerabilities discovered,
                      exploitation steps, and evidence.
                    </p>
                  </div>
                </div>

                {/* ================= REMEDIATION GUIDANCE ================= */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Frame */}
                  <div className="relative z-10 flex h-[100px] w-[100px] items-center justify-center">
                    <div className="absolute z-10 h-[62px] w-[62px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame3.src}
                      alt=""
                      className="relative z-20 h-[100px] w-[100px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-4">
                    <h3 className="text-[16px] font-medium leading-[1.3] text-white">
                      Remediation Guidance
                    </h3>

                    <p className="mx-auto mt-3 max-w-[250px] text-[15px] leading-[1.8] text-[#C7CAD3]">
                      Actionable steps to mitigate risks, strengthen defenses,
                      &amp; improve security posture.
                    </p>
                  </div>
                </div>

                {/* ================= DEFENSE EVALUATION ================= */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Frame */}
                  <div className="relative z-10 flex h-[100px] w-[100px] items-center justify-center">
                    <div className="absolute z-10 h-[62px] w-[62px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame4.src}
                      alt=""
                      className="relative z-20 h-[100px] w-[100px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-4">
                    <h3 className="text-[16px] font-medium leading-[1.3] text-white">
                      Defense Evaluation
                    </h3>

                    <p className="mx-auto mt-3 max-w-[250px] text-[15px] leading-[1.8] text-[#C7CAD3]">
                      Assessment of SOC, detection, and response capabilities.
                    </p>
                  </div>
                </div>

                {/* ================= TEAM DEBRIEF ================= */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Frame */}
                  <div className="relative z-10 flex h-[100px] w-[100px] items-center justify-center">
                    <div className="absolute z-10 h-[62px] w-[62px] rotate-45 bg-[#050B18]" />

                    <img
                      src={frame5.src}
                      alt=""
                      className="relative z-20 h-[100px] w-[100px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-4">
                    <h3 className="text-[16px] font-medium leading-[1.3] text-white">
                      Team Debrief
                    </h3>

                    <p className="mx-auto mt-3 max-w-[250px] text-[15px] leading-[1.8] text-[#C7CAD3]">
                      Interactive session with your security and IT teams to
                      review findings and recommendations.
                    </p>
                  </div>
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
            Red Team Assessment
          </>
        }
        description="Answers to common questions about Red Team engagements, scope, and outcomes."
        faqs={redTeamAssessmentFAQs}
      />
    </main>
  );
}
