"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";

import "swiper/css";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ongoing" | "completed">("all");

  const headingText =
    "Crafting the Future, Honoring the Past. Our portfolio is a testament to our exceptional skills and proficiency in handling complex challenges, consistently delivering outstanding turnkey results across Saudi Arabia.";

  const allProjects = [
    {
      id: 1,
      title: "Aramco Gas Plant Infrastructure",
      client: "Saudi Aramco",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Abqaiq, Eastern Province",
      category: "Civil & Mechanical Works",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Jubail Petrochemical Piping & Erection",
      client: "SABIC Affiliates",
      status: "ongoing",
      statusLabel: "Under Construction",
      location: "Jubail Industrial City",
      category: "Mechanical & Piping EPC",
      image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Substation Electromechanical Systems",
      client: "Saudi Electricity Company (SEC)",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Dhahran & Dammam",
      category: "Electrical & Instrumentation",
      image: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Industrial Logistics & Heavy Fleet Mobilization",
      client: "Saudi Aramco Vendor Operations",
      status: "ongoing",
      statusLabel: "Under Execution",
      location: "Kingdom-wide Delivery",
      category: "Logistics & Fleet Transport",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Plant Turnaround & T&I Cooling Towers",
      client: "Industrial Enterprise",
      status: "completed",
      statusLabel: "Completed Project",
      location: "Ras Tanura",
      category: "Plant Maintenance & T&I",
      image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeFilter);

  return (
    <section id="projects" className="w-full bg-[#fafafa] py-20 lg:py-28 font-sans border-b border-slate-200/60 overflow-hidden">
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Header Row: Title on Left + Description and Filters on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-14 lg:pb-16">
          {/* Left Column: Title & Action Button */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-slate-900 tracking-tight leading-snug">
              Our Projects
            </h2>
            <LiquidButton
              text="Download Brochure (PDF)"
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              btnColor="#1d4ed8"
              hoverBgColor="#ffffff"
              textColor="#ffffff"
              hoverTextColor="#1d4ed8"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold"
            />
          </div>

          {/* Right Column: Narrative with Word-by-Word Scroll Reveal + Action Filters */}
          <div className="lg:col-span-8 space-y-5">
            <ScrollRevealText
              text={headingText}
              as="h3"
              className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight text-justify"
            />

            {/* Filter Navigation */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-semibold">
              <button
                onClick={() => setActiveFilter("all")}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeFilter === "all"
                    ? "text-blue-700 font-bold underline underline-offset-4"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>All Projects</span>
                <ChevronRight className="w-4 h-4 text-blue-700" />
              </button>

              <button
                onClick={() => setActiveFilter("ongoing")}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeFilter === "ongoing"
                    ? "text-blue-700 font-bold underline underline-offset-4"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>Ongoing Projects</span>
                <ChevronRight className="w-4 h-4 text-blue-700" />
              </button>

              <button
                onClick={() => setActiveFilter("completed")}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeFilter === "completed"
                    ? "text-blue-700 font-bold underline underline-offset-4"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>Completed Projects</span>
                <ChevronRight className="w-4 h-4 text-blue-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-scrolling Project Cards Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
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
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id} className="!h-auto flex">
                <div className="relative flex flex-col justify-between w-full bg-white border border-slate-200/80 rounded-none overflow-hidden shadow-sm h-full">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[16/10] shrink-0 overflow-hidden bg-slate-100 rounded-none">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2 flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {project.category}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2 min-h-[48px] sm:min-h-[56px] flex items-start">
                        {project.title}
                      </h4>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-auto">
                      <div>
                        <span className="font-semibold text-slate-700 block">Client:</span>
                        <span>{project.client}</span>
                      </div>

                      <div className="text-right">
                        <span className="font-semibold text-slate-700 block">Location:</span>
                        <span>{project.location}</span>
                      </div>
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
