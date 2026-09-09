"use client";

import React, {useEffect, useRef, useState} from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Delay in ms — use for staggering grids of cards */
  delay?: number;
  /** Distance in px the element travels upward as it appears */
  y?: number;
  /** Duration in ms */
  duration?: number;
  className?: string;
  /** Wrapper element, defaults to a div */
  as?: "div" | "li" | "article" | "section" | "span";
}

/**
 * Fades + slides its children in the first time they scroll into view.
 * Honours prefers-reduced-motion by rendering the content immediately.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 700,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.12, rootMargin: "0px 0px -60px 0px"}
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}