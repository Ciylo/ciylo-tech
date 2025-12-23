"use client";

import { Button } from "antd";
import { Icon } from "@iconify/react";
import MainSlider from "@/components/-webComponents/MainSlider";

export default function FeaturedWork() {
  return (
    <>
      <section className="2xl:pb-16 md:pt-10 pt-8 md:pb-16 pb-8 2xl:px-0 md:px-16 px-6">
        <div className="container mx-auto">
          <h5 className="md:text-[48px] text-[28px] mb-6 md:mb-12 font-semibold text-center text-[#000000] leading-none">
            Our Featured <span className="text-[#00C9A7] font-bold">Work</span>.
          </h5>

          <MainSlider />

          <div className="flex justify-center">
            <Button
              icon={<Icon icon="formkit:arrowright" />}
              iconPlacement="end"
              href="/case-study"
              type="default"
              className="main-btn md:mt-3 rounded-full! md:text-lg text-base! font-semibold!"
            >
              Read the case study
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
