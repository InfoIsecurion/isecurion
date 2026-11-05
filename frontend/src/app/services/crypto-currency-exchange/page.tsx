import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import cryptocurrencyexchange from "../../../assets/services/cryptocurrencyexchange.png";
import {
  AnimatedCard,
  Animation,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";

const cryptoKeyFocusArea = [
  "Reduce Security Risks",
  "Protect User & Transaction Data",
  "Strengthen Security Controls",
  "Improve Security Readiness",
];

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

const securityBenefits = [
  {
    Icon: "fa-solid:shield-alt",
    title: "Risk Mitigation",
    description:
      "Identify vulnerabilities early and reduce potential security and financial risks.",
    bgColor: "#022D6C",
  },
  {
    Icon: "iconmind:compliance-outline-regular",
    title: "User Fund Protection",
    description:
      "Strengthen smart contract security to help protect user assets and transactions.",
    bgColor: "#3B9E6A",
  },
  {
    Icon: "iconmind:hazard-outline-regular",
    title: "Trust & Reputation",
    description:
      "Build greater confidence in your blockchain platform through stronger security.",
    bgColor: "#E24B4A",
  },
  {
    Icon: "ic:outline-policy",
    title: "Regulatory Readiness",
    description:
      "Support compliance requirements with a more secure and well-assessed contract.",
    bgColor: "#0F66EA",
  },
  {
    Icon: "keyline-icons:graduation-cap",
    title: "Contract Reliability",
    description:
      "Validate smart contract functionality and ensure critical operations work as intended.",
    bgColor: "#C8912A",
  },
  {
    Icon: "bx:lock",
    title: "Early & Future Protection",
    description:
      "Detect issues early and strengthen contracts against evolving security threats.",
    bgColor: "#959EFE",
  },
];

const STEPS = [
  {
    no: "01",
    title: "Scope Definition",
    icon: "fluent:search-16-filled",
    desc: "Define Scope, Authorization, Legal & Compliance Requirements.",
  },
  {
    no: "02",
    title: "Reconnaissance",
    icon: "material-symbols:bring-your-own-ip-rounded",
    desc: "We map your public-facing domains, IPs, and architecture, then rank likely attack vectors by impact and likelihood.",
  },
  {
    no: "03",
    title: "Threat Modeling",
    icon: "boxicons:vector-square",
    desc: " Identify Attack Vectors, Threats, Risks and Priorities.",
  },
  {
    no: "04",
    title: "Web, API & Network Testing",
    icon: "icon-park-outline:api-app",
    desc: "We test web interfaces, APIs, and network defenses for injection, XSS, CSRF, broken authorization, & weak controls.",
  },
  {
    no: "05",
    title: "Crypto-Specific Testing",
    icon: "mdi:currency-btc",
    desc: "We test KYC bypass, 2FA bypass, wallet security, transaction verification, and business logic flaws unique to exchanges.",
  },
  {
    no: "06",
    title: "Reporting & Remediation",
    icon: "pajamas:review-checkmark",
    desc: "We document every finding with its severity and a clear fix, so your team knows exactly what to resolve first.",
  },
];

const DOT_POSITIONS = [
  "left-[17%] top-[12%]",
  "left-[83%] top-[12%]",
  "left-0 top-1/2",
  "left-full top-1/2",
  "left-[17%] top-[88%]",
  "left-[83%] top-[88%]",
];

function CryptoCurrencyExchange() {
  return (
    <div>
      {/* hero section */}
      <section className="relative w-full h-auto min-h-[560px] py-14 flex items-center">
        <div className="absolute inset-0">
          <Image
            src={cryptocurrencyexchange}
            alt="Cryptocurrency exchange security"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex">
          <Animation>
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <p
                className="text-sm sm:text-base uppercase font-semibold sectionheading text-[#0F66EA] opacity-0 animate-hero-reveal"
                style={{ animationDelay: "150ms" }}
              >
                Crypto Currency Exchange Security Assessment
              </p>
              <h1
                className=" text-[#FFFFFF] max-w-[610px] mx-auto lg:mx-0 opacity-0 animate-hero-reveal"
                style={{ animationDelay: "300ms" }}
              >
                Secure your crypto exchange against evolving cyber threats.
              </h1>
              <p
                className="text-base sm:text-lg font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D9D9D9] lg:max-w-[510px] mx-auto lg:mx-0 opacity-0 animate-hero-reveal"
                style={{ animationDelay: "450ms" }}
              >
                ISECURION assesses cryptocurrency exchanges across applications,
                APIs, infrastructure, wallets, and business logic to identify
                vulnerabilities before they can impact users, assets, or
                operations.
              </p>
              <button
                className="text-[15px] font-medium px-4 py-3 flex items-center gap-2 rounded-[10px] mx-auto lg:mx-0 cursor-pointer text-[#31435C] bg-[#FFFFFF] opacity-0 animate-hero-reveal"
                style={{ animationDelay: "600ms" }}
              >
                Secure Your Exchange{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>{" "}
              </button>
            </div>
          </Animation>
          <div className="hidden lg:block flex-1"></div>
        </div>
      </section>
      {/* WHY CRYPTO EXCHANGE SECURITY MATTERS  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="space-y-5">
            <Animation>
              <div className="space-y-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold sectionheading text-[#0F66EA] ">
                  WHY CRYPTO EXCHANGE SECURITY MATTERS
                </p>
                <h2 className="text-[#FEFEFE]">
                  Protect the platform. Protect the assets.
                </h2>
                <p className="sectionDescription text-[#D1D1D1]">
                  Cryptocurrency exchanges face evolving threats across their
                  perimeter, internal infrastructure, web applications, APIs,
                  and wallet systems. Regular penetration testing helps identify
                  weaknesses and continuously improve the platform's security
                  posture.
                </p>
              </div>
            </Animation>
            <Animation>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#D1D1D1]">
                  Key Focus Areas:
                </h3>
                <ul className="space-y-2 mt-4">
                  {cryptoKeyFocusArea.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base font-semibold flex items-center gap-2 text-[#D1D1D1]"
                    >
                      <span>
                        <Icon
                          icon="hugeicons:checkmark-badge-02"
                          className="w-[20px] h-[20px] text-[#0F66EA]"
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Animation>
          </div>
        </div>
      </section>
      {/* WHAT WE TEST  */}
      <section className="w-full py-14  bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 overflow-hidden">
          {/* heading  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <LeftAnimation>
              <div className="w-full lg:w-[500px] text-center lg:text-left space-y-4">
                <p className="text-sm sm:text-base font-semibold text-[#0F66EA] sectionheading">
                  WHAT WE TEST
                </p>
                <h2 className=" text-[#FEFEFE]">
                  Security testing across your entire exchange ecosystem
                </h2>
              </div>
            </LeftAnimation>
            <RightAnimation>
              <div className="w-full lg:w-[460px] text-center lg:text-left">
                <p className="sectionDescription text-[#D1D1D1]">
                  We assess the technical, transactional, and business-logic
                  layers that protect digital assets, user accounts, and
                  exchange operations.
                </p>
              </div>
            </RightAnimation>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {whatWeTest.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className=" space-y-4 border-l-[1.03px] border-[#0F66EA29] pl-8"
                >
                  <div className="w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-[#8D8D8D57]">
                    <Icon
                      icon={item.Icon}
                      className="w-[20px] h-[20px] text-[#FFFFFF]"
                    />
                  </div>
                  <h3 className="text-base font-medium text-[#F5F0E8]">
                    {item.title}
                  </h3>
                  <ul className="list-disc space-y-1 pl-2">
                    {item.list.map((listItem, listIndex) => (
                      <li
                        key={listIndex}
                        className="text-[13px] font-normal text-[#D1D1D1D6]"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </div>
          <div className="mt-10 sm:mt-15 md:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
              {securityBenefits.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="p-4 rounded-2xl border border-[#002C8C] bg-linear-to-b from-[#0A1119] to-[#17366E]"
                >
                  <div
                    className="w-[48px] h-[48px] flex items-center justify-center rounded-full"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <Icon
                      icon={item.Icon}
                      className="w-[22px] h-[22px] text-[#FFFFFF]"
                    />
                  </div>
                  <div className="space-y-3 mt-8">
                    <h3 className="text-base md:text-lg font-semibold text-[#FEFEFE]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal leading-[23px] text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our Crypto Assessment Methodology  */}
      <section className="w-full py-14 bg-[linear-gradient(110deg,#050B18_0%,#071321_48%,#06383C_100%)]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Animation>
            <div className="space-y-4 text-center">
              <h2 className=" text-[#FEFEFE]">
                Our Crypto Assessment Methodology
              </h2>
              <p className="sectionDescription text-[#D1D1D1]">
                A structured approach to uncover, validate, and prioritize
                security risks.
              </p>
            </div>
          </Animation>
          <Animation>
            <div className="grid items-center gap-10  xl:grid-cols-[1fr_auto_1fr] xl:gap-12 mt-10 ">
              {/* left steps */}
              <div className="flex flex-col justify-between gap-8 xl:items-end xl:py-2 h-auto  xl:h-[500px]">
                {STEPS.slice(0, 3).map((step, i) => (
                  <div
                    key={step.no}
                    className={`flex items-start gap-4 xl:flex-row-reverse xl:text-right ${
                      i === 1 ? "xl:mr-" : "xl:-mr-15"
                    }`}
                  >
                    <div className="flex  w-[50px] h-[50px] shrink-0 items-center justify-center rounded-full bg-[#0F4C818A]">
                      <Icon
                        icon={step.icon}
                        className="w-[23px] h-[23px] text-[#FFFFFF]"
                      />
                    </div>
                    <div className="max-w-[400px]">
                      <p className="text-lg font-medium text-[#29559D]">
                        {step.no}
                      </p>
                      <h3 className="mt-1 text-base sm:text-lg font-medium text-[#FEFEFE]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-normal leading-5 text-[#D1D1D1]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/*  center */}
              <div className="order-first mx-auto xl:order-none ">
                <div className="relative size-[280px] rounded-full border border-[#4F60FA] sm:size-[450px]">
                  <div className="absolute inset-[12%] rounded-full border border-dashed border-[#AFAFAF69]" />
                  <div className="absolute left-0 top-1/2 w-[12%] border-t border-dashed border-[#AFAFAF69]" />
                  <div className="absolute right-0 top-1/2 w-[11%] border-t border-dashed border-[#AFAFAF69]" />

                  {DOT_POSITIONS.map((pos) => (
                    <span
                      key={pos}
                      className={`absolute w-[20px] h-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F66EA] border-[3px] border-[#FFFFFF] ${pos}`}
                    />
                  ))}

                  {/* medallion */}
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[63%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_190deg,#2c3546,#e9eef6,#6b7587,#d3dae6,#3a4456,#aeb7c6,#2c3546)] bg-[#FFFFFF0D] p-1.5">
                    <div className="flex size-full flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_20%_35%,#172335,#0d1626_70%)] bg-[#FFFFFF0D] text-center text-[13px] font-medium leading-[21px] tracking-[0.1em] text-slate-200">
                      <p>
                        ICS SECURITY
                        <br />
                        ASSESSMENT
                      </p>
                      <span className="my-3.5 block h-0.5 w-9 bg-[#2563EB]" />
                      <p>
                        DISCOVER. TEST.
                        <br />
                        VALIDATE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* right steps */}
              <div className="flex flex-col justify-between gap-5 xl:items-start xl:py-2 h-auto xl:h-[500px] ">
                {STEPS.slice(3).map((step, i) => (
                  <div
                    key={step.no}
                    className={`flex items-start gap-4 ${i === 1 ? "xl:ml-" : "xl:-ml-15"}`}
                  >
                    <div className="flex  w-[50px] h-[50px] shrink-0 items-center justify-center rounded-full bg-[#0F4C818A]">
                      <Icon
                        icon={step.icon}
                        className="w-[23px] h-[23px] text-[#FFFFFF]"
                      />
                    </div>
                    <div className="max-w-[400px]">
                      <p className="text-lg font-medium text-[#29559D]">
                        {step.no}
                      </p>
                      <h3 className="mt-1 text-base sm:text-lg font-medium text-[#FEFEFE]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-normal leading-5 text-[#D1D1D1]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Animation>
        </div>
      </section>
    </div>
  );
}

export default CryptoCurrencyExchange;
