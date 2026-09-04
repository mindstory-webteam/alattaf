"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface LiquidCrumbLinkProps {
  text: string;
  href: string;
  className?: string;
  /** Fill that wipes in behind the text on hover */
  fillColor?: string;
  /** Resting text colour */
  textColor?: string;
  /** Text colour once the fill has covered the link */
  hoverTextColor?: string;
  /** Thin rule under the link, scales in with the fill */
  underlineColor?: string;
}

export default function LiquidCrumbLink({
  text,
  href,
  className = "",
  fillColor = "#1d4ed8",
  textColor = "#e2e8f0",
  hoverTextColor = "#ffffff",
  underlineColor = "#1d4ed8",
}: LiquidCrumbLinkProps) {
  const wrapRef = useRef<HTMLAnchorElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const fillTween = useRef<gsap.core.Tween | null>(null);
  const lineTween = useRef<gsap.core.Tween | null>(null);
  const textTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    const line = lineRef.current;
    const textEl = textRef.current;
    if (!wrap || !fill || !line) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const kill = () => {
      fillTween.current?.kill();
      lineTween.current?.kill();
      textTween.current?.kill();
    };

    // Which edge the pointer crossed — the fill follows the pointer's direction
    const sideOf = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      return e.clientX < rect.left + rect.width / 2 ? "left" : "right";
    };

    const onEnter = (e: MouseEvent) => {
      kill();
      const from = sideOf(e);
      const closed = from === "left" ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)";

      gsap.set(fill, { clipPath: closed });
      gsap.set(line, { transformOrigin: from === "left" ? "left center" : "right center" });

      if (reduced) {
        gsap.set(fill, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(line, { scaleX: 1 });
        if (textEl) gsap.set(textEl, { color: hoverTextColor });
        return;
      }

      fillTween.current = gsap.to(fill, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.45,
        ease: "power3.out",
      });

      lineTween.current = gsap.to(line, {
        scaleX: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      if (textEl) {
        textTween.current = gsap.to(textEl, {
          color: hoverTextColor,
          duration: 0.25,
          ease: "power1.out",
        });
      }
    };

    const onLeave = (e: MouseEvent) => {
      kill();
      const to = sideOf(e);
      const closed = to === "left" ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)";

      gsap.set(line, { transformOrigin: to === "left" ? "left center" : "right center" });

      if (reduced) {
        gsap.set(fill, { clipPath: closed });
        gsap.set(line, { scaleX: 0 });
        if (textEl) gsap.set(textEl, { color: textColor });
        return;
      }

      fillTween.current = gsap.to(fill, {
        clipPath: closed,
        duration: 0.4,
        ease: "power3.in",
      });

      lineTween.current = gsap.to(line, {
        scaleX: 0,
        duration: 0.35,
        ease: "power3.in",
      });

      if (textEl) {
        textTween.current = gsap.to(textEl, {
          color: textColor,
          duration: 0.25,
          ease: "power1.in",
        });
      }
    };

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      kill();
    };
  }, [fillColor, textColor, hoverTextColor]);

  return (
    <Link
      ref={wrapRef}
      href={href}
      className={`relative inline-flex items-center overflow-hidden rounded-sm px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${className}`}
    >
      {/* Wipe layer */}
      <span
        ref={fillRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ backgroundColor: fillColor, clipPath: "inset(0% 100% 0% 0%)" }}
      />
      {/* Rule that scales in from the same edge */}
      <span
        ref={lineRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-[2px] w-full origin-left scale-x-0"
        style={{ backgroundColor: underlineColor }}
      />
      <span
        ref={textRef}
        className="relative z-20 whitespace-nowrap font-medium tracking-wide"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </Link>
  );
}