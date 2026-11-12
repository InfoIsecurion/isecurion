"use client"
import React from "react";
import { Icon } from "@iconify/react";
import icsBg from "../../../assets/services/ot-security-illustration-colorful.png";
import { main } from "framer-motion/m";
import WordReveal, { AnimatedCard, Animation } from "../../../components/ui/Animation";
import MethodologySection from "../../../components/sections/MethodologySection";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "fa-solid:shield-alt",
    iconBg: "#022D6C",
    title: "Compliance Readiness",
    description:
      "Identify compliance gaps across your ICS environment and strengthen regulatory alignment.",
  },
  {
    icon: "iconmind:hazard-outline-regular",
    iconBg: "#3B9E6A",
    title: "Risk Visibility",
    description:
      "Gain clearer visibility into ICS security risks, vulnerabilities, and potential exposure.",
  },
  {
    icon: "akar-icons:people-group",
    iconBg: "#E24B4A",
    title: "Stakeholder Confidence",
    description:
      "Demonstrate effective ICS risk management & build confidence with customers & stakeholders.",
  },
  {
    icon: "fluent:arrow-trending-lines-24-filled",
    iconBg: "#0F66EA",
    title: "Better Business Decisions",
    description:
      "Get actionable security insights to support informed and confident business decisions.",
  },
  {
    icon: "iconmind:compliance-outline-regular",
    iconBg: "#C8912A",
    title: "Optimized Security Investment",
    description:
      "Maximize security ROI with effective controls and the right protection levels.",
  },
  {
    icon: "bx:lock",
    iconBg: "#959EFE",
    title: "Actionable Security Report",
    description:
      "Receive a detailed report outlining identified risks, recommendations, & remediation support.",
  },
];

const governanceCards = [
  {
    icon: "lucide:triangle-alert",
    title: "Governance & Risk",
    items: [
      "ICS policies & standards",
      "Risk management",
      "Security controls",
      "Compliance alignment",
    ],
  },
  {
    icon: "lucide:layers",
    title: "Asset & Architecture",
    items: [
      "ICS inventory",
      "Network architecture",
      "Authorized / unauthorized devices",
      "SCADA environment",
    ],
  },
  {
    icon: "material-symbols:folder-managed-outline-rounded",
    title: "Access and Configuration",
    items: [
      "Identity & access management",
      "Secure configurations",
      "Network ports & protocols",
      "Wireless access",
    ],
  },
  {
    icon: "lucide:lock",
    title: "Resilience & Response",
    items: [
      "Endpoint security",
      "Data protection",
      "Recovery capability",
      "Incident response",
    ],
  },
];

const industrialSystemSteps = [
  {
    title: "Reconnaissance",
    description:
      "Identify remote and local entry points across the ICS/SCADA environment.",
    icon: <Icon icon="fluent:search-16-filled" />,
  },
  {
    title: "Network Mapping",
    description:
      "Map ICS networks, exposed services, protocols, communication paths, and connected systems.",
    icon: <Icon icon="akar-icons:network" />,
  },
  {
    title: "System Enumeration",
    description:
      "Assess PLCs, RTUs, HMIs, historians, SCADA applications, databases, credentials, and wireless connections.",
    icon: <Icon icon="iconmind:session-fixation-guard-outline-regular" />,
  },
  {
    title: "Vulnerability Analysis",
    description:
      "Identify weaknesses across network protocols, systems, applications, configurations, and access mechanisms.",
    icon: <Icon icon="fe:target" />,
  },
  {
    title: "Controlled Exploitation",
    description:
      "Safely validate exploitable weaknesses, remote-access paths, and diagnostic mechanisms within agreed rules of engagement.",
    icon: <Icon icon="bx:layer" />,
  },
  {
    title: "Reporting & Deliverables",
    description:
      "Correlate findings with potential operational impact, prioritize vulnerabilities, and deliver evidence-based recommendations & corrective actions.",
    icon: <Icon icon="pajamas:review-checkmark" />,
  },
];

function page() {
  return (
    <main className="bg-black">
      <section className="relative bg-[#07101D]">
        <div
          className="absolute inset-0 min-h-[560px] bg-cover bg-no-repeat bg-[position:center_center] lg:bg-[position:center_center]"
          style={{
            backgroundImage: `url(${icsBg.src})`,
          }}
        />

        <div className="absolute inset-0 bg-[#07101D]/10" />
        <Animation>
          <div
            className="relative z-10 mx-auto flex  max-w-7xl items-center px-6 py-16 sm:px-8  md:px-10
                     lg:px-[26px] lg:py-[48px]"
          >
            <div className="w-full max-w-[590px] md:max-w-[560px] lg:max-w-[570px] text-center md:text-left">
              {/* EYEBROW */}
              <p className="text-[12px] sm:text-base font-semibold uppercase leading-[18px] text-[#0F66EA] sm:text-[14px]">
                Industrial Control System Security Assessment
              </p>

              {/* HEADING */}
              <h1 className="mt-[18px] max-w-[570px] font-semibold leading-[1.4] tracking-[-0.02em] text-white lg:mt-[22px] lg:leading-[1.4] animate-hero-reveal" style={{ animationDelay: "650ms" }}>
                Secure your ICS/SCADA before vulnerabilities impact operations.
              </h1>

              {/*DESCRIPTION */}
              <p className="mt-[24px] max-w-[460px] text-[#D1D1D1] lg:mt-[26px] sectionDescription animate-hero-reveal" style={{ animationDelay: "800ms" }}>
                ISECURION helps identify, assess, and prioritize security risks
                across critical industrial systems, networks, applications, and
                infrastructure.
              </p>

              <div className="mt-[30px] sm:mt-[34px] animate-hero-reveal" style={{ animationDelay: "1080ms" }}>
                <Link href="/company/contact">
                  <button className="inline-flex h-[54px] items-center justify-center rounded-[9px] bg-white px-[20px] py-[12px] text-[13px] sm:text-[15px] font-medium text-[#31435C] transition-all duration-200 hover:bg-[#F3F5F8] sm:min-h-[54px] sm:px-[21px] lg:px-[20px] cursor-pointer">
                    <span>Schedule an ICS Assessment</span>

                    <span className="ml-[8px] text-[20px]">
                      <Icon icon="mdi:arrow-right" width={20} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Animation>
      </section>

      <section className="bg-[#07101D] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
          {/* SECTION HEADER & OVERVIEW */}
          <Animation>
            <div className="mt-14 text-center md:text-left">
              <p className="text-[14px] sm:text-base font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px]">
                OVERVIEW
              </p>

              <WordReveal text=" What Is ICS Security Assessment?" className="mt-3 text-2xl font-semibold text-white sm:text-3xl lg:text-[32px]" />

              <p className="mt-4 max-w-[580px] text-[#D1D1D1] sectionDescription animate-hero-reveal" style={{ animationDelay: "850ms" }}>
                Modern ICS/SCADA environments are increasingly connected to
                corporate networks and the Internet, creating new opportunities
                for cyber threats. ISECURION assesses these environments to
                identify vulnerabilities and security gaps before they can
                impact critical operations.
              </p>
            </div>
          </Animation>

          {/* WE ASSESS LIST */}
          <Animation>
            <div className="mt-8">
              <p className="text-[14px] font-medium text-white sm:text-[16px]">
                We Assess
              </p>

              {/* Stacks to 1 column on mobile, expands to 2 columns on tablet/desktop */}
              <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-[#D1D1D1] sm:grid-cols-2 sm:text-[15px] lg:max-w-3xl">
                {[
                  "ICS network architecture",
                  "Identity & access management",
                  "PLCs, RTUs, HMIs & Historians",
                  "Endpoint and malware protection",
                  "SCADA applications",
                  "Firewalls, routers & switches",
                  "Network ports, protocols & services",
                  "Wireless access controls",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <Icon
                      icon="boxicons:seal-check"
                      className="shrink-0 text-[18px] text-[#0F66EA]"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Animation>

          {/* CARDS GRID */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <Animation key={card.title} delay={index * 0.12}>
                <div className="flex h-full flex-col justify-between rounded-[15px] border border-[#002C8C] bg-gradient-to-b from-[#0A1119] to-[#17366E] p-5 sm:p-6 transition-all duration-300 hover:border-[#0F66EA]">
                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon icon={card.icon} className="text-[22px] text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="mt-6 sm:mt-8">
                    <h3 className="text-sm font-medium text-white sm:text-[16px]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-relaxed text-[#D1D1D1] sm:text-[14px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Animation>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#07101D] text-white pb-16 sm:pb-20 lg:pb-24">
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[1086px] h-[352px] rounded-full bg-[#A250ED]/12 pointer-events-none z-0 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-[26px]">
          {/* SECTION HEADER */}
          <div className="max-w-4xl text-center md:text-left">
            <p className="text-[14px] sm:text-base font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px]">
              OUR METHODOLOGY
            </p>

            <h2 className="mt-[16px] text-[28px] font-medium leading-[1.4] tracking-[-0.02em] text-white sm:text-[32px] lg:text-[38px]">
              <WordReveal as="span" text="Audit the Control."></WordReveal> <br />
              <WordReveal as="span" text="Test the Attack Path."></WordReveal>
            </h2>

            <p className="mt-[18px] text-[#D1D1D1] max-w-[850px] sectionDescription animate-hero-reveal" style={{ animationDelay: "600ms" }}>
              A dual-track methodology combining compliance assurance and
              controlled offensive testing for industrial control environments.
            </p>
          </div>

          {/* TRACK 01 */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-baseline gap-3">
              <span className="text-[16px] font-semibold text-[#0F66EA]">
                01
              </span>
              <p className="text-[15px] sm:text-base font-normal uppercase text-white">
                COMPLIANCE &amp; SECURITY GOVERNANCE
              </p>
            </div>
            <p className="mt-2 text-[14px] sm:text-base text-[#D1D1D1]">
              Ensure the right controls, policies and processes are in place.
            </p>

            {/* 4 CARDS GRID */}
            <Animation>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {governanceCards.map((card, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.2}
                    className="border-l border-[#0F66EA29] p-6 "
                  >
                    {/* ICON BADGE */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#8D8D8D57] text-gray-300">
                      <Icon icon={card.icon} className="h-5 w-5" />
                    </div>

                    {/* CARD TITLE */}
                    <h4 className="mt-5 text-[16px] font-medium text-[#F5F0E8]">
                      {card.title}
                    </h4>

                    {/* BULLET LIST */}
                    <ul className="mt-4 space-y-2 text-[14px] text-[#D1D1D1D6]">
                      {card.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#94A3B8]" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}
              </div>
            </Animation>
          </div>

          {/* TRACK 02 */}
          <div className="mt-8 sm:mt-16 ">
            <div className="flex items-baseline gap-3">
              <span className="text-[16px] font-semibold text-[#0F66EA]">
                02
              </span>
              <p className="text-[15px] sm:text-base font-normal uppercase text-white">
                ICS VULNERABILITY ASSESSMENT &amp; PENETRATION TESTING
              </p>
            </div>
            <p className="mt-2 text-[14px] sm:text-base text-[#D1D1D1]">
              Find and validate what can be exploited, before attackers do.
            </p>
          </div>
        </div>
      </section>

      <MethodologySection
        steps={industrialSystemSteps}
        centerTitle={["ICS SECURITY", "ASSESSMENT "]}
        tagline={["DISCOVER. TEST.", "VALIDATE."]}
      />
    </main>
  );
}

export default page;
