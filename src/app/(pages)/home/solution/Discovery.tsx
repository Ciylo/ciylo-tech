import { Icon } from "@iconify/react";
import { Button, Progress } from "antd";

export default function Discovery() {
  const discoverySteps = [
    {
      id: 1,
      icon: "heroicons:magnifying-glass",
      title: "1. Deep Research & Analysis",
      description: (
        <>
          We dive deep into your business needs, market landscape, and competitive environment to understand the full context.{" "}
          <span className="font-bold">Comprehensive market research and competitor analysis</span>.
        </>
      ),
    },
    {
      id: 2,
      icon: "heroicons:document-text",
      title: "2. Requirements Gathering",
      description: (
        <>
          Through collaborative workshops and interviews, we capture all functional and non-functional requirements.{" "}
          <span className="font-bold">Detailed documentation and stakeholder alignment</span>.
        </>
      ),
    },
    {
      id: 3,
      icon: "heroicons:user-group",
      title: "3. User Research & Personas",
      description: (
        <>
          Understanding your target users is crucial. We create detailed user personas and journey maps to ensure the solution meets real needs.
        </>
      ),
    },
    {
      id: 4,
      icon: "heroicons:light-bulb",
      title: "4. Technical Feasibility Study",
      description: (
        <>
          Our technical team evaluates the proposed solution against current technology standards, identifying potential challenges and opportunities.
        </>
      ),
    },
    {
      id: 5,
      icon: "heroicons:map",
      title: "5. Strategic Roadmap",
      description: (
        <>
          We create a comprehensive project roadmap with clear milestones, timelines, and deliverables.{" "}
          <span className="font-bold">Phased approach for optimal delivery</span>.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="border-b mb-8 border-[#00C9A7]">
        <h6 className="text-[28px] font-bold mb-1 text-[#111013]">
          Discovery
        </h6>
      </div>
      {/* --------------- */}
      <div className="grid grid-cols-3 mb-10 gap-8">
        {discoverySteps.map((step) => (
          <div key={step.id} className="flex flex-col">
            <div className="w-15 h-15 mb-5 flex items-center justify-center rounded-full bg-[#C0F6ED80]">
              <Icon icon={step.icon} className="text-4xl text-[#111013]" />
            </div>
            <h6 className="text-lg mb-2 font-bold text-[#111013]">
              {step.title}
            </h6>
            <div className="text-[16px] max-w-md font-normal text-[#161519]">
              {step.description}
            </div>
          </div>
        ))}
      </div>
      {/* --------------- */}
      <div className="bg-[#E9FFFB] rounded-xl p-10 flex gap-6">
        <div className="h-[268px] w-[268px] shrink-0 flex items-center justify-center">
          <Icon icon="heroicons:chart-bar-square" className="text-[200px] text-[#00C9A7] opacity-30" />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-[16px] font-normal text-[#161519]">
            Discovery phase is progressing excellently with comprehensive research and strategic planning well underway
          </p>
          <div className="flex flex-col gap-1">
            <h6 className="text-[16px] font-bold text-[#111013]">
              Research & Strategy
            </h6>
            {/* ----------progress bar---------- */}
            <div className="relative">
              <Progress
                percent={78}
                showInfo={false}
                strokeColor={"#00C9A7"}
                railColor="#90919C26"
              />
              {/* Tooltip positioned at the end of progress */}
              <div
                className="absolute top-[-40px]"
                style={{
                  left: "78%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="relative bg-[#00C9A7] text-white px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                  78%
                  {/* Speech bubble arrow */}
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "6px solid #00C9A7",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" className="text-xl text-[#00C9A7]" />
              <span className="text-[14px] font-medium text-[#161519]">Market analysis completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" className="text-xl text-[#00C9A7]" />
              <span className="text-[14px] font-medium text-[#161519]">User personas defined</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:clock" className="text-xl text-[#90919C]" />
              <span className="text-[14px] font-medium text-[#161519]">Technical architecture in progress</span>
            </div>
          </div>
          <div>
            <Button
              type="default"
              iconPlacement="end"
              icon={<Icon icon="formkit:arrowright" className="text-white" />}
              className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
            >
              View discovery report
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
