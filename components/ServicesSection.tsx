"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";

import "swiper/css";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Civil Works, Building Construction & Maintenance",
      category: "Infrastructure & Civil",
      description:
        "Turnkey industrial foundations, building construction, concrete pouring, road cutting, asphalting, and complete structural maintenance across Saudi Arabia.",
      image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Mechanical Engineering & Industrial Piping",
      category: "Mechanical EPC",
      description:
        "High-pressure piping fabrication, spool installation, pump alignment, hydro-testing, and Saudi Aramco standard plant mechanical maintenance.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Electrical & Instrumentation Works",
      category: "Electrical Systems",
      description:
        "Substation electromechanical installation, cable pulling, switchgear assembly, calibrated instrument testing, and industrial automation support.",
      image: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Plant Turnaround & T&I Services",
      category: "Plant Maintenance",
      description:
        "Specialized maintenance on cooling towers, heat exchangers, refinery shutdowns, re-tubing, and emergency turnaround operations.",
      image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Fabrication & Erection of Heavy Structures",
      category: "Structural Fabrication",
      description:
        "Precision steel fabrication, pipe racks, industrial sheds, equipment skids, and certified on-site rigging & structural erection.",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      title: "Material Supply to Saudi Aramco",
      category: "Industrial Supply",
      description:
        "Approved vendor material sourcing, industrial valves, pipes, fittings, electrical components, and certified Aramco specification supplies.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 7,
      title: "Heavy Equipment & Modern Logistics Fleet",
      category: "Logistics Mobilization",
      description:
        "Cranes, heavy transport trucks, earthmoving machinery, portable office units, and certified multi-discipline workforce mobilization.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-16 sm:py-20 lg:py-28 font-sans border-b border-slate-200/60 overflow-hidden">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Header Row: Left Title + Right-Aligned 3-Line Content */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12 pb-12 sm:pb-14 lg:pb-16">
          {/* Left Column: Heading & Action Button */}
          <div className="shrink-0 flex flex-col items-start space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-slate-900 tracking-tight leading-snug">
              Services
            </h2>
            <LiquidButton
              text="View all services"
              href="#services"
              btnColor="#1d4ed8"
              hoverBgColor="#ffffff"
              textColor="#ffffff"
              hoverTextColor="#1d4ed8"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold"
            />
          </div>

          {/* Right Column: Pushed to Right to eliminate gap and align over cards */}
          <div className="w-full lg:max-w-[700px] xl:max-w-[760px] space-y-2.5">
            <ScrollRevealText
              text="Delivering turnkey engineering, industrial infrastructure, and specialized facility maintenance across Saudi Arabia."
              as="h3"
              className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight text-slate-900 text-justify"
            />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Backed by over 45 years of Saudi Aramco operational excellence, certified multi-discipline workforce, and stringent HSE standards powering Kingdom-wide industrial execution.
            </p>
          </div>
        </div>

        {/* Auto-scrolling Interactive Alethia-Style Service Cards Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="w-full"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="!h-auto flex">
                <div className="group relative w-full aspect-[4/5] sm:aspect-[3/4] min-h-[420px] rounded-none overflow-hidden cursor-pointer shadow-sm transition-all duration-300 border border-slate-200/80">
                  {/* Layer 1: Default Full-Bleed Image State */}
                  <div className="absolute inset-0 z-0 bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                    {/* Atmospheric Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                  </div>

                  {/* Layer 1 Content (Visible when unhovered) */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 select-none">
                    {/* Top Row: Category Tag + Round Arrow Button in Top Right */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[11px] sm:text-xs font-mono font-medium text-white/90 tracking-wider pt-2.5">
                        [{service.category.toUpperCase()}]
                      </span>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:rotate-90" />
                      </div>
                    </div>

                    {/* Bottom Row: Title */}
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Layer 2: Expanding Dark Blue Ripple Overlay (#1d4ed8) from the exact round button center */}
                  <div className="absolute inset-0 bg-[#1d4ed8] z-20 flex flex-col justify-between p-6 sm:p-8 rounded-none [clip-path:circle(20px_at_calc(100%-44px)_44px)] sm:[clip-path:circle(22px_at_calc(100%-54px)_54px)] group-hover:[clip-path:circle(160%_at_calc(100%-44px)_44px)] sm:group-hover:[clip-path:circle(160%_at_calc(100%-54px)_54px)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-none">
                    {/* Top Row: Tag + Animated Arrow */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[11px] sm:text-xs font-mono font-medium text-blue-200 tracking-wider pt-2.5">
                        [{service.category.toUpperCase()}]
                      </span>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white shrink-0">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:rotate-90" />
                      </div>
                    </div>

                    {/* Bottom Row: White Title + Expanded Description */}
                    <div className="space-y-2">
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed line-clamp-3 pt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
