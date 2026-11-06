import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

function BSE_NSE_CTA() {
    return (
        <div>
            <section className="bg-[#121828] rounded-tr-[42px] rounded-tl-[42px]">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                    <div className="relative overflow-hidden rounded-t-[42px] bg-[#121828] pt-10">

                        <div className="relative z-10 space-y-5">
                            <h3 className="max-w-[500px] font-semibold text-white lg:leading-[45px] sm:text-[32px]">
                                Ready to Ensure BSE/NSE Audit Compliance?
                            </h3>

                            <p className="max-w-[1040px] text-[16px] font-medium leading-7 text-[#D1D1D1] sm:text-[18px]">
                                Prepare for your BSE/NSE audit with a structured assessment of your IT governance, cybersecurity controls, and operational resilience. Connect with ISECURION to discuss your audit requirements.
                            </p>

                            <div className="flex flex-col gap-4 py-3 sm:flex-row">
                                <Link href="tel:+918861201570" target="_blank">
                                <button className="flex gap-2 cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] px-5 py-3 text-base font-medium text-white">
                                    Schedule a Call
                                    <span><Icon icon="ep:right" width={20} /> </span>
                                </button>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default BSE_NSE_CTA