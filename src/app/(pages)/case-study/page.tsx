"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import OurClients from "../../../components/-webComponents/OurClients";
import MainSlider from "@/components/-webComponents/MainSlider";
import { Input, Tabs } from "antd";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import Energy from "@/components/-webComponents/Energy";
import Pharma from "@/components/-webComponents/Pharma";
import GetStarted from "@/components/-webComponents/GetStarted";

const CaseStudyPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const tabs = [
    {
      key: "1",
      label: "Energy",
      content: <Energy/>,
    },
    {
      key: "2",
      label: "Pharma",
      content: <Pharma/>,
    },
    {
      key: "3",
      label: "Health Care",
      content: <div>Health Care</div>,
    },
    {
      key: "4",
      label: "Oil company",
      content: <div>Oil company</div>,
    },
  ];
  return (
    <>
      <HeroSection />
      <OurClients />
      <MainSlider />
      {/* ---------------------- */}
      <section className="2xl:py-16 md:py-16 py-12">
        <div className="container mx-auto">
          <div className="flex justify-between">
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
                  <Tabs.TabPane tab={tab.label} key={tab.key} />
                ))}
              </Tabs>
            </div>
            {/* ------------tabs-content------- */}
          </div>
          <div className="tab-content xs:py-4 ">
            {tabs.find((tab) => tab.key === activeTab)?.content}
          </div>
        </div>
      </section>
      {/* ----------------- */}
      <GetStarted/>
    </>
  );
};

export default CaseStudyPage;
