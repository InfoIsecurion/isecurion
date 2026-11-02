"use client";
import { Icon } from "@iconify/react";
import herobackground from "../assets/home/heroBg.svg";
import tokenvalut from "../assets/home/client/tokenvalut.png";
import bookmyshow from "../assets/home/client/bookmyshow.png";
import indegence from "../assets/home/client/indegence.png";
import allianz from "../assets/home/client/allianz.png";
import shellinfo from "../assets/home/client/shellinfo.png";
import bosch from "../assets/home/client/Bosch_logo.png";

import indentifyrisk from "../assets/home/indentifyrisk.jpg";
import continuousvalidation from "../assets/home/continuousvalidattion.png";
import defence from "../assets/home/defence.png";
import buildtrust from "../assets/home/buildtrust.png";

import vulnytics from "../assets/home/vulnytics.svg";
import lms from "../assets/home/lms.svg";
import drosera from "../assets/home/droseradashboard.svg";

import left from "../assets/home/left.png";
import right from "../assets/home/right.png";

import IndustriesWeSecure from "../components/home/IndustriesWeSecure";

import iso27001 from "../assets/home/iso27001.png";
import iso90001 from "../assets/home/iso90001.png";

import ceh from "../assets/home/auditorcertifications/ceh.svg";
import ccna from "../assets/home/auditorcertifications/ccna.svg";
import oscp from "../assets/home/auditorcertifications/oscp.svg";
import mobile from "../assets/home/auditorcertifications/mobile.svg";
import cism from "../assets/home/auditorcertifications/cism.png";
import cissp from "../assets/home/auditorcertifications/cissp.svg";
import cisa from "../assets/home/auditorcertifications/cisa.svg";
import {
  AnimatedCard,
  Animation,
  LeftAnimation,
  RightAnimation,
} from "../components/ui/Animation";
import { motion } from "framer-motion";
import Image from "next/image";
import healthcare from "../assets/home/health-care.png";
import manufacturing from "../assets/home/manufacturingRight.png";
import rightCircle from "../assets/home/rightCircle.png";
import HomeCTA from "../components/home/HomeCTA";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const capabilities = [
  {
    icon: "si:shield-line",
    title: "Proactive Security Validation",
    description:
      "Identify vulnerabilities before attackers exploit them through continuous testing and real-world simulations.",
  },
  {
    icon: "tabler:brain",
    title: "Intelligent Security Platforms",
    description:
      "Purpose-built platforms that simplify vulnerability management, phishing simulations, and security awareness.",
  },
  {
    icon: "streamline:network",
    title: "Enterprise-Grade Expertise",
    description:
      "Trusted by enterprises to deliver scalable cybersecurity services across industries & evolving digital ecosystems.",
  },
];

const ourExpertise = [
  {
    Icon: "icon-park-outline:lock",
    title: "Offensive Security",
    description:
      "Identify vulnerabilities through proactive security testing and real-world attack simulations.",
    services: [
      "Vulnerability Assessment & Penetration Testing",
      "Data Forensics",
      "Web, Mobile & API Security",
      "Red Teaming",
    ],
    iconColor: "text-white",
    bgColor: "#88010045",
    hoverFrom: "#3E0302",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#E24B4A]",
    listColor: "text-[#A8A8A8]",
  },
  {
    Icon: "lucide:monitor-cog",
    title: "Managed Security",
    description:
      "Monitor, detect, and respond to cyber threats with managed security operations.",
    services: ["Managed SOC", "Threat Hunting", "Incident Response", "MDR"],
    iconColor: "text-white",
    bgColor: "#001233",
    hoverFrom: "#3477C5",
    hoverTo: "#002E65",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
  },
  {
    Icon: "gridicons:cloud-outline",
    title: "Cloud & Infrastructure Security",
    description:
      "Secure cloud environments, infrastructure, identities across modern IT ecosystems.",
    services: [
      "Cloud Security Assessment",
      "Configuration Review",
      "Identity Security",
      "Infrastructure Hardening",
    ],
    iconColor: "text-white",
    bgColor: "#00031C",
    hoverFrom: "#002E65",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
  },
  {
    Icon: "charm:notes-tick",
    title: "Governance, Risk & Compliance",
    description:
      "Build a compliant and resilient organization with governance frameworks & regulatory expertise.",
    services: ["ISO 27001", "SOC 2", "DPDP", "Risk Assessments"],
    iconColor: "text-white",
    bgColor: "#00031C",
    hoverFrom: "#002E65",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
  },
  {
    Icon: "lucide:users-round",
    title: "Security Advisory",
    description:
      "Develop long-term cybersecurity maturity with strategic leadership and expert security guidance.",
    services: [
      "Virtual CISO",
      "Security Roadmaps",
      "Risk Management",
      "Security Consulting",
    ],
    iconColor: "text-white",
    bgColor: "#001233",
    hoverFrom: "#3477C5",
    hoverTo: "#002E65",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#0F66EA]",
    listColor: "text-[#A8A8A8]",
  },
  {
    Icon: "material-symbols:warning-outline-rounded",
    title: "Security Awareness & Human Risk",
    description:
      "Reduce human risk through security awareness and phishing simulations.",
    services: [
      "Security Awareness Training",
      "Phishing Simulations",
      "Human Risk Assessment",
      "Cybersecurity Workshops",
    ],
    iconColor: "text-white",
    bgColor: "#88010045",
    hoverFrom: "#3E0302",
    hoverTo: "#000000",
    descriptionColor: "text-[#D1D1D1]",
    headingColor: "text-[#E24B4A]",
    listColor: "text-[#A8A8A8]",
  },
];

const auditorCertificates = [
  {
    img: ceh,
  },
  {
    img: ccna,
  },
  {
    img: oscp,
  },
  {
    img: mobile,
  },
  {
    img: cism,
  },
  {
    img: cissp,
  },
  {
    img: cisa,
  },
];

const trustedCompanies = [
  {
    src: tokenvalut.src,
    alt: "Tokenvalut",
    className: "h-10 w-35",
  },
  {
    src: bookmyshow.src,
    alt: "Bookmyshow",
    className: "h-10 w-35",
  },
  {
    src: bosch.src,
    alt: "Bosch",
    className: "h-8 w-35",
  },
  {
    src: indegence.src,
    alt: "Indegence",
    className: "h-7 w-35",
  },
  {
    src: allianz.src,
    alt: "Allianz",
    className: "h-8 w-35",
  },
  {
    src: shellinfo.src,
    alt: "ShellInfo",
    className: "h-10 w-35",
  },
];

const impactCards = [
  {
    category: "GOVERNMENT",
    categoryBg: "#B78A27",
    bgColor: "#D9A235",
    title: "Strengthening Public Sector Cyber Resilience.",
    description:
      "Enhanced security posture and compliance readiness through continuous assessment and proactive threat validation.",
    linkColor: "#000000",
  },
  {
    category: "TELECOM",
    categoryBg: "#164D48",
    bgColor: "#080E1B",
    title: "Securing Critical Network Infrastructure.",
    description:
      "Validated security controls across distributed environments and strengthened defenses against advanced threats.",
    linkColor: "#3B9E6A",
  },
  {
    category: "FINANCIAL SERVICES",
    categoryBg: "#541A2A",
    bgColor: "#080E1B",
    title: "Preventing Credential Compromise in a Financial Institution.",
    description:
      "Strengthened identity security through phishing simulations and targeted awareness that closed critical gaps.",
    linkColor: "#E24B4A",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-[#01070E]">
      {/* this is the hero section  */}
      <section
        className="w-full xl:h-[80vh] 2xl:h-[70vh] flex items-center py-14 bg-cover bg-center"
        style={{ backgroundImage: `url(${herobackground.src})` }}
      >
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10">
          <div className="space-y-5 text-center lg:text-left">
            <p
              className="text-sm sm:text-base font-semibold text-[#0F66EA] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "150ms" }}
            >
              SECURING MODERN ENTERPRISES
            </p>
            <h1
              className="text-transparent bg-clip-text bg-linear-to-r from-[#E5ECF7] via-[#8FB1F4] to-[#86D7E2] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "300ms" }}
            >
              Build for Trust <br /> Designed for Cyber Resilience.
            </h1>

            <p
              className="text-sm sm:text-base lg:text-[17px] font-medium  lg:max-w-lg leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#ACAFEE] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "450ms" }}
            >
              Helping organizations anticipate threats, reduce cyber risk, and
              build lasting resilience through expert cybersecurity consulting,
              continuous validation, and intelligent security platforms.
            </p>
          </div>
          <div
            className="flex flex-col justify-center lg:justify-start sm:flex-row gap-3 py-4 opacity-0 animate-hero-reveal"
            style={{ animationDelay: "600ms" }}
          >
            <button className="flex items-center justify-center gap-3 py-3 px-5 text-base font-medium cursor-pointer rounded-[10px] text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] border-2 border-[#3263B1]">
              Schedule a Consultation{" "}
              <span>
                <Icon icon="mdi:arrow-right" width={20} />
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-5 text-base font-medium cursor-pointer text-white rounded-lg border border-[#FFFFFF29]">
              <span></span>
              Explore services ›
            </button>
          </div>
        </div>
      </section>
      {/* STATS SECTION */}
      <section className="w-full  bg-[#01060E] shadow-[0_0_45px_rgba(15,102,234,0.20)]">
        {/* 7XL Stats Box */}
        <div className="max-w-7xl mx-auto ">
          <div className="px-6 py-10 sm:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Stat 1 */}
              <div className="relative px-0 py-6 md:px-8 lg:px-10 lg:py-0">
                <div>
                  <p className="text-base sm:text-xl lg:text-2xl font-semibold  text-[#0F66EA]">
                    1K+
                  </p>

                  <p className="mt-1 text-base sm:text-lg font-medium leading-[28px] text-[#8E8E8E]">
                    Security Engagements
                  </p>

                  <p className="mt-2 text-sm sm:text-[16px] font-medium leading-[27px] text-[#FFFFFF]">
                    Across industries worldwide
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="relative border-t border-[#4F5051] px-0 py-6 md:px-8 sm:border-t-0 lg:px-12 lg:py-0">
                {/* Desktop Divider */}
                <div className="absolute left-0 top-1/2 hidden h-[106px] w-px -translate-y-1/2 bg-[#4F5051] lg:block" />

                <div>
                  <p className="text-base sm:text-xl lg:text-2xl font-semibold  text-[#0F66EA]">
                    20+
                  </p>

                  <p className="mt-1 text-[18px] font-medium leading-[30px] text-[#999999]">
                    Industry Verticals
                  </p>

                  <p className="mt-2 text-[16px] font-medium leading-[27px] text-white">
                    Deep domain expertise
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="relative border-t border-[#4F5051]  px-0 py-6 md:px-8 sm:border-t-0 lg:px-12 lg:py-0">
                {/* Desktop Divider */}
                <div className="absolute left-0 top-1/2 hidden h-[106px] w-px -translate-y-1/2 bg-[#4F5051] lg:block" />

                <div>
                  <p className="text-base sm:text-xl lg:text-2xl font-semibold  text-[#0F66EA]">
                    15+
                  </p>

                  <p className="mt-1 text-[18px] font-medium leading-[30px] text-[#999999]">
                    Years of Cybersecurity Excellence
                  </p>

                  <p className="mt-2 text-[16px] font-medium leading-[27px] text-white">
                    Proven track record
                  </p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="relative border-t border-[#4F5051]  px-0 py-6 md:border-t-0 md:px-8 lg:px-12 lg:py-0">
                {/* Desktop Divider */}
                <div className="absolute left-0 top-1/2 hidden h-[106px] w-px -translate-y-1/2 bg-[#4F5051] lg:block" />

                <div>
                  <p className="text-base sm:text-xl lg:text-2xl font-semibold  text-[#0F66EA]">
                    99%
                  </p>

                  <p className="mt-1 text-[18px] font-medium leading-[30px] text-[#999999]">
                    Client Satisfaction
                  </p>

                  <p className="mt-2 text-[16px] font-medium leading-[27px] text-white">
                    Long-term partnerships
                    <br />
                    built on trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY LEADING ORGANIZATIONS */}
      <div className="bg-[#060D1B]">
        <div className="mx-auto max-w-7xl  py-14">
          {/* Heading */}
          <div className="px-6 sm:px-10 ">
            <Animation>
              <h2 className="text-center text-[20px] font-medium leading-[27px] tracking-[1.3px] text-[#7E93B4]">
                TRUSTED BY LEADING ORGANIZATIONS
              </h2>
            </Animation>
          </div>
        </div>
        {/*logos */}
        <div className="pb-10 overflow-hidden">
          <div className="flex  animate-tcar03-scroll">
            {/* First set */}
            <div className="flex shrink-0 items-center gap-16 pr-16">
              {trustedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex h-12 w-35 shrink-0 items-center justify-center"
                >
                  <img
                    src={company.src}
                    alt={company.alt}
                    className={`${company.className} object-contain brightness-0 invert opacity-80 transition-all duration-500 hover:brightness-100 hover:invert-0 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set */}
            <div
              className="flex shrink-0 items-center gap-16 pr-16"
              aria-hidden="true"
            >
              {trustedCompanies.map((company, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex h-12 w-35 shrink-0 items-center justify-center"
                >
                  <img
                    src={company.src}
                    alt=""
                    className={`${company.className} object-contain brightness-0 invert opacity-80 transition-all duration-500 hover:brightness-100 hover:invert-0 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHY ORGANIZATIONS CHOOSE ISECURION */}
      <div className="bg-[#070D1A]  overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 bg-[#070D1A]  py-10">
          <LeftAnimation>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span className="block h-6 w-[2px] bg-[#0F66EA]"></span>

              <span className="text-sm sm:text-base font-semibold text-center uppercase text-[#0F66EA]  tracking-[2px] lg:text-left">
                WHY ORGANIZATIONS CHOOSE ISECURION
              </span>
            </p>
          </LeftAnimation>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-5">
            <LeftAnimation>
              <h2 className="text-center lg:text-left text-white">
                Security is more than <br />
                protection. <br /> It's the foundation of <br />
                <span className="text-[#0F66EA]">confident business.</span>
              </h2>
            </LeftAnimation>
            <RightAnimation>
              <p className="text-base font-medium  lg:max-w-lg text-center lg:text-left leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
                Organizations rely on applications, cloud infrastructure,
                digital identities, and connected systems to operate. ISECURION
                helps validate security continuously, reduce risk proactively,
                and build long-term cyber resilience.
              </p>
            </RightAnimation>
          </div>

          <div>
            <Animation>
              <div className="flex flex-col lg:flex-row gap-5 mt-10">
                <div className="relative group bg-cover w-full lg:flex-2 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer overflow-hidden transition-all duration-500">
                  <div className="absolute inset-0  w-full rounded-2xl ">
                    <Image
                      src={indentifyrisk}
                      alt="indentifyrisk"
                      className="h-full w-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-115 "
                    />
                  </div>
                  <div className="relative z-10 flex max-w-[360px] rounded-[5px] bg-linear-to-r from-[#002A69] to-[#000000] p-4 ">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-white">
                        Identify Risk
                      </h3>

                      <div className="flex items-center gap-3 h-[70px] ">
                        <p className="transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm font-medium text-[#ACACAC] max-w-[252px] ">
                          Uncover exploitable vulnerabilities before they become
                          business disruptions.
                        </p>

                        <button className="ml-auto flex w-[40px] shrink-0 lg:shrink items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore Risk Identification
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-cover w-full lg:flex-1   min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl w-full">
                    <Image
                      src={continuousvalidation}
                      alt="continuousvalidation"
                      className="h-full w-full object-cover group-hover:scale-115 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-[5px] bg-linear-to-r from-[#002A69] to-[#000000] p-4 ">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-white">
                        Validate Continuously
                      </h3>

                      <div className="flex items-center gap-3 h-[70px]">
                        <p className=" transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm font-medium max-w-[282px] text-[#ACACAC] lg:leading-[21px]">
                          Continuously test security across applications, cloud,
                          identities and infrastructure.
                        </p>

                        <button className="ml-auto flex w-[40px] shrink-0 lg:shrink  items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore Continuous Validation
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
            <Animation>
              <div className="flex flex-col lg:flex-row gap-5 mt-10">
                <div className="relative flex-1 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={defence}
                      alt="defence"
                      className="h-full w-full w-full object-cover group-hover:scale-115 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-md rounded-md bg-linear-to-r from-[#002A69] to-[#000000] p-4 ">
                    <div className="w-full">
                      <h3 className="mb-4 text-base font-medium h-[20px] text-white">
                        Strengthen Defenses
                      </h3>

                      <div className="flex items-center gap-3 h-[60px]">
                        <p className=" transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm max-w-[235px] font-medium text-[#ACACAC] lg:leading-[21px]">
                          Offensive security that transforms findings into
                          measurable resilience.
                        </p>

                        <button className="ml-auto flex w-[40px] items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore Offensive Security
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group bg-cover bg-center flex-2 min-h-[350px] flex flex-col justify-end rounded-xl p-4 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={buildtrust}
                      alt="buildtrust"
                      className="h-full w-full object-cover group-hover:scale-115 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="relative z-10 flex max-w-[370px] rounded-md bg-linear-to-l to-[#002A69] from-[#000000] p-4 ">
                    <div className="w-full">
                      <h3 className="mb-3 text-base font-medium h-[20px] text-white">
                        Build Trust
                      </h3>

                      <div className="flex items-center gap-3 h-[60px]">
                        <p className=" transition-all duration-300 group-hover:hidden text-[11px] sm:text-sm  font-medium text-[#ACACAC] lg:leading-[21px] max-w-[282px]">
                          Protect business continuity while strengthening
                          customer trust and confidence.
                        </p>

                        <button className="ml-auto flex w-[40px] shrink-0 lg:shrink items-center justify-center rounded-lg bg-[#0F66EA] px-3 py-3 text-white overflow-hidden transition-[width] duration-1000 ease-in-out group-hover:w-full group-hover:justify-between">
                          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 text-[12px] transition-all duration-200 ease-out group-hover:max-w-[250px] group-hover:opacity-100">
                            Explore Compliance & Trust
                          </span>

                          <Icon
                            icon="akar-icons:arrow-up-right"
                            className="shrink-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>

      {/* Capabilities  */}
      <div className="bg-[#070D1A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 bg-[#070D1A] py-10">
          <Animation>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
              <div>
                <LeftAnimation>
                  <h2 className="text-2xl sm:text-4xl font-medium lg:max-w-md text-center lg:text-left text-white sm:leading-11">
                    Capabilities that strengthen{" "}
                    <span className="text-[#0F66EA]">every layer</span> of your
                    organization.
                  </h2>
                </LeftAnimation>
              </div>
              <div className="lg:max-w-[550px] space-y-2">
                <RightAnimation>
                  <p className="hidden lg:block  text-base font-semibold text-[#0F66EA]  tracking-[0.5px]">
                    OUR EXPERTISE
                  </p>
                  <p className="text-center lg:text-left font-medium leading-7 text-white">
                    A comprehensive portfolio of services and platforms built to
                    reduce risk, improve resilience, and enable secure growth.
                  </p>
                </RightAnimation>
              </div>
            </div>
          </Animation>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ourExpertise.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.12}>
                <div
                  key={index}
                  // variants={cardVariants}
                  className="relative z-10 overflow-hidden flex flex-col justify-between rounded-[14px] p-5 cursor-pointer group transition-all duration-500"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom, ${item.hoverFrom}, ${item.hoverTo})`,
                    }}
                  />
                  <Icon
                    icon={item.Icon}
                    className="absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 text-[#62748E1C] group-hover:top-1/3 group-hover:right-[20%] group-hover:text-[#FFFFFF2B] transition-all duration-500"
                  />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon
                        icon={item.Icon}
                        className={`h-8 w-8 ${item.iconColor} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>

                    <h3
                      className={`mb-3 ${item.headingColor} text-xl font-semibold group-hover:text-white transition-colors duration-300`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm font-medium leading-6 ${item.descriptionColor} group-hover:text-white transition-colors duration-300 max-w-[237px]`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-4">
                    <ul className="space-y-2">
                      {item.services.map((service, serviceIndex) => (
                        <li
                          key={serviceIndex}
                          className={`flex items-center gap-1 text-sm font-medium ${item.listColor} group-hover:text-white transition-colors duration-300`}
                        >
                          <span
                            className={` group-hover:text-white ${item.iconColor}`}
                          >
                            <Icon icon="mingcute:right-fill" />
                          </span>

                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="relative z-10 mt-5 flex cursor-pointer items-center text-[15px] font-medium text-[#0F66EA] transition-colors duration-300 group-hover:text-white">
                    View Services{""}
                    <span className="ml-1">
                      <Icon icon="solar:arrow-right-bold" />
                    </span>
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our platform  */}
      <div className="bg-[#070D1A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 bg-[#070D1A] py-14">
          <div className="space-y-3 lg:max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <Animation>
              <p className="flex items-center gap-2 ">
                <span className="block h-6 w-[2px] bg-[#0F66EA]"></span>

                <span className="text-sm sm:text-base font-semibold uppercase text-[#0F66EA] tracking-[1px]">
                  OUR PLATFORMS
                </span>
              </p>
            </Animation>
            <Animation>
              <h2 className=" text-white ">
                Intelligent platforms for{" "}
                <span className="text-[#0F66EA]">continuous</span> security.
              </h2>
            </Animation>
            <Animation>
              <p className="text-base sm:text-lg font-medium  leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] ">
                Purpose-built platforms that help organizations validate
                security continuously, strengthen cyber resilience, and make
                informed decisions.
              </p>
            </Animation>
          </div>

          <div className="relative mt-10">
            <div className="sticky top-20 z-10 py-8 bg-[#060D1B]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#4ADE80]">
                      Vulnytics
                    </h3>
                    <span className="mt-2 bg-[#818181] w-15 h-0.5"></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold lg:max-w-md  text-white py-2">
                    Continuous Vulnerability{" "}
                    <span className="text-[#4ADE80]">Intelligence.</span>
                  </h3>
                  <p className="font-medium max-w-[408px]  leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Discover, prioritize, and remediate vulnerabilities across
                    your digital assets with actionable insights and real-time
                    visibility.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Continuous Scanning</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Risk Prioritization</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Executive Reporting</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Seamless Integrations</span>
                    </li>
                  </ul>
                  <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#3B9E6A]">
                    Learn More{" "}
                    <span>
                      <Icon icon="ep:right" />
                    </span>
                  </button>
                </div>
                <div className="flex-1 group">
                  <div className="bg-linear-to-b from-[#0B241B] to-[#2A8A67] max-h-[500px] rounded-4xl overflow-hidden">
                    <img
                      src={vulnytics.src}
                      alt="vulnytics"
                      className="w-full translate-x-[8%] translate-y-[8%] rounded-none transition-all duration-700 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[2%] group-hover:rounded-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-24 z-20 py-8 bg-[#060D1B]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#7D70F0]">
                      Drosera Phishing
                    </h3>
                    <span className="bg-[#818181] w-15 h-0.5 mt-2"></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold max-w-md text-white lg:leading-[40px] py-2">
                    Security Awareness that actually{" "}
                    <span className="text-[#7D70F0]">
                      changes behavior.
                    </span>{" "}
                  </h3>
                  <p className="text-base font-medium max-w-[400px] leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Run realistic phishing simulations, track user behavior, and
                    build a security-aware culture across your organization.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Phishing Simulations</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Campaign Management</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Awareness Training</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Advanced Reporting</span>
                    </li>
                  </ul>
                  <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#7D70F0]">
                    Learn More{" "}
                    <span>
                      <Icon icon="ep:right" />
                    </span>
                  </button>
                </div>
                <div className="flex-1 group">
                  <div className="bg-linear-to-b from-[#6F6C9066] to-[#8B5CF680] max-h-[500px] rounded-4xl overflow-hidden">
                    <img
                      src={drosera.src}
                      alt="vulnytics"
                      className="w-full translate-x-[8%] translate-y-[8%] rounded-none transition-all duration-700 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[2%] group-hover:rounded-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-28 z-30 py-8 bg-[#060D1B]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-5">
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#38BDF8]">
                      Learning Management System (LMS)
                    </h3>
                    <span className="bg-[#818181] w-15 h-0.5 mt-2"></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold max-w-md  lg:leading-[40px] text-white">
                    Security{" "}
                    <span className="text-[#38BDF8]">Learning & Awareness</span>
                  </h3>
                  <p className="text-base font-medium max-w-[400px] leading-[25px] tracking-[-0.34px] text-[#8F90AB]">
                    Deliver engaging training, validate knowledge, and empower
                    your teams with role-based learning journeys.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Role-based Learning</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Assessments & Quizzes</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Learning Analytics</span>
                    </li>
                    <li className="flex items-center text-sm font-medium text-[#A8A8A8] gap-2">
                      <Icon
                        icon="mdi:tick-circle"
                        className="text-[#C3C3C3] w-[16px] h-[16px]"
                      />
                      <span>Mobile Learning</span>
                    </li>
                  </ul>
                  <button className="flex items-center gap-1 text-sm font-medium cursor-pointer text-[#38BDF8]">
                    Learn More{" "}
                    <span>
                      <Icon icon="ep:right" />
                    </span>
                  </button>
                </div>
                <div className="flex-1 group">
                  <div className="bg-linear-to-b from-[#38BDF866] to-[#38BDF833] max-h-[500px] rounded-4xl overflow-hidden">
                    <img
                      src={lms.src}
                      alt="vulnytics"
                      className="w-full translate-x-[8%] translate-y-[8%] rounded-none transition-all duration-700 ease-in-out group-hover:translate-x-[3%] group-hover:translate-y-[2%] group-hover:rounded-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative overflow-hidden bg-linear-to-l from-[#092E70] to-[#071C41]">
        {/* Right background circle */}
        <div className="pointer-events-none absolute right-0 top-[-80px] z-0 hidden w-[500px] lg:block">
          <Image src={rightCircle} alt="" className="h-auto w-full" />
        </div>

        {/* 7xl content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-10">
          {/* Quote */}
          <Animation>
            <div className="mx-auto flex max-w-5xl items-center gap-5">
              <div className="shrink-0">
                <img
                  src={right.src}
                  alt="right"
                  className="h-[70px] w-[30px] sm:h-[76px] sm:w-[45px]"
                />
              </div>

              <div>
                <p className="text-center text-sm font-normal text-[#EBEBEB] sm:text-[22px]">
                  ISECURION helps organizations strengthen their security
                  posture with expert-led services, advanced technology, and a
                  relentless focus on results.
                </p>
              </div>

              <div className="shrink-0">
                <img
                  src={left.src}
                  alt="left"
                  className="h-[70px] w-[30px] sm:h-[76px] sm:w-[45px]"
                />
              </div>
            </div>
          </Animation>

          {/* Stats */}
          <Animation>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { value: "50+", label: "Enterprise Customers" },
                { value: "1K+", label: "Projects Completed" },
                { value: "500+", label: "Start Up Companies" },
                { value: "5", label: "of the Top 10 Global Tech Companies" },
                { value: "40+", label: "Fintech & Healthcare Companies" },
              ].map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className={`mx-auto px-14 text-center ${
                    index !== 4 ? "lg:border-r lg:border-[#888888]" : ""
                  }`}
                >
                  <h3 className="text-[16px] font-normal text-white sm:text-3xl">
                    {item.value}
                  </h3>

                  <p className="mt-3 max-w-[130px] text-[14px] font-medium leading-6 text-[#C5C5C5]">
                    {item.label}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </Animation>
        </div>
      </div>

      {/* INDUSTRIES WE SECURE  */}
      <IndustriesWeSecure />

      <div className="w-full bg-[#070F20]">
        <div className="mx-auto max-w-7xl">
          {/* Proven Impact */}
          <section className="bg-[#070F20] px-6 py-14 sm:px-10 overflow-hidden">
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
              {/* Left Content */}

              <div className="w-full lg:w-1/2">
                <LeftAnimation>
                  <h2 className="text-center  font-medium  text-white  lg:text-left">
                    Proven Impact. Trusted by Enterprises{" "}
                    <span className="text-[#0F66EA]">Worldwide.</span>
                  </h2>

                  <div className="mx-auto mt-5 h-[3px] w-[100px] bg-[#1A56DB] lg:mx-0" />
                </LeftAnimation>
              </div>

              {/* ISO Certifications */}
              <RightAnimation>
                <div className="relative flex w-full items-center justify-center lg:w-1/2">
                  <img
                    src={iso27001.src}
                    alt="ISO 27001"
                    className="relative z-10 w-[120px] sm:w-[150px]"
                  />

                  <Icon
                    icon="line-md:star-twotone"
                    className="absolute left-1/2 top-1/2 z-20 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 text-[#0F66EA33] sm:h-[150px] sm:w-[150px]"
                  />

                  <img
                    src={iso90001.src}
                    alt="ISO 9001"
                    className="relative z-10 ml-10 w-[120px] sm:ml-16 sm:w-[150px]"
                  />
                </div>
              </RightAnimation>
            </div>
          </section>
        </div>
      </div>

      {/* Auditor Certifications */}
      <section className="bg-gradient-to-r from-[#000000] via-[#071C41] to-[#092E70] px-6 py-8 sm:px-10">
        <Animation>
          <div className="mx-auto max-w-7xl">
            <h3 className="text-center text-[20px] font-semibold uppercase text-white sm:text-[22px]">
              Auditors Certifications
            </h3>

            <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-7">
              {auditorCertificates.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.15}>
                  <img
                    src={item.img.src}
                    alt=""
                    className="h-[80px] w-[80px] object-contain"
                  />
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Animation>
      </section>

      <div className="bg-[#060D1B] ">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-4 lg:px-10 bg-[#060D1B]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 ">
            {/* Left heading */}
            <div className="flex-1">
              <h2 className=" text-white ">
                Security outcomes that <br />
                <span className="text-[#0F66EA]">speak</span> for themselves.
              </h2>

              <div className="mt-4 h-[3px] w-[70px] bg-[#0F66EA]" />
            </div>

            {/* Right description */}
            <div className="flex-1 lg:max-w-[505px]">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA] tracking-[0.2px]">
                REAL-WORLD IMPACT
              </p>

              <p className="mt-2 text-base sm:text-lg font-medium leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[500px]">
                Explore how organizations strengthened cyber resilience,
                mitigated critical risks, and achieved measurable security
                outcomes with ISECURION.
              </p>
            </div>
          </div>

          {/* Case studies */}
          <Animation>
            {/* Healthcare Case Study */}
            <div className="mt-8 rounded-[12px] bg-[#00453A] p-4 sm:p-5">
              {/* Category */}
              <span className="inline-flex items-center rounded-full bg-[#00BE9F70] px-3 py-1.5 text-[9px] font-medium text-white">
                HEALTHCARE
              </span>

              {/* Title */}
              <h3 className="mt-3 text-lg sm:text-xl font-medium text-white tracking-[0.1px]">
                Ransomware Recovery for a Multi-Speciality Hospital
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm  font-medium leading-5 text-[#D1D1D1] tracking-[0.2px]">
                Rapid-response and digital forensics enabled critical systems
                recovery while restoring operations with minimal disruption.
              </p>

              {/* Image */}
              <div className="relative mt-3 overflow-hidden rounded-md group">
                <div className="mt-4 overflow-hidden rounded-[12px]">
                  <img
                    src={healthcare.src}
                    alt="Ransomware Recovery for a Multi-Speciality Hospital"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                    <Icon
                      icon="akar-icons:arrow-up-right"
                      className="h-12 w-12 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Animation>

          {/* Manufacturing Case Study */}
          <Animation>
            <div className="mt-6 flex flex-col lg:flex-row items-center gap-6 rounded-lg bg-[#111827] px-5 py-4">
              {/* Left Content */}
              <div className="w-full lg:w-[55%]">
                {/* Category */}
                <span className="inline-flex rounded-full bg-[#087E70] px-3 py-1.5 text-[10px] font-medium text-white">
                  MANUFACTURING
                </span>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-medium leading-8 text-white">
                  OT Security Assessment for
                  <br />
                  Manufacturing Operations
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-[450px] text-[14px] font-medium leading-6 text-[#D1D1D1]">
                  Identified critical vulnerabilities across OT and IT
                  environments before they impacted production and operations.
                </p>

                {/* Read Case Study */}
                <button className="mt-4 flex w-fit cursor-pointer items-center gap-1 text-[14px] font-medium text-white transition-colors duration-300 hover:text-[#0F66EA]">
                  Read Case Study
                  <Icon icon="ep:right" />
                </button>
              </div>

              {/* Right Image */}
              <div className="w-full lg:flex-1 overflow-hidden rounded-lg px-8 pt-4">
                <img
                  src={manufacturing.src}
                  alt="OT Security Assessment for Manufacturing Operations"
                  className="w-full rounded-md object-cover transition-transform duration-500 "
                />
              </div>
            </div>
          </Animation>

          {/* Bottom Impact Cards */}
          <Animation>
            <div className="mt-4 grid grid-cols-1 gap-5 py-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {impactCards.map((card, index) => (
                <div
                  key={index}
                  className={`flex h-full min-h-[320px] flex-col rounded-[12px] border px-5 py-6
                    sm:min-h-[350px] sm:px-6 sm:py-7
                    lg:min-h-[370px] lg:px-8 lg:py-8
                    ${index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.625rem)] lg:col-span-1 lg:w-full" : ""}
                    ${index === 0 ? "border-none" : "border-[#66666691]"}`}
                  style={{ backgroundColor: card.bgColor }}
                >
                  {/* Category */}
                  <span
                    className="w-fit rounded-full px-3 py-1.5 text-[11px] font-medium text-white sm:text-xs"
                    style={{ backgroundColor: card.categoryBg }}
                  >
                    {card.category}
                  </span>

                  {/* Title */}
                  <h3
                    className={`mt-4 max-w-[280px] text-[20px] font-medium leading-7 sm:text-[22px] sm:leading-8 lg:text-[24px] ${
                      index === 0 ? "text-[#29263D]" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-5 max-w-[320px] pb-4 text-[14px] font-medium leading-6 sm:mt-6 sm:text-[15px] ${
                      index === 0 ? "text-white" : "text-[#D1D1D1]"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* Link */}
                  <button
                    className="mt-auto flex w-fit cursor-pointer items-center gap-1 pt-4 text-[13px] font-medium sm:text-sm"
                    style={{ color: card.linkColor }}
                  >
                    Read Case Study
                    <Icon icon="ep:right" />
                  </button>
                </div>
              ))}
            </div>
          </Animation>
        </div>
      </div>
      <HomeCTA />
    </div>
  );
}
