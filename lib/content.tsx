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

function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.4 8 7 10 4.6-2 7-5.8 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.8-4.2" />
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
    title: "Dekor & profil",
    description:
      "Dekor, skylt, print och profilmaterial som bygger en tydlig och konsekvent fysisk närvaro.",
    detail: "Från miljögrafik till trycksaker och profilering i samma uttryck.",
    icon: FrameIcon,
  },
  {
    title: "Solfilm / skyddsfilm",
    description:
      "Funktionella filmlösningar för komfort, skydd, integritet och ett renare visuellt intryck.",
    detail: "Praktiska effekter utan att kompromissa med helheten.",
    icon: ShieldIcon,
  },
  {
    title: "Digitala verktyg & appar",
    description:
      "Webb, appar och specialbyggda verktyg som förenklar flöden, stärker kundresan och löser konkreta behov.",
    detail: "När standardlösningar inte räcker bygger vi rätt nivå för verksamheten.",
    icon: NodesIcon,
  },
] as const;
