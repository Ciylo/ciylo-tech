import { Icon } from "@iconify/react";
import { Button, Progress } from "antd";

export default function Support() {
  const supportServices = [
    {
      id: 1,
      icon: "heroicons:shield-check",
      title: "1. 24/7 Monitoring & Maintenance",
      description: (
        <>
          Continuous monitoring of your application&apos;s health, performance, and security.{" "}
          <span className="font-bold">Proactive issue detection and resolution</span>.
        </>
      ),
    },
    {
      id: 2,
      icon: "heroicons:bug-ant",
      title: "2. Bug Fixes & Updates",
      description: (
        <>
          Rapid response to issues with quick fixes and patches. Regular updates to keep your application running smoothly.
        </>
      ),
    },
    {
      id: 3,
      icon: "heroicons:chart-bar",
      title: "3. Performance Optimization",
      description: (
        <>
          Ongoing optimization to improve speed, efficiency, and user experience.{" "}
          <span className="font-bold">Keeping your app fast and responsive</span>.
        </>
      ),
    },
    {
      id: 4,
      icon: "heroicons:lock-closed",
      title: "4. Security Updates & Patches",
      description: (
        <>
          Regular security audits and updates to protect against vulnerabilities. Your data and users stay secure.
        </>
      ),
    },
    {
      id: 5,
      icon: "heroicons:academic-cap",
      title: "5. Training & Documentation",
      description: (
        <>
          Comprehensive training materials and documentation to help your team maximize the platform&apos;s potential.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="border-b mb-8 border-[#00C9A7]">
        <h6 className="text-[28px] font-bold mb-1 text-[#111013]">
          Support
        </h6>
      </div>
      {/* --------------- */}
      <div className="grid grid-cols-3 mb-10 gap-8">
        {supportServices.map((service) => (
          <div key={service.id} className="flex flex-col">
            <div className="w-15 h-15 mb-5 flex items-center justify-center rounded-full bg-[#C0F6ED80]">
              <Icon icon={service.icon} className="text-4xl text-[#111013]" />
            </div>
            <h6 className="text-lg mb-2 font-bold text-[#111013]">
              {service.title}
            </h6>
            <div className="text-[16px] max-w-md font-normal text-[#161519]">
              {service.description}
            </div>
          </div>
        ))}
      </div>
      {/* --------------- */}
      <div className="bg-[#E9FFFB] rounded-xl p-10 flex gap-6">
        <div className="h-[268px] w-[268px] shrink-0 flex items-center justify-center">
          <Icon icon="heroicons:lifebuoy" className="text-[200px] text-[#00C9A7] opacity-30" />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-[16px] font-normal text-[#161519]">
            Our ongoing support ensures your application remains stable, secure, and optimized long after launch, giving you peace of mind
          </p>
          <div className="flex flex-col gap-1">
            <h6 className="text-[16px] font-bold text-[#111013]">
              Support Coverage
            </h6>
            {/* ----------progress bar---------- */}
            <div className="relative">
              <Progress
                percent={100}
                showInfo={false}
                strokeColor={"#00C9A7"}
                railColor="#90919C26"
              />
              {/* Tooltip positioned at the end of progress */}
              <div
                className="absolute top-[-40px]"
                style={{
                  left: "100%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="relative bg-[#00C9A7] text-white px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                  100%
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
              <span className="text-[14px] font-medium text-[#161519]">24/7 monitoring active</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" className="text-xl text-[#00C9A7]" />
              <span className="text-[14px] font-medium text-[#161519]">Support team available</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" className="text-xl text-[#00C9A7]" />
              <span className="text-[14px] font-medium text-[#161519]">Regular security updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" className="text-xl text-[#00C9A7]" />
              <span className="text-[14px] font-medium text-[#161519]">Performance optimization ongoing</span>
            </div>
          </div>
          <div>
            <Button
              type="default"
              iconPlacement="end"
              icon={<Icon icon="formkit:arrowright" className="text-white" />}
              className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
            >
              Contact support team
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
