import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function FrameIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z" />
      <path d="M4 7.5 12 11l8-3.5" />
      <path d="M12 11v9" />
    </svg>
  );
}

function PrintIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 8V4h10v4" />
      <path d="M7 16H5a2 2 0 0 1-2-2v-3.5A2.5 2.5 0 0 1 5.5 8H18.5A2.5 2.5 0 0 1 21 10.5V14a2 2 0 0 1-2 2h-2" />
      <path d="M7 13h10v7H7z" />
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.4 8 7 10 4.6-2 7-5.8 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.8-4.2" />
    </svg>
  );
}

function DeviceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M10 19h4" />
      <path d="M12 17v2" />
    </svg>
  );
}

function NodesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.3 11 15.5 7.2" />
      <path d="M8.3 13 15.5 16.8" />
    </svg>
  );
}

export const serviceItems = [
  {
    title: "Skylt & dekor",
    description:
      "Profilering, miljögrafik och dekorlösningar som stärker närvaron i fysiska miljöer.",
    detail: "Synlighet med precision i material, montering och uttryck.",
    icon: FrameIcon,
  },
  {
    title: "Print & profil",
    description:
      "Trycksaker, profilmaterial och visuella enheter som håller ihop varumärket i vardagen.",
    detail: "Från små serier till genomarbetade profilpaket.",
    icon: PrintIcon,
  },
  {
    title: "Solfilm / skyddsfilm",
    description:
      "Funktionella filmlösningar för komfort, skydd, integritet och ett renare visuellt intryck.",
    detail: "Praktiska effekter utan att kompromissa med helheten.",
    icon: ShieldIcon,
  },
  {
    title: "Webb & appar",
    description:
      "Digitala upplevelser med tydlig struktur, modern teknik och en form som känns genomtänkt.",
    detail: "Responsivt, snabbt och byggt för faktisk användning.",
    icon: DeviceIcon,
  },
  {
    title: "Digitala verktyg / speciallösningar",
    description:
      "Interna system, kundnära funktioner och specialbyggda lösningar för specifika behov.",
    detail: "När standardverktyg inte räcker till bygger vi rätt nivå själva.",
    icon: NodesIcon,
  },
] as const;
