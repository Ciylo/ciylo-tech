"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  testimonial: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Kristin Watson",
    company: "Split-Mart",
    testimonial: "Professional and reliable. The project was delivered on time, and the final product was exactly what we needed. Highly recommended for anyone looking for quality development work.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    testimonial: "Outstanding service and attention to detail. The team understood our vision and delivered beyond expectations. We couldn't be happier with the results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Digital Dynamics",
    testimonial: "Exceptional work quality and professionalism. They transformed our ideas into a beautiful, functional product. The collaboration was seamless throughout.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    company: "InnovateHub",
    testimonial: "The best development team we've worked with. They delivered a scalable solution that perfectly matches our business needs. Highly impressed!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 5,
    name: "David Thompson",
    company: "CloudVenture",
    testimonial: "Reliable, professional, and results-driven. Our project was completed ahead of schedule with exceptional quality. Would definitely work with them again.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    company: "NextGen Apps",
    testimonial: "Amazing experience from start to finish. The team's expertise and dedication are evident in every aspect of the project. Truly satisfied!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 7,
    name: "James Wilson",
    company: "DataSphere",
    testimonial: "Top-notch development services. They understood our complex requirements and delivered a solution that exceeded our expectations. Excellent work!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 8,
    name: "Maria Garcia",
    company: "SwiftTech",
    testimonial: "Professional team with excellent communication skills. The project was delivered on time and within budget. The quality speaks for itself.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 9,
    name: "Robert Brown",
    company: "FutureStack",
    testimonial: "Outstanding technical expertise and creative solutions. They helped us build a product that stands out in the market. Highly recommended!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
  }
];

export default function HappyClients() {
  return (
    <>
      <section className="2xl:py-16 md:py-16 py-12">
        <div className="container mx-auto px-4">
          <h5 className="text-[48px] mb-12 font-semibold text-center text-[#000000] leading-none">
            Hear from Our{" "}
            <span className="text-[#00C9A7] font-bold">Happy Clients</span>.
          </h5>
          {/* --------------------- */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 3.3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="happy-clients-swiper"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E0E0E0] h-full flex flex-col items-center text-center hover:shadow-[0px_4px_60px_0px_#04060f14] transition-all duration-300">
                  {/* Profile Picture */}
                  <div className="mb-4">
                    <div className="relative w-14 h-14 md:w-14 md:h-14 rounded-full overflow-hidden mx-auto">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="object-cover size-full"
                        unoptimized
                      />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h6 className="text-[#212121] text-base  font-bold mb-1">
                    {testimonial.name}
                  </h6>
                  
                  {/* Company */}
                  <h5 className="text-[#60606B] text-sm md:text-base font-semibold mb-4">
                    {testimonial.company}
                  </h5>
                  
                  {/* Testimonial */}
                  <p className="text-[#616161] text-sm md:text-base leading-relaxed grow">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
