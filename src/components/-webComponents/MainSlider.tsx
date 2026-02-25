"use client";
import { Button, Col, Row } from "antd";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type CardData = {
  id: number;
  slug: string;
  logo: string;
  title: string;
  description: string;
  image: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    slug: "callcom",
    logo: "/images/case-callcom-logo.svg",
    title: "CALLCOM",
    description: "Callcom is an Al powered calling platform that automates inbound and outbound phone calls using intelligent voice agents. It enables businesses to manage campaigns, handle conversations, book meetings and integrate with CRMS streamlining communication at scale.",
    image: "/images/case-callcom-cover.svg"
  },
  {
    id: 2,
    slug: "AI-MEDIK",
    logo: "/images/case-ai-madic-logo.svg",
    title: "AI MEDIK.",
    description: "AI Medik is a healthcare technology platform that uses AI to assess user reported symptoms and guide people toward appropriate care, while also enabling appointment scheduling and remote consultations with medical professionals.",
    image: "/images/case-ai-madic-cover.svg"
  },
  {
    id: 3,
    slug: "verited",
    logo: "/images/case-verited-logo.svg",
    title: "VeritED",
    description: "VeritEd is an online tutoring platform that connects students with qualified tutors for personalized, one-on-one learning. It provides tools for booking sessions, real-time communication, and virtual classrooms, making academic support flexible, secure, and accessible from anywhere. ",
    image: "/images/verited-cover.svg"
  },
  {
    id: 4,
    slug: "mirra",
    logo: "/images/case-mirra-logo.svg",
    title: "MIRRA",
    description: "Mirra is an AI powered platform where you can create and use smart AI agents to automate everyday tasks and workflows. These agents can connect with your tools, take actions for you and handle repetitive or time consuming work so you don’t have to do everything manually. ",
    image: "/images/case-mirra-cover.svg"
  }
];

function MainSlider() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = prevIndex === cardData.length - 1 ? 0 : prevIndex + 1;
          return nextIndex;
        });
      }, 5000); // 5 seconds interval
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const getSlidePositionClass = (index: number): string => {
    const lastIndex = cardData.length - 1;

    if (index === activeIndex) return "is-center";

    const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;

    if (index === prevIndex) return "is-left";
    if (index === nextIndex) return "is-right";

    return "is-hidden";
  };

  const handleCardClick = (slug: string) => {
    // Navigate to detail page when clicking on any card
    router.push(`/case-study/detail/${slug}`);
  };

  const handleReadMore = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click from firing
    router.push(`/case-study/detail/${slug}`);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from firing
    setActiveIndex((prevIndex) => {
      return prevIndex === cardData.length - 1 ? 0 : prevIndex + 1;
    });
    setIsPaused(true);
    // Resume auto-advance after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from firing
    setActiveIndex((prevIndex) => {
      return prevIndex === 0 ? cardData.length - 1 : prevIndex - 1;
    });
    setIsPaused(true);
    // Resume auto-advance after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div
      className="swipe-container 2xl:min-h-[520px] md:min-h-[500px] 2xl:px-0 md:px-16 px-6 md:min-h-[550px] min-h-[590px] relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="slider-nav-btn slider-nav-btn-prev"
        aria-label="Previous slide"
        type="button"
      >
        <Icon icon="mdi:chevron-left" className="text-2xl" />
      </button>
      <button
        onClick={handleNext}
        className="slider-nav-btn slider-nav-btn-next"
        aria-label="Next slide"
        type="button"
      >
        <Icon icon="mdi:chevron-right" className="text-2xl" />
      </button>

      <div className="rev_slider">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`rev_slide ${getSlidePositionClass(index)}`}
            onClick={() => handleCardClick(card.slug)}
          >
            <div className="swipe-card">
              <Row gutter={[24, 24]} align="middle">
                <Col xs={24} md={10}>
                  <div className="flex flex-col items-start gap-4 md:gap-7">
                    <div className="w-auto h-11">
                      <Image
                        src={card.logo}
                        alt={card.title}
                        width={100}
                        height={100}
                        className="size-full object-contain"
                        unoptimized
                      />
                    </div>
                    <h6 className="md:text-[32px] text-xl font-bold text-[#424242]">
                      {card.title}
                    </h6>
                    <p className="md:text-base text-sm text-black line-clamp-4 select-text">
                      {card.description}
                    </p>
                    <Button
                      icon={<Icon icon="formkit:arrowright" />}
                      iconPlacement="end"
                      type="default"
                      className="main-btn md:mt-3 rounded-full! md:text-lg text-base! font-semibold!"
                      onClick={(e) => handleReadMore(card.slug, e)}
                    >
                      Read the case study
                    </Button>
                  </div>
                </Col>
                <Col xs={24} md={14}>
                  <div className="md:w-[550px] w-full rounded-md! md:h-[400px] h-[250px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="size-full rounded-md! object-cover select-none"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSlider;
