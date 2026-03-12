"use client";

import { useEffect, useState } from "react";

const sections = ["hero", "tjanster", "om", "styrkor", "process", "kontakt"];

export function SectionProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-4 xl:flex">
      <div className="progress-rail relative h-48 w-px overflow-hidden rounded-full">
        <div className="absolute inset-x-0 top-0 rounded-full bg-accent" style={{ height: `${progress}%` }} />
      </div>
      <div className="flex flex-col gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
        {sections.map((section) => (
          <a key={section} href={`#${section}`} className="hover:text-foreground">
            {section}
          </a>
        ))}
      </div>
    </div>
  );
}
