import { Icon } from "@iconify/react";
import { Button, Progress } from "antd";

export default function Development() {
  const developmentPhases = [
    {
      id: 1,
      icon: "heroicons:code-bracket",
      title: "1. Frontend Development",
      description: (
        <>
          Building responsive, intuitive user interfaces with modern frameworks.{" "}
          <span className="font-bold">Pixel-perfect designs with smooth user experience</span>.
        </>
      ),
    },
    {
      id: 2,
      icon: "heroicons:server",
      title: "2. Backend Development",
      description: (
        <>
          Robust server-side architecture and APIs that power your application.{" "}
          <span className="font-bold">Scalable and secure infrastructure</span>.
        </>
      ),
    },
    {
      id: 3,
      icon: "heroicons:circle-stack",
      title: "3. Database Design & Setup",
      description: (
        <>
          Optimized database schemas and data management systems. Efficient data storage and retrieval for optimal performance.
        </>
      ),
    },
    {
      id: 4,
      icon: "heroicons:puzzle-piece",
      title: "4. API Integration",
      description: (
        <>
          Seamless integration with third-party services and APIs. Connecting your application with external systems and services.
        </>
      ),
    },
    {
      id: 5,
      icon: "heroicons:shield-check",
      title: "5. Testing & Quality Assurance",
      description: (
        <>
          Comprehensive testing at every stage to ensure reliability.{" "}
          <span className="font-bold">Bug-free, production-ready code</span>.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="border-b mb-8 border-[#00C9A7]">
        <h6 className="text-[28px] font-bold mb-1 text-[#111013]">
          Development
        </h6>
      </div>
      {/* --------------- */}
      <div className="grid grid-cols-3 mb-10 gap-8">
        {developmentPhases.map((phase) => (
          <div key={phase.id} className="flex flex-col">
            <div className="w-15 h-15 mb-5 flex items-center justify-center rounded-full bg-[#C0F6ED80]">
              <Icon icon={phase.icon} className="text-4xl text-[#111013]" />
            </div>
            <h6 className="text-lg mb-2 font-bold text-[#111013]">
              {phase.title}
            </h6>
            <div className="text-[16px] max-w-md font-normal text-[#161519]">
              {phase.description}
            </div>
          </div>
        ))}
      </div>
      {/* --------------- */}
      <div className="bg-[#E9FFFB] rounded-xl p-10 flex gap-6">
        <div className="h-[268px] w-[268px] shrink-0 flex items-center justify-center">
          <Icon icon="heroicons:command-line" className="text-[200px] text-[#00C9A7] opacity-30" />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-[16px] font-normal text-[#161519]">
            Development is advancing rapidly with multiple components being built simultaneously and integrated seamlessly
          </p>
          <div className="flex flex-col gap-1">
            <h6 className="text-[16px] font-bold text-[#111013]">
              Full Stack Development
            </h6>
            {/* ----------progress bar---------- */}
            <div className="relative">
              <Progress
                percent={85}
                showInfo={false}
                strokeColor={"#00C9A7"}
                railColor="#90919C26"
              />
              {/* Tooltip positioned at the end of progress */}
              <div
                className="absolute top-[-40px]"
                style={{
                  left: "85%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="relative bg-[#00C9A7] text-white px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                  85%
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
              <span className="text-[14px] font-medium text-[#161519]">Frontend components completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" className="text-xl text-[#00C9A7]" />
              <span className="text-[14px] font-medium text-[#161519]">Backend APIs integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" className="text-xl text-[#00C9A7]" />
              <span className="text-[14px] font-medium text-[#161519]">Database schema optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:clock" className="text-xl text-[#90919C]" />
              <span className="text-[14px] font-medium text-[#161519]">Final testing and optimization</span>
            </div>
          </div>
          <div>
            <Button
              type="default"
              iconPlacement="end"
              icon={<Icon icon="formkit:arrowright" className="text-white" />}
              className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
            >
              View development dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
