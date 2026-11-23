"use client";
import { useEffect, useState } from "react";
import { getCaseStudies } from "../../services/api/casestudies";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import hero from "../../assets/casestudies/Hero.svg";
import client1 from "../../assets/casestudies/client1.png";
import client2 from "../../assets/casestudies/client2.png";
import client3 from "../../assets/casestudies/client3.png";

const filters = [
  "All",
  "VAPT",
  "Red Team",
  "AI Security",
  "DFIR",
  "Compliance Audit",
  "Security Research",
  "Others ",
];

function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [caseStudies, setCaseStudies] = useState<any[]>([]);

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const fetchCaseStudies = async () => {
    try {
      const response = await getCaseStudies();

      if (response.status === 200) {
        setCaseStudies(response.data);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching case studies:", error);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  return (
    <div className="bg-[#060D1B]">
      {/* hero section  */}
      <section
        className="relative py-20 bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center space-y-4 flex  flex-col items-center">
          <div className="w-fit flex items-center justify-center p-[1px] rounded-[100px] bg-gradient-to-r from-[#2989FF]/20 to-[#0073FF]/20 shadow-[inset_0_0_10px_#0680FA1F]">
            <div className="flex items-center justify-center px-6 py-2 rounded-[100px] gap-4 bg-[#02081D99]">
              <div className="flex">
                <div className="w-[40px] h-[40px] overflow-hidden rounded-full   bg-[#4C7094]">
                  <Image
                    src={client3}
                    alt="client1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-[40px] h-[40px] overflow-hidden rounded-full -ml-3 z-20  bg-[#4C7094]">
                  <Image
                    src={client2}
                    alt="client1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-[40px] h-[40px] overflow-hidden rounded-full -ml-3 z-10 bg-[#4C7094]">
                  <Image
                    src={client1}
                    alt="client1"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-base font-semibold text-[#FFFFFF]">
                Client Success Stories
              </p>
            </div>
          </div>
          <h1 className="text-[#FFFFFF]">
            Measurable outcomes,  <br />
            <span className="text-[#0F66EA]"> proven at scale</span>
          </h1>
          <p className="text-base sm:text-lg font-medium max-w-3xl mx-auto text-[#D1D1D1] sectionDescription">
            Explore how ISECURION helps organisations strengthen their security
            posture and achieve measurable business impact.
          </p>
        </div>
      </section>
      {/* card  */}
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* this is the filter  */}
          <div className="flex items-center gap-3">
            <h3 className="text-base sm:text-lg font-semibold casestudiesheading text-[#FFFFFF]">
              Filter
            </h3>
            <div className="flex flex-wrap gap-3">
              {filters.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(item)}
                  className={`px-5 py-2.5 rounded-sm cursor-pointer ${
                    selectedCategory === item
                      ? "bg-linear-to-r from-[#121828] to-[#40558E]"
                      : " bg-[#121828] border border-[#DADADA17]"
                  }`}
                >
                  <p className="text-sm font-semibold text-[#FFFFFF]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* cards  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
            {filteredCaseStudies.map((item, index) => (
              <div
                key={item.id || index}
                className="relative  rounded-xl  overflow-hidden flex flex-col justify-between  "
              >
                <div className="w-full h-[250px] overflow-hidden">
                  {item.featuredImage?.imageData && (
                    <Image
                      src={item.featuredImage.imageData}
                      width={500}
                      height={300}
                      alt={item.featuredImage.alt || item.title}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  )}
                </div>
                <p
                  className={`text-sm font-semibold absolute top-4 right-4 px-4 py-1.5 rounded-[5px] uppercase sectionheading text-[#0F66EA] bg-[#121828] border border-[#242A38] ${item.category === "red team" ? "text-[#E24B4A]" : item.category === "compliance audit" ? "text-[#0F66EA]" : ""}`}
                >
                  {item.category}
                </p>
                <div className="flex  flex-col p-5 space-y-3 bg-linear-to-t from-[#02081D] to-[#010513]">
                  <div className="w-fit rounded-3xl px-5 py-2 bg-[#2989FF29] text-[#FFFFFF]">
                    <p className="text-xs font-medium rounded-3xl text-[#FFFFFF]">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <h3 className="text-[15px] font-medium line-clamp-2  text-[#F6FDFE]">
                    {item.title}
                  </h3>

                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="text-sm font-semibold flex items-center gap-2 w-fit px-3 py-2 rounded-lg mt-3 text-[#0C0407] bg-[#FFFFFF] border border-[#E0E0E0]"
                  >
                    Read More{" "}
                    <Icon icon="akar-icons:arrow-right" className="text-lg" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
