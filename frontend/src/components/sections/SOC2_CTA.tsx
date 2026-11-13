import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

function SOC2_CTA() {
  return (
    <div>
      <section className="bg-[#000000] rounded-tr-[42px] rounded-tl-[42px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-t-[42px] pt-10 sm:pt-12">

            <div className="relative z-10 space-y-5">
              <h3 className="max-w-[500px] font-semibold text-white lg:leading-[45px] sm:text-[32px]">
                Get SOC 2 Ready with ISECURION
              </h3>

              <p className="max-w-[1040px] text-[16px] font-medium leading-7 text-[#D1D1D1] sm:text-[18px]">
                Companies across Bangalore, Mumbai, Hyderabad, Pune, Kolkata, Kochi, Chennai, USA, UK, UAE, Australia & Singapore trust us. Book a free readiness call and get a gap summary, timeline, and cost estimate - no strings attached.
              </p>

              <div className="flex flex-col gap-4 py-3 sm:flex-row">
                <Link href="tel:+918861201570" target="_blank">
                  <button className="flex gap-2 cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] px-5 py-3 text-base font-semibold text-white">
                    Book a Free Call
                    <span><Icon icon="ep:right" width={20} /> </span>
                  </button>
                </Link>

                <a
                  href="https://wa.me/918861201570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-3 cursor-pointer items-center justify-center rounded-lg border border-[#D8E4EF] bg-white px-5 py-3 text-base font-semibold text-[#31435C]"
                >
                  <span>
                    <Icon icon="boxicons:message-bubble-dots" width={20} />
                  </span>
                  WhatsApp Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default SOC2_CTA