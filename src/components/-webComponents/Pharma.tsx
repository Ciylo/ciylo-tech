import { Icon } from "@iconify/react";
import { Button, Col, Row } from "antd";
import Image from "next/image";

type CardData = {
  id: number;
  logo: string;
  title: string;
  description: string;
  image: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    logo: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "MediCare Solutions",
    description:
      "A comprehensive pharmaceutical management platform that streamlines medication distribution, tracks inventory in real-time, and ensures compliance with healthcare regulations. Features include automated prescription processing, drug interaction alerts, and seamless integration with healthcare providers.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "PharmaTech Innovations",
    description:
      "An advanced clinical trial management system that accelerates drug development processes. The platform enables researchers to manage patient data, monitor trial progress, analyze results in real-time, and maintain regulatory compliance throughout the entire drug development lifecycle.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 3,
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "HealthBridge Pharmaceuticals",
    description:
      "A revolutionary telemedicine platform connecting patients with licensed pharmacists for virtual consultations. Features include prescription management, medication adherence tracking, automated refill reminders, and personalized health recommendations based on patient history and current medications.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 4,
    logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "BioPharm Analytics",
    description:
      "An intelligent pharmaceutical supply chain management system that optimizes inventory levels, predicts demand fluctuations, and ensures timely delivery of critical medications. The platform uses AI-powered analytics to reduce waste, prevent stockouts, and maintain optimal storage conditions.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 5,
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "VitaCare Pharmaceuticals",
    description:
      "A comprehensive patient medication management app that helps individuals track their prescriptions, set medication reminders, access drug information, and connect with healthcare providers. The platform includes features for managing multiple medications, tracking side effects, and sharing health data with doctors.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

export default function Pharma() {
  return (
    <>
      {cardData.map((card, index) => (
        <div key={index}>
          <div className="border md:p-12 md:pe-2! p-6 md:mb-12 mb-6 md:rounded-3xl! rounded-lg! border-[#C0F6ED80] bg-[#FFFFFF] shadow-[0px_4px_60px_0px_#04060F14] ">
            <Row gutter={[24,16]} align="middle">
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
