import { Button, Input, Space } from "antd";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="2xl:py-16 md:py-16 py-12">
      <div className="container mx-auto flex justify-between ">
        <div className="flex flex-col gap-6">
          <h5 className="text-[48px] font-semibold text-[#000000] leading-none">
            Get started with <br /> our{" "}
            <span className="text-[#00C9A7] font-bold">app today</span>.
          </h5>
          <p className="text-lg text-[#161519] leading-relaxed">
            The app helps teams create, track, and deliver faster.
          </p>
        </div>
        <div className="flex flex-col gap-5">
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
