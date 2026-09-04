"use client";

import React from "react";
import Image from "next/image";
import ScrollRevealText from "@/components/ScrollRevealText";
import LiquidButton from "@/components/LiquidButton";
import CountUp from "@/components/CountUp";

function CheckMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* About page                                                         */
/* ---------------------------------------------------------------- */

export default function AboutPageSection() {
  const introText =
    "Al Attaf Advanced Contracting Company is a 100% Saudi-owned enterprise headquartered in Abqaiq, built over four decades of continuous work inside the Kingdom's energy and industrial facilities.";

  const stats = [
    { end: 1978, start: 1900, label: "Founded (1398H)" },
    { end: 45, suffix: "+", label: "Years of operations" },
    { end: 5, label: "Core disciplines" },
    { end: 24, suffix: "/7", label: "Kingdom-wide support" },
  ];

  const philosophy = [
    "Create detailed schedule and resource planning to meet the client's project objective.",
    "Communicate clearly with all project stakeholders.",
    "Track project progress and fine-tune deviations.",
    "Supervise closely on the quality of work done.",
    "Complete and commission the project on time.",
    "Adhere to safety standards throughout.",
  ];

  const principles = [
    {
      title: "Our Vision",
      body: "To be the Kingdom's foremost multidisciplinary contracting partner, recognised for engineering benchmarks, sustainable infrastructure, and a direct contribution to Saudi Vision 2030.",
      tone: "muted" as const,
    },
    {
      title: "Our Mission",
      body: "To deliver turnkey civil, mechanical, electromechanical, and plant maintenance solutions with uncompromised safety, technical agility, and enduring value for Saudi Aramco and industrial partners.",
      tone: "accent" as const,
    },
    {
      title: "Our Core Values",
      body: "Integrity in every contract, certified HSE vigilance, operational transparency, and collaboration across each project phase from engineering through to final handover.",
      tone: "muted" as const,
    },
  ];

  const aramcoScope = [
    "Approved contractor under Saudi Aramco vendor # 10005728, Dhahran",
    "Civil, mechanical, electrical, and instrumentation scopes inside operating plants",
    "Turnaround and inspection (T&I) crews mobilised for shutdown windows",
    "Work permits, JSAs, and method statements issued to Aramco procedure",
    "Certified welders, operators, and supervisors with plant-specific inductions",
  ];

  const credentials = [
    { label: "Commercial registration", value: "CR # 2059000287" },
    { label: "Saudi Aramco vendor", value: "# 10005728 (Dhahran)" },
    { label: "Head office", value: "Abqaiq, Eastern Province" },
    { label: "Ownership", value: "100% Saudi-owned" },
  ];

  /* Folded top-right corner, as in the reference cards */
  const foldSize = 34;
  const cardClip = {
    clipPath: `polygon(0 0, calc(100% - ${foldSize}px) 0, 100% ${foldSize}px, 100% 100%, 0 100%)`,
  };
  const foldClip = { clipPath: "polygon(0 0, 100% 100%, 0 100%)" };

  return (
    <div className="w-full bg-white font-sans">
      {/* Introduction */}
      <section className="w-full py-20 lg:py-28">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-slate-900 leading-tight">
                  Who we are
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
                  A contracting company built inside the Kingdom&apos;s energy sector,
                  working to the standards it demands.
                </p>

                <div className="mt-8">
                  <LiquidButton
                    text="Talk to our team"
                    href="/contact"
                    btnColor="#1d4ed8"
                    hoverBgColor="#ffffffff"
                    textColor="#ffffff"
                    hoverTextColor="#1d4ed8"
                    className="px-7 py-3.5 text-sm sm:text-base font-semibold"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5 text-justify">
              <ScrollRevealText
                text={introText}
                as="h3"
                className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight text-justify"
              />

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                Formed in 1978 (1398H), AAAC commenced operations in direct partnership with{" "}
                <span className="text-blue-700 font-semibold">Saudi Aramco</span>, the
                Kingdom&apos;s premier global energy and industrial enterprise. Since then we
                have executed turnkey Civil, Mechanical, Electrical, Instrumentation, and
                Plant Maintenance (T&amp;I) projects across Aramco facilities and major
                industrial hubs throughout Saudi Arabia.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                Our work is delivered by permanent Saudi-based crews, certified equipment
                operators, and an owned fleet, which keeps mobilisation short and
                accountability with a single contractor from site preparation through
                commissioning and ongoing maintenance.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                Safety governs how we plan every scope. HSE procedures are written into method
                statements before crews mobilise, and performance is reviewed against client
                requirements for the full duration of the contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Figures */}
      <section className="w-full bg-slate-950">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="py-10 lg:py-14 lg:px-10 first:lg:pl-0">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white tabular-nums">
                  <CountUp
                    end={stat.end}
                    start={stat.start}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The owner */}
      <section className="w-full py-20 lg:py-28">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] max-w-md overflow-hidden border border-slate-200/80 bg-slate-100">
                <Image
                  src="/owner.jpg"
                  alt="Founder and Chairman of Al Attaf Advanced Contracting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <ScrollRevealText
                text="The man behind the company"
                as="h2"
                className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-tight"
              />

              <p className="mt-3 text-sm sm:text-base font-semibold text-blue-700">
                Sheikh Ali Al Attaf &middot; Founder &amp; Chairman
              </p>

              <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                The company began with one contractor, a small crew, and work inside Abqaiq at a
                time when the Eastern Province was being built out plant by plant. That first
                decade set the operating rule the company still runs on: take the scope you can
                staff properly, and finish it with your own people.
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Ownership has stayed in the family and in the Kingdom. Decisions on hiring,
                equipment, and which projects to take are made by people who have worked the
                sites themselves, which is why crews, supervisors, and fleet remain in-house
                rather than sublet from job to job.
              </p>

              <blockquote className="mt-8 border-l-2 border-blue-700 pl-6">
                <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                  We were never the largest contractor on a plant. We aimed to be the one asked
                  back for the next shutdown.
                </p>
                <footer className="mt-3 text-sm text-slate-500">
                  Founder &amp; Chairman, Al Attaf Advanced Contracting
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* History & philosophy */}
      <section className="w-full bg-slate-50 py-20 lg:py-28 border-y border-slate-200/70">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-slate-900 leading-tight">
                  History &amp; philosophy
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
                  How decades of contracting work translate into the way we run a project
                  today.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ScrollRevealText
                text="AAAC has, over the years, undertaken many challenging projects and accumulated expertise, know-how, and skills in contracting maintenance work and engineering-related work."
                as="h3"
                className="text-xl sm:text-2xl lg:text-[25px] font-bold leading-snug tracking-tight text-justify"
              />

              <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                Our objective is to give clients an{" "}
                <span className="text-blue-700 font-semibold">&ldquo;I am assured&rdquo;</span>{" "}
                experience when we are chosen to execute their projects. Our emphasis on clear
                communication and follow-through procedures ensures that client objectives stay
                the top priority in the planning and execution of all our processes.
              </p>

              <h3 className="mt-10 text-base sm:text-lg font-bold text-slate-900">
                Our project management and execution philosophy
              </h3>

              <ul className="mt-6 border-t border-slate-200">
                {philosophy.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-slate-200 py-4"
                  >
                    <span className="text-blue-700">
                      <CheckMark />
                    </span>
                    <span className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                We take pride in our delivery, so clients can always be assured that only the
                most experienced and qualified people are serving them, all the time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, mission, values */}
      <section className="w-full py-20 lg:py-28">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollRevealText
                text="Guiding principles driving turnkey excellence, safety, and sustainable industrial growth across the Kingdom."
                as="h2"
                className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-tight"
              />
              <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                These principles shape our engineering decisions, how we build our workforce,
                and the outcomes clients can expect on every contract.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                {principles.map((item) => {
                  const accent = item.tone === "accent";
                  return (
                    <div
                      key={item.title}
                      style={cardClip}
                      className={`relative p-7 lg:p-8 transition-transform duration-300 hover:-translate-y-1 ${
                        accent ? "bg-blue-50" : "bg-slate-100"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        style={{ ...foldClip, width: foldSize, height: foldSize }}
                        className={`absolute right-0 top-0 ${
                          accent ? "bg-blue-200" : "bg-slate-300"
                        }`}
                      />

                      <h3 className="text-lg font-bold tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p
                        className={`mt-5 text-sm leading-relaxed ${
                          accent ? "text-blue-900/80" : "text-slate-600"
                        }`}
                      >
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Aramco */}
      <section className="w-full bg-blue-700">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-white leading-tight">
                Working with Saudi Aramco since 1978
              </h2>
              <p className="mt-5 text-sm sm:text-base text-blue-100 leading-relaxed">
                Our first contracts were inside Aramco facilities, and that relationship shaped
                how the company operates: permits before work starts, certified people on every
                trade, and documentation that stands up to plant audits.
              </p>

              <div className="mt-8 border border-white/25 p-6">
                <p className="text-xs sm:text-sm text-blue-100">Approved vendor number</p>
                <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white tabular-nums">
                  10005728
                </p>
                <p className="mt-1 text-sm text-blue-100">Registered in Dhahran</p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-8">
              <ul className="space-y-px">
                {aramcoScope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-white/20 py-5 first:border-t first:border-white/20"
                  >
                    <span className="text-white">
                      <CheckMark />
                    </span>
                    <span className="text-sm sm:text-base text-white leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <LiquidButton
                  text="Discuss a plant scope"
                  href="/contact"
                  btnColor="rgba(255, 255, 255, 0.12)"
                  hoverBgColor="#ffffff"
                  textColor="#ffffff"
                  hoverTextColor="#1d4ed8"
                  className="px-7 py-3.5 text-sm sm:text-base font-semibold border border-white/40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    
     
    </div>
  );
}