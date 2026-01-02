"use client";
import OurClients from "../../../components/-webComponents/OurClients";
import { useState } from "react";
import { Input, Tabs } from "antd";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import GetStarted from "@/components/-webComponents/GetStarted";
import EnergyIndustry from "@/components/-webComponents/EnergyIndustry";

export default function IndustriesPage() {
    const [activeTab, setActiveTab] = useState("energy");
    
    // Stats data
    const stats = [
      {
        slug: "projects-shipped",
        value: "200+",
        label: "Projects Shipped",
        borderColor: "border-[#434343]",
      },
      {
        slug: "years-running",
        value: "6+",
        label: "Years Running",
        borderColor: "border-[#00C9A7]",
      },
      {
        slug: "happy-clients",
        value: "50+",
        label: "Happy Clients",
        borderColor: "border-[#434343]",
      },
    ];

    // Tabs data
    const tabs = [
      {
        slug: "energy",
        label: "Energy",
        content: <EnergyIndustry/>,
      },
      {
        slug: "pharma",
        label: "Pharma",
        content: 'Pharma',
      },
      {
        slug: "health-care",
        label: "Health Care",
        content: <div>Health Care</div>,
      },
      {
        slug: "oil-company",
        label: "Oil company",
        content: <div>Oil company</div>,
      },
    ];
  return (
    <>
      <section>
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-15 md:py-10 py-8">
          <div className="flex flex-col 2xl:gap-14 md:gap-10 gap-8">
            <div className="flex flex-col 2xl:gap-7 md:gap-5 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
                <span className="2xl:text-xs md:text-sm text-xs font-bold text-black">
               Industries
                </span>
              </div>
              <h5 className="2xl:text-[66px] md:text-[46px] text-3xl   font-semibold text-[#000000] leading-none">
                {" "}
                Discover the <br />
                <span className="text-[#00C9A7] font-bold! ">Industries We Power</span>
              </h5>
            </div>

            <div className="flex 2xl:max-w-4xl justify-between  md:gap-0 gap-4 md:max-w-2xl max-w-full">
              {stats.map((stat) => (
                <div
                  key={stat.slug}
                  className={`w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 ${stat.borderColor} h-full flex flex-col gap-1`}
                >
                  <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">
                    {stat.value}
                  </span>
                  <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="2xl:text-2xl md:text-xl text-base 2xl:leading-relaxed md:leading-relaxed leading-normal font-light text-[#000000]">
              A software company that turns ambitious ideas into <br className="2xl:block md:block hidden" />{" "}
              scalable, user-centered digital products. <br className="2xl:block md:block hidden" /> No fluff, just
              results.
            </p>
          </div>
        </div>
      </section>
      {/* ----------- */}
      <OurClients/>
      {/* ----------- */}
      <section className="2xl:py-16 md:py-16 2xl:px-0 md:px-16 px-6 py-12">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="case-input">
              <Input
                size="large"
                className=" shadow-none! text-[#161519]! text-[16px]! font-semibold! bg-transparent! placeholder:text-[#757575]! focus:outline-none! focus:ring-0! focus:border-none!"
                placeholder="Search"
                suffix={<Icon icon="icons8:search" className="text-[#757575]! text-lg!" />}
              />
            </div>
            <div className="case-tabs  px-3">
              <Tabs activeKey={activeTab} onChange={setActiveTab}>
                {tabs.map((tab) => (
                  <Tabs.TabPane tab={tab.label} key={tab.slug} />
                ))}
              </Tabs>
            </div>
            {/* ------------tabs-content------- */}
          </div>
          <div className="tab-content xs:py-4 ">
            {tabs.find((tab) => tab.slug === activeTab)?.content}
          </div>
        </div>
      </section>
      {/* ------------ */}
      <GetStarted
      />
    </>
  );
}
