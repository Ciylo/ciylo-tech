"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Noraiz Azam",
      title: "Chief Executive Officer",
      department: "CEO",
      description:
        "Leads Ciylo's technology strategy, architecting secure, AI-native systems designed to handle sensitive healthcare data with precision, resilience, and performance.",
      image: "/images/noraiz-azam.jpeg",
      linkedin: "https://www.linkedin.com/in/noraiz-azam/",
      email: "noraiz@ciylo.tech",
    },
    {
      id: 2,
      name: "Tosin Omolewu",
      title: "Chief Product Officer",
      department: "CPO",
      description:
        "Led by Chief Product Officer Tosin Omolewu, a Fortune 10 product executive with over two decades of experience driving large-scale platform transformation across Amazon, Microsoft, Comcast, and healthcare, Ciylo applies enterprise-grade product strategy and operational discipline to modern clinical systems.",
      image: "/images/Tosin.jpeg",
      email: "tosin@ciylo.tech",
       linkedin: "https://www.linkedin.com/in/tosin-omolewu/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center md:mb-16 mb-8">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#00C9A7] text-white mb-4">
              Leadership Team
            </span>
          </div>
          <h1 className="md:text-4xl text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 md:mb-6 mb-4 tracking-tight">
            Meet Our Leaders
          </h1>
          <p className="md:text-xl text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ciylo is building <b>AI-enabled</b> health technology platforms that
            simplify complex clinical and pharmacy operations. Our leadership
            team combines Fortune 10 product discipline with deep healthcare
            execution, ensuring every solution is secure, compliant, and built
            for real-world scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C9A7]/5 to-[#00C9A7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C9A7] to-[#00C9A7] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative md:size-32 size-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00C9A7] to-[#00C9A7] text-white mb-3">
                      {member.department}
                    </span>
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="md:text-lg font-medium text-[#00C9A7] mb-4">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-gray-600 md:text-base text-sm text-center leading-relaxed mb-6">
                    {member.description}
                  </p>

                  <div className="flex gap-3 pt-4 border-t border-gray-100 w-full justify-center">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#00C9A7] text-white font-medium hover:from-[#00C9A7] hover:to-[#00C9A7] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <Icon
                          icon="basil:linkedin-outline"
                          className="text-xl"
                        />
                        <span>Connect</span>
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <Icon
                          icon="basil:envelope-outline"
                          className="text-xl"
                        />
                        <span>Email</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-cyan-600/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-400/10 to-cyan-600/10 rounded-tr-full transform -translate-x-16 translate-y-16 group-hover:-translate-x-12 group-hover:translate-y-12 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
