import { Icon } from "@iconify/react";
import { Button, Progress } from "antd";
import Image from "next/image";

export default function InitialConsultation() {
  const reasons = [
    {
      id: 1,
      icon: "heroicons:finger-print",
      title: "1. Create a Free Account",
      description: (
        <>
          Spaces of each debt in the digital world can help you with overall
          simplest authentic.{" "}
          <span className="font-bold">Go to Sign Up / Create an Account</span>.
        </>
      ),
    },
    {
      id: 2,
      icon: "ph:tree-structure",
      title: "2. Generate an API key for your app",
      description:
        (
            <>
           To achieve best results in digital world can help you with overall create an API Key. 
            <span className="font-bold">Spaces of each debt in the</span>.
            </>
        )
    },
    {
      id: 3,
      icon: "fluent:flag-24-regular",
      title: "3. That’s it!",
      description: "Now you can use the app and improve your scores.",
    },
  ];
  return (
    <>
      <div className="border-b mb-8 border-[#00C9A7]">
        <h6 className="text-[28px] font-bold mb-1 text-[#111013]">
          Initial consultation
        </h6>
      </div>
      {/* --------------- */}
      <div className="grid grid-cols-3 mb-10 gap-8">
        {reasons.map((reason) => (
          <div key={reason.id} className="flex flex-col">
            <div className="w-15 h-15 mb-5 flex items-center justify-center  rounded-full bg-[#C0F6ED80] ">
              <Icon icon={reason.icon} className="text-4xl text-[#111013]" />
            </div>
            <h6 className="text-lg mb-2 font-bold text-[#111013]">
              {reason.title}
            </h6>
            <div className="text-[16px] max-w-md font-normal text-[#161519]">
              {reason.description}
            </div>
          </div>
        ))}
      </div>
      {/* --------------- */}
      <div className="bg-[#E9FFFB] rounded-xl p-10 flex  gap-6 ">
        <div className="h-[268px] w-[268px]  shrink-0">
          <Image
            src="/images/initial-image.svg"
            alt="initial consultation"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[16px] font-normal text-[#161519]">
            Website & Mobile development is moving smoothly with steady progress
            toward completion
          </p>
          <div className="flex flex-col gap-1">
            <h6 className="text-[16px] font-bold text-[#111013]">
              Website & Mobile
            </h6>
            {/* ----------progress bar---------- */}
            <div className="relative">
              <Progress
                percent={93}
                showInfo={false}
                strokeColor={"#00C9A7"}
                railColor="#90919C26"
              />
              {/* Tooltip positioned at the end of progress */}
              <div
                className="absolute top-[-40px]"
                style={{
                  left: "93%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="relative bg-[#00C9A7] text-white px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                  93%
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
          <div>
            <Button
              type="default"
              iconPlacement="end"
              icon={<Icon icon="formkit:arrowright" className="text-white" />}
              className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
            >
              Check progress
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
