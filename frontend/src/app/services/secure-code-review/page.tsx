"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import securecode from "../../../assets/services/sourcecode.png";
import { motion } from "framer-motion";
import {
  LeftAnimation,
  RightAnimation,
  Animation,
  AnimatedCard,
} from "../../../components/ui/Animation";

const securecodelist = [
  "Application Source Code",
  "Authentication & Authorization",
  "Input Validation",
  "Cryptographic Controls",
  "Data Protection",
  "Error & Exception Handling",
  "API & Business Logic",
  "Third-Party Dependencies",
];

const benefits = [
  {
    number: "01",
    title: "Enhanced Application Security",
    description:
      "Strengthen your applications by identifying insecure coding practices and vulnerabilities at their source, before they become exploitable weaknesses.",
  },
  {
    number: "02",
    title: "Early Vulnerability Detection",
    description:
      "Discover security flaws early in development, reducing the risk of vulnerabilities progressing into testing, production, or customer-facing environments.",
  },
  {
    number: "03",
    title: "Pinpoint Vulnerability Location",
    description:
      "Go beyond identifying a vulnerability. Trace issues back to the specific code, component, or function responsible for the security weakness.",
  },
  {
    number: "04",
    title: "Improved Secure Coding",
    description:
      "Give development teams actionable security insights that help them understand vulnerabilities and apply stronger, more secure coding practices.",
  },

  {
    number: "05",
    title: "Secure SDLC Integration",
    description:
      "Embed security into the development lifecycle by introducing code-level security reviews at the right stages of planning, development, testing, and release.",
  },
  {
    number: "06",
    title: "Reduced Remediation Effort",
    description:
      "Address vulnerabilities earlier, when changes are easier and less costly to implement, helping reduce downstream remediation complexity.",
  },
  {
    number: "07",
    title: "Protection from Cyber Threats",
    description:
      "Identify coding weaknesses that could expose applications to common and evolving attack techniques, helping strengthen the application's overall attack surface.",
  },
  {
    number: "08",
    title: "Greater Business Confidence",
    description:
      "Build greater confidence in application security with a structured review process, documented findings, and clear remediation guidance.",
  },
];

const secureCodeReviewMethodology = [
  {
    number: "01",
    title: "Planning and Scoping",
    description:
      "Define the codebase, review objectives, scope, timeline, and resources.",
  },
  {
    number: "02",
    title: "Code Review Execution",
    description:
      "Combine automated static analysis, expert manual inspection, & controlled testing.",
  },
  {
    number: "03",
    title: "Issue Identification and Prioritization",
    description:
      "Document security issues and prioritize vulnerabilities based on severity and business impact.",
  },
  {
    number: "04",
    title: "Remediation and Verification",
    description:
      "Apply secure coding fixes and re-review the code to verify effective remediation.",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    description:
      "Use review insights, feedback, and emerging threats to continuously strengthen the process.",
  },
];

function SecureCode() {
  return (
    <div>
      {/* hero section  */}
      <section className="relative  w-full h-auto py-16 flex items-center overflow-visible bg-[#000000]">
        <div className="absolute w-[200px] min-h-[559px] left-10 md:left-20 2xl:left-70 rounded-full blur-[150px] z-20 pointer-events-none bg-[#0FEADB47] "></div>
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-10 justify-between">
          <div className="space-y-4 flex-1 text-center lg:text-left  flex flex-col items-center lg:items-start">
            <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
              SECURE CODE REVIEW
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-semibold leading-[40px] md:leading-[55px] text-[#FFFFFF]"
            >
              Find security flaws before they reach production.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base sm:text-lg font-medium leading-7 md:leading-8 text-[#D9D9D9]"
            >
              Identify vulnerabilities in source code early through automated
              analysis and expert-led manual review, helping development teams
              build more secure, resilient applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base sm:text-lg leading-7 md:leading-8 text-[#D9D9D9]"
            >
              Secure SDLC · SAST · Manual Code Review · Vulnerability Analysis
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base font-medium flex items-center justify-center px-5 py-3 mt-5 gap-3 rounded-[10px] cursor-pointer  text-[#31435C] bg-[#FFFFFF]"
            >
              Secure Your Code {""}
              <span>
                <Icon icon="akar-icons:arrow-right" className="text-xl" />
              </span>
            </motion.button>
          </div>
          <div className="flex-1">
            <Image src={securecode} alt="secure code" />
          </div>
        </div>
      </section>
      {/* Secure code, from the start.  */}
      <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
        <div className="absolute  top-0 w-[300px] h-[400px] rounded-full blur-2xl -right-30 bg-[#4675CE1F]"></div>
        <div className="max-w-7xl mx-auto px-6 flex gap-6 lg:gap-19 flex-col lg:flex-row">
          <LeftAnimation>
            <div className="space-y-4 p-4 flex-3 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                OVERVIEW
              </p>
              <h2 className="font-medium text-[#FFFFFF]">
                Secure code, from the start.
              </h2>
              <p className="text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] lg:max-w-2xl text-[#D1D1D1]">
                Secure Code Review is a structured evaluation of application
                source code to identify security vulnerabilities, insecure
                coding practices, and weaknesses before they become exploitable
                risks.
              </p>
              <p className="text-base sm:text-lg font-normal leading-[25px] md:leading-[31px] lg:max-w-2xl text-[#D1D1D1]">
                At ISECURION, we combine automated static analysis with
                expert-led manual review to identify security issues at code
                level and provide developers with actionable remediation
                guidance.
              </p>
            </div>
          </LeftAnimation>

          <RightAnimation>
            <div className="p-4 flex-2 border-l border-[#595959] pl-10 lg:pl-20">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                WE REVIEW
              </p>
              <div className="mt-8">
                <ul className="space-y-3">
                  {securecodelist.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base font-semibold flex items-center gap-3 text-[#D1D1D1]"
                    >
                      <span>
                        <Icon
                          icon="hugeicons:checkmark-badge-01"
                          className="text-2xl text-[#0F66EA]"
                        />{" "}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RightAnimation>
        </div>
      </section>

      {/* Clean Code.Stronger Security.  */}
      <section className="relative w-full py-14 overflow-hidden bg-[#000000]">
        <div className="absolute top-0 -right-10 w-[350px] h-[700px] blur-[150px]  rounded-2xl bg-[#232942]"></div>
        <div className="absolute left-[25%] bottom-0 w-[700px] h-[180px] blur-[150px]  rounded-2xl bg-[#FFA8262E]"></div>
        <div className="absolute left-10 top-10 w-[400px] h-[300px] blur-[150px]  rounded-2xl bg-[#49D4E80F]"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 ">
          <Animation>
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                KEY BENEFITS
              </p>
              <h2 className="font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF]">
                Clean Code. <br />
                <span className="text-[#0F66EA]">Stronger Security.</span>
              </h2>
              <p className="text-base sm:text-lg font-normal max-w-2xl leading-[25px] md:leading-[31px] text-[#D1D1D1]">
                Identify vulnerabilities early, strengthen development
                practices, and build security into every stage of your software
                lifecycle.
              </p>
            </div>
          </Animation>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((item, index) => (
              <AnimatedCard
                delay={index * 0.1}
                key={index}
                className="relative p-4 flex flex-col justify-between space-y-2 border-l border-[#0F66EA29]"
              >
                <div
                  className="absolute -bottom-9 -right-3 text-[80px] font-bold"
                  style={{
                    WebkitTextStroke: "1px #F5F0E812",
                    color: "transparent",
                  }}
                >
                  <p> {item.number}</p>
                </div>

                <p className="text-sm sm:text-base font-semibold text-[#0F66EA]">
                  {item.number}
                </p>
                <h3 className="text-base font-medium text-[#F5F0E8]">
                  {item.title}
                </h3>
                <p className="relative text-sm font-normal leading-6 text-[#D1D1D1D6]">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Secure Code Review Methodology  */}
      <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
        <div className="absolute top-0 left-[10%] w-[80%] h-[400px] blur-3xl rounded-full pointer-events-none opacity-70 bg-[#FFA8262E]"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 sm:py-8">
          {/* this is the heading  */}
          <Animation>
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="font-medium text-[#FFFFFF]">
                Secure Code Review Methodology
              </h2>
              <p className="text-base sm:text-lg max-w-3xl leading-[25px] md:leading-[31px] text-[#D1D1D1]">
                A structured, risk-based approach that combines automated
                analysis, expert review, validation, and remediation to uncover
                and resolve security weaknesses.
              </p>
            </div>
          </Animation>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {secureCodeReviewMethodology.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.15}>
                <div className="flex flex-col justify-between space-y-2 h-auto  md:h-[160px]">
                  <p className="text-base font-semibold flex items-center gap-2 text-[#0F66EA]">
                    {item.number}
                    <span>
                      <Icon
                        icon="akar-icons:arrow-right"
                        className="text-2xl text-[#F5F0E8A1]"
                      ></Icon>
                    </span>
                  </p>
                  <h3 className="text-sm sm:text-[17px] font-medium text-[#F5F0E8] max-w-[155px] leading-7">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-normal leading-[22px] text-[#D1D1D1]">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecureCode;
