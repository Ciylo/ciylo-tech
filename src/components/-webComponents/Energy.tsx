"use client";
import { Icon } from "@iconify/react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Energy() {
  const router = useRouter();
  const cardData = [
    {
      "id": 1,
      "slug": "callcom",
      "category": "energy",
      "logo": "/images/case-callcom-logo.svg",
      "title": "CALLCOM",
      "description": "Callcom is an Al powered calling platform that automates inbound and outbound phone calls using intelligent voice agents. It enables businesses to manage campaigns, handle conversations, book meetings and integrate with CRMS streamlining communication at scale.",
      "image": "/images/case-callcom-cover.svg"
    },
    {
      "id": 2,
      "slug": "AI-MEDIK",
      "category": "energy",
      "logo": "/images/case-ai-madic-logo.svg",
      "title": "AI MEDIK.",
      "description": "AI Medik is a healthcare technology platform that uses AI to assess user reported symptoms and guide people toward appropriate care, while also enabling appointment scheduling and remote consultations with medical professionals. It bridges the gap between initial health concerns and professional medical support making healthcare more accessible, personalized and efficient without replacing real medical advice. ",
      "image": "/images/case-ai-madic-cover.svg"
    },
    {
      "id": 3,
      "slug": "verited",
      "category": "energy",
      "logo": "/images/case-verited-logo.svg",
      "title": "VeritED",
      "description": "VeritEd is an online tutoring platform that connects students with qualified tutors for personalized, one-on-one learning. It provides tools for booking sessions, real-time communication, and virtual classrooms, making academic support flexible, secure, and accessible from anywhere. ",
      "image": "/images/verited-cover.svg"
    },
    {
      "id": 4,
      "slug": "mirra",
      "category": "energy",
      "logo": "/images/case-mirra-logo.svg",
      "title": "MIRRA",
      "description": "Mirra is an AI powered platform where you can create and use smart AI agents to automate everyday tasks and workflows. These agents can connect with your tools, take actions for you and handle repetitive or time consuming work so you don’t have to do everything manually. ",
      "image": "/images/case-mirra-cover.svg"
    }
  ];

  const handleCardClick = (slug: string) => {
    router.push(`/case-study/detail/${slug}`);
  };

  return (
    <>
      {cardData.map((card) => (
        <div key={card.id}>
          <div className="border md:p-12 md:pe-2! p-6 md:mb-12 mb-6 md:rounded-3xl! rounded-lg! border-[#C0F6ED80] bg-[#FFFFFF] shadow-[0px_4px_60px_0px_#04060F14] ">
            <Row gutter={[24, 16]} align="middle">
              <Col md={12} xs={24}>
                <div className="flex flex-col items-start 2xl:gap-7 gap-4">
                  <div className="w-auto h-auto">
                    <Image
                      src={card.logo}
                      alt={card.title}
                      width={100}
                      height={100}
                      className="size-full object-contain"
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
                <div className="w-auto 2xl:h-[550px] md:h-[450px] h-[248px] ">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="rounded-md! object-cover size-full"
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
