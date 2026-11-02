"use client";
import React from "react";
import mobileHeroBackground from "../../../assets/services/mobileHeroBackground.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import FAQSection from "../../../components/sections/FAQSection";
import methodologySettings from "../../../assets/services/methodologySettings.png";
import { Animation, AnimatedCard } from "../../../components/ui/Animation";

const mobileAssessmentCards = [
  {
    icon: "fa-solid:shield-alt",
    iconBg: "#022D6C",
    title: "Find Critical Flaws Early",
    description:
      "Identify auth, crypto, storage and API issues before they hit production.",
  },
  {
    icon: "eos-icons:activate-subscriptions-outlined",
    iconBg: "#3B9E6A",
    title: "OWASP MASVS Mapped",
    description:
      "Evidence and recommendations aligned to MASVS & MSTG controls.",
  },
  {
    icon: "humbleicons:adjustments",
    iconBg: "#E24B4A",
    title: "Actionable Fixes",
    description:
      "Prioritized, step-by-step remediation with code-level guidance.",
  },
  {
    icon: "akar-icons:desktop-device",
    iconBg: "#0F66EA",
    title: "Real Device Testing",
    description:
      "Validated on emulators and physical devices for realistic results.",
  },
  {
    icon: "ant-design:api-outlined",
    iconBg: "#C8912A",
    title: "Secure APIs",
    description:
      "End-to-end testing of mobile-to-API flows, auth tokens and rate limits.",
  },
  {
    icon: "bx:lock",
    iconBg: "#959EFE",
    title: "Data Protection",
    description: "Verify encryption at rest/in transit and safe key handling.",
  },
  {
    icon: "akar-icons:people-group",
    iconBg: "#698099",
    title: "Stakeholder Assurance",
    description: "Reports stakeholders understand; engineers can act on.",
  },
  {
    icon: "iconmind:compliance-outline-regular",
    iconBg: "#15B3A4",
    title: "Compliance Ready",
    description: "Supports ISO 27001, SOC 2, GDPR and industry mandates.",
  },
  {
    icon: "ic:round-loop",
    iconBg: "#FF5F5E",
    title: "Shift-Left Enablement",
    description:
      "Guidance to embedded secure SDLC practices for future releases.",
  },
];

const mobileMethodology = [
  {
    number: "01",
    icon: "pajamas:issue-type-objective",
    title: "DISCOVER",
    subtitle: "Information Gathering",
    description:
      "Understand app architecture, dependencies, SDKs, and backend services. Define scope and success criteria.",
  },
  {
    number: "02",
    icon: "iconmind:continuous-profile-outline-regular",
    title: "PROFILE",
    subtitle: "Threat Profiling",
    description:
      "Map abuse cases across client, transport, and server layers, focusing on sensitive data & payments.",
  },
  {
    number: "03",
    icon: "iconmind:continuous-profile-outline-regular",
    title: "ASSESS",
    subtitle: "Security Assessment",
    description:
      "Manual testing + SAST/DAST on storage, TLS, session management, root/jailbreak detection, APIs & authentication flows.",
  },
  {
    number: "04",
    icon: "boxicons:bell-check",
    title: "VALIDATE",
    subtitle: "Evidence & Risk Rating",
    description:
      "Document findings with proof-of-concept, impact, likelihood, and OWASP MASVS mapping.",
  },
  {
    number: "05",
    icon: "oui:app-reporting",
    title: "REMEDIATE",
    subtitle: "Recommendations & Retest",
    description:
      "Actionable remediation with optional retesting. Developer-focused detail + executive summary.",
  },
];

const mobileApplicationFAQs = [
  {
    question: "What is a Mobile Application Security Assessment?",
    answer:
      "A structured evaluation of mobile apps (iOS/Android) to identify vulnerabilities across the client, transport and server layers, aligned with OWASP MASVS/MSTG.",
  },
  {
    question: "Which platforms and frameworks do you cover?",
    answer:
      "We test native and hybrid iOS and Android apps, including cross-platform frameworks like React Native and Flutter.",
  },
  {
    question: "Do you test APIs used by the mobile app?",
    answer:
      "Yes. We assess authentication, authorization, input validation, rate limiting, and data exposure across the app’s backend APIs.",
  },
  {
    question: "What deliverables will we receive?",
    answer:
      "A detailed report with evidence, risk ratings, OWASP MASVS mapping, and prioritized remediation steps, plus an executive summary.",
  },
  {
    question: "How long does an assessment typically take?",
    answer:
      "Duration depends on scope (features, platforms, API count). We define timelines during scoping to align with your release schedule.",
  },
  {
    question: "Can you validate our fixes after remediation?",
    answer:
      "Absolutely. We offer retesting to confirm fixes and update the report status for auditors and stakeholders.",
  },
  {
    question: "Do you support CI/CD or a secure SDLC approach?",
    answer:
      "Yes. We provide guidance and checklists to shift-left security and integrate controls into your pipelines and code reviews.",
  },
  {
    question: "What access or artifacts do you need to start?",
    answer:
      "Typically: installable builds (APK/IPA), test accounts, API documentation, release notes, and any environment details or feature flags.",
  },
  {
    question: "Will testing impact our production users?",
    answer:
      "We prefer non-prod environments. For prod-only features, we coordinate safe windows and rate limits to avoid disruption.",
  },
  {
    question: "Do you provide ongoing security partnership?",
    answer:
      "Yes. We offer periodic assessments, release-based reviews, and advisory hours to support new features and secure architecture decisions.",
  },
];

function page() {
  return (
    <main className="bg-black">
      <section>
        <div
          className="relative h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url(${mobileHeroBackground.src})`,
          }}
        >
          {/* Hero Content */}
          <Animation>
            <div className="relative  mx-auto max-w-7xl z-10 flex min-h-[424px] items-center px-6 py-16 sm:px-10 lg:px-12 text-center md:text-left">
              <div className="w-full lg:w-[58%]">
                <h1 className="max-w-[750px] font-semibold leading-[1.2] text-white ">
                  Mobile Application Security
                </h1>

                <p className="mt-5 max-w-[640px] text-base leading-8 text-[#D9D9D9] sm:text-lg">
                  ISECURION assesses iOS and Android applications across the
                  client, communication, and backend layers to identify
                  vulnerabilities before they can be exploited.
                </p>

                <Animation>
                  <button
                    type="button"
                    className="mt-8 inline-flex h-[54px] items-center justify-center rounded-[10px] bg-white px-7 text-sm sm:text-[16px] font-medium text-[#31435C] transition hover:bg-gray-100"
                  >
                    Scecure My Mobile App{""}
                    <span className="pl-2">
                      <Icon icon="mdi:arrow-right" width={20} />
                    </span>
                  </button>
                </Animation>
              </div>
            </div>
          </Animation>
        </div>
      </section>

      <section className="bg-[#050B18] ">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
          {/* Section Content */}
          <Animation>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-[40px]">
                What Is Mobile Application Security Assessment?
              </h2>

              <p className="mt-6 max-w-[550px] text-sm leading-6.5 text-[#D1D1D1] sm:text-base ">
                A Mobile Application Security Assessment is a structured
                evaluation of mobile applications to identify vulnerabilities
                across the application, device, communication, and backend API
                layers.
              </p>

              <p className="mt-4 max-w-[610px] text-sm leading-6.5 text-white/70 sm:text-base">
                We combine{" "}
                <span className="font-medium text-white">
                  OWASP MASVS/MSTG-aligned testing
                </span>
                ,{" "}
                <span className="font-medium text-white">
                  targeted automation
                </span>
                , and{" "}
                <span className="font-medium text-white">
                  expert-led manual assessment
                </span>{" "}
                to uncover weaknesses in application logic, authentication, data
                protection, APIs, and mobile platform controls.
              </p>
            </div>
          </Animation>

          {/* We Assess */}
          <Animation>
            <div className="mt-5">
              <p className="text-sm font-medium text-white">We Assess</p>

              <ul className="mt-2.5 space-y-2">
                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Mobile Application
                </li>

                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  APIs &amp; Backend Services
                </li>

                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Authentication &amp; Authorization
                </li>

                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Data Storage &amp; Encryption
                </li>

                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Network &amp; Transport Security
                </li>
              </ul>
            </div>
          </Animation>

          {/* Assessment Benefits */}
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mobileAssessmentCards.map((card, index) => (
              <AnimatedCard key={card.title} delay={index * 0.12}>
                <div className="min-h-[180px] rounded-lg border border-[#002C8C] bg-gradient-to-b from-[#0A1119] to-[#17366E] p-4 sm:min-h-[235px] sm:p-5">
                  {/* Icon */}
                  <div
                    className="flex h-13 w-13 items-center justify-center rounded-full"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon icon={card.icon} className="text-[22px] text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-15 text-sm font-medium text-white sm:text-[16px]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-[260px] text-[11px] leading-5 text-[#D1D1D1] sm:text-[12px]">
                    {card.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="relative  overflow-hidden bg-[linear-gradient(110deg,#050B18_0%,#071321_48%,#06383C_100%)]">
          <div className="pointer-events-none absolute right-0 top-0">
            <Image src={methodologySettings} alt="" className="" />
          </div>
          {/* Optional subtle glow */}
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#159A9C]/10 blur-[100px]" />

          {/* Methodology Header */}
          <Animation>
            <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 text-center sm:px-10 lg:px-12 lg:pt-20">
              <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-[36px]">
                Our Mobile Security Methodology
              </h2>

              <p className="mx-auto mt-5 max-w-[780px] text-sm leading-6 text-white/70 sm:text-base">
                Our methodology combines threat modeling, manual testing, and
                targeted automation to deliver depth and accuracy.
              </p>
            </div>
          </Animation>

          <Animation>
            <div className="relative hidden px-6 pb-16 pt-5 lg:block lg:px-12">
              {/* Connecting Line */}
              <div className="pointer-events-none absolute left-[14%] right-[14%] top-[110px] h-[2.5px] bg-gradient-to-r from-[#0F66EA12] to-[#7D70F085]" />

              {/* Connector Nodes */}
              <div className="pointer-events-none absolute left-[22%] top-[104px] h-[12px] w-[12px] rounded-full border border-[#FFFFFF] bg-[#0062F7] shadow-[0_0_8px_rgba(61,115,186,0.8)]" />

              <div className="pointer-events-none absolute left-[40.5%] top-[104px] h-[12px] w-[12px] rounded-full border border-[#FFFFFF] bg-[#0062F7] shadow-[0_0_8px_rgba(61,115,186,0.8)]" />

              <div className="pointer-events-none absolute left-[58.5%] top-[104px] h-[12px] w-[12px] rounded-full border border-[#FFFFFF] bg-[#0062F7] shadow-[0_0_8px_rgba(61,115,186,0.8)]" />

              <div className="pointer-events-none absolute left-[77.5%] top-[104px] h-[12px] w-[12px] rounded-full border border-[#FFFFFF] bg-[#0062F7] shadow-[0_0_8px_rgba(61,115,186,0.8)]" />
              {/* Methodology Steps */}
              <div className="relative grid grid-cols-5">
                {mobileMethodology.map((step, index) => (
                  <AnimatedCard
                    delay={index * 0.2}
                    key={step.number}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Number */}
                    <span className="mb-3 text-[22px] font-medium text-white/55">
                      {step.number}
                    </span>

                    {/* Circle */}
                    <div className="relative z-10 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#929BFF8F] to-[#3B9E6A] bg-[#14142A]">
                      <Icon
                        icon={step.icon}
                        className="text-[34px] text-white"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-7 text-lg font-medium text-white">
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 min-h-[44px] max-w-[180px] text-sm font-medium leading-5 text-[#15B3A4]">
                      {step.subtitle}
                    </p>

                    {/* Small Divider */}
                    <div className="mt-3 h-[2px] w-[44px] bg-[#455F6DB5]" />

                    {/* Description */}
                    <p className="mt-5 max-w-[190px] text-xs leading-5 text-[#D1D1D1]">
                      {step.description}
                    </p>
                    {index !== mobileMethodology.length - 1 && (
                      <div className="absolute right-0 top-[205px] h-[165px] w-px bg-[#14283D]" />
                    )}
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </Animation>

          <div className="px-6 pb-14 pt-5 sm:px-10 lg:hidden">

            <div className="space-y-10">
              {mobileMethodology.map((step, index) => (
                <AnimatedCard key={step.number} delay={index * 0.1} className="relative flex gap-4">
                  {/* Vertical Line */}
                  {index !== mobileMethodology.length - 1 && (
                    <div className="absolute left-[23px] top-[55px] h-[calc(100%+20px)] w-px bg-[#39457D]" />
                  )}

                  {/* Number + Icon */}
                  <div className="relative z-10 shrink-0">
                    <span className="block text-center text-xs font-medium text-white/50">
                      {step.number}
                    </span>

                    <div className="mt-2 flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#52639C] bg-[#17132C]">
                      <Icon
                        icon={step.icon}
                        className="text-[21px] text-white"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-5">
                    <h3 className="text-base font-medium text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#00C5C4]">
                      {step.subtitle}
                    </p>

                    <div className="mt-3 h-[2px] w-[40px] bg-[#46526A]" />

                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {step.description}
                    </p>
                  </div>
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
            <br />
            Mobile Application Security
          </>
        }
        description="Everything you need to know about our mobile application security assessment."
        faqs={mobileApplicationFAQs}
      />

    </main>
  );
}

export default page;
