"use client";

import { Tabs, type TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Initial consultation",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Discovery",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Development",
    children: "Content of Tab Pane 3",
  },
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
        <div className="bg-white border border-[#E0E0E0] rounded-3xl p-12">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </section>
  );
}
