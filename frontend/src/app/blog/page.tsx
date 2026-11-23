"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { getBlogs } from "../../services/api/blog";
import { useEffect, useState } from "react";
import hero from "../../assets/casestudies/Hero.svg";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const filter = [
  "Blog",
  "Compliance",
  "Crypto",
  "Cryto",
  "Cyber Security",
  "Disclosures",
  "IOT",
  "News Letter",
  "Ransomware",
  "RegExp",
  "Web Application Security",
];

function Blog() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const fetAllBlogs = async () => {
    try {
      const response = await getBlogs();
      if (response.status === 200) {
        setBlogs(response.data);
      }
    } catch (error) {
      toast.error("Error fetching case studies:");
    }
  };

  useEffect(() => {
    fetAllBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[#060D1B]">
      {/* hero section  */}
      <section
        className="py-20"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="w-fit rounded-full bg-gradient-to-t from-[#07264d] to-[#0e2e55] p-[1px]"
          >
            <div className="rounded-full  px-7 py-3 bg-[#02081D99]">
              <p className="text-base font-semibold text-white">Blog & News</p>
            </div>
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-[#FFFFFF]"
          >
            Latest Blog & Insights
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-base sm:text-lg font-medium max-w-3xl mx-auto text-[#D1D1D1] sectionDescription"
          >
            Explore expert perspectives, technical research and practical
            cybersecurity insights to understand emerging threats and build
            stronger digital defences.
          </motion.p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="flex-1 space-y-4">
              {/*  search input  */}
              <div className="relative w-full ">
                <input
                  type="search"
                  placeholder="Search..."
                  className="text-sm font-normal w-full px-4 py-3 pr-16 rounded-full outline-none text-[#FEFEFE] border border-[#FFFFFF1F] bg-[#0B1220] placeholder:text-[#FFFFFF80]"
                />

                <button
                  type="button"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-[42px] h-[42px] flex items-center justify-center rounded-full border-2 border-[#111D31] bg-[#0F66EA29]"
                >
                  <Icon
                    icon="akar-icons:search"
                    className="text-white text-xl"
                  />
                </button>
              </div>
              {/* filter  */}
              <div className="px-6 py-5 rounded-xl opacity-100 bg-[#0B1220] border border-[#2E384A]">
                <div>
                  <h3 className="text-lg font-medium text-[#FFFFFF]">
                    Categories
                  </h3>
                  <span className="w-[30px] h-[2px] inline-flex rounded-2xl bg-[#2563EB]"></span>
                </div>
                <div>
                  {filter.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center  justify-between py-2  ${index === filter.length - 1 ? "" : "border-b border-gray-500"}`}
                    >
                      <p className="text-[15px] font-medium text-[#FFFFFF]">
                        {item}
                      </p>
                      <p className="text-[15px] font-normal text-[#FFFFFF]">
                        (02)
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* recent posts  */}
              <div className="px-6 py-5 rounded-xl space-y-4 opacity-100 bg-[#0B1220] border border-[#2E384A]">
                <div>
                  <h3 className="text-lg font-medium text-[#FFFFFF]">
                    Recent Posts
                  </h3>
                  <span className="w-[30px] h-[2px] inline-flex rounded-2xl bg-[#2563EB]"></span>
                </div>
                <div className="space-y-5">
                  {blogs.slice(0, 3).map((item, index) => {
                    const formattedDate = item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "2-digit",
                        })
                      : "";
                    return (
                      <div key={index} className={`flex gap-10  `}>
                        <div className="w-[150px] overflow-hidden rounded-lg">
                          {item.featuredImage?.imageData && (
                            <Image
                              src={item.featuredImage.imageData}
                              alt={
                                item.featuredImage.alt ||
                                item.title ||
                                "Blog image"
                              }
                              width={150}
                              height={100}
                              style={{ width: "100%", height: "auto" }}
                              unoptimized
                            />
                          )}
                        </div>
                        <div>
                          <div className="space-y-3">
                            <p className="w-fit text-xs font-semibold px-3 py-2 rounded-2xl border border-[#182A53] bg-[#091C3E] text-[#FFFFFF]">
                              {formattedDate}
                            </p>
                            <h3 className="text-sm font-medium text-[#FFFFFF]">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* news letter  */}
              <div className="px-6 py-5 rounded-xl space-y-4 opacity-100 bg-[#0B1220] border border-[#2E384A]">
                <div>
                  <h3 className="text-lg font-medium text-[#FFFFFF]">
                    Newsletter
                  </h3>
                  <span className="w-[30px] h-[2px] inline-flex rounded-2xl bg-[#0F66EA]"></span>
                </div>
                <p className="text-sm font-normal  text-[#D1D1D1]">
                  Sign up to receive notifications about the latest news and
                  events from us!
                </p>
                <div>
                  <form action="" className="space-y-3">
                    <input
                      type="email"
                      placeholder="*Email address..."
                      className="text-sm font-medium px-3 py-3 w-full rounded-[10px] outline-none text-[#757575] bg-[#FAF5ED] border border-[#DCDCDC]"
                    />
                    <button
                      type="submit"
                      className="text-base font-semibold cursor-pointer w-full py-3 rounded-[10px] text-[#FFFFFF] bg-[#3263B199]"
                    >
                      Subscribe Now!
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex-2 flex flex-col justify-between">
              <div className=" space-y-4">
                {paginatedBlogs.map((item) => {
                  const formattedDate = item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      })
                    : "";

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row gap-10 p-5 rounded-lg border border-[#0A2D5C]"
                    >
                      <div className="flex-1 overflow-hidden rounded-lg">
                        {item.featuredImage?.imageData && (
                          <Image
                            src={item.featuredImage.imageData}
                            alt={
                              item.featuredImage.alt ||
                              item.title ||
                              "Blog image"
                            }
                            width={150}
                            height={100}
                            style={{ width: "100%", height: "auto" }}
                            unoptimized
                          />
                        )}
                      </div>

                      <div className="flex-1 space-y-4 bg-[#040B1D]">
                        <div className="w-fit px-3 py-2 rounded-3xl bg-[#091C3E] border border-[#929BFF1C]">
                          <p className="text-sm font-semibold text-[#FFFFFF]">
                            {formattedDate}
                          </p>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF]">
                          {item.title}
                        </h3>

                        <p className="text-sm font-normal text-[#D1D1D1]">
                          {item.description}
                        </p>

                        <button className="text-sm font-semibold px-4 py-3 flex items-center gap-3 rounded-lg cursor-pointer leading-[22px] bg-[#0F4C8145] text-[#FFFFFF]">
                          Read the Article{" "}
                          <Icon icon="akar-icons:arrow-right" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="h-[100px] flex justify-center items-center gap-3 mt-10">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer  text-[#4B535D]"
                >
                  <Icon icon="akar-icons:chevron-left" />
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-lg  text-[#FFFFFF] ${
                      currentPage === index + 1 ? "bg-[#0F66EA] " : " "
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer  text-[#4B535D] "
                >
                  <Icon icon="akar-icons:chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
