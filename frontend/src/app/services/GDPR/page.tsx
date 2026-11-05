import React from "react";
import {
  Animation,
  AnimatedCard,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";
import { Icon } from "@iconify/react";
import heroBackground from "../../../assets/services/GDPR_bg.svg";
import Image from "next/image";
import dots from "../../../assets/services/Dots.png";
import FAQSection from "../../../components/sections/FAQSection";

const whatWeTest = [
  {
    Icon: "icon-park-outline:api-app",
    title: "Application & API Security",
    list: [
      "SQL Injection",
      "XSS",
      "CSRF",
      "Authentication",
      "Authorization",
      "Data Integrity",
    ],
  },
  {
    Icon: "icon-park-outline:database-network-point",
    title: "Network Security",
    list: ["Infrastructure", "Firewalls", "IDS/IPS", "Network Controls"],
  },
  {
    Icon: "akar-icons:wallet",
    title: "Wallet & Transaction Security",
    list: [
      "Wallet Access",
      "Transactions",
      "Withdrawal Controls",
      "Transaction Integrity",
    ],
  },
  {
    Icon: "material-symbols:business-messages-outline-rounded",
    title: "Business Logic",
    list: [
      "Balances",
      "Payment History",
      "Trading Workflows",
      "Transaction Limits",
      "Authorization Controls",
    ],
  },
];

const services = [
  {
    heading: "Lawful Processing",
    description:
      "Establish appropriate legal grounds and transparent practices for handling personal data.",
    Icon: "codicon:law",
    bgColor: "#0F66EA",
  },
  {
    heading: "Data Minimisation",
    description:
      "Collect and process only the personal data necessary for defined purposes.",
    Icon: "akar-icons:data",
    bgColor: "#C8912A",
  },
  {
    heading: "Individual Rights",
    description:
      "Create processes to handle access, correction, erasure, and other applicable data subject requests.",
    Icon: "academicons:closed-access",
    bgColor: "#3B9E6A",
  },
  {
    heading: "Accountability",
    description:
      "Maintain documented policies, records, and evidence of data protection practices.",
    Icon: "charm:clipboard-tick",
    bgColor: "#7D70F0",
  },
];

const whoNeeds = [
  {
    heading: "Businesses Processing EU Personal Data",
    description:
      "Organisations handling personal data relating to EU-based customers, employees, or suppliers.",
  },
  {
    heading: "Organisations Using Third-Party Processors",
    description:
      "Businesses relying on cloud providers or external service providers that store or process EU personal data.",
  },
  {
    heading: "Businesses Serving EU Markets",
    description:
      "Organisations expanding into EU markets, transferring personal data across borders, or using marketing to target people in the EU.",
  },
];

const benefits = [
  {
    title: "Reduce Legal and Financial Risk",
    description:
      "Identify compliance gaps and prioritise corrective actions before they lead to enforcement issues.",
  },
  {
    title: "Strengthen Customer Trust",
    description:
      "Demonstrate a structured approach to personal data protection during customer and vendor assessments.",
  },
  {
    title: "Improve Data Governance",
    description:
      "Build clearer visibility into personal data inventories, retention practices, and Records of Processing Activities (RoPA).",
  },
  {
    title: "Improve Operational Efficiency",
    description:
      "Identify redundant data flows and review the lawful bases used for processing personal data.",
  },
  {
    title: "Cross-Border Readiness",
    description:
      "Ensure lawful transfers via SCCs, Binding Corporate Rules (BCRs) or adequacy mechanisms.",
  },
  {
    title: "Improve Breach Preparedness",
    description:
      "Identify weaknesses in incident response processes and assess readiness against applicable GDPR notification obligations.",
  },
];

const gdprFAQs = [
  {
    question: "What exactly is a GDPR compliance audit?",
    answer:
      "A GDPR compliance audit examines how your organisation collects, stores, processes and shares personal data to determine whether you meet GDPR requirements. It includes technical checks, policy reviews, privacy process assessments and evidence collection to demonstrate compliance.",
  },
  {
    question: "Does GDPR apply to Indian companies?",
    answer:
      "Yes — GDPR applies to any organisation, regardless of location, that processes personal data of EU residents or offers goods/services to them (e.g. a website selling to EU customers or targeted advertising aimed at EU citizens).",
  },
  {
    question: "What penalties can organisations face for GDPR violations?",
    answer:
      "Supervisory authorities can impose fines up to €20 million or 4% of worldwide annual turnover (whichever is higher). Other measures include orders to stop processing and reputational damage from public enforcement actions.",
  },
  {
    question: "How long does a GDPR audit take?",
    answer:
      "Smaller organisations can complete a basic audit in 2–4 weeks. Medium and large enterprises often take 4–12 weeks depending on complexity, third-party involvement and the pace of evidence collection.",
  },
  {
    question: "What documents and information will you need from us?",
    answer:
      "Typical inputs: privacy policies, data processing agreements, system inventories, prior incident logs, consent records, DPIAs (if available), data transfer agreements (SCCs/BCRs) and a list of third-party processors and sub-processors.",
  },
  {
    question: "Will you perform technical testing as part of the audit?",
    answer:
      "Yes — we perform technical validation (configuration reviews, access control checks, secure defaults) and can integrate full VAPT/penetration testing for systems in scope in partnership with our technical services team.",
  },
  {
    question: "What is RoPA and why is it important?",
    answer:
      "RoPA (Record of Processing Activities) documents what personal data you process, for what purpose, and who has access. It's a core GDPR requirement for many organisations and is often requested during regulatory reviews.",
  },
  {
    question: "How do we handle cross-border transfers?",
    answer:
      "Cross-border transfers require a lawful mechanism such as Adequacy, Standard Contractual Clauses (SCCs) or Binding Corporate Rules (BCRs). We assess your transfer mechanisms and recommend compliant options for your business model.",
  },
  {
    question: "Can GDPR work be combined with ISO 27001?",
    answer:
      "Absolutely. GDPR and ISO 27001 share many control objectives. Combining efforts reduces duplicated work — policy updates, risk assessments and security controls often serve both frameworks.",
  },
  {
    question: "Is GDPR compliance a one-time activity?",
    answer:
      "No — GDPR compliance is ongoing. Regular audits, continuous monitoring, vendor reviews and periodic updates to privacy notices and DPIAs are recommended as business processes and systems evolve.",
  },
];

const gdprSteps = [
  {
    number: "01",
    step: "Step 01",
    title: "Set the Scene",
    description:
      "Review relevant GDPR requirements, identify priority compliance areas, allocate resources, and establish internal governance procedures.",
    side: "left",
  },
  {
    number: "02",
    step: "Step 02",
    title: "Investigate",
    description:
      "Examine data collection & processing activities, identify existing compliance measures, & assess the organisation's current compliance level.",
    side: "right",
  },
  {
    number: "03",
    step: "Step 03",
    title: "Reinvestigate",
    description:
      "Review collected information and evidence, conduct a gap analysis against applicable GDPR requirements, and develop a compliance roadmap.",
    side: "left",
  },
  {
    number: "04",
    step: "Step 04",
    title: "Plan and Implement",
    description:
      "Implement relevant policies, procedures, and processes, address required technical changes, assign responsibilities, provide staff training, and review relevant contracts and consent mechanisms.",
    side: "right",
  },
  {
    number: "05",
    step: "Step 05",
    title: "Carry Out Due Diligence",
    description:
      "Review implementation evidence, verify remediation progress, and reassess outstanding compliance gaps to evaluate the effectiveness of corrective actions.",
    side: "left",
  },
  {
    number: "06",
    step: "Step 06",
    title: "Monitor and Maintain",
    description:
      "Monitor compliance measures and regulatory changes, periodically review policies and controls, maintain relevant records, and support continual improvement.",
    side: "right",
  },
];

function page() {
  return (
    <div>
      <section className="relative w-full min-h-[560px] py-14 flex items-center">
        <div className="absolute inset-0">
          <Image
            src={heroBackground}
            alt="Smart contract security"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex">
          <Animation>
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#C8912A]">
                GDPR COMPLIANCE & PRIVACY AUDIT
              </p>
              <h1 className="font-semibold leading-[32px] md:leading-[50px] lg:leading-[55px] text-[#FFFFFF] max-w-[600px]">
                GDPR Compliance Audit & Readiness Services
              </h1>
              <p className="text-base sm:text-lg text-[#D9D9D9] max-w-[540px]">
                Identify privacy gaps, assess data protection risks, and
                establish practical controls to align your business with GDPR
                requirements.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                {[
                  "GDPR Gap Assessment",
                  "Data Mapping & Privacy Reviews",
                  "Risk-Based Remediation",
                  "Ongoing Compliance Support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start justify-center lg:justify-start gap-3 text-sm sm:text-base font-normal tracking-[0.04em] leading-4.5 text-[#D1D1D1]"
                  >
                    <span className="mt-[5px] h-[6px] w-[6px] shrink-0 bg-[#C8912A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[15px] font-medium text-[#31435C] transition-all duration-200 hover:bg-gray-100 shadow-lg">
                  <span>Request GDPR Audit </span>
                  <Icon icon="lucide:arrow-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Animation>

          <div className="hidden lg:block flex-1"></div>
        </div>
      </section>

      <section className="w-full pt-4 pb-14  bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 overflow-hidden">
          {/* heading  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="mt-4 sm:mt-0 text-sm sm:text-base font-semibold text-[#C8912A]">
                  UNDERSTANDING GDPR
                </p>
                <h2 className=" text-[#FEFEFE] lg:max-w-[418px]">
                  Make Data Privacy Part of Your Business
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full lg:mt-15 text-center lg:text-left">
                <p className="text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[550px]">
                  The General Data Protection Regulation (GDPR) governs how
                  organisations collect, process, store, and share personal data
                  within its scope. It can also apply to organisations outside
                  the EU that offer goods or services to individuals in the EU
                  or monitor their behaviour.
                </p>
                <p className="mt-6 text-base sm:text-[17px] font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[550px]">
                  ISECURION helps organisations assess privacy practices,
                  identify compliance gaps, strengthen data protection controls,
                  and build a structured approach to GDPR readiness.
                </p>
              </div>
            </RightAnimation>
          </div>

          <div className="mt-20">
            <Animation>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((item, index) => (
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
                    <p className="text-sm font-normal leading-[22px] text-[#D1D1D1D6]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Animation>
          </div>
        </div>
      </section>

      <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
        <Animation>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
            <div className="space-y-3 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#C8912A] uppercase">
                Who Needs a GDPR Audit?
              </p>
              <h2 className="text-[#FFFFFF] lg:max-w-[561px]">
                Does Your Business Fall Within GDPR’s Scope?
              </h2>
              <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] lg:max-w-[847px]">
                GDPR may apply to organisations based outside the EU when their
                processing activities fall within its territorial scope.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whoNeeds.map((item, index) => (
                  <AnimatedCard
                    delay={index * 0.15}
                    key={index}
                    className="relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F]"
                  >
                    <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#C8912A]"></div>
                    <div className="flex items-center justify-between gap-10">
                      <h3 className="text-base sm:text-lg text-[#FFFFFF] max-w-[260px]">
                        {item.heading}
                      </h3>
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

      <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#181E29] to-[#090B21] py-14 sm:py-16 lg:py-20">
        {/* Dotted background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src={dots}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium tracking-wide text-[#C8912A] sm:text-sm">
              BENEFITS OF A GDPR COMPLIANCE AUDIT
            </p>

            <h2 className="mt-3 text-2xl font-medium leading-tight text-[#FEFEFE] sm:text-3xl md:text-4xl lg:text-[38px] lg:leading-[1.3]">
              The Value of a GDPR Compliance Audit
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm font-normal leading-6 text-[#D1D1D1] sm:text-base sm:leading-7">
              Discover how GDPR compliance helps protect personal data,
              strengthen data governance, reduce regulatory risks, and build
              customer confidence.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
            {benefits.map((item, index) => (
              <AnimatedCard
                key={item.title}
                delay={index * 0.1}
                className="min-w-0"
              >
                <div className="mb-3 h-[7px] w-[50px] rounded-full bg-gradient-to-r from-[#C8912A] to-[#6D758F]" />

                <h3 className="text-base font-medium leading-6 text-[#FEFEFE] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-[23px] text-[#D1D1D1] sm:text-base sm:leading-[24px] max-w-[315px]">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.08em] text-[#C8912A]">
              COMPLIANCE JOURNEY
            </p>

            <h2 className="mx-auto mt-3 max-w-[840px] leading-[1.3] text-[#FEFEFE]">
              Our GDPR Audit Methodology — Practical &amp; Actionable
            </h2>

            <p className="mx-auto mt-3 max-w-4xl text-xs font-normal leading-[19px] text-[#D1D1D1] sm:text-[17px] sm:leading-[28px]">
              ISECURION follows an evidence-based approach to assess GDPR
              compliance, identify gaps, implement improvements, and support
              ongoing privacy management.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 lg:mt-14">
            {/* Center line on tablet/desktop; left-side line on mobile */}
            <div className="absolute bottom-5 left-[14px] top-1 w-px bg-gradient-to-b from-[#C8912A] via-[#8E762F] to-[#263343] sm:left-1/2 sm:-translate-x-1/2" />

            <div className="relative space-y-8 sm:space-y-8 lg:space-y-9">
              {gdprSteps.map((item, index) => (
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
                        <p className="mt-3 sm:mt-5 w-full max-w-[455px] break-words text-sm font-normal leading-[21px] text-[#D1D1D1] sm:text-[15px] sm:leading-[24px]">
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

      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            GDPR Compliance Audit
          </>
        }
        description="Find answers to common questions about GDPR compliance, audit processes, regulatory requirements, and how ISECURION can help strengthen your data protection practices."
        faqs={gdprFAQs}
      />
    </div>
  );
}

export default page;
