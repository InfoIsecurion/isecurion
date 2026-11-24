"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
    Animation,
    AnimatedCard,
    LeftAnimation,
    GradientIcon,
    RightAnimation,
    WordReveal
} from "../../../components/ui/Animation";
import Link from 'next/link';
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { doraCompliance } from "../../../services/api/contact";
import { motion } from "framer-motion";
import FAQSection from "../../../components/sections/FAQSection";

interface ContactFormData {
    email: string;
    companyName: string;
    turnstileToken: string;
}


const purpose = [
    {
        icon: "boxicons:lock-keyhole",
        title: "ICT Risk Management",
        description:
            "Standardize ICT risk management across EU financial entities to ensure operational resilience & reduce vulnerabilities.",
    },
    {
        icon: "boxicons:check-shield",
        title: "Operational Resilience",
        description:
            "Enhance the ability of banks, insurers and fintechs to maintain operations during ICT disruptions and cyber threats.",
    },
    {
        icon: "akar-icons:people-group",
        title: "Third-Party Risk",
        description:
            "Monitor ICT risks across vendors and third-party providers to reduce operational, security and compliance risks.",
    },
    {
        icon: "flowbite:lock-time-outline",
        title: "Incident Reporting",
        description: "Ensure timely incident detection, reporting and remediation to support regulatory compliance and business continuity.",
    },
];

const doraApplicability = [
    {
        Icon: "boxicons:bank",
        heading: "Banks & Credit Institutions",
        description:
            "All banks and credit institutions in the EU must implement DORA standards for ICT resilience and operational continuity.",
    },
    {
        Icon: "akar-icons:wallet",
        heading: "Payment Service Providers",
        description:
            "Protect digital payment platforms, transaction systems and critical services.",
    },
    {
        Icon: "mdi:chart-pie-outline",
        heading: "Investment Firms",
        description:
            "Address ICT risks across investment, brokerage and asset management operations.",
    },
    {
        Icon: "ic:outline-business-center",
        heading: "Insurance & Reinsurance",
        description:
            "Insurance companies must implement robust ICT & operational risk controls to protect client data and maintain service continuity.",
    },
    {
        Icon: "akar-icons:cloud-upload",
        heading: "Third-Party ICT Providers",
        description:
            "Critical ICT service providers must comply with DORA standards as they form an essential part of the operational ecosystem for financial institutions.",
    },
];

const doraRequirements = [
    {
        Icon: "boxicons:check-shield",
        heading: "ICT Risk Management & Governance",
        description: "Establish robust ICT risk frameworks, policies, and governance for operational resilience.",
        bgColor: "#0F66EA",
    },
    {
        Icon: "bi:lightning-charge",
        heading: "Incident Response & Reporting",
        description: "Timely detection, reporting, and management of ICT incidents across the organization.",
        bgColor: "#C8912A",
    },
    {
        Icon: "material-symbols:labs-outline-sharp",
        heading: "Digital Operational Resilience Testing",
        description:
            "Conduct regular resilience and penetration testing for ICT systems and processes.",
        bgColor: "#3B9E6A",
    },
    {
        Icon: "akar-icons:people-group",
        heading: "Third-Party Risk Management",
        description:
            "Assess and monitor ICT risks arising from outsourced and third-party service providers.",
        bgColor: "#7D70F0",
    },
];

const scopeOfWork = [
    {
        icon: "streamline:industry-innovation-and-infrastructure",
        title: "ICT Infrastructure & Cybersecurity",
        description:
            "Assess ICT infrastructure resilience and cybersecurity posture to identify gaps and strengthen defenses.",
    },
    {
        icon: "iconmind:agent-hierarchy-outline-regular",
        title: "Business Continuity & Risk Processes",
        description:
            "Evaluate business continuity plans & operational risk processes to ensure seamless operations during disruptions.",
    },
    {
        icon: "boxicons:check-shield",
        title: "Incident Response Capabilities",
        description:
            "Test and review incident response plans to ensure rapid detection, reporting, and resolution of ICT incidents.",
    },
    {
        icon: "akar-icons:people-group",
        title: "Third-Party ICT Compliance",
        description: "Assess compliance of outsourced and third-party ICT service providers to mitigate operational risks.",
    },
    {
        icon: "iconmind:compliance-outline-regular",
        title: "Regulatory Reporting Readiness",
        description: "Ensure organizations are prepared for DORA regulatory reporting and operational resilience standards.",
    },
];

const setsApart = [
    {
        icon: "iconmind:eval-report-outline-regular",
        title: "End-to-End DORA Services",
        description:
            "Comprehensive DORA compliance services tailored for EU financial institutions.",
    },
    {
        icon: "boxicons:light-bulb-on",
        title: "DORA Expertise",
        description:
            "Expert guidance in Digital Operational Resilience Act enforcement and ICT compliance.",
    },
    {
        icon: "cuida:settings-outline",
        title: "Tailored Solutions",
        description:
            "Custom ICT risk and operational continuity solutions for your organization’s needs.",
    },
    {
        icon: "ic:outline-fact-check",
        title: "Latest Regulatory Updates",
        description:
            "Stay aligned with the latest EU DORA legislation and regulatory updates.",
    },
];

const Steps = [
    {
        number: "01",
        step: "Phase 01",
        title: "Initial Assessment",
        description:
            "Identify gaps in digital operational resilience & DORA compliance.",
        side: "left",
    },
    {
        number: "02",
        step: "Phase 02",
        title: "ICT Risk Evaluation",
        description:
            "Review governance, systems, and controls for DORA operational resilience.",
        side: "right",
    },
    {
        number: "03",
        step: "Phase 03",
        title: "Incident Management Review",
        description:
            "Test incident response plans against DORA cyber security requirements.",
        side: "left",
    },
    {
        number: "04",
        step: "Phase 04",
        title: "Third-Party Assessment",
        description:
            "Evaluate outsourcing and third-party ICT service providers.",
        side: "right",
    },
    {
        number: "05",
        step: "Phase 05",
        title: "Digital Resilience Testing",
        description:
            "Conduct stress tests, penetration testing, and continuity drills.",
        side: "left",
    },
    {
        number: "06",
        step: "Phase 06",
        title: "Compliance Roadmap",
        description:
            "Deliver actionable recommendations and DORA regulatory alignment roadmap.",
        side: "right",
    },
];

const whatYouReceive = [
  {
    title: "Comprehensive Report",
    description:
      "Full DORA compliance assessment report covering gaps and recommendations.",
  },
  {
    title: "ICT Risk Analysis",
    description:
      "Detailed assessment of ICT risk and operational resilience.",
  },
  {
    title: "Incident Management Review",
    description:
      "Evaluation of incident response and reporting frameworks against DORA standards.",
  },
  {
    title: "Third-Party Assessment",
    description:
      "Assessment of third-party ICT providers and outsourcing risks.",
  },
  {
    title: "Actionable Roadmap",
    description:
      "Step-by-step roadmap for full DORA regulatory compliance and operational resilience.",
  },
  {
    title: "Testing Results",
    description:
      "Digital resilience testing results, including stress and penetration tests, with recommendations.",
  },
];

const doraFAQs = [
  {
    question: "What is DORA?",
    answer:
      "The Digital Operational Resilience Act (DORA) is a European Union regulation designed to strengthen the digital operational resilience of financial entities across the EU. It ensures firms can withstand, respond to, and recover from all types of ICT-related disruptions and threats.",
  },
  {
    question: "What is the purpose of DORA?",
    answer:
      "DORA aims to harmonize ICT risk management, incident reporting, and resilience standards for financial entities in the EU, ensuring continuity of critical operations and reducing cyber and operational risks.",
  },
  {
    question: "Who does DORA apply to?",
    answer:
      "DORA applies to financial institutions, payment service providers, crypto-asset service providers, investment firms, and third-party ICT service providers supporting financial services in the EU.",
  },
  {
    question: "What is the scope of DORA?",
    answer:
      "The scope includes ICT risk management and governance, incident reporting, digital operational resilience testing, and third-party risk management. DORA covers both internal ICT operations and external service providers.",
  },
  {
    question: "What is DORA's current status?",
    answer:
      "DORA was adopted in 2022 by the European Parliament and is currently in the implementation phase, with enforcement expected by 2025. EU member states must align national regulations with DORA.",
  },
  {
    question: "When will DORA enforcement begin?",
    answer:
      "DORA enforcement deadlines vary for different requirements, with full compliance generally required by January 2025. Specific timelines are detailed in the DORA regulatory technical standards.",
  },
  {
    question: "What are the key requirements of DORA?",
    answer:
      "Key requirements include: ICT risk management and governance,Incident response and reporting,Digital operational resilience testing,Third-party risk management,Compliance with DORA regulatory technical standards",
  },
  {
    question: "What is ICT risk management under DORA?",
    answer:
      "ICT risk management involves identifying, assessing, and mitigating risks in digital systems, networks, and third-party ICT services to ensure continuity of financial operations.",
  },
  {
    question: "What does incident response and reporting mean in DORA?",
    answer:
      "Financial entities must report major ICT incidents to competent authorities within the timelines set by DORA and maintain an effective incident response and recovery process.",
  },
  {
    question: "What is digital operational resilience testing?",
    answer:
      "DORA mandates regular testing of digital systems to ensure resilience against cyberattacks, operational disruptions, and ICT failures. Stress tests and advanced penetration testing are recommended.",
  },
  {
    question:"How does DORA handle third-party risk management?",
    answer:"DORA requires financial institutions to monitor and manage ICT risks arising from outsourcing, especially critical third-party providers, ensuring contracts and SLAs comply with resilience standards."
  },
  {
    question:"What is ISECURION’s scope of work for DORA?",
    answer:"ISECURION provides end-to-end DORA compliance support, including:ICT risk assessment,Gap analysis against DORA requirements,Incident reporting framework setup,Operational resilience testing,Third-party vendor assessment"
  },
  {
    question:"What methodology does ISECURION follow?",
    answer:"ISECURION follows a structured methodology:Assessment & Gap Analysis,Risk Management Implementation,Incident Response & Reporting Framework,Digital Operational Resilience Testing,Third-Party Risk Management & Compliance Certification"
  },
  {
    question:"What sets ISECURION apart in DORA compliance?",
    answer:"Our value-add includes:Expert guidance from cybersecurity and regulatory specialists,Customized solutions for EU financial entities,Hands-on operational resilience testing,End-to-end compliance with DORA directives"
  },
  {
    question:"What deliverables will I receive?",
    answer:"Comprehensive DORA gap analysis report,ICT risk management framework,Incident response plan,Operational resilience testing report,Third-party vendor compliance checklist"
  },
  {
    question:"How often should organizations test digital operational resilience?",
    answer:"DORA requires regular testing, at least annually, or more frequently based on risk exposure. This includes simulations, penetration testing, and scenario-based stress tests."
  },
  {
    question:"Why choose ISECURION for DORA compliance?",
    answer:"As trusted security experts, ISECURION ensures compliance with DORA regulations, minimizes ICT risks, and provides actionable insights to strengthen digital resilience for financial organizations."
  },
  {
    question:"How does DORA improve cyber resilience?",
    answer:"By enforcing standardized ICT risk management, incident reporting, and operational testing, DORA ensures financial entities are better prepared for cyber threats and operational disruptions."
  },
  {
    question:"Is DORA applicable outside the EU?",
    answer:"While DORA is an EU regulation, financial entities outside the EU providing services to EU clients or relying on EU third-party ICT providers may also need to comply."
  },
  {
    question:"What happens if a company is non-compliant with DORA?",
    answer:"Non-compliance can result in regulatory penalties, reputational damage, operational disruptions, and potential restrictions on EU market operations. ISECURION helps organizations achieve timely compliance to avoid these risks."
  }

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
            const response = await doraCompliance({ ...data, turnstileToken });
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
                                    DORA Compliance
                                </p>

                                {/* Heading */}
                                <h1 className="mt-5 lg:max-w-[450px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left animate-hero-reveal" style={{ animationDelay: "700ms" }}>
                                    DORA Compliance & Digital Operational Resilience Services for Financial Institutions
                                </h1>

                                {/* Description */}
                                <p className="mt-4 lg:max-w-[430px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left animate-hero-reveal" style={{ animationDelay: "1000ms" }}>
                                    ISECURION helps banks, fintechs, and financial organizations achieve full DORA Compliance,
                                    ensuring operational continuity, ICT resilience, and regulatory alignment under the Digital
                                    Operational Resilience Act (DORA) of the EU.
                                </p>

                                {/* CTA */}
                                <div className="mt-10 text-center lg:text-left">
                                    <Link href="/company/contact">
                                        <button
                                            type="button"
                                            className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                                        >
                                            Request a Consultation{""}
                                            <span className="ml-1.5 text-[17px] leading-none text-[#31435C]">
                                                <Icon icon="mdi:arrow-right"></Icon>
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Animation>

                        <div className="w-full rounded-[20px] bg-[#202123] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[32px] lg:p-[30px] xl:p-[40px]">
                            <div>
                                <h2 className="text-[18px] font-medium leading-[1.3] text-white sm:text-[19px]">
                                    Get Your DORA Assessment
                                </h2>

                                <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                                    Assess your readiness and identify gaps against DORA requirements.
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

                                {/* CAPTCHA */}
                                <div className="flex min-h-[65px] items-center gap-3 mt-7">

                                    <div className="min-h-[65px] flex items-center">
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
                                    className={`mt-8 flex h-[51px] w-full items-center justify-center rounded-[7px] border border-[#4D78C4] bg-gradient-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(39,84,148,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#5282D3] hover:to-[#2B5CA0] active:translate-y-0 ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                                >
                                    Get Assessment{""}
                                    <span className="ml-1.5 text-[18px] leading-none">
                                        <Icon icon="mdi:arrow-right" />
                                    </span>
                                </button>
                            </form>
                        </div>
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
                                    UNDERSTANDING DORA
                                </p>

                                <WordReveal text="Resilience Is More Than Regulatory Compliance." className="mx-auto mt-4 max-w-[570px] text-center text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[34px] lg:text-left lg:mx-0 lg:text-[36px] xl:text-[40px]">

                                </WordReveal>

                                <div className="mx-auto mt-[22px] max-w-[525px] space-y-5 text-center text-[15px] font-normal leading-[1.72] text-[#D1D1D1] sm:text-[16px] lg:text-left lg:mx-0 lg:text-[16px] xl:text-[17px]">
                                    <Animation>
                                        <p className="animate-hero-reveal" style={{ animationDelay: "700ms" }}>
                                            DORA establishes a unified framework for managing ICT risks and strengthening digital operational
                                            resilience across the European financial sector. Organisations must be prepared to withstand,
                                            respond to and recover from ICT-related disruptions.
                                        </p>
                                    </Animation>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: OBJECTIVES */}
                            <div className="min-w-0">
                                <p className="mb-7 text-center text-[14px] font-semibold uppercase leading-[18px] text-[#3B9E6A] sm:text-base md:text-left">
                                    Purpose of DORA
                                </p>

                                <div className="relative">
                                    {purpose.map((step, index) => (
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
                                DORA APPLICABILITY
                            </p>
                            <WordReveal text="Organisations Within DORA's Scope." className="text-[#FFFFFF] max-w-[700px]">

                            </WordReveal>
                            <Animation>
                                <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[750px]">
                                    DORA applies to a range of financial entities and addresses ICT risk across the financial ecosystem, including relevant third-party technology providers.
                                </p>
                            </Animation>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {doraApplicability.map((item, index) => (
                                    <AnimatedCard
                                        delay={index * 0.13}
                                        key={index}
                                        className={`relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F] py-8  ${index === 4 ? "lg:col-span-2" : ""
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
                                        <p className="mt-4 text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[330px] h-[80px]">
                                            {item.description}
                                        </p>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </Animation>
            </section>

            <section className="w-full py-14 overflow-hidden bg-[#060D1B]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">
                    {/* heading  */}
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="w-full lg:w-[40%]">
                            <LeftAnimation>
                                <div className="space-y-4 text-center lg:text-left">
                                    <p className="text-sm sm:text-base font-semibold text-[#3B9E6A] sectionheading uppercase">
                                        DORA compliance requirements
                                    </p>
                                    <h2 className="text-[#FEFEFE]">
                                        Four Pillars of Digital Operational Resilience.
                                    </h2>
                                </div>
                            </LeftAnimation>
                        </div>
                        <div className="w-full lg:w-[48%] ">
                            <RightAnimation>
                                <div className="space-y-4 text-center lg:text-left">
                                    <p className="sectionDescription text-[#D1D1D1] lg:max-w-[530px]">
                                        DORA brings together core areas of ICT risk management, incident response, resilience testing, third-party oversight and information sharing.
                                    </p>
                                    <p className="sectionDescription text-[#D1D1D1] lg:max-w-[530px]">
                                        By strengthening governance, validating security controls, managing third-party dependencies and improving incident response capabilities,
                                        organisations can build a more resilient and reliable digital operating environment.
                                    </p>
                                </div>
                            </RightAnimation>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {doraRequirements.map((item, index) => (
                                <AnimatedCard
                                    key={index}
                                    delay={index * 0.15}
                                    className="px-4 py-3 space-y-3 border-l-[1.03px] border-[#0F66EA29]"
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

            <section className="relative border-t border-white/5 bg-[#07101D] pt-16 text-white sm:pt-18 lg:py-20">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    <Animation>
                        <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
                            {/* LEFT COLUMN: OVERVIEW */}
                            <div className="min-w-0">
                                <p className="text-center text-[14px] font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#3B9E6A] sm:text-base lg:text-left">
                                    ISECURION's scope of work
                                </p>

                                <WordReveal text="From ICT Risk to Resilience Readiness." className="mx-auto mt-4 max-w-[570px] text-center text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[34px] lg:text-left lg:mx-0 lg:text-[36px] xl:text-[40px]">

                                </WordReveal>

                                <div className="mx-auto mt-[22px] max-w-[525px] space-y-5 text-center text-[15px] font-normal leading-[1.72] text-[#D1D1D1] sm:text-[16px] lg:text-left lg:mx-0 lg:text-[16px] xl:text-[17px]">
                                    <Animation>
                                        <p className="animate-hero-reveal" style={{ animationDelay: "700ms" }}>
                                            Our DORA compliance support focuses on identifying gaps across technology, governance, security controls and operational resilience.
                                        </p>
                                    </Animation>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: OBJECTIVES */}
                            <div className="min-w-0">
                                <div className="relative">
                                    {scopeOfWork.map((step, index) => (
                                        <AnimatedCard
                                            key={index}
                                            delay={index * 0.15}
                                            className="relative z-10 flex min-w-0 items-start gap-3 pb-7 last:pb-0 sm:gap-5"
                                        >
                                            {/* ICON BADGE */}
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#FFFFFF] to-[#DFE8FF] text-[#3B9E6A]">
                                                <Icon
                                                    icon={step.icon}
                                                    className="h-[22px] w-[22px] text-[#3B9E6A]"
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

            <section className="relative w-full overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-20">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
                        <LeftAnimation>
                            <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#3B9E6A] uppercase">
                                    Our Approach
                                </p>
                                <h2 className=" text-[#FEFEFE] lg:max-w-[518px]">
                                    A Roadmap to DORA Alignment
                                </h2>
                            </div>
                        </LeftAnimation>
                        <RightAnimation>
                            <div className="w-full text-center lg:text-left">
                                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                                    From identifying gaps to validating controls, our assessment process helps organisations understand their current readiness and prioritise the next steps.
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
                                        className={`col-start-2 min-w-0 w-full sm:col-start-1 sm:row-start-1 ${item.side === "left"
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
                                        className={`min-w-0 w-full sm:col-start-3 sm:row-start-1 ${item.side === "right"
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

            <section className="bg-[#050D1C] text-white">
                <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
                        {/* Left: Section introduction */}
                        <LeftAnimation>
                            <div className="lg:max-w-[470px] md:pt-1 text-center lg:text-left">
                                <p className="text-[13px] sm:text-base font-semibold uppercase leading-5 text-[#3B9E6A] ">
                                    What Sets Us Apart
                                </p>

                                <h2 className="mt-3 lg:max-w-[400px] leading-[1.28] tracking-[-0.5px] text-[#F8F9FC] sm:leading-[1.35]">
                                    Value That Goes Beyond Findings.
                                </h2>

                                <p className="mt-5 lg:max-w-[420px] text-[15px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[16px]">
                                    From expert-led assessments to prioritised remediation guidance, we help organisations turn security insights into meaningful improvements.
                                </p>
                            </div>
                        </LeftAnimation>


                        {/* Right: Deliverables grid */}
                        <Animation>
                            <div className="grid min-w-0 grid-cols-1 overflow-hidden rounded-[6px] border border-[#183B32] sm:grid-cols-2">
                                {setsApart.map((item, index) => (
                                    <AnimatedCard
                                        key={item.title}
                                        className={[
                                            "flex min-w-0 flex-col px-6 py-7 sm:min-h-[203px] sm:px-6 sm:py-7 lg:px-6 lg:py-7",
                                            index === 0 || index === 3
                                                ? "bg-[#181E29]"
                                                : "bg-[#050D1C]",
                                            index % 2 === 0
                                                ? "sm:border-r sm:border-[#183B32]"
                                                : "",
                                            index < 3
                                                ? "border-b border-[#183B32] sm:border-b-0"
                                                : "",
                                            index < 2
                                                ? "sm:border-b sm:border-[#183B32]"
                                                : "",
                                        ].join(" ")}
                                    >
                                        <Icon
                                            icon={item.icon}
                                            className="h-5 w-5 shrink-0 text-[#3B9E6A]"
                                            aria-hidden="true"
                                        />

                                        <h3 className="mt-7 text-[16px] font-medium leading-6 text-[#F5F6FA]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-[260px] text-[13px] font-normal leading-[22px] text-[#C5C8D0] sm:text-[13px]">
                                            {item.description}
                                        </p>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </Animation>

                    </div>
                </div>
            </section>

            <section className="w-full py-14 bg-[#060D1B]">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 sm:px-10 gap-8 lg:gap-15">
                      <div className="w-full space-y-4 text-center lg:sticky lg:top-24 lg:h-fit lg:w-1/2 lg:self-start lg:text-left">
                        <LeftAnimation>
                          <p className="mt-10 text-sm sm:text-base font-semibold text-[#3B9E6A]">
                            WHAT YOU RECEIVE
                          </p>
                          <h2 className="mt-2 font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF] lg:max-w-[430px]">
                            Findings That Move You Forward.
                          </h2>
                          <p className="mt-4 text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[480px]">
                            Clear assessment outputs to help your teams understand gaps, prioritise remediation and strengthen operational resilience.
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
                              DORA Compliance 
                            </>
                          }
                          description="Find answers to common questions about DORA requirements, compliance expectations and digital operational resilience."
                          faqs={doraFAQs}
                        />
        </div>
    )
}

export default page