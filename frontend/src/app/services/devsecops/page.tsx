import { Icon } from "@iconify/react";

import React from "react";
import { AnimatedCard } from "../../../components/ui/Animation";

const devsecopsServices = [
  "CI/CD Pipeline Security",
  "Automated Security Testing",
  "Cloud & Container Hardening",
  "Continuous Compliance",
];

const understandingDevSecops = [
  {
    Icon: "boxicons:arrow-in-left-stroke-circle-half-filled",
    heading: "Shift-Left Security",
    description:
      "Identify vulnerabilities early, before they reach production.",
    bgColor: "#0F66EA",
  },
  {
    Icon: "iconmind:mcp-sampling-outline-bold",
    heading: "Automated Security Testing",
    description:
      "Integrate security checks directly into development and deployment pipelines.",
    bgColor: "#C8912A",
  },
  {
    Icon: "ant-design:cloud-sync-outlined",
    heading: "Cloud-Native Protection",
    description:
      "Strengthen cloud infrastructure, containers, APIs, and workloads.",
    bgColor: "#3B9E6A",
  },
  {
    Icon: "iconmind:compliance-outline-regular",
    heading: "Continuous Compliance",
    description:
      "Automate security controls and evidence collection to support audit readiness.",
    bgColor: "#7D70F0",
  },
];

function DevSecops() {
  return (
    <div>
      {/* hero section  */}
      <section className="relative w-full py-14 flex items-center justify-center overflow-hidden bg-[#000000]">
        <div className="absolute left-40 w-[650px] h-[650px] rounded-full blur-[200px] z-10 pointer-events-none bg-[#C8912A30]"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 flex gap-10">
          {/* left  */}
          <div className="flex-1 space-y-4">
            <p className="text-sm sm:text-base font-semibold text-[#C8912A]">
              DEVSECOPS & CI/CD SECURITY
            </p>
            <h1 className="text-[#FFFFFF]">
              Build Secure. Deploy Faster. Scale with Confidence.
            </h1>
            <p className="text-sm sm:text-[17px] font-medium leading-[26px] text-[#D1D1D1]">
              Integrate security into every stage of your software development
              lifecycle with automated testing, secure pipelines, and
              cloud-native protection.
            </p>
            <p className="text-sm sm:text-base font-medium text-[#D1D1D1]">
              ISECURION helps engineering teams identify vulnerabilities
              earlier, protect software supply chains, and accelerate secure
              releases without compromising development speed.
            </p>
            <button className="text flex gap-2 items-center px-3 py-2.5 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF]">
              Book Free Consultation{" "}
              <span>
                <Icon icon="akar-icons:arrow-right" />
              </span>{" "}
            </button>
            <div>
              <ul className="grid grid-cols-2 gap-y-2">
                {devsecopsServices.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm font-normal flex items-center gap-2 text-[#D1D1D1]"
                  >
                    <span className=" w-[6px] h-[6px] bg-[#C8912A]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* right  */}
          <div className="flex-1 rounded-3xl px-8 py-4 bg-[#202123]">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#FFFFFF]">
                Request DevSecOps Assessment Quote
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#D9D9D9]">
                Get a tailored quote to secure your DevSecOps pipeline.
              </p>
            </div>
            <form action="" className="mt-5 space-y-5">
              <div className="flex gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-normal  text-[#FEFEFE]"
                  >
                    Work Email <span className="text-[#E42F23]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="text-[15px] font-normal px-3 py-2 rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-normal  text-[#FEFEFE]"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="text-[15px] font-normal px-3 py-2  rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-[270px]">
                  <label
                    htmlFor=""
                    className="text-sm font-normal  text-[#FEFEFE]"
                  >
                    Service Type <span className="text-[#E42F23]">*</span>
                  </label>
                  <select className="text-[15px] font-normal px-3 py-2 rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]">
                    <option value="">Select Service Type</option>
                    <option value="devSecOps maturity assessment">
                      DevSecOps Maturity Assessment
                    </option>
                    <option value="CI/CD Pipeline Security">
                      CI/CD Pipeline Security
                    </option>
                    <option value="Cloud & Container Security">
                      Cloud & Container Security
                    </option>
                    <option value="IaC Security & Compliance Automation">
                      IaC Security & Compliance Automation
                    </option>
                    <option value="Full DevSecOps Implementation">
                      Full DevSecOps Implementation
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-normal  text-[#FEFEFE]"
                  >
                    Region <span className="text-[#E24B4A]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select Region"
                    className="text-[15px] font-normal px-3 py-2  rounded-[10px] outline-none text-[#D1D1D1] bg-[#0A0303] border-[1.12px] border-[#262D3D]"
                  />
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span className="text-sm leading-5 text-[#E7E7E7]">
                    Captcha
                  </span>

                  <span className="flex h-[32px] min-w-[127px] items-center justify-center rounded-[5px] bg-[#E24B4A78] px-5 text-[13px] font-medium tracking-wide text-white">
                    ZRLD9Y
                  </span>
                </div>

                <input
                  id="captcha"
                  name="captcha"
                  type="text"
                  placeholder="Enter the text shown above"
                  required
                  className="text-sm font-normal mt-3 px-3 py-2.5 w-full rounded-[10px] border border-[#262D3D] bg-[#110404]   text-[#D1D1D1] outline-none placeholder:text-[#858585] "
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="text-[15px] font-normal border border-[#D1D1D1] bg-none"
                />
                <p className="text-xs font-medium leading-[22px] text-[#D1D1D1]">
                  By clicking submit below, you agree to our Terms of Use and
                  Privacy Policy. Additionally, you consent to allow ISECURION
                  Technology & Consulting Pvt. Ltd. to store and process the
                  personal information submitted above to provide you the
                  content requested.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING DEVSECOPS  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="flex justify-between">
            <div className="w-full lg:w-[30%] space-y-4">
              <p className="text-sm sm:text-base font-semibold text-[#C8912A]">
                UNDERSTANDING DEVSECOPS
              </p>
              <h2 className="text-[#FEFEFE]">
                Security Built into{" "}
                <span className="text-[#C8912A]">Every Stage </span> of
                Development.
              </h2>
            </div>
            <div className="w-full lg:w-[50%] space-y-4">
              <p className="text-base sm:text-lg font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
                DevSecOps integrates security practices and automated controls
                throughout the software development lifecycle, from code
                development and testing to deployment and operations.
              </p>
              <p className="text-base sm:text-lg font-normal leading-[26px] sm:leading-[29px] md:leading-[31px] text-[#D1D1D1]">
                ISECURION helps organisations move beyond end-stage security
                testing by embedding continuous security checks into existing
                engineering workflows.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {understandingDevSecops.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="px-5 space-y-3 border-l-[1.3px] border-[#0F66EA29]"
                >
                  <div
                    className="w-[48px] h-[48px] flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <Icon
                      icon={item.Icon}
                      className="w-[25px] h-[25px] text-[#FFFFFF]"
                    />
                  </div>
                  <h3 className="text-base font-medium text-[#F5F0E8]">
                    {item.heading}
                  </h3>
                  <p className="text-sm font-normal text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DevSecops;
