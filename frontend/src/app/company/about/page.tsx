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

const data = [
  {
    number: "50+",
    description: "Enterprise Clients Protected",
  },
  {
    number: "1.5k+",
    description: "Security Assessments Delivered",
  },
  {
    number: "15+",
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
    position: "bottom",
    description:
      "Founded to strengthen organizations against evolving cyber threats.",
  },
  {
    id: 2,
    year: "2016",
    position: "top",
    description:
      "Named among India's Top 25 Promising Cybersecurity Consultants.",
  },
  {
    id: 3,
    year: "2019",
    position: "bottom",
    description:
      "Achieved ISO 27001 certification for information security excellence.",
  },
  {
    id: 4,
    year: "2021",
    position: "top",
    description:
      "Became a CERT-In Empanelled Information Security Auditing Organization.",
  },
  {
    id: 5,
    year: "2023",
    position: "bottom",
    description:
      "Trusted by 200+ organizations, powered by 75+ cybersecurity experts.",
  },
];

function About() {
  return (
    <div>
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
            className="space-x-1 text-base sm:text-lg font-semibold"
          >
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="/about">ABOUT US</Link>
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
              <p className="text-base sm:text-base font-medium max-w-3xl mx-auto lg:mx-0 text-center lg:text-left leading-6 md:leading-7 text-[#D1D1D1] max-w-[753px]">
                ISECURION is an{" "}
                <span className="text-[#9AA4BA]">
                  CERT-In Empanelled and ISO 27001:2022 certified
                </span>{" "}
                information security consulting company providing out-most
                service quality, innovation and research in the field of
                Information Security and Consultancy. We provide a unique blend
                of services to our customers catering to the current information
                security landscape.
              </p>
            </div>
          </Animation>

          <Animation>
            <div className="mt-10 w-full h-[550px] rounded-2xl overflow-hidden">
              <Image
                src={aboutstory}
                alt="about story"
                className="w-full h-full "
              />
            </div>
          </Animation>
        </div>
      </div>

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
                <h2 className="max-w-md font-medium lg:leading-11.25 text-white mt-4">
                  Building a more secure digital future
                </h2>
                <p className="text-[16px] font-medium max-w-lg leading-[28px] text-[#D1D1D1] mt-4">
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
              <div className="flex flex-col items-center mt-5 ">
                <div className="h-2.5 w-2.5 rounded-full bg-[#0F66EA]"></div>

                <div className="h-[530px] sm:h-[300px] lg:h-[300px] xl:h-[300px] w-[8px] border-l border-dashed border-[#646464]"></div>

                <div className="h-2.5 w-2.5 rounded-full bg-[#0F66EA]"></div>
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
      <section className="relative  overflow-hidden bg-gradient-to-b from-[#000B23] to-[#092E70] py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          {/* Heading */}
          <Animation>
            <div className="relative flex items-center justify-center">
              <h2 className="text-center text-[28px] font-medium uppercase tracking-[12px] text-[#17305B] sm:text-[30px]">
                Journey Of ISECURION
              </h2>

              <h4 className="absolute text-[26px] font-medium uppercase tracking-[4px] text-white sm:text-[30px]">
                Timeline
              </h4>
            </div>
          </Animation>

          {/* Timeline Card */}
          <Animation>
            <div className="relative hidden lg:block mt-10 rounded-[35px] border border-[#52617A] bg-[#101B35] px-6 py-10 sm:px-10 lg:px-12">
              {/* Left Circle */}
              <div className="absolute -left-[18px] top-1/4 z-20 h-14 w-14 rounded-full bg-gradient-to-b from-[#22D1EE] to-[#3D5AF1]"></div>

              {/* Horizontal Timeline Line */}
              <div className="absolute left-14 right-14 top-1/2 h-[2px] bg-[#2563D8]" />

              {/* Timeline Items */}
              <div
                className="relative grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${timelineData.length}, minmax(0, 1fr))`,
                }}
              >
                {timelineData.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex min-h-[380px] flex-col items-center"
                  >
                    {item.position === "bottom" ? (
                      <>
                        {/* Year - TOP */}
                        <h4 className="absolute bottom-1/2 mb-12 text-2xl font-semibold text-[#0F66EA]">
                          {item.year}
                        </h4>

                        {/* Connector - BOTTOM */}
                        <div className="absolute top-1/2 mt-6 h-16 w-px bg-[#D5D9E0]" />

                        {/* Description - BOTTOM */}
                        <p className="absolute top-1/2 mt-[100px] max-w-[320px] text-center text-sm font-medium leading-7 text-white">
                          {item.description}
                        </p>
                      </>
                    ) : (
                      <>
                        {/* Description - TOP */}
                        <p className="absolute bottom-1/2 mb-[110px] max-w-[460px] text-center text-sm font-medium leading-7 text-white">
                          {item.description}
                        </p>

                        {/* Connector - TOP */}
                        <div className="absolute bottom-1/2 mb-6 h-16 w-[0.5px] bg-[#DCDCDC]" />

                        {/* Year - BOTTOM */}
                        <h4 className="absolute top-1/2 mt-12 text-2xl font-semibold text-[#0F66EA]">
                          {item.year}
                        </h4>
                      </>
                    )}

                    {/* Timeline Circle */}
                    <div className="absolute top-1/2 z-10 h-7 w-7 -translate-y-1/2 rounded-full border-[3.5px] border-[#55D6FF] bg-[#101B35]">
                      <div className="absolute inset-[3px] rounded-full bg-[#55D6FF]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:hidden mt-10">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#2563D8]" />

              <div className="space-y-10">
                {timelineData.map((item) => (
                  <div key={item.id} className="relative flex gap-6">
                    {/* Timeline point */}
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[4px] border-[#55D6FF] bg-[#101B35]">
                      <div className="h-2 w-2 rounded-full bg-[#55D6FF]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h4 className="text-xl font-semibold text-[#0F66EA]">
                        {item.year}
                      </h4>

                      <p className="mt-2 text-sm font-medium leading-6 text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
              DIRECTOR & CEO
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8 gap-10">
            <div className="flex flex-col items-center gap-5 ">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFFFFF]">
                Sales
              </h3>
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
                Sales Head
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 ">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFFFFF]">
                Compliance Practice
              </h3>
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
            <div className="flex flex-col items-center gap-5 ">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFFFFF]">
                Offensive Security
              </h3>
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
            <div className="flex flex-col items-center gap-5 ">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFFFFF]">
                Product Management
              </h3>
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFFFFF]">
                HR Management
              </h3>
              <div className="w-[230px] h-[230px] rounded-full border border-[#455F6D] bg-linear-to-b from-[#032557] to-[#00000000] overflow-hidden flex  justify-center">
                <Image
                  src={hrteam}
                  alt="CEO"
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
