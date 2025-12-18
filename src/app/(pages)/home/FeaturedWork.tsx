"use client";

import { Button } from "antd";
import { Icon } from "@iconify/react";
import MainSlider from "@/components/-webComponents/MainSlider";

export default function FeaturedWork() {
  return (
    <>
      <section className="2xl:py-16 md:py-16 py-12">
        <div className="container mx-auto">
          <h5 className="text-[48px] mb-12 font-semibold text-center text-[#000000] leading-none">
            Our Featured <span className="text-[#00C9A7] font-bold">Work</span>.
          </h5>

          <MainSlider />

          <div className="flex justify-center">
            <Button
              icon={<Icon icon="formkit:arrowright" />}
              iconPlacement="end"
              type="default"
              className="main-btn mt-3 rounded-full! text-lg! font-semibold!"
            >
              Read the case study
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
