// app/services/[slug]/page.tsx

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import LiquidButton from "@/components/LiquidButton";
import {
  services,
  getServiceBySlug,
  getAdjacentServices,
  serviceCategories,
} from "@/app/data/services";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

/**
 * Next.js 15 passes `params` as a Promise.
 * If your project is on Next.js 14, change the type to
 * `{ params: { slug: string } }` and drop the `await`.
 */
type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

/* Pre-render every service at build time */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Al Attaf Advanced Contracting" };
  }

  return {
    title: `${service.title} | Al Attaf Advanced Contracting Company`,
    description: service.excerpt,
    openGraph: {
      title: service.title,
      description: service.excerpt,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const category = serviceCategories.find((c) => c.id === service.category);
  const { previous, next } = getAdjacentServices(service.slug);

  return (
    <main className="bg-white">
      <Breadcrumb
        title={service.title}
        description={service.excerpt}
        image={service.heroImage}
        items={[{ label: "Services", href: "/services" }, { label: service.title }]}
        showVisionLogo
      />

      <section className="px-6 sm:px-12 lg:px-16 xl:px-24 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* ------------------------------------------------------ */}
          {/* Main content                                            */}
          {/* ------------------------------------------------------ */}
          <article className="lg:col-span-8">
            {category && (
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                {category.label}
              </span>
            )}

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              {service.title}
            </h1>

            <p className="mt-6 text-base text-slate-600 leading-relaxed">
              {service.intro}
            </p>

            {/* Feature image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[420px] mt-8 bg-slate-100 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 border border-slate-200 p-4"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-sky-600" />
                  <span className="text-sm font-medium text-slate-700 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Content sections */}
            <div className="mt-12 space-y-10">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Capabilities */}
            <div className="mt-12 border-t border-slate-200 pt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Capabilities
              </h2>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-sky-600" />
                    <span className="leading-snug">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prev / next */}
            <nav className="mt-14 border-t border-slate-200 pt-8 flex flex-col sm:flex-row gap-6 sm:gap-4 sm:items-center sm:justify-between">
              {previous && (
                <Link
                  href={`/services/${previous.slug}`}
                  className="group flex items-start gap-3 max-w-xs"
                >
                  <ArrowLeft className="w-4 h-4 mt-1 shrink-0 text-sky-600 transition-transform group-hover:-translate-x-1" />
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
                  <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-sky-600 transition-transform group-hover:translate-x-1 sm:order-2" />
                </Link>
              )}
            </nav>
          </article>

          {/* ------------------------------------------------------ */}
          {/* Sidebar                                                 */}
          {/* ------------------------------------------------------ */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* All services */}
            <div className="border border-slate-200">
              <div className="px-5 py-4 border-b border-slate-200">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  All Services
                </h2>
              </div>
              <ul className="divide-y divide-slate-100">
                {services.map((item) => {
                  const isActive = item.slug === service.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className={`flex items-center justify-between gap-3 px-5 py-3.5 text-sm transition-colors ${
                          isActive
                            ? "text-sky-600 font-bold bg-sky-50"
                            : "text-slate-700 font-medium hover:text-sky-600 hover:bg-slate-50"
                        }`}
                      >
                        <span className="leading-snug">{item.navTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact card */}
            <div className="bg-slate-900 p-6 text-slate-300">
              <h2 className="text-base font-bold text-white">
                Request a proposal
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                Share the scope, drawings or the shutdown window and we&apos;ll
                come back with a priced plan.
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <a
                  href="tel:+966135660243"
                  className="flex items-center gap-3 hover:text-sky-400 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  00966 13 566 0243
                </a>
                <a
                  href="mailto:info@alattafcompany.com"
                  className="flex items-center gap-3 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@alattafcompany.com
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="leading-snug">
                    6584-Abqaiq 33261-Taif street-Al madiynah
                  </span>
                </div>
              </div>

              <div className="mt-6 [&>a]:block [&>a]:w-full [&>a>div]:w-full">
                <LiquidButton
                  text="Get a Quote"
                  href="/#contact"
                  btnColor="#1d4ed8"
                  hoverBgColor="#ffffff"
                  textColor="#ffffff"
                  hoverTextColor="#1d4ed8"
                  className="w-full py-3 text-sm font-semibold justify-center"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CtaSection/>
      <Footer/>
    </main>
  );
}