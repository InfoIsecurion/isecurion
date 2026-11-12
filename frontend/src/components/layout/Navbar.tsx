"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import isecurionLogo from "../../assets/home/isecurion_logo.png";

type ServiceId = "detection" | "application" | "data" | "grc";
type Service = {
  id: ServiceId;
  icon: string;
  title: string;
  description: string;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
];
const serviceDetails = {
  detection: {
    mainHeading: "Detect, simulate, and respond to evolving threats.",
    sections: [
      {
        heading: "OFFENSIVE SECURITY",
        links: [
          {
            label: "Breach Attack Simulation",
            href: "/services/continuous-breach-attack-simulation",
          },
          {
            label: "Red Team Assessment",
            href: "/services/red-team-assessment",
          },
          {
            label: "AI-Augmented Red Team",
            href: "/services/ai-augamented-red-team",
          },
          {
            label: "Phishing Simulation",
            href: "/services/phishing-simulation",
          },
        ],
      },
      {
        heading: "SECURITY OPERATIONS",
        links: [
          {
            label: "Managed Security Services(MSSP)",
            href: "/services/managed-security-services",
          },
          {
            label: "In-House SOC Service",
            href: "/services/inhouse-soc",
          },
          { label: "Hybrid SOC Service", href: "/services/hybrid-soc" },
          // {
          //   label: "Incident Response & DFIR",
          //   href: "/services/incident-response-dfir",
          // },
          // { label: "Ransomware Negotiation", href: "/services/ransomware" },
        ],
      },
      // {
      //   heading: "Adersarial & Resilience Testing",
      //   links: [
      //     {
      //       label: "DDoS Testing Services",
      //       href: "/services/ddos-testing-service",
      //     },
      //     {
      //       label: "MCP Pentesting Services",
      //       href: "/services/mcp-pentesting-service",
      //     },
      //   ],
      // },
    ],
  },

  application: {
    mainHeading: "Secure the technologies your business runs on.",
    sections: [
      {
        heading: "APPLICATION SECURITY",
        links: [
          {
            label: "Web Application Security Assessment",
            href: "/services/web-application-security-assessment",
          },
          {
            label: "Mobile Application Security",
            href: "/services/mobile-application-security",
          },
          { label: "Secure Code Review", href: "/services/secure-code-review" },
          // { label: "DevSecOps", href: "/services/devsecops" },
        ],
      },
      {
        heading: "CLOUD & INFRASTRUCTURE",
        links: [
          {
            label: "Vulnerability Assessment & Penetration Testing (VAPT)",
            href: "/services/vapt",
          },
          {
            label: "Cloud Security Assessment",
            href: "/services/cloud-security-assessment",
          },
        ],
      },
      {
        heading: "DIGITAL PLATFORMS",
        links: [
          {
            label: "Crypto Currency Exchange Pentest",
            href: "/services/crypto-currency-exchange",
          },
          {
            label: "Smart Contract Security Audit",
            href: "/services/smart-contract-security",
          },
        ],
      },
      {
        heading: "CONNECTED & INDUSTRIAL",
        links: [
          {
            label: "IoT Security Testing",
            href: "/services/iot-security-testing",
          },
          {
            label: "Industrial Control System Security Assessment",
            href: "/services/industrial-control-systems-security-assessment",
          },
          // {
          //   label: "Automotive Cybersecurity",
          //   href: "/services/automotive-cybersecurity",
          // },
        ],
      },
    ],
  },

  data: {
    mainHeading: "DATA, IDENTITY & PRIVACY",
    sections: [
      {
        heading: "PRIVACY & DATA PROTECTION",
        links: [
          {
            label: "DPO Services",
            href: "/services/dpo-services",
          },
          // {
          //   label: "Data Localization Audit",
          //   href: "/services/identity-access-review",
          // },
          {
            label: "GDPR",
            href: "/services/gdpr",
          },
          {
            label: "DPDP Compliance",
            href: "/services/dpdp-compliance",
          },
        ],
      },
      {
        heading: "IDENTITY & TRUST",
        links: [
          {
            label: "Aadhaar / UIDAI Audit",
            href: "/services/aadhar-audit",
          },
          {
            label: "IRDA Information Security Audit",
            href: "/services/irda-audit",
          },
          {
            label: "RBI Information Security Audit",
            href: "/services/rbi-security-audit",
          },
        ],
      },
    ],
  },

  grc: {
    mainHeading: "Prove security. Meet regulatory requirements.",
    sections: [
      {
        heading: "Security Governance",
        links: [
          {
            label: "vCISO Services",
            href: "/services/vciso",
          },
          {
            label: "ISO 27001",
            href: "/services/iso27001",
          },
          {
            label: "SOC 2 Compliance",
            href: "/services/soc-2-compliance",
          },
          // {
          //   label: "ISO 42001 (AIMS)",
          //   href: "/services/iso42001",
          // },
          // {
          //   label: "AI Compliance Package",
          //   href: "/services/ai-compliance",
          // },
        ],
      },
      {
        heading: "Regulatory & Industry",
        links: [
          // {
          //   label: "CSCRF Audit",
          //   href: "/services/csrf-audit",
          // },
          // {
          //   label: "Market SOC Audit (MSOC)",
          //   href: "/services/market-soc-audit",
          // },
          // {
          //   label: "DORA Compliance",
          //   href: "/services/dora-compliance",
          // },
          {
            label: "CICRA Audit Services",
            href: "/services/cicra-audit-services",
          },
          {
            label: "BSE/NSE Audit Services",
            href: "/services/bse-nse-audit-services",
          },
        ],
      },
    ],
  },
} as const;

const serviceCategories: Service[] = [
  {
    id: "detection",
    icon: "bx:check-shield",
    title: "Detection & Response",
    description: "Detect threats. Respond fast.",
  },
  {
    id: "application",
    icon: "ant-design:cloud-outlined",
    title: "Application, Cloud & Platform",
    description: "Build and operate securely.",
  },
  {
    id: "data",
    icon: "energy-icons:database-20",
    title: "Data, Identity & Privacy",
    description: "Protect data and access.",
  },
  {
    id: "grc",
    icon: "bi:shield-check",
    title: "Governance & Compliance",
    description: "Prove security. Meet requirements.",
  },
];

// product
const product = [
  {
    name: "Vulnytics",
    description: "Vulnerability intelligence and security risk visibility",
    href: "https://vulnytics.isecurion.com/",
  },
  {
    name: "Drosera",
    description: "Phishing simulations and human risk management",
    href: "https://drosera.ai/",
  },
  {
    name: "LMS",
    description: "Security awareness training and employee learning",
    href: "https://lms.drosera.ai/",
  },
];

const company = [
  {
    mainHeading: "COMPANY",
    list: [
      {
        name: "About Us",
        description: "Who we are and our cybersecurity mission",
        link: "/company/about",
      },
      // {
      //   name: "Careers",
      //   description: "Build a safer digital future with us",
      //   link: "/career",
      // },
    ],
  },
  {
    mainHeading: "RESOURCES",
    list: [
      // {
      //   name: "Case Studies",
      //   description: "Real-world security challenges and outcomes",
      //   link: "/case-studies",
      // },
      // {
      //   name: "Insights",
      //   description: "Cybersecurity insights and research",
      //   link: "/insights",
      // },
      {
        name: "Contact Us",
        description: "Connect with our cybersecurity experts",
        link: "/company/contact",
      },
    ],
  },
];

function Navbar() {
  const [activeService, setActiveService] =
    useState<keyof typeof serviceDetails>("detection");

  const [isOpen, setIsOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // const closeMenu = () => {
  //   setIsOpen(false);
  //   setOpenDropdown(null);
  // };

  type DesktopMenu = "products" | "services" | "company" | null;

  // inside Navbar()
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setDesktopMenu(null); // closes desktop dropdowns too
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <div className="">
        <div className="relative mx-auto w-full max-w-7xl flex h-[65px]  items-center justify-between px-6 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="shrink-0">
            <Image
              src={isecurionLogo}
              alt="Isecurion"
              width={145}
              height={30}
              priority
              className="h-auto w-[150px] sm:w-[185px] lg:w-[200px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center gap-13">
              <li className="relative flex items-center justify-center group">
                <Link href="/" className="text-base font-normal text-white">
                  Home
                </Link>
                <span className="invisible group-hover:visible absolute left-0 top-[30px] w-[45px] h-[3px] rounded-xl transition-all duration-200 bg-[#0F66EA] "></span>
              </li>
              {/* this is the product link  */}
              <li className="relative group">
                <Link
                  href=""
                  onClick={closeMenu}
                  className="text-base font-normal flex items-center gap-1 text-white"
                >
                  Products{" "}
                  <span className="transition-transform duration-300 group-hover:rotate-180">
                    <Icon
                      icon="ant-design:caret-down-filled"
                      className="h-[14px] w-[14px]"
                    />
                  </span>
                </Link>
                <div className="flex flex-col items-center invisible absolute left-1/2 top-full z-50 mt-5 w-sm px-6 py-4 -translate-x-1/2 translate-y-2 rounded-xl bg-gradient-to-b from-[#F5F9FD] to-[#FFFFFF] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ">
                  <span className="invisible group-hover:visible absolute  -top-0.5   w-[100px] h-[5px] rounded-xl transition-all duration-200 bg-[#0F66EA] "></span>
                  <div>
                    <h3 className="text-sm font-medium pb-2 border-b border-[#D8E3EF] text-[#29559D]">
                      OUR PRODUCTS
                    </h3>
                    <div className="flex flex-col gap-4 mt-5">
                      {product.map((item, index) => (
                        <Link
                          href={item.href}
                          key={index}
                          className="space-y-1"
                        >
                          <h3 className="text-sm font-semibold text-[#090B21]">
                            {item.name}
                          </h3>
                          <p className="text-[13px] font-medium text-[#979797]">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              {/* this is the service link  */}
              <li
                className="list-none"
                onMouseEnter={() => setDesktopMenu("services")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href=""
                  className="flex items-center gap-1 text-[15px] font-medium text-white"
                >
                  Services
                  <span className="transition-transform duration-300 group-hover:rotate-180">
                    <Icon
                      icon="ant-design:caret-down-filled"
                      className="h-[14px] w-[14px]"
                    />
                  </span>
                </Link>

                <div
                  className={`flex flex-col fixed top-full z-50 mt-5 w-[calc(100vw-2rem)] max-w-6xl -translate-x-1/2 rounded-xl bg-gradient-to-b from-[#F5F9FD] to-[#FFFFFF] shadow-xl transition-all duration-200 ${
                    desktopMenu === "services"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  <span className="invisible group-hover:visible absolute left-140  -top-0.5   w-[100px] h-[5px] rounded-xl transition-all duration-200 bg-[#0F66EA] "></span>
                  <div className="flex gap-5">
                    {/* LEFT */}
                    <div className="flex-1 space-y-2 border-r border-[#E0E8F1] py-6 pr-4">
                      {serviceCategories.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onMouseEnter={() => setActiveService(service.id)}
                          onFocus={() => setActiveService(service.id)}
                          className={`flex w-full cursor-pointer items-center gap-3 rounded-br-2xl rounded-tr-2xl border-l-4 border-transparent p-3 text-left transition-all duration-200 ${
                            activeService === service.id
                              ? "border-l-[#05B9EE] bg-[#E8F3FF]"
                              : "hover:border-l-[#05B9EE] hover:bg-[#E8F3FF]"
                          }`}
                        >
                          <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#DCE9FA]">
                            <Icon
                              icon={service.icon}
                              className="text-2xl text-[#07569C]"
                            />
                          </span>

                          <span>
                            <span className="block text-[15px] font-semibold text-[#111D31]">
                              {service.title}
                            </span>

                            <span className="block text-sm text-[#758FB4]">
                              {service.description}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* RIGHT */}
                    <div className="flex-2 py-4">
                      <h4 className="text-lg font-bold tracking-wide text-[#111D31]">
                        {serviceDetails[activeService].mainHeading}
                      </h4>

                      {activeService === "application" ? (
                        <div className="mt-5 grid grid-cols-3 gap-x-6">
                          {/* COLUMN 1: APPLICATION SECURITY */}
                          <div className="border-r border-[#D8E3EF] pr-5">
                            {serviceDetails.application.sections
                              .filter(
                                (section) =>
                                  section.heading === "APPLICATION SECURITY",
                              )
                              .map((section) => (
                                <div key={section.heading}>
                                  <h3 className="relative mb-4 h-[40px] border-b border-[#E0E7EF] pb-3 text-sm font-medium text-[#6885B2]">
                                    {section.heading}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-[#05B9EE]" />
                                  </h3>

                                  <ul className="space-y-2">
                                    {section.links.map((service) => (
                                      <li
                                        className="list-none"
                                        key={service.href}
                                      >
                                        <Link
                                          href={service.href}
                                          onClick={closeMenu}
                                          className="flex items-start justify-between gap-2 py-1 text-sm text-[#415675]"
                                        >
                                          <span>{service.label}</span>
                                          <Icon
                                            icon="akar-icons:chevron-right-small"
                                            className="mt-0.5 shrink-0 text-xl text-[#7590B8]"
                                          />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </div>

                          {/* COLUMN 2: CLOUD + CONNECTED & INDUSTRIAL */}
                          <div className="border-r border-[#D8E3EF] pr-5">
                            {serviceDetails.application.sections
                              .filter(
                                (section) =>
                                  section.heading ===
                                    "CLOUD & INFRASTRUCTURE" ||
                                  section.heading === "CONNECTED & INDUSTRIAL",
                              )
                              .map((section) => (
                                <div
                                  key={section.heading}
                                  className="mb-7 last:mb-0"
                                >
                                  <h3 className="relative mb-4 h-[40px] border-b border-[#E0E7EF] pb-3 text-sm font-medium text-[#6885B2]">
                                    {section.heading}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-[#05B9EE]" />
                                  </h3>

                                  <ul className="space-y-2">
                                    {section.links.map((service) => (
                                      <li key={service.href}>
                                        <Link
                                          href={service.href}
                                          onClick={closeMenu}
                                          className="flex items-start justify-between gap-2 py-1 text-sm text-[#415675]"
                                        >
                                          <span>{service.label}</span>
                                          <Icon
                                            icon="akar-icons:chevron-right-small"
                                            className="mt-0.5 shrink-0 text-xl text-[#7590B8]"
                                          />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </div>

                          {/* COLUMN 3: DIGITAL PLATFORMS */}
                          <div className="pr-2">
                            {serviceDetails.application.sections
                              .filter(
                                (section) =>
                                  section.heading === "DIGITAL PLATFORMS",
                              )
                              .map((section) => (
                                <div key={section.heading}>
                                  <h3 className="relative mb-4 h-[40px] border-b border-[#E0E7EF] pb-3 text-sm font-medium text-[#6885B2]">
                                    {section.heading}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-[#05B9EE]" />
                                  </h3>

                                  <ul className="space-y-2">
                                    {section.links.map((service) => (
                                      <li key={service.href}>
                                        <Link
                                          href={service.href}
                                          onClick={closeMenu}
                                          className="flex items-start justify-between gap-2 py-1 text-sm text-[#415675]"
                                        >
                                          <span>{service.label}</span>
                                          <Icon
                                            icon="akar-icons:chevron-right-small"
                                            className="mt-0.5 shrink-0 text-xl text-[#7590B8]"
                                          />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : (
                        /* All other categories keep their existing data and render normally */
                        <div className="mt-5 grid grid-cols-3 gap-x-6 gap-y-6">
                          {serviceDetails[activeService].sections.map(
                            (section) => (
                              <div
                                key={section.heading}
                                className="border-r border-[#D8E3EF] pr-5 last:border-r-0"
                              >
                                <h3 className="relative mb-4 h-[40px] border-b border-[#E0E7EF] pb-3 text-sm font-medium uppercase text-[#6885B2]">
                                  {section.heading}
                                  <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-[#05B9EE]" />
                                </h3>

                                <ul className="space-y-2">
                                  {section.links.map((service) => (
                                    <li key={service.href}>
                                      <Link
                                        href={service.href}
                                        onClick={closeMenu}
                                        className=" flex items-center justify-between gap-2 rounded-md py-1 text-sm text-[#415675]"
                                      >
                                        <span>{service.label}</span>
                                        <Icon
                                          icon="akar-icons:chevron-right-small"
                                          className="shrink-0 text-[15px] font-semibold text-[#7590B8]"
                                        />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
              {/* this is the company  */}
              <li
                className="relative"
                onMouseEnter={() => setDesktopMenu("company")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href=""
                  className="text-[15px] font-medium flex items-center gap-1 text-white"
                >
                  Company {""}
                  <span className="transition-transform duration-300 group-hover:rotate-180">
                    <Icon
                      icon="ant-design:caret-down-filled"
                      className="h-[14px] w-[14px]"
                    />
                  </span>
                </Link>
                <div
                  className={`flex flex-col items-center absolute left-1/2 top-full z-50 mt-5 px-6 py-6 w-xl -translate-x-1/2 rounded-xl bg-gradient-to-b from-[#F5F9FD] to-[#FFFFFF] transition-all duration-200 ${
                    desktopMenu === "company"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  <span className="invisible group-hover:visible absolute  -top-0.5   w-[100px] h-[5px] rounded-xl transition-all duration-200 bg-[#0F66EA] "></span>
                  <div>
                    <div className="grid grid-cols-2 gap-5">
                      {company.map((item, index) => (
                        <div key={index}>
                          <h4 className="border-b border-[#D8E3EF] pb-3 text-sm font-medium text-[#29559D]">
                            {item.mainHeading}
                          </h4>

                          <div className="mt-5 space-y-4">
                            {item.list.map((listItem, listIndex) => (
                              <Link
                                key={listIndex}
                                onClick={closeMenu}
                                href={listItem.link}
                                className="block space-y-1 group/item"
                              >
                                <h5 className="text-sm font-semibold text-[#090B21] transition-colors group-hover/item:text-[#0F66EA]">
                                  {listItem.name}
                                </h5>

                                <p className="text-[13px] font-medium text-[#979797]">
                                  {listItem.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Desktop Contact Button */}
          <Link
            href="/company/contact"
            className="hidden lg:flex h-[40px] w-[120px] items-center justify-center rounded-[7px] border-[2px] border-[#3263B1] bg-gradient-to-r from-[#3263B1] to-[#1C3D70] text-[14px] font-semibold text-white shadow-[0_6px_20px_rgba(45,100,180,0.25)] transition-all duration-200 hover:brightness-110"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-lg cursor-pointer text-white lg:hidden"
          >
            <Icon
              icon={
                isOpen
                  ? "material-symbols:close-rounded"
                  : "material-symbols:menu-rounded"
              }
              className="h-8 w-8"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-0 right-0 top-[65px] z-50 overflow-y-auto bg-[#020E1C] transition-all duration-300 lg:hidden ${
            isOpen
              ? "max-h-[calc(100dvh-65px)] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-white/10 px-6 py-6 sm:px-8">
            <ul className="flex flex-col gap-5 text-[15px] font-medium text-white">
              {/* HOME */}
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              {/* PRODUCTS */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center gap-1"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "product" ? null : "product",
                    )
                  }
                >
                  Products
                  <Icon
                    icon="ant-design:caret-down-filled"
                    className={`h-[14px] w-[14px] transition-transform duration-300 ${
                      openDropdown === "product" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openDropdown === "product"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 py-4 pl-4">
                      {product.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMenu}
                          className="space-y-1"
                        >
                          <h3 className="text-sm font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="text-[12px] font-normal text-gray-400">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* SERVICES */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center gap-1"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "services" ? null : "services",
                    )
                  }
                >
                  Services
                  <Icon
                    icon="ant-design:caret-down-filled"
                    className={`h-[14px] w-[14px] transition-transform duration-300 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openDropdown === "services"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 py-4 pl-4">
                      {/* SERVICE CATEGORIES */}
                      {serviceCategories.map((item) => (
                        <div key={item.id}>
                          <button
                            type="button"
                            onClick={() => setActiveService(item.id)}
                            className={`flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors ${
                              activeService === item.id
                                ? "bg-[#102C49]"
                                : "hover:bg-[#102C49]"
                            }`}
                          >
                            <Icon
                              icon={item.icon}
                              className="shrink-0 text-xl text-[#05B9EE]"
                            />

                            <span>
                              <span className="block text-sm font-semibold text-white">
                                {item.title}
                              </span>
                              <span className="block text-xs font-normal text-gray-400">
                                {item.description}
                              </span>
                            </span>
                          </button>
                        </div>
                      ))}

                      {/* SELECTED CATEGORY SERVICES */}
                      <div className="mt-2 border-l border-[#05B9EE]/50 pl-4">
                        <h4 className="mb-3 text-sm font-semibold text-[#05B9EE]">
                          {
                            serviceCategories.find(
                              (item) => item.id === activeService,
                            )?.title
                          }
                        </h4>

                        <div className="flex flex-col gap-4">
                          {serviceDetails[activeService].sections.map(
                            (section) => (
                              <div key={section.heading}>
                                <h5 className="mb-2 text-[11px] font-semibold tracking-wider text-[#7590B8]">
                                  {section.heading}
                                </h5>

                                <div className="flex flex-col gap-3">
                                  {section.links.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={closeMenu}
                                      className="flex items-center justify-between gap-2 text-[13px] font-normal text-gray-300 transition-colors hover:text-[#05B9EE]"
                                    >
                                      <span>{service.label}</span>
                                      <Icon
                                        icon="akar-icons:chevron-right-small"
                                        className="shrink-0 text-lg text-[#7590B8]"
                                      />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* COMPANY */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center gap-1"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "company" ? null : "company",
                    )
                  }
                >
                  Company
                  <Icon
                    icon="ant-design:caret-down-filled"
                    className={`h-[14px] w-[14px] transition-transform duration-300 ${
                      openDropdown === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openDropdown === "company"
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-2 gap-5 py-4 pl-4">
                      {company.map((item) => (
                        <div key={item.mainHeading}>
                          <h4 className="border-b border-white/10 pb-2 text-xs font-semibold text-[#05B9EE]">
                            {item.mainHeading}
                          </h4>

                          <div className="mt-3 flex flex-col gap-4">
                            {item.list.map((listItem) => (
                              <Link
                                key={listItem.link}
                                href={listItem.link}
                                onClick={closeMenu}
                                className="space-y-1"
                              >
                                <h5 className="text-sm font-semibold text-white">
                                  {listItem.name}
                                </h5>
                                <p className="text-[11px] font-normal text-gray-400">
                                  {listItem.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* CONTACT */}
              <li className="pt-2">
                <Link
                  href="/company/contact"
                  onClick={closeMenu}
                  className="flex h-[50px] w-full items-center justify-center rounded-lg bg-gradient-to-b from-[#3D73BA] to-[#285899] text-[16px] font-semibold text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
