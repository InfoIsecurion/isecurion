"use client"
import React from 'react'
import heroBackground from "../../../assets/services/dataLocalisationBg.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import FAQSection from "../../../components/sections/FAQSection";
import methodologySettings from "../../../assets/services/methodologySettings.png";
import WordReveal, { Animation, AnimatedCard, RightAnimation, LeftAnimation } from "../../../components/ui/Animation";
import Link from "next/link";
import { motion } from "framer-motion";

const OurServices = [
    {
        Icon: "icon-park-outline:preschool",
        heading: "Regulatory Alignment",
        description:
            "Support compliance with applicable RBI, UIDAI and sector-specific data residency requirements.",
    },
    {
        Icon: "akar-icons:bug",
        heading: "Data Sovereignty",
        description:
            "Strengthen control over sensitive information and its jurisdictional exposure.",
    },
    {
        Icon: "iconmind:incident-commander-outline-bold",
        heading: "Accountability & Auditability",
        description:
            "Establish visibility into where data resides, how it is processed and who can access it.",
    },
    {
        Icon: "boxicons:file-report",
        heading: "Operational Resilience",
        description:
            "Assess storage, backup and infrastructure configurations to support continuity and regulatory expectations.",
    },
    {
        Icon: "icon-park-outline:table-report",
        heading: "Privacy & Protection",
        description:
            "Strengthen safeguards surrounding sensitive, financial and personal information.",
    },
    {
        Icon: "iconmind:vpc-outline-regular",
        heading: "Regulatory Readiness",
        description:
            "Maintain documented evidence to support audits, reviews and compliance submissions.",
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

function page() {
    return (
        <div>

            <section className="w-full overflow-hidden bg-[#060D1B]">
                <div
                    className="relative w-full min-h-[500px] bg-cover bg-center bg-no-repeat lg:min-h-[520px] xl:aspect-[25/10] xl:min-h-0"
                    style={{
                        backgroundImage: `url(${heroBackground.src})`,
                    }}
                >
                    <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-16 sm:px-6 lg:min-h-[620px] lg:px-12 lg:py-0 xl:h-full">
                        <div className="w-full text-center md:text-left lg:w-[58%]">
                            <Animation>
                                <p
                                    className="text-sm sm:text-base font-semibold tracking-[0.02em] uppercase text-[#C8912A] opacity-0 animate-hero-reveal"
                                    style={{ animationDelay: "450ms" }}
                                >
                                    DATA LOCALIZATION AUDIT
                                </p>

                                <h1 className="mt-6 max-w-[500px] text-[32px] sm:text-[38px] lg:text-[40px] font-semibold leading-[1.4] text-white">
                                    Data Residency. Regulatory Confidence. Secure Infrastructure.
                                </h1>

                                <p
                                    className="mt-7 max-w-[480px] text-sm sm:text-base text-[#D9D9D9] sectionDescription animate-hero-reveal leading-7.5"
                                    style={{ animationDelay: "650ms" }}
                                >
                                    Ensure your data storage and processing align with India's localization requirements. iSecurion audits data residency controls and infrastructure, delivering a System Audit Report (SAR) to support regulatory compliance.
                                </p>

                                <Link href="/company/contact">
                                    <button
                                        type="button"
                                        className="mt-10 inline-flex min-h-[54px] max-w-full items-center justify-center gap-2 rounded-[10px] bg-white px-5 sm:px-7 py-3 text-sm sm:text-base font-medium text-[#31435C] transition hover:bg-gray-100 cursor-pointer"
                                    >
                                        <span>Request a Free Data Localization Audit</span>
                                        <Icon icon="mdi:arrow-right" width={20} />
                                    </button>
                                </Link>
                            </Animation>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full  py-14  bg-[#060D1B]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 overflow-hidden">
                    {/* heading  */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
                        <LeftAnimation>
                            <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#C8912A]">
                                    UNDERSTANDING DATA LOCALIZATION
                                </p>
                                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                                    Where Data Resides Matters.
                                </h2>
                            </div>
                        </LeftAnimation>
                        <RightAnimation>
                            <div className="w-full text-center lg:text-left">
                                <Animation>
                                    <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[560px]">
                                        Data localization governs where sensitive information is stored, processed and managed. As regulatory requirements evolve across
                                        financial services, identity systems and other regulated sectors, organisations must demonstrate greater accountability over data
                                        residency, access, storage and processing.
                                    </p>
                                </Animation>
                            </div>
                        </RightAnimation>
                    </div>

                </div>
            </section>

            <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
                <Animation>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
                        <div className="max-w-4xl space-y-4 text-center lg:text-left">
                            <p className="text-sm sm:text-base font-semibold text-[#C8912A] uppercase">
                                Why Data Localization Matters
                            </p>
                            <WordReveal text="Beyond Data Storage. Towards Data Sovereignty." className="text-[#FFFFFF] max-w-[600px]">

                            </WordReveal>
                            <Animation>
                                <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] animate-hero-reveal" style={{ animationDelay: "900ms" }}>
                                    Data localization requirements extend beyond the physical location of servers. They influence data governance, regulatory accountability, operational oversight and
                                    how organisations manage sensitive information across their technology environments.
                                </p>
                            </Animation>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {OurServices.map((item, index) => (
                                    <AnimatedCard
                                        delay={index * 0.2}
                                        key={index}
                                        className={`relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F] py-8  }`}
                                    >
                                        <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#C8912A]"></div>
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF] animate-hero-reveal" style={{ animationDelay: "1000ms" }}>
                                                {item.heading}
                                            </h3>
                                        </div>
                                        <p className="mt-4 text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[338px] animate-hero-reveal h-[80px]" style={{ animationDelay: "1300ms" }}>
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
                            <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#C8912A] uppercase">
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
                                className={`col-start-2 min-w-0 w-full sm:col-start-1 sm:row-start-1 ${item.side === "left"
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
                                className={`min-w-0 w-full sm:col-start-3 sm:row-start-1 ${item.side === "right"
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

        </div>
    )
}

export default page