import { Button, Input, Space } from "antd";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="2xl:pb-16 md:pt-10 pt-0 md:pb-16 pb-16 2xl:px-0 md:px-16 px-6">
      <div className="container mx-auto flex md:flex-row flex-col justify-between gap-6 ">
        <div className="flex flex-col md:gap-6 gap-1">
          <h5 className="md:text-[48px] text-[28px] font-semibold text-[#000000] leading-none">
            Get started with <br className="md:block hidden" /> our{" "}
            <span className="text-[#00C9A7] font-bold">app today</span>.
          </h5>
          <p className="md:text-lg text-base text-[#161519] leading-relaxed">
            The app helps teams create, track, and deliver faster.
          </p>
        </div>
        <div className="flex flex-col md:gap-5 gap-4">
          <Space className="w-full bg-[#C0F6ED40] flex items-center justify-center  rounded-[9px]">
            <Input placeholder="you@domain.com" className="rounded-full! border-none! shadow-none! text-[#161519]! text-lg! font-semibold! bg-transparent! placeholder:text-[#60606B]! focus:outline-none! focus:ring-0! focus:border-none!"  />
            <Button
              type="primary"
              className="bg-[#00C9A7]! hover:bg-[#00C9A7]/80! h-12! text-white! rounded-lg! text-lg! font-medium!"
            >
              Get a Demo
            </Button>
          </Space>
          <p className="text-base text-[#161519] leading-relaxed">
          Already using our service? <Link href="/login" className="text-[#00C9A7] font-semibold"> Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
