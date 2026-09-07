"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import ScrollRevealText from "@/components/ScrollRevealText";
import CountUp from "@/components/CountUp";

import "swiper/css";

export interface CrewRole {
  title: string;
  count: number;
}

export interface EquipmentItem {
  name: string;
  model: string;
  qty: number;
  /** Optional. Without it the slide shows a neutral placeholder block. */
  image?: string;
  /** Shown in the blue overlay that opens out of the quantity box on hover. */
  description?: string;
}

interface ResourcesSectionProps {
  heading?: string;
  intro?: string;
  crew?: CrewRole[];
  equipment?: EquipmentItem[];
  className?: string;
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string };

function Svg({
  className = "h-8 w-8",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <Svg className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" />
    </Svg>
  );
}

function MachineIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 8h10v8H3zM13 11h4l4 4v1h-8" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </Svg>
  );
}

function HelmetIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 17h18v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1Z" />
      <path d="M5 17v-2a7 7 0 0 1 14 0v2" />
      <path d="M10 8.4V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.4" />
    </Svg>
  );
}

function CompassIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="4.5" r="1.5" />
      <path d="M11 6.5 6 20M13 6.5 18 20M8.7 14h6.6" />
    </Svg>
  );
}

function BoltIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Svg>
  );
}

function GearIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </Svg>
  );
}

function FlameIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3s4.5 3.6 4.5 7.5a4.5 4.5 0 0 1-9 0c0-1.6.8-3 1.8-4" />
      <path d="M12 20.5a2.2 2.2 0 0 0 2.2-2.2c0-1.6-2.2-3.3-2.2-3.3s-2.2 1.7-2.2 3.3A2.2 2.2 0 0 0 12 20.5Z" />
    </Svg>
  );
}

function WrenchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.7 3.7Z" />
    </Svg>
  );
}

function SprayIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 3h.01M7 5h.01M11 7h.01M3 7h.01M7 9h.01M3 11h.01" strokeWidth="2" />
      <rect x="15" y="4" width="4" height="4" />
      <path d="m19 8 2 2v10a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V10l2-2" />
      <path d="M13 13h8" />
    </Svg>
  );
}

function ClipboardIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </Svg>
  );
}

function PermitIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </Svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21.5s7.5-3.8 7.5-9.5V5.2L12 2.5 4.5 5.2V12c0 5.7 7.5 9.5 7.5 9.5Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

function SteeringIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6M4.6 16.5l5-2.7M19.4 16.5l-5-2.7" />
    </Svg>
  );
}

function PipeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 8h4a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h4" />
      <rect x="2" y="5.5" width="3" height="5" />
      <rect x="19" y="13.5" width="3" height="5" />
    </Svg>
  );
}

function RollerIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="3" width="14" height="5" rx="1" />
      <path d="M10 16v-2a2 2 0 0 1 2-2h7a2 2 0 0 0 2-2V6.5" />
      <rect x="8" y="16" width="4" height="5.5" rx="1" />
    </Svg>
  );
}

function BrickIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 5.5h18v4.5H3zM3 10h18v4.5H3zM3 14.5h18V19H3z" />
      <path d="M9 5.5V10M15 5.5V10M6 10v4.5M12 10v4.5M18 10v4.5M9 14.5V19M15 14.5V19" />
    </Svg>
  );
}

function RebarIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 8.5h18M3 15.5h18M8.5 3v18M15.5 3v18" />
    </Svg>
  );
}

function HammerIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14.2 3.2 20.8 9.8l-2.6 2.6-6.6-6.6z" />
      <path d="m12.6 7.8-8.4 8.4V20h3.8l8.4-8.4" />
    </Svg>
  );
}

function CrewIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M21 20a5 5 0 0 0-3.2-4.7" />
    </Svg>
  );
}

/** Picks an icon from words in the role title, with a person icon as fallback. */
function iconForRole(title: string) {
  const t = title.toLowerCase();
  if (t.includes("project")) return HelmetIcon;
  if (t.includes("civil")) return CompassIcon;
  if (t.includes("electrician")) return BoltIcon;
  if (t.includes("electrical")) return BoltIcon;
  if (t.includes("mechanical")) return GearIcon;
  if (t.includes("weld")) return FlameIcon;
  if (t.includes("fabricat")) return WrenchIcon;
  if (t.includes("blast") || t.includes("coat")) return SprayIcon;
  if (t.includes("foremen") || t.includes("foreman")) return ClipboardIcon;
  if (t.includes("permit")) return PermitIcon;
  if (t.includes("safety")) return ShieldIcon;
  if (t.includes("operator") || t.includes("equipment")) return MachineIcon;
  if (t.includes("driver")) return SteeringIcon;
  if (t.includes("plumb")) return PipeIcon;
  if (t.includes("paint")) return RollerIcon;
  if (t.includes("mason")) return BrickIcon;
  if (t.includes("steel")) return RebarIcon;
  if (t.includes("carpenter")) return HammerIcon;
  if (t.includes("engineer")) return HelmetIcon;
  return CrewIcon;
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const defaultCrew: CrewRole[] = [
  { title: "Project engineer", count: 3 },
  { title: "Civil engineer", count: 3 },
  { title: "Electrical engineer", count: 2 },
  { title: "Mechanical engineer", count: 2 },
  { title: "Welder", count: 6 },
  { title: "Fabricator", count: 8 },
  { title: "Sand blaster / coater", count: 3 },
  { title: "Industrial electrician", count: 10 },
  { title: "General foremen", count: 3 },
  { title: "Work permit receiver", count: 10 },
  { title: "Safety officer", count: 4 },
  { title: "Heavy equipment operator", count: 12 },
  { title: "Driver", count: 7 },
  { title: "Plumber", count: 4 },
  { title: "Painter", count: 4 },
  { title: "Mason", count: 20 },
  { title: "Steel fixer", count: 10 },
  { title: "Carpenter", count: 10 },
  { title: "Unskilled labour", count: 20 },
];

/* Placeholder photos — swap each one for the real machine, e.g. "/equipment/dump-truck.jpg" */
const defaultEquipment: EquipmentItem[] = [
  {
    name: "Dump truck",
    model: "16 cu.m",
    qty: 10,
    description:
      "Moves spoil and aggregate between the borrow pit, stockpile and working face without waiting on hired haulage.",
    image:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Water tanker",
    model: "20,000 ltr",
    qty: 4,
    description:
      "Dust suppression and compaction water for earthworks, haul roads and yard areas.",
    image:
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Diesel tanker",
    model: "6,000 ltr",
    qty: 1,
    description:
      "Refuels plant in the field, so machines stay on the job instead of driving out for fuel.",
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Roller compactor",
    model: "12 ton",
    qty: 2,
    description:
      "Compacts sub-base and surface layers to the density called for in the specification.",
    image:
      "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Wheel loader",
    model: "966 E & F Cat",
    qty: 4,
    description:
      "Loads trucks, shifts stockpiled material and handles general clean-up across the site.",
    image:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Bulldozer",
    model: "155 D Komatsu",
    qty: 2,
    description:
      "Bulk cut and fill, site clearing and rough levelling ahead of the grader.",
    image:
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Grader",
    model: "14G Cat",
    qty: 2,
    description:
      "Fine grading of roads, platforms and pipeline right of way to finished level.",
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Backhoe loader",
    model: "JCB",
    qty: 2,
    description:
      "Trenching, backfilling and careful digging around live services and tight corners.",
    image:
      "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Low bed trailer",
    model: "50 ton",
    qty: 1,
    description: "Shifts tracked plant between sites without tearing up the road surface.",
  },
  {
    name: "Hand loader",
    model: "2 ton",
    qty: 2,
    description: "Small lifts and material handling inside plants and tight yards.",
  },
  {
    name: "Generator",
    model: "135 KVA, 60 Hz",
    qty: 2,
    description: "Temporary power for welding sets, site lighting and portable offices.",
  },
  {
    name: "Excavator",
    model: "Komatsu PC200",
    qty: 3,
    description: "Deep excavation, pipeline trenching and foundation work.",
  },
  {
    name: "Portable office",
    model: "Aramco standard",
    qty: 4,
    description: "Site offices to Aramco standard for supervision, permits and toolbox talks.",
  },
  {
    name: "Boom truck",
    model: "7 tonnes, Hino",
    qty: 2,
    description: "Lifts and sets steel, skids and equipment out in the field.",
  },
  {
    name: "Skid loader",
    model: "Cat",
    qty: 2,
    description: "Loading, breaking and clearing where larger plant cannot reach.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function ResourcesSection({
  heading = "Manpower and equipment on the books",
  intro = "Crews and machines we hold ourselves, so mobilisation does not wait on a third party.",
  crew = defaultCrew,
  equipment = defaultEquipment,
  className = "",
}: ResourcesSectionProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const totalCrew = crew.reduce((sum, role) => sum + role.count, 0);
  const totalUnits = equipment.reduce((sum, item) => sum + item.qty, 0);
  const sortedCrew = [...crew].sort((a, b) => b.count - a.count);

  return (
    <section
      className={`w-full bg-slate-50 font-sans py-20 lg:py-28 border-y border-slate-200/70 ${className}`}
    >
      <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <ScrollRevealText
            text={heading}
            as="h2"
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-tight"
          />
          {intro && (
            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">{intro}</p>
          )}
        </div>

        {/* Equipment carousel */}
        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Equipment details
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                <span className="font-semibold text-blue-700 tabular-nums">
                  <CountUp end={totalUnits} duration={1.8} />
                </span>{" "}
                units owned and operated in-house
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                aria-label="Previous equipment"
                className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-slate-600 transition-colors duration-300 hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                aria-label="Next equipment"
                className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-slate-600 transition-colors duration-300 hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            onSwiper={setSwiper}
            loop
            speed={700}
            spaceBetween={28}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              0: { slidesPerView: 1.08, spaceBetween: 16 },
              640: { slidesPerView: 1.6, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 24 },
              1280: { slidesPerView: 2.8, spaceBetween: 28 },
              1536: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="mt-8 w-full"
          >
            {equipment.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <article className="group flex h-full flex-col border border-slate-200 bg-white">
                  {/* Image area — the quantity box opens out into a full overlay on hover */}
                  <div className="relative h-[300px] w-full overflow-hidden bg-slate-100 sm:h-[340px] lg:h-[380px]">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 62vw, (max-width: 1280px) 45vw, 36vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-300 transition-colors duration-500 group-hover:text-blue-300">
                        <MachineIcon className="h-16 w-16" />
                      </div>
                    )}

                    {/* Resting state: small blue quantity box in the corner */}
                    <span className="absolute right-0 top-0 z-10 flex min-w-[58px] items-center justify-center bg-blue-700 px-4 py-2.5 text-base font-bold text-white tabular-nums transition-opacity duration-300 group-hover:opacity-0">
                      <CountUp end={item.qty} duration={1.6} />
                    </span>

                    {/* Hover state: the same box grows from that corner to cover the image */}
                    <div
                      className="absolute inset-0 z-20 flex flex-col justify-end bg-blue-700/95 p-6 text-white
                                 [clip-path:inset(0%_0%_100%_100%)] transition-[clip-path] duration-500 ease-out
                                 group-hover:[clip-path:inset(0%_0%_0%_0%)]
                                 motion-reduce:transition-none"
                    >
                      <span className="absolute right-0 top-0 flex min-w-[58px] items-center justify-center px-4 py-2.5 text-base font-bold tabular-nums">
                        {item.qty}
                      </span>

                      <div className="translate-y-3 opacity-0 transition-all duration-500 delay-150 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100">
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                          {item.model}
                        </p>
                        <p className="mt-3 text-base leading-relaxed">
                          {item.description ??
                            `${item.qty} units of ${item.name.toLowerCase()} available for immediate deployment.`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <h4 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm sm:text-base text-slate-500">{item.model}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Site crew and labour */}
        <div className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
              Site crew and labour
            </h3>
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-blue-700 tabular-nums">
                <CountUp end={totalCrew} duration={2} />
              </span>{" "}
              workers across{" "}
              <span className="font-semibold text-blue-700 tabular-nums">
                <CountUp end={crew.length} duration={1.4} />
              </span>{" "}
              trades
            </p>
          </div>

          {/* 19 trades / 7 columns from lg up = exactly three rows */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {sortedCrew.map((role) => {
              const Icon = iconForRole(role.title);
              return (
                <div
                  key={role.title}
                  className="group relative flex items-center gap-3 border border-slate-200 bg-white px-4 py-4 transition-colors duration-300 hover:border-blue-700"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-blue-700 transition-transform duration-300 ease-out group-hover:scale-y-100"
                  />

                  <Icon className="h-7 w-7 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-blue-700" />

                  <div className="min-w-0">
                    <div className="text-xl font-extrabold leading-none text-blue-700 tabular-nums">
                      <CountUp end={role.count} duration={1.4} />
                    </div>
                    <div className="mt-1.5 text-xs font-semibold leading-tight text-slate-700">
                      {role.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}