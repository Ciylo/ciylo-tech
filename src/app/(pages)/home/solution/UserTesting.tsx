import { Icon } from "@iconify/react";
import { Button, Progress } from "antd";

export default function UserTesting() {
  const testingPhases = [
    {
      id: 1,
      icon: "heroicons:user-group",
      title: "1. Test Planning",
      description: (
        <>
          We define clear goals, success metrics, and scenarios for user acceptance testing.{" "}
          <span className="font-bold">Aligned with your business objectives and user journeys</span>.
        </>
      ),
    },
    {
      id: 2,
      icon: "heroicons:clipboard-document-check",
      title: "2. Test Case Design",
      description: (
        <>
          Detailed test cases are crafted to validate every critical flow, edge case, and requirement.
        </>
      ),
    },
    {
      id: 3,
      icon: "heroicons:device-phone-mobile",
      title: "3. Real User Sessions",
      description: (
        <>
          We conduct testing sessions with real users and stakeholders across devices and environments.
        </>
      ),
    },
    {
      id: 4,
      icon: "heroicons:bug-ant",
      title: "4. Issue Tracking & Fixing",
      description: (
        <>
          All issues are captured, prioritized, and resolved with clear communication and tracking.
        </>
      ),
    },
    {
      id: 5,
      icon: "heroicons:check-badge",
      title: "5. Final Sign‑off",
      description: (
        <>
          After all criteria are met, we secure formal approval and prepare the product for go‑live.{" "}
          <span className="font-bold">Confident, risk‑managed launch</span>.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="border-b mb-8 border-[#00C9A7]">
        <h6 className="md:text-[28px] text-xl font-bold mb-1 text-[#111013]">
          User Acceptance Testing
        </h6>
      </div>

      {/* Steps grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 mb-10 gap-8">
        {testingPhases.map((phase) => (
          <div key={phase.id} className="flex flex-col">
            <div className="md:w-15 md:h-15 w-10 h-10 mb-5 flex items-center justify-center rounded-full bg-[#C0F6ED80]">
              <Icon icon={phase.icon} className="md:text-4xl text-2xl text-[#111013]" />
            </div>
            <h6 className="md:text-lg text-base mb-2 font-bold text-[#111013]">
              {phase.title}
            </h6>
            <div className="md:text-[16px] text-sm max-w-md font-normal text-[#161519]">
              {phase.description}
            </div>
          </div>
        ))}
      </div>

      {/* Highlight card */}
      <div className="bg-[#E9FFFB] md:rounded-xl rounded-lg md:p-10 p-6 items-center md:items-start flex flex-col md:flex-row md:gap-6 gap-4">
        <div className="md:h-[268px] md:w-[268px] h-[150px] w-[150px] shrink-0 flex items-center justify-center">
          <Icon
            icon="heroicons:cursor-arrow-rays"
            className="md:text-[200px] text-[160px] text-[#00C9A7] opacity-30"
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <p className="md:text-[16px] text-sm font-normal text-[#161519]">
            User acceptance testing is ensuring that every feature behaves as expected in real‑world
            usage before your product goes live.
          </p>

          <div className="flex flex-col gap-1">
            <h6 className="md:text-[16px] text-sm font-bold text-[#111013]">
              UAT Progress
            </h6>
            <div className="relative">
              <Progress
                percent={72}
                showInfo={false}
                strokeColor={"#00C9A7"}
                railColor="#90919C26"
              />
              <div
                className="absolute top-[-40px]"
                style={{
                  left: "72%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="relative bg-[#00C9A7] text-white px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                  72%
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
              <Icon
                icon="heroicons:check-circle"
                className="text-xl text-[#00C9A7]"
              />
              <span className="text-[14px] font-medium text-[#161519]">
                Core user journeys validated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="heroicons:check-circle"
                className="text-xl text-[#00C9A7]"
              />
              <span className="text-[14px] font-medium text-[#161519]">
                High‑priority issues resolved
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="heroicons:clock"
                className="text-xl text-[#90919C]"
              />
              <span className="text-[14px] font-medium text-[#161519]">
                Final feedback rounds in progress
              </span>
            </div>
          </div>

          <div>
            <Button
              type="default"
              iconPlacement="end"
              icon={<Icon icon="formkit:arrowright" className="text-white" />}
              className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
            >
              Review UAT summary
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
