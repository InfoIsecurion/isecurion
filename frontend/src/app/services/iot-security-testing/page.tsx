import React from "react";
import WordReveal, { Animation, AnimatedCard } from "../../../components/ui/Animation";
import IOTsecutityBg from "../../../assets/services/iot-security-bg.png";
import { Icon } from "@iconify/react";
import Link from "next/link";

const testingSteps = [
  {
    icon: "flowbite:file-search-outline",
    title: "Discover",
    description: "Map the IoT attack surface",
  },
  {
    icon: "boxicons:plus-shield",
    title: "Test",
    description: "Identify vulnerabilities",
  },
  {
    icon: "fe:target",
    title: "Exploit",
    description: "Validate real-world attack paths",
  },
  {
    icon: "material-symbols:description-outline-rounded",
    title: "Validate",
    description: "Assess impact and risk",
  },
  {
    icon: "bx:lock",
    title: "Secure",
    description: "Prioritize and remediate",
  },
];

const cards = [
  {
    icon: "fa-solid:shield-alt",
    iconBg: "#022D6C",
    title: "Prevent Security Breaches",
    description:
      "Identify exploitable weaknesses before attackers can compromise connected systems.",
  },
  {
    icon: "iconmind:hazard-outline-regular",
    iconBg: "#3B9E6A",
    title: "Reduce Operational Risk",
    description:
      "Detect vulnerabilities that could disrupt devices, networks, or critical operations.",
  },
  {
    icon: "akar-icons:people-group",
    iconBg: "#E24B4A",
    title: "Strengthen Customer Trust",
    description:
      "Protect connected products, services, and sensitive data with stronger security controls.",
  },
  {
    icon: "fluent:arrow-trending-lines-24-filled",
    iconBg: "#0F66EA",
    title: "Enable Business Growth",
    description:
      "Build a secure foundation for scaling IoT deployments and connected services.",
  },
  {
    icon: "iconmind:compliance-outline-regular",
    iconBg: "#C8912A",
    title: "Support Compliance",
    description:
      "Align IoT security practices with relevant regulatory and industry requirements.",
  },
  {
    icon: "bx:lock",
    iconBg: "#959EFE",
    title: "Improve Resilience",
    description:
      "Strengthen defenses against attacks that could create operational or business disruption.",
  },
];

function page() {
  return (
    <main className="bg-[black]">

      <section className="relative overflow-hidden bg-[#07101D]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat min-h-[560px] bg-[position:center_center] lg:bg-[position:center_center]"
          style={{
            backgroundImage: `url(${IOTsecutityBg.src})`,
          }}
        />

        <div className="absolute inset-0 bg-[#07101D]/10" />

        <div
          className="relative z-10 mx-auto flex min-h-[610px] max-w-7xl items-center px-6 py-16 sm:px-8 md:min-h-[560px] md:px-10
                    lg:min-h-[560px] lg:px-[26px] lg:py-[50px]"
        >
          <Animation>
            <div className="w-full max-w-[590px] md:max-w-[560px] lg:max-w-[570px] text-center md:text-left">
              {/* EYEBROW */}
              <p className="text-[14px] sm:text-base font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px]">
                IOT SECURITY TESTING
              </p>

              {/* HEADING */}
              <h1 className="mt-[18px] max-w-[570px]  font-semibold leading-[1.25] tracking-[-0.02em] text-white lg:mt-[22px] lg:leading-[1.4] animate-hero-reveal" style={{ animationDelay: "600ms" }}>
                Protect Your
                <br />
                Connected Ecosystem
              </h1>

              {/* FIRST DESCRIPTION */}
              <p className="mt-[24px] max-w-[550px] text-[15px] font-normal leading-[1.75] text-[#D1D1D1] sm:text-[17px] lg:mt-[26px] lg:max-w-[450px] lg:text-[17px] lg:leading-[1.72] animate-hero-reveal" style={{ animationDelay: "750ms" }}>
                Identify vulnerabilities across your connected devices, networks,
                and IoT infrastructure, before attackers do.
              </p>

              {/* SECOND DESCRIPTION */}
              <p className="mt-[18px] max-w-[550px] text-[15px] font-normal leading-[1.75] text-[#D1D1D1] sm:text-[17px] lg:mt-[18px] lg:max-w-[450px] lg:text-[17px] lg:leading-[1.72] animate-hero-reveal" style={{ animationDelay: "850ms" }}>
                ISECURION helps you secure your IoT environment with comprehensive
                testing, risk analysis, and actionable insights for stronger,
                safer operations.
              </p>

              <div className="mt-[30px] sm:mt-[34px] animate-hero-reveal" style={{animationDelay:"1050ms"}}>
                <Link href="/company/contact">
                  <button className="inline-flex h-[54px] items-center justify-center rounded-[9px] bg-white px-[20px] py-[14px] text-[13px] sm:text-[15px] font-medium text-[#31435C] transition-all duration-200 hover:bg-[#F3F5F8] sm:min-h-[54px] sm:px-[21px] lg:px-[20px] cursor-pointer">
                    <span>Schedule My IoT Security Consultation</span>

                    <span className="ml-[8px] text-[20px]">
                      <Icon icon="mdi:arrow-right" width={20} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </Animation>
        </div>

      </section>


      {/* OVERVIEW & HOW WE TEST SECTION */}
      <section className="relative border-t border-white/5 bg-[#07101D] pt-16 text-white sm:pt-18 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-[26px]">

          {/* TOP GRID: OVERVIEW & TIMELINE */}
          <Animation>
            <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">

              {/* LEFT COLUMN: OVERVIEW */}
              <div className="min-w-0">
                <p className="text-[14px] font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px]">
                  OVERVIEW
                </p>

                <WordReveal text="What Is IoT Security Testing?" className="mx-auto mt-4 max-w-[570px]text-[28px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[34px] lg:mx-0 lg:text-[36px] xl:text-[40px]">
                </WordReveal>



                <div className="mt-[22px] max-w-[530px] space-y-5  text-[#D1D1D1] lg:mx-0 sectionDescription">
                  <p className="animate-hero-reveal" style={{ animationDelay: "600ms" }}>
                    IoT Security Testing is a structured assessment of connected
                    devices, communication protocols, applications, APIs,
                    networks, and supporting infrastructure to identify
                    vulnerabilities before they can be exploited.
                  </p>

                  <p className="animate-hero-reveal" style={{ animationDelay: "750ms" }}>
                    ISECURION evaluates the complete IoT attack surface, from
                    device firmware and interfaces to cloud platforms, mobile
                    applications, and backend systems.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: HOW WE TEST THE IOT ATTACK SURFACE */}
              <div className="min-w-0">
                <p className="mb-7 text-center font-medium uppercase tracking-[0.2px] text-[#0F66EA] md:text-left sectionDescription">
                  HOW WE TEST THE IOT ATTACK SURFACE
                </p>

                {/* TIMELINE CONTAINER */}
                <div className="relative">

                  {/* CONTINUOUS TIMELINE LINE */}
                  <div className="absolute bottom-[2px] left-[66px] top-[10px] w-px bg-[#626877] sm:left-[74px]" />

                  {testingSteps.map((step, index) => (
                    <AnimatedCard
                      key={index}
                      delay={index * 0.15}
                      className="relative z-10 flex min-w-0 items-start gap-4 pb-7 last:pb-0 sm:gap-6"
                    >
                      {/* CIRCULAR ICON BADGE */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DADADA26] text-[#A0AEC0]">
                        <Icon
                          icon={step.icon}
                          className="h-6 w-6 text-gray-300"
                        />
                      </div>

                      {/* GLOWING BLUE DOT */}
                      <div className="flex h-11 w-3 shrink-0 items-center justify-center">
                        <div className="h-3 w-3 rounded-full border border-white/80 bg-[#0F66EA]" />
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="min-w-0 pt-2">
                        <h3 className="text-[16px] font-medium leading-tight text-white sm:text-base">
                          {step.title}
                        </h3>

                        <p className="mt-1 max-w-[360px] text-[13px] leading-relaxed text-[#94A3B8] sm:text-[15px]">
                          {step.description}
                        </p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>

            </div>
          </Animation>

          {/* BOTTOM CARDS GRID */}
          <div className="mt-10 grid grid-cols-1 items-stretch gap-5 py-10 sm:mt-12 sm:grid-cols-2 sm:py-12 lg:grid-cols-3 lg:gap-6 lg:py-16">

            {cards.map((card, index) => (
              <Animation key={card.title} delay={index * 0.12}>
                <div className="flex h-full min-h-[210px] flex-col justify-between rounded-[15px] border border-[#002C8C] bg-gradient-to-b from-[#0A1119] to-[#17366E] p-5 transition-all duration-300 hover:border-[#0F66EA] sm:p-6">

                  {/* ICON */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon
                      icon={card.icon}
                      className="text-[22px] text-white"
                    />
                  </div>

                  {/* TEXT CONTAINER */}
                  <div className="mt-6 sm:mt-8">
                    <h3 className="text-[16px] font-medium text-white sm:text-[18px]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 w-full max-w-[250px] text-[13px] leading-relaxed text-[#D1D1D1] sm:text-[14px]">
                      {card.description}
                    </p>
                  </div>

                </div>
              </Animation>
            ))}

          </div>

        </div>
      </section>


      {/* OUR METHODOLOGY SECTION */}
      <section className="relative bg-[#07101D] text-white py-10 sm:py-12 lg:pt-8 lg:pb-22">
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[1086px] h-[352px] rounded-full bg-[#7D70F0]/20 pointer-events-none z-0 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 ">
          {/* SECTION HEADER */}
          <div className="max-w-4xl">
            <p className="text-[14px] sm:text-base font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px] text-center md:text-left">
              OUR METHODOLOGY
            </p>

            <WordReveal text="From Discovery to IoT Resilience." className="mt-[16px] text-[32px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px] text-center md:text-left" />

            <p className="text-[#D1D1D1] sectionDescription mt-4 animate-hero-reveal" style={{ animationDelay: "600ms" }}>
              A structured assessment that combines automated analysis,
              expert-led testing, remediation guidance, and validation across
              the connected ecosystem.
            </p>
          </div>

          {/* 5-STEP METHODOLOGY GRID */}
          <Animation>
            <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
              {/* STEP 01 */}
              <AnimatedCard>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F66EA] text-[16px] font-semibold">
                      <span className="tracking-[3px]">01</span>
                      <Icon
                        icon="lucide:arrow-right"
                        className="h-5 w-5 text-[#F5F0E8A1]"
                      />
                    </div>
                    <p className="mt-4 text-[16px] text-white max-w-[160px] leading-6">
                      Information Gathering & Planning
                    </p>
                    <p className="mt-3 text-sm leading-[1.6] text-[#D1D1D1] max-w-[185px]">
                      Define the IoT environment, devices, architecture,
                      communication protocols, applications & assessment scope.
                    </p>
                  </div>
                  <div className="mt-8 pt-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#6B7C96]">
                      KEY FOCUS
                    </p>
                    <ul className="mt-3 space-y-2 text-[14px] text-[#D1D1D1D6]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Device Inventory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Architecture Mapping</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Communication Protocols</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>

              {/* STEP 02 */}
              <AnimatedCard delay={0.2}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F66EA] text-[16px] font-semibold">
                      <span className="tracking-[3px]">02</span>
                      <Icon
                        icon="lucide:arrow-right"
                        className="h-5 w-5 text-[#F5F0E8A1]"
                      />
                    </div>
                    <p className="mt-4 text-[16px] font-medium text-white max-w-[150px]">
                      Automated Security Analysis
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#D1D1D1] max-w-[180px]">
                      Identify exposed services, configuration weaknesses, known
                      vulnerabilities, insecure interfaces and attack-surface gaps.
                    </p>
                  </div>
                  <div className="mt-8 pt-4">
                    <p className="text-[14px] font-semibold uppercase tracking-wider text-[#6B7C96]">
                      KEY FOCUS
                    </p>
                    <ul className="mt-3 space-y-2 text-[14px] text-[#D1D1D1D6]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Device / Firmware</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Network / APIs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Cloud / Apps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>

              {/* STEP 03 */}
              <AnimatedCard delay={0.4}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F66EA] text-[16px] font-semibold">
                      <span className="tracking-[3px]">03</span>
                      <Icon
                        icon="lucide:arrow-right"
                        className="h-5 w-5 text-[#F5F0E8A1]"
                      />
                    </div>
                    <p className="mt-4 text-[16px] font-medium text-white max-w-[150px]">
                      Expert-Led Penetration Testing
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#D1D1D1] max-w-[180px]">
                      Manually validate vulnerabilities across devices, firmware,
                      APIs, networks, authentication and communication layers.
                    </p>
                  </div>
                  <div className="mt-8 pt-4">
                    <p className="text-[14px] font-semibold uppercase tracking-wider text-[#6B7C96]">
                      KEY FOCUS
                    </p>
                    <ul className="mt-3 space-y-2 text-[14px] text-[#D1D1D1D6]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Exploitation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Attack Paths</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Business Impact</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>

              {/* STEP 04 */}
              <AnimatedCard delay={0.6}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F66EA] text-[16px] font-semibold">
                      <span className="tracking-[3px]">04</span>
                      <Icon
                        icon="lucide:arrow-right"
                        className="h-5 w-5 text-[#F5F0E8A1]"
                      />
                    </div>
                    <p className="mt-4 text-[16px] text-white max-w-[150px]">
                      Reporting & Remediation
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#D1D1D1] max-w-[180px]">
                      Prioritize findings by severity and business impact with clear
                      remediation guidance for engineering and security teams.
                    </p>
                  </div>
                  <div className="mt-8 pt-4">
                    <p className="text-[14px] font-semibold uppercase tracking-wider text-[#6B7C96]">
                      KEY FOCUS
                    </p>
                    <ul className="mt-3 space-y-2 text-[14px] text-[#D1D1D1D6]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Detailed Report</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Risk Prioritization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Remediation Guidance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>

              {/* STEP 05 */}
              <AnimatedCard delay={0.8}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F66EA] text-[18px] font-semibold">
                      <span className="tracking-[3px]">05</span>
                    </div>
                    <p className="mt-4 text-[16px]  text-white max-w-[100px]">
                      Verify and Close
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#D1D1D1] max-w-[190px]">
                      Reassess remediated vulnerabilities and confirm that
                      identified weaknesses have been effectively addressed.
                    </p>
                  </div>
                  <div className="mt-8 pt-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#6B7C96]">
                      KEY FOCUS
                    </p>
                    <ul className="mt-3 space-y-2 text-[14px] text-[#D1D1D1D6]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Revalidation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Security Posture Check</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D1D1D1D6]" />
                        <span>Final Report</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </Animation>
        </div>
      </section>
    </main>
  );
}

export default page;
