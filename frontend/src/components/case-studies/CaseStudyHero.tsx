import { Icon } from "@iconify/react";
import background1 from "../../assets/casestudies/Hero 1.svg";
import background2 from "../../assets/casestudies/Hero 2.svg";
import background3 from "../../assets/casestudies/Hero 3.svg";
import background4 from "../../assets/casestudies/Hero 4.svg";
import background5 from "../../assets/casestudies/hero 5.svg";
import background6 from "../../assets/casestudies/Hero 6.svg";
const heroBackgrounds = {
  template1: background1.src,
  template2: background2.src,
  template3: background3.src,
  template4: background4.src,
  template5: background5.src,
  template6: background6.src,
};

const heroStyles = {
  template1: {
    backgroundColor: "#0E5C67",
    borderColor: "#0E5C68",
  },
  template2: {
    backgroundColor: "#24326B",
    borderColor: "#42388D",
  },
  template3: {
    backgroundColor: "#24326C",
    borderColor: "#42398E",
  },
  template4: {
    backgroundColor: "#413027",
    borderColor: "#79421A",
  },
  template5: {
    backgroundColor: "#172D29",
    borderColor: "#477A68",
  },
  template6: {
    backgroundColor: "#301D25",
    borderColor: "#80505F",
  },
};

const highlightVariants = {
  teal: {
    card: "bg-[#0D4159]",
    icon: "text-cyan-300",
  },
  blue: {
    card: "bg-[#0b3a78] border-[#0E586A]",
    icon: "text-blue-500",
  },
  red: {
    card: "bg-slate-700/60 border-rose-500/30",
    icon: "text-red-500",
  },
};
const highlightStyles = [
  {
    // teal
    backgroundColor: "#0D4159",
    borderColor: "#0E586A",
    iconColor: "#67E8F9",
  },
  {
    // blue
    backgroundColor: "#0B3E6E",
    borderColor: "#074DA1",
    iconColor: "#3B82F6",
  },
  {
    // red
    backgroundColor: "#34384E",
    borderColor: "#6E364B",
    iconColor: "#EF4444",
  },
];
interface HeroHighlight {
  label: string;
  icon: string;
}
interface CaseStudyHeroProps {
  heroTemplate:
    | "template1"
    | "template2"
    | "template3"
    | "template4"
    | "template5"
    | "template6";
  heroEyebrow: string;
  heading: string;
  description: string;
  heroHighlights?: HeroHighlight[];
}

export default function CaseStudyHero({
  heroTemplate,
  heroEyebrow,
  heading,
  description,
  heroHighlights,
}: CaseStudyHeroProps) {
  const backgroundImage = heroBackgrounds[heroTemplate];
  const heroStyle = heroStyles[heroTemplate];

  return (
    <section
      className="relative w-full py-14 flex flex-col justify-center items-center overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 space-y-4 text-center flex flex-col items-center">
        <p
          className="text-sm font-medium px-4 py-2.5 rounded-3xl sectionheading text-[#FFFFFF] bg-[#161B2F] border border-[#455F6D]"
          style={{
            backgroundColor: heroStyle.backgroundColor,
            borderColor: heroStyle.borderColor,
          }}
        >
          {heroEyebrow}
        </p>

        <h1 className="max-w-4xl text-[#FFFFFF]">{heading}</h1>

        <p className="max-w-2xl text-base sm:text-lg font-medium sectionDescription text-[#D9D9D9]">
          {description}
        </p>
        {heroHighlights && heroHighlights.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            {heroHighlights.map((item, i) => {
              const s = highlightStyles[i % highlightStyles.length];
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border px-4 py-3 backdrop-blur"
                  style={{
                    backgroundColor: s.backgroundColor,
                    borderColor: s.borderColor,
                  }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Icon
                      icon={item.icon}
                      className="h-4 w-4"
                      style={{ color: s.iconColor }}
                    />
                  </span>
                  <span className="pr-2 text-base font-semibold text-white">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
