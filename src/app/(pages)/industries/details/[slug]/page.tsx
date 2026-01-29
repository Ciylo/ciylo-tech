import React from "react";
import Image from "next/image";
import OurClients from "../../../../../components/-webComponents/OurClients";
import HappyClients from "../../../home/HappyClients";
import GetStarted from "@/components/-webComponents/GetStarted";
import { getIndustryBySlug } from "@/data/industries";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { industryDetails } = await import("@/data/industries");
  
  return industryDetails.map((industry) => ({
    slug: industry.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }
  
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const {
    title,
    subtitle,
    description,
    heroImage,
    firstRowSolutions,
    secondRowSolutions,
    firstRowItems,
    secondRowItems,
  } = industry;

  // Checkmark icon component
  const CheckmarkIcon = () => (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 3.5L5.25 9.91667L2.33334 7"
        stroke="#00C9A7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-10 md:py-10 py-8 gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:w-1/2">
          <div className="flex items-center gap-3 justify-start">
            <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
            <span className="text-xs font-bold text-black">{subtitle}</span>
          </div>
          <h5 className="text-[28px] sm:text-[32px] md:text-[46px] lg:text-[56px] 2xl:text-[96px] md:leading-[60px] lg:leading-[70px] 2xl:leading-[110px] leading-tight md:text-start text-center font-semibold text-[#000000]">
            <span className="text-[#00C9A7] font-bold">{title}</span>
          </h5>
          <p className="text-sm sm:text-base text-[#000000] leading-relaxed text-center md:text-start">
            {description}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-square">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
            />
          </div>
        </div>
      </div>
      <OurClients />
      <div className="container mx-auto 2xl:px-0 md:px-16 px-4 sm:px-6 2xl:py-15 md:py-10 py-6 sm:py-8">
        <h5 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] 2xl:text-[48px] mb-6 md:mb-8 lg:mb-10 2xl:mb-12 font-bold! text-center text-[#000000] leading-tight sm:leading-none px-2">
          Key Solutions We Build.
        </h5>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {firstRowSolutions.map((solution) => (
              <div
                key={solution.slug}
                className={`border border-[#5FF1D8] rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#C0F6ED40] p-4 sm:p-6 md:p-8 text-center ${solution.colSpan}`}
              >
                <h3
                  className={`text-[#00C9A7] ${solution.fontWeight} text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl mb-2 sm:mb-3 md:mb-4`}
                >
                  {solution.title}
                </h3>
                <p className="text-[#393939] text-xs sm:text-sm md:text-base leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
          {/* Bottom Row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full sm:max-w-2xl lg:max-w-4xl">
              {secondRowSolutions.map((solution) => (
                <div
                  key={solution.slug}
                  className="border border-[#5FF1D8] rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#C0F6ED40] p-4 sm:p-6 md:p-8 text-center"
                >
                  <h3
                    className={`text-[#00C9A7] ${solution.fontWeight} text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl mb-2 sm:mb-3 md:mb-4`}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-[#393939] text-xs sm:text-sm md:text-base leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl:px-0 md:px-16 px-4 sm:px-6 2xl:py-15 md:py-10 py-6 sm:py-8">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto">
          <h5 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-semibold text-center text-[#000000] leading-[1.2] sm:leading-tight">
            Impact We
            <span className="text-[#00C9A7] font-bold"> Deliver</span>
          </h5>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center leading-relaxed max-w-2xl mx-auto">
            Our solutions create measurable improvements across the entire
            industry experience.
          </p>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 2xl:mt-16">
          <div className="max-w-5xl mx-auto">
            {/* First Row - 3 items */}
            <div className="grid grid-cols-2 mb-7 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {firstRowItems.map((item) => (
                <div
                  key={item.slug}
                  className={`flex flex-col items-center gap-3 sm:gap-4 ${item.colSpan}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center shrink-0">
                    <CheckmarkIcon />
                  </div>
                  <span className="text-[#334155] text-sm sm:text-base md:text-lg text-center font-medium leading-relaxed max-w-[200px] sm:max-w-none">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            {/* Second Row - 2 items centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full max-w-3xl">
                {secondRowItems.map((item) => (
                  <div
                    key={item.slug}
                    className="flex flex-col items-center gap-3 sm:gap-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center shrink-0">
                      <CheckmarkIcon />
                    </div>
                    <span className="text-[#334155] text-sm sm:text-base md:text-lg text-center font-medium leading-relaxed max-w-[200px] sm:max-w-none">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <HappyClients />
      <GetStarted />
    </>
  );
}

