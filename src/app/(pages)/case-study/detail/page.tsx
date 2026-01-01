import React from "react";
import Image from "next/image";

export default function CaseStudyDetailPage() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative py-16 md:py-20">
        <div className="absolute top-0 left-0 z-0">
          <Image
            src="/images/dna.svg"
            alt="DNA"
            width={300}
            height={300}
            className="h-[200px] md:h-[300px] w-auto object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-[#00C9A7]">
            <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold leading-none">
              FIRESIDE
            </h1>
            <p className="text-xs md:text-base tracking-[6px] md:tracking-[11px] uppercase">
              Introduction
            </p>
          </div>

          <h2 className="text-xl md:text-4xl 2xl:text-5xl text-[#00C9A7]">
            From <span className="font-bold">Script</span> to{" "}
            <span className="font-bold">Doorstep</span>.
          </h2>

          <p className="text-sm md:text-lg text-[#374151] leading-relaxed font-light">
            Fireside Pharmacy is a full digital solution for managing
            medications, allowing patients to order prescriptions, request
            refills, transfer prescriptions and track orders in real time.
          </p>
        </div>
      </div>

      {/* SECTION TEMPLATE */}
      {[
        {
          title: "Introduction",
          img: "/images/fireside-1.svg",
          reverse: false,
          description:
            "Fireside Pharmacy revolutionizes medication management with an intuitive platform that simplifies the entire prescription process. Our solution empowers patients to take control of their health by providing seamless access to prescription services from anywhere, at any time.",
        },
        {
          title: "Dashboard  ",
          img: "/images/fireside-2.svg",
          reverse: false,
          description:
            "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
        },
        {
          title: "AI-Powered  ",
          img: "/images/fireside-3.svg",
          reverse: true,
          description:
            "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
        },
        {
          title: "New RX request ",
          img: "/images/fireside-4.svg",
          reverse: false,
          description:
            "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
        },
        {
          title: "Confirmation / Checkout",
          img: "/images/fireside-5.svg",
          reverse: true,
          description:
            "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
        },
        {
          title: "Refill & Transfer RX ",
          img: "/images/fireside-6.svg",
          reverse: false,
          description:
            "The comprehensive dashboard provides patients with a centralized view of all their medications, upcoming refills, and order status. With real-time tracking and notifications, users can stay informed about their prescription journey from order placement to delivery.",
        },
      ].map((item, i) => {
        // Render first item separately, then add the sections after it
        if (i === 0) {
          return (
            <React.Fragment key={i}>
              <div
                className={`container mx-auto px-4 py-12 md:py-10 flex flex-col ${
                  item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10`}
              >
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#374151] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <Image
                    src={item.img}
                    alt="Fireside UI"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* RELATED WORK SECTION */}
              <div className="container mx-auto px-4 py-12 md:py-5 mt-8 md:mt-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00C9A7] text-center mb-12 md:mb-16">
                  Related Work
                </h2>

                <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-center max-w-4xl mx-auto">
                  {/* Defigram Project */}
                  <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                      <Image
                        src="/images/Related-1.svg"
                        alt="Defigram Logo"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#374151]">
                      Defigram
                    </h3>
                    <p className="text-sm md:text-base text-[#6B7280] text-center">
                      Social app for chat an stories.
                    </p>
                  </div>

                  {/* Frogbase Project */}
                  <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                      <Image
                        src="/images/Related-2.svg"
                        alt="Frogbase Logo"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#374151]">
                      Frogbase
                    </h3>
                    <p className="text-sm md:text-base text-[#6B7280] text-center">
                      An ai based model training platoform.
                    </p>
                  </div>
                </div>
              </div>

              {/* LINKS AND CREDENTIALS SECTION */}
              <div className="container mx-auto px-4 py-12 md:py-20">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00C9A7] text-center mb-8 md:mb-12">
                  Links and Credentials
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
                  {[
                    "Instagram",
                    "Dribbble",
                    "Linkedin",
                    "Github",
                    "Upwork",
                    "Figma",
                  ].map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-base md:text-lg text-[#374151] underline hover:text-[#00C9A7] transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* CORE FEATURES SECTION */}
              <div className="mx-auto py-12 md:py-20">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#00C9A7] text-center mb-12 md:mb-16">
                    Core Features
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* AI-Powered Prescription Digitization */}
                    <div className="bg-white text-center p-6 md:p-8 border-t-4 border-[#00C9A7] shadow-md">
                      <h3 className="text-lg md:text-xl font-bold text-[#374151] mb-3">
                        AI-Powered Prescription Digitization:
                      </h3>
                      <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                        Uses artificial intelligence to instantly read and
                        convert uploaded prescription images into structured and
                        accurate digital data.
                      </p>
                    </div>

                    {/* Order Tracking */}
                    <div className="bg-white text-center p-6 md:p-8 border-t-4 border-[#00C9A7] shadow-md">
                      <h3 className="text-lg md:text-xl font-bold text-[#374151] mb-3">
                        Order Tracking
                      </h3>
                      <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                        Streamline OASIS and routine visit documentation for
                        nurses and caregivers.
                      </p>
                    </div>

                    {/* Refill Management */}
                    <div className="bg-white text-center p-6 md:p-8 border-t-4 border-[#00C9A7] shadow-md">
                      <h3 className="text-lg md:text-xl font-bold text-[#374151] mb-3">
                        Refill Management
                      </h3>
                      <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                        Streamline OASIS and routine visit documentation for
                        nurses and caregivers.
                      </p>
                    </div>

                    {/* Transfer Rx */}
                    <div className="bg-white text-center p-6 md:p-8 border-t-4 border-[#00C9A7] shadow-md">
                      <h3 className="text-lg md:text-xl font-bold text-[#374151] mb-3">
                        Transfer Rx
                      </h3>
                      <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                        Streamline OASIS and routine visit documentation for
                        nurses and caregivers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI SECTION */}
            </React.Fragment>
          );
        }

        // Render remaining items normally
        return (
          <div
            key={i}
            className={`container mx-auto px-4 py-12 md:py-10 flex flex-col ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10`}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-[#374151] leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <Image
                src={item.img}
                alt="Fireside UI"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
