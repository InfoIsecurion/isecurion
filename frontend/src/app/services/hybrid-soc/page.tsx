import React from 'react'
import { Animation, AnimatedCard, LeftAnimation, RightAnimation } from '../../../components/ui/Animation'
import { Icon } from '@iconify/react'
import heroBackground from '../../../assets/services/inhousescobackgroundImage.png'
import Image from 'next/image'

const hybridSocServices = [
    {
        Icon: "boxicons:check-shield",
        heading: "Incident Response",
        description:
            "Identify, investigate, and respond to security incidents to minimize business impact.",
    },
    {
        Icon: "ic:baseline-screenshot-monitor",
        heading: "24×7 SIEM Monitoring",
        description:
            "Monitor security events continuously to detect suspicious activity and potential threats.",
    },
    {
        Icon: "boxicons:scan-search",
        heading: "Threat Hunting",
        description:
            "Proactively search for hidden threats and unusual behavior across your IT environment.",
    },
    {
        Icon: "boxicons:file-report",
        heading: "Security Reporting",
        description:
            "Gain actionable insights into security events, risks, and operational performance.",
    },
    {
        Icon: "energy-icons:sliders-20-bold",
        heading: "SOC Configuration",
        description:
            "Configure and optimize security tools, integrations, and monitoring workflows.",
    },
    {
        Icon: "icon-park-outline:target-one",
        heading: "Vulnerability Management",
        description:
            "Identify, assess, and prioritize vulnerabilities to reduce your organization's attack surface.",
    },
    {
        Icon: "fe:sitemap",
        heading: "SOC Implementation",
        description:
            "Integrate the right technologies, workflows, and capabilities to support your hybrid SOC model.",
    },
    {
        Icon: "grommet-icons:shield-security",
        heading: "Information Security Management",
        description:
            "Strengthen security policies, processes, and governance to support consistent security operations.",
    },
];

function page() {
    return (
        <div>
            <section className="relative w-full min-h-[560px] py-14 flex items-center">

                <div className="absolute inset-0">
                    <Image
                        src={heroBackground}
                        alt="Smart contract security"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex">
                    <Animation>
                        <div className="flex-1 space-y-7 text-center lg:text-left">
                            <p className="text-sm sm:text-base font-semibold text-[#7D70F0]">
                                HYBRID SOC SERVICES
                            </p>
                            <h1 className="font-semibold leading-[32px] md:leading-[50px] lg:leading-[55px] text-[#FFFFFF] max-w-[630px]">
                                Strengthen Your Security Operations with a Hybrid SOC
                            </h1>
                            <p className="text-base sm:text-[17px] text-[#D9D9D9] max-w-[520px] leading-7">
                                Combine your in-house security team with ISECURION’s cybersecurity expertise to improve threat visibility, strengthen incident response, and build scalable security operations tailored to your business.
                            </p>
                            <ul className="mt-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                                {[
                                    "Extended Security Expertise",
                                    "Automated Security Testing",
                                    "Enhanced Threat Monitoring",
                                    "Scalable SOC Capabilities",
                                ].map((item) => (
                                    <li key={item} className="flex items-start justify-center lg:justify-start gap-3 text-sm sm:text-base font-normal tracking-[0.04em] leading-4.5 text-[#D1D1D1]">
                                        <span className="mt-[5px] h-[6px] w-[6px] shrink-0 bg-[#7D70F0]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <button className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[15px] font-medium text-[#31435C] transition-all duration-200 hover:bg-gray-100 shadow-lg">
                                    <span>Strengthen Your SOC </span>
                                    <Icon icon="lucide:arrow-right" className="h-4 w-4" />
                                </button>
                            </div>

                        </div>
                    </Animation>




                    <div className="hidden lg:block flex-1"></div>
                </div>

            </section>

            {/* HYBRID SOC SERVICES */}
            <section className="relative w-full py-14 overflow-hidden bg-[#060D1B]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 -right-20 w-[300px] h-[300px] rounded-full blur-[100px] bg-[#FFFFFF33]" />
                </div>
                <Animation>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
                        <div className="max-w-4xl space-y-4 text-center lg:text-left">
                            <p className="text-sm sm:text-base font-semibold text-[#7D70F0] ">
                                HYBRID SOC SERVICES
                            </p>
                            <h2 className="text-[#FFFFFF] max-w-[700px]">
                                Integrated Security Operations for Stronger Threat Protection
                            </h2>
                            <p className="text-base sm:text-lg leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1] max-w-[870px]">
                                Combine your internal security team with expert cybersecurity support to strengthen threat detection, streamline incident response, and improve security operations across your organization.
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {hybridSocServices.map((item, index) => (
                                    <AnimatedCard
                                        delay={index * 0.13}
                                        key={index}
                                        className={`relative flex flex-col justify-between p-5 space-y-4 rounded-lg bg-[#66666614] border border-[#0B15301F] pt-8 pb-15 ${index === 7 ? "lg:col-span-2" : ""
                                            }`}
                                    >
                                        <div className="absolute left-0 w-[2.5px] h-[23px] rounded-tr-2xl rounded-br-2xl bg-[#7D70F0]"></div>
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                                                {item.heading}
                                            </h3>
                                            <span>
                                                <Icon
                                                    icon={item.Icon}
                                                    className="w-[25px] h-[25px] text-[#7D70F0]"
                                                />
                                            </span>
                                        </div>
                                        <p className="mt-4 text-[15px] font-normal leading-[24px] text-[#D1D1D1] max-w-[338px]">
                                            {item.description}
                                        </p>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </Animation>
            </section>
        </div>
    )
}

export default page