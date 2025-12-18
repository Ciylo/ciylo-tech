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
            <div className="border p-12 pe-2! mb-12 rounded-3xl! border-[#C0F6ED80] bg-[#FFFFFF] shadow-[0px_4px_60px_0px_#04060F14] ">
              <Row gutter={24} align="middle">
                <Col md={12}>
                  <div className="flex flex-col items-start gap-7">
                    <h6 className="text-[32px] font-bold text-[#424242]">
                      {card.title}
                    </h6>
                    <p className="text-base text-black line-clamp-4 select-text">
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
                      className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="w-auto h-[340px] rounded-md! ">
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
