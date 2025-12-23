import { Icon } from "@iconify/react";
import { Button, Col,  Row } from "antd";
import Image from "next/image";
type CardData = {
    id: number;
    title: string;
    description: string;
    image: string;
  };

  const cardData: CardData[] = [
    {
      id: 1,
      title: "Oil industry",
      description:
        "We help oil and energy companies tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From exploration and production to distribution and management, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
      image: "/images/pipe_pipeline-20.svg",
    },
    {
      id: 2,
      title: "Health Care",
      description:
        "We help healthcare providers and organizations tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From patient care and clinical workflows to administrative systems and data analytics, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
      image: "/images/undraw_medicine_hqqg 1.svg",
    },
    {
      id: 3,
      title: "Pharmaceutical",
      description:
        "We help pharmaceutical companies tackle complex operational challenges through innovative technology, strategic design, and data-driven solutions. From drug development and manufacturing to distribution and management, our work optimizes processes, enhances safety, and drives measurable efficiency across the industry",
      image: "/images/undraw_medical-care_7m9g (1) 1.svg",
    },
  ];
export default function EnergyIndustry() {
  return (
    <>
       {cardData.map((card, index) => (
          <div
            key={index}
          >
            <div className="border md:p-12 md:pe-2! p-6 md:mb-12 mb-6 md:rounded-3xl! rounded-lg! border-[#C0F6ED80] bg-[#FFFFFF] shadow-[0px_4px_60px_0px_#04060F14] ">
              <Row gutter={[24,16]} align="middle">
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
