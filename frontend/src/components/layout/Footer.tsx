"use client";
import React, { useState } from "react";
import Image from "next/image";
import isecurion_logo from "../../assets/home/isecurion_logo.png";
import { Icon } from "@iconify/react";
import lock from "../../assets/home/lock.png";
import Link from "next/link";

const locations = [
  {
    name: "Bangalore",
    address:
      "37, Judicial Layout 2nd Phase, Kanakapura Main Rd, Thalaghattaapura,Bengaluru - 560109, Karnataka",
  },
  {
    name: "Kolkata",
    address:
      "Arch Square, 8th Floor, Unit No. 809, Tower 1, Salt Lake City, Sector-V, Kolkata - 700091, West Bengal",
  },
  {
    name: "Ahmedabad",
    address:
      "GF-001 Mauryansh Elanza, Shyamal Cross Road, Nr. Parekh Hospital, Satelite, Ahmedabad - 380015, Gujarat",
  },
  {
    name: "Noida",
    address:
      "5006, 5th Floor, Nukleus Tower, Plot No. 29, Sector 142, Noida - 201305, Uttar Pradesh",
  },
  {
    name: "Mumbai",
    address:
      "Millennial POD, A-203, A Wing, Boomerang, Chandivali farm road, Andheri East, Maharashtra - 400072",
  },
  {
    name: "United States",
    address:
      "1014 N Plum Grove Road, Schaumburg, IL 60173, United States of America",
  },
];

function Footer() {
  const [activeLocation, setActiveLocation] = useState("Bangalore");

  return (
    <footer className="relative overflow-hidden bg-[#121828]">
      {/* MAIN FOOTER CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        {/* FOOTER CONTENT */}
        <div className="mt-4 flex flex-col gap-10 lg:flex-row lg:gap-8">
          {/* LEFT - LOGO */}
          <div className="w-full lg:w-[27%]">
            <Image
              src={isecurion_logo}
              alt="Isecurion"
              className="h-[50px] w-[200px]"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#9AA4BA]">
              Building cyber resilience through intelligent security services,
              platforms and continuous validation.
            </p>

            <h4 className="mt-8 text-sm font-medium text-white">
              CONNECT WITH US
            </h4>

            <div className="mt-3 flex gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2433] text-white">
                <Icon icon="iconoir:facebook" width={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2433] text-white">
                <Icon icon="line-md:twitter" width={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2433] text-white">
                <Icon icon="ri:linkedin-line" width={18} />
              </div>
            </div>
          </div>

          {/* CENTER - LINKS + CONTACT */}
          <div className="w-full lg:w-[43%]">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {/* Company */}
              <div>
                <h4 className="mb-5 text-sm text-white">
                  Company
                </h4>

                <ul className="space-y-3 text-sm text-[#BFBFBF]">
                  <li>About</li>
                  <li>Industries</li>
                  <li>Case Studies</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="mb-5 text-sm text-white">
                  Capabilities
                </h4>

                <ul className="space-y-3 text-sm text-[#BFBFBF]">
                  <li>VAPT</li>
                  <li>Compliance Auditing</li>
                  <li>VCISO Services</li>
                  <li>DPDP Act Compliance</li>
                  <li>
                    Market SOC
                    <br />
                    (MSOC) Services
                  </li>
                </ul>
              </div>

              {/* Platforms */}
              <div>
                <h4 className="mb-5 text-sm text-white">
                  Platforms
                </h4>

                <ul className="space-y-3 text-sm text-[#BFBFBF]">
                  <li>Vulnytics</li>
                  <li>Drosera Phishing</li>
                  <li>LMS</li>
                </ul>
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="mt-10 flex flex-col gap-6 rounded-[8px] bg-[#1E2433] px-4 py-3 sm:flex-row sm:items-center sm:px-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon
                    icon="material-symbols:mail-shield-rounded"
                    className="text-[#0F66EA]"
                    width={20}
                  />
                </div>

                <span className="text-sm font-medium text-white">
                  info@isecurion.com
                </span>
              </div>

              <div className="hidden h-[40px] w-[2px] bg-[#454D5F] sm:block"></div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon
                    icon="solar:call-medicine-bold"
                    className="text-[#0F66EA]"
                    width={20}
                  />
                </div>

                <span className="text-sm font-medium text-white">
                  +91 88612 01570
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT - GLOBAL PRESENCE */}
          <div className="w-full lg:flex-1">
            <h4 className="mb-5 text-sm text-white">
              Global Presence
            </h4>

            <div className="space-y-3 text-sm text-[#BFBFBF]">
              {locations.map((location) => {
                const isActive = activeLocation === location.name;

                return (
                  <div key={location.name}>
                    {/* Location Button */}
                    <button
                      type="button"
                      onClick={() => setActiveLocation(location.name)}
                      className="flex w-full cursor-pointer items-center gap-3 text-left"
                    >
                      <Icon
                        icon="dashicons:arrow-right"
                        className="shrink-0 text-[#0F66EA] transition-transform duration-300"
                        width={20}
                      />

                      <span
                        className={`transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#BFBFBF]"
                        }`}
                      >
                        {location.name}
                        {location.name === "Bangalore" && " (HQ)"}
                      </span>
                    </button>

                    {/* Address Dropdown */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="ml-5 pt-2 leading-5 text-[#BFBFBF] max-w-[250px]">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* LOCK IMAGE (Positioned at Screen End) */}
      <Image
        src={lock}
        alt="Lock Background"
        className="pointer-events-none absolute -bottom-10 -right-40 z-0 hidden h-[350px] w-[380px] lg:block"
      />

      {/* COPYRIGHT BAR */}
      <div className="relative z-10 bg-[#262D3D]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-2.5 text-[13px] text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
          {/* Left - Copyright */}
          <div className="flex flex-wrap items-center gap-3">
            <p>Copyright ©2026 Isecurion</p>
            <span className="hidden text-[#D1D1D1] sm:block">|</span>
            <p>All Rights Reserved</p>
          </div>

          {/* Right - Policies */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="" className="underline underline-offset-2">
              Privacy &amp; Policy
            </Link>
            <span className="text-[#D1D1D1]">|</span>
            <Link href="" className="underline underline-offset-2">
              Disclaimer
            </Link>
            <span className="text-[#D1D1D1]">|</span>
            <Link href="" className="underline underline-offset-2">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
