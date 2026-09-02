"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface LiquidButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  btnColor?: string; 
  hoverBgColor?: string; 
  textColor?: string;
  hoverTextColor?: string; 
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export default function LiquidButton({
  text,
  href,
  onClick,
  className = "",
  btnColor = "#1d4ed8",
  hoverBgColor = "#ffffff",
  textColor = "#ffffff",
  hoverTextColor = "#1d4ed8",
  target,
  rel,
  type = "button",
}: LiquidButtonProps) {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const textTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const bg = bgRef.current;
    const textEl = textRef.current;

    if (!button || !bg) return;

    const onMouseEnter = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (tweenRef.current) tweenRef.current.kill();
      if (textTweenRef.current) textTweenRef.current.kill();

      gsap.set(bg, { clipPath: `circle(0% at ${x}px ${y}px)` });
      tweenRef.current = gsap.to(bg, {
        clipPath: `circle(150% at ${x}px ${y}px)`,
        duration: 0.6,
        ease: "power2.out",
      });

      if (textEl && hoverTextColor) {
        textTweenRef.current = gsap.to(textEl, {
          color: hoverTextColor,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (tweenRef.current) tweenRef.current.kill();
      if (textTweenRef.current) textTweenRef.current.kill();

      tweenRef.current = gsap.to(bg, {
        clipPath: `circle(0% at ${x}px ${y}px)`,
        duration: 0.5,
        ease: "power2.in",
      });

      if (textEl && textColor) {
        textTweenRef.current = gsap.to(textEl, {
          color: textColor,
          duration: 0.3,
          ease: "power1.in",
        });
      }
    };

    button.addEventListener("mouseenter", onMouseEnter);
    button.addEventListener("mouseleave", onMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", onMouseEnter);
      button.removeEventListener("mouseleave", onMouseLeave);
      if (tweenRef.current) tweenRef.current.kill();
      if (textTweenRef.current) textTweenRef.current.kill();
    };
  }, [hoverBgColor, hoverTextColor, textColor]);

  const content = (
    <div
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center overflow-hidden cursor-pointer rounded border border-transparent shadow-md transition-shadow duration-200 select-none ${className}`}
      style={{ backgroundColor: btnColor }}
    >
      {/* Liquid Hover Circle Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: hoverBgColor,
          clipPath: "circle(0% at 50% 50%)",
        }}
      />
      {/* Button Text */}
      <span
        ref={textRef}
        className="relative z-10 font-semibold tracking-wide transition-colors pointer-events-none whitespace-nowrap"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block p-0 bg-transparent border-0">
      {content}
    </button>
  );
}
