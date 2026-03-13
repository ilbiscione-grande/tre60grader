"use client";

import { useEffect } from "react";

const SECTION_SELECTOR = "[data-snap-section]";

export function PreviewScrollController() {
  useEffect(() => {
    const shell = document.querySelector<HTMLElement>("[data-preview-shell]");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    if (
      !shell ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !desktopQuery.matches
    ) {
      return;
    }

    let locked = false;
    let touchStartY = 0;

    const getSections = () =>
      Array.from(shell.querySelectorAll<HTMLElement>(SECTION_SELECTOR)).filter(
        (section) => section.offsetParent !== null,
      );

    const getCurrentIndex = (sections: HTMLElement[]) => {
      const anchor = shell.scrollTop + shell.clientHeight * 0.28;

      let activeIndex = 0;

      sections.forEach((section, index) => {
        if (section.offsetTop <= anchor) {
          activeIndex = index;
        }
      });

      return activeIndex;
    };

    const goToSection = (direction: 1 | -1, intensity = 1) => {
      if (locked) {
        return;
      }

      const sections = getSections();

      if (sections.length < 2) {
        return;
      }

      const currentIndex = getCurrentIndex(sections);
      const step = intensity > 1 ? 2 : 1;
      const targetIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction * step));
      const target = sections[targetIndex];

      if (!target || targetIndex === currentIndex) {
        return;
      }

      locked = true;
      shell.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        locked = false;
      }, 850);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 12) {
        return;
      }

      event.preventDefault();

      const direction = event.deltaY > 0 ? 1 : -1;
      const intensity = Math.abs(event.deltaY) > 900 ? 2 : 1;
      goToSection(direction, intensity);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0]?.clientY ?? 0;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < 36) {
        return;
      }

      const direction = deltaY > 0 ? 1 : -1;
      const intensity = Math.abs(deltaY) > 240 ? 2 : 1;
      goToSection(direction, intensity);
    };

    shell.addEventListener("wheel", onWheel, { passive: false });
    shell.addEventListener("touchstart", onTouchStart, { passive: true });
    shell.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      shell.removeEventListener("wheel", onWheel);
      shell.removeEventListener("touchstart", onTouchStart);
      shell.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return null;
}
