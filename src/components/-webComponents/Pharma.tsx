"use client";
import { Icon } from "@iconify/react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCaseStudiesByCategory } from "@/data/caseStudies";

export default function Pharma() {
  const router = useRouter();
  const cardData = getCaseStudiesByCategory("pharma");

  const handleCardClick = (slug: string) => {
    router.push(`/case-study/detail/${slug}`);
  };

  return (
    <>
      {cardData.map((card, index) => (
        <div key={card.id}>
          <div className="border md:p-12 md:pe-2! p-6 md:mb-12 mb-6 md:rounded-3xl! rounded-lg! border-[#C0F6ED80] bg-[#FFFFFF] shadow-[0px_4px_60px_0px_#04060F14] ">
            <Row gutter={[24, 16]} align="middle">
              <Col md={12} xs={24}>
                <div className="flex flex-col items-start 2xl:gap-7 gap-4">
                  <div className="w-auto h-12">
                    <Image
                      src={card.logo}
                      alt={card.title}
                      width={100}
                      height={100}
                      className="size-full object-contain"
                      unoptimized
                    />
                  </div>
                  <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#424242]">
                    {card.title}
                  </h6>
                  <p className="2xl:text-base md:text-sm text-xs text-black line-clamp-4 select-text">
                    {card.description}
                  </p>
                  <Button
                    icon={<Icon icon="formkit:arrowright" />}
                    iconPlacement="end"
                    type="default"
                    className="main-btn md:mt-3 rounded-full! 2xl:text-lg md:text-base text-sm! font-semibold!"
                    onClick={() => handleCardClick(card.slug)}
                  >
                    Read the case study
                  </Button>
                </div>
              </Col>
              <Col md={12} xs={24}>
                <div className="w-auto 2xl:h-[550px] md:h-[250px] h-[150px] rounded-md! ">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="rounded-md! object-cover size-full "
                    unoptimized
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ))}
    </>
  );
}
