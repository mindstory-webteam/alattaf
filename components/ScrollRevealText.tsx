"use client";

import React, { useState, useEffect, useRef, ElementType } from "react";

interface ScrollRevealTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  startViewport?: number;
  endViewport?: number;
  fromRgb?: [number, number, number];
  toRgb?: [number, number, number];
}

export default function ScrollRevealText({
  text,
  as: Component = "h2",
  className = "",
  startViewport = 0.90,
  endViewport = 0.35,
  fromRgb = [161, 161, 170],
  toRgb = [15, 23, 42],
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * startViewport;
      const end = windowHeight * endViewport;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startViewport, endViewport]);

  const [fromR, fromG, fromB] = fromRgb;
  const [toR, toG, toB] = toRgb;

  return (
    <Component ref={containerRef as any} className={className}>
      {words.map((word, i) => {
        const totalWords = words.length;
        const startThreshold = i / totalWords;
        const endThreshold = (i + 1) / totalWords;
        const wordProgress = Math.min(
          Math.max((scrollProgress - startThreshold) / (endThreshold - startThreshold), 0),
          1
        );

        const r = Math.round(fromR - wordProgress * (fromR - toR));
        const g = Math.round(fromG - wordProgress * (fromG - toG));
        const b = Math.round(fromB - wordProgress * (fromB - toB));

        return (
          <React.Fragment key={i}>
            <span
              style={{ color: `rgb(${r}, ${g}, ${b})` }}
              className="inline transition-colors duration-150 ease-out"
            >
              {word}
            </span>
            {i < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </Component>
  );
}
