"use client";

import React from "react";
import ScrollRevealText from "@/components/ScrollRevealText";
import CountUp from "@/components/CountUp";

export interface CrewRole {
  title: string;
  count: number;
}

export interface EquipmentItem {
  name: string;
  model: string;
  qty: number;
}

interface ResourcesSectionProps {
  heading?: string;
  intro?: string;
  crew?: CrewRole[];
  equipment?: EquipmentItem[];
  className?: string;
}

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

const defaultEquipment: EquipmentItem[] = [
  { name: "Dump truck", model: "16 cu.m", qty: 10 },
  { name: "Water tanker", model: "20,000 ltr", qty: 4 },
  { name: "Diesel tanker", model: "6,000 ltr", qty: 1 },
  { name: "Roller compactor", model: "12 ton", qty: 2 },
  { name: "Wheel loader", model: "966 E & F Cat", qty: 4 },
  { name: "Bulldozer", model: "155 D Komatsu", qty: 2 },
  { name: "Grader", model: "14G Cat", qty: 2 },
  { name: "Backhoe loader", model: "JCB", qty: 2 },
  { name: "Low bed trailer", model: "50 ton", qty: 1 },
  { name: "Hand loader", model: "2 ton", qty: 2 },
  { name: "Generator", model: "135 KVA, 60 Hz", qty: 2 },
  { name: "Excavator", model: "Komatsu PC200", qty: 3 },
  { name: "Portable office", model: "Aramco standard", qty: 4 },
  { name: "Boom truck", model: "7 tonnes, Hino", qty: 2 },
  { name: "Skid loader", model: "Cat", qty: 2 },
];

export default function ResourcesSection({
  heading = "Manpower and equipment on the books",
  intro = "Crews and machines we hold ourselves, so mobilisation does not wait on a third party.",
  crew = defaultCrew,
  equipment = defaultEquipment,
  className = "",
}: ResourcesSectionProps) {
  const totalCrew = crew.reduce((sum, role) => sum + role.count, 0);
  const totalUnits = equipment.reduce((sum, item) => sum + item.qty, 0);

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

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Site crew */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Site crew and labour
              </h3>
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-blue-700 tabular-nums">
                  <CountUp end={crew.length} duration={1.4} />
                </span>{" "}
                trades
              </p>
            </div>

            <ul className="mt-6 border-t border-slate-200">
              {crew.map((role, i) => (
                <li
                  key={role.title}
                  className="flex items-baseline justify-between gap-4 border-b border-slate-200 py-3"
                >
                  <span className="flex items-baseline gap-3 text-sm sm:text-base text-slate-700">
                    <span className="w-6 shrink-0 text-xs text-slate-400 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {role.title}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 tabular-nums">
                    <CountUp end={role.count} duration={1.6} />
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-baseline justify-between gap-4 bg-blue-700 px-6 py-5">
              <span className="text-sm sm:text-base font-semibold text-white">
                Total manpower
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white tabular-nums">
                <CountUp end={totalCrew} duration={2} />
              </span>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Equipment details
              </h3>
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-blue-700 tabular-nums">
                  <CountUp end={totalUnits} duration={1.8} />
                </span>{" "}
                units owned
              </p>
            </div>

            <div className="mt-6 overflow-x-auto border border-slate-200 bg-white">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-900">
                      Equipment
                    </th>
                    <th className="px-5 py-3 text-xs sm:text-sm font-bold text-slate-900">
                      Model
                    </th>
                    <th className="px-5 py-3 text-right text-xs sm:text-sm font-bold text-slate-900">
                      Qty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map((item) => (
                    <tr
                      key={item.name}
                      className="border-t border-slate-200 transition-colors duration-200 hover:bg-slate-50"
                    >
                      <td className="px-5 py-3 text-sm text-slate-800">{item.name}</td>
                      <td className="px-5 py-3 text-sm text-slate-500">{item.model}</td>
                      <td className="px-5 py-3 text-right text-sm font-bold text-blue-700 tabular-nums">
                        <CountUp end={item.qty} duration={1.6} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}