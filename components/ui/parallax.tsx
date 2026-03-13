"use client";

import { useEffect, useState } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  offset?: number;
  className?: string;
};

export function Parallax({ children, offset = 28, className }: ParallaxProps) {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const handleScroll = () => {
      setTranslateY(window.scrollY * 0.06 * (offset / 28));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div className={className} style={{ transform: `translate3d(0, ${translateY}px, 0)` }}>
      {children}
    </div>
  );
}
