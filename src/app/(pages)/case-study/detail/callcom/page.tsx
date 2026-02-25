import React from "react";
import Image from "next/image";
import GetStarted from "@/components/-webComponents/GetStarted";



export default function CaseStudyDetailPage() {
  const caseStudy = {
    "id": 1,
    "slug": "callcom",
    "category": "energy",
    "title": "CALLCOM",
    "subtitle": "Introduction",
    "introduction": "Callcom is an Al powered calling platform that automates inbound and outbound phone calls using intelligent voice agents. It enables businesses to manage campaigns, handle conversations, book meetings and integrate with CRMS streamlining communication at scale.",
    "heroImage": "/images/callcom-1.svg",
    "allData": [
      {
        "title": "Dashboard",
        "img": "/images/callcom-2.svg",
        "reverse": false,
        "description": "Dashboard gives you a quick overview of total calls, minutes used, and appointments booked. It helps users monitor performance and track system usage at a glance."
      },
      {
        "title": "Campaign Configuration",
        "img": "/images/callcom-3.svg",
        "reverse": true,
        "description": "Advanced smart grid technology enables automated load balancing, demand response management, and integration of renewable energy sources. The system ensures optimal energy flow while maintaining grid stability and reliability."
      },
      {
        "title": "Agent Creation",
        "img": "/images/callcom-4.svg",
        "reverse": false,
        "description": "Callcom allows users to create AI calling agents by selecting a template and defining the agent’s name. It simplifies agent setup for inbound and outbound call handling. "
      },
      {
        "title": "Voice Management",
        "img": "/images/callcom-5.svg",
        "reverse": true,
        "description": " Callcom allows users to select and manage AI voice profiles for calling agents. It supports multiple tones and languages to create natural and personalized call experiences or you can clone your voice too. "
      },
      {
        "title": "Prospect Management  ",
        "img": "/images/callcom-6.svg",
        "reverse": false,
        "description": "Callcom manages contact lists for AI calling campaigns, allowing users to import, filter, and organize prospects. It ensures accurate targeting for inbound and outbound calls. "
      },
      {
        "title": "Phone Number Management ",
        "img": "/images/callcom-7.svg",
        "reverse": true,
        "description": "Callcom allows users to purchase or import phone numbers for AI agents to make and receive calls. It enables seamless connection with telephony providers for inbound and outbound calling. "
      },
      {
        "title": "Meeting Scheduling",
        "img": "/images/callcom-8.svg",
        "reverse": false,
        "description": "Callcom displays and manages meetings booked through AI calls using a calendar view. It helps users track appointments and availability efficiently. "
      },
      {
        "title": "Integrations",
        "img": "/images/callcom-9.svg",
        "reverse": true,
        "description": "Callcom connects the AI calling system with external tools like CRMs and calendars. It enables automated data syncing, lead management, and meeting scheduling across platforms. "
      },
      {
        "title": "Plans & Subscriptions ",
        "img": "/images/callcom-10.svg",
        "reverse": false,
        "description": "Callcom lets users choose subscription plans based on call minutes, features, and usage limits. It manages access to AI calling capabilities and system resources. "
      }
    ],
    "coreFeatures": [
      {
        "title": "Al Calling & Conversation Automation",
        "description": "Automated inbound and outbond calls with intelligent voice agents."
      },
      {
        "title": "Campaign Management",
        "description": "Define agent prompts, goals and conversation flows."
      },
      {
        "title": "Agent & Voice Control",
        "description": "Choose or clone voice personalities for calls."
      },
      {
        "title": "Prospect Management",
        "description": "Import prospects  via CRM & CSV, organize, and target prospect contact lists for AI calling campaigns. "
      },
      {
        "title": "Meeting & Appointment Tracking",
        "description": "Calendar view for scheduled meetings booked through calls."
      },
      {
        "title": "Third-Party Integrations",
        "description": "Sync with CRM tools, calendars, and other platforms. "
      }
    ],
    "relatedWork": [
      {
        "logo": "/images/Related-1.svg",
        "title": "Defigram",
        "description": "Social app for chat and stories."
      },
      {
        "logo": "/images/Related-2.svg",
        "title": "Frogbase",
        "description": "An AI based model training platform."
      }
    ],
    "links": [
      "Instagram",
      "Dribbble",
      "Linkedin",
      "Github",
      "Upwork",
      "Figma"
    ]
  };

  const {
    title,
    subtitle,
    introduction,
    heroImage,
    allData,
    coreFeatures,
    relatedWork,
    links,
  } = caseStudy;

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative py-12 md:py-20">
        {/* <div className="absolute top-0 left-0 z-0">
          <div className="w-full h-[100px] md:h-[300px] ">
            <Image
              src="/images/dna.svg"
              alt="DNA"
              width={300}
              height={300}
              className="size-full object-contain"
            />
          </div>
        </div> */}

        <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8 2xl:gap-10 max-w-4xl mx-auto px-4">
          <div className="text-[#00C9A7]">
            <h5 className="text-4xl md:text-6xl 2xl:text-7xl font-bold leading-none">
              {title}
            </h5>
            <p className="text-xs md:text-base tracking-[6px] md:tracking-[11px] uppercase">
              Introduction
            </p>
          </div>

          {/* <div>
            <p className="text-sm md:text-lg text-[#374151] leading-relaxed font-light">
              {introduction}
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex md:flex-row flex-col container mx-auto md:py-16 py-6 md:gap-6 gap-5  2xl:px-0 md:px-16 px-6 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            {subtitle}
          </h3>
          <p className="text-sm md:text-xl text-[#374151] leading-relaxed">
            {introduction}
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={heroImage}
            alt={`${title} UI`}
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="container mx-auto  py-8 md:py-16 2xl:px-0 md:px-16 px-6">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#00C9A7] text-center mb-5 md:mb-6">
          Related Work
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-center max-w-4xl mx-auto">
          {relatedWork.map((work, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 w-full md:w-1/2"
            >
              <div className="size-[60px] flex items-center justify-center">
                <Image
                  src={work.logo}
                  alt={`${work.title} Logo`}
                  width={80}
                  height={80}
                  className="size-full"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-xl  md:text-2xl font-semibold text-[#6E7885]">
                  {work.title}
                </h3>
                <p className="text-sm md:text-base text-[#6E7885] text-center">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto 2xl:px-0 md:px-16 px-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#00C9A7] text-center mb-5 md:mb-6">
          Links and Credentials
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-base md:text-xl text-[#6E7885] underline hover:text-[#00C9A7] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto container py-12 2xl:px-0 md:px-16 px-6 md:py-20">
        <h2 className="text-3xl md:text-5xl 2xl:text-[64px] font-bold text-[#00C9A7] text-center mb-12 md:mb-16">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9">
          {coreFeatures.map((feature, index) => {
            const isLast = index === coreFeatures.length - 1;
            const isOdd = coreFeatures.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`
          bg-white text-center p-6 md:p-8 border-t-4 border-[#00C9A7]
          shadow-[0px_4px_60px_0px_#04060F14]
          ${isLast && isOdd ? "md:col-span-2 md:max-w-[500px] md:mx-auto" : ""}
        `}
              >
                <h3 className="text-lg md:text-xl font-bold text-[#6E7885] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9 ">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-center p-6 md:p-8 border-t-4 border-[#00C9A7] shadow-[0px_4px_60px_0px_#04060F14]"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#6E7885] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
      <div className=" relative">
        {allData.map((item, index) => (
          <div
            key={index}
            className={`container mx-auto 2xl:px-0 md:gap-10 gap-6 md:px-16 px-4 py-12 md:py-4 flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10`}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
                {item.title}
              </h3>
              <p className="text-sm md:text-xl 2xl:max-w-xl text-[#374151] leading-relaxed ">
                {item.description}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-auto! md:h-[500px] h-[250px]">
                <Image
                  src={item.img}
                  alt={`${title} UI`}
                  width={100}
                  height={100}
                  className="size-full "
                />
              </div>
            </div>
          </div>
        ))}
        <div className="absolute top-[10%] right-0 z-[-1]">
          <div className="w-full h-[200px] md:h-[300px] ">
            <Image
              src="/images/firseide-deatilsleft-logo.svg"
              alt="DNA"
              width={300}
              height={300}
              className="size-full object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-[10%] left-0 z-[-1]">
          <div className="w-full h-[200px] md:h-[300px] ">
            <Image
              src="/images/firseide-deatilsright-logo.svg"
              alt="DNA"
              width={300}
              height={300}
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>
      <GetStarted />
    </>
  );
}
