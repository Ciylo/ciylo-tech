"use client";

import React from "react";
import Image from "next/image";
import GetStarted from "@/components/-webComponents/GetStarted";

export default function CaseStudyDetailPage() {

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative py-12 md:py-20">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto px-4">
          <div className="text-[#00C9A7]">
            <h5 className="text-4xl md:text-6xl font-bold leading-none">
              RIZE
            </h5>
            <p className="uppercase tracking-[10px]">
              Introduction
            </p>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="flex md:flex-row flex-col container mx-auto py-10 gap-6 px-6 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Keyper - Dubai
          </h3>
          <p className="text-sm md:text-xl text-[#374151] leading-relaxed">
            The smarter way to manage & rent for property owners and tenants in Dubai. Keyper secured $40 million in combined equity and credit financing from the world's leading VCs and asset managers. Property owners can cash out on their tenant’s outstanding rent any time and receive it digitally. Tenants can enjoy monthly rent payments, no matter your landlord’s terms. Agents and Portfolio Managers can grow their sales with Keyper and they can close deals faster by offering tenants the option to pay their rent monthly.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/images/rize-1.svg"
            alt="RIZE UI"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* RELATED WORK */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#00C9A7] mb-8">
          Related Work
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">

          <div className="flex flex-col items-center gap-4">
            <Image src="/images/Related-1.svg" alt="Defigram" width={80} height={80} />
            <h3 className="text-xl font-semibold text-[#6E7885]">
              Defigram
            </h3>
            <p className="text-[#6E7885]">
              Social app for chat and stories.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image src="/images/Related-2.svg" alt="Frogbase" width={80} height={80} />
            <h3 className="text-xl font-semibold text-[#6E7885]">
              Frogbase
            </h3>
            <p className="text-[#6E7885]">
              An AI based model training platform.
            </p>
          </div>

        </div>
      </div>


      {/* LINKS */}
      <div className="container mx-auto px-6 py-10 text-center flex flex-col items-center justify-center border-t border-gray-100">
        <h2 className="text-xl font-bold text-[#00C9A7] mb-6">
          Links and Credentials
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="underline text-[#6E7885]">Instagram</a>
          <a href="#" className="underline text-[#6E7885]">Dribbble</a>
          <a href="#" className="underline text-[#6E7885]">Linkedin</a>
          <a href="#" className="underline text-[#6E7885]">Github</a>
          <a href="#" className="underline text-[#6E7885]">Upwork</a>
          <a href="#" className="underline text-[#6E7885]">Figma</a>
        </div>
      </div>

      {/* DETAIL SECTIONS */}

      {/* 1 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Let Nurses Choose
          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            At the start of a patient visit, nurse can choose to fill out the documentation manually or by using the AI and voice enabled interview style that reduces the documentation time to less than 10 minutes.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/rize-2.svg" alt="UI" width={500} height={500} className="w-full h-200" />
        </div>
      </div>

      {/* 1.1 */}
      <div className="container mx-auto px-12 py-12 flex flex-col md:flex-row gap-10 items-center">
        <img src="/images/rize-group-1.svg" alt="" />
      </div>

      {/* 2 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Digital Rent Collection        </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            Efficiently manage and collect rent payments online.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/rize-3.svg" alt="UI" width={500} height={500} className="w-full h-200" />
        </div>
      </div>

      {/* 3 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Portfolio Monitoring Simplified
          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            Easily monitor and manage your property portfolio. </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/rize-4.svg" alt="UI" width={500} height={500} className="w-full h-200" />
        </div>
      </div>



      {/* 4 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Track Property
            Under Development          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            Stay updated on the progress of properties under development.</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/rize-5.svg" alt="UI" width={500} height={500} className="w-full h-200" />
        </div>
      </div>

      {/* 5 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Property Management           </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            Access essential property management services with ease.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/rize-6.svg" alt="UI" width={500} height={500} className="w-full h-200" />
        </div>
      </div>

      {/* 6 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Rent Now, Pay Later          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            Pay your rent in
            12 installments
            by card in Dubai</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/rize-1.svg" alt="UI" width={500} height={500} className="w-full h-200" />
        </div>
      </div>

      <GetStarted />
    </>
  );
}