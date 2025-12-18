"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Client = { name: string; image: string };

const clients: Client[] = [
  { name: "neurogazer", image: "/images/neurogazer.svg" },
  { name: "Pocket Dentist", image: "/images/pocket-dentist.svg fill.svg" },
  { name: "skroote", image: "/images/skroote.svg fill.svg" },
  { name: "Tuqqi", image: "/images/tuqqi.svg fill.svg" },
  { name: "stelladental", image: "/images/2.svg fill.svg" },
  { name: "fleet nurse", image: "/images/fleet-nurse.svg" },
  { name: "Investment Evolution", image: "/images/investment-evolution.svg" },
];

export default function OurClients() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 0.5;
    let isPaused = false;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        positionRef.current += speed;

        const firstSet = scrollContainer.querySelector<HTMLElement>('[data-set="first"]');
        if (firstSet) {
          const setWidth = firstSet.offsetWidth;
          if (positionRef.current >= setWidth) {
            positionRef.current = 0;
          }
          scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="2xl:py-16 md:py-16 py-12 bg-white overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{ width: "fit-content" }}
        >
          <div
            data-set="first"
            className="flex items-center gap-12 md:gap-16 2xl:gap-20 px-4 shrink-0"
          >
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={180}
                  height={64}
                  className="h-full w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          <div
            data-set="second"
            className="flex items-center gap-12 md:gap-16 2xl:gap-20 px-4 ps-12 shrink-0"
            aria-hidden="true"
          >
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={180}
                  height={64}
                  className="h-full w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
