import { Icon } from "@iconify/react";
import { Button, Progress } from "antd";

export default function GoLive() {
  const launchPhases = [
    {
      id: 1,
      icon: "heroicons:wrench-screwdriver",
      title: "1. Final Production Setup",
      description: (
        <>
          We configure and verify all production environments, domains, and services.{" "}
          <span className="font-bold">Secure, scalable, and ready for real traffic</span>.
        </>
      ),
    },
    {
      id: 2,
      icon: "heroicons:cloud-arrow-up",
      title: "2. Deployment & Release",
      description: (
        <>
          Code is deployed using reliable, repeatable pipelines with rollback strategies in place.
        </>
      ),
    },
    {
      id: 3,
      icon: "heroicons:signal",
      title: "3. Monitoring & Observability",
      description: (
        <>
          Live monitoring, logs, and alerts ensure we can react quickly to any issue after launch.
        </>
      ),
    },
    {
      id: 4,
      icon: "heroicons:user-plus",
      title: "4. Stakeholder Launch",
      description: (
        <>
          Coordinated communication with your team, customers, and stakeholders for a smooth roll‑out.
        </>
      ),
    },
    {
      id: 5,
      icon: "heroicons:trophy",
      title: "5. Post‑Launch Review",
      description: (
        <>
          We review metrics, user feedback, and system performance to plan incremental improvements.{" "}
          <span className="font-bold">Continuous optimization after go‑live</span>.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="border-b mb-8 border-[#00C9A7]">
        <h6 className="text-[28px] font-bold mb-1 text-[#111013]">
          Go Live
        </h6>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-3 mb-10 gap-8">
        {launchPhases.map((phase) => (
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

      {/* Highlight card */}
      <div className="bg-[#E9FFFB] rounded-xl p-10 flex gap-6">
        <div className="h-[268px] w-[268px] shrink-0 flex items-center justify-center">
          <Icon
            icon="heroicons:rocket-launch"
            className="text-[200px] text-[#00C9A7] opacity-30"
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-[16px] font-normal text-[#161519]">
            The go‑live phase ensures your product launches smoothly, with all systems monitored and
            your users experiencing a stable, high‑quality release from day one.
          </p>

          <div className="flex flex-col gap-1">
            <h6 className="text-[16px] font-bold text-[#111013]">
              Launch Readiness
            </h6>
            <div className="relative">
              <Progress
                percent={96}
                showInfo={false}
                strokeColor={"#00C9A7"}
                railColor="#90919C26"
              />
              <div
                className="absolute top-[-40px]"
                style={{
                  left: "96%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="relative bg-[#00C9A7] text-white px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                  96%
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
                Production environment verified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="heroicons:check-circle"
                className="text-xl text-[#00C9A7]"
              />
              <span className="text-[14px] font-medium text-[#161519]">
                Monitoring and alerts configured
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="heroicons:check-circle"
                className="text-xl text-[#00C9A7]"
              />
              <span className="text-[14px] font-medium text-[#161519]">
                Rollback and recovery plan in place
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="heroicons:clock"
                className="text-xl text-[#90919C]"
              />
              <span className="text-[14px] font-medium text-[#161519]">
                Final launch window scheduled
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
              View launch checklist
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
