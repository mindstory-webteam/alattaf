"use client";

import React from "react";
import Image from "next/image";
import ScrollRevealText from "@/components/ScrollRevealText";
import LiquidButton from "@/components/LiquidButton";
import CountUp from "@/components/CountUp";

/** Builds a Pexels stock URL from a photo id. */
const px = (id: number, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

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

  /* ----------------------------------------------------------------
     History media — stock photos picked to match what each block says.
     Replace with real files in /public when you have them, e.g.
       main:  "/history/plant-crew.jpg"
       wide:  "/history/site-wide.jpg"
       video: { src: "/history/site.mp4", poster: "/history/site-poster.jpg" }
     ---------------------------------------------------------------- */
  const historyMedia = {
    // "many challenging projects" — plant and heavy machinery in use
    main: px(33870733),
    video: {
      // Generic sample clip. Swap for real site footage: "/history/site.mp4"
      src: "/videos/about-1.mp4",
      poster: px(35383435, 1000), // machinery working on site
    },
    // Wide video band behind the execution-philosophy heading
    band: {
      // Swap for real site footage: "/history/philosophy-band.mp4"
      src: "/videos/video-cta-1.mp4",
      poster: px(37016212, 1800), // trucks lined up on a working site
    },
  };

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

  return (
    <div className="w-full bg-white font-sans">
      {/* Introduction */}
      <section className="w-full py-20 lg:py-28">
        <div className="w-full max-w-[1475px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-slate-900 leading-tight">
              Who we are
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
              A contracting company built inside the Kingdom&apos;s energy sector, working to
              the standards it demands.
            </p>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-slate-200/80 bg-slate-100">
                {/* Real crew photo. For a stock stand-in, use: src={px(36781726)} — a
                    worker in PPE operating plant — and switch to the <img> pattern below. */}
                <Image
                  src="/about-who-we-are.jpg"
                  alt="Al Attaf Advanced Contracting crew on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-justify">
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

              <div className="pt-3">
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

          {/* Vision, mission, values — no heading, sits inside "Who we are" */}
          <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
            {principles.map((item) => {
              const accent = item.tone === "accent";
              return (
                <div
                  key={item.title}
                  className={`pt-6 border-t-2 ${
                    accent ? "border-blue-700" : "border-slate-300"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold tracking-tight ${
                      accent ? "text-blue-700" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              );
            })}
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
          {/* Header, centered like "Who we are" */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-slate-900 leading-tight">
              History &amp; philosophy
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
              How decades of contracting work translate into the way we run a project today.
            </p>
          </div>

          {/* Photo + video on the left, narrative on the right */}
          <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative pb-16 sm:pb-20 lg:pb-24">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-200 bg-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={historyMedia.main}
                    alt="Heavy plant working on an Eastern Province site"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>

                {/* Second tile is a looping video, overlapping the photo */}
                <div className="absolute bottom-0 right-0 w-[58%] sm:w-[52%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-[6px] border-slate-50 bg-slate-800">
                    <video
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      src={historyMedia.video.src}
                      poster={historyMedia.video.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Site work in progress"
                    />

                    {/* Small label so the tile reads as footage, not a still */}
                    <span className="absolute left-3 top-3 flex items-center gap-2 bg-blue-700/90 px-2.5 py-1.5 text-[11px] font-semibold text-white">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping bg-white opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 bg-white" />
                      </span>
                      On site
                    </span>
                  </div>
                </div>

                {/* Founding year, anchored to the main photo */}
                <div className="absolute left-0 bottom-6 sm:bottom-8 bg-blue-700 px-6 py-5 text-white">
                  <p className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums leading-none">
                    <CountUp end={1978} start={1900} duration={2} />
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-snug">
                    First contract inside
                    <br />
                    an Aramco facility
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
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

              <blockquote className="mt-8 border-l-2 border-blue-700 pl-6">
                <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                  We take pride in our delivery, so clients can always be assured that only the
                  most experienced and qualified people are serving them, all the time.
                </p>
              </blockquote>
            </div>
          </div>

          {/* Philosophy: numbered steps as cards, under a site video band */}
          <div className="mt-16 lg:mt-24">
            <div className="relative h-[260px] w-full overflow-hidden bg-slate-900 sm:h-[320px] lg:h-[380px]">
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={historyMedia.band.src}
                poster={historyMedia.band.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Site work in progress"
              />

              {/* Darkened from the left so the copy stays readable over any footage */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/45" />

              <div className="absolute inset-0 flex items-center">
                <div className="px-6 sm:px-10 lg:px-14 max-w-2xl">
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-tight">
                    Our project management and execution philosophy
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    Six steps that every scope passes through, from the first schedule to
                    handover.
                  </p>
                </div>
              </div>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
              {philosophy.map((item, idx) => (
                <li
                  key={item}
                  className="group relative flex flex-col bg-white p-7 lg:p-8 transition-colors duration-300 hover:bg-slate-50"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-blue-700 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />

                  <span className="text-2xl font-extrabold tracking-tight text-blue-700 tabular-nums leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
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