import React from "react";
import { Icon } from "@iconify/react";

function DPO_CTA() {
  return (
    <section className="bg-[#121828] rounded-tr-[42px] rounded-tl-[42px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 ">
        <div className="relative overflow-hidden rounded-t-[42px] bg-[#121828] pt-10">
          <div className="relative z-10 space-y-5">
            <h3 className="max-w-[500px] font-semibold text-white lg:leading-[45px] sm:text-[32px]">
              Ready to Appoint Your Outsourced DPO?
            </h3>

            <p className="max-w-[840px] text-[16px] font-medium leading-7 text-[#D1D1D1] sm:text-[18px]">
              Get expert Outsourced DPO services in India - Bangalore, Mumbai,
              Delhi, Pune, Hyderabad, Kolkata, Ahmedabad, Noida - and globally
              across USA, UK, EU, GCC, Singapore, and Australia. Get expert
              Outsourced DPO services in India - Bangalore, Mumbai, Delhi, Pune,
              Hyderabad, Kolkata, Ahmedabad, Noida - and globally across USA,
              UK, EU, GCC, Singapore, and Australia.
            </p>

            <div className="flex flex-col gap-4 py-3 sm:flex-row">
              <button className="flex gap-2 cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] px-5 py-3 text-base font-medium text-white">
                Schedule Consultation
                <span>
                  <Icon icon="ep:right" width={20} />{" "}
                </span>
              </button>

              <button className="flex flex-row gap-3 cursor-pointer items-center justify-center rounded-lg border border-[#FFFFFF29] px-5 py-3 text-base font-medium text-[#FFFFFF]">
                <span>
                  <Icon icon="flowbite:outgoing-call-outline" width={20} />
                </span>
                <span>
                  <Icon icon="ep:right" width={20} />{" "}
                </span>
              </button>

              <button className="flex flex-row gap-3 cursor-pointer items-center justify-center rounded-lg border border-[#FFFFFF29] px-5 py-3 text-base font-medium text-[#FFFFFF]">
                <span>
                  <Icon icon="flowbite:outgoing-call-outline" width={20} />
                </span>
                Call India (Bangalore): +91- 8861201570
              </button>

              <button className="flex flex-row gap-3 cursor-pointer items-center justify-center rounded-lg border border-[#FFFFFF29] px-5 py-3 text-base font-medium text-[#FFFFFF]">
                <span>
                  <Icon icon="eva:email-outline" width={20} />
                </span>
                <span>
                  <Icon icon="eva:email-outline" width={20} />
                </span>
                info@isecurion.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DPO_CTA;
