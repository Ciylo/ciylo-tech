import React from "react";
import Image from "next/image";
import GetStarted from "@/components/-webComponents/GetStarted";



export default function CaseStudyDetailPage() {
  const caseStudy = {
    "id": 3,
    "slug": "verited",
    "category": "energy",
    "title": "VeritED",
    "subtitle": "Introduction",
    "introduction": "VeritEd is an online tutoring platform that connects students with qualified tutors for personalized, one-on-one learning. It provides tools for booking sessions, real-time communication, and virtual classrooms, making academic support flexible, secure, and accessible from anywhere. ",
    "heroImage": "/images/verited-1.svg",
    "allData": [
      {
        "title": "Dashboard",
        "img": "/images/verited-2.svg",
        "reverse": false,
        "description": "Centralized control hub that gives users a real-time summary of their tutoring activity. It enables users to track sessions, monitor learning progress, manage tutors, view upcoming appointments, and access key actions like session requests.  "
      },
      {
        "title": "Communication",
        "img": "/images/verited-3.svg",
        "reverse": true,
        "description": "Real time communication between students and tutors through secure in-platform messaging. It allows users to discuss lessons, share updates, coordinate schedules, and quickly join live tutoring sessions. "
      },
      {
        "title": "Booking & Scheduling",
        "img": "/images/verited-4.svg",
        "reverse": false,
        "description": "It allows users to schedule, view, and manage tutoring sessions through an integrated calendar. It helps students track upcoming appointments, plan sessions in advance, and avoid scheduling conflicts. "
      },
      {
        "title": "Classroom",
        "img": "/images/verited-5.svg",
        "reverse": true,
        "description": "BrainCert is integrated with Verited. When a class is about to start, it automatically switches to BrainCert, where the live session takes place with features like whiteboards, screen sharing, chat, and class recordings."
      }
    ],
    "coreFeatures": [
      {
        "title": "Tutor-Student Matching",
        "description": "Connects students with suitable tutors based on subject needs and availability."
      },
      {
        "title": "Virtual Classroom",
        "description": "Provides an online space for live tutoring sessions with real-time interaction."
      },
      {
        "title": "Personalized Learning",
        "description": "Offers one-on-one tutoring tailored to each student's academic goals and level."
      },
      {
        "title": "Progress & Session Management",
        "description": "Helps users track sessions, learning activity, and overall engagement."
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
