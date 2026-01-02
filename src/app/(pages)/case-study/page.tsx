"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import OurClients from "../../../components/-webComponents/OurClients";
import MainSlider from "@/components/-webComponents/MainSlider";
import { Input, Tabs } from "antd";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import Energy from "@/components/-webComponents/Energy";
import Pharma from "@/components/-webComponents/Pharma";
import HealthCare from "@/components/-webComponents/HealthCare";
import OilCompany from "@/components/-webComponents/OilCompany";
import GetStarted from "@/components/-webComponents/GetStarted";

const CaseStudyPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const tabs = [
    {
      key: "1",
      label: "Energy",
      children: <Energy/>,
    },
    {
      key: "2",
      label: "Pharma",
      children: <Pharma/>,
    },
    {
      key: "3",
      label: "Health Care",
      children: <HealthCare/>,
    },
    {
      key: "4",
      label: "Oil company",
      children: <OilCompany/>,
    },
  ];
  return (
    <>
      <HeroSection />
      <OurClients />
      <MainSlider />
      {/* ---------------------- */}
      <section className="2xl:py-16 md:py-16 2xl:px-0 md:px-16 px-6 py-12">
        <div className="container mx-auto">
          <div className="flex  flex-col gap-4 justify-between">
            <div className="case-input">
              <Input
                size="large"
                className=" shadow-none! text-[#161519]! text-[16px]! font-semibold! bg-transparent! placeholder:text-[#757575]! focus:outline-none! focus:ring-0! focus:border-none!"
                placeholder="Search"
                suffix={<Icon icon="icons8:search" className="text-[#757575]! text-lg!" />}
              />
            </div>
            <div className="case-tabs  px-3">
              <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabs} />
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- */}
      <GetStarted/>
    </>
  );
};

export default CaseStudyPage;
