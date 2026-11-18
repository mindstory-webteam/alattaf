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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Header + Pillars */}
          <div className="lg:col-span-7">
            {/* Section Header */}
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Work with AAAC
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                We build more than projects — we build lasting careers grounded in mutual respect,
                continuous learning, and shared success.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-8 sm:mt-10 divide-y divide-slate-200 border-t border-slate-200">
              {pillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={idx * 100}>
                  <div className="py-6 sm:py-7 grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
                    <span className="text-sm font-bold text-blue-700 tabular-nums pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                        {pillar.content}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Application Card (top aligned with heading) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Reveal delay={150}>
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-sm">
                <div className="mb-5 pb-4 border-b border-slate-100">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Don&apos;t see your role? Apply here.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Submit your profile and CV for general consideration across all active and
                    upcoming projects.
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