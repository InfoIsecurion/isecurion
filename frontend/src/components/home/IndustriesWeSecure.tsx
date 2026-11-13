import React from "react";
import telecommunication from "../../assets/home/telecommunication.png";
import healthcare from "../../assets/home/healthcare.png";
import fintech from "../../assets/home/fintech.png";
import ecommerce from "../../assets/home/ecommerce.png";
import education from "../../assets/home/education.png";
import government from "../../assets/home/government.png";
import { Animation } from "../../components/ui/Animation";
import industryHoverBg from "../../assets/home/industryHoverBg.png";

const industriesData = [
  // ROW 1: Both Images on LEFT
  {
    id: "01",
    title: "Telecommunications",
    description:
      "Ensure resilient connectivity across complex telecom environments.",
    image: telecommunication.src || telecommunication,
    bgColor: "bg-[#121D4A]",
    imagePosition: "left",
    stats: [
      { value: "12+", label: "Customers" },
      { value: "310+", label: "Projects Completed" },
    ],
  },
  {
    id: "02",
    title: "Healthcare",
    description:
      "Protect connected medical devices, patient data, and critical healthcare operations.",
    image: healthcare.src || healthcare,
    bgColor: "bg-gradient-to-t from-[#4A81D3] to-[#3B9E6A]",
    imagePosition: "left",
    stats: [
      { value: "18+", label: "Customers" },
      { value: "400+", label: "Projects Completed" },
    ],
  },
  // ROW 2: Both Images on RIGHT
  {
    id: "03",
    title: "FinTech",
    description:
      "Secure digital banking, payment systems, and regulatory compliance.",
    image: fintech.src || fintech,
    bgColor: "bg-[#121D4A]",
    imagePosition: "right",
    stats: [
      { value: "22+", label: "Customers" },
      { value: "460+", label: "Projects Completed" },
    ],
  },
  {
    id: "04",
    title: "E-commerce",
    description:
      "Safeguard payments, digital experiences, and customer information.",
    image: ecommerce.src || ecommerce,
    bgColor: "bg-[#1F407C]",
    imagePosition: "right",
    stats: [
      { value: "9+", label: "Customers" },
      { value: "280+", label: "Start Up Companies" },
    ],
  },
  // ROW 3: Both Images on LEFT
  {
    id: "05",
    title: "Education",
    description:
      "Safeguard educational ecosystems, research, and digital campuses.",
    image: education.src || education,
    bgColor: "bg-gradient-to-t from-[#4A81D3] to-[#3B9E6A]",
    imagePosition: "left",
    stats: [
      { value: "2+", label: "Customers" },
      { value: "25+", label: "Projects Completed" },
    ],
  },
  {
    id: "06",
    title: "Government",
    description:
      "Strengthen cybersecurity posture and safeguard critical public infrastructure.",
    image: government.src || government,
    bgColor: "bg-[#1F407C]",
    imagePosition: "left",
    stats: [
      { value: "8+", label: "Customers" },
      { value: "200+", label: "Projects Completed" },
    ],
  },
];

function IndustryCard({ item }) {
  const isImageLeft = item.imagePosition === "left";

  // Reusable inline transition style to ensure precision & avoid Tailwind config limitations
  const smoothTransitionStyle = {
    transitionProperty: "width, background-color, opacity, transform",
    transitionDuration: "1000ms",
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium smooth easing curve
  };

  const imageBlock = (
    <div
      className="relative w-1/2 shrink-0 overflow-hidden bg-cover bg-center group-hover:w-0"
      style={{
        ...smoothTransitionStyle,
        backgroundImage: `url(${item.image})`,
      }}
    >
      <p className="p-5 text-2xl font-medium text-white">{item.id}</p>
    </div>
  );

  const contentBlock = (
    <div
      className={`relative flex w-1/2 shrink-0 flex-col justify-center overflow-hidden p-8 group-hover:w-full group-hover:bg-white ${item.bgColor}`}
      style={smoothTransitionStyle}
    >
      {/* Background Hover Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-800 ease-out group-hover:opacity-100"
        style={{
          backgroundImage: `url(${industryHoverBg.src || industryHoverBg})`,
        }}
      />

      {/* Default Card Content */}
    <div className="relative z-10 w-full min-w-0 opacity-100 transition-all duration-1000 ease-out sm:group-hover:-translate-x-6 sm:group-hover:opacity-0">
      <h3 className="mt-4 sm:mt-12 lg:mt-20 text-xl sm:text-2xl font-medium text-white break-words">
        {item.title}
      </h3>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium leading-6 text-[#FFFFFFBF]">
        {item.description}
      </p>
    </div>

      {/* Hover Statistics Reveal (Appears smoothly after delay) */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center gap-10 sm:gap-16 translate-x-6 opacity-0 transition-all duration-2000 ease-out delay-100 group-hover:translate-x-0 group-hover:opacity-100">
        {item.stats.map((stat, idx) => (
          <div key={idx} className="text-left">
            <h4 className="text-3xl sm:text-4xl font-medium text-[#0F66EA]">
              {stat.value}
            </h4>
            <p className="mt-2 text-sm sm:text-base font-medium text-[#4B5563]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="group flex h-[280px] flex-1 overflow-hidden">
      {isImageLeft ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          {contentBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

function IndustriesWeSecure() {
  const rows = [];
  for (let i = 0; i < industriesData.length; i += 2) {
    rows.push(industriesData.slice(i, i + 2));
  }

  return (
    <div className="w-full bg-[#060D1B]">
      <div className="mx-auto w-full max-w-7xl bg-[#060D1B]">
        {/* Header Section */}
        <Animation>
          <div className="px-10 pt-24 pb-16">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-4xl font-medium lg:leading-12 text-white">
                  Security expertise across <br />
                  the industries that{" "}
                  <span className="text-[#0F66EA]">matters.</span>
                </h2>
                <div className="mt-4 h-[3px] w-[100px] bg-[#0F66EA]" />
              </div>

              <div className="lg:w-[45%]">
                <p className="text-sm sm:text-base font-semibold sectionheading text-[#0F66EA]">
                  INDUSTRIES WE SECURE
                </p>
                <p className="mt-2 sectionDescription text-[#D1D1D1]">
                  We understand the unique challenges of your industry and
                  deliver solutions that protect what matters most.
                </p>
              </div>
            </div>
          </div>
        </Animation>

        {/* Industry Cards Rows */}
        <div className="mt-2 flex flex-col">
          {rows.map((pair, rowIndex) => (
            <Animation key={rowIndex}>
              <div className="flex flex-col lg:flex-row">
                {pair.map((item) => (
                  <IndustryCard key={item.id} item={item} />
                ))}
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndustriesWeSecure;
