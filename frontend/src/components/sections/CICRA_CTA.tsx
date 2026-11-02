import React from 'react'
import { Icon } from '@iconify/react'

function CICRA_CTA() {
    return (
        <div>
            <section className="bg-[#121828]">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                    <div className="relative overflow-hidden rounded-t-[42px] bg-[#121828] pt-10">

                        <div className="relative z-10 space-y-5">
                            <h3 className="max-w-[500px] font-semibold text-white lg:leading-[45px] sm:text-[32px]">
                                Ready to Strengthen Your Critical Infrastructure Security?
                            </h3>

                            <p className="max-w-[1040px] text-[16px] font-medium leading-7 text-[#D1D1D1] sm:text-[18px]">
                                Partner with ISECURION for comprehensive CICRA Audit services that protect your mission-critical operations, ensure regulatory compliance, and build cyber resilience against emerging threats.
                            </p>

                            <div className="flex flex-col gap-4 py-3 sm:flex-row">
                                <button className="flex gap-2 cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] px-5 py-3 text-base font-medium text-white">
                                    Schedule CICRA Audit Consultation
                                    <span><Icon icon="ep:right" width={20} /> </span>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CICRA_CTA