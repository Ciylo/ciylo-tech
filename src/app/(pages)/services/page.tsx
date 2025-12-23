import OurClients from "@/components/-webComponents/OurClients";
import GetStarted from "@/components/-webComponents/GetStarted";
import { Icon } from "@iconify/react";
import { Button, Col, Row } from "antd";
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
    title: "Mobile Apps",
    description:
      "Fireside Pharmacy provides a complete digital solution for managing medications, allowing patients to easily order. new prescriptions, request refills, transfer prescriptions from other pharmacies and track every order in real time.",
    image: "/images/iPhone 15 Pro.svg",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Fireside Pharmacy provides a complete digital solution for managing medications, allowing patients to easily order. new prescriptions, request refills, transfer prescriptions from other pharmacies and track every order in real time.",
    image: "/images/Dell XPS.svg",
  },
  {
    id: 3,
    title: "Responsive sites",
    description:
      "Fireside Pharmacy provides a complete digital solution for managing medications, allowing patients to easily order. new prescriptions, request refills, transfer prescriptions from other pharmacies and track every order in real time.",
    image: "/images/fsgyded.svg",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Fireside Pharmacy provides a complete digital solution for managing medications, allowing patients to easily order. new prescriptions, request refills, transfer prescriptions from other pharmacies and track every order in real time.",
    image: "/images/Galaxy Tab S8 Ultra.svg",
  },

];
export default function ServicesPage() {
  return (
    <>
      <section>
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-15 md:py-10 py-8">
          <div className="flex flex-col 2xl:gap-14 md:gap-10 gap-6">
            <div className="flex flex-col 2xl:gap-7 md:gap-5 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
                <span className="2xl:text-xs md:text-sm text-xs font-bold text-black">Services</span>
              </div>
              <h5 className="2xl:text-[66px] md:text-5xl text-4xl font-semibold text-[#000000] leading-none">
                {" "}
                Our Comprehensive <br className="2xl:block md:block hidden" />
                <span className="text-[#00C9A7] font-bold! ">Services</span>
              </h5>
            </div>

            <div className="flex 2xl:max-w-4xl md:max-w-2xl justify-between max-w-full md:gap-0 gap-4">
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1 md:gap-2">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">200+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Projects Shipped</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#00C9A7] h-full flex flex-col gap-1 md:gap-2">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">6+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Years Running</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1 md:gap-2">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">50+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Happy Clients</span>
              </div>
            </div>

            <p className="2xl:text-2xl md:text-xl text-base 2xl:leading-relaxed md:leading-relaxed leading-normal font-light text-[#000000]">
              A software company that turns ambitious ideas into <br className="2xl:block md:block hidden" />{" "}
              scalable, user-centered digital products. <br className="2xl:block md:block hidden" /> No fluff, just
              results.
            </p>
          </div>
        </div>
      </section>
      <OurClients />

      {/* ----------------------- */}
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-12">
        <div className="container mx-auto">
          {cardData.map((card, index) => (
            <div key={index}>
              <div className="border 2xl:p-12 md:pe-2! p-6 md:mb-12 mb-8 md:rounded-3xl! rounded-lg! border-[#C0F6ED80] bg-[#FFFFFF] shadow-[0px_4px_60px_0px_#04060F14] ">
                <Row gutter={[24,24]} align="middle">
                  <Col md={12} xs={24}>
                    <div className="flex flex-col justify-between items-start 2xl:gap-7 gap-4">
                      <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#424242]">
                        {card.title}
                      </h6>
                      <p className="2xl:text-base md:text-lg text-base text-black line-clamp-4 select-text">
                        {card.description}
                      </p>
                      <Button
                        icon={<Icon icon="formkit:arrowright" />}
                        iconPlacement="end"
                        type="default"
                        className="main-btn md:mt-3  rounded-full! md:text-lg! text-base! font-semibold!"
                      >
                        Read the case study
                      </Button>
                    </div>
                  </Col>
                  <Col md={12} xs={24}>
                    <div className="w-auto 2xl:h-[550px] md:h-[400px] h-[150px] rounded-md! ">
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
        </div>
      </section>
      {/* ----------------------- */}
      <GetStarted />
    </>
  );
}
