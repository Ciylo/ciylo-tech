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
    <section className="2xl:py-16 md:py-16 py-12">
      <div className="container mx-auto">
        <h5 className="text-[48px] mb-12 font-semibold text-center text-[#000000] leading-none">
          The Way We{" "}
          <span className="text-[#00C9A7] font-bold">Solve</span>.
        </h5>
        <div className="bg-white home-tabs border border-[#E0E0E0] rounded-3xl mb-12 p-12">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div className="flex justify-center">
        <Button
          icon={<Icon icon="formkit:arrowright" />}
          iconPlacement="end"
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
