import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import smartcontractsecurity from "../../../assets/services/SmartContractSecurity.png";
import {
  Animation,
  AnimatedCard,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";
import MethodologySection from "../../../components/sections/MethodologySection";

const cards = [
  {
    icon: "iconmind:hazard-outline-regular",
    iconBg: "#022D6C",
    title: "Risk Mitigation",
    description:
      "Identify vulnerabilities early and reduce potential security and financial risks.",
  },
  {
    icon: "fa-solid:shield-alt",
    iconBg: "#3B9E6A",
    title: "User Fund Protection",
    description:
      "Strengthen smart contract security to help protect user assets and transactions.",
  },
  {
    icon: "akar-icons:people-group",
    iconBg: "#E24B4A",
    title: "Trust & Reputation",
    description:
      "Build greater confidence in your blockchain platform through stronger security.",
  },
  {
    icon: "fluent:arrow-trending-lines-24-filled",
    iconBg: "#0F66EA",
    title: "Regulatory Readiness",
    description:
      "Support compliance requirements with a more secure and well-assessed contract.",
  },
  {
    icon: "iconmind:compliance-outline-regular",
    iconBg: "#C8912A",
    title: "Contract Reliability",
    description:
      "Validate smart contract functionality and ensure critical operations work as intended.",
  },
  {
    icon: "bx:lock",
    iconBg: "#959EFE",
    title: "Early & Future Protection",
    description:
      "Detect issues early and strengthen contracts against evolving security threats.",
  },
];

const auditSteps = [
  {
    number: "01",
    title: "Smart Contract Code",
    description: "Review the Source.",
    hasArrow: true,
  },
  {
    number: "02",
    title: "Functionality",
    description: "Validate the Logic.",
    hasArrow: true,
  },
  {
    number: "03",
    title: "Vulnerability Analysis",
    description: "Find Security Gaps.",
    hasArrow: true,
  },
  {
    number: "04",
    title: "Security Validation",
    description: "Test the Controls.",
    hasArrow: true,
  },
  {
    number: "05",
    title: "Remediation",
    description: "Strengthen the Contract.",
    hasArrow: false,
  },
];

const auditCards = [
  {
    icon: "lucide:shrink",
    title: "Contract & Transaction Logic",
    description:
      "Verify contract behavior and assess critical transaction operations.",
  },
  {
    icon: "lucide:file-code-2",
    title: "Code Security",
    description:
      "Identify potential vulnerabilities, weaknesses, and insecure implementation patterns.",
  },
  {
    icon: "lucide:vault",
    title: "User Fund Protection",
    description:
      "Identify risks that could compromise user assets or unauthorized transactions.",
  },
  {
    icon: "lucide:file-text",
    title: "Security Controls",
    description:
      "Evaluate protections and control mechanisms against potential attacks.",
  },
];

const governanceCards = [
  {
    icon: "famicons:contract",
    title: "Contract & Transaction Logic",
    description:
      "Verify contract behavior and assess critical transaction operations.",
  },
  {
    icon: "boxicons:clipboard-code",
    title: "Code Security",
    description:
      "Identify potential vulnerabilities, weaknesses, and insecure implementation patterns.",
  },
  {
    icon: "iconmind:fund-outline-regular",
    title: "User Fund Protection",
    description:
      "Identify risks that could compromise user assets or unauthorized transactions.",
  },
  {
    icon: "mingcute:file-security-line",
    title: "Security Controls",
    description:
      "Evaluate protections and control mechanisms against potential attacks.",
  },
];

const smartContractSteps = [
  {
    title: "Understand & Scope",
    description:
      "Understand the business logic, contract purpose, architecture, and security requirements.",
    icon: <Icon icon="fluent:search-16-filled" />,
  },
  {
    title: "Review the Code",
    description:
      "Perform detailed smart contract code review and peer review to identify implementation weaknesses.",
    icon: <Icon icon="boxicons:code-alt" />,
  },
  {
    title: "Analyze the Contract",
    description:
      "Combine static analysis, dynamic analysis, and gas analysis to identify potential vulnerabilities and inefficient logic.",
    icon: <Icon icon="boxicons:vector-square" />,
  },
  {
    title: "Validate Security Controls",
    description:
      "Assess permissions, access controls, token standards, and external dependencies for security gaps.",
    icon: <Icon icon="boxicons:check-shield" />,
  },
  {
    title: "Audit & Document",
    description:
      "Review audit documentation, consolidate findings, and provide clear security recommendations.",
    icon: <Icon icon="iconmind:compliance-outline-regular" />,
  },
  {
    title: "Monitor & Re-Audit",
    description:
      "Support continuous monitoring and re-audit contracts after significant code or functionality changes.",
    icon: <Icon icon="iconmind:compliance-outline-regular" />,
  },
];

function SmartContractSecurity() {
  return (
    <div>
      <section className="relative w-full min-h-[560px] py-14 flex items-center">
        <div className="absolute inset-0">
          <Image
            src={smartcontractsecurity}
            alt="Smart contract security"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex">
          <Animation>
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                Smart Contract Security Audit
              </p>
              <h1 className="font-semibold leading-[32px] md:leading-[50px] lg:leading-[55px] text-[#FFFFFF] max-w-[600px]">
                Secure your smart contracts before vulnerabilities become
                financial risks.
              </h1>
              <p className="text-base sm:text-lg text-[#D9D9D9] max-w-[500px]">
                ISECURION audits smart contracts to identify vulnerabilities,
                validate functionality, and strengthen security across
                blockchain ecosystems.
              </p>
              <button className="mt-8 text-[15px] font-medium px-4 py-3 flex items-center gap-2 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF]">
                Secure Your Smart Contract{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>{" "}
              </button>
            </div>
          </Animation>

          <div className="hidden lg:block flex-1"></div>
        </div>
      </section>

      <section className="bg-[#050B18] ">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
          {/* Section Content */}

          <div className="text-center md:text-left">
            <Animation>
              <p className="text-[14px] font-medium uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px]">
                WHY SMART CONTRACT SECURITY?
              </p>
              <h2 className="mt-3 text-2xl font-normal sm:leading-[50px] text-white sm:text-3xl lg:text-[38px]">
                Protect the code behind <br /> your digital assets.
              </h2>

              <p className="mt-6 max-w-[480px] text-sm leading-6.5 text-[#D1D1D1] sm:text-base ">
                Smart contracts directly control critical blockchain operations
                and can introduce significant financial and security risks when
                vulnerabilities go undetected.
              </p>
            </Animation>
          </div>

          {/* We Assess */}
          <Animation>
            <div className="mt-5">
              <p className="text-sm font-medium text-[#D1D1D1]">
                A security audit helps you:
              </p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Reduce Financial Risk
                </li>

                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Protect User Funds
                </li>

                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Build Trust
                </li>

                <li className="flex items-center gap-2 text-xs text-[#D1D1D1] sm:text-[14px]">
                  <Icon
                    icon="boxicons:seal-check"
                    className="mt-0.5 shrink-0 text-[20px] text-[#0F66EA]"
                  />
                  Strengthen Compliance
                </li>
              </ul>
            </div>
          </Animation>

          <div className="max-w-7xl mx-auto py-18 ">
            {/* HEADER SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT HEADING */}

              <div className="lg:col-span-7 text-center md:text-left">
                <LeftAnimation>
                  <p className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.2px] text-[#0F66EA]">
                    WHAT WE AUDIT
                  </p>

                  <p className="mt-4 text-[32px] sm:text-[38px] lg:text-[40px]  leading-[1.4] tracking-[-0.02em] text-white">
                    Test every layer of your <br className="hidden sm:inline" />
                    smart contract.
                  </p>
                </LeftAnimation>
              </div>

              {/* RIGHT SUB-TEXT */}

              <div className="lg:col-span-5 lg:pt-9">
                <RightAnimation>
                  <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#D1D1D1] max-w-[430px]">
                    We analyze your smart contracts from code to risk, ensuring
                    they are secure, reliable, and ready for real-world use.
                  </p>
                </RightAnimation>
              </div>
            </div>

            {/* 5-STEP PROCESS GRID */}
            <Animation>
              <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
                {auditSteps.map((step, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.2}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* STEP NUMBER & ARROW */}
                      <div className="flex items-center gap-3 text-[#0F66EA] text-[18px] font-semibold">
                        <span>{step.number}</span>
                        {step.hasArrow && (
                          <Icon
                            icon="lucide:arrow-right"
                            className="h-4 w-4 text-[#0F66EA]"
                          />
                        )}
                      </div>

                      {/* TITLE WITH FIXED MIN-HEIGHT TO ALIGN DESCRIPTIONS */}
                      <h3 className="mt-4 text-[14px] sm:text-[15px] leading-[1.7] text-[#F5F0E8] min-h-[46px] flex items-start max-w-[130px]">
                        {step.title}
                      </h3>

                      {/* DESCRIPTION (NOW PERFECTLY ALIGNED HORIZONTALLY) */}
                      <p className="mt-2 text-[11px] leading-relaxed text-[#D1D1D1]">
                        {step.description}
                      </p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </Animation>

            <Animation>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

                    <p className="mt-4 text-[12px] text-[#D1D1D1D6] max-w-[250px] leading-6">
                      {card.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </Animation>
          </div>

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

                    <p className="mt-2 text-[12px] leading-relaxed text-[#D1D1D1] sm:text-[13px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Animation>
            ))}
          </div>
        </div>
      </section>

      <MethodologySection
        title="Our Smart Contract Security Audit Methodology"
        steps={smartContractSteps}
        centerTitle={["Smart Contract ", "Security Audit"]}
        tagline={[
          "Review every layer.",
          "Validate every contract.",
          "Secure every transaction.",
        ]}
      />
    </div>
  );
}

export default SmartContractSecurity;
