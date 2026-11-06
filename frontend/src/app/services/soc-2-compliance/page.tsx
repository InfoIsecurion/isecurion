import React from 'react'
import { Animation, AnimatedCard, LeftAnimation, GradientIcon, RightAnimation } from '../../../components/ui/Animation'
import { Icon } from '@iconify/react'
import Link from "next/link"
import heroBackground from "../../../assets/services/backgroundPattern.png"
import FAQSection from "../../../components/sections/FAQSection";
import SOC2_CTA from '../../../components/sections/SOC2_CTA'


const trustServices = [
    {
        title: "Security",
        description: "Protection against unauthorized access.",
    },
    {
        title: "Availability",
        description: "Systems available as committed.",
    },
    {
        title: "Processing Integrity",
        description: "Complete, accurate, timely processing.",
    },
    {
        title: "Confidentiality",
        description: "Protection of sensitive information.",
    },
    {
        title: "Privacy",
        description: "Proper handling of personal data.",
    },
];

const socLocations = [
    { name: "Bangalore", Icon: "reicon:city" },
    { name: "Mumbai", Icon: "game-icons:tower-bridge" },
    { name: "Hyderabad", Icon: "fluent:building-mosque-12-regular" },
    { name: "Chennai", Icon: "icon-park-outline:city-one" },
    { name: "Pune", Icon: "icon-park-outline:city-gate" },
    { name: "Kochi", Icon: "lucide:tree-palm" },
    { name: "Kolkata", Icon: "game-icons:arch-bridge" },
    { name: "Pan-India Coverage", Icon: "iconmind:canvas-pan-outline-regular" },
];

const globalRegions = [
    { code: "US", name: "United States", icon: "mingcute:statue-of-liberty-line" },
    { code: "GB", name: "United Kingdom", icon: "icon-park-outline:eiffel-tower" },
    { code: "AE", name: "UAE / Dubai", icon: "hugeicons:cayan-tower" },
    { code: "AU", name: "Australia", icon: "mingcute:sydney-opera-house-line" },
    { code: "SG", name: "Singapore", icon: "hugeicons:twin-tower" },
];

const industriesWeServe = [
    {
        Icon: "healthicons:chart-cured-increasing-24px",
        heading: "SaaS & Product Companies",
        description:
            "Strengthen security controls and demonstrate trust to enterprise customers.",
    },
    {
        Icon: "bx:network-chart",
        heading: "Data Centers & Hosting Providers",
        description:
            "Strengthen infrastructure security, availability, and data protection controls.",
    },
    {
        Icon: "iconmind:medical-record-outline-regular",
        heading: "FinTech & HealthTech",
        description:
            "Protect sensitive financial and healthcare data with robust security practices.",
    },
    {
        Icon: "ic:baseline-computer",
        heading: "Startups Targeting Enterprise Clients",
        description:
            "Build audit readiness and meet security expectations for global business deals.",
    },
    {
        Icon: "iconmind:vpc-outline-regular",
        heading: "Cloud Providers & MSPs",
        description:
            "Improve cloud security, access management, and operational controls.",
    },
    {
        Icon: "ri:global-line",
        heading: "Global Company Subsidiaries",
        description:
            "Align local security practices with enterprise-wide compliance requirements.",
    },
];

const services = [
    {
        title: "Readiness & Gap Assessment",
        description:
            "Control mapping to TSC, maturity scoring, remediation planning. Available remotely for all cities and countries.",
    },
    {
        title: "Risk Assessment",
        description:
            "Asset, threat & impact analysis; pragmatic risk register tailored to your industry and regulatory context.",
    },
    {
        title: "Control Design & Implementation",
        description:
            "Policies, procedures, and technical controls tailored to your stack - AWS, Azure, GCP, and more.",
    },
    {
        title: "ISMS-Aligned Documentation",
        description:
            "Security policy suite, SOPs, and playbooks mapped to SOC 2 TSC and ISO 27001 where relevant.",
    },
    {
        title: "Evidence Collection & Packaging",
        description:
            "Logs, configs, tickets, screenshots - all tagged, traceable, and ready for auditor sampling.",
    },
    {
        title: "Audit Coordination & Continuous Monitoring",
        description:
            "Dry-runs, walkthroughs, CPA liaison, and post-report control health checks.",
    },
];

const methodologySteps = [
    {
        number: "01",
        step: "Phase 01",
        title: "Scoping & Consultation",
        description:
            "Define in-scope products, systems, vendors, locations, and TSC categories.",
        side: "left",
    },
    {
        number: "02",
        step: "Phase 02",
        title: "Readiness & Gap Assessment",
        description:
            "Compare existing controls to SOC 2 expectations; prioritize remediation.",
        side: "right",
    },
    {
        number: "03",
        step: "Phase 03",
        title: "Remediation & Control Implementation",
        description:
            "Access management, change management, backup, incident, vendor, and SDLC controls.",
        side: "left",
    },
    {
        number: "04",
        step: "Phase 04",
        title: "Evidence Collection & Documentation",
        description:
            "Audit-ready pack: logs, tickets, policies, risk register, configs with EQA tags.",
        side: "right",
    },
    {
        number: "05",
        step: "Phase 05",
        title: "Audit Support & Ongoing Compliance",
        description:
            "Coordinate with CPA, respond to PBC lists, maintain controls post-report.",
        side: "left",
    },

];

const auditList = [
    "Accurate and complete, mapped to specific controls.",
    "Timestamped & traceable to systems and users",
    "Consistent across departments with integrity checks",
    "Review-ready for auditor sampling & re-performance",
];

const securityDomains = [
    {
        title: "Network Security",
        description:
            "Identify and remediate network attack paths and perimeter weaknesses.",
        icon: "fa-solid:shield-alt",
        background: "bg-[#080D1B]",
    },
    {
        title: "Employee Awareness",
        description:
            "Phishing simulations and social engineering controls to reduce human risk.",
        icon: "grommet-icons:shield-security",
        background: "bg-[#08142D]",
    },
    {
        title: "Data Protection",
        description:
            "Encryption, DLP, and classification for sensitive data protection.",
        icon: "akar-icons:data",
        background:
            "bg-gradient-to-b from-[#0A1119] to-[#28508D]",
    },
    {
        title: "Application Security",
        description:
            "Secure SDLC, code reviews, and API security controls.",
        icon: "bx:server",
        background:
            "bg-gradient-to-b from-[#0A1119] to-[#28508D]",
    },
    {
        title: "Access Controls",
        description:
            "MFA, JML, least privilege and privileged access management.",
        icon: "bx:lock",
        background: "bg-[#010611]",
    },
    {
        title: "Incident Response",
        description:
            "Detection, playbooks and post-incident review to close the loop.",
        icon: "eva:settings-2-outline",
        background: "bg-[#080D1B]",
    },
];

const soc2ServicesInIndia = [
    {
        title: "Why Indian Companies Need SOC 2",
        description:
            "India's technology sector exports over $250 billion in software and IT services annually. The majority of these contracts - especially those to US, UK, UAE, Australian, and Singaporean buyers - now include a SOC 2 requirement in the procurement checklist. Without a current SOC 2 report, Indian companies face longer sales cycles, higher vendor risk scrutiny, and in many cases, direct disqualification from enterprise deals.",
    },
    {
        title: "SOC 2 Compliance in Bangalore",
        description:
            "Bangalore (Bengaluru) is India's primary technology hub, home to over 5,000 product companies and thousands of IT service providers in areas like Koramangala, HSR Layout, Whitefield, Electronic City, and JP Nagar. ISECURION, headquartered in JP Nagar, Bangalore, provides on-site and remote SOC 2 readiness, gap assessment, and audit coordination services to Bangalore-based companies of all sizes - from seed-stage startups to large SaaS enterprises.",
    },
    {
        title: "SOC 2 Compliance Services in Mumbai",
        description:
            "Mumbai is India's financial capital and home to a growing FinTech, BFSI, and cloud services ecosystem. SOC 2 compliance is critical for Mumbai-based companies handling financial data, payment processing, or providing services to global banking and insurance clients. ISECURION provides SOC 2 Type I and Type II audit readiness services remotely to all Mumbai and Navi Mumbai-based organizations.",
    },
    {
        title: "SOC 2 Audit Support in Hyderabad",
        description:
            "Hyderabad's HITEC City has emerged as one of India's fastest-growing tech corridors, with major global players and Indian unicorns establishing their engineering centers there. ISECURION supports Hyderabad-based software, healthcare technology, and IT services companies through every phase of the SOC 2 audit lifecycle - from initial scoping to auditor coordination and post-report continuous monitoring.",
    },
    {
        title: "SOC 2 Compliance for Global Companies - USA, UK, UAE, Australia, Singapore",
        description:
            "A SOC 2 Type I report evaluates whether your controls are suitably designed at a specific point in time. A SOC 2 Type II report evaluates whether those controls operated effectively over a review period (typically 3 to 12 months). Most enterprise customers, particularly in the USA and UK, require a Type II report. Startups early in their compliance journey often begin with Type I to demonstrate commitment, then progress to Type II within 6–12 months.",
    },
    {
        title: "SOC 2 Type I vs. Type II - Which Do You Need?",
        description:
            "A SOC 2 Type I report evaluates whether your controls are suitably designed at a specific point in time. A SOC 2 Type II report evaluates whether those controls operated effectively over a review period (typically 3 to 12 months). Most enterprise customers, particularly in the USA and UK, require a Type II report. Startups early in their compliance journey often begin with Type I to demonstrate commitment, then progress to Type II within 6–12 months.",
    },
    {
        title: "How Much Does SOC 2 Cost in India?",
        description:
            "SOC 2 audit costs in India depend on scope (number of TSC categories), system complexity, existing maturity, and the CPA firm selected for the final audit. ISECURION's readiness and preparation fees are significantly lower than US or UK-based consultancies, making us the preferred choice for Indian companies and global companies looking for cost-effective, high-quality SOC 2 support. Contact us for a transparent, itemized quote tailored to your organization.",
    },
];

const soc2FAQs = [
    {
        question: "What is SOC 2 compliance?",
        answer:
            "SOC 2 is an attestation performed by an independent AICPA-licensed CPA firm evaluating your controls against the Trust Services Criteria (TSC). It is the primary security standard for US, UK, UAE, Australian, and Singaporean enterprise procurement.",
    },
    {
        question: "What's the difference between SOC 2 Type I and Type II?",
        answer:
            "Type I assesses the design of controls at a point in time. Type II assesses operating effectiveness across a period (typically 3–12 months). Most buyers - especially in the USA and UK - require Type II. Many Indian companies start with Type I and achieve Type II within 6–12 months.",
    },
    {
        question: "Does ISECURION provide SOC 2 services in Mumbai, Hyderabad, and Chennai?",
        answer:
            "Yes. ISECURION provides end-to-end SOC 2 compliance, readiness assessment, and audit coordination services across all major Indian cities including Bangalore, Mumbai, Hyderabad, Chennai, Pune, Kolkata, and Kochi. Engagements are available on-site (Bangalore and Kolkata) or fully remotely for all other locations.",
    },
    {
        question: "Can ISECURION help companies in the USA get SOC 2 certified?",
        answer:
            "Yes. ISECURION provides SOC 2 readiness and audit coordination services for companies in the USA, UK, UAE (Dubai and Abu Dhabi), Australia, and Singapore. All engagements are fully remote, timezone-flexible, and cost significantly less than US-based consultancies with no compromise in quality.",
    },
    {
        question: "How long does a SOC 2 audit take?",
        answer:
            "SOC 2 Type I can typically be achieved 6–10 weeks after remediation is complete. Type II requires a review period of 3–12 months of operating evidence before the audit window closes. Timeline depends on your starting maturity. ISECURION provides a clear timeline estimate as part of the free gap snapshot.",
    },
    {
        question: "How much does SOC 2 compliance cost in India?",
        answer:
            "SOC 2 compliance costs in India depend on scope (TSC categories), existing controls maturity, team size, and the CPA firm chosen. ISECURION offers a transparent, itemized quote after a free gap discussion. Our fees are competitive compared to global consultancies while maintaining international standards of delivery.",
    },
    {
        question: "Do we need ISO 27001 before pursuing SOC 2?",
        answer:
            "No. Many clients pursue SOC 2 as their first compliance framework. If you want both ISO 27001 and SOC 2, ISECURION harmonizes controls to minimize duplication and reduce cost - a popular choice among Bangalore and Mumbai SaaS companies expanding globally.",
    },
    {
        question: "Which tools and cloud platforms does ISECURION support?",
        answer:
            "ISECURION supports AWS, Azure, GCP, Okta/Entra, Jira, GitHub/GitLab, CrowdStrike/Defender, Datadog, and most modern SaaS stacks. We adapt to your environment rather than asking you to change tools to fit our methodology.",
    },
    {
        question: "Is ISECURION CERT-In empanelled?",
        answer:
            "Yes. ISECURION is a CERT-In (Indian Computer Emergency Response Team) empanelled information security auditing organization and holds ISO 27001:2022 certification. This makes us one of India's most credible and recognized cybersecurity and compliance service providers.",
    },
];

function page() {
    return (
        <div className="bg-black">

            <section className="relative isolate overflow-hidden bg-black py-10 sm:py-12 lg:py-[42px]">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[100px] top-[100px] z-0 h-[550px] w-[560px] rounded-full bg-[#0F66EA]/50 blur-[140px] lg:left-[100px]"
                />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-5 xl:gap-8">


                        <Animation>
                            <div className="flex flex-col justify-center lg:py-2 text-center md:text-left">
                                {/* Eyebrow */}
                                <p className="text-[13px] sm:text-base font-semibold uppercase leading-none text-[#0F66EA] sm:text-sm text-center lg:text-left">
                                    SOC 2 Compliance - Trust Through Assurance
                                </p>

                                {/* Heading */}
                                <h1 className="mt-5 lg:max-w-[430px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left">
                                    SOC 2 Compliance Audit & Readiness Services in India
                                </h1>

                                {/* Description */}
                                <p className="mt-4 lg:max-w-[390px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                                    Trusted by SaaS, FinTech, and cloud companies across Bangalore, Mumbai, Hyderabad, Chennai, Pune, Kolkata, and Kochi - and globally in USA, UK, UAE, Australia, and Singapore.
                                </p>

                                <p className="mt-4 lg:max-w-[390px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                                    ISECURION takes you end-to-end from scoping and gap analysis to evidence readiness and CPA auditor coordination. 100% audit success rate. 250+ engagements.
                                </p>

                                {/* CTA */}
                                <div className="mt-6 text-center lg:text-left">
                                    <Link href="/company/contact">
                                        <button
                                            type="button"
                                            className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3] cursor-pointer"
                                        >
                                            Book a Free Readiness Call{""}
                                            <span className="ml-1.5 text-[17px] leading-none text-[#31435C]">
                                                <Icon icon="mdi:arrow-right"></Icon>
                                            </span>
                                        </button>
                                    </Link>
                                </div>

                                {/* ==================== STATS ==================== */}
                                <div className="mt-9 grid lg:max-w-[380px] grid-cols-3 lg:grid-cols-2 gap-x-10 gap-y-6 text-center lg:text-left">
                                    {/* 150+ */}
                                    <div>
                                        <p className="text-[21px] font-semibold leading-none text-[#0F66EA] sm:text-[22px]">
                                            250+
                                        </p>

                                        <p className="mt-2 text-[13px] leading-5 text-[#D1D1D1] sm:text-[14px]">
                                            SOC 2 Engagements
                                        </p>
                                    </div>

                                    {/* 30+ */}
                                    <div>
                                        <p className="text-[21px] font-semibold leading-none text-[#0F66EA] sm:text-[22px]">
                                            40+
                                        </p>

                                        <p className="mt-2 text-[13px] leading-5 text-[#D1D1D1] sm:text-[14px]">
                                            Industries Served
                                        </p>
                                    </div>

                                    {/* 100% */}
                                    <div>
                                        <p className="text-[21px] font-semibold leading-none text-[#0F66EA] sm:text-[22px]">
                                            100%
                                        </p>

                                        <p className="mt-2 text-[13px] leading-5 text-[#D1D1D1] sm:text-[14px]">
                                            Audit Success Rate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Animation>

                        <Animation>
                            <div className="w-full rounded-[20px] bg-[#202123] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[32px] lg:p-[30px] xl:p-[40px]">
                                <div>
                                    <h2 className="text-[18px] font-medium leading-[1.3] text-white sm:text-[19px]">
                                        Request a Free SOC 2 Gap Snapshot
                                    </h2>

                                    <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                                        Free Gap Summary, Timeline & Effort Estimate.
                                    </p>
                                </div>

                                {/* Form*/}
                                <form className="mt-8">
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="workEmail"
                                                className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                                            >
                                                Work Email{' '}<span className="text-[#E42F23]">*</span>
                                            </label>

                                            <input
                                                id="workEmail"
                                                name="workEmail"
                                                type="email"
                                                placeholder="youremail@gmail.com"
                                                required
                                                className="h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="companyName"
                                                className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                                            >
                                                Company Name
                                            </label>

                                            <input
                                                id="companyName"
                                                name="companyName"
                                                type="text"
                                                placeholder="Company name"
                                                className="h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-5">
                                        <div>
                                            <label
                                                htmlFor="workEmail"
                                                className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                                            >
                                                Phone Number{' '}<span className="text-[#E42F23]">*</span>
                                            </label>

                                            <input
                                                id="workEmail"
                                                name="workEmail"
                                                type="email"
                                                placeholder="Phone / WhatsApp Number "
                                                required
                                                className="h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                                            />
                                        </div>


                                        <div>
                                            <label
                                                htmlFor="target"
                                                className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                                            >
                                                Region{' '}<span className="text-[#F04444]">*</span>
                                            </label>

                                            <div className="relative">
                                                <select
                                                    id="target"
                                                    name="target"
                                                    defaultValue=""
                                                    required
                                                    className="h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                                                >
                                                    <option selected disabled>
                                                        Your City / Country
                                                    </option>

                                                    <optgroup label="India">
                                                        <option value="Bangalore">Bangalore</option>
                                                        <option value="Mumbai">Mumbai</option>
                                                        <option value="Hyderabad">Hyderabad</option>
                                                        <option value="Chennai">Chennai</option>
                                                        <option value="Pune">Pune</option>
                                                        <option value="Kolkata">Kolkata</option>
                                                        <option value="Kochi">Kochi</option>
                                                        <option value="Delhi / NCR">Delhi / NCR</option>
                                                        <option value="Other India">Other India</option>
                                                    </optgroup>

                                                    <optgroup label="International">
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                        <option value="UAE / Dubai">UAE / Dubai</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Other">Other</option>
                                                    </optgroup>
                                                </select>

                                                {/* Custom Dropdown Arrow */}
                                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777]">
                                                    <svg
                                                        width="14"
                                                        height="8"
                                                        viewBox="0 0 14 8"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M1 1L7 7L13 1"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="mt-5">
                                        <label
                                            htmlFor="assessmentType"
                                            className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                                        >
                                            Target <span className="text-[#F04444]">*</span>
                                        </label>

                                        <div className="relative">
                                            <select
                                                id="target"
                                                name="target"
                                                defaultValue=""
                                                required
                                                className="h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                                            >
                                                <option value="" disabled>
                                                    What's your target?
                                                </option>

                                                <option value="external">
                                                    SOC 2 Type |
                                                </option>

                                                <option value="internal">
                                                    SOC 2 Type ||
                                                </option>

                                                <option value="web">
                                                    Not sure yet
                                                </option>
                                            </select>

                                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777]">
                                                <svg
                                                    width="14"
                                                    height="8"
                                                    viewBox="0 0 14 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M1 1L7 7L13 1"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Captcha */}
                                    <div className="mt-7">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[13px] leading-5 text-[#E7E7E7]">
                                                Captcha
                                            </span>

                                            <span className="flex h-[32px] min-w-[127px] items-center justify-center rounded-[5px] bg-[#0F66EAB5] px-5 text-[13px] font-medium tracking-wide text-white">
                                                ZRLD9Y
                                            </span>
                                        </div>

                                        <input
                                            id="captcha"
                                            name="captcha"
                                            type="text"
                                            placeholder="Enter the text shown above"
                                            required
                                            className="mt-3 h-[43px] w-full rounded-[7px] border border-[#29292C] bg-[#090304] px-3 text-[13px] text-white outline-none placeholder:text-[#858585] focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                                        />
                                    </div>

                                    {/* Consent */}
                                    <div className="mt-5 flex items-start gap-2.5">
                                        <input
                                            id="consent"
                                            name="consent"
                                            type="checkbox"
                                            required
                                            className="mt-[2px] h-[14px] w-[14px] shrink-0 rounded-[2px] border border-[#A8A8A8] "
                                        />

                                        <label
                                            htmlFor="consent"
                                            className="text-[10px] leading-[1.7] text-[#BDBDBD] sm:text-[11px]"
                                        >
                                            By clicking submit below, you agree to our Terms of Use
                                            and Privacy Policy. Additionally, you consent to allow
                                            ISECURION Technology & Consulting Pvt. Ltd. to store and
                                            process the personal information submitted above to
                                            provide you the content requested.
                                        </label>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="mt-8 flex h-[51px] w-full items-center justify-center rounded-[7px] border border-[#4D78C4] bg-gradient-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(39,84,148,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#5282D3] hover:to-[#2B5CA0] active:translate-y-0"
                                    >
                                        Get My Free Gap Snapshot {""}
                                        <span className="ml-1.5 text-[18px] leading-none">
                                            <Icon icon="mdi:arrow-right" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </Animation>
                    </div>

                </div>
            </section>

            {/* What is SOC */}
            <section className="relative border-t border-white/5 bg-[#07101D] py-16 text-white sm:py-18 lg:py-20">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-[26px]">
                    <Animation>
                        <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

                            {/* LEFT COLUMN: OVERVIEW */}
                            <div className="min-w-0">
                                <p className="text-center text-[14px] font-semibold uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px] lg:text-left">
                                    What Is SOC 2?
                                </p>

                                <h2 className="mx-auto mt-4 lg:max-w-[600px] text-center text-[28px] font-medium leading-[1.35] tracking-[-0.02em] text-white sm:text-[34px] lg:mx-0 lg:text-left lg:text-[40px] lg:leading-[1.4]">
                                    What is SOC 2? A Complete Guide for Indian &amp; Global Companies
                                </h2>

                                <div className="mx-auto mt-[22px] lg:max-w-[530px] space-y-5 text-center text-[15px] font-normal leading-[1.72] text-[#D1D1D1] sm:text-[16px] lg:text-left lg:mx-0 lg:text-[17px]">
                                    <p>
                                        SOC 2 (System and Organization Controls 2) is an attestation by an independent CPA firm evaluating how well a service organization designs and operates controls aligned to the AICPA Trust Services Criteria (TSC).
                                    </p>

                                    <p>
                                        It is the globally accepted security standard demanded by enterprise customers in the USA, UK, UAE, Australia, and Singapore, and increasingly by Indian enterprises in Bangalore, Mumbai, and Hyderabad.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: TRUST SERVICES CRITERIA */}
                            <div className="min-w-0 lg:pt-1">
                                <p className="mb-7 text-center text-[14px] font-medium uppercase leading-[18px] tracking-[0.2px] text-[#0F66EA] sm:text-[15px] md:text-left">
                                    The five Trust Services Criteria:
                                </p>

                                {/* TIMELINE */}
                                <div className="relative">
                                    {trustServices.map((step, index) => (
                                        <AnimatedCard
                                            key={step.title ?? index}
                                            delay={index * 0.15}
                                            className="relative grid grid-cols-[12px_minmax(0,1fr)] gap-4 pb-7 last:pb-0 sm:gap-5"
                                        >
                                            {/* Timeline Dot and Connecting Line */}
                                            <div className="relative flex justify-center">
                                                {index !== trustServices.length - 1 && (
                                                    <div className="absolute bottom-[-70px] top-[-5] w-px bg-[#626877]" />
                                                )}

                                                <div className="relative z-10 mt-1 h-3 w-3 shrink-0 rounded-full border border-white/80 bg-[#0F66EA]" />
                                            </div>

                                            {/* Criteria Text */}
                                            <div className="min-w-0">
                                                <h3 className="text-[15px] font-medium leading-snug text-white sm:text-base">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-1 text-[13px] leading-relaxed text-[#94A3B8] sm:text-[14px]">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </AnimatedCard>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </Animation>
                </div>
            </section>

            {/* OUTSOURCED SOC SERVICES ACROSS KEY MARKETS */}
            <section
                className="relative isolate overflow-hidden bg-[#060D1B] bg-cover bg-center bg-no-repeat py-12 sm:py-14 lg:py-[72px]"
                style={{ backgroundImage: `url(${heroBackground.src})` }}>

                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* TOP: INDIAN MARKETS */}
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
                        {/* Intro */}
                        <LeftAnimation>
                            <div className="lg:max-w-[440px] text-center lg:text-left">
                                <h2 className="text-[28px] font-normal leading-[1.4] tracking-[-0.4px] text-white sm:text-[32px] sm:leading-[1.45] lg:text-[32px] xl:text-[34px]">
                                    SOC 2 Compliance Services Across India
                                </h2>

                                <p className="mt-4 text-[14px] leading-[25px] text-[#C5C9D2] sm:text-[15px] sm:leading-[26px]">
                                    From Bangalore's SaaS startups to Mumbai's FinTech firms,  ISECURION delivers on-ground SOC 2 expertise in every major tech hub.
                                </p>
                            </div>
                        </LeftAnimation>

                        {/* Indian Office Locations */}
                        <div className="rounded-[24px] border border-[#596173]/70 bg-[#DADADA0A] p-4 sm:p-5 lg:p-5 xl:p-6">
                            <div className="grid grid-cols-2 sm:grid-cols-4">
                                {socLocations.map((location, index) => (
                                    <AnimatedCard
                                        delay={index * 0.1}
                                        key={location.name}
                                        className={`flex min-w-0 flex-col items-center justify-center gap-3 px-2 py-5 sm:py-6 ${index < 4 ? "border-b border-[#FFFFFF0D] sm:border-b-0" : ""
                                            } ${index % 4 !== 3 ? "sm:border-r sm:border-[#FFFFFF05]" : ""
                                            } ${index % 2 === 0 ? "border-r border-[#FFFFFF08] sm:border-r-0" : ""
                                            } ${index >= 4 ? "sm:border-t sm:border-[#FFFFFF0D]" : ""
                                            }`}
                                    >
                                        <GradientIcon Icon={location.Icon} />

                                        <span className="text-center text-[13px] font-normal leading-5 text-[#D1D3DB] sm:text-[15px]">
                                            {location.name}
                                        </span>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM: GLOBAL COVERAGE */}
                    <div className="relative mt-8 overflow-hidden rounded-[18px] border border-[#52606C]/70 bg-gradient-to-r from-[#1D1E2AF]  to-[#122D2C] sm:mt-9 lg:mt-8">

                        <div className="relative grid grid-cols-1 items-center gap-7 p-5 sm:p-6 lg:grid-cols-[minmax(230px,1.2fr)_minmax(0,3fr)] lg:gap-5 lg:p-6 xl:p-6">
                            {/* Global Coverage Intro */}
                            <Animation>
                                <div className="min-w-0">
                                    <p className="text-[15px] font-medium uppercase tracking-wide text-[#1680FF] sm:text-[17px]">
                                        GLOBAL COVERAGE
                                    </p>

                                    <h3 className="mt-3 text-[21px] font-normal leading-[1.5] text-white sm:text-[23px]">
                                        Global reach.
                                        <br />
                                        Consistent standards.
                                    </h3>

                                    <p className="mt-3 text-[14px] leading-[25px] text-[#C5C9D2] sm:text-[15px] sm:leading-[26px]">
                                        Indian-priced expertise, international-standard delivery.
                                        <br /> We support SOC 2 audits across:
                                    </p>
                                </div>
                            </Animation>

                            {/* Global Regions */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                                {globalRegions.map((region, index) => (
                                    <AnimatedCard
                                        delay={index * 0.1}
                                        key={region.code}
                                        className={`flex min-w-0 flex-col items-center justify-center px-2 py-5 text-center sm:px-3 lg:py-3 ${index % 2 === 0
                                            ? "border-r border-[#243849]"
                                            : ""
                                            } ${index === 1 || index === 3
                                                ? "sm:border-r sm:border-[#243849]"
                                                : ""
                                            } ${index < 3
                                                ? "border-b border-[#243849] sm:border-b-0"
                                                : ""
                                            } ${index === 2
                                                ? "sm:border-r sm:border-[#243849] lg:border-r lg:border-[#243849]"
                                                : ""
                                            } ${index === 3
                                                ? "sm:border-r-0 lg:border-r lg:border-[#243849]"
                                                : ""
                                            } ${index === 4
                                                ? "col-span-2 sm:col-span-1"
                                                : ""
                                            }`}
                                    >
                                        <GradientIcon
                                            Icon={region.icon}
                                            className="h-[43px] w-[43px] text-[#00D6E9] sm:h-[46px] sm:w-[46px]"
                                            aria-hidden="true"
                                        />

                                        <span className="mt-4 text-[12px] font-medium tracking-wide text-[#BFC4CE]">
                                            {region.code}
                                        </span>

                                        <span className="mt-2 h-[2px] w-[23px] bg-[#315A7D]" />

                                        <span className="mt-2 text-[12px] leading-5 text-[#C5C9D2] sm:text-[13px]">
                                            {region.name}
                                        </span>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES WE SERVE */}
            <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 -right-20 w-[300px] h-[300px] rounded-full blur-[100px] bg-[#FFFFFF33]" />
                </div>
                <Animation>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
                        <div className="max-w-4xl space-y-4 text-center lg:text-left">
                            <p className="text-sm sm:text-base font-semibold text-[#0F66EA] ">
                                INDUSTRIES WE SERVE
                            </p>
                            <h2 className="text-[#FFFFFF] max-w-[700px]">
                                Built for Modern Tech Teams in India & Globally
                            </h2>
                            <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[780px]">
                                Support your SOC 2 journey with security assessments and audit readiness tailored to your industry, technology stack, and enterprise requirements.
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {industriesWeServe.map((item, index) => (
                                    <AnimatedCard
                                        delay={index * 0.15}
                                        key={index}
                                        className="relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F]"
                                    >
                                        <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#0F66EA]"></div>
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                                                {item.heading}
                                            </h3>
                                            <span>
                                                <Icon
                                                    icon={item.Icon}
                                                    className="w-[25px] h-[25px] text-[#0F66EA]"
                                                />
                                            </span>
                                        </div>
                                        <p className="text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[338px]">
                                            {item.description}
                                        </p>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </Animation>
            </section>

            <section className="bg-[#060D1B] px-0">
                <div className="mx-auto max-w-7xl  px-6 py-[60px] sm:px-10 sm:py-[70px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
                        <div className="pb-[50px] lg:pr-[70px] lg:pb-0 text-center lg:text-left">
                            <LeftAnimation>
                                <p className="text-[13px] sm:text-base font-semibold uppercase leading-[0.2px] text-[#0F66EA]">
                                    BUSINESS VALUE
                                </p>

                                <h2 className="mt-8 lg:max-w-[450px] font-medium leading-[1.42] text-white">
                                    Why SOC 2 Matters for Your Business?
                                </h2>

                                <p className="mt-[18px] lg:max-w-[420px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1] sm:text-[15px]">
                                    Build customer trust, accelerate enterprise sales, strengthen governance, and align security with key compliance frameworks.
                                </p>
                                
                                <Link href="/services/iso27001">
                                    <p className="cursor-pointer mt-8 inline-flex items-center gap-1 text-sm font-medium text-[#0F66EA] underline underline-offset-4">

                                        Explore ISO 27001 + SOC 2 bundle
                                        <Icon icon="mdi:arrow-right" className="text-lg" />

                                    </p>
                                </Link>
                            </LeftAnimation>
                        </div>

                        <Animation>
                            <div className="border-t border-[#B1B1B114] pt-[45px] lg:border-l lg:border-t-0 lg:pl-[32px] lg:pt-0">
                                <div className="space-y-[20px]">
                                    <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                                        <span className="text-[15px] font-medium leading-[1.5] text-[#0F66EA]">
                                            01
                                        </span>
                                        <div>
                                            <h3 className="text-[17px] font-medium leading-[1.5] text-white">
                                                Unlock US & UK Enterprise Deals
                                            </h3>
                                            <p className="mt-[6px] max-w-[400px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1]">
                                                Most Fortune 500 procurement teams require it.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                                        <span className="text-[15px] font-medium leading-[1.5] text-[#0F66EA]">
                                            02
                                        </span>
                                        <div>
                                            <h3 className="text-[17px] font-medium leading-[1.5] text-white">
                                                Investor & Board Confidence
                                            </h3>
                                            <p className="mt-[6px] max-w-[400px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1]">
                                                Demonstrates mature governance at Series A/B.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                                        <span className="text-[15px] font-medium leading-[1.5] text-[#0F66EA]">
                                            03
                                        </span>
                                        <div>
                                            <h3 className="text-[17px] font-medium leading-[1.5] text-white">
                                                Faster Sales Cycles
                                            </h3>
                                            <p className="mt-[6px] max-w-[350px] text-[14px] font-normal leading-[1.8] text-[#D1D1D1]">
                                                Skip the security questionnaire bottleneck.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[35px_1fr] gap-[14px]">
                                        <span className="text-[15px] font-medium leading-[1.5] text-[#0F66EA]">
                                            04
                                        </span>
                                        <div>
                                            <h3 className="text-[17px] font-medium leading-[1.5] text-white">
                                                Multi-Framework Alignment
                                            </h3>
                                            <p className="mt-[6px] max-w-[380px] text-[13px] font-normal leading-[1.8] text-[#D1D1D1]">
                                                ISO 27001, GDPR, HIPAA, and DPDP synergies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-br from-[#132B4F] to-[#090B21]">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="px-5 py-9 sm:px-8 sm:py-11 lg:px-9 lg:py-[66px]">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(31,101,180,0.10),transparent_55%)]" />

                        <div className="relative grid grid-cols-1 gap-9 lg:grid-cols-[0.9fr_1.9fr] lg:gap-12 xl:grid-cols-[0.95fr_2fr] xl:gap-[52px]">
                            {/* LEFT CONTENT */}
                            <LeftAnimation>
                                <div className="min-w-0 text-center lg:text-left">
                                    <p className="text-[12px] font-semibold uppercase tracking-[0.01em] text-[#0F66EA] sm:text-base">
                                        ISECURION SOC 2 SERVICES
                                    </p>

                                    <h2 className="mt-4 lg:max-w-[330px] leading-[1.35] tracking-[-0.025em] text-[#D1D1D1]">
                                        End-to-End SOC 2 Compliance &amp; Audit Support
                                    </h2>

                                    <p className="mt-6 lg:max-w-[300px] text-base leading-[1.5] text-[#D1D1D1] sm:text-[17px]">
                                        End-to-end support from Bangalore to New York - one
                                        partner, full coverage.
                                    </p>
                                </div>
                            </LeftAnimation>

                            {/* RIGHT SERVICE LIST */}
                            <div className="min-w-0">
                                <div className="">
                                    {services.map((service, index) => (
                                        <AnimatedCard
                                            key={service.title}
                                            className="grid grid-cols-[18px_minmax(0,1fr)] gap-x-3 gap-y-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[18px_minmax(0,1fr)] sm:gap-x-3 sm:py-6 lg:grid-cols-[18px_minmax(0,1.1fr)_minmax(0,1.25fr)] lg:gap-x-3 lg:gap-y-0 lg:py-[23px]"
                                        >
                                            <span className="pt-[3px] text-[14px] font-normal text-[#087AFF]">
                                                {index + 1}.
                                            </span>

                                            <h3 className="min-w-0 text-[14px] font-medium leading-[1.5] text-white sm:text-base lg:pr-2 max-w-[300px]">
                                                {service.title}
                                            </h3>

                                            <p className="col-start-2 min-w-0 text-[13px] leading-[1.7] text-[#D1D1D1] sm:text-[14px] lg:col-start-auto lg:pl-1 max-w-[368px]">
                                                {service.description}
                                            </p>
                                        </AnimatedCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full overflow-hidden bg-[#060D1B] py-14 sm:py-16 lg:py-20">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    {/* Heading */}
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.08em] text-[#0F3AEA]">
                            OUR METHODOLOGY
                        </p>

                        <h2 className="mx-auto mt-3 max-w-[840px] leading-[1.3] text-[#FEFEFE]">
                            Our 5-Phase SOC 2 Compliance Journey
                        </h2>

                        <p className="mx-auto mt-3 max-w-4xl text-xs font-normal leading-[19px] text-[#D1D1D1] sm:text-[17px] sm:leading-[28px]">
                            Battle-tested methodology used across 250+ engagements in India and globally.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 lg:mt-14">
                        {/* Center line on tablet/desktop; left-side line on mobile */}
                        <div className="absolute bottom-5 left-[14px] top-1 w-px bg-gradient-to-b from-[#0F66EA] to-[#263028] sm:left-1/2 sm:-translate-x-1/2" />


                        <div className="relative space-y-8 sm:space-y-8 lg:space-y-9">
                            {methodologySteps.map((item, index) => (
                                <AnimatedCard
                                    delay={index * 0.15}
                                    key={item.number}
                                    className="relative grid min-w-0 grid-cols-[30px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] sm:gap-x-0"
                                >
                                    {/* Left content */}

                                    <div
                                        className={`col-start-2 min-w-0 w-full sm:col-start-1 sm:row-start-1 ${item.side === "left"
                                            ? "sm:pr-7 sm:text-right lg:pr-8"
                                            : "hidden sm:invisible sm:block sm:pl-7 lg:pl-8"
                                            }`}
                                    >
                                        {item.side === "left" && (
                                            <>
                                                <p className="text-sm tracking-[0.12em] text-[#0F3AEA] sm:text-[14px]">
                                                    {item.step}
                                                </p>
                                                <h3 className="mt-2 sm:mt-3 text-base font-medium leading-5 text-[#FEFEFE] sm:text-lg">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-3 sm:mt-5 w-full max-w-[455px] break-words text-sm font-normal leading-[21px] text-[#D1D1D1] sm:text-[15px] sm:leading-[24px]">
                                                    {item.description}
                                                </p>
                                            </>
                                        )}
                                    </div>


                                    {/* Number marker */}
                                    <div className="absolute left-0 top-0 z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center border border-[#0F3AEA]/60 bg-[#0A0D0B] text-[9px] font-normal text-[#0F3AEA] sm:relative sm:col-start-2 sm:row-start-1 sm:mx-auto sm:h-[36px] sm:w-[36px]">
                                        {item.number}
                                    </div>

                                    {/* Right content */}

                                    <div
                                        className={`min-w-0 w-full sm:col-start-3 sm:row-start-1 ${item.side === "right"
                                            ? "col-start-2 sm:pl-5 sm:text-left lg:pl-4"
                                            : "hidden sm:invisible sm:block sm:pr-5 lg:pr-0"
                                            }`}
                                    >
                                        {item.side === "right" && (
                                            <>
                                                <p className="text-sm tracking-[0.12em] text-[#0F3AEA] sm:text-[14px]">
                                                    {item.step}
                                                </p>
                                                <h3 className="mt-2 sm:mt-3 text-base font-medium leading-5 text-[#FEFEFE] sm:text-lg">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-3 sm:mt-5 w-full max-w-[485px] break-words text-sm font-normal leading-[21px] text-[#D1D1D1] sm:text-[15px] sm:leading-[24px]">
                                                    {item.description}
                                                </p>
                                            </>
                                        )}
                                    </div>

                                </AnimatedCard>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#060D1B] text-white py-12 sm:py-16 lg:py-20">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-20">

                        {/* Left Content */}
                        <LeftAnimation>
                            <div>
                                <p className="mb-3 text-sm font-semibold uppercase text-[#0F66EA] sm:text-base">
                                    AUDIT-READY EVIDENCE
                                </p>

                                <h2 className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-[32px]">
                                    Evidence Quality Assurance
                                </h2>

                                <p className="mt-4 max-w-[470px] text-sm leading-6 text-[#D1D1D1] sm:text-[15px] sm:leading-[25px]">
                                    Ensure accurate, traceable, and audit-ready evidence mapped to SOC 2 controls.
                                </p>

                                <ul className="mt-7 space-y-4 sm:mt-7 sm:space-y-[17px]">
                                    {auditList.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                                    <path d="M0 0h64v64H0z" fill="none" />
                                                    <path fill="#3B9E6A" d="M58.4 0L23.6 38.3l-10.1-7.7H7.9l15.7 25.5L64 0z" />
                                                    <path fill="#1C2332" d="M53.9 56.1c0 .6-.5 1.1-1.1 1.1H7.9c-.6 0-1.1-.5-1.1-1.1V11.2c0-.6.5-1.1 1.1-1.1h30.7l6.1-6.7H2.2C1 3.4 0 4.4 0 5.6v56.1C0 63 1 64 2.2 64h56.1c1.2 0 2.2-1 2.2-2.2V18.1l-6.7 9.4c.1 0 .1 28.6.1 28.6" />
                                                </svg>

                                            </span>
                                            <span className="pt-0.5 text-[13px] leading-5 text-[#D9D9D9] sm:text-base sm:leading-[22px]">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </LeftAnimation>

                        {/* Right Content */}
                        <Animation>
                            <div className="h-fit border-l-[3px] border-[#0F66EA] py-0 pl-5 sm:pl-6 lg:pl-[19px]">
                                <h3 className="text-lg font-medium leading-7 text-white sm:text-xl">
                                    SOC 2 Type I vs. Type II
                                </h3>

                                <p className="mt-3 text-[15px] leading-6 text-[#D1D1D1] sm:text-base sm:leading-[26px] max-w-[410px]">
                                    Type I assesses design on a specific date. Type II assesses operating
                                    effectiveness over time (typically 3–12 months).
                                </p>

                                <p className="mt-6 text-[15px] leading-6 text-[#D1D1D1] sm:mt-7 sm:text-base sm:leading-[26px] max-w-[410px]">
                                    Most US and UK buyers require Type II. Start with readiness, remediate,
                                    then collect operating evidence for the period.
                                </p>
                            </div>
                        </Animation>

                    </div>
                </div>
            </section>

            <section className="bg-[#060D1B] py-14 text-white sm:py-16 lg:py-20">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    {/* Section Heading */}
                    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
                        <p className="mb-2 text-sm font-semibold uppercase text-[#0F66EA] sm:text-base">
                            SECURITY CONTROL AREAS
                        </p>

                        <h2 className="font-medium leading-tight tracking-tight text-white">
                            Core Security Domains for SOC 2 Compliance
                        </h2>

                        <p className="mx-auto mt-4 max-w-[780px] text-[14px] leading-5 text-[#D1D1D1] sm:text-[17px] sm:leading-[26px]">
                            Address critical security risks with robust controls across networks,
                            applications, data, access, and incident response.
                        </p>
                    </div>

                    {/* Security Domain Cards */}
                    <div className="grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
                        {securityDomains.map((domain, i) => (
                            <AnimatedCard
                                delay={i * 0.25}
                                key={domain.title}
                                className={`flex min-h-[220px] flex-col ${domain.background} p-5 transition-colors duration-300 sm:min-h-[230px] sm:p-6 lg:min-h-[234px] lg:px-[30px] lg:py-12`}
                            >
                                <Icon
                                    icon={domain.icon}
                                    className="h-[32px] w-[32px] shrink-0 text-white"
                                    aria-hidden="true"
                                />

                                <div className="mt-auto pt-25">
                                    <h3 className="text-base font-medium leading-5 text-white sm:text-lg">
                                        {domain.title}
                                    </h3>

                                    <p className="mt-5 max-w-[330px] text-sm leading-[17px] text-[#D1D1D1] sm:text-base sm:leading-[25px]">
                                        {domain.description}
                                    </p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOC Services in India - Everything You Need to Know  */}
            <section className="w-full py-14 bg-[#060D1B]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">
                    <Animation>
                        <div className="max-w-5xl mx-auto lg:mx-0  space-y-4 text-center lg:text-left">
                            <h2 className="font-medium leading-[38px] md:leading-[45px] xl:leading-[57px] text-[#FEFEFE] max-w-[650px]">
                                SOC 2 Compliance in India - Everything You Need to Know
                            </h2>
                            <p className="text-base sm:text-lg font-normal text-[#D1D1D1] leading-8">
                                SOC 2 compliance has become the de-facto security standard for B2B software companies selling into global markets.
                                Whether you are a Bangalore-based SaaS startup trying to close your first US enterprise deal, a Hyderabad IT services
                                company bidding on a UK government contract, or a Mumbai FinTech onboarding institutional investors -
                                a SOC 2 Type II report is increasingly non-negotiable.
                            </p>
                        </div>
                    </Animation>

                    <div className="space-y-5 mt-10">
                        {soc2ServicesInIndia.map((item, index) => (
                            <div key={index}>
                                <Animation>
                                    <div className="max-w-6xl space-y-4 text-center md:text-left">
                                        <h3 className="text-base sm:text-lg font-semibold text-[#FEFEFE]">
                                            {item.title}
                                        </h3>
                                        <p className="text-base sm:text-lg font-normal leading-[30px] sm:leading-[34px] md:leading-[36px] lg:leading-[38px] text-[#D1D1D1]">
                                            {item.description}
                                        </p>
                                    </div>
                                </Animation>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                title={
                    <>
                        Frequently Asked Questions -
                        <br className="hidden sm:block" />
                        SOC 2 Compliance
                    </>
                }
                description="From Indian companies, startups, and global teams across USA, UK, UAE, Australia & Singapore."
                faqs={soc2FAQs}
            />

            <SOC2_CTA />

        </div>
    )
}

export default page