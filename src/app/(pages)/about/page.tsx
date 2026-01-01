import OurClients from "@/components/-webComponents/OurClients";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { Icon } from "@iconify/react";
import GetStarted from "@/components/-webComponents/GetStarted";
export default function AboutPage() {
  const services = [
    {
      icon: "heroicons:code-bracket",
      title: "Web Development",
      description: "Modern web apps built for scale",
    },
    {
      icon: "heroicons:device-phone-mobile",
      title: "Mobile Apps",
      description: "Native & cross-platform solutions",
    },
    {
      icon: "heroicons:server",
      title: "Custom Software",
      description: "Tailored to your business needs",
    },
    {
      icon: "mdi:palette-outline",
      title: "UI/UX Design",
      description: "Interfaces users actually love",
    },
    {
      icon: "heroicons:cloud",
      title: "SaaS Products",
      description: "From concept to launch",
    },
    {
      icon: "heroicons:wrench-screwdriver",
      title: "Support",
      description: "Ongoing maintenance & evolution",
    },
  ];

  const whyUs = [
    {
      number: "01",
      description: "Scalable architecture that grows with you",
    },
    {
      number: "02",
      description: "Fast delivery without cutting corners",
    },
    {
      number: "03",
      description: "Human-centered design, always",
    },
    {
      number: "04",
      description: "Transparent process, no surprises",
    },
    {
      number: "05",
      description: "Dedicated team that cares",
    },
    {
      number: "06",
      description: "Clean, maintainable code",
    },
  ];

  const processSteps = [
    {
      number: 1,
      label: "Discovery",
    },
    {
      number: 2,
      label: "UI/UX",
    },
    {
      number: 3,
      label: "Development",
    },
    {
      number: 4,
      label: "QA & Testing",
    },
    {
      number: 5,
      label: "Launch",
    },
    {
      number: 6,
      label: "Support",
    },
  ];

  const statistics = [
    {
      number: "200+",
      label: "Projects",
      bgColor: "bg-[#F9FAFB]",
      textColor: "text-[#000000]",
      labelColor: "text-[#4B5563]",
    },
    {
      number: "6+",
      label: "Years",
      bgColor: "bg-[#00C9A7]",
      textColor: "text-white",
      labelColor: "text-white",
    },
    {
      number: "20+",
      label: "Industries",
      bgColor: "bg-[#00C9A7]",
      textColor: "text-white",
      labelColor: "text-white",
    },
    {
      number: "50+",
      label: "Clients",
      bgColor: "bg-[#F9FAFB]",
      textColor: "text-[#000000]",
      labelColor: "text-[#4B5563]",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Quality Engineering",
      description: "We're partners invested in your success, not just vendors.",
    },
    {
      number: "02",
      title: "Innovation",
      description: "We're partners invested in your success, not just vendors.",
    },
    {
      number: "03",
      title: "User-First Design",
      description: "We're partners invested in your success, not just vendors.",
    },
    {
      number: "04",
      title: "Long-Term Partnership",
      description: "We're partners invested in your success, not just vendors.",
    },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-15 md:py-10 py-8">
          <div className="flex flex-col 2xl:gap-14 md:gap-10 gap-8">
            <div className="flex flex-col 2xl:gap-7 md:gap-5 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
                <span className="2xl:text-xs md:text-sm text-xs font-bold text-black">About Us</span>
              </div>
              <h5 className="2xl:text-[66px] md:text-[46px] text-3xl   font-semibold text-[#000000] leading-none">
                {" "}
                We Build <br className="2xl:block md:block hidden" />
                Products <br className="2xl:block md:block hidden" />
                <span className="text-[#00C9A7] font-bold! ">Digital</span>
              </h5>
            </div>

            <div className="flex 2xl:max-w-4xl justify-between  md:gap-0 gap-4 md:max-w-2xl max-w-full">
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">200+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Projects Shipped</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#00C9A7] h-full flex flex-col gap-1">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">6+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Years Running</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1">
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
      {/* ------------- */}
      <section className="2xl:py-16 md:py-16 2xl:px-0 md:px-16 px-6 py-12">
        <div className="container mx-auto ">
          <h6 className="2xl:text-[48px] md:text-3xl text-2xl font-bold text-center mb-1 text-[#000000]">
            What We Do
          </h6>
          <p className="2xl:text-base md:text-sm text-xs font-normal text-center text-[#616161] md:mb-20 mb-8">
            Six core capabilities. One goal: exceptional software.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            {services.map((service, index) => {
              // Determine border classes based on position in grid
              const isFirstRow = index < 3;
              const isLastColumn = index % 3 === 2;

              const borderClasses = [
                isFirstRow ? "md:border-b" : "",
                !isLastColumn ? "md:border-r" : "",
                "border-[#00C9A7]",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div
                  key={index}
                  className={`${borderClasses} md:shadow-none md:rounded-none rounded-lg shadow-md md:p-8 p-6 flex flex-col items-center text-center`}
                >
                  <Icon
                    icon={service.icon}
                    className="2xl:text-[60px] md:text-4xl text-2xl text-[#00c9a779] mb-4"
                  />
                  <h3 className="2xl:text-xl md:text-lg text-base font-bold text-[#000000] mb-2">
                    {service.title}
                  </h3>
                  <p className="2xl:text-sm md:text-xs text-xs text-[#616161]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className=" bg-linear-to-r from-[#C0F6ED40] md:py-0 py-8 via-[#C0F6ED73] to-[#A8E8DC] ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-0 container mx-auto 2xl:px-0 md:px-16 px-6">
          {/* Mission Column */}
          <div className=" 2xl:py-16  md:py-12 p-6 md:shadow-none shadow-md md:rounded-none rounded-lg flex flex-col">
            <div className="2xl:text-[120px] md:text-[108px] text-5xl font-extrabold text-[#00C9A726] leading-none md:mb-4 mb-2">
              M
            </div>
            <h3 className="2xl:text-2xl md:text-[30px] text-2xl font-bold text-[#000000] md:mb-4 mb-2">
              Mission
            </h3>
            <p className="2xl:text-base md:text-lg text-base text-[#374151] leading-relaxed">
              Empower businesses with software that drives real growth. <br className="2xl:block md:block hidden" />{" "}
              We cut through complexity to deliver solutions that work.
            </p>
          </div>

          {/* Vision Column */}
          <div className=" 2xl:py-16 md:py-12 2xl:px-6 md:px-16 p-6 md:shadow-[-10px_0px_10px_-5px_#04060F14] shadow-md rounded-lg flex flex-col">
            <div className="2xl:text-[120px] md:text-[108px] text-5xl font-extrabold text-[#00C9A726]! leading-none md:mb-4 mb-2">
              V
            </div>
            <h3 className="2xl:text-2xl md:text-[30px] text-2xl font-bold text-[#000000] md:mb-4 mb-2">
              Vision
            </h3>
            <p className="2xl:text-base md:text-lg text-base text-[#374151] leading-relaxed">
              Be the partner that turns ideas into products people love. <br className="2xl:block md:block hidden" />{" "}
              Build long-term relationships, not just projects.
            </p>
          </div>
        </div>
      </section>
      {/* ------------- */}
      <section className="2xl:py-[100px] relative md:py-16 py-10">
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6">
          <h6 className="2xl:text-[48px] md:text-3xl text-2xl font-bold text-center md:mb-16 mb-6 text-[#000000]">
            Why Us
          </h6>

          <div className="absolute z-[-1] top-1/2 -translate-y-1/2 right-0">
            <Image
              src="/images/whyus.svg"
              alt="Why Us"
              width={100}
              height={100}
              className="w-full! 2xl:h-[500px]! md:h-[400px]! h-[300px]! object-cover"
            />
          </div>
          {/* Why Us List */}
          {whyUs.map((item, index) => (
            <div key={index}>
              <div className="flex items-start md:gap-6 gap-4 md:py-6 py-4">
                <span className="2xl:text-[32px] md:text-[36px] text-2xl font-bold text-[#E5E7EB] leading-none md:min-w-[60px] min-w-[40px]">
                  {item.number}
                </span>
                <p className="2xl:text-base md:text-2xl text-base text-[#000000] flex-1 md:pt-2">
                  {item.description}
                </p>
              </div>
              {index < whyUs.length - 1 && (
                <div className="h-px bg-[#E5E7EB] w-full"></div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 bg-[#C0F6ED73] md:py-16 py-10">
        <div className="container mx-auto ">
          <h6 className="2xl:text-[48px] md:text-3xl text-2xl font-bold text-center md:mb-16 mb-6 text-[#000000]">
            Our Process
          </h6>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 px-4">
            {/* Horizontal line for md+ screens */}
            <div className="hidden md:block absolute top-[30px] left-4 right-4 h-[2px] bg-[#D1D5DB] z-0"></div>
            {/* Vertical line for mobile screens */}
            <div className="md:hidden absolute top-0 bottom-0 left-[34px] w-[2px] bg-[#D1D5DB] z-0"></div>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-row md:flex-col items-center md:items-center relative z-10 md:flex-1 gap-4 md:gap-0"
              >
                <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] rounded-full bg-[#00C9A7] flex items-center justify-center md:mb-4 mb-0 relative z-10 shrink-0">
                  <span className="text-white text-xl md:text-2xl font-bold">
                    {step.number}
                  </span>
                </div>

                <p className="text-sm md:text-base font-medium text-[#000000] md:text-center">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="2xl:py-[120px] 2xl:px-0 md:px-16 px-6 md:py-16 py-12">
        <div className="container mx-auto ">
          <Row gutter={[16, 24]} align="middle" justify="space-between">
            <Col md={11} xs={24}>
              <h6 className="2xl:text-[52px] md:text-3xl text-2xl font-bold  md:mb-8 mb-4 text-[#000000]">
                Numbers That <br className="2xl:block md:block hidden" /> Tell Our <br className="2xl:hidden md:hidden block" /> Story
              </h6>
              <p className="2xl:text-lg md:text-base text-sm md:mb-4 mb-2 font-normal text-[#4B5563]">
                Six years of building software for startups, scale-ups, and
                enterprises. Hundreds of projects across 20+ industries. One
                consistent outcome: products that work.
              </p>
              <p className="2xl:text-lg md:text-base text-sm font-normal text-[#4B5563]">
                From fintech to healthcare, e-commerce to education—we bring
                technical expertise and industry knowledge to every challenge.
              </p>
            </Col>
            <Col md={11} xs={24}>
              <div className="grid grid-cols-2 gap-4">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className={`${stat.bgColor} 2xl:p-8 md:p-6 p-4 flex flex-col items-center justify-center`}
                  >
                    <span
                      className={`text-3xl md:text-5xl font-bold ${stat.textColor} mb-2`}
                    >
                      {stat.number}
                    </span>
                    <p className={`text-xs font-normal ${stat.labelColor}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* ------------- */}
      <section className="2xl:py-[100px] 2xl:px-0 md:px-16 px-6 md:py-20 py-12">
        <div className="container mx-auto">
          <h6 className="2xl:text-[48px] md:text-3xl text-2xl font-bold text-center md:mb-12 mb-8 text-[#000000]">
            Our Values
          </h6>
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-[#5FF1D8] rounded-2xl p-8 flex flex-col"
              >
                <span className="text-[48px] md:text-[51px] font-normal text-[#00C9A7] leading-none mb-4">
                  {value.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-4">
                  {value.title}
                </h3>
                <p className="text-base text-[#9CA3AF] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Hero Section */}
      <section className="relative bg-[#00C9A7] 2xl:py-32 md:py-24 py-8 overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute inset-0 top-[-100px] flex items-center justify-center">
          <span className="text-[60px] md:text-[100px] 2xl:text-[128px] font-bold text-white opacity-10 select-none">
            TEAM
          </span>
        </div>

        {/* Content */}
        <div className="container mx-auto 2xl:px-0 md:px-16 px-10 relative z-10">
          <h6 className="2xl:text-4xl md:text-5xl text-3xl font-normal text-center text-white md:mb-4 mb-2">
            A Skilled Team Behind Every Project
          </h6>
          <p className="2xl:text-lg md:text-xl text-base text-center text-white max-w-3xl mx-auto leading-relaxed">
            Designers, developers, and strategists with decades of combined
            experience. We&apos;re the team you want in your corner.
          </p>
        </div>
      </section>
      {/* ------------- */}
      <section className="2xl:py-[120px] 2xl:px-0 md:px-16 px-6 relative md:py-16 py-16">
        <div className="container mx-auto 2xl:px-0 md:px-16 px-10">
          <h6 className="2xl:text-[108px] md:text-5xl text-4xl font-semibold text-center md:mb-12 mb-4 leading-none text-[#000000]">
            Let&apos;s Build <br /> Something{" "}
            <span className="text-[#00C9A7]">Great</span>
          </h6>

          <p className="2xl:text-2xl md:text-xl text-base font-normal text-center text-[#4B5563] md:mb-12 mb-8">
            Ready to turn your idea into a product people love? Let&apos;s talk.
          </p>

          <div className="absolute z-[-1] top-1/2 -translate-y-1/2 right-0">
            <Image
              src="/images/whyus.svg"
              alt="Why Us"
              width={100}
              height={100}
              className="w-full! 2xl:h-[500px]! md:h-[400px]! h-[150px]! object-cover"
            />
          </div>
          <div className="absolute z-[-1] top-1/2 -translate-y-1/2 left-0">
            <Image
              src="/images/newgrid.svg"
              alt="Why Us"
              width={100}
              height={100}
              className="w-full! 2xl:h-[500px]! md:h-[400px]! h-[150px]! object-cover"
            />
          </div>
          <div className="flex justify-center">
          <Button
          iconPlacement="end"
          icon={<Icon icon="ci:arrow-up-right-md" />}
            type="primary"
            className="bg-[#000000]! md:min-w-[258px]! min-w-[150px]! md:h-14! h-10! rounded-none! hover:bg-[#000000]/80! text-white px-8 py-4 text-[16px] font-bold!"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
}
