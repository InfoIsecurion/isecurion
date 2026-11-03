import React from 'react'
import Background from "../../assets/services/BreakerSlide.svg"

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
                           Terms of Use
                        </h1>
                    </div>
                </section>

                {/* POLICY CONTENT */}
                <section className="relative bg-[#070D19] py-9 sm:py-11 lg:py-14">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-[1.9] text-[#FFFFFF] sm:text-[20px] sm:leading-[1.85] max-w-6xl">
                            By using this site, you agree to the following terms of use. ISECURION reserves the right, at any time and without prior notification, to modify, alter, or update sections of these terms. 
                            All site design, text and graphics thereof are property of ISECURION. All trademarks (TM), service marks (SM), 
                            and trade names are proprietary to ISECURION or their respective owners. If you choose to submit material to the site, you agree that such material becomes the property of ISECURION. 
                            ISECURION is not responsible for the accuracy or availability of the content, function, security, and privacy policies on any linked external sites.
                        </p>

                    </div>
                </section>
            </main>
    </div>
  )
}

export default page