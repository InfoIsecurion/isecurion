import React from "react";
import Background from "../../assets/services/BreakerSlide.svg";
import { Animation } from "../../components/ui/Animation";

function page() {
  return (
    <div>
      <main className="w-full bg-[#070D19] text-white">
        {/* PAGE TITLE BANNER */}

        <section
          className="relative h-[80px] w-full overflow-hidden bg-[#07131B] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-[28px] font-semibold leading-none text-white sm:text-[30px]">
              Disclaimer
            </h1>
          </div>
        </section>

        {/* POLICY CONTENT */}
        <section className="relative bg-[#070D19] py-9 sm:py-11 lg:py-14">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Animation>
              <p className="text-lg leading-[1.9] text-center md:text-left text-[#FFFFFF] sm:text-[20px] sm:leading-[1.85] max-w-6xl">
                All information displayed, transmitted or carried on ISECURION
                Website (including, but not limited to, directories, guides,
                news articles, opinions, reviews, text, photographs, images,
                illustrations, profiles, audio clips, video clips, trademarks,
                service marks and the like, collectively the "Content") is
                protected by copyright and other intellectual property laws. By
                accessing this site, a user agrees not to modify, publish,
                transmit, transfer, sell, reproduce, create derivative work
                from, distribute, repost, perform, display or in any way
                commercially exploit any of the content. You agree to abide by
                all copyright notices and restrictions attached to any content
                accessed through the ISECURION Website, not to alter the content
                in any way.
              </p>
            </Animation>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
