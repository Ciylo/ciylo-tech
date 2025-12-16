"use client";
export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto 2xl:px-0 md:px-16 px-10 2xl:py-15 md:py-10 py-8">
        <div className="flex flex-col 2xl:gap-14 md:gap-10 gap-8">
          <div className="flex flex-col 2xl:gap-7 md:gap-5 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
              <span className="text-xs font-bold text-black">Let&apos;s Start</span>
            </div>
            <h5 className="text-[66px] 2xl:text-[96px] text-shadow-lg font-semibold text-[#000000] leading-none">
              <span className="text-[#00C9A7] font-bold! ">Ciylo</span> Turns{" "}
              <br />
              Your Idea Into <br /> Business Success
            </h5>
          </div>

          <div className="flex 2xl:max-w-4xl md:max-w-2xl max-w-2xl">
            <div className="w-1/3 border-l-4 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1">
              <span className="text-10 font-bold text-[#434343]">200+</span>
              <span className="text-xs text-[#4B5563]">Projects Shipped</span>
            </div>
            <div className="w-1/3 border-l-4 2xl:ps-7 ps-4 border-[#00C9A7] h-full flex flex-col gap-1">
              <span className="text-10 font-bold text-[#434343]">6+</span>
              <span className="text-xs text-[#4B5563]">Years Running</span>
            </div>
            <div className="w-1/3 border-l-4 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1">
              <span className="text-10 font-bold text-[#434343]">50+</span>
              <span className="text-xs text-[#4B5563]">Happy Clients</span>
            </div>
          </div>

          <p className="text-2xl font-light text-[#000000]">
            A software company that turns ambitious ideas into <br /> scalable,
            user-centered digital products. <br /> No fluff, just results.
          </p>
        </div>
      </div>
    </section>
  );
}

