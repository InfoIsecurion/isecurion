"use client";
import React from "react";
import webHeroBackground from "../../../assets/services/webHeroBackground.png";
import webAssessment from "../../../assets/services/webAssessment.png";
import methodologySettings from "../../../assets/services/methodologySettings.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import FAQSection from "../../../components/sections/FAQSection";
import { Animation } from "../../../components/ui/Animation";
import { motion } from "framer-motion";
import MethodologySection from "../../../components/sections/MethodologySection";

const assessmentCards = [
  {
    icon: "fa-solid:shield-alt",
    iconBg: "#022D6C",
    title: "Proactive Vulnerability Detection",
    description:
      "Identify security gaps before they can be exploited by attackers, ensuring robust application protection.",
  },
  {
    icon: "fluent-emoji-high-contrast:eye-in-speech-bubble",
    iconBg: "#3B9E6A",
    title: "Real-World Threat Insights",
    description:
      "Gain visibility into hacker techniques, motivations, and emerging threats affecting web applications.",
  },
  {
    icon: "icon-park-solid:lock",
    iconBg: "#E24B4A",
    title: "Compliance & Risk Management",
    description:
      "Ensure your web applications meet ISO 27001, HIPAA, and PCI DSS compliance requirements.",
  },
  {
    icon: "pepicons-pop:handshake",
    iconBg: "#0F66EA",
    title: "Customer Trust & Confidence",
    description:
      "Enhance user confidence by demonstrating commitment to data security and proactive risk management.",
  },
  {
    icon: "material-symbols:settings-b-roll-rounded",
    iconBg: "#C8912A",
    title: "Reduced Downtime",
    description:
      "Prevent application outages and improve business productivity by identifying vulnerabilities early.",
  },
  {
    icon: "boxicons:law-filled",
    iconBg: "#959EFE",
    title: "Legal & Regulatory Protection",
    description:
      "Minimize legal risks and compliance failures with regular, thorough security assessments.",
  },
];

const webApplicationFAQs = [
  {
    question: "What is a Web Application Security Assessment?",
    answer:
      "A Web Application Security Assessment evaluates your web application for vulnerabilities, security misconfigurations, and compliance gaps to protect user data and business operations.",
  },
  {
    question: "Why is web application security important?",
    answer:
      "Web applications are prime targets for cyberattacks. Security assessments prevent data breaches, protect customer information, and reduce business risks.",
  },
  {
    question: "How often should web applications be tested?",
    answer:
      "Web applications should be tested regularly—at least once a year, or after major updates or feature releases—to ensure ongoing protection against vulnerabilities.",
  },
  {
    question: "What types of vulnerabilities are tested?",
    answer:
      "Our assessment covers authentication, authorization, session management, input validation, SQL injection, XSS, business logic flaws, and other common and advanced vulnerabilities.",
  },
  {
    question: "Who conducts the assessment?",
    answer:
      "Our assessments are conducted by experienced security professionals certified by industry standards and empanelled with CERT-IN, ensuring reliable and thorough testing.The assessment is conducted by security professionals using a combination of automated security tools, manual testing techniques, and expert-led analysis.",
  },
  {
    question: "What deliverables do I receive?",
    answer:
      "You receive a detailed report including prioritized vulnerabilities, root cause analysis, recommended fixes, and actionable guidance to improve overall application security.",
  },
  {
    question: "How long does the assessment take?",
    answer:
      "The duration depends on the application’s size and complexity, typically ranging from 1-3 weeks for medium-sized applications.",
  },
  {
    question: "Is testing disruptive to live applications?",
    answer:
      "Our assessments are designed to minimize disruption. Testing is performed carefully to avoid downtime while simulating real-world attack scenarios.",
  },
  {
    question: "How do you ensure compliance standards are met?",
    answer:
      "Our methodology aligns with OWASP, SANS, and industry standards to ensure your web application meets compliance and regulatory requirements.",
  },
  {
    question: "How can I get started with a security assessment?",
    answer:
      "You can get started by contacting ISECURION via our Contact Us page to schedule a free consultation and initiate the assessment process.",
  },
];

const webAssessmentSteps = [
  {
    title: "Discovery",
    description:
      "Understand your application, business objectives, and key risk areas.",
    icon: <Icon icon="fluent:search-16-filled" />,
  },
  {
    title: "Threat Modeling",
    description:
      "Identify potential threats and attack vectors based on application design and business logic.",
    icon: <Icon icon="grommet-icons:document-threat" />,
  },
  {
    title: "Security Assessment",
    description:
      "Evaluate critical areas such as authentication, authorization, input validation and business logic.",
    icon: <Icon icon="iconmind:book-review-outline-regular" />,
  },
  {
    title: "Penetration Testing",
    description:
      "Simulate real-world attacks to test your application's defenses and identify potential exploits.",
    icon: <Icon icon="fe:target" />,
  },
  {
    title: "Remediation Guidance",
    description:
      "Provide actionable remediation guidance to fix vulnerabilities, strengthen security, and support compliance.",
    icon: <Icon icon="ic:outline-tips-and-updates" />,
  },
  {
    title: "Reporting & Deliverables",
    description:
      "Deliver a comprehensive report with prioritized findings and clear mitigation steps.",
    icon: <Icon icon="pajamas:review-checkmark" />,
  },
];

function page() {
  return (
    <main className="bg-black">
      {/* Hero Section */}

      <section className="px-0">
        <div
          className="relative mx-auto h-auto bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${webHeroBackground.src})`,
          }}
        >
          <div className="relative mx-auto z-10  max-w-7xl flex min-h-[424px] items-center px-6 py-16 sm:px-10 lg:px-12">
            <div className="w-full lg:w-[58%] text-center md:text-left">
              <Animation>
                <h1 className="max-w-[700px] font-semibold leading-[1.3] text-white">
                  Web Application Security Assessment
                </h1>

                <p className="mt-4 max-w-[620px] text-base text-[#D9D9D9] sm:leading-8 sm:text-lg ">
                  Identify vulnerabilities, uncover real-world attack risks, and
                  protect your web applications with expert-led security
                  assessments.
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex h-[54px] items-center justify-center rounded-[10px] bg-white px-7 text-sm sm:text-[16px] font-medium text-[#31435C] transition hover:bg-gray-100"
                >
                  Schedule a Consultation{""}
                  <span className="ml-2">
                    <Icon icon="mdi:arrow-right" width={20} />
                  </span>
                </button>
              </Animation>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050C1A]">
        <Animation>
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-16">
            {/* Heading */}
            <h2 className="text-2xl font-normal leading-8 sm:leading-12 text-white sm:text-[34px] lg:text-[38px] text-center md:text-left">
              What is Web Application Security Assessment?
            </h2>

            {/* Introduction */}
            <p className="mt-7 max-w-[540px] text:sm leading-6 text-[#D1D1D1] sm:text-base text-center md:text-left">
              Web Application Security Assessment is a systematic evaluation of
              a web application to identify, validate, and assess security
              vulnerabilities that attackers could exploit.
            </p>

            {/* Information Points */}
            <div className="mt-5 max-w-[720px] space-y-4">
              {/* Point 1 */}
              <div className="flex items-start gap-3">
                <Icon
                  icon="boxicons:seal-check"
                  className="mt-0.5 shrink-0 text-[15px] text-[#0F66EA]"
                />

                <p className="text-xs leading-5.5 text-[#D1D1D1] sm:text-sm max-w-[480px]">
                  At ISECURION, we combine automated testing with expert-led
                  manual assessment to uncover security weaknesses that could be
                  exploited to gain unauthorized access, expose sensitive data,
                  manipulate application functionality, or disrupt critical
                  services.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3">
                <Icon
                  icon="boxicons:seal-check"
                  className="mt-0.5 shrink-0 text-[15px] text-[#0F66EA]"
                />

                <p className="text-xs leading-5.5 text-white/70 sm:text-sm max-w-[470px]">
                  Our assessments help organizations identify exploitable risks,
                  strengthen application security, and build resilience against
                  evolving web-based threats.
                </p>
              </div>
            </div>

            <Animation>
              <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
                <Image
                  src={webAssessment}
                  alt="Web application security assessment process"
                  priority
                  className="h-auto w-full max-w-[1050px]"
                />
              </div>
            </Animation>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {assessmentCards.map((card, index) => (
                <Animation key={card.title} delay={index * 0.12}>
                  <motion.div className="min-h-[155px] rounded-[15px] border border-[#002C8C] bg-gradient-to-b from-[#0A1119] to-[#17366E] p-4 sm:min-h-[235px] sm:p-5">
                    {/* Icon */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      <Icon
                        icon={card.icon}
                        className="text-[20px] text-white"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-[14px] font-semibold text-white lg:text-[15px] xl:text-[18px]">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 max-w-[299px] text-sm leading-6 text-[#D1D1D1] sm:text-[14px] sm:leading-[23px]">
                      {card.description}
                    </p>
                  </motion.div>
                </Animation>
              ))}
            </div>
          </div>
        </Animation>
      </section>

      <section className="">
        <div className="relative overflow-hidden bg-[linear-gradient(110deg,#050B18_0%,#071321_48%,#06383C_90%)]">
          <div className="pointer-events-none absolute right-0 top-0">
            <Image src={methodologySettings} alt="" className="" />
          </div>

          <Animation>
            {/* Methodology Heading */}
            <div className="relative mx-auto max-w-7xl px-6 pt-16 text-center sm:px-10 lg:px-12 lg:pt-20">
              <div className="pointer-events-none absolute right-0 top-0 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px]" />

              <h2 className="relative text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-[36px]">
                Our Security Assessment Methodology
              </h2>

              <p className="relative mx-auto mt-5 max-w-[850px] text-sm leading-6 text-white/70 sm:text-base">
                At ISECURION, we combine{" "}
                <span className="font-medium text-white">
                  OWASP-aligned testing
                </span>
                ,{" "}
                <span className="font-medium text-white">automated tools</span>,
                and{" "}
                <span className="font-medium text-white">
                  expert-led manual assessment
                </span>{" "}
                to uncover and validate web application security risks.
              </p>
            </div>
          </Animation>

          <Animation>
            <MethodologySection
              embedded
              steps={webAssessmentSteps}
              centerTitle={["WEB APPLICATION", "SECURITY ASSESSMENT"]}
              tagline={["A STRONGER", "APPLICATION TOMORROW"]}
            />
          </Animation>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions - Web
            <br className="hidden sm:block" />
            Application Security Assessment
          </>
        }
        description="Common questions from organizations across Bangalore, Mumbai, Hyderabad, Kolkata, Ahmedabad, Noida, and globally."
        faqs={webApplicationFAQs}
      />
    </main>
  );
}

export default page;
