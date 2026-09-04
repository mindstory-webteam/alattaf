"use client";

import React from "react";
import Image from "next/image";
import LiquidCrumbLink from "@/components/LiquidCrumbLink";

export interface Crumb {
  label: string;
  href?: string; // omit on the last item — that one renders as plain text
}

interface BreadcrumbProps {
  title: string;
  description?: string;
  image?: string;
  items: Crumb[];
  /** Prepends a Home crumb pointing at "/" */
  showHome?: boolean;
  showVisionLogo?: boolean;
  className?: string;
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function Breadcrumb({
  title,
  description,
  image = "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
  items,
  showHome = true,
  showVisionLogo = false,
  className = "",
}: BreadcrumbProps) {
  const trail: Crumb[] = showHome ? [{ label: "Home", href: "/" }, ...items] : items;

  return (
    <section
      className={`relative w-full overflow-hidden bg-slate-950 font-sans ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 mx-auto flex h-[220px] max-w-7xl flex-col justify-center px-2 pt-14 sm:h-[280px] sm:px-3 lg:h-[320px] lg:px-4">
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* <span className="mt-4 block h-[3px] w-16 bg-blue-700" /> */}

        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            {description}
          </p>
        )}

        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm sm:text-base">
            {trail.map((crumb, i) => {
              const isLast = i === trail.length - 1;
              return (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-x-1">
                  {i > 0 && <Chevron />}
                  {crumb.href && !isLast ? (
                    <LiquidCrumbLink
                      text={crumb.label}
                      href={crumb.href}
                      fillColor="#1d4ed8"
                      textColor="#e2e8f0"
                      hoverTextColor="#ffffff"
                    />
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className="px-2 py-1 font-semibold text-blue-400"
                    >
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {showVisionLogo && (
        <div className="pointer-events-none absolute bottom-6 right-10 z-20 sm:right-20 xl:right-24">
          <Image
            src="/Saudi_Vision_2030_logo.svg.webp"
            alt="Saudi Vision 2030"
            width={220}
            height={150}
            className="h-12 w-auto object-contain opacity-90 brightness-0 invert drop-shadow-lg sm:h-16 lg:h-20"
          />
        </div>
      )}
    </section>
  );
}