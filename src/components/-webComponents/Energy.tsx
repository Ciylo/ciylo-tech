import { Icon } from "@iconify/react";
import { Button, Col,  Row } from "antd";
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
      logo: "/images/Binford Ltd..svg",
      title: "Binford Ltd.",
      description:
        "Fireside Pharmacy provides a complete digital solution for managing medications, allowing patients to easily order new prescriptions, request refills, transfer prescriptions from other pharmacies and track every order in real time.",
      image: "/images/Galaxy Tab S8 Ultra.svg",
    },
    {
      id: 2,
      logo: "/images/Acme Co.svg",
      title: "Acme Co.",
      description:
        "A revolutionary financial technology platform that empowers users with seamless banking experiences. Features include real-time transaction monitoring, AI-powered fraud detection, instant money transfers, and comprehensive financial analytics to help users make smarter financial decisions.",
      image: "/images/Dell XPS.svg",
    },
    {
      id: 3,
      logo: "/images/Barone LLC.svg",
      title: "Barone LLC.",
      description:
        "An intelligent business intelligence platform that transforms raw data into actionable insights. Leveraging advanced machine learning algorithms, it provides predictive analytics, automated reporting, and real-time visualization to drive data-driven decision making for modern enterprises.",
      image: "/images/iPhone 15 Pro.svg",
    },
    {
      id: 4,
      logo: "/images/Big Kahuna Burger Ltd.svg",
      title: "Big Kahuna Burger Ltd.",
      description:
        "A revolutionary financial technology platform that empowers users with seamless banking experiences. Features include real-time transaction monitoring, AI-powered fraud detection, instant money transfers, and comprehensive financial analytics to help users make smarter financial decisions.",
      image: "/images/fsgyded.svg",
    },
    {
      id: 3,
      logo: "/images/Biffco Enterprises Ltd..svg",
      title: "Biffco Enterprises Ltd.",
      description:
        "An intelligent business intelligence platform that transforms raw data into actionable insights. Leveraging advanced machine learning algorithms, it provides predictive analytics, automated reporting, and real-time visualization to drive data-driven decision making for modern enterprises.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
export default function Energy() {
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
                    <div className="w-auto h-auto">
                      <Image
                        src={card.logo}
                        alt={card.title}
                        width={100}
                        height={100}
                        className="size-full object-contain"
                      />
                    </div>
                    <h6 className="text-[32px] font-bold text-[#424242]">
                      {card.title}
                    </h6>
                    <p className="text-base text-black line-clamp-4 select-text">
                      {card.description}
                    </p>
                    <Button
                      icon={<Icon icon="formkit:arrowright" />}
                      iconPlacement="end"
                      type="default"
                      className="main-btn mt-3 rounded-full! text-lg! font-semibold!"
                    >
                      Read the case study
                    </Button>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="w-auto h-[550px] rounded-md! ">
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
