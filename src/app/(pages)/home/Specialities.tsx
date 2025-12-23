"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "antd";
import { Icon } from "@iconify/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  bgColor: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern web apps built for scale Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    icon: "/images/dev.svg",
    image: "/images/webdev.svg",
    bgColor: "bg-white",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Modern web apps built for scale Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    icon: "/images/dev.svg",
    image: "/images/iPhone13.svg",
    bgColor: "bg-white",
  },
  {
    id: 3,
    title: "SaaS Products",
    description:
      "Modern SaaS products built for scale Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    icon: "/images/dev.svg",
    image: "/images/saaas.svg",
    bgColor: "bg-white",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Modern web apps built for scale Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    icon: "/images/dev.svg",
    image: "/images/uiux-design.svg",
    bgColor: "bg-white",
  },
];

export default function Specialities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className="2xl:py-16 md:py-16 pt-12 pb-8">
      <div className="container mx-auto 2xl:px-0 md:px-16 px-6">
        <h5 className="md:text-[48px] text-[28px] font-semibold text-center text-[#000000] leading-none md:mb-3">
          What we&apos;re really{" "}
          <span className="text-[#00C9A7] font-bold">good at</span>.
        </h5>

        <div className="overflow-visible">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1536: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            navigation={false}
            pagination={{ clickable: false }}
            className="specialities-swiper overflow-visible!"
          >
            {services.map((service, index) => {
              const isActive = hoveredIndex === index;
              return (
                <SwiperSlide
                  key={service.id}
                  className={`h-auto! speciality-slide ${isActive ? "is-hovered" : ""}`}
                  data-slide-index={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`${service.bgColor} hover:bg-[#C0F6ED40] rounded-3xl p-6 md:pe-0! md:p-6 h-full smooth-transition group cursor-pointer overflow-visible relative border border-[#E0E0E0] speciality-hover-card ${isActive ? "is-hovered" : ""}`}
                  >
                    <div className="flex md:flex-row flex-col items-center md:gap-6 gap-4 h-full">
                      <div className="flex-1 min-w-0 md:pe-6">
                        <div className="md:size-15 size-10 md:mb-9 mb-6">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={60}
                            height={60}
                            className="size-full object-contain"
                          />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-[#212121] mb-3">
                          {service.title}
                        </h3>
                        <p className="text-xs md:text-[14px] text-[#4B5563] leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {isActive && (
                        <div className="w-0 md:w-0 animate-image-appear shrink-0 overflow-hidden">
                          <div className="h-auto w-full">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={220}
                              height={338}
                              className="h-full w-full object-contain animate-fade-in"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          icon={<Icon icon="formkit:arrowright" />}
          iconPlacement="end"
          href="/services"
          type="default"
          className="main-btn mt-3 rounded-full! text-lg! font-semibold!"
        >
          Check All Services
        </Button>
      </div>
    </section>
  );
}
