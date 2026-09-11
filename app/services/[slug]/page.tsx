// app/services/[slug]/page.tsx

import React from "react";
import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import { Check, CheckCircle2, Phone} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import LiquidButton from "@/components/LiquidButton";
import ScrollRevealText from "@/components/ScrollRevealText";
import Reveal from "@/components/Reveal";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import {
  services,
  serviceProcess,
  getServiceBySlug,
  getAdjacentServices,
  getRelatedServices,
  serviceCategories,
} from "@/app/data/services";

/**
 * Next.js 15 / 16 pass `params` as a Promise.
 * On Next.js 14, change the type to `{ params: { slug: string } }`
 * and drop the `await`.
 */
type ServicePageProps = {
  params: Promise<{slug: string}>;
};

/* Pre-render every service at build time */
export function generateStaticParams() {
  return services.map((service) => ({slug: service.slug}));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const {slug} = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {title: "Service Not Found | Al Attaf Advanced Contracting"};
  }

  return {
    title: `${service.title} | Al Attaf Advanced Contracting Company`,
    description: service.excerpt,
    alternates: {canonical: `/services/${service.slug}`},
    openGraph: {
      title: service.title,
      description: service.excerpt,
      images: [{url: service.heroImage}],
    },
  };
}

export default async function ServiceDetailPage({params}: ServicePageProps) {
  const {slug} = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const category = serviceCategories.find((c) => c.id === service.category);
  const {previous, next} = getAdjacentServices(service.slug);
  const relatedServices = getRelatedServices(service.slug, 3);

  /* FAQ rich-results schema */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {"@type": "Answer", text: faq.answer},
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
      />

      <Breadcrumb
        title={service.title}
        description={service.excerpt}
        image={service.heroImage}
        items={[{label: "Services", href: "/services"}, {label: service.title}]}
        showVisionLogo
      />

      {/* ============================================================ */}
      {/* 01 — Overview                                                 */}
      {/* ============================================================ */}
      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            {category && (
              <Reveal>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                  {category.label}
                </span>
              </Reveal>
            )}

            <ScrollRevealText
              text={service.title}
              as="h1"
              className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-tight"
            />


            <ScrollRevealText
              text={service.intro}
              as="p"
              className="mt-6 text-base sm:text-lg leading-relaxed"
              fromRgb={[203, 213, 225]}
              toRgb={[71, 85, 105]}
            />

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <LiquidButton
                  text="Request a Quote"
                  href="/#contact"
                  btnColor="#1d4ed8"
                  hoverBgColor="#ffffff"
                  textColor="#ffffff"
                  hoverTextColor="#1d4ed8"
                  className="px-6 py-3 text-sm"
                />
                <a
                  href="tel:+966135660243"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  00966 13 566 0243
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-6 w-full">
            <div className="relative w-full h-72 sm:h-96 lg:h-[460px] bg-slate-100 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* Highlights strip */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {service.highlights.map((highlight, index) => (
            <Reveal
              key={highlight}
              delay={index * 90}
              className="bg-white p-6 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-sky-600" />
              <span className="text-sm font-medium text-slate-800 leading-snug">
                {highlight}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 — What the service covers                                  */}
      {/* ============================================================ */}
      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              What this service covers
            </span>
          </Reveal>

          <ScrollRevealText
            text="How we deliver the scope"
            as="h2"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight"
          />
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {service.sections.map((section, index) => (
            <Reveal
              key={section.heading}
              as="article"
              delay={index * 120}
              className="bg-white border border-slate-200 p-7 sm:p-8 flex flex-col hover:border-sky-500 transition-colors duration-300"
            >
              <span className="text-3xl font-bold text-slate-200 leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900 leading-snug">
                {section.heading}
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 — Capabilities                                             */}
      {/* ============================================================ */}
      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Capabilities
              </span>
            </Reveal>

            <ScrollRevealText
              text="What we can execute under this scope"
              as="h2"
              className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight"
            />

            <Reveal delay={100}>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Anything not listed here is worth asking about — most packages
                we take on combine several of these lines under one contract.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
              {service.capabilities.map((capability, index) => (
                <Reveal
                  key={capability}
                  as="li"
                  delay={index * 70}
                  y={16}
                  className="bg-white flex items-center gap-3 px-6 py-5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-sky-50">
                    <Check className="h-3.5 w-3.5 text-sky-600" />
                  </span>
                  <span className="text-sm font-medium text-slate-800 leading-snug">
                    {capability}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 — Process                                                  */}
      {/* ============================================================ */}
      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              How we work
            </span>
          </Reveal>

          {/* Light-on-dark variant of the reveal colours */}
          <ScrollRevealText
            text="From first enquiry to signed handover"
            as="h2"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight"
            fromRgb={[71, 85, 105]}
            toRgb={[255, 255, 255]}
          />
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {serviceProcess.map((item, index) => (
            <Reveal
              key={item.step}
              delay={index * 120}
              className="border-t-2 border-sky-500 pt-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                Step {item.step}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 — FAQ                                                      */}
      {/* ============================================================ */}
      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Reveal>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                FAQ
              </span>
            </Reveal>

            <ScrollRevealText
              text="Questions we get asked about this service"
              as="h2"
              className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight"
            />

            <Reveal delay={100}>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Something specific to your site or specification? Get in touch
                and we&apos;ll answer it directly.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-8">
            <ServiceFaqAccordion faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06 — Related services                                         */}
      {/* ============================================================ */}
      {relatedServices.length > 0 && (
        <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 bg-slate-50">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                  Related services
                </span>
              </Reveal>

              <ScrollRevealText
                text="Often delivered alongside this scope"
                as="h2"
                className="mt-3 text-2xl sm:text-3xl font-bold leading-tight tracking-tight"
              />
            </div>

            <Reveal delay={100} className="shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors"
              >
                View all services
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((item, index) => (
              <Reveal key={item.slug} delay={index * 120}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate-200 hover:border-sky-500 transition-colors duration-300"
                >
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                      {item.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600">
                      Read more
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Prev / next */}
          <Reveal delay={80}>
            <nav className="mt-14 border-t border-slate-200 pt-8 flex flex-col sm:flex-row gap-6 sm:gap-4 sm:items-center sm:justify-between">
              {previous && (
                <Link
                  href={`/services/${previous.slug}`}
                  className="group flex items-start gap-3 max-w-xs"
                >
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Previous
                    </span>
                    <span className="block text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors leading-snug">
                      {previous.navTitle}
                    </span>
                  </span>
                </Link>
              )}

              {next && (
                <Link
                  href={`/services/${next.slug}`}
                  className="group flex items-start gap-3 max-w-xs sm:text-right sm:ml-auto"
                >
                  <span className="sm:order-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Next
                    </span>
                    <span className="block text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors leading-snug">
                      {next.navTitle}
                    </span>
                  </span>
                </Link>
              )}
            </nav>
          </Reveal>
        </section>
      )}

      <CtaSection />
      <Footer />
    </main>
  );
}