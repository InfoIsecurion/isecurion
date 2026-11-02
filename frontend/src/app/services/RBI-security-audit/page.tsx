import React from 'react'
import { Icon } from '@iconify/react'
import { Animation, AnimatedCard, LeftAnimation, GradientIcon, RightAnimation } from '../../../components/ui/Animation'
import FAQSection from "../../../components/sections/FAQSection";

function page() {
  return (
    <div>
        <section className="relative isolate overflow-hidden bg-black py-10 sm:py-12 lg:py-[55px]">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[100px] top-[100px] z-0 h-[550px] w-[560px] rounded-full bg-[#3B9E6A]/28 blur-[140px] lg:left-[100px]"
                />

                <div className="relative z-10 mx-auto w-full max-w-7xl mx-auto px-6 sm:px-10">

                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-5 xl:gap-8">


                        <Animation>
                            <div className="flex flex-col justify-center lg:py-2 text-center md:text-left">
                                {/* Eyebrow */}
                                <p className="text-[13px] sm:text-base font-semibold uppercase leading-7 text-[#3B9E6A] text-center lg:text-left max-w-[410px]">
                                    RBI Compliance • Banking Security
                                </p>

                                {/* Heading */}
                                <h1 className="mt-5 lg:max-w-[500px] font-semibold leading-[1.4] tracking-[-0.02em] text-white text-center lg:text-left">
                                    RBI Information Security (IS) Audit Services for Financial Institutions
                                </h1>

                                {/* Description */}
                                <p className="mt-4 lg:max-w-[390px] text-[15px] leading-[1.8] text-[#D9D9D9] sm:text-[16px] text-center lg:text-left">
                                    Strengthen your institution’s cybersecurity and regulatory readiness with a comprehensive RBI Information Security Audit. Evaluate IT controls, protect sensitive financial data, & improve resilience across banking and digital financial services.
                                </p>

                                <ul className="mt-8 grid grid-cols gap-y-4">
                                    {[
                                        "RBI Regulatory Alignment",
                                        "Financial Data Protection",
                                        "IT & Cybersecurity Assessment",
                                        "Audit Readiness & Reporting",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center lg:items-start gap-3 text-sm sm:text-base font-normal tracking-[0.04em] leading-4.5 text-[#D1D1D1]">
                                            <span className="mt-[5px] h-[6px] w-[6px] shrink-0 bg-[#3B9E6A]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="mt-10 text-center lg:text-left">
                                    <button
                                        type="button"
                                        className="inline-flex h-[45px] items-center justify-center rounded-lg bg-white px-5 text-[13px] font-semibold text-[#31435C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]"
                                    >
                                        Request Consultation{""}
                                        <span className="ml-1.5 text-[17px] leading-none text-[#31435C]">
                                            <Icon icon="mdi:arrow-right"></Icon>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Animation>

                        <Animation>
                            <div className="w-full rounded-[20px] bg-[#202123] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[32px] lg:p-[30px] xl:p-[40px]">
                                <div>
                                    <h2 className="text-[18px] font-medium leading-[1.3] text-white sm:text-[19px]">
                                        Request RBI IS Audit Consultation
                                    </h2>

                                    <p className="mt-3 text-[14px] leading-[1.5] text-[#D9D9D9]">
                                       Discuss your RBI IS audit requirements with our experts.
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
                                                Work Email{" "}<span className="text-[#E42F23]">*</span>
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


                                    <div className='mt-4'>
                                        <label
                                            htmlFor="assessmentType"
                                            className="mb-2 block text-[13px] font-medium leading-5 text-[#E7E7E7]"
                                        >
                                            Organization Type{" "}<span className="text-[#F04444]">*</span>
                                        </label>

                                        <div className="relative">
                                            <select
                                                id="target"
                                                name="target"
                                                defaultValue=""
                                                required
                                                aria-label='Select Industry Sector'
                                                className="h-[43px] w-full appearance-none rounded-[7px] border border-[#29292C] bg-[#090304] px-3 pr-10 text-[13px] text-[#858585] outline-none focus:border-[#4A6EAD] focus:ring-1 focus:ring-[#4A6EAD]"
                                            >
                                                <option selected>Select Organization Type</option>

                                                <option>Scheduled Commercial Bank</option>
                                                <option>Cooperative Bank / Urban Co-op</option>
                                                <option>Non-Banking Financial Company (NBFC)</option>
                                                <option>Small Finance Bank</option>
                                                <option>Payment Bank</option>
                                                <option>FinTech Company</option>
                                                <option>Technology Vendor for Banking</option>
                                                <option>Other Financial Institution</option>

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

                                            <span className="flex h-[32px] min-w-[127px] items-center justify-center rounded-[5px] bg-[#3B9E6AC9] px-5 text-[13px] font-medium tracking-wide text-white">
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
                                        Request IRDAI Audit Consultation{""}
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
    </div>
  )
}

export default page