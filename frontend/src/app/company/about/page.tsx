"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Animation } from "../../../components/ui/Animation";
import aboutstory from "../../../assets/about/aboutstory.png";
import herobackground from "../../../assets/about/abouthero.png";
import TimelineAnimation from "../../../components/ui/TimelineAnimation";
import profile from "../../../assets/about/profile.jpg";
import ceo from "../../../assets/about/ceo.png";
import saleshead from "../../../assets/about/sales.png";
import compliancehead from "../../../assets/about/complianceHead.png";
import offensivesecurityhead from "../../../assets/about/offensivesecurityhead.png";
import productlead from "../../../assets/about/productLead.png";
import hrteam from "../../../assets/about/hrteam.png";
import team from "../../../assets/about/team.png";
import team1 from "../../../assets/about/team1.png";
import crestLogo from "../../../assets/about/crest.png"
import certinLogo from "../../../assets/about/certin.png"
import isoLogo from "../../../assets/about/iso.png"
import rama from "../../../assets/about/Rama Photo.jpg"
import satish from "../../../assets/about/Sathish1.png"
import satishM from "../../../assets/about/Satish_M.png"

const data = [
  {
    number: "150+",
    description: "Enterprise Clients Protected",
  },
  {
    number: "3k+",
    description: "Security Assessments Delivered",
  },
  {
    number: "10+",
    description: "Years of Cybersecurity Expertise",
  },
  {
    number: "5+",
    description: "of the Top 10 Global Tech Companies",
  },
];

const timelineData = [
  {
    id: 1,
    year: "2015",
    title: "THE BEGINNING",
    description:
      "Founded with a vision to strengthen information security and build a safer digital ecosystem.",
    position: "bottom",
  },
  {
    id: 2,
    year: "2016",
    title: "BUILDING CAPABILITIES",
    description:
      "Expanded cybersecurity capabilities and established a strong foundation in security consulting.",
    position: "top",
  },
  {
    id: 3,
    year: "2019",
    title: "ENTERPRISE EXPANSION",
    description:
      "Expanded into enterprise cybersecurity engagements, strengthening our service capabilities.",
    position: "bottom",
  },
  {
    id: 4,
    year: "2021",
    title: "CERT-In EMPANELMENT",
    description:
      "Achieved CERT-In empanelment, reinforcing our commitment to cybersecurity excellence.",
    position: "top",
  },
  {
    id: 5,
    year: "2022",
    title: "ISO 27001 CERTIFICATION",
    description:
      "Achieved ISO 27001 certification, demonstrating our commitment to information security management.",
    position: "bottom",
  },
  {
    id: 6,
    year: "2023",
    title: "200+ CUSTOMERS",
    description:
      "Reached 200+ customers, delivering cybersecurity services across India.",
    position: "top",
  },
  {
    id: 7,
    year: "2025",
    title: "EXPANSION & INNOVATION",
    description:
      "Expanded our presence across India with multiple offices and introduced our in-house cybersecurity product, Vulnytics.",
    position: "bottom",
  },
  {
    id: 8,
    year: "2026",
    title: "CREST ACCREDITATION",
    description:
      "Achieved CREST accreditation, launched Drosera.ai, expanded our global delivery and SOC operations, grew to 100+ professionals, and surpassed 500 customers.",
    position: "top",
  },
];

const accreditations = [
  {
    id: 1,
    title: "CREST MEMBER",
    logo: crestLogo,
    alt: "CREST Member",
    logoClass: "h-[96px] sm:h-[100px]",
    description: (
      <>
        ISECURION is a{" "}
        <strong className="font-semibold text-white">CREST Member,</strong>{" "}
        accredited for Penetration Testing.
      </>
    ),
  },
  {
    id: 2,
    title: "CERT-IN EMPANELLED",
    logoText: true,
    description: (
      <>
        ISECURION is empanelled by{" "}
        <strong className="font-semibold text-white">CERT-In</strong> under the
        Ministry of Electronics and Information Technology.
      </>
    ),
  },
  {
    id: 3,
    title: "ISO 27001:2022 CERTIFIED",
    logo: isoLogo,
    alt: "ISO 27001",
    logoClass: "mt-1 h-[92px] sm:h-[96px]",
    description: (
      <>
        ISECURION is{" "}
        <strong className="font-semibold text-white">ISO 27001:2022</strong>{" "}
        certified, ensuring robust information security management.
      </>
    ),
  },
];

function About() {
  return (
    <div className="bg-[#060D1B]">
      {/* hero section  */}
      <div
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${herobackground.src})` }}
      >
        <div className="mx-auto max-w-7xl text-[#FFFFFF] text-center px-6 sm:px-10">
          {/* Breadcrumb Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-center space-x-1 text-base sm:text-lg font-semibold"
          >
            <Link href="/">HOME</Link>
            <span>/</span>
            <span>ABOUT US</span>
          </motion.div>

          {/* Heading Animation */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className=" text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold bg-clip-text max-w-xl mx-auto mt-3 leading-8 md:leading-12 text-transparent bg-linear-to-l from-[#2563EB] to-[#E9E9E9]"
          >
            Securing digital trust for a connected world.
          </motion.h1>
        </div>
      </div>

      {/* ABOUT Company */}
      <div className=" py-14 relative overflow-hidden bg-[#070D1A]">
        <div className="absolute blur-3xl w-[200px] h-[200px] -top-20 -right-10 rounded-full bg-[#4675CE4D]"></div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          {/* heading  */}
          <Animation>
            <div className="space-y-3 flex flex-col items-center lg:items-start ">
              <div className="w-fit px-4 py-2 rounded-4xl  bg-[#161B2F] ">
                <p className="text-sm font-medium flex items-center gap-2  uppercase text-[#B4CAFD]">
                  {" "}
                  <span>
                    <Icon
                      icon="ri:shield-star-fill"
                      width={25}
                      height={25}
                      className="text-[#0F66EA]"
                    />
                  </span>{" "}
                  ABOUT Company
                </p>
              </div>
              <h2 className=" font-medium mx-auto lg:mx-0 text-center lg:text-left leading-8 sm:leading-12 max-w-md text-white mt-4">
                Building a safer digital tomorrow, today.
              </h2>
              <p className="text-base sm:text-base font-medium max-w-3xl mx-auto lg:mx-0 text-center lg:text-left leading-6 md:leading-7 text-[#D1D1D1] max-w-[850px]">
                ISECURION is an{" "}
                <span className="text-[#9AA4BA]">
                  CERT-In Empanelled and ISO 27001:2022 certified
                </span>{" "}
                information security consulting company and a <span className="text-[#9AA4BA]"> CREST Member </span>, accredited for Penetration Testing.
                ISECURION is fully compliant with India's Digital Personal Data Protection (DPDP) Act, 2023, providing out-most service quality, innovation and research in the
                field of Information Security and Consultancy. We provide a unique blend of services to our customers catering to the current information security and data privacy landscape.
              </p>
              <p className="text-base sm:text-base font-medium max-w-3xl mx-auto lg:mx-0 text-center lg:text-left leading-6 md:leading-7 text-[#D1D1D1] max-w-[853px]">
                Our business oriented approach helps us understand our client’s security requirements based on their business type and processes related to it. Along with identifying critical
                loopholes in our client systems, ISECURION also provides support in remediation by aligning them with <Link href="/services/vulnerability-assessment-penetration-testing" className="hover:underline text-[#0F66CA]" >industry best practices</Link>  and <Link href="/services/iso-27001" className="hover:underline text-[#0F66CA]"> compliance requirements</Link>.
              </p>
            </div>
          </Animation>

          {/* <Animation>
            
          </Animation> */}
        </div>
      </div>
      <div className="mt-10 w-full  overflow-hidden bg-[#070D1A]">
        <Image src={team1} alt="about story" className="w-full " />
      </div>

      {/* ACCREDITATIONS & RECOGNITION */}
      <section className="relative overflow-hidden bg-[#020712] py-14 sm:py-16">
        {/* Decorative background (glows, arcs, dots) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* top-left glow */}
          <div className="absolute -left-28 -top-28 h-[320px] w-[320px] rounded-full bg-[#0F66EA]/25 blur-[100px] sm:h-[420px] sm:w-[420px]" />

          {/* bottom-right glow + light streak */}
          <div className="absolute -bottom-20 -right-20 h-[260px] w-[260px] rounded-full bg-[#0F66EA]/25 blur-[90px] sm:h-[320px] sm:w-[320px]" />
          <div className="absolute bottom-16 right-0 hidden h-[2px] w-[300px] -rotate-[33deg] bg-gradient-to-r from-transparent via-[#2F7CFF] to-transparent blur-[1px] md:block" />

          {/* top-right arcs */}
          <svg
            className="absolute right-0 top-0 hidden h-[260px] w-[260px] md:block"
            viewBox="0 0 260 260"
            fill="none"
          >
            <circle cx="310" cy="-50" r="170" stroke="#2563D8" strokeOpacity="0.22" />
            <circle cx="310" cy="-50" r="215" stroke="#2563D8" strokeOpacity="0.18" />
            <circle cx="310" cy="-50" r="260" stroke="#2563D8" strokeOpacity="0.14" />
            <circle cx="310" cy="-50" r="305" stroke="#2563D8" strokeOpacity="0.1" />
            <circle cx="236" cy="40" r="6" fill="#19D3F3" fillOpacity="0.25" />
            <circle cx="236" cy="40" r="2.5" fill="#19D3F3" />
          </svg>

          {/* left arcs */}
          <svg
            className="absolute left-0 top-[270px] hidden h-[260px] w-[200px] md:block"
            viewBox="0 0 200 260"
            fill="none"
          >
            <circle cx="-70" cy="150" r="110" stroke="#2563D8" strokeOpacity="0.22" />
            <circle cx="-70" cy="150" r="150" stroke="#2563D8" strokeOpacity="0.18" />
            <circle cx="-70" cy="150" r="190" stroke="#2563D8" strokeOpacity="0.14" />
            <circle cx="35" cy="92" r="6" fill="#19D3F3" fillOpacity="0.25" />
            <circle cx="35" cy="92" r="2.5" fill="#19D3F3" />
            <circle cx="2" cy="118" r="2" fill="#19D3F3" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          {/* Heading */}
          <Animation>
            <div className="mx-auto flex max-w-[880px] flex-col items-center text-center">
              {/* Eyebrow with fading lines */}
              <div className="flex items-center justify-center gap-4 sm:gap-8">
                <span className="hidden h-[1.5px] w-16 bg-gradient-to-r from-transparent to-[#9AA0AB] sm:block lg:w-28" />
                <p className="text-xs font-medium uppercase tracking-[1px] text-[#D9DCE3] sm:text-base lg:text-[18px]">
                  ACCREDITATIONS &amp; RECOGNITION
                </p>
                <span className="hidden h-[1.5px] w-16 bg-gradient-to-l from-transparent to-[#9AA0AB] sm:block lg:w-28" />
              </div>

              <h2 className="mt-5 text-[28px] font-medium leading-[1.2] text-white sm:text-[34px] lg:text-[40px]">
                Trusted. <span className="text-[#0F66EA]">Recognised</span>.
                Compliant.
              </h2>

              <p className="mt-5 max-w-[880px] text-sm leading-[1.9] text-[#D1D1D1] sm:text-base">
                Recognised by leading industry bodies and certified against
                globally recognised standards, reinforcing our commitment to
                trusted cybersecurity practices and service excellence.
              </p>
            </div>
          </Animation>

          {/* Cards */}
          <Animation>
            <div className="mx-auto mt-10 flex max-w-[1030px] flex-wrap justify-center gap-6 sm:mt-14 lg:mt-[72px]">
              {accreditations.map((item) => (
                <div
                  key={item.id}
                  className="w-full max-w-[420px] rounded-md border-t-[5px] border-[#56A0D2] bg-gradient-to-b from-[#080E1B] to-[#050A15] px-4 pb-6 pt-[26px] sm:w-[calc(50%-12px)] sm:max-w-none lg:w-[calc(33.333%-16px)]"
                >
                  {/* Logo / Text */}
                  <div className="flex h-[100px] items-center">
                    {item.logoText ? (
                      <p className="text-[24px] font-bold tracking-[-0.5px] sm:text-[28px]">
                        <span className="text-[#3169B2]">CERT-In</span>{" "}
                        <span className="text-[#C9D3E2]">Certified</span>
                      </p>
                    ) : (
                      <Image
                        src={item.logo}
                        alt={item.alt}
                        className={`w-auto object-contain ${item.logoClass}`}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[17px] font-medium uppercase tracking-[0.3px] text-white sm:text-[18px]">
                    {item.title}
                  </h3>

                  {/* Accent bar */}
                  <span className="mt-3 block h-[2px] w-20 bg-gradient-to-r from-[#3A7CA5] to-[#56A0D2]" />

                  {/* Description */}
                  <p className="mt-4 text-[15px] leading-[27px] text-[#D1D1D1]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Animation>
        </div>
      </section>

      {/* our story  */}
      <div className="py-14 bg-[#070D1A]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Animation>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-fit px-4 py-2 rounded-4xl bg-[#161B2F] ">
                  <p className="text-sm font-medium flex items-left gap-2 sectionheading uppercase text-[#B4CAFD]">
                    {" "}
                    <span>
                      <Icon
                        icon="ri:shield-star-fill"
                        width={25}
                        height={25}
                        className="text-[#0F66EA]"
                      />
                    </span>{" "}
                    our story
                  </p>
                </div>
                <h2 className="w-full lg:max-w-md font-medium lg:leading-11.25 text-white mt-4">
                  Building a more secure digital future
                </h2>
                <p className="text-[16px] font-medium lg:max-w-lg leading-[28px] text-[#D1D1D1] mt-4">
                  At ISECURION, we help organizations stay resilient against
                  evolving cyber threats through expert cybersecurity services
                  and purpose-built security solutions.
                </p>
              </div>
            </Animation>
            <Animation>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-3xl font-medium text-white">
                      {item.number}
                    </h3>
                    <p className="text-[15px] font-medium text-[#D1D1D1] mt-2 max-w-[200px] leading-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Animation>
          </div>

          <Animation>
            <div className="flex-1 flex flex-row gap-8 justify-center">
              {/* Timeline */}
              <div className="flex flex-col items-center mt-5">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F66EA]" />

                <div className="h-[530px] sm:h-[300px] lg:h-[300px] xl:h-[300px] w-0 border-l border-dashed border-[#646464]" />

                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F66EA]" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Mission */}
                <div>
                  <h3 className="text-[28px] font-medium text-white">
                    Our Mission
                  </h3>

                  <p className="text-[16px] max-w-2xl leading-[25px] text-[#D1D1D1] mt-4 max-w-[518px]">
                    Dedicated to empowering organizations in navigating today's
                    cybersecurity challenges through trusted consulting,
                    advanced technical services, and innovative security
                    platforms.
                  </p>

                  <ul className="mt-6 space-y-2.5 text-base font-normal text-[#D1D1D1] max-w-[520px]">
                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span className=" ">
                        Deliver practical security solutions that reduce cyber
                        risk.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span className=" ">
                        Enable organizations to achieve compliance with
                        confidence.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span className=" ">
                        Strengthen business resilience through continuous
                        security improvement.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Vision */}
                <div className="py-8">
                  <h3 className="text-[28px] font-medium text-white">
                    Our Vision
                  </h3>

                  <p className="text-[16px] max-w-2xl text-base leading-[25px] text-[#D1D1D1] mt-4 max-w-[518px]">
                    To become a globally trusted cybersecurity partner by
                    continuously innovating and setting new standards in
                    information security, resilience, and digital trust.
                  </p>

                  <ul className="mt-6 space-y-2.5 text-base text-[#D1D1D1] max-w-[520px]">
                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span>
                        Build a safer digital ecosystem for every organization.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span>
                        Drive long-term security through expertise, technology,
                        and innovation.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon
                        icon="iconoir:badge-check"
                        className="mt-1 text-[#07B356] w-[18px] h-[18px]"
                      />
                      <span>
                        Lead the future of cybersecurity with innovation and
                        trusted expertise.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </div>

      {/* our journey  */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#000B23] to-[#092E7030] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:pr-15 lg:pl-2">
          {/* Heading */}
          <Animation>
            <div className="relative flex items-center justify-center">
              <h2 className="whitespace-nowrap text-center text-[16px] font-semibold uppercase tracking-[2px] text-[#15264D] min-[420px]:text-[18px] min-[420px]:tracking-[4px] sm:text-[24px] sm:tracking-[6px] md:text-[26px] md:tracking-[10px] lg:text-[30px] lg:tracking-[12px]">
                Journey Of ISECURION
              </h2>

              <h4 className="absolute whitespace-nowrap text-[16px] font-medium uppercase tracking-[3px] text-white sm:text-[20px] lg:text-[22px]">
                Timeline
              </h4>
            </div>
          </Animation>

          {/* Timeline */}
          <Animation>
            {/* ───────── Desktop (lg and above): horizontal ───────── */}
            <div className="relative hidden lg:block mt-10 py-10">
              <div
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${timelineData.length}, minmax(0, 1fr))`,
                  // 1 top text | 2 top connector | 3 year | 4 circle + line | 5 bottom connector | 6 bottom text
                  gridTemplateRows: "auto 85px 46px 28px 66px auto",
                }}
              >
                {timelineData.map((item, index) => {
                  const isBottom = item.position === "bottom";

                  const textBlock = (
                    <div className="w-[180px] shrink-0 text-center xl:w-[200px] 2xl:w-[210px]">
                      <h5 className="mb-[3px] text-[12px] font-medium leading-[18px] tracking-[0.5px] text-[#77EBFE] xl:text-[13px]">
                        {item.title}
                      </h5>
                      <p className="mt-2 text-[13px] font-medium leading-[1.5] text-[#FEFEFE] xl:text-sm">
                        {item.description}
                      </p>
                    </div>
                  );

                  const connector = (
                    <div className="relative h-full w-px bg-[#DCDCDC] after:absolute after:bottom-0 after:left-1/2 after:h-[6px] after:w-[6px] after:-translate-x-1/2 after:rounded-full after:bg-[#D5D9E0]" />
                  );

                  return (
                    <div
                      key={item.id}
                      className="grid row-span-6 justify-items-stretch [grid-template-rows:subgrid]"
                      style={{ gridColumn: index + 1, gridRow: "1 / span 6" }}
                    >
                      {/* 1. Text above the line */}
                      <div className="flex items-start justify-center pb-6">
                        {!isBottom && textBlock}
                      </div>

                      {/* 2. Connector above the line */}
                      <div className="flex justify-center">
                        {!isBottom && connector}
                      </div>

                      {/* 3. Year (always above the line) */}
                      <div className="flex items-center justify-center">
                        <h4 className="text-xl font-semibold leading-8 text-[#0F66EA] xl:text-2xl">
                          {item.year}
                        </h4>
                      </div>

                      {/* 4. Circle + horizontal line segment */}
                      <div className="relative flex items-center justify-center before:absolute before:inset-x-0 before:top-1/2 before:h-[2px] before:-translate-y-1/2 before:bg-[#2563D8]">
                        <div className="relative z-10 h-7 w-7 rounded-full border-[3.5px] border-[#55D6FF] bg-[#101B35]">
                          <div className="absolute inset-[3px] rounded-full bg-[#55D6FF]" />
                        </div>
                      </div>

                      {/* 5. Connector below the line */}
                      <div className="flex justify-center pt-2.5">
                        {isBottom && <div className="h-[56px]">{connector}</div>}
                      </div>

                      {/* 6. Text below the line */}
                      <div className="flex items-start justify-center pt-4">
                        {isBottom && textBlock}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ───────── Mobile / Tablet (below lg): vertical ───────── */}
            <div className="relative mx-auto mt-10 max-w-2xl lg:hidden">
              {timelineData.map((item, index) => {
                const isLast = index === timelineData.length - 1;

                return (
                  <div
                    key={item.id}
                    className={`relative flex gap-5 ${isLast ? "" : "pb-10"}`}
                  >
                    {/* Vertical line segment to the next point */}
                    {!isLast && (
                      <div className="absolute bottom-0 left-[9.5px] top-7 w-[2px] bg-[#2563D8]" />
                    )}

                    {/* Timeline point */}
                    <div className="relative z-10 h-5 w-5 shrink-0 rounded-full border-[3.5px] border-[#55D6FF] bg-[#101B35]">
                      <div className="absolute inset-[4px] rounded-full bg-[#55D6FF]" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xl font-semibold leading-7 text-[#0F66EA]">
                        {item.year}
                      </h4>

                      <h5 className="mt-1 text-xs font-medium tracking-[0.5px] text-[#55D6FF]">
                        {item.title}
                      </h5>

                      <p className="mt-1.5 text-sm font-medium leading-6 text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Animation>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="w-full bg-[#070D1A] py-14 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* SECTION HEADING */}
          <Animation>
            <div className="mb-10 flex flex-col items-center space-y-3 text-center sm:mb-12">
              <div className="flex w-fit items-center gap-2 rounded-full bg-[#161B2F] px-4 py-2">
                <Icon
                  icon="fa-solid:users"
                  width={16}
                  className="text-[#0F66EA]"
                />
                <p className="text-sm sm:text-base font-medium uppercase tracking-wide text-[#AAB0C0]">
                  Our Team
                </p>
              </div>

              <h2 className="mt-2  leading-tight text-white ">
                The minds behind your security
              </h2>

              <p className="max-w-2xl  leading-6 text-[#D1D1D1] text-base sm:text-lg">
                A team of cybersecurity professionals united by passion,
                expertise, and a commitment to protect what matters most.
              </p>
            </div>
          </Animation>
          {/* ceo card  */}
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFFFFF]">
              Leadership
            </h3>
            <div className="w-[260px] h-[260px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
              <Image
                src={ceo}
                alt="CEO"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
              <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                Manjunath NG
              </p>
            </div>
            <p className="text-base font-semibold text-[#2388FF]">
              FOUNDER & CEO
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8 gap-10">
            <div className="flex flex-col items-center gap-5 ">

              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={saleshead}
                  alt="saleshead"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Shimanta Sen
                </p>
              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                General Manager
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 ">

              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={compliancehead}
                  alt="compliancehead"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Debashis Dey
                </p>
              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                Compliance Head
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">

              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={rama}
                  alt="Senior Manager"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Ramakrishnan S
                </p>

              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                Senior Manager
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 ">

              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={offensivesecurityhead}
                  alt="compliancehead"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Cephas Joseph
                </p>
              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                Offensive Security & Product Head
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">

              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={satish}
                  alt="Presales Manager"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Satish Shekdar
                </p>

              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                Presales Manager
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 ">

              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={productlead}
                  alt="compliancehead"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Manjesh Kumar LD
                </p>
              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                Product Lead
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={hrteam}
                  alt="HR Manager"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Dolly Chaudhrani
                </p>
              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                HR Manager
              </p>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={satishM}
                  alt="Presales Manager"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-fit px-5 py-2 rounded-3xl bg-[#F8FAFF]">
                <p className="text-base sm:text-xl font-semibold text-[#19213D]">
                  Sathish M
                </p>

              </div>
              <p className="text-base font-semibold text-[#2388FF]">
                Advisory
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
