"use client";

import { Button, Tabs, type TabsProps } from "antd";
import InitialConsultation from "./InitialConsultation";
import Discovery from "./Discovery";
import Development from "./Development";
import UserTesting from "./UserTesting";
import GoLive from "./GoLive";
import Support from "./Support";
import { Icon } from "@iconify/react";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Initial consultation",
    children: <InitialConsultation />,
  },
  {
    key: "2",
    label: "Discovery",
    children: <Discovery />,
  },
  {
    key: "3",
    label: "Development",
    children: <Development />,
  },
  {
    key: "4",
    label: "User Acceptance Testing",
    children: <UserTesting />,
  },
  {
    key: "5",
    label: "Go-live",
    children: <GoLive />,
  },
  {
    key: "6",
    label: "Support",
    children: <Support />,
  }
];

export default function SolutionWay() {
  const onChange: TabsProps["onChange"] = (key) => {
    console.log(key);
  };

  return (
    <section className="2xl:pb-16 md:pt-10 pt-8 md:pb-16 pb-8 2xl:px-0 md:px-16 px-6">
      <div className="container mx-auto">
        <h5 className="md:text-[48px] text-[28px] mb-6 md:mb-12 font-semibold text-center text-[#000000] leading-none">
          The Way We{" "}
          <span className="text-[#00C9A7] font-bold">Solve</span>.
        </h5>
        <div className="bg-white home-tabs border border-[#E0E0E0] rounded-3xl md:mb-12 mb-6 md:p-12 p-6">
          <Tabs defaultActiveKey="1" items={items}  onChange={onChange} />
        </div>
        <div className="flex justify-center">
        <Button
          icon={<Icon icon="formkit:arrowright" />}
          iconPlacement="end"
          href="/how-work"
          type="default"
          className="main-btn mt-3 rounded-full! text-lg! font-semibold!"
        >
          How We Work
        </Button>
      </div>
      </div>
    </section>
  );
}
