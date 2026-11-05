"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import cloudsecurity from "../../../assets/services/cloudsecurity.png";
import settings from "../../../assets/services/settingImage.png";
import { Animation, AnimatedCard } from "../../../components/ui/Animation";
import FAQSection from "../../../components/sections/FAQSection";

const weAssess = [
  "Cloud Architecture",
  "Identity & Access Management",
  "Network & Security Controls",
  "Data & Storage Security",
  "Cloud Applications & APIs",
  "Configurations & Misconfigurations",
];
const cloudSecurityAssessment = [
  {
    Icon: "fa-solid:shield-alt",
    bgColor: "#022D6C",
    title: "Enhanced Security",
    description:
      "Identify critical vulnerabilities and mitigate risks across your cloud environment.",
  },
  {
    Icon: "icon-park-outline:network-drive",
    bgColor: "#3B9E6A",
    title: "Compliance Assurance",
    description:
      "Align your cloud architecture with ISO27001, HIPAA, PCI DSS, and industry best practices.",
  },
  {
    Icon: "fluent:arrow-trending-lines-24-filled",
    bgColor: "#E24B4A",
    title: "Operational Efficiency",
    description:
      "Optimize security processes and focus on high-impact controls to maximize ROI.",
  },
  {
    Icon: "streamline:dangerous-zone-sign-remix",
    bgColor: "#0F66EA",
    title: "Proactive Threat Detection",
    description:
      "Monitor and detect threats early using SIEM and cloud monitoring tools.",
  },
  {
    Icon: "akar-icons:people-group",
    bgColor: "#C8912A",
    title: "Business Confidence",
    description:
      "Assure clients and stakeholders that your cloud environment is secure.",
  },
  {
    Icon: "akar-icons:money",
    bgColor: "#959EFE",
    title: "Cost Optimization",
    description:
      "Focus resources on effective controls, reduce incidents, and maximize your security investment.",
  },
];
const steps = [
  {
    number: "01",
    title: "DISCOVER",
    subheading: "Requirement Detailing",
    icon: "pajamas:issue-type-objective",
    description:
      "We work with your team to understand business, compliance, and cloud requirements before assessment.",
  },
  {
    number: "02",
    title: "ASSESS",
    subheading: "Cloud Architecture Assessment",
    icon: "flowbite:file-search-outline",
    description:
      "Review network topology, data flows, access control, and administrative governance of your cloud environment.",
  },
  {
    number: "03",
    title: "VALIDATE",
    subheading: "Security Testing & Vulnerability Assessment",
    icon: "boxicons:bell-check",
    description:
      "Conduct internal/external network, application, endpoint, and firewall security assessments.",
  },
  {
    number: "04",
    title: "PRIORITIZE",
    subheading: "Governance & Policies Review",
    icon: "iconmind:priority-queue-outline-regular",
    description:
      "Analyze policies for asset management, incident response, audit, compliance, and business continuity.",
  },
  {
    number: "05",
    title: "REMEDIATE",
    subheading: "Reporting & Remediation",
    icon: "oui:app-reporting",
    description:
      "Deliver comprehensive reports with risk levels, missing controls, and actionable remediation guidance.",
  },
];
const cloudAssessmentFAQs = [
  {
    question: "What is a Cloud Security Assessment?",
    answer:
      "A Cloud Security Assessment evaluates your cloud infrastructure for vulnerabilities, compliance gaps, and risks, ensuring secure operations and protection of sensitive data.",
  },
  {
    question: "Which cloud environments are assessed?",
    answer:
      "Our assessment covers IaaS, PaaS, and SaaS platforms across public, private, and hybrid cloud environments.",
  },
  {
    question: "How do you ensure compliance?",
    answer:
      "We align cloud infrastructure with ISO 27001, HIPAA, PCI DSS, and local regulatory requirements, ensuring your systems meet industry best practices.",
  },
  {
    question: "What types of security tests are performed?",
    answer:
      "Tests include internal/external network penetration testing, application security assessments, endpoint security testing, firewall and VPN reviews, and configuration analysis.",
  },
  {
    question: "How long does a Cloud Security Assessment take?",
    answer:
      "Depending on the size and complexity of your cloud infrastructure, assessments typically take between 2 to 6 weeks.",
  },
  {
    question: "Will my data be safe during assessment?",
    answer:
      "Yes. All assessments are conducted under strict confidentiality agreements, ensuring your data and systems remain secure.",
  },
  {
    question: "Do you provide remediation guidance?",
    answer:
      "Yes. After identifying gaps and vulnerabilities, we provide actionable remediation recommendations and support to fix the issues.",
  },
  {
    question: "How do you handle multi-cloud environments?",
    answer:
      "We assess each cloud platform independently while also reviewing integrations and data flow between different cloud providers.",
  },
  {
    question: "Can this assessment be used for regulatory audits?",
    answer:
      "Yes. The assessment report is structured to assist in regulatory audits and compliance verification.",
  },
  {
    question: "Why choose ISECURION for Cloud Security Assessment?",
    answer:
      "ISECURION is a CERT-IN empanelled, ISO 27001 certified company with expert consultants providing comprehensive, end-to-end cloud security assessments and actionable remediation guidance.",
  },
];

function CloudSecurity() {
  return (
    <div>
      {/* hero section  */}
      <section
        className="bg-cover bg-center h-auto min-h-[450px] py-14 flex items-center justify-center"
        style={{ backgroundImage: `url(${cloudsecurity.src})` }}
      >
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 space-y-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1
            className=" text-[#FFFFFF] opacity-0 animate-hero-reveal"
            style={{ animationDelay: "150ms" }}
          >
            Cloud Security Assessment
          </h1>

          <div className="space-y-1">
            <p
              className="sectionDescription  max-w-2xl  text-[#D9D9D9] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "300ms" }}
            >
              Cloud environments introduce new risks across infrastructure,
              identities, applications, data, and configurations.
            </p>
            <p
              className="text-base sm:text-lg font-medium  max-w-2xl  text-[#D9D9D9] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "450ms" }}
            >
              ISECURION assesses your cloud environment to uncover
              vulnerabilities, misconfigurations, and security gaps before they
              become business risks.
            </p>
          </div>
          <button
            className="text-base font-medium flex items-center gap-3 px-4 py-4 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF] opacity-0 animate-hero-reveal"
            style={{ animationDelay: "650ms" }}
          >
            Schedule My Cloud Security Consultation
            <Icon icon="akar-icons:arrow-right" className="text-xl" />
          </button>
        </div>
      </section>

      {/* What Is Cloud Security Assessment? */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="space-y-4">
            <Animation>
              <div className="space-y-4 text-center lg:text-left">
                <h2 className=" text-[#FEFEFE]">
                  What Is Cloud Security Assessment?
                </h2>
                <p className="sectionDescription lg:max-w-lg  text-[#D1D1D1]">
                  A Cloud Security Assessment is a structured evaluation of your
                  cloud infrastructure, configurations, identities,
                  applications, and security controls to identify
                  vulnerabilities and compliance gaps.
                </p>
                <p className="sectionDescription lg:max-w-xl  text-[#D1D1D1]">
                  At ISECURION, we assess{" "}
                  <span className="font-semibold">
                    IaaS, PaaS, and SaaS environments
                  </span>{" "}
                  across public, private, hybrid, and multi-cloud architectures.
                </p>
              </div>
            </Animation>
            <Animation>
              <div className="space-y-4">
                <p className="text-base sm:text-lg font-semibold text-[#D1D1D1]">
                  We Assess
                </p>
                <ul className="space-y-2">
                  {weAssess.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base font-semibold flex items-center gap-3 text-[#D1D1D1]"
                    >
                      <span>
                        <Icon
                          icon="hugeicons:checkmark-badge-01"
                          className="text-2xl text-[#0F66EA]"
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Animation>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cloudSecurityAssessment.map((item, index) => (
              <AnimatedCard
                delay={index * 0.15}
                key={index}
                className="p-4 rounded-2xl border border-[#002C8C] bg-linear-to-t from-[#17366E] to-[#0A1119]"
              >
                <div
                  className="w-[48px] h-[48px] flex items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.bgColor}` }}
                >
                  <Icon icon={item.Icon} className="text-xl text-[#FFFFFF]" />
                </div>
                <div className="space-y-3 mt-12">
                  <h3 className="text-base sm:text-lg font-semibold text-[#FEFEFE]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-5 md:leading-7 text-[#D1D1D1]">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Cloud Security Methodology  */}
      <section className="relative w-full py-14 overflow-hidden bg-linear-to-r from-[#020b1a]  to-[#094e4b]">
        <Image
          src={settings}
          alt="settings"
          className="absolute -top-8 -right-20 w-[200px] h-[200px] opacity-3"
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="text-center space-y-4">
              <h2 className=" text-[#FEFEFE]">
                Our Cloud Security Methodology
              </h2>
              <p className="sectionDescription max-w-2xl mx-auto  text-[#D1D1D1]">
                Our methodology combines architecture review, security testing,
                configuration analysis, and expert-led assessment to identify
                and prioritize cloud security risks.
              </p>
            </div>
          </Animation>
          <div>
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
              {steps.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className="relative w-full md:w-1/2 lg:w-1/5 text-center py-5 md:px-4 lg:px-2"
                >
                  {/* Number */}
                  <div>
                    <p className="text-base sm:text-xl font-medium text-[#999999] mb-2">
                      {item.number}
                    </p>
                  </div>

                  {/* Icon + connector */}
                  <div className="relative flex justify-center">
                    <div className="w-[64px] h-[64px] sm:w-[68px] sm:h-[68px] rounded-full p-[1px] bg-gradient-to-r from-[#929BFF8F] to-[#3B9E6A] relative z-10">
                      <div className="w-full h-full rounded-full bg-[#14142A] flex items-center justify-center">
                        <Icon
                          icon={item.icon}
                          className="text-2xl sm:text-3xl text-white"
                        />
                      </div>
                    </div>

                    {index !== steps.length - 1 && (
                      <div className=" hidden lg:flex absolute left-[calc(50%+34px)] right-[-50%] top-1/2 -translate-y-1/2 items-center">
                        <div className="w-full h-[3px] bg-linear-to-l to-[#0F66EA12] from-[#7D70F085]" />

                        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#0F66EA] border-2 border-[#FFFFFF]" />
                      </div>
                    )}

                    {index !== steps.length - 1 && (
                      <div className=" lg:hidden absolute top-[68px] bottom-[-20px] left-1/2 -translate-x-1/2 w-px bg-[#7D70F0]">
                        <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3B82F6] border border-[#A5B4FC]" />
                      </div>
                    )}
                  </div>

                  <div
                    className={` p-2  border-[#6F9CB9C9]/10 ${index !== steps.length - 1 ? "border-r" : ""}`}
                  >
                    <div className="h-[120px]  flex flex-col justify-between">
                      <h3 className=" text-base md:text-lg font-medium mt-5 text-[#FEFEFE]">
                        {item.title}
                      </h3>

                      <p className="text-sm md:text-base font-medium text-[#15B3A4]">
                        {item.subheading}
                      </p>

                      <div className="w-10 h-px bg-[#455F6DB5] mx-auto my-3 p-px rounded-2xl" />
                    </div>

                    <p className="text-sm md:text-base font-normal  max-w-47 mx-auto leading-5 sm:leading-[22px] text-[#D1D1D1] ">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            Cloud Security Assessment
          </>
        }
        description="Clear answers about our cloud security assessment approach, coverage, and deliverables."
        faqs={cloudAssessmentFAQs}
      />
    </div>
  );
}

export default CloudSecurity;
