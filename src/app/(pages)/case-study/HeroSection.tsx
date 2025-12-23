import React from "react";

export default function HeroSection() {
  return (
    <>
      <section>
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-15 md:py-10 py-8">
          <div className="flex flex-col 2xl:gap-14 md:gap-10 gap-8">
            <div className="flex flex-col 2xl:gap-7 md:gap-5 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
                <span className="2xl:text-xs md:text-sm text-xs font-bold text-black">
                  Case Studies
                </span>
              </div>
              <h5 className="2xl:text-[66px] md:text-[46px] text-3xl text-shadow-lg font-semibold text-[#000000] leading-none">
                {" "}
                Explore Our <br />
                <span className="text-[#00C9A7] font-bold! ">Case Studies</span>
              </h5>
            </div>

            <div className="flex 2xl:max-w-4xl justify-between  md:gap-0 gap-4 md:max-w-2xl max-w-full">
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">200+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Projects Shipped</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#00C9A7] h-full flex flex-col gap-1">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">6+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Years Running</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">50+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Happy Clients</span>
              </div>
            </div>

            <p className="2xl:text-2xl md:text-xl text-base 2xl:leading-relaxed md:leading-relaxed leading-normal font-light text-[#000000]">
              A software company that turns ambitious ideas into <br className="2xl:block md:block hidden" />{" "}
              scalable, user-centered digital products. <br className="2xl:block md:block hidden" /> No fluff, just
              results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
