import { notFound } from "next/navigation";
import CaseStudyHero from "../../../components/case-studies/CaseStudyHero";

import { Icon } from "@iconify/react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  heroEyebrow: string;
  description: string;
  heading: string;
  heroHighlights?: {
    label: string;
    icon: string;
  }[];
  heroTemplate:
    | "template1"
    | "template2"
    | "template3"
    | "template4"
    | "template5"
    | "template6";
  agenda: {
    id?: string;
    number: string;
    title: string;
    subtitle?: string;
  }[];
  section1?: {
    id?: string;
    number: string;
    eyebrow?: string;
    mainheading: string;

    description?: {
      id?: string;
      description: string;
    }[];

    researchfocus?: {
      id?: string;
      researchitem: string;
    }[];

    observations?: {
      id?: string;
      value: string;
      description: string;
    }[];
  };
  section2?: {
    number: string;
    eyebrow: string;
    section2heading: string;
    paragraphs?: { id?: string; text: string }[];
    questionIntro?: string;
    questionLabel?: string;
    highlightQuestion?: string;
    answer?: string;
  };
  section3?: {
    number: string;
    eyebrow?: string;
    heading?: string;
    description?: string;
    corecomponents?: {
      id?: string;
      componentlist?: string;
    }[];
    constraints?: {
      id?: string;
      constraintitem?: string;
    }[];
    techniques?: {
      id?: string;
      technique?: string;
    }[];
  };
  section4?: {
    number?: string;
    eyebrow?: string;
    heading?: string;
    description?: string;
    cards?: {
      id?: string;
      phasenumber?: string;
      heading?: string;
      description?: string;
    }[];
  };
  section5?: {
    eyebrow?: string;
    heading?: string;
    number?: string;
    cards?: {
      id?: string;
      heading?: string;
      description?: string;
    }[];
  };
  section6?: {
    number?: string;
    eyebrow?: string;
    heading?: string;
    cards?: {
      id?: string;
      heading?: string;
      title?: string;
      description?: string;
      listItems?: {
        id?: string;
        item: string;
      }[];
    }[];
  };
  section7?: {
    number?: string;
    eyebrow?: string;
    heading?: string;
    mainheading?: string;
    descriptions?: {
      id?: string;
      description: string;
    }[];
    cards?: {
      id?: string;
      heading?: string;
      description?: string;
    }[];
  };
  section8?: {
    number?: string;
    eyebrow?: string;
    heading?: string;

    cards?: {
      id?: string;
      icon?: string;
      heading?: string;
      description?: string;
    }[];
    conclusion?: string;
  };
  section9?: {
    number?: string;
    eyebrow?: string;
    heading?: string;
    descriptions?: {
      id?: string;
      title?: string;
      description: string;
    }[];
  };
  faqheading?: string;
  faqdescription?: string;
  number?: string;
  faqs?: {
    id?: string;
    question: string;
    answer: string;
  }[];
  faqnote?: string;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const response = await fetch(`${API_URL}/api/case-studies/get-all`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch case studies");
  }

  const result = await response.json();

  const caseStudy: CaseStudy | undefined = result.data?.find(
    (item: CaseStudy) => item.slug === slug,
  );

  if (!caseStudy) {
    notFound();
  }
  const s1 = caseStudy.section1;
  const s2 = caseStudy.section2;
  const s3 = caseStudy.section3;
  const s4 = caseStudy.section4;
  const s5 = caseStudy.section5;
  const s6 = caseStudy.section6;
  const s7 = caseStudy.section7;
  const s8 = caseStudy.section8;
  const s9 = caseStudy.section9;

  const show = {
    agenda: !!caseStudy.agenda?.length,
    s1: !!(
      s1?.mainheading ||
      s1?.description?.length ||
      s1?.researchfocus?.length ||
      s1?.observations?.length
    ),
    s2: !!(
      s2?.section2heading ||
      s2?.paragraphs?.length ||
      s2?.highlightQuestion ||
      s2?.answer
    ),
    s3: !!(
      s3?.heading ||
      s3?.description ||
      s3?.corecomponents?.length ||
      s3?.constraints?.length ||
      s3?.techniques?.length
    ),
    s4: !!(s4?.heading || s4?.description || s4?.cards?.length),
    s5: !!(s5?.heading || s5?.cards?.length),
    s6: !!(s6?.heading || s6?.cards?.length),
    s7: !!(s7?.heading || s7?.cards?.length),
    s8: !!(s8?.heading || s8?.description || s8?.cards?.length),
    s9: !!(s9?.heading || s9?.descriptions?.length),
  };

  return (
    <div className="bg-[#060D1B]">
      {/* this is the hero section  */}
      <CaseStudyHero
        heroTemplate={caseStudy.heroTemplate}
        heroEyebrow={caseStudy.heroEyebrow}
        heading={caseStudy.heading}
        description={caseStudy.description}
        heroHighlights={caseStudy.heroHighlights}
      />

      {/* agenda  */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h3 className="text-2xl font-semibold text-white">AGENDA</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-30 gap-y-2 mt-10">
            {caseStudy.agenda?.map((item, index) => (
              <a
                key={item.id || index}
                href={`#section-${index + 1}`}
                className="flex gap-5 justify-between group cursor-pointer"
              >
                <p className="text-base sm:text-lg font-semibold text-[#0F66EA]  ">
                  {item.title}
                </p>

                <p className="text-base sm:text-lg font-semibold text-[#FFFFFF]">
                  {item.number}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/*  section 1  */}
      {caseStudy.section1 && (
        <section className="w-full py-14 scroll-mt-24" id="section-1">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="relative  text-center lg:text-left">
              <p className="absolute -top-15 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section1.number}
              </p>

              <p className="relative z-10 text-sm sm:text-base font-semibold sectionheading text-[#0FEADB]">
                {caseStudy.section1?.eyebrow}
              </p>

              <h2 className="relative z-10 max-w-3xl mx-auto lg:mx-0 text-[#FEFEFE]">
                {caseStudy.section1?.mainheading}
              </h2>

              <div className="relative z-10 space-y-2">
                {caseStudy.section1.description?.map((item, index) => (
                  <p
                    key={item.id || index}
                    className="max-w-3xl mx-auto lg:mx-0 text-base sm:text-lg font-normal sectionDescription text-[#D1D1D1]"
                  >
                    {item.description}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-2 mt-5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#FEFEFE]">
                Research Focus
              </h3>
              <ul className="space-y-1 list-disc pl-10">
                {caseStudy.section1?.researchfocus?.map((listItem, index) => (
                  <li
                    key={listItem.id || index}
                    className="text-sm sm:text-base font-normal text-[#D1D1D1]"
                  >
                    {listItem.researchitem}
                  </li>
                ))}
              </ul>
            </div>
            {!!caseStudy.section1?.observations?.length && (
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#FEFEFE]">
                  Key Research Observations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10 py-4 mt-8 bg-[#08152899] border-t border-b border-[#13304F]">
                  {caseStudy.section1.observations.map((item, index) => (
                    <div key={item.id || index} className="space-y-1">
                      <h4 className="text-2xl font-medium text-[#C8912A]">
                        {item.value}
                      </h4>
                      <p className="text-[13px] font-normal text-[#B1B2B4]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* section 2  */}
      {show.s2 && (
        <section className="w-full py-14" id="section-2">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="relative space-y-4 text-center lg:text-left">
              <p className="absolute -top-12 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section2.number}
              </p>
              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section2?.eyebrow}
              </p>
              <h2 className="relative z-10 max-w-3xl mx-auto lg:mx-0 text-[#FEFEFE]">
                {caseStudy.section2?.section2heading}
              </h2>
            </div>

            <div className="mt-5">
              {caseStudy.section2?.paragraphs?.map((paragraph, index) => (
                <p
                  key={paragraph.id || index}
                  className="text-base sm:text-lg font-normal sectionDescription text-[#D1D1D1]"
                >
                  {paragraph.text}
                </p>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-base sm:text-lg font-normal sectionDescription text-[#D1D1D1]">
                {caseStudy.section2?.questionIntro}
              </p>

              <p className="text-[15px] font-normal rounded-sm px-10 py-5 sectionDescription text-[#FFFFFF] bg-[#002C41] border border-[#0E7C8640]">
                {caseStudy.section2?.highlightQuestion}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-base sm:text-lg font-normal sectionDescription text-[#D1D1D1]">
                {caseStudy.section2?.answer}
              </p>
            </div>
          </div>
        </section>
      )}
      {/* section 3 */}
      {show.s3 && (
        <section className="w-full py-14" id="section-3">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            {/* Section Heading */}
            <div className="relative space-y-4 text-center lg:text-left">
              <p className="absolute -top-12 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section3.number}
              </p>

              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section3?.eyebrow}
              </p>

              <h2 className="max-w-3xl mx-auto lg:mx-0 text-[#FEFEFE]">
                {caseStudy.section3?.heading}
              </h2>

              <p className="max-w-4xl mx-auto lg:mx-0 text-base sm:text-lg font-normal leading-7 text-[#D1D1D1]">
                {caseStudy.section3?.description}
              </p>
            </div>

            {/* Scope Details */}
            <div className="space-y-10 mt-10">
              {/* Core Components */}
              <div className="  ">
                <h3 className="text-xl font-semibold text-white mb-5">
                  Core Components
                </h3>

                <ul className="flex flex-wrap gap-4 ">
                  {caseStudy.section3?.corecomponents?.map((item, index) => (
                    <li
                      key={item.id || index}
                      className="text-sm font-semibold px-3 py-2 rounded-md text-[#D1D1D1] bg-[#121828] border border-[#DADADA17]"
                    >
                      {item.componentlist}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Constraints */}
              <div className="">
                <h3 className="text-xl font-semibold text-white mb-5">
                  Constraints
                </h3>

                <ul className="space-y-1 list-disc pl-5">
                  {caseStudy.section3?.constraints?.map((item, index) => (
                    <li
                      key={item.id || index}
                      className="text-sm sm:text-base text-[#D1D1D1]"
                    >
                      {item.constraintitem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Techniques */}
              <div className="">
                <h3 className="text-xl font-semibold text-white mb-5">
                  Techniques
                </h3>

                <ul className="flex flex-wrap gap-5 ">
                  {caseStudy.section3?.techniques?.map((item, index) => (
                    <li
                      key={item.id || index}
                      className="text-sm font-semibold px-3 py-2 rounded-md text-[#FFFFFF] border border-[#DADADA17] bg-[#121828]"
                    >
                      {item.technique}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* section 4 */}
      {show.s4 && (
        <section className="w-full py-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="relative space-y-4 text-center lg:text-left">
              <p className="absolute -top-12 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section4.number}
              </p>

              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section4?.eyebrow}
              </p>

              <h2 className="max-w-3xl mx-auto lg:mx-0 text-[#FEFEFE]">
                {caseStudy.section4?.heading}
              </h2>

              <p className="max-w-4xl mx-auto lg:mx-0 text-base sm:text-lg font-normal leading-7 text-[#D1D1D1]">
                {caseStudy.section3?.description}
              </p>
            </div>

            <div className="relative mx-auto mt-10">
              <div className="absolute bottom-5 left-[14px] top-1 w-px bg-gradient-to-b from-[#3B9E6A] to-[#263028] sm:left-1/2 sm:-translate-x-1/2" />
              <div className="relative space-y-8 sm:space-y-8 lg:space-y-9">
                {caseStudy.section4?.cards?.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="relative grid min-w-0 grid-cols-[30px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] sm:gap-x-0"
                  >
                    {/* Left Content */}
                    <div
                      className={`col-start-2 min-w-0 w-full sm:col-start-1 sm:row-start-1 ${
                        index % 2 === 0
                          ? "sm:pr-7 sm:text-right lg:pr-8"
                          : "hidden sm:invisible sm:block sm:pl-7 lg:pl-8"
                      }`}
                    >
                      {index % 2 === 0 && (
                        <>
                          <p className="text-sm  text-[#0FEADB] sm:text-[14px]">
                            {item.phasenumber}
                          </p>

                          <h3 className="mt-2 sm:mt-3 text-base font-medium  sm:text-lg text-[#FEFEFE]">
                            {item.heading}
                          </h3>

                          <p className="mt-3 sm:mt-5 w-full max-w-[485px]  text-sm font-normal  text-[#D1D1D1] sm:text-[15px] ">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Number Marker */}
                    <div className="absolute left-0 top-0 z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center  text-xs font-normal  sm:relative sm:col-start-2 sm:row-start-1 sm:mx-auto sm:h-[36px] sm:w-[36px] border border-[#0FEADB] bg-[#0A0D0B] text-[#0FEADB]">
                      {index + 1}
                    </div>

                    {/* Right Content */}
                    <div
                      className={`min-w-0 w-full sm:col-start-3 sm:row-start-1 ${
                        index % 2 !== 0
                          ? "col-start-2 sm:pl-5 sm:text-left lg:pl-4"
                          : "hidden sm:invisible sm:block sm:pr-5 lg:pr-0"
                      }`}
                    >
                      {index % 2 !== 0 && (
                        <>
                          <p className="text-sm tracking-[0.12em] text-[#0FEADB] sm:text-[14px]">
                            {item.phasenumber}
                          </p>

                          <h3 className="mt-2 sm:mt-3 text-base font-medium leading-5 text-[#FFFFFF] sm:text-lg">
                            {item.heading}
                          </h3>

                          <p className="mt-3 sm:mt-5 w-full max-w-[485px] text-sm font-normal  text-[#D1D1D1] sm:text-[15px]">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* section 5 */}
      {show.s5 && (
        <section className="w-full py-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="relative text-center lg:text-left">
              <p className="absolute -top-12 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section5?.number}
              </p>

              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section5?.eyebrow}
              </p>

              <h2 className="max-w-4xl mx-auto lg:mx-0 text-[#FEFEFE]">
                {caseStudy.section5?.heading}
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {caseStudy.section5?.cards.map((item, index) => (
                <div
                  key={item.id || index}
                  className="rounded-xl bg-[#DADADA0D]"
                >
                  <h3 className="text-[15px] font-bold px-6 py-4 border-b-2 border-blue-600 text-[#FFFFFF]">
                    {item.heading}
                  </h3>
                  <p className="text-[15px] font-normal px-6 py-4 text-[#D1D1D1]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* section 6  */}
      {show.s6 && (
        <section className="w-full py-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="relative space-y-4">
              <p className="absolute -top-12 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section6?.number}
              </p>

              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section6?.eyebrow}
              </p>

              <h2 className="text-[#FEFEFE]">{caseStudy.section6?.heading}</h2>
            </div>
            <div className="grid grid-cols-1 mt-10 gap-6">
              {caseStudy.section6?.cards?.map((item, index) => (
                <div
                  key={item.id || index}
                  className="py-3 rounded-xl opacity-100 border border-[#0A193212] bg-[#DADADA0D]"
                >
                  <div className="flex px-10 py-3 gap-10 border-b border-blue-600">
                    <p className="text-[13px] font-bold text-[#D1D1D1]">
                      {item.heading}
                    </p>
                    <h3 className="text-[15px] font-bold text-[#FFFFFF]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[15px]  font-normal px-10 py-3 text-[#D1D1D1]">
                    {item.description}
                  </p>

                  <ul className={`px-10 py-3 flex gap-4 flex-wrap`}>
                    {item.listItems?.map((listItem, listIndex) => (
                      <li
                        key={listItem.id || listIndex}
                        className={`text-xs font-semibold px-3 py-0.5 rounded-sm ${listIndex % 2 === 0 ? "bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]" : "text-[#3730A3] bg-[#EEF2FF] border-[#C7D2FE]"}`}
                      >
                        {listItem.item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* section 7  */}
      {show.s7 && (
        <section className="w-full py-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            {/* Section Heading */}
            <div className="relative space-y-4 text-center lg:text-left">
              <p className="absolute -top-12 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section7?.number}
              </p>

              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section7?.eyebrow}
              </p>

              <h2 className="text-[#FEFEFE]">{caseStudy.section6?.heading}</h2>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {caseStudy.section7?.cards?.map((card, index) => (
                <div
                  key={card.id || index}
                  className="relative rounded-lg p-5 bg-[#66666614] space-y-4"
                >
                  <div className="absolute left-0 w-[2px] h-[23px] rounded-br-2xl rounded-tr-2xl  bg-[#0FEADB]"></div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {card.heading}
                  </h3>

                  <p className="text-sm sm:text-base leading-7 text-[#B1B2B4]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* section 8  */}
      {show.s8 && (
        <section className="w-full py-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-4">
            <div className="relative space-y-4 text-center lg:text-left">
              <p className="absolute -top-12 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section8?.number}
              </p>

              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section8?.eyebrow}
              </p>

              <h2 className="max-w-2xl mx-auto lg:mx-0 text-[#FEFEFE]">
                {caseStudy.section6?.heading}
              </h2>
            </div>
            <div>
              <p className="text-base sm:text-lg font-normal sectionDescription text-[#D1D1D1]">
                {caseStudy.section8?.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded-xl border border-[#FFFFFF1F]">
              {caseStudy.section8.cards.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center  space-y-2 px-3 py-4 border border-[#1F2532] ${index === 0 ? "bg-[#060D1B]" : "bg-[#0B1220]"}`}
                >
                  <div>
                    <Icon icon={item.icon} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#FFFFFF]">
                    {item.heading}
                  </h3>
                  <p className="text-sm font-medium text-[#D1D1D1]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base sm:text-lg font-normal mt-5 text-[#D1D1D1]">
              {caseStudy.section8.conclusion}
            </p>
          </div>
        </section>
      )}
      {/* section 9 */}
      {show.s9 && (
        <section className="w-full py-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="relative text-center lg:text-left">
              <p className="absolute -top-15 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
                {caseStudy.section9?.number}
              </p>

              <p className="text-base font-semibold text-[#0FEADB]">
                {caseStudy.section9?.eyebrow}
              </p>

              <h2 className="max-w-3xl  text-[#FEFEFE]">
                {caseStudy.section9?.heading}
              </h2>
            </div>

            <div className="space-y-5 mt-10">
              {caseStudy.section9?.descriptions?.map((item, index) => (
                <div
                  key={item.id || index}
                  className="px-10 py-4 space-y-2  rounded-xl bg-[#0B2545]"
                >
                  {item.title && (
                    <h3 className="text-base sm:text-lg  font-bold text-[#8FE0E6]">
                      {item.title}
                    </h3>
                  )}

                  <p className="text-base sm:text-base  font-normal leading-[22px] text-[#D1D1D1]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* faqs section  */}

      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="relative space-y-4 text-center lg:text-left">
            <p className="absolute -top-20 left-0 text-[120px] font-medium text-[#E3EFFF21] pointer-events-none">
              {caseStudy.number}
            </p>

            <p className="text-sm sm:text-base font-semibold text-[#0FEADB]">
              Frequently Asked Questions
            </p>

            {caseStudy.faqheading && (
              <h2 className="max-w-3xl text-[#FEFEFE]">
                {caseStudy.faqheading}
              </h2>
            )}
            {caseStudy.faqdescription && (
              <p className="mt-3 text-base sm:text-lg font-normal sectionDescription text-[#D1D1D1]">
                {caseStudy.faqdescription}
              </p>
            )}
          </div>

          <div className="space-y-4 mt-8">
            {caseStudy.faqs?.map((faq, index) => (
              <details
                key={faq.id || index}
                className="group overflow-hidden rounded-lg border border-[#1B3045] bg-[#0B1524] transition-all duration-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-white">
                  <h3 className="text-sm sm:text-base font-medium leading-6">
                    {faq.question}
                  </h3>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#17263A] text-xl font-light text-[#0FEADB] transition-transform duration-300">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>

                <div className="border-t border-[#1B3045] px-5 py-4">
                  <p className="text-sm sm:text-base leading-7 text-[#B1B2B4]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
          <p className="mt-4 text-sm sm:text-base px-3 py-4 leading-7 rounded-lg text-[#B1B2B4] bg-[#0B2545] border border-[#0E7C8640]">
            {caseStudy.faqnote
              ?.split(/(info@isecurion\.com|submit an enquiry)/g)
              .map((part, index) => {
                if (part === "info@isecurion.com") {
                  return (
                    <a
                      key={index}
                      href={`mailto:${part}`}
                      className="text-[#0D6EFD] hover:underline"
                    >
                      {part}
                    </a>
                  );
                }

                if (part === "submit an enquiry") {
                  return (
                    <a
                      key={index}
                      href="/company/contact"
                      className="text-[#0D6EFD] hover:underline"
                    >
                      {part}
                    </a>
                  );
                }

                return <span key={index}>{part}</span>;
              })}
          </p>
        </div>
      </section>
    </div>
  );
}
