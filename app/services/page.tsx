// app/services/page.tsx

import React from "react";
import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight, CheckCircle2, Phone} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import {
  serviceCategories,
  getServicesByCategory,
  services,
} from "@/app/data/services";

export const metadata: Metadata = {
  title: "Our Services | Al Attaf Advanced Contracting Company",
  description:
    "Civil works, fabrication, electrical and instrumentation, mechanical works, material supply, manpower and specialised industrial services across Saudi Arabia.",
  alternates: {canonical: "/services"},
};

const whyPoints = [
  "Approved vendor experience with major operators",
  "Certified welders, riggers and operators",
  "Documented QA/QC and handover packages",
  "Fast mobilisation for shutdowns and turnarounds",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        title="Our Services"
        description="Construction, engineering, industrial supply and specialised services delivered to plant standards across the Kingdom."
        image="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
        items={[{label: "Services"}]}
        showVisionLogo
      />

      {/* ---------------------------------------------------------- */}
      {/* Intro                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                What we do
              </span>
            </Reveal>

            <ScrollRevealText
              text="One contractor for the civil, mechanical, electrical and supply scope"
              as="h2"
              className="mt-3 text-3xl sm:text-4xl font-bold leading-tight tracking-tight"
            />

            <ScrollRevealText
              text="Al Attaf Advanced Contracting Company delivers multi-discipline packages for industrial, commercial and municipal clients. Our crews work inside live plants and on greenfield sites, under the same permit systems, safety standards and inspection regimes our clients apply to their own teams."
              as="p"
              className="mt-5 text-base leading-relaxed"
              fromRgb={[203, 213, 225]}
              toRgb={[71, 85, 105]}
            />
          </div>

          <Reveal delay={120} className="lg:col-span-5 w-full">
            <div className="border border-slate-200 p-6 sm:p-8">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Why clients keep us on
              </p>
              <ul className="mt-5 space-y-3">
                {whyPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-sky-600" />
                    <span className="text-sm text-slate-700 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Service groups                                              */}
      {/* ---------------------------------------------------------- */}
      {serviceCategories.map((category, index) => {
        const categoryServices = getServicesByCategory(category.id);

        return (
          <section
            key={category.id}
            className={`px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <div className="max-w-3xl">
              <Reveal>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Reveal>

              <ScrollRevealText
                text={category.label}
                as="h2"
                className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight"
              />

              <ScrollRevealText
                text={category.description}
                as="p"
                className="mt-4 text-sm sm:text-base leading-relaxed"
                fromRgb={[203, 213, 225]}
                toRgb={[71, 85, 105]}
              />
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {categoryServices.map((service, cardIndex) => (
                <Reveal key={service.slug} delay={(cardIndex % 3) * 120}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col h-full bg-white border border-slate-200 hover:border-sky-500 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                        {service.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600">
                        Read more
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      {/* ---------------------------------------------------------- */}
      {/* Closing band                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 bg-slate-900">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <ScrollRevealText
              text="Have a scope in mind? Send us the drawings."
              as="h2"
              className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight"
              fromRgb={[71, 85, 105]}
              toRgb={[255, 255, 255]}
            />

            <Reveal delay={100}>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                We review the specification, walk the site where needed, and
                come back with a priced, schedulable proposal — across all{" "}
                {services.length} of our service lines.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <LiquidButton
                text="Get a Quote"
                href="/#contact"
                btnColor="#1d4ed8"
                hoverBgColor="#ffffff"
                textColor="#ffffff"
                hoverTextColor="#1d4ed8"
                className="px-6 py-3 text-sm"
              />
              <a
                href="tel:+966135660243"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                00966 13 566 0243
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}