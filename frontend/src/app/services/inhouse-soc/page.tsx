import inhousescobackground from "../../../assets/services/inhousescobackgroundImage.png";
import { Icon } from "@iconify/react";
import WordReveal, {
  AnimatedCard,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";

interface SOCFoundation {
  Icon: string;
  heading: string;
  description: string;
  bgColor: string;
}

const socFoundation: SOCFoundation[] = [
  {
    Icon: "carbon:reference-architecture",
    heading: "Architecture",
    description:
      "Design your SOC setup for high availability & resilience in a cost-effective manner.",
    bgColor: "#0F66EA",
  },
  {
    Icon: "iconoven:tool-use-sharp",
    heading: "Implementation",
    description:
      "Understand & deploy appropriate tools & technologies for the efficient functioning of SOC based on your requirement.",
    bgColor: "#C8912A",
  },
  {
    Icon: "icon-park-outline:setting",
    heading: "Configuration",
    description:
      "Assists in the integration of network devices & ensures secure communication between SOC components with best practices.",
    bgColor: "#3B9E6A",
  },
  {
    Icon: "icon-park-outline:setting",
    heading: "Continuous Support",
    description:
      "Troubleshoot & resolve any configuration errors & communication failures after the post-SOC deployment.",
    bgColor: "#7D70F0",
  },
];

function InHouseSoc() {
  return (
    <div>
      {/* hero section  */}
      <section
        className="w-full py-14 bg-cover bg-center"
        style={{ backgroundImage: `url(${inhousescobackground.src})` }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
            <p
              className="text-sm sm:text-base font-semibold text-[#7D70F0] opacity-0 animate-hero-reveal sectionheading"
              style={{ animationDelay: "150ms" }}
            >
              IN-HOUSE SOC SERVICE
            </p>
            <h1
              className="text-[#FFFFFF] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "300ms" }}
            >
              Build a SOC That Works Around Your Business
            </h1>
            <p
              className="text-base sm:text-[17px] font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D9D9D9] opacity-0 animate-hero-reveal"
              style={{ animationDelay: "450ms" }}
            >
              Looking to establish a strong security operation center (SOC) for
              your organization's infrastructure and data protection?
            </p>
            <div className="space-y-0.5">
              <p
                className="text-base sm:text-[17px] font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D9D9D9] opacity-0 animate-hero-reveal"
                style={{ animationDelay: "600ms" }}
              >
                ISECURION is here to help. We work closely with your in-house
                team to design a SOC architecture that is both resilient and
                highly available.
              </p>
              <p
                className="text-base sm:text-[17px] font-medium leading-[27px] sm:leading-[30px] md:leading-[32px] text-[#D9D9D9] opacity-0 animate-hero-reveal"
                style={{ animationDelay: "850ms" }}
              >
                Our certified cyber experts have experience in implementing and
                configuring SIEM&MDR technologies to effectively integrate and
                ingest log data. Additionally, we can support in creating use
                cases to make monitoring easier for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOC FOUNDATION  */}
      <section className="w-full py-14 overflow-hidden bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}
          <div className="space-y-4 text-center lg:text-left">
            <LeftAnimation>
              <p className="text-sm sm:text-base font-semibold text-[#7D70F0]">
                SOC FOUNDATION
              </p>
            </LeftAnimation>
            <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
              <div className="w-full lg:w-[38%]">
                <WordReveal
                  text="Build the Right SOC for Your Organization"
                  className="text-[#FEFEFE]"
                />
                {/* <h2 className="text-[#FEFEFE]">
                  Build the Right SOC for Your Organization
                </h2> */}
              </div>
              <div className="w-full lg:w-[50%]">
                <RightAnimation>
                  <p className="text-base sm:text-[17px] font-normal leading-[26px] md:leading-[28px] leading-[] text-[#D1D1D1]">
                    A well-designed SOC strengthens your security posture,
                    improves visibility, and enables faster response. We work
                    with you to build an internal SOC that fits your
                    environment, scales with your needs, and supports long-term
                    resilience.
                  </p>
                </RightAnimation>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {socFoundation.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="px-5 space-y-3 border-l border-[#0F66EA29]"
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
                  <p className="text-sm font-normal leading-[21px] text-[#D1D1D1D6]">
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

export default InHouseSoc;
