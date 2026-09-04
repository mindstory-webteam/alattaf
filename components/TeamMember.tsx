"use client";

import React from "react";
import Image from "next/image";
import ScrollRevealText from "@/components/ScrollRevealText";

export interface TeamMember {
  name: string;
  role: string;
  /** Optional. Without it the card shows the person's initials instead. */
  image?: string;
}

interface TeamSectionProps {
  heading?: string;
  intro?: string;
  members?: TeamMember[];
  className?: string;
}

function initialsOf(name: string) {
  return name
    .replace(/^(Eng\.|Dr\.|Mr\.|Ms\.|Sheikh)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/* Dummy data — replace names, roles, and photos with the real team. */
const defaultMembers: TeamMember[] = [
  { name: "Sheikh Ali Al Attaf", role: "Founder & Chairman" },
  { name: "Mohammed Al Attaf", role: "Managing Director" },
  { name: "Eng. Khalid Rahman", role: "Projects Manager" },
  { name: "Eng. Samir Haddad", role: "HSE & Quality Manager" },
  { name: "Faisal Al Otaibi", role: "Fleet & Logistics Manager" },
];

export default function TeamSection({
  heading = "The people running the work",
  intro = "Permanent leadership rather than a rotating list of subcontractors. These are the people accountable for what happens on your site.",
  members = defaultMembers,
  className = "",
}: TeamSectionProps) {
  return (
    <section className={`w-full bg-white font-sans py-20 lg:py-28 ${className}`}>
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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-10 xl:gap-6">
          {members.map((member) => (
            <article key={member.name} className="group flex flex-col">
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-slate-200/80 bg-slate-100">
                {member.image ? (
                  <>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-100 transition-colors duration-500 group-hover:bg-blue-50">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-400 transition-colors duration-500 group-hover:text-blue-700">
                      {initialsOf(member.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-blue-700">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}