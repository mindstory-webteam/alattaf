"use client";

import React from "react";
import ApplicationForm from "@/components/ApplicationForm";
import Reveal from "@/components/Reveal";

export default function WorkWithAAACSection() {
  const pillars = [
    {
      title: "Work-life harmony",
      content:
        "We know that peak performance starts with a fulfilling life outside the office. That’s why we prioritize sustainable hours, adaptable schedules, and the freedom to focus on what matters most to you. Whether you’re spending quality time with loved ones, exploring personal interests, or taking time to rest, we give you the flexibility to flourish both on and off the clock.",
    },
    {
      title: "Health & well-being",
      content:
        "Thriving teams are built on healthy individuals. By fostering a genuinely supportive environment and offering programs tailored to your physical, mental, and emotional health, we make sure you feel valued and recharged. When you’re at your best, your best work naturally follows.",
    },
    {
      title: "Career development",
      content:
        "We invest in your future, not just your current job description. Through hands-on mentorship, ongoing skill-building workshops, and clear pathways to leadership, we empower you to stretch your potential and innovate. Here, your personal ambition isn’t just encouraged—it’s championed every step of the way.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 font-sans">
      <div className="mx-auto w-full max-w-[1475px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Work with AAAC
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            We build more than projects — we build lasting careers grounded in mutual respect, continuous learning, and shared success.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): Clean Typography Pillars (No BG, No Borders) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 100}>
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column (5 cols): Compact Application Card */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
                <div className="mb-3.5 pb-2.5 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    Don&apos;t see your role? Apply here.
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Submit your profile and CV for general consideration across all active and upcoming projects.
                  </p>
                </div>

                <ApplicationForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
