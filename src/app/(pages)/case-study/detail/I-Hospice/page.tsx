"use client";

import React from "react";
import Image from "next/image";
import GetStarted from "@/components/-webComponents/GetStarted";

export default function CaseStudyDetailPage() {

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative py-12 md:py-20">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto px-4">
          <div className="text-[#00C9A7]">
            <h5 className="text-4xl md:text-6xl font-bold leading-none">
              I-HOSPICE
            </h5>
            <p className="uppercase tracking-[10px]">
              Introduction
            </p>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="flex md:flex-row flex-col container mx-auto py-10 gap-6 px-6 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            I-Hospice
          </h3>
          <p className="text-sm md:text-xl text-[#374151] leading-relaxed">
            Introducing I-Hospice, a comprehensive AI-powered documentation system designed to streamline hospice care operations. I-Hospice offers a suite of modules including Patient Records, Care Plans, Visit Notes, and Team Coordination, each tailored to enhance efficiency, improve patient care, and optimize clinical workflows. With its user-friendly interface and intelligent automation features, I-Hospice is the ultimate solution for modernizing hospice documentation and delivering exceptional care to patients and families.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/images/Hospice-group-1.svg"
            alt="I-HOSPICE UI"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* RELATED WORK */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#00C9A7] mb-8">
          Related Work
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">

          <div className="flex flex-col items-center gap-4">
            <Image src="/images/Related-1.svg" alt="Defigram" width={80} height={80} />
            <h3 className="text-xl font-semibold text-[#6E7885]">
              Defigram
            </h3>
            <p className="text-[#6E7885]">
              Social app for chat and stories.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image src="/images/Related-2.svg" alt="Frogbase" width={80} height={80} />
            <h3 className="text-xl font-semibold text-[#6E7885]">
              Frogbase
            </h3>
            <p className="text-[#6E7885]">
              An AI based model training platform.
            </p>
          </div>

        </div>
      </div>


      {/* LINKS */}
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-xl font-bold text-[#00C9A7] mb-6">
          Links and Credentials
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="underline text-[#6E7885]">Instagram</a>
          <a href="#" className="underline text-[#6E7885]">Dribbble</a>
          <a href="#" className="underline text-[#6E7885]">Linkedin</a>
          <a href="#" className="underline text-[#6E7885]">Github</a>
          <a href="#" className="underline text-[#6E7885]">Upwork</a>
          <a href="#" className="underline text-[#6E7885]">Figma</a>
        </div>
      </div>


      {/* CORE FEATURES */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#00C9A7] text-center mb-10">
          Core Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Real-time Notifications and Feedback
          </div>

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Interview style and voice enabled documentation
          </div>

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Improved staff satisfaction and better care for patients
          </div>

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Cloud Based Platform giving ease of access.
          </div>

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Focus on Security and Privacy
          </div>

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Avoid Scheduling Conflicts with Proactive Scheduling Algorithms
          </div>

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Patient Data Encryption and Compliance
          </div>

          <div className="bg-white text-center p-6 border-t-4 border-[#00C9A7] shadow">
            Integration in existing workflow and with EMR of your choice
          </div>

        </div>
      </div>

      {/* DETAIL SECTIONS */}

      {/* 1 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Let Nurses Choose
          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            At the start of a patient visit, nurse can choose to fill out the documentation manually or by using the AI and voice enabled interview style that reduces the documentation time to less than 10 minutes.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/Hospice-2.svg" alt="UI" width={500} height={500} className="w-full" />
        </div>
      </div>

      {/* 1.1 */}
      <div className="container mx-auto px-12 py-12 flex flex-col md:flex-row gap-10 items-center">
        <img src="/images/Hospice-group-1.svg" alt="" />
      </div>

      {/* 1.2 */}
      <div className="container mx-auto px-12 py-12 flex flex-col md:flex-row gap-10 items-center">
        <img src="/images/Hospice-group-2.svg" alt="" />
      </div>

      {/* 2 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Document Vital Signs in 10 Seconds
          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            All the vital signs that need to be recorded are shown to the nurse and the nurse can simply record a 10 seconds voice message in real time. The AI will extract and fill the relevant vital sign from the brief voice message.          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/Hospice-3.svg" alt="UI" width={500} height={500} className="w-full" />
        </div>
      </div>

      {/* 2.1 */}
      <div className="container mx-auto px-12 py-12 flex flex-col md:flex-row gap-10 items-center">
        <img src="/images/Hospice-group-3.svg" alt="" />
      </div>

      {/* 3 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Document Assessment in 2 minutes
          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            All the assessment questions that need to be answered are shown to the nurse and the nurse can simply record a 2 minutes voice message in real time. The AI will extract and fill the relevant assessment questions from the brief voice message.          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/Hospice-4.svg" alt="UI" width={500} height={500} className="w-full" />
        </div>
      </div>

      {/* 3.1 */}
      <div className="container mx-auto px-12 py-12 flex flex-col md:flex-row gap-10 items-center">
        <img src="/images/Hospice-group-4.svg" alt="" />
      </div>

      {/* 4 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Document Care Plan in 3 minutes
          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            Nurses can record a voice message to provide detailed information about the care plan they have come up with for the patient. The AI will extract and fill the relevant care plan information from the voice message. </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/Hospice-5.svg" alt="UI" width={500} height={500} className="w-full" />
        </div>
      </div>

      {/* 4.1 */}
      <div className="container mx-auto px-12 py-12 flex flex-col md:flex-row gap-10 items-center">
        <img src="/images/Hospice-group-5.svg" alt="" />
      </div>

      {/* 5 */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00C9A7]">
            Does this satisfy
            compliance requirements?
          </h3>
          <p className="text-sm md:text-xl text-[#374151]">
            Yes, the visit documentation using this tool is accurate and compliant. Moreover the documentation has low error rate and mistakes in it due to the real time AI quality assurance. The nurse also has the ability to edit any information in the visit documentation before submitting. After the visit documentation is complete, it’s synced with the EMR of your choice.          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/Hospice-6.svg" alt="UI" width={500} height={500} className="w-full" />
        </div>
      </div>

      <GetStarted />
    </>
  );
}