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
    slug: "medicare-solutions",
    logo: "/images/fireside.svg",
    title: "Fire Side Ciylo Copy",
    description:
      "Fireside Pharmacy provides a complete digital solution for managing medications, allowing patients to easily order new prescriptions, request refills, transfer prescriptions from other pharmacies and track every order in real time.",
    image: "/images/featured-images.webp",
  },
  {
    id: 2,
    slug: "acme-co",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=90",
    title: "FinTech Banking Platform",
    description:
      "A revolutionary financial technology platform that empowers users with seamless banking experiences. Features include real-time transaction monitoring, AI-powered fraud detection, instant money transfers, and comprehensive financial analytics to help users make smarter financial decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=95",
  },
  {
    id: 3,
    slug: "barone-llc",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&q=90",
    title: "AI-Powered Analytics Dashboard",
    description:
      "An intelligent business intelligence platform that transforms raw data into actionable insights. Leveraging advanced machine learning algorithms, it provides predictive analytics, automated reporting, and real-time visualization to drive data-driven decision making for modern enterprises.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=95",
  },
  {
    id: 4,
    slug: "big-kahuna-burger-ltd",
    logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop&q=90",
    title: "Big Kahuna Burger Ltd.",
    description:
      "A revolutionary financial technology platform that empowers users with seamless banking experiences. Features include real-time transaction monitoring, AI-powered fraud detection, instant money transfers, and comprehensive financial analytics to help users make smarter financial decisions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&q=95",
  },
  {
    id: 5,
    slug: "biffco-enterprises-ltd",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&q=90",
    title: "Biffco Enterprises Ltd.",
    description:
      "An intelligent business intelligence platform that transforms raw data into actionable insights. Leveraging advanced machine learning algorithms, it provides predictive analytics, automated reporting, and real-time visualization to drive data-driven decision making for modern enterprises.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    slug: "binford-ltd",
    logo: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "Binford Ltd.",
    description:
      "Binford Ltd. is a leading energy solutions provider specializing in renewable energy technologies and smart grid management. Our comprehensive platform enables energy companies to optimize their operations, reduce costs, and improve sustainability through advanced analytics and automation.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 7,
    slug: "pharmatech-innovations",
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "PharmaTech Innovations",
    description:
      "An advanced clinical trial management system that accelerates drug development processes. The platform enables researchers to manage patient data, monitor trial progress, analyze results in real-time, and maintain regulatory compliance throughout the entire drug development lifecycle.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 8,
    slug: "healthbridge-pharmaceuticals",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "HealthBridge Pharmaceuticals",
    description:
      "A revolutionary telemedicine platform connecting patients with licensed pharmacists for virtual consultations. Features include prescription management, medication adherence tracking, automated refill reminders, and personalized health recommendations based on patient history and current medications.",
    image: "/images/imagePharmaceuticals.png",
  },
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
      className="swipe-container 2xl:min-h-[520px] md:min-h-[500px] 2xl:px-0 md:px-16 px-6 min-h-[550px] relative"
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
              <Row gutter={[24,24]} align="middle">
                <Col md={10}>
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
                <Col md={14}>
                  <div className="w-auto rounded-md! md:h-[338px] h-[200px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1200}
                      height={800}
                      className="size-full rounded-md! select-none"
                      quality={95}
                      unoptimized
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
