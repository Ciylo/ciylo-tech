"use client";
import { Icon } from "@iconify/react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getAllIndustryCards } from "@/data/industries";

export default function EnergyIndustry() {
  const router = useRouter();
  const cardData = getAllIndustryCards();

  const handleViewAll = (slug: string) => {
    router.push(`/industries/details/${slug}`);
  };

  return (
    <>
      {cardData.map((card) => (
        <div
          key={card.slug}
        >
          <div className="border md:p-12 md:pe-2! p-6 md:mb-12 mb-6 md:rounded-3xl! rounded-lg! border-[#C0F6ED80] bg-[#FFFFFF] shadow-[0px_4px_60px_0px_#04060F14] ">
            <Row gutter={[24, 16]} align="middle">
              <Col md={12} xs={24}>
                <div className="flex flex-col items-start 2xl:gap-7 gap-4">
                  <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#424242]">
                    {card.title}
                  </h6>
                  <p className="2xl:text-base md:text-sm text-xs text-black line-clamp-4 select-text">
                    {card.description}
                  </p>
                  <Button
                    type="default"
                    iconPlacement="end"
                    icon={
                      <Icon
                        icon="formkit:arrowright"
                        className="text-white"
                      />
                    }
                    className="bg-transparent! p-0! 2xl:text-[16px] md:text-base text-sm! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    onClick={() => handleViewAll(card.slug)}
                  >
                    View all
                  </Button>
                </div>
              </Col>
              <Col md={12} xs={24}>
                <div className="w-auto 2xl:h-[340px] md:h-[250px] h-[150px] rounded-md! ">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="rounded-md! object-fit size-full "
                    unoptimized
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ))}
    </>
  )
}
