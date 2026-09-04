"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CountUpProps {
  /** Final number to land on */
  end: number;
  /** Number the count starts from (useful for years, e.g. start={1900}) */
  start?: number;
  duration?: number;
  /** Text before the number, e.g. "$" */
  prefix?: string;
  /** Text after the number, e.g. "+" or "/7" */
  suffix?: string;
  decimals?: number;
  /** Thousands separators — keep false for years */
  grouping?: boolean;
  className?: string;
}

export default function CountUp({
  end,
  start = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  grouping = false,
  className = "",
}: CountUpProps) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const hasRun = useRef(false);
  const [display, setDisplay] = useState(() =>
    formatValue(start, decimals, grouping)
  );

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (hasRun.current) return;
      hasRun.current = true;

      if (reduced) {
        setDisplay(formatValue(end, decimals, grouping));
        return;
      }

      const counter = { value: start };
      tweenRef.current = gsap.to(counter, {
        value: end,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          setDisplay(formatValue(counter.value, decimals, grouping));
        },
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      tweenRef.current?.kill();
    };
  }, [end, start, duration, decimals, grouping]);

  return (
    <span ref={elRef} className={className}>
      {/* Screen readers get the final value straight away */}
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {formatValue(end, decimals, grouping)}
        {suffix}
      </span>
    </span>
  );
}

function formatValue(value: number, decimals: number, grouping: boolean) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouping,
  });
}