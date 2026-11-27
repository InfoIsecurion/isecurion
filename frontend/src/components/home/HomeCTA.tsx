import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function HomeCTA() {
  return (
    <section className="bg-[#000000] rounded-tr-[42px] rounded-tl-[42px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        <div className="relative overflow-hidden rounded-t-[42px] pt-10 sm:pt-12">

          <div className="relative z-10 space-y-5">
            <h3 className="max-w-md font-semibold text-white lg:leading-[45px] sm:text-[32px]">
              Ready to strengthen your security posture?
            </h3>

            <p className="max-w-[520px] text-[16px] font-medium leading-7 text-[#8F90AB] sm:text-[18px]">
              Partner with ISECURION, a CERT-In empanelled and CREST Member cybersecurity company, to identify risks, close gaps and build a stronger, more resilient organization.
            </p>

            <div className="flex flex-col gap-3 py-3 sm:flex-row">
              <Link href="/company/contact">
              <button className="flex gap-2 cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] px-5 py-3 text-base font-medium text-white shadow-[0_6px_20px_rgba(45,100,180,0.25)] transition-all duration-200 hover:brightness-110">
                
                Schedule a Consultation 
                
                <span><Icon icon="ep:right" width={20}/> </span>
              </button>
              </Link>

              <Link href="tel:+918861201570" target="_blank">
              <button className="flex cursor-pointer items-center justify-center rounded-lg border border-[#D8E4EF] bg-white px-5 py-3 text-base font-medium text-[#31435C]">
                
                  Talk to an Expert
                  
              </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeCTA;